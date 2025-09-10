// GitHub configuration for the header package
let globalGitHubToken: string | null = null

export interface GitHubConfig {
  token: string
}

// Configure GitHub token (similar to configureSupabase)
export const configureGitHub = (config: GitHubConfig) => {
  globalGitHubToken = config.token
  console.log('🔧 GitHub token configured')
}

// Get GitHub token from global config
export const getGitHubToken = (): string | null => {
  return globalGitHubToken
}

// Check if GitHub token is configured
export const isGitHubConfigured = (): boolean => {
  return globalGitHubToken !== null
}
