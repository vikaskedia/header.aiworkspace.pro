// Utility + cookie helpers for cross-subdomain auth sharing

const APEX_DOMAIN = (import.meta as any).env?.VITE_APEX_DOMAIN || 'aiworkspace.pro'

// ============================================
// Cross-Subdomain Auth Broadcasting
// ============================================

// BroadcastChannel for cross-tab/subdomain auth sync
export const AUTH_BROADCAST_CHANNEL = 'aiworkspace-auth-channel'
export const AUTH_BROADCAST_KEY = 'aiworkspace-auth-broadcast' // localStorage fallback

// Auth broadcast event types
export type AuthBroadcastEvent = {
  type: 'SIGNED_IN' | 'SIGNED_OUT' | 'TOKEN_REFRESHED' | 'SESSION_RESTORED'
  timestamp: number
  userId?: string
  accessToken?: string
  refreshToken?: string
}

// Create or get the BroadcastChannel instance
let authChannel: BroadcastChannel | null = null

function getAuthChannel(): BroadcastChannel | null {
  if (typeof window === 'undefined') return null

  if (!authChannel) {
    try {
      if ('BroadcastChannel' in window) {
        authChannel = new BroadcastChannel(AUTH_BROADCAST_CHANNEL)
        console.log('[auth][broadcast] BroadcastChannel created:', AUTH_BROADCAST_CHANNEL)
      }
    } catch (error) {
      console.warn('[auth][broadcast] BroadcastChannel not supported, using localStorage fallback')
    }
  }

  return authChannel
}

/**
 * Broadcast auth state change to all tabs/subdomains
 * Uses BroadcastChannel with localStorage fallback
 */
export function broadcastAuthState(event: AuthBroadcastEvent) {
  if (typeof window === 'undefined') return

  console.log('[auth][broadcast] Broadcasting auth event:', event.type)

  // Method 1: BroadcastChannel (preferred, works across all tabs including different subdomains)
  const channel = getAuthChannel()
  if (channel) {
    try {
      channel.postMessage(event)
      console.log('[auth][broadcast] Event sent via BroadcastChannel')
    } catch (error) {
      console.warn('[auth][broadcast] BroadcastChannel postMessage failed:', error)
    }
  }

  // Method 2: localStorage event (fallback, triggers storage event in other tabs)
  try {
    // Write to localStorage with timestamp to ensure change detection
    const broadcastData = JSON.stringify(event)
    localStorage.setItem(AUTH_BROADCAST_KEY, broadcastData)

    // Immediately remove to trigger another storage event if needed for same-type events
    setTimeout(() => {
      localStorage.removeItem(AUTH_BROADCAST_KEY)
    }, 100)

    console.log('[auth][broadcast] Event sent via localStorage')
  } catch (error) {
    console.warn('[auth][broadcast] localStorage broadcast failed:', error)
  }
}

/**
 * Listen for auth state changes from other tabs/subdomains
 * Returns cleanup function
 */
export function listenForAuthBroadcasts(callback: (event: AuthBroadcastEvent) => void): () => void {
  if (typeof window === 'undefined') return () => { }

  const cleanupFunctions: (() => void)[] = []

  // Method 1: BroadcastChannel listener
  const channel = getAuthChannel()
  if (channel) {
    const handleMessage = (event: MessageEvent<AuthBroadcastEvent>) => {
      console.log('[auth][broadcast] Received BroadcastChannel event:', event.data?.type)
      if (event.data && event.data.type) {
        callback(event.data)
      }
    }

    channel.addEventListener('message', handleMessage)
    cleanupFunctions.push(() => channel.removeEventListener('message', handleMessage))
  }

  // Method 2: localStorage event listener (fallback)
  const handleStorage = (event: StorageEvent) => {
    if (event.key === AUTH_BROADCAST_KEY && event.newValue) {
      try {
        const data = JSON.parse(event.newValue) as AuthBroadcastEvent
        console.log('[auth][broadcast] Received localStorage event:', data.type)
        callback(data)
      } catch (error) {
        console.warn('[auth][broadcast] Failed to parse localStorage event:', error)
      }
    }
  }

  window.addEventListener('storage', handleStorage)
  cleanupFunctions.push(() => window.removeEventListener('storage', handleStorage))

  console.log('[auth][broadcast] Auth broadcast listeners registered')

  // Return cleanup function
  return () => {
    cleanupFunctions.forEach(cleanup => cleanup())
    console.log('[auth][broadcast] Auth broadcast listeners cleaned up')
  }
}

/**
 * Force sync cookies with broadcast to notify other tabs
 * Call this after successful login/session restoration
 */
