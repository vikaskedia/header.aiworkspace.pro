import { getSupabase } from '../lib/supabase'
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

  // Helper function to get cookie value
  private getCookieValue(name: string): string | null {
    if (typeof document === 'undefined') return null
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null
    }
    return null
  }

  static getInstance(): SessionValidator {
    if (!SessionValidator.instance) {
      SessionValidator.instance = new SessionValidator()
    }
    return SessionValidator.instance
  }

  /**
   * Validate current session with caching and improved reliability
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
      const accessToken = this.getCookieValue('sb-access-token')
      const refreshToken = this.getCookieValue('sb-refresh-token')
      
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

      // Check Supabase session with retry logic
      const supabase = await getSupabase()
      let session = null
      let error = null
      
      // Try to get session with retry for network issues
      for (let attempt = 1; attempt <= 2; attempt++) {
        try {
          const result = await supabase.auth.getSession()
          session = result.data.session
          error = result.error
          break // Success, exit retry loop
        } catch (networkError) {
          console.warn(`[SessionValidator] Network error on attempt ${attempt}:`, networkError)
          if (attempt === 2) {
            // On final attempt, return a retry-able error instead of failing
            const result: SessionValidationResult = {
              isValid: false,
              needsLogin: false, // Don't force login on network issues
              error: 'Network error during validation',
              canRetry: true
            }
            this.cacheResult(cacheKey, result)
            return result
          }
          // Wait before retry
          await new Promise(resolve => setTimeout(resolve, 1000))
        }
      }
      
      if (error) {
        console.warn('[SessionValidator] Error getting session:', error)
        // Only treat as login required if it's a clear auth error
        const needsLogin = error.message?.includes('Invalid JWT') || error.message?.includes('JWT expired')
        const result: SessionValidationResult = {
          isValid: false,
          needsLogin,
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

      // Check if session is expired with buffer time
      const now = new Date()
      const expiresAt = new Date(session.expires_at! * 1000)
      const bufferTime = 5 * 60 * 1000 // 5 minutes buffer
      
      if (now >= new Date(expiresAt.getTime() - bufferTime)) {
        const result: SessionValidationResult = {
          isValid: false,
          needsLogin: true,
          error: 'Session is close to expiry or expired',
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
        needsLogin: false, // Don't force login on unexpected errors
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
      const accessToken = this.getCookieValue('sb-access-token')
      const refreshToken = this.getCookieValue('sb-refresh-token')
      
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
