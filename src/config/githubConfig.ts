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

// Fetch GitHub token from database
const fetchGitHubTokenFromDB = async (): Promise<string | null> => {
  try {
    const supabase = await getSupabase()
    const { data, error } = await supabase
      .from('settings')
      .select('key_value')
      .eq('key_name', 'github_token')
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        console.info('[GitHub Config] No GitHub token configured in database')
      } else {
        console.warn('[GitHub Config] Error fetching token from database:', error.message)
      }
      return null
    }

    if (data?.key_value) {
      const token = data.key_value.trim()
      
      if (!isValidGitHubToken(token)) {
        console.warn('[GitHub Config] Invalid GitHub token format in database')
        return null
      }
      
      console.log('🔧 GitHub token fetched from database')
      return token
    }

    console.warn('[GitHub Config] No GitHub token found in database')
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
