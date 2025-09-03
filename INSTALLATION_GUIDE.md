# Installation Guide for Other Apps

## 🚨 **Critical: Pinia Must Be Initialized First!**

The most common error when installing this package is:
```
❌ Error: "getActivePinia()" was called but there was no active Pinia. 
Are you trying to use a store before calling "app.use(pinia)"?
```

## ✅ **Correct Installation Order**

### 1. Install Dependencies First
```bash
npm install vue@^3.0.0 element-plus@^2.0.0 pinia@^2.0.0 @supabase/supabase-js@^2.0.0
```

### 2. Install the Header Package (Choose One)

#### **Option A: From Git Repository (Recommended for Development)**
```bash
npm install git+https://github.com/vikaskedia/header.aiworkspace.pro.git
```

#### **Option B: From NPM Registry (When Published)**
```bash
npm install @aiworkspace/shared-header --legacy-peer-deps
```

> **Note**: Currently, the package is in development and should be installed from Git. The NPM version will be available once the package is published to the NPM registry.

### 3. Initialize Pinia BEFORE Using the Header
```typescript
// main.ts or main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

// ⚠️ CRITICAL: Pinia must be initialized BEFORE the header component
app.use(pinia)
app.use(ElementPlus)

app.mount('#app')
```

## ❌ **Common Mistakes**

### Wrong Order (Will Cause Error)
```typescript
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)
app.mount('#app') // ❌ App mounted before Pinia

// This will cause the header to fail
const pinia = createPinia()
app.use(pinia)
```

### Missing Pinia Initialization
```typescript
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
// ❌ Missing: app.use(createPinia())
app.mount('#app')
```

## 🔧 **Complete Working Example**

### main.ts
```typescript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

// 1. Initialize Pinia FIRST
app.use(pinia)

// 2. Initialize Element Plus
app.use(ElementPlus)

// 3. Register Element Plus icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 4. Mount the app
app.mount('#app')
```

### App.vue
```vue
<template>
  <div>
    <!-- Header will work because Pinia is initialized -->
    <AIWorkspaceHeader />
    <main>
      <!-- Your app content -->
    </main>
  </div>
</template>

<script setup>
import { AIWorkspaceHeader } from '@aiworkspace/shared-header'
</script>

<style>
@import '@aiworkspace/shared-header/style.css';
</style>
```

## 🌍 **Environment Variables**

Create a `.env` file in your app root:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_APEX_DOMAIN=aiworkspace.pro
```

## 📦 **Installation Methods Explained**

### **Git Installation (Current - Recommended)**
```bash
npm install git+https://github.com/vikaskedia/header.aiworkspace.pro.git
```
- **Best for**: Development, testing, getting latest changes
- **Pros**: Always gets the latest code, no publishing required
- **Cons**: No version control, may be unstable

### **NPM Installation (Future)**
```bash
npm install @aiworkspace/shared-header --legacy-peer-deps
```
- **Best for**: Production apps, stable releases
- **Pros**: Version control, stable releases, automatic updates
- **Cons**: Requires publishing to NPM first

> **Current Status**: The package is in development and should be installed from Git. NPM version will be available once published.

## 🚀 **Quick Test**

After installation, test if everything works:

1. **Check console**: No Pinia errors
2. **Header renders**: Shows "AI Workspace" logo
3. **No crashes**: App loads without errors

## 🆘 **Still Having Issues?**

### Check Pinia Version
```bash
npm list pinia
```

### Verify Initialization Order
```bash
# Search your main file for Pinia initialization
grep -r "createPinia" src/
grep -r "app.use" src/
```

### Clear and Reinstall
```bash
rm -rf node_modules package-lock.json
npm install
npm install git+https://github.com/vikaskedia/header.aiworkspace.pro.git
```

## 📋 **Dependency Checklist**

- [ ] Vue 3.x installed
- [ ] Pinia installed
- [ ] Element Plus installed
- [ ] Header package installed from Git: `npm install git+https://github.com/vikaskedia/header.aiworkspace.pro.git`
- [ ] Pinia initialized BEFORE app mount
- [ ] Environment variables set
- [ ] Header imported after Pinia setup

## 🔗 **Additional Resources**

- [Troubleshooting Guide](./TROUBLESHOOTING.md)
- [Quick Start Guide](./QUICKSTART.md)
- [API Reference](./README.md#api-reference)
