import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import DemoApp from './DemoApp.vue'

// Create Vue app
const app = createApp(DemoApp)

// Setup Pinia
const pinia = createPinia()
app.use(pinia)

// Setup Element Plus
app.use(ElementPlus)

// Mount the app
app.mount('#app')