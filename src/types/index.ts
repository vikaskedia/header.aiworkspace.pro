export interface User {
  id: string
  email: string
  name?: string
  avatar_url?: string
  user_metadata?: {
    name?: string
    user_name?: string
    full_name?: string
    avatar_url?: string
  }
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

export interface Workspace {
  id: number
  title: string
  description: string
  parent_workspace_id?: number
  created_by: string
  archived: boolean
  created_at: string
  latest_activity: string
  hasAccess: boolean
  accessType?: string
  children?: Workspace[]
  level?: number
}

export interface HeaderProps {
  showUserMenu?: boolean
  showNotifications?: boolean
  customLogo?: string
  customLinks?: Array<{
    label: string
    url: string
    external?: boolean
  }>
  // New props for enhanced functionality
  showWorkspaceSelector?: boolean
  showSecondaryNavigation?: boolean
  currentWorkspaceId?: string | number
  onWorkspaceChange?: (workspace: Workspace) => void
  onLogout?: () => void
  onLogin?: () => void
  onProfileClick?: () => void
  onSettingsClick?: () => void
}

export interface NavigationItem {
  label: string
  key: string
  url: string
  external?: boolean
  active?: boolean
}

export interface SecondaryNavigationItem extends NavigationItem {
  icon?: string
  description?: string
}

// Auth related types
export interface AuthTokens {
  access_token: string
  refresh_token: string
}

export interface Session {
  user: User
  access_token: string
  refresh_token: string
}

export interface AuthResult {
  success: boolean
  session?: Session
  error?: any
}
