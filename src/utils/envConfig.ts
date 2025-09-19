/**
 * Environment configuration utilities for non-VITE prefixed variables
 * This helps consuming apps use non-prefixed environment variables securely
 */

export interface EnvConfig {
  supabaseUrl: string
  supabaseAnonKey: string
  apexDomain?: string
}

/**
 * Load environment configuration from various sources
 * This function tries multiple strategies to get environment variables
 */
export function loadEnvConfig(): EnvConfig | null {
  let supabaseUrl = ''
  let supabaseAnonKey = ''
  let apexDomain = ''

  // Strategy 1: Try import.meta.env (Vite build-time variables)
  if ((import.meta as any).env) {
    const env = (import.meta as any).env
    supabaseUrl = env.VITE_SUPABASE_URL || env.SUPABASE_URL || ''
    supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY || env.SUPABASE_ANON_KEY || ''
    apexDomain = env.VITE_APEX_DOMAIN || env.APEX_DOMAIN || ''
  }

  // Strategy 2: Try process.env (Node.js environments)
  if ((!supabaseUrl || !supabaseAnonKey) && typeof process !== 'undefined' && process.env) {
    supabaseUrl = supabaseUrl || process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || ''
    supabaseAnonKey = supabaseAnonKey || process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || ''
    apexDomain = apexDomain || process.env.VITE_APEX_DOMAIN || process.env.APEX_DOMAIN || ''
  }

  // Strategy 3: Try window globals (runtime configuration)
  if ((!supabaseUrl || !supabaseAnonKey) && typeof window !== 'undefined') {
    const win = window as any
    supabaseUrl = supabaseUrl || win.__SUPABASE_URL__ || ''
    supabaseAnonKey = supabaseAnonKey || win.__SUPABASE_ANON_KEY__ || ''
    apexDomain = apexDomain || win.__APEX_DOMAIN__ || ''
  }

  if (supabaseUrl && supabaseAnonKey) {
    return {
      supabaseUrl,
      supabaseAnonKey,
      apexDomain
    }
  }

  return null
}

/**
 * Auto-configure Supabase from environment variables
 * This is a convenience function for consuming apps
 */
export function autoConfigureFromEnv() {
  const config = loadEnvConfig()
  if (config) {
    // Dynamic import to avoid circular dependency
    import('../lib/supabase').then(({ configureSupabase }) => {
      configureSupabase({
        url: config.supabaseUrl,
        anonKey: config.supabaseAnonKey
      })
      console.log('[EnvConfig] Auto-configured Supabase from environment variables')
    }).catch(error => {
      console.warn('[EnvConfig] Failed to auto-configure Supabase:', error)
    })
  } else {
    console.warn('[EnvConfig] No valid environment configuration found')
  }
}

/**
 * Debug helper to show what environment variables are available
 */
export function debugEnvConfig() {
  const config = loadEnvConfig()
  console.log('[EnvConfig] Debug info:', {
    config,
    importMetaEnv: (import.meta as any).env,
    processEnv: typeof process !== 'undefined' ? {
      SUPABASE_URL: !!process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: !!process.env.SUPABASE_ANON_KEY,
      VITE_SUPABASE_URL: !!process.env.VITE_SUPABASE_URL,
      VITE_SUPABASE_ANON_KEY: !!process.env.VITE_SUPABASE_ANON_KEY
    } : 'N/A'
  })
}
