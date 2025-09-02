export interface User {
  id: string
  email: string
  name?: string
  avatar_url?: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
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
}
