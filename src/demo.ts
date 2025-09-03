import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import AIWorkspaceHeader from './components/AIWorkspaceHeader.vue'
import DemoApp from './DemoApp.vue'

// Create a simple router for demo purposes
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: DemoApp },
    { path: '/profile', component: { template: '<div><h1>Profile Page</h1><p>This is a demo profile page</p></div>' } },
    { path: '/settings', component: { template: '<div><h1>Settings Page</h1><p>This is a demo settings page</p></div>' } },
    { path: '/login', component: { template: '<div><h1>Login Page</h1><p>This is a demo login page</p></div>' } },
    { path: '/signup', component: { template: '<div><h1>Sign Up Page</h1><p>This is a demo signup page</p></div>' } }
  ]
})

// Create the demo app
const app = createApp(DemoApp)

// Initialize Pinia (required for stores)
const pinia = createPinia()
app.use(pinia)

// Initialize Element Plus with all components
app.use(ElementPlus)

// Register all Element Plus icons globally
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// Use router
app.use(router)

// Mount the app
app.mount('#app')

console.log('🚀 AIWorkspace Header Demo App initialized with:')
console.log('- ✅ Vue 3')
console.log('- ✅ Pinia (State Management)')
console.log('- ✅ Element Plus (UI Components)')
console.log('- ✅ Element Plus Icons')
console.log('- ✅ Vue Router')
console.log('- ✅ AIWorkspace Header Component')
