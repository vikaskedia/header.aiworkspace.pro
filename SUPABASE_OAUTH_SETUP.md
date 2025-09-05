# Supabase OAuth Setup Guide

To fix the redirect issue where OAuth login redirects to `app.aiworkspace.pro` instead of staying on the same domain, you need to configure the OAuth redirect URLs in your Supabase dashboard.

## Step 1: Access Supabase Dashboard

1. Go to [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to **Authentication** → **URL Configuration**

## Step 2: Add Redirect URLs

In the **Redirect URLs** section, add all the domains where you'll be using the header:

### Local Development URLs:
```
http://localhost:3000/auth/callback
http://localhost:3001/auth/callback
http://localhost:5173/auth/callback
http://127.0.0.1:3000/auth/callback
http://127.0.0.1:3001/auth/callback
http://127.0.0.1:5173/auth/callback
```

### Production URLs (your 7 subdomains):
```
https://header.aiworkspace.pro/auth/callback
https://app.aiworkspace.pro/auth/callback
https://all-ws-dashboard.aiworkspace.pro/auth/callback
https://single-ws-dashboard.aiworkspace.pro/auth/callback
https://outline.aiworkspace.pro/auth/callback
https://canvas.aiworkspace.pro/auth/callback
https://drive.aiworkspace.pro/auth/callback
https://tasks.aiworkspace.pro/auth/callback
https://spreadsheet.aiworkspace.pro/auth/callback
```

## Step 3: Configure OAuth Providers

For each OAuth provider (Google, GitHub, Twitter), make sure the redirect URLs are configured:

### Google OAuth:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **APIs & Services** → **Credentials**
3. Edit your OAuth 2.0 Client ID
4. Add all the redirect URLs from Step 2 to **Authorized redirect URIs**

### GitHub OAuth:
1. Go to GitHub → **Settings** → **Developer settings** → **OAuth Apps**
2. Edit your OAuth App
3. Add all the redirect URLs from Step 2 to **Authorization callback URL**

### Twitter OAuth:
1. Go to [Twitter Developer Portal](https://developer.twitter.com/)
2. Navigate to your app → **App settings** → **Authentication settings**
3. Add all the redirect URLs from Step 2 to **Callback URLs**

## Step 4: Test the Configuration

After adding the URLs:

1. **Test localhost**: Try OAuth login on `localhost:3000` - it should redirect back to `localhost:3000`
2. **Test subdomains**: Try OAuth login on any subdomain - it should redirect back to the same subdomain
3. **Check console logs**: The console should show the correct redirect URLs

## Step 5: Environment Variables

Make sure your environment variables are set correctly:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_APEX_DOMAIN=aiworkspace.pro
VITE_DEFAULT_POST_LOGIN_URL=/
```

## Troubleshooting

### If OAuth still redirects to wrong domain:

1. **Check Supabase logs**: Go to Supabase Dashboard → **Logs** → **Auth** to see OAuth errors
2. **Clear browser cache**: OAuth providers cache redirect URLs
3. **Check console logs**: Look for `[OAuth]` prefixed messages in browser console
4. **Verify URLs**: Make sure all URLs in Supabase dashboard match exactly (including protocol and port)

### Common Issues:

- **Missing protocol**: URLs must include `http://` or `https://`
- **Wrong port**: Make sure port numbers match your development server
- **Case sensitivity**: URLs are case-sensitive
- **Trailing slashes**: Some providers are sensitive to trailing slashes

## Testing Checklist

- [ ] OAuth login on `localhost:3000` redirects to `localhost:3000`
- [ ] OAuth login on `localhost:3001` redirects to `localhost:3001`
- [ ] OAuth login on any subdomain redirects to the same subdomain
- [ ] Console shows correct redirect URLs
- [ ] No OAuth errors in Supabase logs
- [ ] Session persists across page refreshes
- [ ] Cross-subdomain cookies work correctly

Once you've configured all the redirect URLs in Supabase and the OAuth providers, the login should work correctly on all your domains!
