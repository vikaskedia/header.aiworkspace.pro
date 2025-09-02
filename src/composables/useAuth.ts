import { ref, onMounted } from 'vue'
import type { User, AuthState } from '../types'

const AUTH_COOKIE_NAME = 'aiworkspace_auth'
const USER_ID_COOKIE_NAME = 'aiworkspace_user_id'

export function useAuth() {
  const authState = ref<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  })

  const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null
    return null
  }

  const setCookie = (name: string, value: string, days = 7): void => {
    const expires = new Date()
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000))
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;domain=.aiworkspace.pro`
  }

  const clearCookie = (name: string): void => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.aiworkspace.pro`
  }

  const checkAuth = async (): Promise<void> => {
    try {
      const authToken = getCookie(AUTH_COOKIE_NAME)
      const userId = getCookie(USER_ID_COOKIE_NAME)

      if (authToken && userId) {
        // Verify token with Supabase or your auth service
        // For now, we'll assume the cookie is valid
        authState.value = {
          user: { id: userId, email: '' }, // You can fetch full user data here
          isAuthenticated: true,
          isLoading: false
        }
      } else {
        authState.value = {
          user: null,
          isAuthenticated: false,
          isLoading: false
        }
      }
    } catch (error) {
      console.error('Auth check failed:', error)
      authState.value = {
        user: null,
        isAuthenticated: false,
        isLoading: false
      }
    }
  }

  const logout = (): void => {
    clearCookie(AUTH_COOKIE_NAME)
    clearCookie(USER_ID_COOKIE_NAME)
    authState.value = {
      user: null,
      isAuthenticated: false,
      isLoading: false
    }
  }

  onMounted(() => {
    checkAuth()
  })

  return {
    authState,
    checkAuth,
    logout,
    getCookie,
    setCookie,
    clearCookie
  }
}
