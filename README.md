# AIWorkspace Shared Header

A shared header component for AIWorkspace small apps that handles authentication state and user management across multiple Vue.js applications.

## Features

- 🔐 **Shared Authentication**: Uses cookies to maintain login state across all apps
- 🎨 **Customizable**: Configurable logo, navigation links, and features
- 📱 **Responsive**: Mobile-friendly design
- 🚀 **TypeScript**: Full TypeScript support
- 🔄 **Real-time Updates**: Automatic auth state synchronization

## Installation

### 1. Publish to NPM (Recommended)

```bash
# In this repo
npm login
npm publish --access public
```

### 2. Install in Each App

**Option A: Install from GitHub (Recommended)**
```bash
npm install git+https://github.com/vikaskedia/header.aiworkspace.pro.git
```

**Option B: Local Development with npm link**
```bash
# In header repo
npm link

# In each app
npm link @aiworkspace/shared-header
```

**Option C: Publish to NPM (For Team Use)**
```bash
# First publish
npm publish --access public

# Then install in apps
npm install @aiworkspace/shared-header
```

## Usage

### Basic Implementation

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
/* Import the header styles */
@import '@aiworkspace/shared-header/style.css';
</style>
```

### Advanced Configuration

```vue
<template>
  <div>
    <AIWorkspaceHeader 
      :custom-logo="/custom-logo.svg"
      :custom-links="[
        { label: 'Dashboard', url: '/dashboard' },
        { label: 'Analytics', url: '/analytics' },
        { label: 'Docs', url: 'https://docs.aiworkspace.pro', external: true }
      ]"
      :show-notifications="true"
      :show-user-menu="true"
    />
  </div>
</template>

<script setup>
import { AIWorkspaceHeader } from '@aiworkspace/shared-header'
</script>

<style>
/* Import the header styles */
@import '@aiworkspace/shared-header/style.css';
</style>
```

## Authentication Setup

### 1. Cookie Configuration

The header automatically manages these cookies:
- `aiworkspace_auth`: Authentication token
- `aiworkspace_user_id`: User ID

**Important**: Set the domain to `.aiworkspace.pro` to share across subdomains.

### 2. Supabase Integration

```typescript
// In your auth service
import { useAuth } from '@aiworkspace/shared-header'

const { setCookie, clearCookie } = useAuth()

// On successful login
setCookie('aiworkspace_auth', supabaseToken)
setCookie('aiworkspace_user_id', userId)

// On logout
clearCookie('aiworkspace_auth')
clearCookie('aiworkspace_user_id')
```

### 3. Cross-App Navigation

```typescript
// Navigate between apps while maintaining auth state
const navigateToApp = (appName: string) => {
  const appUrls = {
    'dashboard': 'https://dashboard.aiworkspace.pro',
    'analytics': 'https://analytics.aiworkspace.pro',
    'chat': 'https://chat.aiworkspace.pro'
  }
  
  window.location.href = appUrls[appName]
}
```

## App-Specific Customization

### 1. Custom Navigation Links

```typescript
const appSpecificLinks = [
  { label: 'Home', url: '/' },
  { label: 'Features', url: '/features' },
  { label: 'Pricing', url: '/pricing' }
]
```

### 2. Custom Logo

```typescript
const customLogo = '/app-specific-logo.svg'
```

### 3. Feature Toggles

```typescript
const headerConfig = {
  showNotifications: false, // Disable for certain apps
  showUserMenu: true,
  customLinks: appSpecificLinks,
  customLogo: customLogo
}
```

## Development

### Local Development

```bash
npm install
npm run dev
# Server will start on http://localhost:3000
```

### Building

```bash
npm run build
```

### Testing in Apps

```bash
# Link locally for testing
npm link

# In your app
npm link @aiworkspace/shared-header
```

## Architecture

```
header.aiworkspace.pro/          # This repo
├── src/
│   ├── components/
│   │   └── AIWorkspaceHeader.vue
│   ├── composables/
│   │   └── useAuth.ts
│   ├── types/
│   │   └── index.ts
│   └── index.ts
├── package.json
└── vite.config.ts

app1.aiworkspace.pro/           # App 1
├── src/
│   └── App.vue                 # Uses shared header
└── package.json                 # Depends on shared header

app2.aiworkspace.pro/           # App 2
├── src/
│   └── App.vue                 # Uses shared header
└── package.json                 # Depends on shared header
```

## Deployment Strategy

### 1. **NPM Package** (Recommended)
- Publish to NPM
- Each app installs as dependency
- Easy version management
- Automatic updates

### 2. **Git Submodules**
```bash
# In each app
git submodule add https://github.com/aiworkspace/header.aiworkspace.pro.git shared/header
```

### 3. **Monorepo with Workspaces**
```json
// In root package.json
{
  "workspaces": [
    "apps/*",
    "packages/header"
  ]
}
```

## Best Practices

1. **Version Management**: Use semantic versioning for the shared header
2. **Breaking Changes**: Communicate major changes to all app teams
3. **Testing**: Test header changes across all apps before releasing
4. **Documentation**: Keep this README updated with new features
5. **Backward Compatibility**: Maintain API compatibility when possible

## Troubleshooting

### Common Issues

1. **Cookies not shared**: Ensure domain is set to `.aiworkspace.pro`
2. **Styling conflicts**: Use scoped styles in the header component
3. **Router conflicts**: Ensure Vue Router is properly configured in each app
4. **Build errors**: Check Vue version compatibility

### CSS/Styling Issues

1. **Header shows but no styling**: Import CSS file in your app
   ```css
   @import '@aiworkspace/shared-header/style.css';
   ```

2. **Logo appears twice**: CSS not loaded properly
3. **Layout broken**: Check if CSS import path is correct
4. **Styles not applying**: Ensure CSS import is in the right component

### Support

For issues or questions:
1. Check this README
2. Review the component source code
3. Create an issue in this repository
4. Contact the AIWorkspace team

## License

MIT License - see LICENSE file for details