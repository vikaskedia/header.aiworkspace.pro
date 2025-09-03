// Main component export
export { default as AIWorkspaceHeader } from './components/AIWorkspaceHeader.vue'

// Composables
export { useEnhancedAuth } from './composables/useEnhancedAuth'
export { useAuth } from './composables/useAuth'

// Stores
export { useWorkspaceStore } from './store/workspace'

// Utilities
export * from './utils/authRedirect'

// Plugins
export * from './plugins/crossSubdomainAuth'

// Supabase client
export { supabase } from './lib/supabase'

// Types
export * from './types'

// Default export for convenience
export { AIWorkspaceHeader as default }
