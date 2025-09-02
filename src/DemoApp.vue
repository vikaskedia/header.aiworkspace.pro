<template>
  <div class="demo-app">
    <!-- Demo Header with different configurations -->
    <AIWorkspaceHeader 
      :custom-links="demoNavigation"
      :custom-logo="'/demo-logo.svg'"
      :show-notifications="true"
      :show-user-menu="true"
    />
    
    <main class="demo-content">
      <h1>AIWorkspace Shared Header - Demo</h1>
      <p>This is a demonstration of the shared header component that will be used across all 7 apps.</p>
      
      <div class="demo-sections">
        <section class="demo-section">
          <h2>Features Demonstrated</h2>
          <ul>
            <li>✅ Responsive header design</li>
            <li>✅ Authentication state management</li>
            <li>✅ Custom navigation links</li>
            <li>✅ User menu with dropdown</li>
            <li>✅ Notifications button</li>
            <li>✅ Router integration</li>
          </ul>
        </section>
        
        <section class="demo-section">
          <h2>Navigation Links</h2>
          <p>Custom navigation links configured for this demo:</p>
          <nav class="demo-nav">
            <router-link 
              v-for="link in demoNavigation" 
              :key="link.label"
              :to="link.url"
              class="demo-nav-link"
            >
              {{ link.label }}
            </router-link>
          </nav>
        </section>
        
        <section class="demo-section">
          <h2>Authentication Testing</h2>
          <p>Try these actions to test the header:</p>
          <div class="demo-actions">
            <button @click="simulateLogin" class="demo-btn login-btn">Simulate Login</button>
            <button @click="simulateLogout" class="demo-btn logout-btn">Simulate Logout</button>
            <button @click="toggleNotifications" class="demo-btn">Toggle Notifications</button>
          </div>
        </section>
        
        <section class="demo-section">
          <h2>Integration Instructions</h2>
          <p>To use this header in your app:</p>
          
          <h3>Method 1: Install from GitHub (Recommended)</h3>
          <ol>
            <li>Install: <code>npm install git+https://github.com/vikaskedia/header.aiworkspace.pro.git</code></li>
            <li>Import: <code>import { AIWorkspaceHeader } from '@aiworkspace/shared-header'</code></li>
            <li>Use: <code>&lt;AIWorkspaceHeader /&gt;</code></li>
            <li><strong>Important:</strong> Import CSS: <code>@import '@aiworkspace/shared-header/style.css';</code></li>
          </ol>
          
          <h3>Method 2: Local Development with npm link</h3>
          <ol>
            <li>In header repo: <code>npm link</code></li>
            <li>In your app: <code>npm link @aiworkspace/shared-header</code></li>
            <li>Import and use as above</li>
            <li><strong>Important:</strong> Import CSS: <code>@import '@aiworkspace/shared-header/style.css';</code></li>
          </ol>
          
          <h3>Method 3: Publish to NPM (For Team Use)</h3>
          <ol>
            <li>Publish: <code>npm publish --access public</code></li>
            <li>Install: <code>npm install @aiworkspace/shared-header</code></li>
            <li>Import and use as above</li>
            <li><strong>Important:</strong> Import CSS: <code>@import '@aiworkspace/shared-header/style.css';</code></li>
          </ol>
          
          <h3>Complete Example:</h3>
          <pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;AIWorkspaceHeader /&gt;
    &lt;!-- Your app content --&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { AIWorkspaceHeader } from '@aiworkspace/shared-header'
&lt;/script&gt;

&lt;style&gt;
@import '@aiworkspace/shared-header/style.css';
&lt;/style&gt;</code></pre>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AIWorkspaceHeader from './components/AIWorkspaceHeader.vue'

const demoNavigation = [
  { label: 'Home', url: '/' },
  { label: 'Features', url: '/features' },
  { label: 'Documentation', url: '/docs' },
  { label: 'GitHub', url: 'https://github.com/aiworkspace', external: true }
]

const simulateLogin = () => {
  // Simulate setting auth cookies
  document.cookie = 'aiworkspace_auth=demo-token;domain=.aiworkspace.pro;path=/'
  document.cookie = 'aiworkspace_user_id=demo-user;domain=.aiworkspace.pro;path=/'
  // Refresh to see the change
  window.location.reload()
}

const simulateLogout = () => {
  // Simulate clearing auth cookies
  document.cookie = 'aiworkspace_auth=;domain=.aiworkspace.pro;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT'
  document.cookie = 'aiworkspace_user_id=;domain=.aiworkspace.pro;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT'
  // Refresh to see the change
  window.location.reload()
}

const toggleNotifications = () => {
  alert('Notifications feature clicked! This would show notifications in a real app.')
}
</script>

<style scoped>
.demo-app {
  min-height: 100vh;
  background-color: #f8fafc;
}

.demo-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.demo-content h1 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

.demo-content p {
  color: #64748b;
  font-size: 1.125rem;
  margin-bottom: 2rem;
}

.demo-sections {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.demo-section {
  background: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.demo-section h2 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.demo-section ul {
  list-style: none;
  padding: 0;
}

.demo-section li {
  padding: 0.5rem 0;
  color: #64748b;
}

.demo-nav {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.demo-nav-link {
  padding: 0.5rem 1rem;
  background-color: #f1f5f9;
  color: #475569;
  text-decoration: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: all 0.2s;
}

.demo-nav-link:hover {
  background-color: #e2e8f0;
  color: #1e293b;
}

.demo-nav-link.router-link-active {
  background-color: #3b82f6;
  color: white;
}

.demo-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.demo-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.875rem;
}

.login-btn {
  background-color: #10b981;
  color: white;
}

.login-btn:hover {
  background-color: #059669;
}

.logout-btn {
  background-color: #ef4444;
  color: white;
}

.logout-btn:hover {
  background-color: #dc2626;
}

.demo-btn:not(.login-btn):not(.logout-btn) {
  background-color: #3b82f6;
  color: white;
}

.demo-btn:not(.login-btn):not(.logout-btn):hover {
  background-color: #2563eb;
}

.demo-section ol {
  padding-left: 1.5rem;
  color: #64748b;
}

.demo-section li {
  padding: 0.25rem 0;
}

.demo-section code {
  background-color: #f1f5f9;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
  color: #dc2626;
}

@media (max-width: 768px) {
  .demo-content {
    padding: 1rem;
  }
  
  .demo-sections {
    grid-template-columns: 1fr;
  }
  
  .demo-actions {
    flex-direction: column;
  }
  
  .demo-btn {
    width: 100%;
  }
}
</style>
