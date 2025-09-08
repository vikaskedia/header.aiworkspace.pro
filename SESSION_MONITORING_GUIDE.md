# Session Monitoring Integration Guide

This guide explains how to integrate the session monitoring system into your applications to detect session loss and show appropriate alerts to users.

## Overview

The session monitoring system provides:
- **Automatic session validation** every 30 seconds
- **Session loss detection** with detailed error information
- **User-friendly alert modals** with retry options
- **Restricted UI state** when session is lost
- **Network-aware validation** that handles connectivity issues

## Quick Integration

### 1. Basic Integration (Recommended)

For most applications, simply use the `AIWorkspaceHeader` component which includes built-in session monitoring:

```vue
<template>
  <div>
    <AIWorkspaceHeader 
      :show-workspace-selector="true"
      @login="handleLogin"
      @logout="handleLogout"
    />
    <!-- Your app content -->
  </div>
</template>

<script setup>
import { AIWorkspaceHeader } from '@your-package/header'

const handleLogin = () => {
  console.log('User logged in')
}

const handleLogout = () => {
  console.log('User logged out')
}
</script>
```

### 2. Advanced Integration

For custom implementations, use the session monitoring composable directly:

```vue
<template>
  <div>
    <!-- Your app content -->
    
    <!-- Session Loss Modal -->
    <SessionLossModal
      v-model="showSessionLossModal"
      :session-loss-event="sessionLossEvent"
      :can-retry-session="canRetrySession"
      @retry="handleSessionRetry"
      @login="handleSessionLogin"
      @refresh="handleSessionRefresh"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useSessionMonitor, SessionLossModal } from '@your-package/header'

const { 
  isSessionValid, 
  sessionLossEvent, 
  hasSessionLoss, 
  canRetrySession, 
  retrySession, 
  clearSessionLoss 
} = useSessionMonitor()

const showSessionLossModal = ref(false)

// Watch for session loss
watch(hasSessionLoss, (hasLoss) => {
  if (hasLoss) {
    showSessionLossModal.value = true
  }
})

// Session loss handlers
const handleSessionRetry = async () => {
  const success = await retrySession()
  if (success) {
    showSessionLossModal.value = false
    clearSessionLoss()
  }
}

const handleSessionLogin = () => {
  showSessionLossModal.value = false
  // Redirect to login or show login modal
}

const handleSessionRefresh = () => {
  window.location.reload()
}
</script>
```

## API Reference

### useSessionMonitor Composable

```typescript
const {
  // State
  isSessionValid,        // boolean - whether current session is valid
  sessionLossEvent,      // SessionLossEvent | null - details about session loss
  isMonitoring,          // boolean - whether monitoring is active
  lastValidSession,      // Date | null - timestamp of last valid session
  
  // Computed
  hasSessionLoss,        // boolean - whether session loss is detected
  canRetrySession,       // boolean - whether session can be retried
  
  // Methods
  validateSession,       // () => Promise<boolean> - manually validate session
  restoreSession,        // () => Promise<boolean> - attempt to restore session
  retrySession,          // () => Promise<boolean> - retry with multiple attempts
  clearSessionLoss,      // () => void - clear session loss state
  startMonitoring,       // () => void - start automatic monitoring
  stopMonitoring,        // () => void - stop automatic monitoring
  checkSession,          // () => Promise<boolean> - manual session check
  handleNetworkError     // () => void - handle network errors
} = useSessionMonitor()
```

### SessionLossEvent Interface

```typescript
interface SessionLossEvent {
  type: 'session_expired' | 'token_invalid' | 'network_error' | 'manual_check_failed'
  message: string
  timestamp: Date
  canRetry: boolean
}
```

### SessionLossModal Component

```vue
<SessionLossModal
  v-model="visible"
  :session-loss-event="sessionLossEvent"
  :can-retry-session="canRetrySession"
  @retry="handleRetry"
  @login="handleLogin"
  @refresh="handleRefresh"
/>
```

**Props:**
- `modelValue: boolean` - Controls modal visibility
- `sessionLossEvent: SessionLossEvent | null` - Session loss event details
- `canRetrySession: boolean` - Whether retry is available

**Events:**
- `retry` - User clicked retry button
- `login` - User clicked login button
- `refresh` - User clicked refresh button

## Global Session Validation

For applications that need global session validation without the full monitoring system:

```typescript
import { 
  sessionValidator, 
  validateSession, 
  restoreSession,
  initializeSessionValidation 
} from '@your-package/header'

// Initialize session validation on app start
const result = await initializeSessionValidation()
if (!result.isValid) {
  // Handle session loss
  console.log('Session validation failed:', result.error)
}

// Manual validation
const isValid = await validateSession()
if (!isValid) {
  // Try to restore
  const restored = await restoreSession()
  if (!restored) {
    // Redirect to login
  }
}
```

