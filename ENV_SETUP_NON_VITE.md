# Using Non-VITE Prefixed Environment Variables

This guide shows how to use non-VITE prefixed environment variables with the AIWorkspace Header package for security reasons.

## Problem

By default, Vite only exposes environment variables that start with `VITE_` to client-side code. For security reasons, you might not want to prefix sensitive variables like `SUPABASE_ANON_KEY` with `VITE_`.

## Solution

The package now supports both prefixed and non-prefixed environment variables with multiple fallback strategies.

## Setup for Consuming Apps

### 1. Environment Variables (.env file)

```env
# Non-prefixed (secure)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
APEX_DOMAIN=aiworkspace.pro

# Or VITE prefixed (traditional)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
VITE_APEX_DOMAIN=aiworkspace.pro
```

### 2. Vite Configuration (vite.config.ts)

For non-prefixed variables to work in client-side code, you need to explicitly define them in your Vite config:

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  define: {
    // Explicitly expose non-prefixed environment variables
    'import.meta.env.SUPABASE_URL': JSON.stringify(process.env.SUPABASE_URL),
    'import.meta.env.SUPABASE_ANON_KEY': JSON.stringify(process.env.SUPABASE_ANON_KEY),
    'import.meta.env.APEX_DOMAIN': JSON.stringify(process.env.APEX_DOMAIN)
  }
})
```

### 3. Manual Configuration (Recommended for Production)

Instead of relying on build-time environment variables, manually configure the package:

```typescript
// In your main.ts or app setup
import { configureSupabase } from '@aiworkspace/shared-header'

// Configure manually (most secure)
configureSupabase({
  url: 'https://your-project.supabase.co',
  anonKey: 'your-anon-key-here'
})
```

### 4. Auto Configuration from Environment

Use the built-in auto-configuration utility:

```typescript
// In your main.ts or app setup
import { autoConfigureFromEnv } from '@aiworkspace/shared-header'

// This will automatically detect and configure from environment variables
autoConfigureFromEnv()
```

## Development vs Production

### Development
- Use environment variables for convenience
- Make sure your `vite.config.ts` exposes the variables

### Production
- Use manual configuration for better security
- Don't expose sensitive keys in client-side bundles
- Consider server-side configuration injection

## Debugging

Use the debug utility to see what environment variables are available:

```typescript
import { debugEnvConfig } from '@aiworkspace/shared-header'

// This will log all available environment variables and configuration
debugEnvConfig()
```

## Security Best Practices

1. **Manual Configuration**: For production, avoid environment variables and configure manually
2. **Server-side Injection**: Inject configuration from server-side at runtime
3. **Limited Exposure**: Only expose what's absolutely necessary to client-side
4. **Rotation**: Regularly rotate your Supabase anon keys

## Example Implementation

```typescript
// main.ts
import { createApp } from 'vue'
import { configureSupabase } from '@aiworkspace/shared-header'
import App from './App.vue'

// Option 1: Manual configuration (recommended)
configureSupabase({
  url: import.meta.env.SUPABASE_URL || 'https://your-project.supabase.co',
  anonKey: import.meta.env.SUPABASE_ANON_KEY || 'your-anon-key'
})

// Option 2: Auto configuration
// import { autoConfigureFromEnv } from '@aiworkspace/shared-header'
// autoConfigureFromEnv()

const app = createApp(App)
app.mount('#app')
```

This approach gives you the flexibility to use non-VITE prefixed variables while maintaining security.
