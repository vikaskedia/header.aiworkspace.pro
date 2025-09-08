import { ref, computed, onMounted } from 'vue'
import { getSupabase } from '../lib/supabase'
import { restoreSessionWithRetry, initializeCrossSubdomainAuth } from '../plugins/crossSubdomainAuth'
import { clearSessionCookie, ACCESS_COOKIE, REFRESH_COOKIE, clearLocalStorageTokens } from '../utils/authRedirect'
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
      
      // Use multiple import strategies to ensure the function is available
      let ensureCrossSubdomainCookies: any = null
      let ACCESS_COOKIE: string = 'sb-access-token'
      let REFRESH_COOKIE: string = 'sb-refresh-token'
      
      try {
        // Strategy 1: Direct import
        const authRedirectModule = await import('../utils/authRedirect')
        ensureCrossSubdomainCookies = authRedirectModule.ensureCrossSubdomainCookies
        ACCESS_COOKIE = authRedirectModule.ACCESS_COOKIE || 'sb-access-token'
        REFRESH_COOKIE = authRedirectModule.REFRESH_COOKIE || 'sb-refresh-token'
        console.log('[auth][enhanced] Successfully imported authRedirect module')
      } catch (importError) {
        console.warn('[auth][enhanced] Failed to import authRedirect module:', importError)
        
        // Strategy 2: Try to access from global scope
        if (typeof window !== 'undefined' && (window as any).ensureCrossSubdomainCookies) {
          ensureCrossSubdomainCookies = (window as any).ensureCrossSubdomainCookies
          console.log('[auth][enhanced] Using global ensureCrossSubdomainCookies')
        }
      }
      
      // If we have the function, call it
      if (ensureCrossSubdomainCookies && typeof ensureCrossSubdomainCookies === 'function') {
        ensureCrossSubdomainCookies([ACCESS_COOKIE, REFRESH_COOKIE])
        console.log('[auth][enhanced] Cross-subdomain cookies synchronized')
      } else {
        console.warn('[auth][enhanced] ensureCrossSubdomainCookies not available, skipping cookie sync')
      }
      
      // Add a small delay to ensure cookies are properly set
      await new Promise(resolve => setTimeout(resolve, 100))
      
      // First check Supabase session (highest priority)
      let session = null
      try {
        const supabase = await getSupabase()
        const result = await supabase.auth.getSession()
        session = result?.data?.session
      } catch (error) {
        console.warn('[auth][enhanced] Error getting Supabase session:', error)
        // Continue with cookie restoration attempt
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
      const restoreResult = await restoreSessionWithRetry()
      
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
        
        // Try one more time with a longer delay for cross-subdomain sync
        console.log('[auth][enhanced] Retrying session restoration with extended delay...')
        await new Promise(resolve => setTimeout(resolve, 500))
        ensureCrossSubdomainCookies([ACCESS_COOKIE, REFRESH_COOKIE])
        
        const retryResult = await restoreSessionWithRetry()
        if (retryResult.success && retryResult.session) {
          console.log('[auth][enhanced] Session restored on retry')
          const user = retryResult.session.user
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
          
          currentSession.value = retryResult.session
          return { user: userData, session: currentSession.value, error: null }
        }
      }
      
    } catch (e) { 
      console.error('Error getting Supabase session:', e)
      
      // Check if this is the specific "ne is not a function" error
      if (e && typeof e === 'object' && 'message' in e && 
          typeof e.message === 'string' && e.message.includes('ne is not a function')) {
        console.warn('[auth][enhanced] Caught "ne is not a function" error - this is handled gracefully')
        console.warn('[auth][enhanced] The ensureCrossSubdomainCookies function import failed, but continuing...')
      }
      
      // Try to restore session even if getSession fails
      try {
        const restoreResult = await restoreSessionWithRetry()
        if (restoreResult.success && restoreResult.session) {
          console.log('[auth][enhanced] Session restored after error')
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
        }
      } catch (restoreError) {
        console.error('Error restoring session:', restoreError)
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
