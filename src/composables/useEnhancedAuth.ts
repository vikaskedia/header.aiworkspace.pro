import { ref, computed, onMounted } from 'vue'
import { getSupabase } from '../lib/supabase'
import { restoreSessionWithRetry, initializeCrossSubdomainAuth } from '../plugins/crossSubdomainAuth'
import { clearSessionCookie, ACCESS_COOKIE, REFRESH_COOKIE, clearLocalStorageTokens } from '../utils/authRedirect'
import { handleBundlingError } from '../utils/errorHandler'
import type { AuthState, Session, AuthResult } from '../types'

export function useEnhancedAuth() {
  const authState = ref<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null
  })

  const currentSession = ref<Session | null>(null)

  // Computed properties
  const isAuthenticated = computed(() => authState.value.isAuthenticated)
  const currentUser = computed(() => authState.value.user)
  const isLoading = computed(() => authState.value.isLoading)

  // Load user info from Supabase session with enhanced cross-subdomain sync
  const loadUserInfo = async (): Promise<AuthResult> => {
    try {
      console.log('[auth][enhanced] Starting loadUserInfo...')
      // First, ensure cross-subdomain cookies are synchronized
      console.log('[auth][enhanced] Ensuring cross-subdomain cookie synchronization...')

      // Simplified cookie synchronization approach
      const ACCESS_COOKIE = 'sb-access-token'
      const REFRESH_COOKIE = 'sb-refresh-token'

      // Inline cookie synchronization function to avoid import issues
      const performCookieSync = (cookieNames: string[]) => {
        try {
          const host = location.hostname
          if (host === 'localhost' || /^\d+\.\d+\.\d+\.\d+$/.test(host)) {
            console.log('[auth][enhanced] Skipping cookie sync for localhost')
            return
          }

          const apexDomain = 'aiworkspace.pro'
          if (!host.endsWith(`.${apexDomain}`) && host !== apexDomain) {
            console.log('[auth][enhanced] Skipping cookie sync - not under apex domain')
            return
          }

          console.log('[auth][enhanced] Performing cookie synchronization')

          // Basic cookie synchronization logic
          cookieNames.forEach(name => {
            const cookie = document.cookie.split(';').find(c => c.trim().startsWith(name + '='))
            if (cookie) {
              console.log(`[auth][enhanced] Found cookie: ${name}`)
              // Set cookie for apex domain
              const cookieValue = cookie.split('=')[1]
              if (cookieValue) {
                document.cookie = `${name}=${cookieValue}; domain=.${apexDomain}; path=/; secure; samesite=lax`
              }
            }
          })
        } catch (error) {
          console.warn('[auth][enhanced] Error in cookie sync:', error)
        }
      }

      // Perform cookie synchronization multiple times for domain changes
      performCookieSync([ACCESS_COOKIE, REFRESH_COOKIE])

      // Add a small delay to ensure cookies are properly set
      await new Promise(resolve => setTimeout(resolve, 50))

      // Perform additional cookie sync for domain changes
      performCookieSync([ACCESS_COOKIE, REFRESH_COOKIE])

      // Add another small delay
      await new Promise(resolve => setTimeout(resolve, 50))

      // First check Supabase session (highest priority)
      let session = null
      try {
        const supabase = await getSupabase()
        const result = await supabase.auth.getSession()
        session = result?.data?.session
      } catch (error) {
        console.warn('[auth][enhanced] Error getting Supabase session:', error)
      }

      if (session && session.user) {
        console.log('[auth][enhanced] Active Supabase session found')
        const user = session.user
        const userData = {
          id: user.id,
          name: user.user_metadata?.name || user.user_metadata?.user_name || user.user_metadata?.full_name || user.email?.split('@')[0] || 'User',
          email: user.email,
          avatar_url: user.user_metadata?.avatar_url || null,
          user_metadata: user.user_metadata
        }

        authState.value = {
          user: userData,
          isAuthenticated: true,
          isLoading: false,
          error: null
        }

        currentSession.value = {
          user: userData,
          access_token: session.access_token,
          refresh_token: session.refresh_token
        }

        return { user: userData, session: currentSession.value, error: null }
      }

      // If no active session, try to restore from cookies with retry mechanism
      console.log('[auth][enhanced] No active session, attempting to restore from cookies...')

      // Use the improved restoration logic which handles retries and cookie syncing internally
      const restoreResult = await restoreSessionWithRetry(15, 200)

      if (restoreResult.success && restoreResult.session) {
        console.log('[auth][enhanced] Session restored successfully from cookies')
        const user = restoreResult.session.user
        const userData = {
          id: user.id,
          name: user.user_metadata?.name || user.user_metadata?.user_name || user.user_metadata?.full_name || user.email?.split('@')[0] || 'User',
          email: user.email,
          avatar_url: user.user_metadata?.avatar_url || null,
          user_metadata: user.user_metadata
        }

        authState.value = {
          user: userData,
          isAuthenticated: true,
          isLoading: false,
          error: null
        }

        currentSession.value = restoreResult.session
        return { user: userData, session: currentSession.value, error: null }
      } else {
        console.log('[auth][enhanced] Failed to restore session:', restoreResult.error)
      }

    } catch (e) {
      console.error('Error getting Supabase session:', e)

      // Handle bundling errors gracefully
      if (e instanceof Error) {
        handleBundlingError(e, {
          component: 'useEnhancedAuth',
          function: 'loadUserInfo',
          operation: 'session_validation'
        })
      }
    }

    // No valid authentication found
    console.log('[auth][enhanced] No valid authentication found')
    authState.value = {
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: 'No valid session found'
    }

    currentSession.value = null
    return { user: null, session: null, error: 'No valid session found' }
  }

  // Sign out user
  const logout = async (): Promise<void> => {
    try {
      // Clear Supabase session
      const supabase = await getSupabase()
      await supabase.auth.signOut()

      // Clear cookies
      clearSessionCookie(ACCESS_COOKIE)
      clearSessionCookie(REFRESH_COOKIE)

      // Clear localStorage
      clearLocalStorageTokens()

      // Reset state
      authState.value = {
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null
      }

      currentSession.value = null

      console.log('[auth][enhanced] User logged out successfully')
    } catch (error) {
      console.error('Error during logout:', error)
      // Still clear local state even if Supabase logout fails
      authState.value = {
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null
      }
      currentSession.value = null
    }
  }

  // Sign in with email/password
  const signIn = async (email: string, password: string): Promise<AuthResult> => {
    try {
      authState.value.isLoading = true

      const supabase = await getSupabase()
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) throw error

      if (data.session) {
        const user = data.session.user
        const userData = {
          id: user.id,
          name: user.user_metadata?.name || user.user_metadata?.user_name || user.user_metadata?.full_name || user.email?.split('@')[0] || 'User',
          email: user.email,
          avatar_url: user.user_metadata?.avatar_url || null,
          user_metadata: user.user_metadata
        }

        authState.value = {
          user: userData,
          isAuthenticated: true,
          isLoading: false,
          error: null
        }

        currentSession.value = {
          user: userData,
          access_token: data.session.access_token,
          refresh_token: data.session.refresh_token
        }

        return { user: userData, session: currentSession.value, error: null }
      }

      return { user: null, session: null, error: 'No session returned' }
    } catch (error) {
      console.error('Sign in error:', error)
      authState.value.isLoading = false
      return { user: null, session: null, error: String(error) }
    }
  }

  // Sign up with email/password
  const signUp = async (email: string, password: string, metadata?: any): Promise<AuthResult> => {
    try {
      authState.value.isLoading = true

      const supabase = await getSupabase()
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata
        }
      })

      if (error) throw error

      if (data.session) {
        const user = data.session.user
        const userData = {
          id: user.id,
          name: user.user_metadata?.name || user.user_metadata?.user_name || user.user_metadata?.full_name || user.email?.split('@')[0] || 'User',
          email: user.email,
          avatar_url: user.user_metadata?.avatar_url || null,
          user_metadata: user.user_metadata
        }

        authState.value = {
          user: userData,
          isAuthenticated: true,
          isLoading: false,
          error: null
        }

        currentSession.value = {
          user: userData,
          access_token: data.session.access_token,
          refresh_token: data.session.refresh_token
        }

        return { user: userData, session: currentSession.value, error: null }
      }

      return { user: null, session: null, error: 'No session returned' }
    } catch (error) {
      console.error('Sign up error:', error)
      authState.value.isLoading = false
      return { user: null, session: null, error: String(error) }
    }
  }

  // Check auth status
  const checkAuth = async (): Promise<void> => {
    await loadUserInfo()
  }

  // Initialize auth on mount with enhanced cross-subdomain sync
  onMounted(async () => {
    // First, initialize cross-subdomain authentication
    await initializeCrossSubdomainAuth()

    // Then check auth status
    await checkAuth()
  })

  return {
    // State
    authState,
    currentSession,

    // Computed
    isAuthenticated,
    currentUser,
    isLoading,

    // Methods
    loadUserInfo,
    logout,
    signIn,
    signUp,
    checkAuth
  }
}
