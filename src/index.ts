// Main component export
export { default as AIWorkspaceHeader } from './components/AIWorkspaceHeader.vue'

// Additional components
export { default as LoginModal } from './components/LoginModal.vue'
export { default as AuthCallback } from './components/AuthCallback.vue'

// Composables
export { useEnhancedAuth } from './composables/useEnhancedAuth'
export { useAuth } from './composables/useAuth'

// Stores
export { useWorkspaceStore } from './store/workspace'

// Utilities
export * from './utils/authRedirect'
export * from './utils/universalCallback'

// Plugins
export * from './plugins/crossSubdomainAuth'

// Supabase client
export { supabase } from './lib/supabase'

// Types
export * from './types'

// Default export for convenience
export { AIWorkspaceHeader as default }
