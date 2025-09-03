# CommonJS App Installation Guide

## 🚨 **Special Instructions for CommonJS Apps**

If your app has `"type": "commonjs"` in package.json, follow these specific steps:

## ✅ **Installation Steps**

### 1. Install Dependencies
```bash
npm install vue@^3.0.0 element-plus@^2.0.0 pinia@^2.0.0 @supabase/supabase-js@^2.0.0
```

### 2. Install Header Package
```bash
npm install git+https://github.com/vikaskedia/header.aiworkspace.pro.git
```

### 3. Update Your main.js/main.ts

**⚠️ CRITICAL: Use CommonJS import syntax**

```javascript
// main.js (CommonJS)
const { createApp } = require('vue')
const { createPinia } = require('pinia')
const ElementPlus = require('element-plus')
require('element-plus/dist/index.css')
const App = require('./App.vue').default

const app = createApp(App)
const pinia = createPinia()

// ⚠️ CRITICAL: Pinia must be initialized BEFORE the header component
app.use(pinia)
app.use(ElementPlus)

app.mount('#app')
```

**OR if using ES modules in CommonJS app:**

```javascript
// main.js (ES modules in CommonJS app)
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

### 4. Update Your App.vue

```vue
<template>
  <div>
    <AIWorkspaceHeader />
    <!-- Your app content -->
  </div>
</template>

<script>
// CommonJS import
const { AIWorkspaceHeader } = require('@aiworkspace/shared-header')

export default {
  components: {
    AIWorkspaceHeader
  }
}
</script>

<style>
@import '@aiworkspace/shared-header/style.css';
</style>
```

**OR if using ES modules:**

```vue
<template>
  <div>
    <AIWorkspaceHeader />
    <!-- Your app content -->
  </div>
</template>

<script setup>
import { AIWorkspaceHeader } from '@aiworkspace/shared-header'
</script>

<style>
@import '@aiworkspace/shared-header/style.css';
</style>
```

## 🔧 **Alternative: Convert to ES Modules**

**Recommended solution**: Convert your app to ES modules for better compatibility:

### Update package.json
```json
{
  "name": "your-app",
  "version": "1.0.0",
  "type": "module",  // Change from "commonjs" to "module"
  // ... rest of your config
}
```

### Update main.js to main.ts
```typescript
// main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(ElementPlus)

app.mount('#app')
```

## 🚨 **Common Issues & Solutions**

### Issue: "Cannot use import statement outside a module"
**Solution**: Either use CommonJS require() syntax or convert to ES modules

### Issue: "Module not found"
**Solution**: Ensure you're using the correct import path and syntax

### Issue: Pinia not initialized
**Solution**: Always call `app.use(pinia)` before mounting the app

## 📋 **Checklist for CommonJS Apps**

- [ ] Dependencies installed correctly
- [ ] Using correct import syntax (require vs import)
- [ ] Pinia initialized before app mount
- [ ] Element Plus initialized
- [ ] Header component imported correctly
- [ ] CSS imported

## 🔗 **Additional Resources**

- [Main Installation Guide](./INSTALLATION_GUIDE.md)
- [Troubleshooting Guide](./TROUBLESHOOTING.md)
- [Quick Start Guide](./QUICKSTART.md)

## 🆘 **Still Having Issues?**

1. **Check console errors** for specific module issues
2. **Verify import syntax** matches your app's module system
3. **Ensure Pinia initialization** order is correct
4. **Try converting to ES modules** for better compatibility
