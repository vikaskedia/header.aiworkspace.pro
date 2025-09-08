import { ensureCrossSubdomainCookies, ACCESS_COOKIE, REFRESH_COOKIE } from '../utils/authRedirect'
import { setupAuthStateListener } from '../plugins/crossSubdomainAuth'

// Safe Supabase client creation function
async function createSupabaseClient() {
  try {
    // Try to import Supabase client
    const { createClient } = await import('@supabase/supabase-js')
    return createClient
  } catch (importError) {
    console.warn('[Supabase] Failed to import @supabase/supabase-js:', importError)
    
    // Fallback: try to access from global scope
    if (typeof window !== 'undefined' && (window as any).supabase?.createClient) {
      return (window as any).supabase.createClient
    }
    
    // Last resort: return a mock function
    console.error('[Supabase] No Supabase client available, using mock')
    return () => ({
      auth: {
        getSession: () => Promise.resolve({ data: { session: null }, error: null }),
        setSession: () => Promise.resolve({ data: { session: null }, error: null }),
        signOut: () => Promise.resolve({ error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
      }
    })
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

// Setup cross-subdomain authentication with error handling
if (typeof window !== 'undefined') {
  // Ensure cookies are set for cross-subdomain access
  ensureCrossSubdomainCookies([ACCESS_COOKIE, REFRESH_COOKIE])
  
  // Setup auth state listener asynchronously
  setupAuthStateListener().catch(error => {
    console.warn('[Supabase] Error setting up auth state listener:', error)
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
