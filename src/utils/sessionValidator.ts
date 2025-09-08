import { getSupabase } from '../lib/supabase'
import { ACCESS_COOKIE, REFRESH_COOKIE, getCookie } from './authRedirect'
import { getSessionConfig } from '../config/sessionConfig'

export interface SessionValidationResult {
  isValid: boolean
  needsLogin: boolean
  error?: string
  canRetry: boolean
}

/**
 * Global session validation utility for all apps
 * This can be used to validate sessions across different applications
 */
export class SessionValidator {
  private static instance: SessionValidator
  private validationCache = new Map<string, { result: SessionValidationResult; timestamp: number }>()
  private readonly CACHE_DURATION = getSessionConfig().validationCacheDuration

  static getInstance(): SessionValidator {
    if (!SessionValidator.instance) {
      SessionValidator.instance = new SessionValidator()
    }
    return SessionValidator.instance
  }

  /**
   * Validate current session with caching
   */
  async validateSession(forceRefresh = false): Promise<SessionValidationResult> {
    const cacheKey = 'session_validation'
    
    // Check cache first (unless force refresh)
    if (!forceRefresh) {
      const cached = this.validationCache.get(cacheKey)
      if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
        console.log('[SessionValidator] Using cached validation result')
        return cached.result
      }
    }

    console.log('[SessionValidator] Validating session...')
    
    try {
      // Check if we have tokens
      const accessToken = getCookie(ACCESS_COOKIE)
      const refreshToken = getCookie(REFRESH_COOKIE)
      
      if (!accessToken || !refreshToken) {
        const result: SessionValidationResult = {
          isValid: false,
          needsLogin: true,
          error: 'No authentication tokens found',
          canRetry: false
        }
        this.cacheResult(cacheKey, result)
        return result
      }

      // Check Supabase session
      const supabase = await getSupabase()
      const { data: { session }, error } = await supabase.auth.getSession()
      
      if (error) {
        console.warn('[SessionValidator] Error getting session:', error)
        const result: SessionValidationResult = {
          isValid: false,
          needsLogin: true,
          error: `Session error: ${error.message}`,
          canRetry: true
        }
        this.cacheResult(cacheKey, result)
        return result
      }

      if (!session || !session.user) {
        const result: SessionValidationResult = {
          isValid: false,
          needsLogin: true,
          error: 'No valid session found',
          canRetry: true
        }
        this.cacheResult(cacheKey, result)
        return result
      }

      // Check if session is expired
      const now = new Date()
      const expiresAt = new Date(session.expires_at! * 1000)
      
      if (now >= expiresAt) {
        const result: SessionValidationResult = {
          isValid: false,
          needsLogin: true,
          error: 'Session has expired',
          canRetry: true
        }
        this.cacheResult(cacheKey, result)
        return result
      }

      // Session is valid
      const result: SessionValidationResult = {
        isValid: true,
        needsLogin: false,
        canRetry: false
      }
      this.cacheResult(cacheKey, result)
      return result
      
    } catch (error) {
      console.error('[SessionValidator] Error validating session:', error)
      const result: SessionValidationResult = {
        isValid: false,
        needsLogin: true,
        error: `Validation error: ${error}`,
        canRetry: true
      }
      this.cacheResult(cacheKey, result)
      return result
    }
  }

  /**
   * Attempt to restore session from tokens
   */
  async restoreSession(): Promise<SessionValidationResult> {
    console.log('[SessionValidator] Attempting to restore session...')
    
    try {
      const accessToken = getCookie(ACCESS_COOKIE)
      const refreshToken = getCookie(REFRESH_COOKIE)
      
      if (!accessToken || !refreshToken) {
        return {
          isValid: false,
          needsLogin: true,
          error: 'No tokens available for restoration',
          canRetry: false
        }
      }

      const supabase = await getSupabase()
      const { data, error } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken
      })

      if (error) {
        console.warn('[SessionValidator] Error restoring session:', error)
        return {
          isValid: false,
          needsLogin: true,
          error: `Restoration error: ${error.message}`,
          canRetry: true
        }
      }

      if (data.session && data.session.user) {
        console.log('[SessionValidator] Session restored successfully')
        // Clear cache to force revalidation
        this.clearCache()
        return {
          isValid: true,
          needsLogin: false,
          canRetry: false
        }
      }

      return {
        isValid: false,
        needsLogin: true,
        error: 'Session restoration failed',
        canRetry: true
      }
      
    } catch (error) {
      console.error('[SessionValidator] Error restoring session:', error)
      return {
        isValid: false,
        needsLogin: true,
        error: `Restoration error: ${error}`,
        canRetry: true
      }
    }
  }

  /**
   * Clear validation cache
   */
  clearCache(): void {
    this.validationCache.clear()
    console.log('[SessionValidator] Cache cleared')
  }

  /**
   * Cache validation result
   */
  private cacheResult(key: string, result: SessionValidationResult): void {
    this.validationCache.set(key, {
      result,
      timestamp: Date.now()
    })
  }

  /**
   * Get cached validation result
   */
  getCachedResult(): SessionValidationResult | null {
    const cached = this.validationCache.get('session_validation')
    if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
      return cached.result
    }
    return null
  }
}

// Export singleton instance
export const sessionValidator = SessionValidator.getInstance()

// Convenience functions
export const validateSession = (forceRefresh = false) => sessionValidator.validateSession(forceRefresh)
export const restoreSession = () => sessionValidator.restoreSession()
export const clearSessionCache = () => sessionValidator.clearCache()

// Global session validation for app initialization
export async function initializeSessionValidation(): Promise<SessionValidationResult> {
  console.log('[SessionValidator] Initializing session validation...')
  
  // First try to validate existing session
  let result = await validateSession()
  
  // If validation failed but we can retry, try to restore
  if (!result.isValid && result.canRetry) {
    console.log('[SessionValidator] Attempting session restoration...')
    result = await restoreSession()
  }
  
  return result
}

// Network-aware session validation
export function setupNetworkAwareValidation(): () => void {
  if (typeof window === 'undefined') {
    return () => {}
  }

  const handleOnline = () => {
    console.log('[SessionValidator] Network restored, clearing cache for revalidation')
    clearSessionCache()
  }

  const handleOffline = () => {
    console.log('[SessionValidator] Network lost, session validation may fail')
  }

  window.addEventListener('online', handleOnline)
  window.addEventListener('offline', handleOffline)

  // Return cleanup function
  return () => {
    window.removeEventListener('online', handleOnline)
    window.removeEventListener('offline', handleOffline)
  }
}
