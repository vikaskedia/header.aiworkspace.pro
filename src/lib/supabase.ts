import { createClient } from '@supabase/supabase-js'
import { ensureCrossSubdomainCookies, ACCESS_COOKIE, REFRESH_COOKIE } from '../utils/authRedirect'
import { setupAuthStateListener } from '../plugins/crossSubdomainAuth'

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

// Create Supabase client with error handling
let supabase: any = null

try {
  supabase = createClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      db: {
        schema: 'public'
      },
      auth: {
        storageKey: 'sb-auth-token',
        storage: typeof window !== 'undefined' ? localStorage : undefined,
        autoRefreshToken: true,
        persistSession: true
      }
    }
  )
} catch (error) {
  console.error('[Supabase] Failed to create client:', error)
  // Create a fallback client with minimal configuration
  supabase = createClient(supabaseUrl || 'https://placeholder.supabase.co', supabaseAnonKey || 'placeholder-key')
}

export { supabase }

// Setup cross-subdomain authentication with error handling
if (typeof window !== 'undefined' && supabase) {
  try {
    // Ensure cookies are set for cross-subdomain access
    ensureCrossSubdomainCookies([ACCESS_COOKIE, REFRESH_COOKIE])
    
    // Setup auth state listener
    setupAuthStateListener()
  } catch (error) {
    console.warn('[Supabase] Error setting up cross-subdomain authentication:', error)
  }
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
