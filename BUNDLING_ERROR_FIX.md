# Bundling Error Fix Guide

This guide addresses the `TypeError: D is not a function` error that can occur when installing the package in other applications.

## 🚨 **Error Description**

**Error**: `TypeError: D is not a function`  
**Location**: `@aiworkspace shared-...js`  
**Cause**: Function references get minified/mangled during bundling, causing import issues

## 🔧 **Root Cause**

The error occurs because:

1. **Dynamic imports** in the authentication system get minified
2. **Function references** become single letters (e.g., `D`, `C`, `F`)
3. **Import strategies** fail when the package is bundled in different environments
4. **Cross-subdomain cookie functions** become undefined after minification

## ✅ **Fixes Applied**

### **1. Simplified Cookie Operations**
- **Removed complex import strategies** that were causing minification issues
- **Added inline cookie functions** to avoid dynamic imports
- **Implemented direct cookie access** without external dependencies

### **2. Error Handling System**
- **Added comprehensive error handling** for bundling issues
- **Implemented safe execution wrappers** for all critical functions
- **Added fallback behaviors** when imports fail

### **3. Robust Session Monitoring**
- **Simplified session validation** to avoid complex imports
- **Added direct cookie access** without external utilities
- **Implemented safe error recovery** for all scenarios

## 🛠️ **Implementation Details**

### **Before (Problematic)**
```typescript
// Complex import strategy that gets minified
const authRedirectModule = await import('../utils/authRedirect')
ensureCrossSubdomainCookies = authRedirectModule.ensureCrossSubdomainCookies
// This becomes: D = authRedirectModule.D (undefined)
```

### **After (Fixed)**
```typescript
// Direct inline implementation
const getCookieValue = (name: string): string | null => {
  if (typeof document === 'undefined') return null
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null
  }
  return null
}
```

## 📦 **Installation Instructions**

### **1. Update Package**
```bash
npm install @your-package/header@latest
# or
yarn add @your-package/header@latest
```

### **2. Basic Usage (Recommended)**
```vue
<template>
  <AIWorkspaceHeader 
    :show-workspace-selector="true"
    @login="handleLogin"
    @logout="handleLogout"
  />
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

### **3. Advanced Usage (With Error Handling)**
```vue
<template>
  <div>
    <AIWorkspaceHeader 
      :show-workspace-selector="true"
      @login="handleLogin"
      @logout="handleLogout"
    />
    
    <SessionLossModal
      v-model="showSessionLossModal"
      :session-loss-event="sessionLossEvent"
      :can-retry-session="canRetrySession"
      @retry="handleSessionRetry"
      @login="handleSessionLogin"
    />
  </div>
</template>

<script setup>
import { 
  AIWorkspaceHeader, 
  SessionLossModal, 
  useSessionMonitor,
  setupGlobalErrorHandler 
} from '@your-package/header'

// Setup global error handling
setupGlobalErrorHandler()

const { 
  isSessionValid, 
  sessionLossEvent, 
  hasSessionLoss, 
  canRetrySession, 
  retrySession 
} = useSessionMonitor()

const showSessionLossModal = ref(false)

// Watch for session loss
watch(hasSessionLoss, (hasLoss) => {
  if (hasLoss) {
    showSessionLossModal.value = true
  }
})

const handleSessionRetry = async () => {
  const success = await retrySession()
  if (success) {
    showSessionLossModal.value = false
  }
}

const handleSessionLogin = () => {
  showSessionLossModal.value = false
  // Redirect to login
}
</script>
```

## 🔍 **Troubleshooting**

### **If You Still Get Errors**

#### **1. Clear Cache**
```bash
# Clear npm cache
npm cache clean --force

# Clear node_modules
rm -rf node_modules package-lock.json
npm install

# Clear browser cache
# Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
```

#### **2. Check Bundle Configuration**
```javascript
// In your vite.config.js or webpack.config.js
export default {
  build: {
    rollupOptions: {
      external: ['@your-package/header']
    }
  }
}
```

#### **3. Enable Debug Mode**
```javascript
// In browser console
localStorage.setItem('debug', 'session-monitor')
// Refresh page to see detailed logs
```

#### **4. Check Network Tab**
- Look for failed requests to `@aiworkspace` modules
- Check if the package is loading correctly
- Verify no 404 errors for the package files

### **Common Issues and Solutions**

#### **Issue**: `Module not found: @your-package/header`
**Solution**: 
```bash
npm install @your-package/header
# Make sure the package name is correct
```

#### **Issue**: `Cannot resolve dependency`
**Solution**:
```bash
# Check if package is in package.json
npm list @your-package/header

# Reinstall if missing
npm install @your-package/header@latest
```

#### **Issue**: `TypeError: Cannot read property of undefined`
**Solution**: This is usually a bundling issue. Try:
```bash
# Clear all caches
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

## 🧪 **Testing the Fix**

### **1. Basic Test**
```javascript
// In browser console
console.log('Testing package import...')
import('@your-package/header').then(module => {
  console.log('✅ Package imported successfully:', Object.keys(module))
}).catch(error => {
  console.error('❌ Import failed:', error)
})
```

### **2. Session Monitoring Test**
```javascript
// Test session monitoring
testSessionValidation()
// Should not throw "D is not a function" error
```

### **3. Cookie Operations Test**
```javascript
// Test cookie operations
const token = getCookieValue('sb-access-token')
console.log('Cookie value:', token)
// Should work without errors
```

## 📋 **Verification Checklist**

- [ ] Package installs without errors
- [ ] No `TypeError: D is not a function` in console
- [ ] Session monitoring works correctly
- [ ] Cookie operations function properly
- [ ] Login/logout flows work as expected
- [ ] Session loss detection works
- [ ] No bundling-related errors in production

## 🚀 **Performance Improvements**

The fixes also include performance improvements:

1. **Reduced bundle size** by removing complex import strategies
2. **Faster initialization** with direct implementations
3. **Better error recovery** with fallback behaviors
4. **Improved reliability** across different bundling environments

## 📞 **Support**

If you continue to experience issues:

1. **Check the console** for specific error messages
2. **Enable debug mode** to see detailed logs
3. **Test in different browsers** to isolate the issue
4. **Check your bundler configuration** for compatibility issues

The package is now much more robust and should work reliably across different applications and bundling configurations.
