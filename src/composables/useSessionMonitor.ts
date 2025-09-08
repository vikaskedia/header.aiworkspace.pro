import { ref, computed, onMounted, onUnmounted } from 'vue'
import { getSupabase } from '../lib/supabase'
import { getSessionConfig, type SessionConfig } from '../config/sessionConfig'

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

  // Check if current session is valid
  const validateSession = async (): Promise<boolean> => {
    try {
      console.log('[SessionMonitor] Validating session...')
      
      // Check if we have cookies
      const accessToken = getCookieValue('sb-access-token')
      const refreshToken = getCookieValue('sb-refresh-token')
      
      if (!accessToken || !refreshToken) {
        console.log('[SessionMonitor] No tokens found in cookies')
        return false
      }

      // Check Supabase session
      const supabase = await getSupabase()
      const { data: { session }, error } = await supabase.auth.getSession()
      
      if (error) {
        console.warn('[SessionMonitor] Error getting session:', error)
        return false
      }

      if (!session || !session.user) {
        console.log('[SessionMonitor] No valid session found')
        return false
      }

      // Check if session is expired
      const now = new Date()
      const expiresAt = new Date(session.expires_at! * 1000)
      
      if (now >= expiresAt) {
        console.log('[SessionMonitor] Session has expired')
        return false
      }

      // Session is valid
      console.log('[SessionMonitor] Session is valid')
      lastValidSession.value = new Date()
      return true
      
    } catch (error) {
      console.error('[SessionMonitor] Error validating session:', error)
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

  // Start monitoring session
  const startMonitoring = () => {
    if (isMonitoring.value) {
      console.log('[SessionMonitor] Already monitoring, skipping start')
      return
    }
    
    console.log('[SessionMonitor] Starting session monitoring...')
    isMonitoring.value = true
    
    // Initial validation
    validateSession().then(isValid => {
      if (!isValid) {
        handleSessionLoss('session_expired', 'Your session has expired. Please log in again.', true)
      }
    })
    
    // Set up periodic monitoring
    monitoringInterval.value = setInterval(async () => {
      console.log('[SessionMonitor] Periodic session check...')
      
      const isValid = await validateSession()
      if (!isValid && isSessionValid.value) {
        // Session was valid but now it's not
        handleSessionLoss('session_expired', 'Your session has expired. Please log in again.', true)
      } else if (isValid && !isSessionValid.value) {
        // Session was invalid but now it's valid (recovered)
        console.log('[SessionMonitor] Session recovered')
        clearSessionLoss()
      }
    }, CHECK_INTERVAL)
  }

  // Start fast monitoring (for immediate detection after logout)
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
    
    // Set up fast monitoring
    fastMonitoringInterval.value = setInterval(async () => {
      console.log('[SessionMonitor] Fast session check...')
      
      const isValid = await validateSession()
      if (!isValid && isSessionValid.value) {
        // Session was valid but now it's not
        handleSessionLoss('session_expired', 'Your session has expired. Please log in again.', true)
        // Stop fast monitoring once session loss is detected
        stopFastMonitoring()
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

  // Handle network errors
  const handleNetworkError = () => {
    handleSessionLoss('network_error', 'Network connection lost. Please check your internet connection and try again.', true)
  }

  // Listen for network events and logout events
  const setupEventListeners = () => {
    if (typeof window === 'undefined') return
    
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
    
    const handleLogoutDetected = (event: CustomEvent) => {
      console.log('[SessionMonitor] Logout detected, starting fast monitoring for immediate detection')
      // Start fast monitoring to detect session loss quickly
      startFastMonitoring()
    }
    
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    window.addEventListener('session-logout-detected', handleLogoutDetected as EventListener)
    
    // Return cleanup function
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
      window.removeEventListener('session-logout-detected', handleLogoutDetected as EventListener)
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