export function syncCookiesAndBroadcast(accessToken: string, refreshToken: string, userId?: string) {
  // Set cookies
  setSessionCookie(ACCESS_COOKIE, accessToken)
  setSessionCookie(REFRESH_COOKIE, refreshToken)

  // Sync to localStorage
  syncCookiesToLocalStorage()

  // Broadcast to other tabs/subdomains
  broadcastAuthState({
    type: 'SESSION_RESTORED',
    timestamp: Date.now(),
    userId,
    accessToken,
    refreshToken
  })
}

function isLocalHost(host: string) {
  return host === 'localhost' || /^\d+\.\d+\.\d+\.\d+$/.test(host)
}

function isUnderApex(host: string) {
  return host === APEX_DOMAIN || host.endsWith(`.${APEX_DOMAIN}`)
}

function cookieSummary(names: string[]) {
  const all = document.cookie.split(';').map(s => s.trim())
  const filtered = all.filter(c => names.some(n => c.startsWith(n + '=')))
  return filtered
}

export function setSessionCookie(name: string, value: string, maxAgeSec = 60 * 60 * 24 * 365) {
  const host = location.hostname
  const isLocal = isLocalHost(host)
  if (isLocal) {
    document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAgeSec}; SameSite=Lax`
    console.log('[auth][cookie][set][local]', { host, name, valuePreview: value.slice(0, 20) + '...' })
    console.log('[auth][cookie][after]', cookieSummary([name]))
    return
  }
  // Force apex domain cookie
  document.cookie = `${name}=${encodeURIComponent(value)}; Domain=.${APEX_DOMAIN}; Path=/; Max-Age=${maxAgeSec}; SameSite=Lax; Secure`
  // Remove possible host-only duplicate
  document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax`
  console.log('[auth][cookie][set][apex]', { host, apex: APEX_DOMAIN, name, valuePreview: value.slice(0, 20) + '...' })
  console.log('[auth][cookie][after]', cookieSummary([name]))
}

export function getCookie(name: string): string | null {
  const pattern = new RegExp('(?:^|; )' + name.replace(/[$()*+.[\]?^{}|\\/-]/g, '\\$&') + '=([^;]*)')
  const m = document.cookie.match(pattern)
  return m ? decodeURIComponent(m[1]) : null
}

