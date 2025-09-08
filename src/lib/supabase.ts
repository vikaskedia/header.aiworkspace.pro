import { ensureCrossSubdomainCookies, ACCESS_COOKIE, REFRESH_COOKIE } from '../utils/authRedirect'
import { setupAuthStateListener } from '../plugins/crossSubdomainAuth'

// Safe Supabase client creation function with multiple fallback strategies
async function createSupabaseClient() {
  // Strategy 1: Try dynamic import
  try {
    const { createClient } = await import('@supabase/supabase-js')
    console.log('[Supabase] Successfully imported @supabase/supabase-js')
    return createClient
  } catch (importError) {
    console.warn('[Supabase] Failed to import @supabase/supabase-js:', importError)
  }
  
  // Strategy 2: Try to access from global scope
  if (typeof window !== 'undefined') {
    // Check for global Supabase
    if ((window as any).supabase?.createClient) {
      console.log('[Supabase] Using global Supabase client')
      return (window as any).supabase.createClient
    }
    
    // Check for global createClient function
    if ((window as any).createClient) {
      console.log('[Supabase] Using global createClient function')
      return (window as any).createClient
    }
  }
  
  // Strategy 3: Try to access from module cache or require
  try {
    if (typeof require !== 'undefined') {
      const { createClient } = require('@supabase/supabase-js')
      console.log('[Supabase] Successfully required @supabase/supabase-js')
      return createClient
    }
  } catch (requireError) {
    console.warn('[Supabase] Failed to require @supabase/supabase-js:', requireError)
  }
  
  // Strategy 4: Last resort - return a mock function that handles errors gracefully
  console.error('[Supabase] No Supabase client available, using mock with error handling')
  return (_url: string, _key: string, _options?: any) => {
    console.warn('[Supabase] Using mock client - Supabase not properly configured')
    return {
      auth: {
        getSession: async () => {
          console.warn('[Supabase] Mock getSession called - returning null session')
          return { data: { session: null }, error: null }
        },
        setSession: async (_session: any) => {
          console.warn('[Supabase] Mock setSession called - returning null session')
          return { data: { session: null }, error: null }
        },
        signOut: async () => {
          console.warn('[Supabase] Mock signOut called')
          return { error: null }
        },
        signInWithPassword: async (_credentials: any) => {
          console.warn('[Supabase] Mock signInWithPassword called')
          return { data: { session: null, user: null }, error: { message: 'Supabase not configured' } }
        },
        signUp: async (_credentials: any) => {
          console.warn('[Supabase] Mock signUp called')
          return { data: { session: null, user: null }, error: { message: 'Supabase not configured' } }
        },
        signInWithOAuth: async (_options: any) => {
          console.warn('[Supabase] Mock signInWithOAuth called')
          return { data: { session: null, user: null }, error: { message: 'Supabase not configured' } }
        },
        resetPasswordForEmail: async (_email: string, _options: any) => {
          console.warn('[Supabase] Mock resetPasswordForEmail called')
          return { data: {}, error: { message: 'Supabase not configured' } }
        },
        onAuthStateChange: (_callback: any) => {
          console.warn('[Supabase] Mock onAuthStateChange called')
          return { data: { subscription: { unsubscribe: () => {} } } }
        }
      }
    }
  }
}

// Type the environment variables
declare global {
  interface ImportMeta {
    env: {
      VITE_SUPABASE_URL: string
      VITE_SUPABASE_ANON_KEY: string
      MODE: string
    }
  }
}

// Safe environment variable access with fallbacks
const supabaseUrl = import.meta.env?.VITE_SUPABASE_URL || (typeof window !== 'undefined' ? (window as any).__SUPABASE_URL__ : '')
const supabaseAnonKey = import.meta.env?.VITE_SUPABASE_ANON_KEY || (typeof window !== 'undefined' ? (window as any).__SUPABASE_ANON_KEY__ : '')

// Validate configuration
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('[Supabase] Missing required environment variables:', {
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseAnonKey,
    env: import.meta.env
  })
}

