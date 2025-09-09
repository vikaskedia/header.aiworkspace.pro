// Example: Secure Usage of AIWorkspace Header Package
// This demonstrates how to properly configure the package without hardcoded credentials

import { createApp } from 'vue'
import { AIWorkspaceHeader, configureSupabase } from '@aiworkspace/shared-header'
import '@aiworkspace/shared-header/style.css'

// Method 1: Configure Supabase programmatically (Recommended)
configureSupabase({
  url: process.env.VITE_SUPABASE_URL,
  anonKey: process.env.VITE_SUPABASE_ANON_KEY
})

// Method 2: Alternative - Set global variables before importing
// window.__SUPABASE_URL__ = process.env.VITE_SUPABASE_URL
// window.__SUPABASE_ANON_KEY__ = process.env.VITE_SUPABASE_ANON_KEY

const app = createApp({
  components: {
    AIWorkspaceHeader
  },
  template: `
    <div id="app">
      <AIWorkspaceHeader />
      <main>
        <h1>Your App Content</h1>
        <p>This is your main application content.</p>
      </main>
    </div>
  `
})

app.mount('#app')

// Environment variables should be set in your .env file:
// VITE_SUPABASE_URL=https://your-project.supabase.co
// VITE_SUPABASE_ANON_KEY=your-anon-key-here