export function clearSessionCookie(name: string) {
  const host = location.hostname
  const isLocal = isLocalHost(host)
  if (isLocal) {
    document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax`
    console.log('[auth][cookie][clear][local]', { host, name })
    return
  }
  document.cookie = `${name}=; Domain=.${APEX_DOMAIN}; Path=/; Max-Age=0; SameSite=Lax; Secure`
  document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax` // host-only cleanup
  console.log('[auth][cookie][clear][apex]', { host, apex: APEX_DOMAIN, name })
  console.log('[auth][cookie][after]', cookieSummary([name]))
}

export function ensureCrossSubdomainCookies(names: string[]) {
  const host = location.hostname
  if (isLocalHost(host)) {
    console.log('[auth][cookie][promote] skip (local host)', host)
    return
  }
  if (!isUnderApex(host)) {
    console.log('[auth][cookie][promote] skip (not under apex)', { host, apex: APEX_DOMAIN })
    return
  }
  console.log('[auth][cookie][promote] start', { host, apex: APEX_DOMAIN, names })

  // First, try to get cookies from localStorage as backup
  const localStorageBackup = new Map()
  names.forEach(n => {
    const lsKey = n === ACCESS_COOKIE ? LS_ACCESS_KEY : LS_REFRESH_KEY
    const lsValue = localStorage.getItem(lsKey)
    if (lsValue) {
      localStorageBackup.set(n, lsValue)
      console.log('[auth][cookie][promote] found in localStorage', n)
    }
  })

  names.forEach(n => {
    let v = getCookie(n)

    // If cookie not found, try localStorage backup
    if (!v && localStorageBackup.has(n)) {
      v = localStorageBackup.get(n)
      console.log('[auth][cookie][promote] using localStorage backup for', n)
    }

    if (v) {
      setSessionCookie(n, v, 60 * 60 * 24 * 365) // Use 1 year expiration instead of default 7 days
    } else {
      console.log('[auth][cookie][promote] missing', n)
    }
  })
  console.log('[auth][cookie][promote] done', cookieSummary(names))
}

export function buildOAuthRedirectUrl() {
  return `${window.location.origin}/auth/callback`
}

export function getPostLoginBase(): string {
  try {
    // Check both search params and hash params (OAuth callbacks often use hash)
    const searchParams = new URLSearchParams(location.search)
    const hashParams = new URLSearchParams(location.hash.replace('#', ''))

    // Look for redirect parameters in both search and hash
    const searchParamKey = ['redirect', 'redirect_to', 'returnTo', 'next', 'redirect_origin'].find(k => searchParams.get(k))
    const hashParamKey = ['redirect', 'redirect_to', 'returnTo', 'next', 'redirect_origin'].find(k => hashParams.get(k))

    let candidate = searchParamKey ? searchParams.get(searchParamKey)! :
      hashParamKey ? hashParams.get(hashParamKey)! : ''

    console.log('[getPostLoginBase] Search params:', Object.fromEntries(searchParams))
    console.log('[getPostLoginBase] Hash params:', Object.fromEntries(hashParams))
    console.log('[getPostLoginBase] Found search param key:', searchParamKey)
    console.log('[getPostLoginBase] Found hash param key:', hashParamKey)
    console.log('[getPostLoginBase] Candidate from params:', candidate)

    if (!candidate) {
      const storedUrl = sessionStorage.getItem('post-login-redirect') || localStorage.getItem('post-login-redirect') || ''
      console.log('[getPostLoginBase] Stored URL from storage:', storedUrl)

      // If stored URL is a full URL, extract the path
      if (storedUrl.startsWith('http')) {
        try {
          const url = new URL(storedUrl)
          candidate = url.pathname + url.search + url.hash
          console.log('[getPostLoginBase] Extracted path from stored URL:', candidate)
        } catch (e) {
          console.log('[getPostLoginBase] Error parsing stored URL:', e)
          candidate = storedUrl
        }
      } else {
        candidate = storedUrl
      }

      console.log('[getPostLoginBase] Final candidate from storage:', candidate)
    }

    if (!candidate) {
      candidate = (import.meta as any).env?.VITE_DEFAULT_POST_LOGIN_URL || '/'
      console.log('[getPostLoginBase] Using default:', candidate)
    }

    if (candidate.startsWith('http')) {
      try {
        const u = new URL(candidate)
        if (isUnderApex(u.hostname) || isLocalHost(u.hostname)) {
          console.log('[getPostLoginBase] Returning absolute URL:', candidate)
          return candidate
        }
        console.log('[getPostLoginBase] Invalid hostname, returning /')
        return '/'
      } catch {
        console.log('[getPostLoginBase] Invalid URL, returning /')
        return '/'
      }
    }

    if (!candidate.startsWith('/')) candidate = '/' + candidate
    console.log('[getPostLoginBase] Final candidate:', candidate)
    return candidate
  } catch (error) {
    console.log('[getPostLoginBase] Error:', error)
    return '/'
  }
}

export const ACCESS_COOKIE = 'sb-access-token'
export const REFRESH_COOKIE = 'sb-refresh-token'
export const LS_ACCESS_KEY = 'sb-access-token'
export const LS_REFRESH_KEY = 'sb-refresh-token'

export function syncCookiesToLocalStorage() {
  try {
    const at = getCookie(ACCESS_COOKIE)
    const rt = getCookie(REFRESH_COOKIE)

    if (at) {
      localStorage.setItem(LS_ACCESS_KEY, at)
    } else {
      console.log('[auth][cookie->ls] access token cookie missing')
    }

    if (rt) {
      localStorage.setItem(LS_REFRESH_KEY, rt)
    } else {
      console.log('[auth][cookie->ls] refresh token cookie missing')
    }

    console.log('[auth][cookie->ls] sync complete', {
      hasAccess: !!at,
      hasRefresh: !!rt
    })
  } catch (e) {
    console.error('[auth][cookie->ls] error', e)
  }
}

export function clearLocalStorageTokens() {
  try {
    localStorage.removeItem(LS_ACCESS_KEY)
    localStorage.removeItem(LS_REFRESH_KEY)
    console.log('[auth][cookie->ls] cleared localStorage')
  } catch (e) {
    console.log('[auth][cookie->ls] clear error', e)
  }
}

// Make functions available globally for fallback access
if (typeof window !== 'undefined') {
  try {
    // Create a global object to avoid minification issues with individual assignments
    const authRedirectGlobal = {
      ensureCrossSubdomainCookies,
      ACCESS_COOKIE,
      REFRESH_COOKIE,
      setSessionCookie,
      getCookie,
      clearSessionCookie,
      syncCookiesToLocalStorage,
      clearLocalStorageTokens,
      buildOAuthRedirectUrl,
      getPostLoginBase
    }

      // Assign the object to window
      ; (window as any).authRedirectGlobal = authRedirectGlobal

      // Also assign individual functions for backward compatibility
      ; (window as any).ensureCrossSubdomainCookies = ensureCrossSubdomainCookies
      ; (window as any).ACCESS_COOKIE = ACCESS_COOKIE
      ; (window as any).REFRESH_COOKIE = REFRESH_COOKIE
      ; (window as any).setSessionCookie = setSessionCookie
      ; (window as any).getCookie = getCookie
      ; (window as any).clearSessionCookie = clearSessionCookie

    console.log('[auth][authRedirect] Functions made available globally for fallback access')
  } catch (globalError) {
    console.warn('[auth][authRedirect] Failed to assign functions globally:', globalError)
  }
}
