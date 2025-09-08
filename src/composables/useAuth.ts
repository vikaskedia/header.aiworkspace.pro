import { ref, computed, onMounted, watch } from 'vue'
import { getSupabase } from '../lib/supabase'
import { setSessionCookie, clearSessionCookie, syncCookiesToLocalStorage, clearLocalStorageTokens, ACCESS_COOKIE, REFRESH_COOKIE } from '../utils/authRedirect'
import type { AuthState } from '../types'

export function useAuth() {
  const authState = ref<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null
  })

  const currentUrl = ref(window.location.href)

  // Check authentication status
  const checkAuthStatus = async (): Promise<void> => {
    try {
      authState.value.isLoading = true
      
      const supabase = await getSupabase()
      const { data: { session }, error } = await supabase.auth.getSession()
      
      if (error) {
        console.error('Error checking auth status:', error)
        authState.value = {
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: error.message
        }
        return
      }

      if (session?.user) {
        authState.value = {
          user: {
            id: session.user.id,
            email: session.user.email || '',
            name: session.user.user_metadata?.full_name || 
                  session.user.user_metadata?.name || 
                  session.user.email?.split('@')[0] || 'User',
            avatar_url: session.user.user_metadata?.avatar_url || 
                       session.user.user_metadata?.picture || null,
            initials: (session.user.user_metadata?.full_name || 
                      session.user.user_metadata?.name || 
                      session.user.email?.split('@')[0] || 'U')
                      .split(' ')
                      .map((n: string) => n[0])
                      .join('')
                      .toUpperCase()
                      .substring(0, 2)
          },
          isAuthenticated: true,
          isLoading: false,
          error: null
        }

        // Set cross-subdomain cookies for session sharing
        if (session.access_token) {
          setSessionCookie(ACCESS_COOKIE, session.access_token)
        }
        if (session.refresh_token) {
          setSessionCookie(REFRESH_COOKIE, session.refresh_token)
        }
        syncCookiesToLocalStorage()
      } else {
        authState.value = {
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: null
        }
      }
    } catch (error: any) {
      console.error('Auth check failed:', error)
      authState.value = {
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: error.message || 'Authentication check failed'
      }
    }
  }

  // Login with email and password
  const loginWithEmail = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const supabase = await getSupabase()
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) {
        return { success: false, error: error.message }
      }

      // Update auth state
      await checkAuthStatus()
      
      // Store current URL for redirect after login
      sessionStorage.setItem('post-login-redirect', currentUrl.value)
      
      return { success: true }
    } catch (error: any) {
      console.error('Login error:', error)
      return { success: false, error: error.message || 'Login failed' }
    }
  }

  // Signup with email and password
  const signupWithEmail = async (email: string, password: string): Promise<{ success: boolean; error?: string; needsConfirmation?: boolean }> => {
    try {
      const supabase = await getSupabase()
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      })

      if (error) {
        return { success: false, error: error.message }
      }

      if (data.user && !data.user.email_confirmed_at) {
        return { success: true, needsConfirmation: true }
      }

      if (data.session?.user) {
        // Update auth state
        await checkAuthStatus()
        
        // Store current URL for redirect after signup
        sessionStorage.setItem('post-login-redirect', currentUrl.value)
        
        return { success: true }
      }

      return { success: false, error: 'No session created' }
    } catch (error: any) {
      console.error('Signup error:', error)
      return { success: false, error: error.message || 'Signup failed' }
    }
  }

  // Login with OAuth provider
  const loginWithProvider = async (provider: 'google' | 'github' | 'twitter'): Promise<{ success: boolean; error?: string }> => {
    try {
      const redirectTo = `${window.location.origin}/auth/callback`
      
      console.log('[OAuth] Starting login with provider:', provider)
      console.log('[OAuth] Redirect URL:', redirectTo)
      console.log('[OAuth] Current URL:', currentUrl.value)
      console.log('[OAuth] Current origin:', window.location.origin)
      
      const supabase = await getSupabase()
      const { error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: redirectTo,
          queryParams: {
            redirect_origin: currentUrl.value
          }
        }
      })
      
      if (error) {
        console.error('[OAuth] Error:', error)
        return { success: false, error: error.message }
      }

      // Store current URL for redirect after OAuth
      const redirectUrl = currentUrl.value || window.location.href
      sessionStorage.setItem('post-login-redirect', redirectUrl)
      localStorage.setItem('post-login-redirect', redirectUrl) // Backup in localStorage
      console.log('[OAuth] Stored redirect URL:', redirectUrl)
      console.log('[OAuth] Current URL value:', currentUrl.value)
      console.log('[OAuth] Window location href:', window.location.href)
      
      return { success: true }
    } catch (error: any) {
      console.error('OAuth login error:', error)
      return { success: false, error: error.message || 'OAuth login failed' }
    }
  }

  // Logout
  const logout = async (): Promise<void> => {
    try {
      const supabase = await getSupabase()
      const { error } = await supabase.auth.signOut()
      if (error) {
        console.error('Logout error:', error)
      }

      // Clear auth state
    authState.value = {
      user: null,
      isAuthenticated: false,
        isLoading: false,
        error: null
      }

      // Clear cross-subdomain cookies and localStorage
      clearSessionCookie(ACCESS_COOKIE)
      clearSessionCookie(REFRESH_COOKIE)
      clearLocalStorageTokens()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  // Reset password
  const resetPassword = async (email: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const supabase = await getSupabase()
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      })

      if (error) {
        return { success: false, error: error.message }
      }

      return { success: true }
    } catch (error: any) {
      console.error('Password reset error:', error)
      return { success: false, error: error.message || 'Password reset failed' }
    }
  }

  // Setup auth state listener
  const setupAuthListener = async () => {
    try {
      const supabase = await getSupabase()
      supabase.auth.onAuthStateChange((event: any, session: any) => {
      console.log('Auth state changed:', event, session?.user?.email)
      
      switch (event) {
        case 'SIGNED_IN':
          if (session?.user) {
            checkAuthStatus()
          }
          break

        case 'SIGNED_OUT':
          authState.value = {
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null
          }
          
          // Clear cross-subdomain cookies and localStorage
          clearSessionCookie(ACCESS_COOKIE)
          clearSessionCookie(REFRESH_COOKIE)
          clearLocalStorageTokens()
          break

        case 'TOKEN_REFRESHED':
          if (session?.access_token) {
            setSessionCookie(ACCESS_COOKIE, session.access_token)
          }
          if (session?.refresh_token) {
            setSessionCookie(REFRESH_COOKIE, session.refresh_token)
          }
          syncCookiesToLocalStorage()
          break

        case 'USER_UPDATED':
          if (session?.user) {
            checkAuthStatus()
          }
          break
      }
    })
    } catch (error) {
      console.warn('Failed to setup auth listener:', error)
    }
  }

  // Initialize auth on mount
  onMounted(async () => {
    setupAuthListener()
    await checkAuthStatus()
  })

  // Watch for URL changes to update current URL
  watch(() => window.location.href, (newUrl) => {
    currentUrl.value = newUrl
  })

  return {
    authState: computed(() => authState.value),
    isAuthenticated: computed(() => authState.value.isAuthenticated),
    user: computed(() => authState.value.user),
    isLoading: computed(() => authState.value.isLoading),
    checkAuthStatus,
    loginWithEmail,
    signupWithEmail,
    loginWithProvider,
    logout,
    resetPassword,
    currentUrl: computed(() => currentUrl.value)
  }
}