/**
 * Error handling utilities for the AI Workspace package
 * This helps prevent common bundling and import issues
 */

export interface ErrorContext {
  component?: string
  function?: string
  operation?: string
  timestamp?: Date
}

export class PackageError extends Error {
  public context: ErrorContext
  public originalError?: Error

  constructor(message: string, context: ErrorContext = {}, originalError?: Error) {
    super(message)
    this.name = 'PackageError'
    this.context = context
    this.originalError = originalError
  }
}

/**
 * Safe function wrapper that catches and handles common errors
 */
export function safeExecute<T>(
  fn: () => T | Promise<T>,
  context: ErrorContext = {},
  fallback?: T
): T | Promise<T> | undefined {
  try {
    const result = fn()
    
    // Handle async functions
    if (result instanceof Promise) {
      return result.catch((error) => {
        console.warn(`[ErrorHandler] Async operation failed:`, {
          context,
          error: error.message,
          stack: error.stack
        })
        
        if (fallback !== undefined) {
          return fallback
        }
        
        throw new PackageError(
          `Async operation failed: ${error.message}`,
          context,
          error
        )
      })
    }
    
    return result
  } catch (error) {
    console.warn(`[ErrorHandler] Operation failed:`, {
      context,
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    })
    
    if (fallback !== undefined) {
      return fallback
    }
    
    throw new PackageError(
      `Operation failed: ${error instanceof Error ? error.message : String(error)}`,
      context,
      error instanceof Error ? error : undefined
    )
  }
}

/**
 * Safe async function wrapper
 */
export async function safeExecuteAsync<T>(
  fn: () => Promise<T>,
  context: ErrorContext = {},
  fallback?: T
): Promise<T | undefined> {
  try {
    return await fn()
  } catch (error) {
    console.warn(`[ErrorHandler] Async operation failed:`, {
      context,
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    })
    
    if (fallback !== undefined) {
      return fallback
    }
    
    throw new PackageError(
      `Async operation failed: ${error instanceof Error ? error.message : String(error)}`,
      context,
      error instanceof Error ? error : undefined
    )
  }
}

/**
 * Handle common bundling errors
 */
export function handleBundlingError(error: Error, context: ErrorContext = {}): void {
  const errorMessage = error.message.toLowerCase()
  
  // Common bundling errors
  if (errorMessage.includes('is not a function') || 
      errorMessage.includes('cannot read property') ||
      errorMessage.includes('undefined is not a function')) {
    
    console.warn(`[ErrorHandler] Bundling error detected:`, {
      context,
      error: error.message,
      suggestion: 'This may be due to minification or import issues. The package will continue with fallback behavior.'
    })
    
    // Don't throw the error, just log it
    return
  }
  
  // Re-throw other errors
  throw new PackageError(
    `Unexpected error: ${error.message}`,
    context,
    error
  )
}

/**
 * Safe import wrapper for dynamic imports
 */
export async function safeImport<T>(
  importFn: () => Promise<T>,
  context: ErrorContext = {},
  fallback?: T
): Promise<T | undefined> {
  try {
    return await importFn()
  } catch (error) {
    console.warn(`[ErrorHandler] Import failed:`, {
      context,
      error: error instanceof Error ? error.message : String(error)
    })
    
    if (fallback !== undefined) {
      return fallback
    }
    
    // For import errors, we usually want to continue with fallback behavior
    return undefined
  }
}

/**
 * Safe cookie operations
 */
export function safeGetCookie(name: string): string | null {
  try {
    if (typeof document === 'undefined') return null
    
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null
    }
    return null
  } catch (error) {
    console.warn(`[ErrorHandler] Cookie access failed:`, {
      cookieName: name,
      error: error instanceof Error ? error.message : String(error)
    })
    return null
  }
}

export function safeSetCookie(
  name: string, 
  value: string, 
  options: {
    domain?: string
    path?: string
    secure?: boolean
    sameSite?: 'strict' | 'lax' | 'none'
    maxAge?: number
  } = {}
): boolean {
  try {
    if (typeof document === 'undefined') return false
    
    let cookieString = `${name}=${value}`
    
    if (options.domain) cookieString += `; domain=${options.domain}`
    if (options.path) cookieString += `; path=${options.path}`
    if (options.secure) cookieString += `; secure`
    if (options.sameSite) cookieString += `; samesite=${options.sameSite}`
    if (options.maxAge) cookieString += `; max-age=${options.maxAge}`
    
    document.cookie = cookieString
    return true
  } catch (error) {
    console.warn(`[ErrorHandler] Cookie setting failed:`, {
      cookieName: name,
      error: error instanceof Error ? error.message : String(error)
    })
    return false
  }
}

/**
 * Safe localStorage operations
 */
export function safeGetLocalStorage(key: string): string | null {
  try {
    if (typeof localStorage === 'undefined') return null
    return localStorage.getItem(key)
  } catch (error) {
    console.warn(`[ErrorHandler] localStorage get failed:`, {
      key,
      error: error instanceof Error ? error.message : String(error)
    })
    return null
  }
}

export function safeSetLocalStorage(key: string, value: string): boolean {
  try {
    if (typeof localStorage === 'undefined') return false
    localStorage.setItem(key, value)
    return true
  } catch (error) {
    console.warn(`[ErrorHandler] localStorage set failed:`, {
      key,
      error: error instanceof Error ? error.message : String(error)
    })
    return false
  }
}

/**
 * Safe window operations
 */
export function safeWindowOperation<T>(
  operation: (window: Window) => T,
  fallback?: T
): T | undefined {
  try {
    if (typeof window === 'undefined') return fallback
    return operation(window)
  } catch (error) {
    console.warn(`[ErrorHandler] Window operation failed:`, {
      error: error instanceof Error ? error.message : String(error)
    })
    return fallback
  }
}

/**
 * Global error handler setup
 */
export function setupGlobalErrorHandler(): void {
  if (typeof window === 'undefined') return
  
  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    const error = event.reason
    
    // Check if it's a common bundling error
    if (error instanceof Error) {
      const errorMessage = error.message.toLowerCase()
      
      if (errorMessage.includes('is not a function') || 
          errorMessage.includes('cannot read property') ||
          errorMessage.includes('undefined is not a function')) {
        
        console.warn(`[ErrorHandler] Unhandled promise rejection (bundling error):`, {
          error: error.message,
          stack: error.stack
        })
        
        // Prevent the error from propagating
        event.preventDefault()
        return
      }
    }
    
    // Log other unhandled rejections
    console.error(`[ErrorHandler] Unhandled promise rejection:`, event.reason)
  })
  
  // Handle uncaught errors
  window.addEventListener('error', (event) => {
    const error = event.error
    
    if (error instanceof Error) {
      const errorMessage = error.message.toLowerCase()
      
      if (errorMessage.includes('is not a function') || 
          errorMessage.includes('cannot read property') ||
          errorMessage.includes('undefined is not a function')) {
        
        console.warn(`[ErrorHandler] Uncaught error (bundling error):`, {
          error: error.message,
          stack: error.stack
        })
        
        // Prevent the error from propagating
        event.preventDefault()
        return
      }
    }
    
    // Log other uncaught errors
    console.error(`[ErrorHandler] Uncaught error:`, event.error)
  })
}

// Setup global error handler automatically
if (typeof window !== 'undefined') {
  setupGlobalErrorHandler()
}
