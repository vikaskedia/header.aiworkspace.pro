# Environment Variables Setup

## 🚨 **Required Environment Variables**

Create a `.env` file in your app root with these variables:

```bash
# Supabase Configuration (Required)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# Cross-subdomain Authentication (Required)
VITE_APEX_DOMAIN=aiworkspace.pro

# Optional: Default post-login redirect
VITE_DEFAULT_POST_LOGIN_URL=/dashboard
```

## 🔑 **Getting Your Supabase Credentials**

### 1. **Go to Supabase Dashboard**
- Visit [https://supabase.com/dashboard](https://supabase.com/dashboard)
- Sign in to your account

### 2. **Select Your Project**
- Choose the project you want to use
- Or create a new project if needed

### 3. **Get API Keys**
- Go to **Settings** → **API**
- Copy the **Project URL** → `VITE_SUPABASE_URL`
- Copy the **anon public** key → `VITE_SUPABASE_ANON_KEY`

## 🌐 **Cross-Subdomain Configuration**

### **Apex Domain Setting**
```bash
VITE_APEX_DOMAIN=aiworkspace.pro
```

**This enables:**
- ✅ **Shared authentication** across all subdomains
- ✅ **Single sign-on** between apps
- ✅ **Persistent sessions** across domains
- ✅ **Secure cookie sharing** with proper domain scope

### **Supported Subdomain Pattern**
```
app.aiworkspace.pro          ✅ Works
dashboard.aiworkspace.pro    ✅ Works
single-ws.aiworkspace.pro    ✅ Works
localhost:3000               ✅ Works (development)
```

## 📁 **File Structure**

```
your-app/
├── .env                     ← Create this file
├── package.json
├── src/
└── ...
```

## 🔧 **Configuration Details**

### **Supabase Client Settings**
The header package automatically configures:
- **Storage**: `localStorage` for session persistence
- **Auto-refresh**: Automatic token refresh
- **Cross-domain cookies**: Proper domain scoping
- **Session persistence**: Maintains login state

### **Cookie Configuration**
- **Domain**: `.aiworkspace.pro` (apex domain)
- **Path**: `/` (available across all paths)
- **SameSite**: `Lax` (secure cross-site requests)
- **Secure**: `true` (HTTPS only in production)

## 🚀 **Quick Setup**

### **Option 1: Manual Setup**
1. Create `.env` file in your app root
2. Copy the template above
3. Fill in your Supabase credentials
4. Set your apex domain

### **Option 2: Use Setup Script**
```bash
# Make the script executable
chmod +x setup-env.sh

# Run the setup script
./setup-env.sh
```

### **Option 3: Copy from Template**
```bash
# Copy the template
cp env.config.js .env

# Edit with your values
nano .env
```

## ✅ **Verification**

After setting up, verify your configuration:

1. **Check console logs** for Supabase connection
2. **Verify authentication** works across subdomains
3. **Test session persistence** on page reload
4. **Confirm cross-domain cookies** are set

## 🐛 **Common Issues**

### **"Supabase URL not configured"**
- Check `.env` file exists
- Verify `VITE_SUPABASE_URL` is set
- Ensure no typos in variable names

### **"Invalid API key"**
- Copy the **anon public** key (not the service role key)
- Check for extra spaces or characters
- Verify the key is from the correct project

### **"Cross-domain cookies not working"**
- Verify `VITE_APEX_DOMAIN` is set correctly
- Check that you're using a subdomain of the apex domain
- Ensure HTTPS in production

## 🔗 **Related Documentation**

- [Installation Guide](./INSTALLATION_GUIDE.md)
- [CommonJS Installation](./COMMONJS_INSTALLATION.md)
- [Troubleshooting Guide](./TROUBLESHOOTING.md)
- [URL Workspace Selection](./URL_WORKSPACE_SELECTION.md)
