// GitHub configuration for the header package
import { getSupabase } from '../lib/supabase'

let globalGitHubToken: string | null = null

export interface GitHubConfig {
  token: string
}

// Validate GitHub token format
const isValidGitHubToken = (token: string): boolean => {
  // GitHub tokens should be non-empty strings
  // Classic tokens start with 'ghp_', fine-grained tokens start with 'github_pat_'
  if (!token || typeof token !== 'string' || token.trim().length === 0) {
    return false
  }
  
  const trimmedToken = token.trim()
  
  // Basic format validation - GitHub tokens are typically 40+ characters
  if (trimmedToken.length < 20) {
    return false
  }
  
  return true
}

// Create admin Supabase client for settings access
const getAdminSupabase = async () => {
  try {
    const { createClient } = await import('@supabase/supabase-js')
    
    // Try to use service role key if available
    const serviceKey = (import.meta as any).env?.VITE_SUPABASE_SERVICE_ROLE_KEY ||
                      (import.meta as any).env?.VITE_SUPABASE_SERVICE_KEY ||
                      (window as any).__SUPABASE_SERVICE_KEY__
    
    if (serviceKey) {
      console.log('[GitHub Config] Using service role key for settings access')
      return createClient(
        (import.meta as any).env?.VITE_SUPABASE_URL || 'https://sb.aiworkspace.pro',
        serviceKey
      )
    }
    
    // Fallback to regular client
    console.log('[GitHub Config] No service key found, using regular client')
    return await getSupabase()
  } catch (error) {
    console.warn('[GitHub Config] Failed to create admin client, using regular client:', error)
    return await getSupabase()
  }
}

// Fetch GitHub token from database
const fetchGitHubTokenFromDB = async (): Promise<string | null> => {
  try {
    console.log('[GitHub Config] Attempting to fetch GitHub token from database...')
    const supabase = await getAdminSupabase()
    
    // Try different approaches to access the settings table
    console.log('[GitHub Config] Testing table access methods...')
    
    // Method 1: Direct query (might fail due to RLS)
    const { data: allRows, error: allRowsError } = await supabase
      .from('settings')
      .select('key_name, key_value')
    
    // Method 2: If direct query fails, try with auth bypass
    let finalRows = allRows
    let finalError = allRowsError
    
    if (allRowsError && allRowsError.code === 'PGRST301') {
      console.log('[GitHub Config] Direct access blocked by RLS, trying alternative method...')
      
      // Try accessing with explicit auth
      const { data: authRows, error: authError } = await supabase
        .from('settings')
        .select('key_name, key_value')
        .eq('key_name', 'github_token')
      
      finalRows = authRows
      finalError = authError
    }
    
    console.log('[GitHub Config] All settings rows:', finalRows)
    console.log('[GitHub Config] Query error (if any):', finalError)
    
    // Check for github_token specifically with case variations
    if (finalRows) {
      console.log('[GitHub Config] Looking for github_token in rows...')
      const githubRows = finalRows.filter((row: any) => 
        row.key_name && (
          row.key_name.toLowerCase() === 'github_token' ||
          row.key_name === 'github_token' ||
          row.key_name.includes('github')
        )
      )
      console.log('[GitHub Config] GitHub-related rows found:', githubRows)
      
      // If we found the token in the general query, return it directly
      if (githubRows.length > 0) {
        const token = githubRows[0].key_value?.trim()
        if (token && isValidGitHubToken(token)) {
          console.log('🔧 GitHub token found in general query!')
          console.log('Token preview:', token.substring(0, 8) + '...' + token.substring(token.length - 4))
          console.log('Token length:', token.length)
          console.log('Token starts with:', token.substring(0, 4))
          return token
        }
      }
    }
    
    // Now try the specific query with better error handling
    const { data, error, count } = await supabase
      .from('settings')
      .select('key_value', { count: 'exact' })
      .eq('key_name', 'github_token')
    
    console.log('[GitHub Config] Specific query result:', { data, error, count })

    if (error) {
      console.warn('[GitHub Config] Database error details:', {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint
      })
      
      if (error.code === 'PGRST116') {
        console.info('[GitHub Config] No GitHub token configured in database (PGRST116)')
      } else {
        console.warn('[GitHub Config] Error fetching token from database:', error.message)
      }
      return null
    }

    // Handle the case where data is an array (without .single())
    const tokenData = Array.isArray(data) ? data[0] : data
    
    if (tokenData?.key_value) {
      const token = tokenData.key_value.trim()
      
      if (!isValidGitHubToken(token)) {
        console.warn('[GitHub Config] Invalid GitHub token format in database')
        return null
      }
      
      console.log('🔧 GitHub token fetched from database successfully')
      console.log('Token preview:', token.substring(0, 8) + '...' + token.substring(token.length - 4))
      console.log('Token length:', token.length)
      console.log('Token starts with:', token.substring(0, 4))
      return token
    }

    console.warn('[GitHub Config] No GitHub token found in database - data was:', tokenData)
    return null
  } catch (error) {
    console.error('[GitHub Config] Failed to fetch token from database:', error)
    return null
  }
}

