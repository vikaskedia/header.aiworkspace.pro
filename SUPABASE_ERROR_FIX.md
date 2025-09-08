# Supabase Error Fix: TypeError: ne is not a function

## Problem
When installing the `@aiworkspace/shared-header` package in another app, you may encounter this error:
```
TypeError: ne is not a function
```

This error occurs in the Supabase client initialization and is typically caused by:
1. Missing or incorrect environment variables
2. Version conflicts with Supabase client
3. Improper bundling of the Supabase client

## Solution

### 1. Environment Variables Setup

Make sure your app has the correct environment variables set:

```bash
# .env file
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 2. Alternative: Global Configuration

If environment variables aren't available, you can set them globally in your app:

```javascript
// In your main.js or app initialization
window.__SUPABASE_URL__ = 'https://your-project.supabase.co'
window.__SUPABASE_ANON_KEY__ = 'your-anon-key-here'
```

### 3. Package.json Dependencies

Ensure your app has compatible dependencies:

```json
{
  "dependencies": {
    "@supabase/supabase-js": "^2.0.0",
    "vue": "^3.0.0",
    "element-plus": "^2.0.0",
    "pinia": "^2.0.0 || ^3.0.0"
  }
}
```

### 4. Vite Configuration

If using Vite, make sure environment variables are properly configured:

```javascript
// vite.config.js
export default {
  define: {
    'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL),
    'import.meta.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(process.env.VITE_SUPABASE_ANON_KEY)
  }
}
```

## Error Handling Improvements

The package now includes better error handling:

1. **Safe Environment Variable Access**: Falls back to global variables if import.meta.env is not available
2. **Error Wrapped Supabase Calls**: All Supabase operations are wrapped in try-catch blocks
3. **Graceful Degradation**: If Supabase client creation fails, a fallback client is created
4. **Better Logging**: Enhanced console logging to help debug issues

## Debugging

If you still encounter issues, check the browser console for:

1. **Configuration Messages**:
   ```
   [Supabase] Missing required environment variables: { hasUrl: false, hasKey: false }
   ```

2. **Error Messages**:
   ```
   [Supabase] Failed to create client: [error details]
   ```

3. **Authentication Messages**:
   ```
   [auth][enhanced] Error getting Supabase session: [error details]
   ```

## Testing

To test if the fix works:

1. Install the package in your app
2. Set up environment variables or global configuration
3. Check browser console for successful initialization messages
4. Verify authentication works across subdomains

## Common Issues

### Issue: Environment variables not available
**Solution**: Use global configuration method or ensure proper Vite configuration

### Issue: Supabase client version mismatch
**Solution**: Ensure your app uses `@supabase/supabase-js` version `^2.0.0`

### Issue: Bundling conflicts
**Solution**: Make sure the package is properly externalized in your build configuration

## Support

If you continue to experience issues, please check:
1. Browser console for detailed error messages
2. Network tab for failed requests
3. Environment variable configuration
4. Supabase project settings and API keys
