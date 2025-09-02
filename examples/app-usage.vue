<template>
  <div class="app">
    <!-- Shared Header Component -->
    <AIWorkspaceHeader 
      :custom-links="appNavigation"
      :custom-logo="/app-logo.svg"
      :show-notifications="true"
      :show-user-menu="true"
    />
    
    <!-- App-specific content -->
    <main class="app-content">
      <h1>Welcome to {{ appName }}</h1>
      <p>This app uses the shared header component</p>
      
      <!-- App-specific navigation -->
      <nav class="app-nav">
        <router-link 
          v-for="link in appNavigation" 
          :key="link.label"
          :to="link.url"
          class="app-nav-link"
        >
          {{ link.label }}
        </router-link>
      </nav>
    </main>
  </div>
</template>

<script setup lang="ts">
import { AIWorkspaceHeader } from '@aiworkspace/shared-header'

// App-specific configuration
const appName = 'Dashboard App'
const appNavigation = [
  { label: 'Dashboard', url: '/dashboard' },
  { label: 'Analytics', url: '/analytics' },
  { label: 'Reports', url: '/reports' },
  { label: 'Settings', url: '/settings' }
]
</script>

<style scoped>
.app {
  min-height: 100vh;
}

.app-content {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.app-nav {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.app-nav-link {
  padding: 0.75rem 1.5rem;
  background-color: #f3f4f6;
  color: #374151;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all 0.2s;
}

.app-nav-link:hover {
  background-color: #e5e7eb;
  color: #1f2937;
}

.app-nav-link.router-link-active {
  background-color: #3b82f6;
  color: white;
}
</style>
