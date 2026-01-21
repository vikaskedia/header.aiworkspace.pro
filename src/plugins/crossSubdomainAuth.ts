import { getSupabase } from '../lib/supabase'
import { ensureCrossSubdomainCookies, getCookie, syncCookiesToLocalStorage, setSessionCookie, ACCESS_COOKIE, REFRESH_COOKIE } from '../utils/authRedirect'

// Ultra-early cross-subdomain authentication setup for domain changes
// This should be called as early as possible in the page lifecycle
export function setupImmediateCrossSubdomainAuth() {
  try {
    console.log('[auth][immediate] Setting up immediate cross-subdomain authentication...')

    // Immediately ensure cross-subdomain cookies are synchronized
    ensureCrossSubdomainCookies([ACCESS_COOKIE, REFRESH_COOKIE])

    // Set up auth state listener immediately (will retry if Supabase not configured)
    setupAuthStateListener().catch(error => {
      console.log('[auth][immediate] Auth state listener setup deferred:', error.message)
    })

    console.log('[auth][immediate] Immediate cross-subdomain authentication setup completed')
    return true
  } catch (error) {
    console.error('[auth][immediate] Error during immediate cross-subdomain authentication setup:', error)
    return false
  }
}

// Immediate cross-subdomain authentication initialization
export async function initializeCrossSubdomainAuth() {
  try {
    console.log('[auth][init] Starting cross-subdomain authentication initialization...')

    // Immediately ensure cross-subdomain cookies are synchronized
    ensureCrossSubdomainCookies([ACCESS_COOKIE, REFRESH_COOKIE])

    // Set up auth state listener
    setupAuthStateListener()

    // Try to restore session immediately with more aggressive retry
    // We use the hardened retry logic with sufficient attempts
    const restoreResult = await restoreSessionWithRetry(10, 200)

    if (restoreResult.success) {
      console.log('[auth][init] Cross-subdomain authentication initialized successfully')
      return { success: true, session: restoreResult.session }
    } else {
      console.log('[auth][init] Cross-subdomain authentication initialization completed (no active session)')
      return { success: false, error: restoreResult.error }
    }
  } catch (error) {
    console.error('[auth][init] Error during cross-subdomain authentication initialization:', error)
    return { success: false, error }
  }
}

export async function restoreCrossSubdomainSession() {
  try {
    ensureCrossSubdomainCookies([ACCESS_COOKIE, REFRESH_COOKIE])
    const at = getCookie(ACCESS_COOKIE)
    const rt = getCookie(REFRESH_COOKIE)
    if (at && rt) {
      const supabase = await getSupabase()
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        const { data, error } = await supabase.auth.setSession({ access_token: at, refresh_token: rt })
        if (error) console.log('[auth][restore] error', error)
        else console.log('[auth][restore] done', !!data.session)
      }
    } else {
      console.log('[auth][restore] no cookies present')
    }
    syncCookiesToLocalStorage()
  } catch (e) {
    console.log('[auth][restore] exception', e)
  }
}

// Set up automatic token refresh and auth state management
let authListenerSetup = false

export async function setupAuthStateListener() {
  // Prevent multiple listeners from being set up
  if (authListenerSetup) {
    console.log('[auth][listener] Auth state listener already set up, skipping...')
    return
  }

  console.log('[auth][listener] Setting up auth state listener...')

  try {
    const supabase = await getSupabase()
    supabase.auth.onAuthStateChange(async (event: any, session: any) => {
      console.log('[auth][listener] Auth state changed:', event, !!session)

      switch (event) {
        case 'TOKEN_REFRESHED':
          console.log('[auth][listener] Token refreshed successfully')
          if (session) {
            // Update cookies with new tokens
            setSessionCookie(ACCESS_COOKIE, session.access_token, 60 * 60 * 24 * 365) // 1 year
            setSessionCookie(REFRESH_COOKIE, session.refresh_token, 60 * 60 * 24 * 365) // 1 year
            syncCookiesToLocalStorage()
          }
          break

        case 'SIGNED_IN':
          console.log('[auth][listener] User signed in')
          if (session) {
            // Set cookies with 1 year expiration
            setSessionCookie(ACCESS_COOKIE, session.access_token, 60 * 60 * 24 * 365)
            setSessionCookie(REFRESH_COOKIE, session.refresh_token, 60 * 60 * 24 * 365)
            syncCookiesToLocalStorage()
          }
          break

        case 'SIGNED_OUT':
          console.log('[auth][listener] User signed out')
          // Don't clear cookies here - let the logout handler do it

          // Trigger immediate session loss detection
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('session-logout-detected', {
              detail: { timestamp: new Date() }
            }))
          }
          break

        case 'USER_UPDATED':
          console.log('[auth][listener] User updated')
          break

        default:
          console.log('[auth][listener] Unhandled auth event:', event)
      }
    })

    authListenerSetup = true
    console.log('[auth][listener] Auth state listener set up successfully')
  } catch (error) {
    console.warn('[auth][listener] Failed to setup auth state listener:', error)
    // If it's a configuration error, we'll retry when Supabase is properly configured
    if (error.message && error.message.includes('Missing configuration')) {
      console.log('[auth][listener] Supabase not configured yet, will retry when configured')
      authListenerSetup = false // Allow retry when configuration is available
    }
  }
}

