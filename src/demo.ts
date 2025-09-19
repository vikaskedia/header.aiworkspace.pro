import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import DemoApp from './DemoApp.vue'
import './utils/universalCallback' // Auto-setup universal callback handler
import { configureSupabase } from './lib/supabase'

// Configure Supabase with environment variables
const supabaseUrl = (import.meta as any).env?.SUPABASE_URL
const supabaseAnonKey = (import.meta as any).env?.SUPABASE_ANON_KEY

console.log('[Demo App] Environment check:', {
  hasUrl: !!supabaseUrl,
  hasKey: !!supabaseAnonKey,
  urlPrefix: supabaseUrl?.substring(0, 20) + '...',
  allEnvVars: Object.keys((import.meta as any).env || {})
})

if (supabaseUrl && supabaseAnonKey) {
  configureSupabase({
    url: supabaseUrl,
    anonKey: supabaseAnonKey
  })
  console.log('[Demo App] Supabase configured with environment variables')
} else {
  console.error('[Demo App] Missing Supabase configuration - please restart dev server after updating vite.config.ts')
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