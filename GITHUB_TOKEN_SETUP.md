# GitHub Token Setup for Private Repositories

The AI Workspace Header package can access private GitHub repositories by using a GitHub Personal Access Token. This guide explains how to set up and configure the token.

## Why GitHub Token is Needed

- **Private Repositories**: GitHub API requires authentication to access private repositories
- **Rate Limits**: Authenticated requests have higher rate limits (5,000/hour vs 60/hour)
- **404 Errors**: Without authentication, private repositories return 404 errors

## Creating a GitHub Personal Access Token

### Step 1: Go to GitHub Settings
1. Go to [GitHub.com](https://github.com) and sign in
2. Click your profile picture → **Settings**
3. In the left sidebar, click **Developer settings**
4. Click **Personal access tokens** → **Tokens (classic)**

### Step 2: Generate New Token
1. Click **Generate new token** → **Generate new token (classic)**
2. Give it a descriptive name: `AI Workspace Header`
3. Set expiration (recommended: 1 year)
4. Select scopes:
   - ✅ **repo** (Full control of private repositories)
   - ✅ **public_repo** (Access public repositories)

### Step 3: Copy the Token
1. Click **Generate token**
2. **Copy the token immediately** (you won't see it again)
3. Store it securely

## Configuring the Token

### Option 1: Global Configuration (Recommended)

Configure the token in your app's main.js, similar to how you configure Supabase:

```javascript
// main.js
import { configureSupabase, configureGitHub } from '@aiworkspace/shared-header'

// Configure Supabase
configureSupabase({
  url: import.meta.env.VITE_SUPABASE_URL,
  anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY
})

// Configure GitHub
configureGitHub({
  token: import.meta.env.VITE_GITHUB_TOKEN
})
```

### Option 2: Environment Variable (Fallback)

Add the token to your app's environment variables:

```bash
# .env file
VITE_GITHUB_TOKEN=ghp_your_token_here
```

**For different frameworks:**
- **Vite/React**: `VITE_GITHUB_TOKEN=ghp_...`
- **Next.js**: `NEXT_PUBLIC_GITHUB_TOKEN=ghp_...`
- **Nuxt**: `NUXT_PUBLIC_GITHUB_TOKEN=ghp_...`

### Option 3: Manual Configuration (For Testing)

You can manually set the token in the browser console:

```javascript
// Open browser console and run:
localStorage.setItem('github_token', 'ghp_your_token_here')

// Then refresh the page
```

## Security Best Practices

### ✅ Do:
- Use environment variables for production
- Set token expiration (1 year max)
- Use minimal required scopes
- Rotate tokens regularly
- Never commit tokens to version control

### ❌ Don't:
- Hardcode tokens in source code
- Share tokens in chat/email
- Use tokens with excessive permissions
- Store tokens in public repositories

## Testing the Setup

1. **Check Console Logs**: Look for these messages:
   - `🔑 Using GitHub token for authentication` ✅
   - `⚠️ No GitHub token found, trying unauthenticated request` ❌

2. **Verify API Access**: The header should now show the correct commit hash for private repositories

3. **Check Rate Limits**: Authenticated requests have higher limits

## Troubleshooting

### Common Issues:

**404 Error Still Appearing:**
- Verify the token has `repo` scope
- Check if the repository name is correct
- Ensure the token is not expired

**401 Unauthorized:**
- Token may be invalid or expired
- Check token permissions
- Regenerate token if needed

**Rate Limit Errors:**
- Authenticated tokens have 5,000 requests/hour
- Check if multiple apps are using the same token

## Token Management

### For Multiple Apps:
- Create separate tokens for each app
- Use descriptive names: `App1-Header`, `App2-Header`
- Monitor token usage in GitHub settings

### Token Rotation:
- Set calendar reminders to rotate tokens
- Update environment variables when rotating
- Test after rotation to ensure everything works

## Example Configuration Files

### Vite/React (.env)
```bash
VITE_GITHUB_TOKEN=ghp_1234567890abcdef1234567890abcdef12345678
```

### Next.js (.env.local)
```bash
NEXT_PUBLIC_GITHUB_TOKEN=ghp_1234567890abcdef1234567890abcdef12345678
```

### Nuxt (.env)
```bash
NUXT_PUBLIC_GITHUB_TOKEN=ghp_1234567890abcdef1234567890abcdef12345678
```

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify token permissions and expiration
3. Test with a public repository first
4. Contact support with specific error messages
