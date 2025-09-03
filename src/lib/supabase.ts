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

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    db: {
      schema: 'public'
    },
    auth: {
      storageKey: 'sb-auth-token',
      storage: localStorage,
      autoRefreshToken: true,
      persistSession: true
    }
  }
)

// Setup cross-subdomain authentication
if (typeof window !== 'undefined') {
  // Ensure cookies are set for cross-subdomain access
  ensureCrossSubdomainCookies([ACCESS_COOKIE, REFRESH_COOKIE])
  
  // Setup auth state listener
  setupAuthStateListener()
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
