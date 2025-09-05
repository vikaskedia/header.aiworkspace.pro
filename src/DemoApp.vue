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
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AIWorkspaceHeader from './components/AIWorkspaceHeader.vue'
import AuthCallback from './components/AuthCallback.vue'
import { useAuth } from './composables/useAuth'

const { isAuthenticated, user } = useAuth()

// Check if we're on the callback route
const isCallbackRoute = computed(() => {
  return window.location.pathname === '/auth/callback'
})

const handleLogin = () => {
  console.log('Login event received')
}

const handleLogout = () => {
  console.log('Logout event received')
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