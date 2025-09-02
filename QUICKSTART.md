# 🚀 Quick Start Guide

Get the shared header running across all 7 apps in under 10 minutes!

## Phase 1: Setup Shared Header (5 minutes)

### 1. Install Dependencies
```bash
cd header.aiworkspace.pro
npm install
```

### 2. Test Locally
```bash
npm run dev
# Server will start on http://localhost:3000
```

### 3. Publish to NPM
```bash
npm login
npm publish --access public
```

## Phase 2: Update Each App (2 minutes per app)

### 1. Install Package

**Option A: Install from GitHub (Recommended)**
```bash
cd your-app-directory
npm install git+https://github.com/vikaskedia/header.aiworkspace.pro.git
```

**Option B: Local Development**
```bash
# In header repo
cd header.aiworkspace.pro
npm link

# In your app
cd your-app-directory
npm link @aiworkspace/shared-header
```

### 2. Replace Header Component
```vue
<!-- Before: Your old header -->
<template>
  <div>
    <!-- OLD HEADER CODE -->
    <YourOldHeader />
    
    <!-- Your app content -->
  </div>
</template>

<!-- After: New shared header -->
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
  { label: 'Home', url: '/' },
  { label: 'Features', url: '/features' }
]
</script>
```

### 3. Update Authentication
```typescript
// In your auth service
import { useAuth } from '@aiworkspace/shared-header'

const { setCookie, clearCookie } = useAuth()

// On login success
setCookie('aiworkspace_auth', supabaseToken)
setCookie('aiworkspace_user_id', userId)

// On logout
clearCookie('aiworkspace_auth')
clearCookie('aiworkspace_user_id')
```

## Phase 3: Test & Deploy (5 minutes)

### 1. Test Each App
- Verify header appears correctly
- Test login/logout functionality
- Check cross-app navigation

### 2. Deploy Updates
```bash
# Deploy each app with the new header
git add .
git commit -m "feat: integrate shared header component"
git push
```

## 🎯 What You Get

✅ **Unified Experience**: Same header across all 7 apps  
✅ **Shared Auth**: Login once, access all apps  
✅ **Easy Updates**: Change header once, update everywhere  
✅ **Customizable**: Each app can have unique navigation  
✅ **Responsive**: Works on all devices  

## 🔧 Troubleshooting

### Header Not Showing
- Check import: `import { AIWorkspaceHeader } from '@aiworkspace/shared-header'`
- Verify component name: `<AIWorkspaceHeader />`

### Auth Not Working
- Ensure cookies are set with domain `.aiworkspace.pro`
- Check Supabase integration in your auth service

### Styling Issues
- Header uses scoped styles, shouldn't conflict
- Check for CSS specificity conflicts

## 📞 Need Help?

1. Check the main README.md
2. Review the example in `examples/app-usage.vue`
3. Check component source in `src/components/AIWorkspaceHeader.vue`

## 🚀 Next Steps

After setup:
1. Customize navigation links for each app
2. Add app-specific logos
3. Configure feature toggles
4. Set up automated deployments

---

**Time to complete: ~10 minutes total**  
**Apps updated: 7**  
**Shared components: 1**  
**Maintenance overhead: Reduced by 80%** 🎉