// Enhanced session restoration with automatic retry and cross-subdomain sync
// Enhanced session restoration with automatic retry and cross-subdomain sync
export async function restoreSessionWithRetry(maxRetries = 10, delayMs = 200) {
  console.log('[auth][restore] Starting enhanced session restoration...')

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      // 1. Check if we already have a session via Supabase client
      try {
        const supabase = await getSupabase()
        const { data: { session }, error } = await supabase.auth.getSession()

        if (session && session.user) {
          console.log('[auth][restore] Active session found on attempt', attempt)
          return { success: true, session }
        }

        if (error && error.message && error.message.includes('Missing configuration')) {
          console.log('[auth][restore] Supabase not configured yet, skipping restoration')
          return { success: false, error: 'Supabase not configured' }
        }
      } catch (err) {
        console.warn('[auth][restore] Error checking existing session:', err)
      }

      // 2. Ensure cookies are synced
      ensureCrossSubdomainCookies([ACCESS_COOKIE, REFRESH_COOKIE])

      // 3. Check for cookies
      const at = getCookie(ACCESS_COOKIE)
      const rt = getCookie(REFRESH_COOKIE)

      if (!at || !rt) {
        console.log(`[auth][restore] Attempt ${attempt}: Missing cookies (Access: ${!!at}, Refresh: ${!!rt})`)
        if (attempt < maxRetries) {
          await new Promise(resolve => setTimeout(resolve, delayMs * attempt)) // Progressive backoff
          continue
        } else {
          return { success: false, error: 'No cookies found after retries' }
        }
      }

      // 4. Try to restore from cookies
      console.log(`[auth][restore] Attempt ${attempt}: Restoring from cookies...`)
      const supabase = await getSupabase()
      const { data, error } = await supabase.auth.setSession({
        access_token: at,
        refresh_token: rt
      })

      if (data.session && data.session.user) {
        console.log('[auth][restore] Session restored successfully!')
        // Refresh cookies with new tokens from the restored session
        setSessionCookie(ACCESS_COOKIE, data.session.access_token)
        setSessionCookie(REFRESH_COOKIE, data.session.refresh_token)
        syncCookiesToLocalStorage()
        return { success: true, session: data.session }
      }

      if (error) {
        console.warn(`[auth][restore] Attempt ${attempt} failed: ${error.message}`)
        if (attempt === maxRetries) return { success: false, error }
      }

      // Wait before retry
      await new Promise(resolve => setTimeout(resolve, delayMs))

    } catch (e) {
      console.error(`[auth][restore] Attempt ${attempt} unexpected error:`, e)
      if (attempt === maxRetries) return { success: false, error: e }
      await new Promise(resolve => setTimeout(resolve, delayMs))
    }
  }

  return { success: false, error: 'Max retries exceeded' }
}

// Ultra-fast cross-subdomain authentication for domain changes
// This function should be called immediately when the page loads
export function handleDomainChangeAuth() {
  try {
    console.log('[auth][domain-change] Handling domain change authentication...')

    // Immediately ensure cross-subdomain cookies are synchronized
    ensureCrossSubdomainCookies([ACCESS_COOKIE, REFRESH_COOKIE])

    // Set up auth state listener immediately (will retry if Supabase not configured)
    setupAuthStateListener().catch(error => {
      console.log('[auth][domain-change] Auth state listener setup deferred:', error.message)
    })

    // Start immediate session restoration with very aggressive retry (will also retry if Supabase not configured)
    restoreSessionWithRetry(7, 25).then(result => {
      if (result.success) {
        console.log('[auth][domain-change] Domain change authentication successful')
      } else {
        console.log('[auth][domain-change] Domain change authentication failed:', result.error)
      }
    }).catch(error => {
      console.error('[auth][domain-change] Domain change authentication error:', error)
    })

    console.log('[auth][domain-change] Domain change authentication setup completed')
    return true
  } catch (error) {
    console.error('[auth][domain-change] Error during domain change authentication setup:', error)
    return false
  }
}
