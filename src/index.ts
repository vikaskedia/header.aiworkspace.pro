// Main component export
export { default as AIWorkspaceHeader } from './components/AIWorkspaceHeader.vue'

// Additional components
export { default as LoginModal } from './components/LoginModal.vue'
export { default as AuthCallback } from './components/AuthCallback.vue'
export { default as SessionLossModal } from './components/SessionLossModal.vue'

// Composables
export { useEnhancedAuth } from './composables/useEnhancedAuth'
export { useAuth } from './composables/useAuth'
export { useSessionMonitor } from './composables/useSessionMonitor'

// Stores
export { useWorkspaceStore } from './store/workspace'

// Utilities
export * from './utils/authRedirect'
export * from './utils/universalCallback'
export * from './utils/sessionValidator'
export * from './utils/errorHandler'

// Configuration
export * from './config/sessionConfig'

// Plugins
export * from './plugins/crossSubdomainAuth'

// Supabase client and configuration
export { supabase, configureSupabase, getSupabase, type SupabaseConfig } from './lib/supabase'

// Types
export * from './types'

// Default export for convenience
export { default } from './components/AIWorkspaceHeader.vue'
