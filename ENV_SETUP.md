# 🌍 Environment Setup Guide

This guide explains how to set up environment variables for the AIWorkspace Header DemoApp.

## 📁 Create Environment File

Create a `.env` file in your project root directory:

```bash
touch .env
```

## 🔧 Required Environment Variables

Add the following variables to your `.env` file:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# Domain Configuration
VITE_APEX_DOMAIN=aiworkspace.pro

# Default Post-Login URL
VITE_DEFAULT_POST_LOGIN_URL=/

# Environment Mode
VITE_ENV=development
```

## 📋 Variable Descriptions

### `VITE_SUPABASE_URL`
- **Required**: Yes
- **Description**: Your Supabase project URL
- **Format**: `https://your-project-id.supabase.co`
- **Example**: `https://abc123.supabase.co`

### `VITE_SUPABASE_ANON_KEY`
- **Required**: Yes
- **Description**: Your Supabase anonymous/public key
- **Format**: Long string starting with `eyJ...`
- **Location**: Found in Supabase Dashboard → Settings → API

### `VITE_APEX_DOMAIN`
- **Required**: Yes
- **Description**: Your main domain for cross-subdomain authentication
- **Default**: `aiworkspace.pro`
- **Example**: `yourcompany.com`

### `VITE_DEFAULT_POST_LOGIN_URL`
- **Required**: No
- **Description**: Default redirect URL after successful login
- **Default**: `/`
- **Example**: `/dashboard`

### `VITE_ENV`
- **Required**: No
- **Description**: Environment mode for debugging
- **Options**: `development`, `staging`, `production`
- **Default**: `development`

## 🔍 How to Get Supabase Credentials

### 1. Go to Supabase Dashboard
Visit [https://supabase.com/dashboard](https://supabase.com/dashboard)

### 2. Select Your Project
Choose the project you want to use

### 3. Go to Settings → API
- Click on the gear icon (Settings)
- Select "API" from the sidebar

### 4. Copy Credentials
- **Project URL**: Copy the "Project URL"
- **Anon/Public Key**: Copy the "anon public" key

## 🚀 Testing Your Configuration

### 1. Start the Demo App
```bash
npm run dev
```

### 2. Check Browser Console
Look for these log messages:
```
Supabase Configuration: { url: "https://...", hasKey: true, ... }
URL: https://*****.supabase.co
Key configured: true
Environment mode: development
```

### 3. Test Authentication
- Click "Simulate Login" button
- Check if authentication state changes
- Look for any error messages in console

## 🛠️ Troubleshooting

### Common Issues

#### 1. "Key configured: false"
- Check if `VITE_SUPABASE_ANON_KEY` is set correctly
- Ensure the key starts with `eyJ...`
- Verify there are no extra spaces or quotes

#### 2. "URL: https://*****.supabase.co"
- Check if `VITE_SUPABASE_URL` is set correctly
- Ensure the URL format is `https://project-id.supabase.co`
- Verify there are no trailing slashes

#### 3. Authentication not working
- Check if Supabase project is active
- Verify RLS (Row Level Security) policies
- Check if auth is enabled in Supabase

#### 4. Cross-subdomain issues
- Ensure `VITE_APEX_DOMAIN` is set correctly
- Check if cookies are being set with proper domain
- Verify SameSite and Secure cookie settings

### Debug Mode

Enable detailed logging by setting:
```env
VITE_ENV=development
```

Check browser console for detailed logs about:
- Cookie operations
- Authentication state changes
- Workspace loading
- Cross-subdomain operations

## 🔒 Security Notes

### Never Commit .env Files
```bash
# Add to .gitignore
echo ".env" >> .gitignore
echo ".env.local" >> .gitignore
echo ".env.*.local" >> .gitignore
```

### Production Environment
- Use different Supabase projects for staging/production
- Set `VITE_ENV=production` in production
- Use environment-specific API keys

### API Key Security
- The `VITE_SUPABASE_ANON_KEY` is safe to expose in client-side code
- It's designed for public use and has limited permissions
- Never expose service role keys or admin keys

## 📚 Next Steps

After setting up your environment:

1. **Test the DemoApp**: Run `npm run dev` and test all features
2. **Customize Configuration**: Adjust URLs and domains as needed
3. **Deploy to Your Apps**: Use the same configuration in your 7 apps
4. **Monitor Logs**: Check console for any configuration issues

## 🆘 Need Help?

- Check the browser console for error messages
- Review the [README](./README.md) for complete documentation
- Create an issue on GitHub
- Contact: kedia.vikas@gmail.com

---

**🎯 Pro Tip**: Start with the demo app to test your configuration before integrating into your production apps!
