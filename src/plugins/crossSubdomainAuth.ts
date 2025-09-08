import { supabase } from '../lib/supabase'
import { ensureCrossSubdomainCookies, getCookie, syncCookiesToLocalStorage, setSessionCookie, ACCESS_COOKIE, REFRESH_COOKIE } from '../utils/authRedirect'

// Immediate cross-subdomain authentication initialization
export async function initializeCrossSubdomainAuth() {
  try {
    console.log('[auth][init] Starting cross-subdomain authentication initialization...')
    
    // Immediately ensure cross-subdomain cookies are synchronized
    ensureCrossSubdomainCookies([ACCESS_COOKIE, REFRESH_COOKIE])
    
    // Set up auth state listener
    setupAuthStateListener()
    
    // Try to restore session immediately
    const restoreResult = await restoreSessionWithRetry(2, 100) // Quick retry with shorter delays
    
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
export function setupAuthStateListener() {
  console.log('[auth][listener] Setting up auth state listener...')
  
  supabase.auth.onAuthStateChange(async (event, session) => {
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
        break
        
      case 'USER_UPDATED':
        console.log('[auth][listener] User updated')
        break
        
      default:
        console.log('[auth][listener] Unhandled auth event:', event)
    }
  })
}

// Enhanced session restoration with automatic retry and cross-subdomain sync
export async function restoreSessionWithRetry(maxRetries = 3, delayMs = 200) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`[auth][restore] Attempt ${attempt}/${maxRetries}`)
      
      // First, try to get existing session
      let session = null
      try {
        const result = await supabase.auth.getSession()
        session = result?.data?.session
      } catch (error) {
        console.warn('[auth][restore] Error getting Supabase session:', error)
        // Continue with cookie restoration attempt
      }
      
      if (session && session.user) {
        console.log('[auth][restore] Active session found')
        return { success: true, session }
      }
      
      // Ensure cross-subdomain cookies are synchronized before each attempt
      if (attempt > 1) {
        console.log('[auth][restore] Re-syncing cross-subdomain cookies...')
        ensureCrossSubdomainCookies([ACCESS_COOKIE, REFRESH_COOKIE])
        await new Promise(resolve => setTimeout(resolve, delayMs * attempt))
      }
      
      // Try to restore from cookies
      const at = getCookie(ACCESS_COOKIE)
      const rt = getCookie(REFRESH_COOKIE)
      
      console.log(`[auth][restore] Cookie check - Access: ${!!at}, Refresh: ${!!rt}`)
      
      if (at && rt) {
        console.log('[auth][restore] Attempting to restore session from cookies...')
        try {
          const { data, error } = await supabase.auth.setSession({ 
            access_token: at, 
            refresh_token: rt 
          })
          
          if (error) {
            console.log(`[auth][restore] Attempt ${attempt} failed:`, error.message)
            if (attempt === maxRetries) {
              return { success: false, error }
            }
            continue
          }
          
          if (data.session) {
            console.log('[auth][restore] Session restored successfully')
            // Update cookies with fresh tokens
            setSessionCookie(ACCESS_COOKIE, data.session.access_token, 60 * 60 * 24 * 365)
            setSessionCookie(REFRESH_COOKIE, data.session.refresh_token, 60 * 60 * 24 * 365)
            syncCookiesToLocalStorage()
            return { success: true, session: data.session }
          }
        } catch (setSessionError) {
          console.warn(`[auth][restore] setSession error on attempt ${attempt}:`, setSessionError)
          if (attempt === maxRetries) {
            return { success: false, error: setSessionError }
          }
          continue
        }
      } else {
        console.log(`[auth][restore] Attempt ${attempt} - No cookies found`)
        if (attempt === maxRetries) {
          return { success: false, error: 'No valid session or cookies' }
        }
      }
      
      // Wait before next attempt
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, delayMs * attempt))
      }
      
    } catch (e) {
      console.log(`[auth][restore] Attempt ${attempt} exception:`, e)
      if (attempt === maxRetries) {
        return { success: false, error: e }
      }
    }
  }
  
  console.log('[auth][restore] All attempts failed')
  return { success: false, error: 'All restoration attempts failed' }
}
