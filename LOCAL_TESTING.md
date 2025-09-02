# 🧪 Local Testing Guide

Test the shared header across multiple apps without publishing to NPM!

## 🚀 **Quick Start (5 minutes)**

### Step 1: Link the Header Package
```bash
# In header.aiworkspace.pro directory
cd header.aiworkspace.pro
npm link
```

### Step 2: Use in Another App
```bash
# In your app directory (e.g., dashboard.aiworkspace.pro)
cd ../dashboard.aiworkspace.pro
npm link @aiworkspace/shared-header
```

### Step 3: Import and Use
```vue
<template>
  <div>
    <AIWorkspaceHeader 
      :custom-links="appNavigation"
      :custom-logo="/your-logo.svg"
    />
    <!-- Your app content -->
  </div>
</template>

<script setup>
import { AIWorkspaceHeader } from '@aiworkspace/shared-header'

const appNavigation = [
  { label: 'Dashboard', url: '/dashboard' },
  { label: 'Analytics', url: '/analytics' }
]
</script>

<style>
/* Import the header styles */
@import '@aiworkspace/shared-header/style.css';
</style>

## 🔄 **Development Workflow**

### 1. **Make Changes to Header**
```bash
# In header.aiworkspace.pro
cd header.aiworkspace.pro
# Edit files...
npm run build
```

### 2. **Test Changes in Apps**
```bash
# Changes automatically appear in linked apps!
# No need to reinstall or restart
```

### 3. **Unlink When Done**
```bash
# In your app directory
npm unlink @aiworkspace/shared-header
npm install
```

## 📁 **Project Structure Example**

```
your-workspace/
├── header.aiworkspace.pro/          # This repo
│   ├── src/
│   ├── package.json
│   └── npm link                     # Creates global link
│
├── dashboard.aiworkspace.pro/       # App 1
│   ├── src/
│   ├── package.json
│   └── npm link @aiworkspace/shared-header
│
├── analytics.aiworkspace.pro/       # App 2
│   ├── src/
│   ├── package.json
│   └── npm link @aiworkspace/shared-header
│
└── chat.aiworkspace.pro/            # App 3
    ├── src/
    ├── package.json
    └── npm link @aiworkspace/shared-header
```

## ⚠️ **Important Notes**

### **npm link Limitations:**
- Only works on the same machine
- Requires manual linking in each app
- Changes require rebuilding (`npm run build`)
- Not suitable for production deployment

### **Best Practices:**
- Use for development and testing only
- Always run `npm run build` after header changes
- Test in all apps before publishing
- Keep header repo and app repos in same workspace

## 🔧 **Troubleshooting**

### **Header Not Showing:**
```bash
# Check if linked correctly
npm ls @aiworkspace/shared-header

# Rebuild header
cd header.aiworkspace.pro
npm run build

# Relink in app
cd ../your-app
npm unlink @aiworkspace/shared-header
npm link @aiworkspace/shared-header
```

### **Import Errors:**
```bash
# Check package.json in header repo
cat package.json | grep "main"

# Should show:
# "main": "dist/index.js"
```

### **Build Errors:**
```bash
# Clean and rebuild
cd header.aiworkspace.pro
rm -rf dist node_modules
npm install
npm run build
```

## 🎯 **When to Use Each Approach**

| Scenario | Use |
|----------|-----|
| **Development** | `npm link` (local testing) |
| **Team Sharing** | NPM publish |
| **Private Only** | GitHub + npm install git+... |
| **Production** | NPM publish + version management |

## 🚀 **Next Steps After Testing**

1. **Test in all 7 apps** using `npm link`
2. **Fix any issues** found during testing
3. **Choose deployment method:**
   - NPM publish (recommended for teams)
   - GitHub-only (private projects)
   - Both (flexibility)

## 💡 **Pro Tips**

- **Keep header repo open** in one terminal
- **Use `npm run dev`** in header repo for live development
- **Test in multiple apps simultaneously** to catch cross-app issues
- **Document any app-specific customizations** needed

---

**Time to test in all apps: ~15 minutes**  
**No NPM publishing required** ✅  
**Perfect for development and testing** 🎯
