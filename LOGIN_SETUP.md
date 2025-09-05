# AI Workspace Header - Login System Setup

This document explains how to set up and use the new integrated login system in the AI Workspace header component.

## Features

✅ **Complete Login System**: Email/password and OAuth (Google, GitHub, Twitter) authentication  
✅ **1-Year Session Storage**: Sessions persist for 1 year with cross-subdomain support  
✅ **Cross-Subdomain Cookies**: Works across all `.aiworkspace.pro` subdomains and localhost  
✅ **Modern UI**: Login/signup popup matching your design requirements  
✅ **Same URL Redirect**: Users return to the same page after login  
✅ **Supabase Integration**: Full Supabase authentication with automatic token refresh  

## Environment Setup

Create a `.env` file in the root directory with your Supabase credentials:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Domain Configuration
VITE_APEX_DOMAIN=aiworkspace.pro

# Default redirect URL after login
VITE_DEFAULT_POST_LOGIN_URL=/
```

## Usage

### Basic Implementation

```vue
<template>
  <AIWorkspaceHeader 
    :show-workspace-selector="true"
    :show-secondary-navigation="true"
    @login="handleLogin"
    @logout="handleLogout"
  />
</template>

<script setup>
import { AIWorkspaceHeader } from '@aiworkspace/shared-header'

const handleLogin = () => {
  console.log('User logged in')
}

const handleLogout = () => {
  console.log('User logged out')
}
</script>
```

### Using Individual Components

```vue
<template>
  <div>
    <!-- Login Modal -->
    <LoginModal 
      v-model="showLogin"
      @login-success="handleLoginSuccess"
    />
    
    <!-- Auth Callback (for OAuth redirects) -->
    <AuthCallback />
  </div>
</template>

<script setup>
import { LoginModal, AuthCallback, useAuth } from '@aiworkspace/shared-header'

const { isAuthenticated, user } = useAuth()
const showLogin = ref(false)

const handleLoginSuccess = (user) => {
  console.log('Login successful:', user)
  showLogin.value = false
}
</script>
```

## Authentication Flow

1. **Unauthenticated State**: Header shows "Login / Signup" button
2. **Login Modal**: Clicking the button opens a modern login/signup popup
3. **Authentication**: Users can login with email/password or OAuth providers
4. **Session Storage**: 1-year session stored in cross-subdomain cookies
5. **Redirect**: Users return to the same URL they were on before login
6. **Authenticated State**: Header shows user profile and workspace navigation

## OAuth Setup

For OAuth providers to work, configure the redirect URLs in your Supabase dashboard:

- **Google**: `https://yourdomain.com/auth/callback`
- **GitHub**: `https://yourdomain.com/auth/callback`  
- **Twitter**: `https://yourdomain.com/auth/callback`

For localhost development:
- `http://localhost:3000/auth/callback`
- `http://localhost:5173/auth/callback`

## Cross-Subdomain Support

The system automatically handles cookies across subdomains:

- **Production**: Cookies set for `.aiworkspace.pro` domain
- **Localhost**: Cookies set for `localhost` domain
- **Session Sharing**: Works across all your subdomains

## File Structure

```
src/
├── components/
│   ├── AIWorkspaceHeader.vue    # Main header component
│   ├── LoginModal.vue           # Login/signup popup
│   └── AuthCallback.vue         # OAuth callback handler
├── composables/
│   └── useAuth.ts               # Authentication composable
├── lib/
│   └── supabase.ts              # Supabase client configuration
└── utils/
    └── authRedirect.ts          # Cross-subdomain utilities
```

## Testing

1. Start the development server: `npm run dev`
2. Open `http://localhost:5173`
3. Click "Login / Signup" button
4. Test email/password and OAuth login
5. Verify session persistence across page refreshes

## Production Deployment

1. Set environment variables in your deployment platform
2. Ensure OAuth redirect URLs are configured in Supabase
3. Deploy to your subdomain (e.g., `header.aiworkspace.pro`)
4. Test cross-subdomain authentication

## Troubleshooting

**Session not persisting**: Check that cookies are being set for the correct domain  
**OAuth not working**: Verify redirect URLs in Supabase dashboard  
**Cross-subdomain issues**: Ensure `VITE_APEX_DOMAIN` is set correctly  

## Migration from Old System

The new system is a complete replacement for your separate login app. Simply:

1. Remove references to `login.aiworkspace.pro`
2. Update your apps to use the new header component
3. Configure Supabase credentials
4. Test authentication flow

The new system provides better UX, longer session persistence, and eliminates the need for a separate login app.
