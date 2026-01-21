// Simple OAuth callback handler that works reliably across all apps
// This version uses direct imports instead of dynamic imports to avoid issues

import { supabase } from '../lib/supabase'
import { setSessionCookie, syncCookiesToLocalStorage, ACCESS_COOKIE, REFRESH_COOKIE, getPostLoginBase } from './authRedirect'

export function setupSimpleCallback() {
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

  // Process OAuth callback
  const processCallback = async () => {
    if (!isOAuthCallback()) return false

    console.log('[SimpleCallback] Processing OAuth callback...')
    console.log('[SimpleCallback] Current URL:', window.location.href)
    console.log('[SimpleCallback] Current hash:', window.location.hash)

    try {
      // Wait a moment to ensure session is properly established
      await new Promise(resolve => setTimeout(resolve, 500))

      // First, try to get the session from the URL
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession()

      // If no session found, try to get it from the URL hash/fragment
      if (!sessionData?.session && (window.location.hash.includes('access_token=') || window.location.search.includes('access_token='))) {
        console.log('[SimpleCallback] No session found, trying to process URL tokens...')

        // Let Supabase handle the URL tokens
        const { data: urlData, error: urlError } = await supabase.auth.getUser()

        if (urlData?.user && !urlError) {
          console.log('[SimpleCallback] Successfully processed URL tokens for user:', urlData.user.email)
          // Get the session again after processing URL
          const { data: finalSessionData, error: finalError } = await supabase.auth.getSession()

          if (finalSessionData?.session) {
            console.log('[SimpleCallback] Session established after URL processing')
            return processSession(finalSessionData.session)
          }
        }
      }

      const { data, error } = { data: sessionData, error: sessionError }

      if (error) {
        console.error('[SimpleCallback] Error processing callback:', error)
        return false
      }

      if (data?.session) {
        return processSession(data.session)
      } else {
        console.log('[SimpleCallback] No session found')
        return false
      }
    } catch (err) {
      console.error('[SimpleCallback] Error processing callback:', err)
      return false
    }
  }

  // Process session data
  const processSession = async (session: any) => {
    const user = session.user

    console.log('[SimpleCallback] OAuth login successful:', user.email)

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

    console.log('[SimpleCallback] Post-login redirect URL:', redirectUrl)
    console.log('[SimpleCallback] Session storage redirect:', sessionStorage.getItem('post-login-redirect'))
    console.log('[SimpleCallback] Local storage redirect:', localStorage.getItem('post-login-redirect'))

    // If no redirect URL found or it's the callback URL, use the root path
    let finalRedirectUrl = redirectUrl || '/'

    // Ensure we don't redirect back to /auth/callback
    if (finalRedirectUrl === '/auth/callback' || finalRedirectUrl.includes('/auth/callback')) {
      console.log('[SimpleCallback] Avoiding redirect to /auth/callback, using /')
      finalRedirectUrl = '/'
    }

    console.log('[SimpleCallback] Final redirect URL:', finalRedirectUrl)

    // Clear the stored redirect URL
    sessionStorage.removeItem('post-login-redirect')
    localStorage.removeItem('post-login-redirect')

    // Perform the redirect
    const performRedirect = () => {
      if (finalRedirectUrl.startsWith('/')) {
        const currentOrigin = window.location.origin
        const fullRedirectUrl = `${currentOrigin}${finalRedirectUrl}`
        console.log('[SimpleCallback] redirecting to:', fullRedirectUrl)
        window.location.href = fullRedirectUrl
        // Fallback using replace in case href doesn't work
        setTimeout(() => {
          if (window.location.pathname === '/auth/callback') {
            console.log('[SimpleCallback] Redirect did not work, trying replace...')
            window.location.replace(fullRedirectUrl)
          }
        }, 500)
      } else {
        console.log('[SimpleCallback] redirecting to absolute URL:', finalRedirectUrl)
        window.location.href = finalRedirectUrl
        // Fallback using replace
        setTimeout(() => {
          if (window.location.pathname === '/auth/callback') {
            console.log('[SimpleCallback] Redirect did not work, trying replace...')
            window.location.replace(finalRedirectUrl)
          }
        }, 500)
      }
    }

    // Redirect after a short delay to ensure session is fully established
    setTimeout(performRedirect, 100)

    return true
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
  setupSimpleCallback()
}
