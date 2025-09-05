// Universal OAuth callback handler that works with any app
// This handles OAuth callbacks without requiring specific routing setup

import { supabase } from '../lib/supabase'
import { setSessionCookie, syncCookiesToLocalStorage, ACCESS_COOKIE, REFRESH_COOKIE, getPostLoginBase } from './authRedirect'

export function setupUniversalCallback() {
  // Check if we're on an OAuth callback URL
  const isOAuthCallback = () => {
    const hash = window.location.hash
    const pathname = window.location.pathname
    const search = window.location.search
    
    return (
      hash.includes('access_token=') ||
      hash.includes('refresh_token=') ||
      search.includes('access_token=') ||
      search.includes('refresh_token=') ||
      pathname.includes('/auth/callback') ||
      hash.includes('#/auth/callback')
    )
  }

  // Process session data
  const processSession = async (session: any) => {
    const user = session.user
    
    console.log('[UniversalCallback] OAuth login successful:', user.email)
    
    // Set cross-subdomain cookies for session sharing
    if (session.access_token) {
      setSessionCookie(ACCESS_COOKIE, session.access_token)
    }
    if (session.refresh_token) {
      setSessionCookie(REFRESH_COOKIE, session.refresh_token)
    }
    syncCookiesToLocalStorage()
    
    // Get the post-login redirect URL
    const redirectUrl = getPostLoginBase()
    
    console.log('[UniversalCallback] Post-login redirect URL:', redirectUrl)
    console.log('[UniversalCallback] Session storage redirect:', sessionStorage.getItem('post-login-redirect'))
    console.log('[UniversalCallback] Local storage redirect:', localStorage.getItem('post-login-redirect'))
    
    // If no redirect URL found, use the root path
    const finalRedirectUrl = redirectUrl || '/'
    console.log('[UniversalCallback] Final redirect URL:', finalRedirectUrl)
    
    // Clear the stored redirect URL
    sessionStorage.removeItem('post-login-redirect')
    localStorage.removeItem('post-login-redirect')
    
    // Redirect after a short delay to ensure session is fully established
    setTimeout(() => {
      if (finalRedirectUrl.startsWith('/')) {
        const currentOrigin = window.location.origin
        const fullRedirectUrl = `${currentOrigin}${finalRedirectUrl}`
        console.log('[UniversalCallback] redirecting to:', fullRedirectUrl)
        window.location.href = fullRedirectUrl
      } else {
        console.log('[UniversalCallback] redirecting to absolute URL:', finalRedirectUrl)
        window.location.href = finalRedirectUrl
      }
    }, 100)
    
    return true
  }

  // Process OAuth callback
  const processCallback = async () => {
    if (!isOAuthCallback()) return false

    console.log('[UniversalCallback] Processing OAuth callback...')
    console.log('[UniversalCallback] Current URL:', window.location.href)
    console.log('[UniversalCallback] Current hash:', window.location.hash)

    try {
      // Using direct imports instead of dynamic imports for better reliability

      // Wait a moment to ensure session is properly established
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // First, try to get the session from the URL
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession()
      
      // If no session found, try to get it from the URL hash/fragment
      if (!sessionData?.session && (window.location.hash.includes('access_token=') || window.location.search.includes('access_token='))) {
        console.log('[UniversalCallback] No session found, trying to process URL tokens...')
        
        // Let Supabase handle the URL tokens
        const { data: urlData, error: urlError } = await supabase.auth.getUser()
        
        if (urlData?.user && !urlError) {
          console.log('[UniversalCallback] Successfully processed URL tokens for user:', urlData.user.email)
          // Get the session again after processing URL
          const { data: finalSessionData, error: finalError } = await supabase.auth.getSession()
          
          if (finalSessionData?.session) {
            console.log('[UniversalCallback] Session established after URL processing')
            return processSession(finalSessionData.session)
          }
        }
      }
      
      const { data, error } = { data: sessionData, error: sessionError }
      
      if (error) {
        console.error('[UniversalCallback] Error processing callback:', error)
        return false
      }
      
      if (data?.session) {
        return await processSession(data.session)
      } else {
        console.log('[UniversalCallback] No session found')
        return false
      }
    } catch (err) {
      console.error('[UniversalCallback] Error processing callback:', err)
      return false
    }
  }

  // Auto-process callback on page load
  if (typeof window !== 'undefined') {
    // Process immediately if already on callback
    if (isOAuthCallback()) {
      processCallback()
    }

    // Also listen for hash changes (for SPA routing)
    window.addEventListener('hashchange', () => {
      if (isOAuthCallback()) {
        processCallback()
      }
    })
  }

  return {
    isOAuthCallback,
    processCallback
  }
}

// Auto-setup when this module is imported
if (typeof window !== 'undefined') {
  setupUniversalCallback()
}
