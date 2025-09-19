import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import DemoApp from './DemoApp.vue'
import './utils/universalCallback' // Auto-setup universal callback handler
import { configureSupabase } from './lib/supabase'

// Demo configuration - consuming apps should do this in their main.js/main.ts
const supabaseUrl = (import.meta as any).env?.SUPABASE_URL
const supabaseAnonKey = (import.meta as any).env?.SUPABASE_ANON_KEY

if (supabaseUrl && supabaseAnonKey) {
  // This is how consuming apps should configure the package
  configureSupabase({
    url: supabaseUrl,
    anonKey: supabaseAnonKey
  })
  console.log('[Demo App] Supabase configured from environment (demo only)')
} else {
  console.error('[Demo App] Missing Supabase configuration in demo environment')
}

// Create Vue app
const app = createApp(DemoApp)

// Setup Pinia
const pinia = createPinia()
app.use(pinia)

// Setup Element Plus
app.use(ElementPlus)

// Mount the app
app.mount('#app')