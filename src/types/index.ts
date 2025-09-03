// Re-export all types for external use
export interface User {
  id: string
  email: string
  name?: string
  avatar_url?: string | null
  created_at?: string
}

export interface AuthState {
  isAuthenticated: boolean
  isLoading: boolean
  user: User | null
  error: string | null
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
  customLogo?: string
  customLinks?: NavigationItem[]
  showUserMenu?: boolean
  showWorkspaceSelector?: boolean
  showSecondaryNavigation?: boolean
  currentWorkspaceId?: string | number
}

export interface NavigationItem {
  label: string
  url: string
  active?: boolean
}

export interface SecondaryNavigationItem extends NavigationItem {
  key: string
}

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
  user: User | null
  session: Session | null
  error: string | null
}

// Export types for external use
export type { User, AuthState, Workspace, HeaderProps, NavigationItem, SecondaryNavigationItem, AuthTokens, Session, AuthResult }
