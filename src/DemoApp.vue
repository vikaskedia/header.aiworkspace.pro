<template>
  <div id="app">
    <!-- Show AuthCallback component if we're on the callback route -->
    <AuthCallback v-if="isCallbackRoute" />
    
    <!-- Show main app if not on callback route -->
    <div v-else>
      <AIWorkspaceHeader 
        :show-workspace-selector="true"
        :show-secondary-navigation="true"
        @login="handleLogin"
        @logout="handleLogout"
      />
      
      <main style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
        <div v-if="isAuthenticated">
          <h1>Welcome to AI Workspace!</h1>
          <p>You are logged in as: {{ user?.email }}</p>
          <p>This is a demo of the header component with authentication.</p>
        </div>
        <div v-else>
          <h1>AI Workspace Demo</h1>
          <p>Please log in to access the workspace features.</p>
          <p>Click the "Login / Signup" button in the header to get started.</p>
        </div>
        
        <!-- Debug Section -->
        <div style="margin-top: 2rem; padding: 1rem; border: 1px solid #e2e8f0; border-radius: 8px; background: #f7fafc;">
          <h3>🔧 Debug GitHub Configuration</h3>
          <div style="margin-bottom: 1rem;">
            <button @click="testGitHubToken" style="background: #3182ce; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; margin-right: 1rem; cursor: pointer;">
              Test GitHub Token Fetch
            </button>
            <button @click="debugDatabase" style="background: #38a169; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; margin-right: 1rem; cursor: pointer;">
              Debug Database
            </button>
            <button @click="clearLogs" style="background: #e53e3e; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;">
              Clear Logs
            </button>
          </div>
          <div v-if="debugLogs.length" style="max-height: 300px; overflow-y: auto; background: #1a202c; color: #f7fafc; padding: 1rem; border-radius: 4px; font-family: monospace; font-size: 12px;">
            <div v-for="log in debugLogs" :key="log.id" style="margin-bottom: 0.25rem;">
              <span :style="{ color: log.level === 'error' ? '#fc8181' : log.level === 'warn' ? '#f6e05e' : log.level === 'success' ? '#68d391' : '#cbd5e0' }">
                [{{ log.timestamp }}] {{ log.message }}
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import AIWorkspaceHeader from './components/AIWorkspaceHeader.vue'
import AuthCallback from './components/AuthCallback.vue'
import { useAuth } from './composables/useAuth'
import { getGitHubToken, debugDatabaseConnection } from './config/githubConfig'

const { isAuthenticated, user } = useAuth()

// Debug logs
const debugLogs = ref<Array<{id: number, timestamp: string, message: string, level: string}>>([])
let logId = 0

const addLog = (message: string, level: 'info' | 'success' | 'warn' | 'error' = 'info') => {
  debugLogs.value.push({
    id: logId++,
    timestamp: new Date().toLocaleTimeString(),
    message,
    level
  })
  // Keep only last 50 logs
  if (debugLogs.value.length > 50) {
    debugLogs.value = debugLogs.value.slice(-50)
  }
}

// Check if we're on the callback route (support both path and hash)
const isCallbackRoute = computed(() => {
  return window.location.pathname === '/auth/callback' || 
         window.location.hash === '#/auth/callback' ||
         window.location.hash.startsWith('#/auth/callback') ||
         window.location.hash.includes('access_token=') ||
         window.location.search.includes('access_token=')
})

const handleLogin = () => {
  console.log('Login event received')
}

const handleLogout = () => {
  console.log('Logout event received')
}

// Debug functions
const testGitHubToken = async () => {
  addLog('🚀 Testing GitHub token fetch...', 'info')
  
  try {
    // First check if we can get Supabase client
    const { getSupabase } = await import('./lib/supabase')
    const supabase = await getSupabase()
    addLog('✅ Supabase client obtained', 'success')
    
    // Check current session
    const { data: session, error: sessionError } = await supabase.auth.getSession()
    addLog(`Session status: ${session?.session ? 'Authenticated' : 'Not authenticated'}`, 'info')
    if (sessionError) {
      addLog(`Session error: ${sessionError.message}`, 'warn')
    }
    
    const token = await getGitHubToken()
    
    if (token) {
      addLog(`✅ GitHub token retrieved: ${token.substring(0, 8)}...`, 'success')
    } else {
      addLog('❌ No GitHub token found', 'warn')
    }
  } catch (error) {
    addLog(`❌ Error fetching GitHub token: ${error}`, 'error')
    console.error('Full error details:', error)
  }
}

const debugDatabase = async () => {
  addLog('🔍 Running database connection debug...', 'info')
  
  try {
    const { getSupabase } = await import('./lib/supabase')
    const supabase = await getSupabase()
    
    // Test 1: Basic connection
    addLog('Testing basic Supabase connection...', 'info')
    
    // Test 2: Check if settings table exists and is accessible
    addLog('Testing settings table access...', 'info')
    const { data: settingsData, error: settingsError } = await supabase
      .from('settings')
      .select('count(*)', { count: 'exact', head: true })
    
    if (settingsError) {
      addLog(`❌ Settings table error: ${settingsError.message}`, 'error')
      addLog(`Error code: ${settingsError.code}`, 'error')
      addLog(`Error details: ${JSON.stringify(settingsError.details)}`, 'error')
    } else {
      addLog(`✅ Settings table accessible, row count: ${settingsData || 'unknown'}`, 'success')
    }
    
    // Test 3: Try to get actual data
    const { data: actualData, error: dataError } = await supabase
      .from('settings')
      .select('key_name, key_value')
      .limit(3)
    
    if (dataError) {
      addLog(`❌ Data fetch error: ${dataError.message}`, 'error')
    } else {
      addLog(`✅ Sample data retrieved: ${actualData?.length || 0} rows`, 'success')
      actualData?.forEach((row: any, index: number) => {
        addLog(`  Row ${index + 1}: ${row.key_name} = ${row.key_value?.substring(0, 20)}...`, 'info')
      })
    }
    
    await debugDatabaseConnection()
    addLog('✅ Database debug completed - check browser console for details', 'success')
  } catch (error) {
    addLog(`❌ Database debug failed: ${error}`, 'error')
  }
}

const clearLogs = () => {
  debugLogs.value = []
  addLog('🧹 Logs cleared', 'info')
}
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background-color: #f8fafc;
}

#app {
  min-height: 100vh;
}
</style>