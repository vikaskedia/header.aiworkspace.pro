// Example: How to configure the header package in your consuming app
// This should be in your main.js, main.ts, or app entry point

import { createApp } from 'vue'
import App from './App.vue'
import { configureSupabase } from '@aiworkspace/shared-header'

// IMPORTANT: Configure Supabase before using any header components
configureSupabase({
  url: process.env.SUPABASE_URL,
  anonKey: process.env.SUPABASE_ANON_KEY
})

// Now you can safely use the header components
const app = createApp(App)
app.mount('#app')
