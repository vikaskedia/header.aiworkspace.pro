# AIWorkspace Shared Header

A comprehensive, production-ready header component for AIWorkspace applications with built-in authentication, workspace management, and cross-subdomain support.

## Features

- 🔐 **Built-in Authentication**: Integrated with Supabase for seamless user management
- 🏢 **Workspace Management**: Hierarchical workspace selection and switching
- 🌐 **Cross-Subdomain Support**: Seamless authentication across all aiworkspace.pro subdomains
- 🎨 **Customizable UI**: Built with Element Plus for consistent, beautiful design
- 📱 **Responsive Design**: Works perfectly on all device sizes
- 🔄 **State Management**: Pinia store integration for workspace and user data
- 🚀 **TypeScript Support**: Full type safety and IntelliSense support

## Installation

```bash
npm install @aiworkspace/shared-header
```

## Dependencies

This package requires the following peer dependencies in your app:

```bash
npm install vue@^3.0.0 element-plus@^2.0.0 pinia@^2.0.0 @supabase/supabase-js@^2.0.0
```

## Quick Start

### Basic Usage

```vue
<template>
  <div>
    <AIWorkspaceHeader />
    <!-- Your app content -->
  </div>
</template>

<script setup>
import { AIWorkspaceHeader } from '@aiworkspace/shared-header'
</script>

<style>
@import '@aiworkspace/shared-header/style.css';
</style>
```

### With Environment Variables

Create a `.env` file in your app:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_APEX_DOMAIN=aiworkspace.pro
```

## Advanced Usage

### Customized Header

```vue
<template>
  <AIWorkspaceHeader 
    :custom-logo="/your-logo.svg"
    :show-workspace-selector="true"
    :show-secondary-navigation="true"
    :current-workspace-id="currentWorkspaceId"
    @workspace-change="handleWorkspaceChange"
    @logout="handleLogout"
  />
</template>

<script setup>
import { AIWorkspaceHeader } from '@aiworkspace/shared-header'

const currentWorkspaceId = ref('123')

const handleWorkspaceChange = (workspace) => {
  console.log('Workspace changed to:', workspace)
}

const handleLogout = () => {
  console.log('User logged out')
}
</script>
```

### Using Composables

```vue
<script setup>
import { useEnhancedAuth, useWorkspaceStore } from '@aiworkspace/shared-header'

const { authState, signIn, logout } = useEnhancedAuth()
const { currentWorkspace, loadWorkspaces } = useWorkspaceStore()

// Sign in user
const handleSignIn = async () => {
  const result = await signIn('user@example.com', 'password')
  if (result.success) {
    console.log('Signed in successfully')
  }
}

// Load workspaces
onMounted(async () => {
  await loadWorkspaces()
})
</script>
```

### Cross-Subdomain Authentication

The header automatically handles authentication across all aiworkspace.pro subdomains:

```javascript
// In your app's main.js or main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showUserMenu` | `boolean` | `true` | Show/hide user menu |
| `showNotifications` | `boolean` | `true` | Show/hide notifications |
| `showWorkspaceSelector` | `boolean` | `true` | Show/hide workspace selector |
| `showSecondaryNavigation` | `boolean` | `true` | Show/hide secondary navigation |
| `customLogo` | `string` | `''` | Custom logo URL |
| `customLinks` | `Array` | `[]` | Custom navigation links |
| `currentWorkspaceId` | `string \| number` | `undefined` | Current workspace ID |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `workspace-change` | `Workspace` | Fired when workspace is changed |
| `logout` | - | Fired when user logs out |
| `login` | - | Fired when user logs in |
| `profile-click` | - | Fired when profile is clicked |
| `settings-click` | - | Fired when settings is clicked |

### Composables

#### `useEnhancedAuth()`

Provides authentication state and methods:

```typescript
const {
  authState,        // Reactive auth state
  currentUser,      // Computed current user
  isAuthenticated,  // Computed auth status
  isLoading,        // Computed loading state
  signIn,           // Sign in method
  signUp,           // Sign up method
  logout,           // Logout method
  checkAuth         // Check auth status
} = useEnhancedAuth()
```

#### `useWorkspaceStore()`

Provides workspace management:

```typescript
const {
  currentWorkspace,     // Current workspace
  workspaces,           // All available workspaces
  user,                 // Current user
  setCurrentWorkspace,  // Set current workspace
  loadWorkspaces,       // Load workspaces from API
  clearData            // Clear all data
} = useWorkspaceStore()
```

### Utilities

#### `authRedirect` utilities

```typescript
import { 
  setSessionCookie, 
  getCookie, 
  clearSessionCookie,
  ensureCrossSubdomainCookies 
} from '@aiworkspace/shared-header'

// Set cross-subdomain cookie
setSessionCookie('token-name', 'token-value')

// Get cookie value
const token = getCookie('token-name')

// Clear cookie
clearSessionCookie('token-name')

// Ensure cookies are set for cross-subdomain access
ensureCrossSubdomainCookies(['token1', 'token2'])
```

## Database Schema

The header requires the following Supabase tables:

```sql
-- Workspaces table
CREATE TABLE workspaces (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  parent_workspace_id BIGINT REFERENCES workspaces(id),
  created_by UUID REFERENCES auth.users(id),
  archived BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Workspace access table
CREATE TABLE workspace_access (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  workspace_id BIGINT REFERENCES workspaces(id),
  access_type TEXT CHECK (access_type IN ('view', 'edit')),
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Workspace activities table (optional)
CREATE TABLE workspace_activities (
  id BIGSERIAL PRIMARY KEY,
  workspace_id BIGINT REFERENCES workspaces(id),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);
```

## Styling

The header comes with built-in Element Plus styling. To customize:

```css
/* Override default styles */
.aiworkspace-header {
  --header-bg-color: #your-color;
  --header-text-color: #your-color;
}

/* Custom workspace selector styles */
.workspace-dropdown-item {
  background-color: #your-color;
}
```

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For support and questions:
- Create an issue on GitHub
- Contact: kedia.vikas@gmail.com