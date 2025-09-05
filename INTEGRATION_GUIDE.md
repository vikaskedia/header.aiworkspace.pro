# AI Workspace Header - Integration Guide

This guide explains how to integrate the AI Workspace header package into your existing Vue applications without Vue Router conflicts.

## 🚀 **Quick Setup (Recommended)**

### 1. Install the Package
```bash
npm install @aiworkspace/shared-header
```

### 2. Import and Use
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
import { AIWorkspaceHeader } from '@aiworkspace/shared-header'
import '@aiworkspace/shared-header/utils/universalCallback' // Auto-handles OAuth callbacks

const handleLogin = () => {
  console.log('User logged in')
}

const handleLogout = () => {
  console.log('User logged out')
}
</script>
```

### 3. Set Environment Variables
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_APEX_DOMAIN=aiworkspace.pro
```

**That's it!** The universal callback handler automatically processes OAuth callbacks without requiring any routing setup.

## 🔧 **Advanced Setup (If You Need More Control)**

### Option 1: Manual Callback Handling
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
import { AIWorkspaceHeader, setupUniversalCallback } from '@aiworkspace/shared-header'

// Setup callback handler
const { isOAuthCallback, processCallback } = setupUniversalCallback()

// Check for OAuth callback on mount
onMounted(() => {
  if (isOAuthCallback()) {
    processCallback()
  }
})

const handleLogin = () => {
  console.log('User logged in')
}

const handleLogout = () => {
  console.log('User logged out')
}
</script>
```

### Option 2: Vue Router Integration
If you want to handle the callback through Vue Router:

```javascript
// In your router configuration
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Your existing routes...
    {
      path: '/auth/callback',
      name: 'AuthCallback',
      component: () => import('@aiworkspace/shared-header').then(m => m.AuthCallback)
    }
  ]
})
```

## 🛠 **Troubleshooting**

### Vue Router Warnings
If you see Vue Router warnings about unmatched routes for `/auth/callback`, this is normal and doesn't affect functionality. The universal callback handler processes the OAuth flow regardless of routing.

### OAuth Redirect URLs
Make sure to add these URLs to your Supabase dashboard:

**For localhost development:**
```
http://localhost:3000/auth/callback
http://localhost:3001/auth/callback
http://localhost:5173/auth/callback
```

**For production:**
```
https://yourdomain.com/auth/callback
https://app.aiworkspace.pro/auth/callback
https://all-ws-dashboard.aiworkspace.pro/auth/callback
```

### Cross-Subdomain Authentication
The package automatically handles cross-subdomain authentication. Sessions will work across all your subdomains:

- `app.aiworkspace.pro`
- `all-ws-dashboard.aiworkspace.pro`
- `single-ws-dashboard.aiworkspace.pro`
- `outline.aiworkspace.pro`
- `canvas.aiworkspace.pro`
- `drive.aiworkspace.pro`
- `tasks.aiworkspace.pro`
- `spreadsheet.aiworkspace.pro`

## 📋 **Complete Example**

Here's a complete example of integrating the header into a Vue app:

```vue
<template>
  <div id="app">
    <AIWorkspaceHeader 
      :show-workspace-selector="true"
      :show-secondary-navigation="true"
      @login="handleLogin"
      @logout="handleLogout"
    />
    
    <main>
      <div v-if="isAuthenticated">
        <h1>Welcome to Your App!</h1>
        <p>You are logged in as: {{ user?.email }}</p>
      </div>
      <div v-else>
        <h1>Please log in to continue</h1>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { AIWorkspaceHeader, useAuth } from '@aiworkspace/shared-header'
import '@aiworkspace/shared-header/utils/universalCallback'

const { isAuthenticated, user } = useAuth()

const handleLogin = () => {
  console.log('User logged in')
}

const handleLogout = () => {
  console.log('User logged out')
}
</script>
```

## 🎯 **Key Benefits**

✅ **No Vue Router conflicts** - Uses hash-based callbacks  
✅ **Universal compatibility** - Works with any Vue app  
✅ **1-year sessions** - No more frequent logouts  
✅ **Cross-subdomain support** - Works across all your domains  
✅ **Automatic OAuth handling** - No manual callback setup needed  
✅ **Modern UI** - Beautiful login/signup modal  

## 🔍 **Debugging**

Enable debug logging by checking the browser console for messages prefixed with:
- `[UniversalCallback]` - OAuth callback processing
- `[OAuth]` - OAuth login flow
- `[auth]` - Authentication state changes

The universal callback handler will automatically process OAuth callbacks and redirect users back to the original page where they clicked the login button.