// Create Supabase client with error handling and singleton pattern
let supabase: any = null
let initializationPromise: Promise<any> | null = null

// Initialize Supabase client asynchronously with singleton pattern
async function initializeSupabase() {
  // Return existing promise if already initializing
  if (initializationPromise) {
    return initializationPromise
  }
  
  initializationPromise = (async () => {
    try {
      const createClientFn = await createSupabaseClient()
      
      if (supabaseUrl && supabaseAnonKey) {
        supabase = createClientFn(
          supabaseUrl,
          supabaseAnonKey,
          {
            db: {
              schema: 'public'
            },
            auth: {
              storageKey: 'sb-auth-token-shared', // Use unique storage key to avoid conflicts
              storage: typeof window !== 'undefined' ? localStorage : undefined,
              autoRefreshToken: true,
              persistSession: true
            }
          }
        )
        console.log('[Supabase] Client initialized successfully')
      } else {
        console.warn('[Supabase] Missing configuration, using fallback client')
        supabase = createClientFn('https://placeholder.supabase.co', 'placeholder-key')
      }
      return supabase
    } catch (error) {
      console.error('[Supabase] Failed to initialize client:', error)
      // Create a fallback client
      const createClientFn = await createSupabaseClient()
      supabase = createClientFn('https://placeholder.supabase.co', 'placeholder-key')
      return supabase
    }
  })()
  
  return initializationPromise
}

// Initialize immediately
initializeSupabase()

// Export a getter that ensures client is initialized (singleton pattern)
export const getSupabase = async () => {
  if (!supabase) {
    await initializeSupabase()
  }
  return supabase
}

// For backward compatibility, export supabase directly
export { supabase }

// Setup cross-subdomain authentication with comprehensive error handling
if (typeof window !== 'undefined') {
  try {
    // Ensure cookies are set for cross-subdomain access
    ensureCrossSubdomainCookies([ACCESS_COOKIE, REFRESH_COOKIE])
    
    // Setup auth state listener asynchronously
    setupAuthStateListener().catch(error => {
      console.warn('[Supabase] Error setting up auth state listener:', error)
    })
  } catch (setupError) {
    console.warn('[Supabase] Error during cross-subdomain setup:', setupError)
  }
}

// Global error handler for unhandled Supabase errors
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    if (event.error && event.error.message && event.error.message.includes('ne is not a function')) {
      console.warn('[Supabase] Caught TypeError: ne is not a function - this is handled gracefully')
      event.preventDefault() // Prevent the error from propagating
    }
  })
  
  window.addEventListener('unhandledrejection', (event) => {
    if (event.reason && event.reason.message && event.reason.message.includes('ne is not a function')) {
      console.warn('[Supabase] Caught unhandled promise rejection with TypeError: ne is not a function')
      event.preventDefault() // Prevent the error from propagating
    }
  })
}

// Log configuration status (remove in production)
console.log('Supabase Configuration:', {
  url: supabaseUrl,
  hasKey: !!supabaseAnonKey,
  autoRefreshToken: true,
  persistSession: true
})
console.log('URL:', supabaseUrl.replace(/https:\/\/(.+)\.supabase\.co/, 'https://*****.supabase.co'))
console.log('Key configured:', !!supabaseAnonKey && !supabaseAnonKey.includes('your-anon-key'))
console.log('Environment mode:', import.meta.env.MODE)

// TODO: Required database tables for workspace functionality:
// 
// CREATE TABLE workspaces (
//   id BIGSERIAL PRIMARY KEY,
//   title TEXT NOT NULL,
//   description TEXT,
//   created_by UUID REFERENCES auth.users(id),
//   created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
// );
// 
// CREATE TABLE workspace_users (
//   id BIGSERIAL PRIMARY KEY,
//   user_id UUID REFERENCES auth.users(id),
//   workspace_id BIGINT REFERENCES workspaces(id),
//   access_type TEXT CHECK (access_type IN ('view', 'edit')),
//   status TEXT DEFAULT 'active',
//   created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
// );
