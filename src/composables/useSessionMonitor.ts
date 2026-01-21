import { ref, computed, onMounted, onUnmounted } from 'vue'
import { getSupabase } from '../lib/supabase'
import { getSessionConfig, type SessionConfig } from '../config/sessionConfig'
import { listenForAuthBroadcasts, ensureCrossSubdomainCookies, setSessionCookie, syncCookiesToLocalStorage, ACCESS_COOKIE, REFRESH_COOKIE, type AuthBroadcastEvent } from '../utils/authRedirect'

export interface SessionLossEvent {
  type: 'session_expired' | 'token_invalid' | 'network_error' | 'manual_check_failed'
  message: string
  timestamp: Date
  canRetry: boolean
}

export function useSessionMonitor(config?: Partial<SessionConfig>) {
  const isSessionValid = ref(true)
  const sessionLossEvent = ref<SessionLossEvent | null>(null)
  const isMonitoring = ref(false)
  const isFastMonitoring = ref(false)
  const lastValidSession = ref<Date | null>(null)
  const monitoringInterval = ref<NodeJS.Timeout | null>(null)
  const fastMonitoringInterval = ref<NodeJS.Timeout | null>(null)

  // Configuration
  const sessionConfig = { ...getSessionConfig(), ...config }
  const CHECK_INTERVAL = sessionConfig.normalCheckInterval
  const FAST_CHECK_INTERVAL = sessionConfig.fastCheckInterval
  const FAST_MONITORING_DURATION = sessionConfig.fastMonitoringDuration
  const MAX_RETRY_ATTEMPTS = sessionConfig.maxRetryAttempts
  const RETRY_DELAY = sessionConfig.retryDelay

  // Computed properties
  const hasSessionLoss = computed(() => !isSessionValid.value && sessionLossEvent.value !== null)
  const canRetrySession = computed(() =>
    sessionLossEvent.value?.canRetry &&
    sessionLossEvent.value?.type !== 'manual_check_failed'
  )

  // Helper function to get cookie value
  const getCookieValue = (name: string): string | null => {
    if (typeof document === 'undefined') return null
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null
    }
    return null
  }

  // Check if current session is valid with improved reliability
  // CRITICAL FIX: Attempt token refresh before declaring session expired
  const validateSession = async (): Promise<boolean> => {
    try {
      console.log('[SessionMonitor] Validating session...')

      // First, ensure cross-subdomain cookies are synchronized
      ensureCrossSubdomainCookies([ACCESS_COOKIE, REFRESH_COOKIE])

      // Check if we have cookies first
      const accessToken = getCookieValue('sb-access-token')
      const refreshToken = getCookieValue('sb-refresh-token')

      if (!accessToken || !refreshToken) {
        console.log('[SessionMonitor] No tokens found in cookies')
        return false
      }

      // Check Supabase session with retry logic for network issues
      const supabase = await getSupabase()
      let session = null
      let error = null

      // Try to get session with retry for network issues
      for (let attempt = 1; attempt <= 2; attempt++) {
        try {
          const result = await supabase.auth.getSession()
          session = result.data.session
          error = result.error
          break // Success, exit retry loop
        } catch (networkError) {
          console.warn(`[SessionMonitor] Network error on attempt ${attempt}:`, networkError)
          if (attempt === 2) {
            // On final attempt, if we still have network issues, 
            // don't trigger session loss - just return current state
            console.log('[SessionMonitor] Network issues detected, maintaining current session state')
            return isSessionValid.value
          }
          // Wait before retry
          await new Promise(resolve => setTimeout(resolve, 1000))
        }
      }

      if (error) {
        console.warn('[SessionMonitor] Error getting session:', error)
        // Don't immediately fail on session errors - they might be temporary
        // Only fail if it's a clear authentication error
        if (error.message?.includes('Invalid JWT') || error.message?.includes('JWT expired')) {
          // CRITICAL FIX: Try to refresh the session before declaring it invalid
          console.log('[SessionMonitor] JWT may be expired, attempting refresh...')
          const refreshResult = await attemptTokenRefresh(supabase)
          if (refreshResult) {
            console.log('[SessionMonitor] Token refresh successful after JWT error')
            lastValidSession.value = new Date()
            return true
          }
          return false
        }
        // For other errors, maintain current state
        return isSessionValid.value
      }

      if (!session || !session.user) {
        console.log('[SessionMonitor] No valid session found')
        return false
      }

      // Check if session is expired or close to expiry
      const now = new Date()
      const expiresAt = new Date(session.expires_at! * 1000)
      const bufferTime = 5 * 60 * 1000 // 5 minutes buffer

      if (now >= new Date(expiresAt.getTime() - bufferTime)) {
        console.log('[SessionMonitor] Session is close to expiry or expired, attempting refresh...')

        // CRITICAL FIX: Attempt to refresh the token before declaring session expired
        const refreshResult = await attemptTokenRefresh(supabase)
        if (refreshResult) {
          console.log('[SessionMonitor] Token refresh successful')
          lastValidSession.value = new Date()
          return true
        }

        console.log('[SessionMonitor] Token refresh failed, session is expired')
        return false
      }

      // Session is valid
      console.log('[SessionMonitor] Session is valid')
      lastValidSession.value = new Date()
      return true

    } catch (error) {
      console.error('[SessionMonitor] Error validating session:', error)
      // On unexpected errors, maintain current state rather than failing
      return isSessionValid.value
    }
  }

  // Attempt to refresh the token
  const attemptTokenRefresh = async (supabase: any): Promise<boolean> => {
    try {
      console.log('[SessionMonitor] Attempting token refresh...')
      const { data, error } = await supabase.auth.refreshSession()

      if (error) {
        console.warn('[SessionMonitor] Token refresh failed:', error)
        return false
      }

      if (data.session) {
        console.log('[SessionMonitor] Token refresh successful, updating cookies...')
        // Update cookies with new tokens
        setSessionCookie(ACCESS_COOKIE, data.session.access_token, 60 * 60 * 24 * 365)
        setSessionCookie(REFRESH_COOKIE, data.session.refresh_token, 60 * 60 * 24 * 365)
        syncCookiesToLocalStorage()
        return true
      }

      return false
    } catch (error) {
      console.error('[SessionMonitor] Error during token refresh:', error)
      return false
    }
  }

  // Attempt to restore session
  const restoreSession = async (): Promise<boolean> => {
    try {
      console.log('[SessionMonitor] Attempting to restore session...')

      const accessToken = getCookieValue('sb-access-token')
      const refreshToken = getCookieValue('sb-refresh-token')

      if (!accessToken || !refreshToken) {
        console.log('[SessionMonitor] No tokens available for restoration')
        return false
      }

      const supabase = await getSupabase()
      const { data, error } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken
      })

      if (error) {
        console.warn('[SessionMonitor] Error restoring session:', error)
        return false
      }

      if (data.session && data.session.user) {
        console.log('[SessionMonitor] Session restored successfully')
        lastValidSession.value = new Date()
        return true
      }

      return false

    } catch (error) {
      console.error('[SessionMonitor] Error restoring session:', error)
      return false
    }
  }

  // Handle session loss
  const handleSessionLoss = (type: SessionLossEvent['type'], message: string, canRetry: boolean = true) => {
    console.warn('[SessionMonitor] Session loss detected:', { type, message })

    isSessionValid.value = false
    sessionLossEvent.value = {
      type,
      message,
      timestamp: new Date(),
      canRetry
    }
  }

  // Retry session validation
  const retrySession = async (): Promise<boolean> => {
    console.log('[SessionMonitor] Retrying session validation...')

    for (let attempt = 1; attempt <= MAX_RETRY_ATTEMPTS; attempt++) {
      console.log(`[SessionMonitor] Retry attempt ${attempt}/${MAX_RETRY_ATTEMPTS}`)

      // Wait before retry (except first attempt)
      if (attempt > 1) {
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY))
      }

      // Try to restore session first
      const restored = await restoreSession()
      if (restored) {
        // Validate the restored session
        const isValid = await validateSession()
        if (isValid) {
          console.log('[SessionMonitor] Session restored and validated successfully')
          isSessionValid.value = true
          sessionLossEvent.value = null
          return true
        }
      }

      // If restore failed, try direct validation
      const isValid = await validateSession()
      if (isValid) {
        console.log('[SessionMonitor] Session validated successfully on retry')
        isSessionValid.value = true
        sessionLossEvent.value = null
        return true
      }
    }

    console.log('[SessionMonitor] All retry attempts failed')
    return false
  }

  // Clear session loss state
  const clearSessionLoss = () => {
    console.log('[SessionMonitor] Clearing session loss state')
    isSessionValid.value = true
    sessionLossEvent.value = null
  }

  // Start monitoring session with improved initialization
  const startMonitoring = () => {
    if (isMonitoring.value) {
      console.log('[SessionMonitor] Already monitoring, skipping start')
      return
    }

    console.log('[SessionMonitor] Starting session monitoring...')
    isMonitoring.value = true

    // Delayed initial validation to allow for proper initialization
    setTimeout(async () => {
      console.log('[SessionMonitor] Performing initial session validation...')
      const isValid = await validateSession()
      if (!isValid) {
        // Only trigger session loss if we're sure the session is actually invalid
        // and not just a temporary initialization issue
        console.log('[SessionMonitor] Initial validation failed, but waiting for confirmation...')
        // Wait a bit more and try again before showing alert
        setTimeout(async () => {
          const retryValid = await validateSession()
          if (!retryValid) {
            handleSessionLoss('session_expired', 'Your session has expired. Please log in again.', true)
          }
        }, 3000) // Wait 3 seconds before final check
      } else {
        console.log('[SessionMonitor] Initial validation successful')
      }
    }, 2000) // Wait 2 seconds before initial validation

    // Set up periodic monitoring
    monitoringInterval.value = setInterval(async () => {
      console.log('[SessionMonitor] Periodic session check...')

      const isValid = await validateSession()
      if (!isValid && isSessionValid.value) {
        // Session was valid but now it's not - but add a confirmation check
        console.log('[SessionMonitor] Session validation failed, performing confirmation check...')
        setTimeout(async () => {
          const confirmValid = await validateSession()
          if (!confirmValid) {
            handleSessionLoss('session_expired', 'Your session has expired. Please log in again.', true)
          }
        }, 2000) // Wait 2 seconds before confirming session loss
      } else if (isValid && !isSessionValid.value) {
        // Session was invalid but now it's valid (recovered)
        console.log('[SessionMonitor] Session recovered')
        clearSessionLoss()
      }
    }, CHECK_INTERVAL)
  }

  // Start fast monitoring (for immediate detection after logout) with improved reliability
  const startFastMonitoring = () => {
    if (isFastMonitoring.value) {
      console.log('[SessionMonitor] Fast monitoring already active')
      return
    }

    console.log('[SessionMonitor] Starting fast monitoring (5s intervals)...')
    isFastMonitoring.value = true

    // Clear existing fast monitoring
    if (fastMonitoringInterval.value) {
      clearInterval(fastMonitoringInterval.value)
    }

    // Set up fast monitoring with confirmation logic
    fastMonitoringInterval.value = setInterval(async () => {
      console.log('[SessionMonitor] Fast session check...')

      const isValid = await validateSession()
      if (!isValid && isSessionValid.value) {
        // Session was valid but now it's not - add confirmation
        console.log('[SessionMonitor] Fast monitoring detected potential session loss, confirming...')
        setTimeout(async () => {
          const confirmValid = await validateSession()
          if (!confirmValid) {
            handleSessionLoss('session_expired', 'Your session has expired. Please log in again.', true)
            // Stop fast monitoring once session loss is confirmed
            stopFastMonitoring()
          }
        }, 1000) // Wait 1 second for confirmation
      } else if (isValid && !isSessionValid.value) {
        // Session was invalid but now it's valid (recovered)
        console.log('[SessionMonitor] Session recovered')
        clearSessionLoss()
        stopFastMonitoring()
      }
    }, FAST_CHECK_INTERVAL)

    // Auto-stop fast monitoring after configured duration
    setTimeout(() => {
      if (isFastMonitoring.value) {
        console.log(`[SessionMonitor] Auto-stopping fast monitoring after ${FAST_MONITORING_DURATION / 1000} seconds`)
        stopFastMonitoring()
      }
    }, FAST_MONITORING_DURATION)
  }

  // Stop fast monitoring
  const stopFastMonitoring = () => {
    if (!isFastMonitoring.value) {
      return
    }

    console.log('[SessionMonitor] Stopping fast monitoring...')
    isFastMonitoring.value = false

    if (fastMonitoringInterval.value) {
      clearInterval(fastMonitoringInterval.value)
      fastMonitoringInterval.value = null
    }
  }

  // Stop monitoring session
  const stopMonitoring = () => {
    if (!isMonitoring.value) {
      return
    }

    console.log('[SessionMonitor] Stopping session monitoring...')
    isMonitoring.value = false

    if (monitoringInterval.value) {
      clearInterval(monitoringInterval.value)
      monitoringInterval.value = null
    }

    // Also stop fast monitoring
    stopFastMonitoring()
  }

  // Manual session check (for user-initiated validation)
  const checkSession = async (): Promise<boolean> => {
    console.log('[SessionMonitor] Manual session check requested')

    const isValid = await validateSession()
    if (!isValid) {
      // Try to restore first
      const restored = await restoreSession()
      if (!restored) {
        handleSessionLoss('manual_check_failed', 'Session validation failed. Please log in again.', false)
        return false
      }
    }

    return isValid
  }

  // Handle network errors with improved logic
  const handleNetworkError = () => {
    // Don't immediately trigger session loss on network errors
    // Instead, just log the issue and let the normal monitoring handle it
    console.log('[SessionMonitor] Network error detected, but not triggering immediate session loss')
    // Only trigger if we're already in a session loss state
    if (!isSessionValid.value) {
      handleSessionLoss('network_error', 'Network connection lost. Please check your internet connection and try again.', true)
    }
  }

  // Listen for network events, logout events, visibility changes, and auth broadcasts
  const setupEventListeners = () => {
    if (typeof window === 'undefined') return

    const cleanupFunctions: (() => void)[] = []

    const handleOnline = () => {
      console.log('[SessionMonitor] Network connection restored')
      // Retry session when network comes back
      if (hasSessionLoss.value && sessionLossEvent.value?.type === 'network_error') {
        setTimeout(() => retrySession(), 1000)
      }
    }

    const handleOffline = () => {
      console.log('[SessionMonitor] Network connection lost')
      handleNetworkError()
    }

    const handleLogoutDetected = (_event: CustomEvent) => {
      console.log('[SessionMonitor] Logout detected, starting fast monitoring for immediate detection')
      // Start fast monitoring to detect session loss quickly
      startFastMonitoring()
    }

    // CRITICAL FIX: Handle visibility change (for standby/resume scenarios)
    // When the page becomes visible after being hidden, validate the session
    // but don't immediately show expiry dialogs
    const handleVisibilityChange = async () => {
      if (document.visibilityState === 'visible') {
        console.log('[SessionMonitor] Page became visible, validating session...')

        // First, sync cookies from other tabs/subdomains
        ensureCrossSubdomainCookies([ACCESS_COOKIE, REFRESH_COOKIE])

        // Wait a moment for any token refresh to complete
        await new Promise(resolve => setTimeout(resolve, 500))

        // Validate the session without triggering session loss immediately
        const isValid = await validateSession()
        if (isValid) {
          console.log('[SessionMonitor] Session is still valid after visibility change')
          // If we had a session loss modal showing, clear it
          if (hasSessionLoss.value) {
            clearSessionLoss()
          }
        } else {
          console.log('[SessionMonitor] Session validation failed after visibility change, will retry...')
          // Don't immediately trigger session loss - try a few more times
          // This handles cases where the token was refreshed in another tab
          const retryValid = await validateSession()
          if (retryValid) {
            console.log('[SessionMonitor] Session recovered on retry after visibility change')
            if (hasSessionLoss.value) {
              clearSessionLoss()
            }
          }
        }
      }
    }

    // Listen for cross-subdomain auth broadcasts
    const handleAuthBroadcast = async (event: AuthBroadcastEvent) => {
      console.log('[SessionMonitor] Received auth broadcast:', event.type)

      switch (event.type) {
        case 'SIGNED_IN':
        case 'SESSION_RESTORED':
        case 'TOKEN_REFRESHED':
          // Another tab/subdomain signed in or refreshed tokens
          // Update local cookies and validate session
          if (event.accessToken && event.refreshToken) {
            console.log('[SessionMonitor] Updating local session from broadcast')
            setSessionCookie(ACCESS_COOKIE, event.accessToken, 60 * 60 * 24 * 365)
            setSessionCookie(REFRESH_COOKIE, event.refreshToken, 60 * 60 * 24 * 365)
            syncCookiesToLocalStorage()
          }

          // Validate the session
          const isValid = await validateSession()
          if (isValid) {
            console.log('[SessionMonitor] Session validated after auth broadcast')
            isSessionValid.value = true
            if (hasSessionLoss.value) {
              clearSessionLoss()
            }
          }
          break

        case 'SIGNED_OUT':
          // Another tab/subdomain signed out
          console.log('[SessionMonitor] Sign-out detected from broadcast')
          handleSessionLoss('session_expired', 'You have been signed out in another window.', false)
          break
      }
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    window.addEventListener('session-logout-detected', handleLogoutDetected as EventListener)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    cleanupFunctions.push(() => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
      window.removeEventListener('session-logout-detected', handleLogoutDetected as EventListener)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    })

    // Set up auth broadcast listener
    const cleanupBroadcast = listenForAuthBroadcasts(handleAuthBroadcast)
    cleanupFunctions.push(cleanupBroadcast)

    // Return cleanup function
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup())
    }
  }

  // Lifecycle hooks
  onMounted(() => {
    console.log('[SessionMonitor] Mounted, setting up monitoring')
    startMonitoring()
    setupEventListeners()
  })

  onUnmounted(() => {
    console.log('[SessionMonitor] Unmounted, cleaning up')
    stopMonitoring()
  })

  return {
    // State
    isSessionValid,
    sessionLossEvent,
    isMonitoring,
    isFastMonitoring,
    lastValidSession,

    // Computed
    hasSessionLoss,
    canRetrySession,

    // Methods
    validateSession,
    restoreSession,
    retrySession,
    clearSessionLoss,
    startMonitoring,
    stopMonitoring,
    startFastMonitoring,
    stopFastMonitoring,
    checkSession,
    handleNetworkError
  }
}