// Configure GitHub token (similar to configureSupabase)
export const configureGitHub = (config: GitHubConfig) => {
  if (!config?.token || !isValidGitHubToken(config.token)) {
    console.error('[GitHub Config] Invalid GitHub token provided')
    throw new Error('Invalid GitHub token provided')
  }
  
  globalGitHubToken = config.token.trim()
  console.log('🔧 GitHub token configured manually')
}

// Get GitHub token - first try global config, then fetch from database
export const getGitHubToken = async (): Promise<string | null> => {
  // First check if we have a manually configured token
  if (globalGitHubToken) {
    return globalGitHubToken
  }

  // Fetch from database if no manual configuration
  try {
    const tokenFromDB = await fetchGitHubTokenFromDB()
    if (tokenFromDB) {
      // Cache the token for subsequent calls
      globalGitHubToken = tokenFromDB
      return tokenFromDB
    }
  } catch (error) {
    console.error('[GitHub Config] Failed to fetch token:', error)
  }

  return null
}

// Check if GitHub token is configured (either manually or in database)
export const isGitHubConfigured = async (): Promise<boolean> => {
  // Check if manually configured first
  if (globalGitHubToken !== null) {
    return true
  }

  // Check database
  try {
    const token = await getGitHubToken()
    return token !== null
  } catch (error) {
    console.error('[GitHub Config] Error checking configuration:', error)
    return false
  }
}

// Clear cached token to force fresh database fetch
export const clearGitHubTokenCache = (): void => {
  globalGitHubToken = null
  console.log('🔧 GitHub token cache cleared')
}

// Refresh GitHub token from database (clears cache and fetches fresh)
export const refreshGitHubToken = async (): Promise<string | null> => {
  clearGitHubTokenCache()
  return await getGitHubToken()
}

// Debug function to test database connection and table structure
export const debugDatabaseConnection = async (): Promise<void> => {
  try {
    console.log('[GitHub Config Debug] Testing database connection...')
    const supabase = await getSupabase()
    
    // Test basic connection
    const { data: testData, error: testError } = await supabase
      .from('settings')
      .select('*')
      .limit(10)
    
    console.log('[GitHub Config Debug] Settings table sample (first 10 rows):', testData)
    console.log('[GitHub Config Debug] Query error:', testError)
    
    if (testData) {
      console.log('[GitHub Config Debug] Column structure of first row:', Object.keys(testData[0] || {}))
      console.log('[GitHub Config Debug] All key_name values:', testData.map((row: any) => row.key_name))
    }
    
    // Test specific GitHub token query with exact match
    const { data: exactMatch, error: exactError } = await supabase
      .from('settings')
      .select('*')
      .eq('key_name', 'github_token')
    
    console.log('[GitHub Config Debug] Exact github_token match:', exactMatch)
    console.log('[GitHub Config Debug] Exact match error:', exactError)
    
    // Test with case-insensitive search
    const { data: githubData, error: githubError } = await supabase
      .from('settings')
      .select('*')
      .ilike('key_name', '%github%')
    
    console.log('[GitHub Config Debug] Case-insensitive GitHub search:', githubData)
    console.log('[GitHub Config Debug] Case-insensitive error:', githubError)
    
    // Test table structure
    const { data: tableInfo, error: tableError } = await supabase
      .rpc('get_table_columns', { table_name: 'settings' })
      .limit(1)
    
    console.log('[GitHub Config Debug] Table structure info:', tableInfo)
    console.log('[GitHub Config Debug] Table structure error:', tableError)
    
  } catch (error) {
    console.error('[GitHub Config Debug] Database connection test failed:', error)
  }
}
