# Supabase Configuration Guide

## Overview

The AIWorkspace Header package no longer includes hardcoded Supabase credentials for security reasons. Instead, consuming applications must provide their own Supabase configuration.

## Configuration Methods

### Method 1: Programmatic Configuration (Recommended)

Configure Supabase credentials in your application before using the header component:

```javascript
import { configureSupabase } from '@aiworkspace/shared-header'

// Configure Supabase with your credentials
configureSupabase({
  url: 'https://your-project.supabase.co',
  anonKey: 'your-anon-key-here'
})
```

### Method 2: Global Window Variables

Set global variables on the window object before the package loads:

```html
<script>
  window.__SUPABASE_URL__ = 'https://your-project.supabase.co'
  window.__SUPABASE_ANON_KEY__ = 'your-anon-key-here'
</script>
<script src="your-header-package.js"></script>
```

### Method 3: Environment Variables (Development Only)

For development and demo purposes, you can still use environment variables:

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## Complete Integration Example

```javascript
import { createApp } from 'vue'
import { AIWorkspaceHeader, configureSupabase } from '@aiworkspace/shared-header'
import '@aiworkspace/shared-header/style.css'

// Configure Supabase before creating the app
configureSupabase({
  url: process.env.VITE_SUPABASE_URL,
  anonKey: process.env.VITE_SUPABASE_ANON_KEY
})

const app = createApp({
  components: {
    AIWorkspaceHeader
  },
  template: '<AIWorkspaceHeader />'
})

app.mount('#app')
```

## Security Best Practices

1. **Never commit credentials to version control**
2. **Use environment variables in production**
3. **Rotate your Supabase keys regularly**
4. **Use the anon key only for client-side operations**
5. **Implement proper RLS (Row Level Security) policies**

## Environment Variables

Create a `.env` file in your project root:

```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here

# Optional: Cross-subdomain settings
VITE_APEX_DOMAIN=yourdomain.com
VITE_DEFAULT_POST_LOGIN_URL=/dashboard
```

## Error Handling

The package includes comprehensive error handling:

- **Missing Configuration**: Shows warning and uses fallback client
- **Invalid Credentials**: Logs errors and provides helpful messages
- **Network Issues**: Gracefully handles connection problems

## Migration from Previous Versions

If you're upgrading from a version with hardcoded credentials:

1. Remove any hardcoded Supabase URLs/keys from your code
2. Add the `configureSupabase()` call to your app initialization
3. Set up environment variables for your Supabase project
4. Test authentication flows thoroughly

## Troubleshooting

### "No configuration found" Warning
- Ensure you've called `configureSupabase()` before using the header
- Check that your credentials are valid
- Verify environment variables are properly set

### Authentication Not Working
- Confirm your Supabase project is active
- Check that RLS policies allow the operations
- Verify the anon key has the correct permissions

### Cross-Subdomain Issues
- Ensure your domain configuration is correct
- Check that cookies are being set properly
- Verify the apex domain setting matches your setup

## Support

For additional help:
- Check the [Supabase Documentation](https://supabase.com/docs)
- Review the [AIWorkspace Integration Guide](./INTEGRATION_GUIDE.md)
- Open an issue in the project repository
