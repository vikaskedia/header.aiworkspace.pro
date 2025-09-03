# 🚀 AIWorkspace Header - Quick Start Guide

Get up and running with the comprehensive AIWorkspace header in under 5 minutes!

## ⚡ Super Quick Start

### 1. Install Package
```bash
npm install @aiworkspace/shared-header
```

### 2. Install Dependencies
```bash
npm install vue@^3.0.0 element-plus@^2.0.0 pinia@^2.0.0 @supabase/supabase-js@^2.0.0
```

### 3. Add to Your App
```vue
<template>
  <div>
    <AIWorkspaceHeader />
    <!-- Your app content here -->
  </div>
</template>

<script setup>
import { AIWorkspaceHeader } from '@aiworkspace/shared-header'
</script>

<style>
@import '@aiworkspace/shared-header/style.css';
</style>
```

### 4. Add Environment Variables
Create a `.env` file:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_APEX_DOMAIN=aiworkspace.pro
```

**🎉 That's it!** Your header is now working with full authentication and workspace management.

## 🔧 Basic Configuration

### Enable/Disable Features
```vue
<AIWorkspaceHeader 
  :show-workspace-selector="true"
  :show-secondary-navigation="true"
  :show-notifications="true"
  :show-user-menu="true"
/>
```

### Custom Logo
```vue
<AIWorkspaceHeader 
  :custom-logo="/your-logo.svg"
/>
```

### Custom Navigation Links
```vue
<AIWorkspaceHeader 
  :custom-links="[
    { label: 'Dashboard', url: '/dashboard' },
    { label: 'Analytics', url: '/analytics' }
  ]"
/>
```

## 🔐 Authentication Setup

### 1. Initialize Pinia (Required)
```javascript
// main.js or main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')
```

### 2. Use Authentication Composable
```vue
<script setup>
import { useEnhancedAuth } from '@aiworkspace/shared-header'

const { authState, signIn, logout } = useEnhancedAuth()

// Sign in user
const handleSignIn = async () => {
  const result = await signIn('user@example.com', 'password')
  if (result.success) {
    console.log('Signed in successfully!')
  }
}

// Check auth status
const isAuthenticated = computed(() => authState.value.isAuthenticated)
</script>
```

### 3. Handle Authentication Events
```vue
<AIWorkspaceHeader 
  @login="handleLogin"
  @logout="handleLogout"
  @profile-click="handleProfileClick"
/>
```

## 🏢 Workspace Management

### 1. Use Workspace Store
```vue
<script setup>
import { useWorkspaceStore } from '@aiworkspace/shared-header'

const { currentWorkspace, loadWorkspaces } = useWorkspaceStore()

// Load workspaces on mount
onMounted(async () => {
  await loadWorkspaces()
})
</script>
```

### 2. Handle Workspace Changes
```vue
<AIWorkspaceHeader 
  :current-workspace-id="currentWorkspaceId"
  @workspace-change="handleWorkspaceChange"
/>

<script setup>
const handleWorkspaceChange = (workspace) => {
  console.log('Workspace changed to:', workspace.title)
  // Navigate to new workspace or update app state
}
</script>
```

## 🌐 Cross-Subdomain Setup

The header automatically handles authentication across all aiworkspace.pro subdomains. Just ensure your environment variables are set:

```env
VITE_APEX_DOMAIN=aiworkspace.pro
```

## 📱 Responsive Design

The header is fully responsive and works on all devices. No additional configuration needed!

## 🎨 Customization

### CSS Customization
```css
/* Override default styles */
.aiworkspace-header {
  --header-bg-color: #your-color;
  --header-text-color: #your-color;
}

/* Custom workspace selector */
.workspace-dropdown-item {
  background-color: #your-color;
}
```

### Component Customization
```vue
<AIWorkspaceHeader 
  :show-workspace-selector="false"
  :show-secondary-navigation="false"
  :custom-logo="/minimal-logo.svg"
/>
```

## 🔍 Troubleshooting

### Common Issues

1. **Header not showing**: Check if CSS is imported
2. **Authentication not working**: Verify Supabase credentials
3. **Workspaces not loading**: Check database schema and permissions
4. **Styling issues**: Ensure Element Plus CSS is loaded

### Debug Mode
```javascript
// Check browser console for detailed logs
// All authentication and workspace operations are logged
```

## 📚 Next Steps

- Check the [full README](./README.md) for complete API reference
- Explore the [demo app](./src/DemoApp.vue) for examples
- Review the [types](./src/types/index.ts) for TypeScript support

## 🆘 Need Help?

- Create an issue on GitHub
- Contact: kedia.vikas@gmail.com
- Check the browser console for detailed error messages

---

**🎯 Pro Tip**: Start with the basic implementation and gradually add features as needed. The header works great out of the box!