## Configuration

### Monitoring Interval

The session monitoring checks every 30 seconds by default. This can be customized in the `useSessionMonitor` composable:

```typescript
// In useSessionMonitor.ts
const CHECK_INTERVAL = 30000 // 30 seconds
```

### Retry Configuration

```typescript
// In useSessionMonitor.ts
const MAX_RETRY_ATTEMPTS = 3
const RETRY_DELAY = 2000 // 2 seconds between retries
```

## Best Practices

### 1. App Initialization

Always validate session on app initialization:

```typescript
// In your main app file
import { initializeSessionValidation } from '@your-package/header'

async function initApp() {
  const sessionResult = await initializeSessionValidation()
  
  if (!sessionResult.isValid) {
    // Show login screen or redirect
    showLoginScreen()
  } else {
    // Proceed with app initialization
    initMainApp()
  }
}
```

### 2. Route Guards

Use session validation in route guards:

```typescript
// In your router
import { validateSession } from '@your-package/header'

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    const isValid = await validateSession()
    if (!isValid) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})
```

### 3. API Request Interceptors

Handle session loss in API requests:

```typescript
// In your API client
import { validateSession } from '@your-package/header'

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const isValid = await validateSession()
      if (!isValid) {
        // Show session loss modal or redirect to login
        showSessionLossModal()
      }
    }
    return Promise.reject(error)
  }
)
```

### 4. Cross-App Communication

For multiple apps sharing the same domain:

```typescript
// In each app
import { setupNetworkAwareValidation } from '@your-package/header'

// Setup network-aware validation
const cleanup = setupNetworkAwareValidation()

// Cleanup on app unmount
onUnmounted(() => {
  cleanup()
})
```

## Error Handling

### Common Session Loss Scenarios

1. **Session Expired**: Token has reached its expiration time
2. **Token Invalid**: Token is corrupted or malformed
3. **Network Error**: Connection issues preventing validation
4. **Manual Check Failed**: Explicit validation request failed

### Error Recovery

The system provides multiple recovery options:

1. **Automatic Retry**: System attempts to restore session automatically
2. **Manual Retry**: User can trigger retry from the modal
3. **Login**: User can log in again
4. **Refresh**: Page refresh as last resort

## Testing

### Simulating Session Loss

For testing purposes, you can simulate session loss:

```typescript
// In browser console or test
localStorage.removeItem('sb-auth-token-shared')
// Or clear cookies
document.cookie = 'sb-access-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
document.cookie = 'sb-refresh-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
```

### Testing Network Issues

```typescript
// Simulate network offline
window.dispatchEvent(new Event('offline'))

// Simulate network online
window.dispatchEvent(new Event('online'))
```

## Troubleshooting

### Common Issues

1. **Modal not showing**: Ensure `hasSessionLoss` is being watched
2. **Retry not working**: Check if `canRetrySession` is true
3. **Monitoring not starting**: Verify `useSessionMonitor` is called in component
4. **Cache issues**: Call `clearSessionCache()` to force revalidation

### Debug Mode

Enable debug logging:

```typescript
// In browser console
localStorage.setItem('debug', 'session-monitor')
```

## Migration Guide

### From Basic Auth to Session Monitoring

1. Replace basic auth checks with `useSessionMonitor`
2. Add `SessionLossModal` to your app
3. Update route guards to use `validateSession`
4. Add session validation to API interceptors

### Example Migration

**Before:**
```vue
<template>
  <div v-if="isAuthenticated">
    <!-- App content -->
  </div>
  <div v-else>
    <LoginForm />
  </div>
</template>
```

**After:**
```vue
<template>
  <div v-if="isAuthenticated && isSessionValid">
    <!-- App content -->
  </div>
  <div v-else-if="isAuthenticated && !isSessionValid">
    <!-- Restricted state -->
    <div class="session-expired">
      <p>Your session has expired. Please log in again.</p>
      <button @click="showLoginModal = true">Log In</button>
    </div>
  </div>
  <div v-else>
    <LoginForm />
  </div>
  
  <SessionLossModal
    v-model="showSessionLossModal"
    :session-loss-event="sessionLossEvent"
    :can-retry-session="canRetrySession"
    @retry="handleSessionRetry"
    @login="handleSessionLogin"
  />
</template>

<script setup>
import { useSessionMonitor, SessionLossModal } from '@your-package/header'

const { isSessionValid, sessionLossEvent, hasSessionLoss, canRetrySession, retrySession } = useSessionMonitor()
// ... rest of implementation
</script>
```

This session monitoring system ensures a smooth user experience by detecting session loss early and providing clear recovery options.
