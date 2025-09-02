import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
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
app.use(router)
app.mount('#app')
