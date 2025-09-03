import { ref, computed, onMounted, watch } from 'vue'
import { supabase } from '../lib/supabase'
import { restoreSessionWithRetry } from '../plugins/crossSubdomainAuth'
import { clearSessionCookie, ACCESS_COOKIE, REFRESH_COOKIE, clearLocalStorageTokens } from '../utils/authRedirect'
import type { User, AuthState, Session, AuthResult } from '../types'

export function useEnhancedAuth() {
  const authState = ref<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  })

  const currentSession = ref<Session | null>(null)

  // Computed properties
  const isAuthenticated = computed(() => authState.value.isAuthenticated)
  const currentUser = computed(() => authState.value.user)
  const isLoading = computed(() => authState.value.isLoading)

  // Load user info from Supabase session
  const loadUserInfo = async (): Promise<AuthResult> => {
    try {
      // First check Supabase session (highest priority)
      const { data: { session } } = await supabase.auth.getSession()
      if (session && session.user) {
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
          isLoading: false
        }
        
        currentSession.value = {
          user: userData,
          access_token: session.access_token,
          refresh_token: session.refresh_token
        }
        
        return { success: true, session: currentSession.value }
      }
      
      // If no active session, try to restore from cookies
      console.log('[auth][enhanced] No active session, attempting to restore from cookies...')
      const restoreResult = await restoreSessionWithRetry()
      
      if (restoreResult.success && restoreResult.session) {
        console.log('[auth][enhanced] Session restored successfully')
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
          isLoading: false
        }
        
        currentSession.value = restoreResult.session
        return { success: true, session: currentSession.value }
      } else {
        console.log('[auth][enhanced] Failed to restore session:', restoreResult.error)
      }
      
    } catch (e) { 
      console.error('Error getting Supabase session:', e)
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
            isLoading: false
          }
          
          currentSession.value = restoreResult.session
          return { success: true, session: currentSession.value }
        }
      } catch (restoreError) {
        console.error('Error restoring session:', restoreError)
      }
    }

    // No valid authentication found
    authState.value = {
      user: null,
      isAuthenticated: false,
      isLoading: false
    }
    
    currentSession.value = null
    return { success: false, error: 'No valid session found' }
  }

  // Sign out user
  const logout = async (): Promise<void> => {
    try {
      // Clear Supabase session
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
        isLoading: false
      }
      
      currentSession.value = null
      
      console.log('[auth][enhanced] User logged out successfully')
    } catch (error) {
      console.error('Error during logout:', error)
      // Still clear local state even if Supabase logout fails
      authState.value = {
        user: null,
        isAuthenticated: false,
        isLoading: false
      }
      currentSession.value = null
    }
  }

  // Sign in with email/password
  const signIn = async (email: string, password: string): Promise<AuthResult> => {
    try {
      authState.value.isLoading = true
      
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
          isLoading: false
        }
        
        currentSession.value = {
          user: userData,
          access_token: data.session.access_token,
          refresh_token: data.session.refresh_token
        }
        
        return { success: true, session: currentSession.value }
      }
      
      return { success: false, error: 'No session returned' }
    } catch (error) {
      console.error('Sign in error:', error)
      authState.value.isLoading = false
      return { success: false, error }
    }
  }

  // Sign up with email/password
  const signUp = async (email: string, password: string, metadata?: any): Promise<AuthResult> => {
    try {
      authState.value.isLoading = true
      
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
          isLoading: false
        }
        
        currentSession.value = {
          user: userData,
          access_token: data.session.access_token,
          refresh_token: data.session.refresh_token
        }
        
        return { success: true, session: currentSession.value }
      }
      
      return { success: false, error: 'No session returned' }
    } catch (error) {
      console.error('Sign up error:', error)
      authState.value.isLoading = false
      return { success: false, error }
    }
  }

  // Check auth status
  const checkAuth = async (): Promise<void> => {
    await loadUserInfo()
  }

  // Initialize auth on mount
  onMounted(() => {
    checkAuth()
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
