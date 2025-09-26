// Test script for GitHub configuration debugging
import { getGitHubToken, debugDatabaseConnection, refreshGitHubToken } from './src/config/githubConfig.js'

async function testGitHubConfig() {
  console.log('🚀 Testing GitHub Configuration...')
  
  try {
    // Debug database connection
    console.log('\n1. Testing database connection:')
    await debugDatabaseConnection()
    
    // Test token retrieval
    console.log('\n2. Testing GitHub token retrieval:')
    const token = await getGitHubToken()
    
    if (token) {
      console.log('✅ GitHub token retrieved successfully')
      console.log('Token preview:', token.substring(0, 8) + '...')
    } else {
      console.log('❌ No GitHub token found')
    }
    
    // Test refresh functionality
    console.log('\n3. Testing token refresh:')
    const refreshedToken = await refreshGitHubToken()
    
    if (refreshedToken) {
      console.log('✅ GitHub token refreshed successfully')
    } else {
      console.log('❌ Token refresh failed')
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error)
  }
}

// Run the test
testGitHubConfig().then(() => {
  console.log('\n✨ Test completed')
}).catch(error => {
  console.error('❌ Test execution failed:', error)
})