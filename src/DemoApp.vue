<template>
  <div class="demo-app">
    <!-- Demo Header with different configurations -->
    <AIWorkspaceHeader 
      :custom-links="demoNavigation"
      :show-user-menu="true"
      :show-workspace-selector="true"
      :show-secondary-navigation="true"
      @workspace-change="handleWorkspaceChange"
      @logout="handleLogout"
    />
    
    <main class="demo-content">
      <h1>AIWorkspace Shared Header - Comprehensive Demo</h1>
      <p>This is a demonstration of the comprehensive shared header component with authentication, workspace management, and cross-subdomain support.</p>
      
      <div class="demo-sections">
        <section class="demo-section">
          <h2>🚀 New Features</h2>
          <div class="feature-grid">
            <div class="feature-item">
              <h3>🔐 Built-in Authentication</h3>
              <p>Integrated Supabase authentication with automatic session management</p>
            </div>
            <div class="feature-item">
              <h3>🏢 Workspace Management</h3>
              <p>Hierarchical workspace selection and switching across all apps</p>
            </div>
            <div class="feature-item">
              <h3>🌐 Cross-Subdomain Support</h3>
              <p>Seamless authentication across all aiworkspace.pro subdomains</p>
            </div>
            <div class="feature-item">
              <h3>🎨 Element Plus UI</h3>
              <p>Beautiful, consistent UI components built with Element Plus</p>
            </div>
            <div class="feature-item">
              <h3>📱 Responsive Design</h3>
              <p>Perfect experience on all device sizes</p>
            </div>
            <div class="feature-item">
              <h3>🔄 State Management</h3>
              <p>Pinia store integration for workspace and user data</p>
            </div>
          </div>
        </section>

        <section class="demo-section">
          <h2>📦 Installation & Setup</h2>
          
          <h3>1. Install Package</h3>
          <pre><code>npm install @aiworkspace/shared-header</code></pre>
          
          <h3>2. Install Dependencies</h3>
          <pre><code>npm install vue@^3.0.0 element-plus@^2.0.0 pinia@^2.0.0 @supabase/supabase-js@^2.0.0</code></pre>
          
          <h3>3. Environment Variables</h3>
          <p>Create a <code>.env</code> file in your app:</p>
          <pre><code>VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_APEX_DOMAIN=aiworkspace.pro</code></pre>
          
          <h3>4. Basic Usage</h3>
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
        
        <section class="demo-section">
          <h2>🔧 Advanced Usage</h2>
          
          <h3>Customized Header</h3>
          <pre><code>&lt;AIWorkspaceHeader 
  :custom-logo="/your-logo.svg"
  :show-workspace-selector="true"
  :show-secondary-navigation="true"
  :current-workspace-id="currentWorkspaceId"
  @workspace-change="handleWorkspaceChange"
  @logout="handleLogout"
/&gt;</code></pre>
          
          <h3>Using Composables</h3>
          <pre><code>import { useEnhancedAuth, useWorkspaceStore } from '@aiworkspace/shared-header'

const { authState, signIn, logout } = useEnhancedAuth()
const { currentWorkspace, loadWorkspaces } = useWorkspaceStore()

// Sign in user
const handleSignIn = async () => {
  const result = await signIn('user@example.com', 'password')
  if (result.success) {
    console.log('Signed in successfully')
  }
}</code></pre>
          
          <h3>Cross-Subdomain Setup</h3>
          <pre><code>// In your app's main.js or main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')</code></pre>
        </section>

        <section class="demo-section">
          <h2>🗄️ Database Schema</h2>
          <p>The header requires these Supabase tables:</p>
          <pre><code>-- Workspaces table
CREATE TABLE workspaces (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  parent_workspace_id BIGINT REFERENCES workspaces(id),
  created_by UUID REFERENCES auth.users(id),
  archived BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Workspace access table
CREATE TABLE workspace_access (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  workspace_id BIGINT REFERENCES workspaces(id),
  access_type TEXT CHECK (access_type IN ('view', 'edit')),
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);</code></pre>
        </section>

        <section class="demo-section">
          <h2>🎯 Demo Controls</h2>
          <div class="demo-actions">
            <button class="demo-btn login-btn" @click="simulateLogin">
              🔐 Simulate Login
            </button>
            <button class="demo-btn logout-btn" @click="simulateLogout">
              🚪 Simulate Logout
            </button>
            <button class="demo-btn" @click="toggleNotifications">
              🔔 Toggle Notifications
            </button>
            <button class="demo-btn" @click="showWorkspaceModal">
              🏢 Show Workspace Modal
            </button>
          </div>
          
          <div class="demo-info">
            <h3>Current State:</h3>
            <ul>
              <li><strong>Authenticated:</strong> {{ isAuthenticated ? 'Yes' : 'No' }}</li>
              <li><strong>Current User:</strong> {{ currentUser?.name || 'None' }}</li>
              <li><strong>Current Workspace:</strong> {{ currentWorkspace?.title || 'None' }}</li>
              <li><strong>Available Workspaces:</strong> {{ availableWorkspaces.length }}</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import AIWorkspaceHeader from './components/AIWorkspaceHeader.vue'
import { useEnhancedAuth } from './composables/useEnhancedAuth'
import { useWorkspaceStore } from './store/workspace'

const demoNavigation = [
  { label: 'Home', url: '/', external: false },
  { label: 'Features', url: '/features', external: false },
  { label: 'Documentation', url: '/docs', external: false },
  { label: 'GitHub', url: 'https://github.com/aiworkspace', external: true }
]

// Use the enhanced auth composable
const { authState, signIn, logout } = useEnhancedAuth()
const workspaceStore = useWorkspaceStore()

// Computed properties
const isAuthenticated = computed(() => authState.value.isAuthenticated)
const currentUser = computed(() => authState.value.user)
const currentWorkspace = computed(() => workspaceStore.currentWorkspace)
const availableWorkspaces = computed(() => workspaceStore.workspaces)

// Demo functions
const simulateLogin = async () => {
  try {
    // Simulate a login with demo credentials
    const result = await signIn('demo@aiworkspace.pro', 'demo123')
    if (result.success) {
      console.log('Demo login successful')
    } else {
      console.log('Demo login failed:', result.error)
    }
  } catch (error) {
    console.error('Demo login error:', error)
  }
}

const simulateLogout = async () => {
  try {
    await logout()
    console.log('Demo logout successful')
  } catch (error) {
    console.error('Demo logout error:', error)
  }
}

const toggleNotifications = () => {
  alert('Notifications feature clicked! This would show notifications in a real app.')
}

const showWorkspaceModal = () => {
  alert('Workspace modal would open here in a real app!')
}

// Event handlers
const handleWorkspaceChange = (workspace: any) => {
  console.log('Workspace changed to:', workspace)
  alert(`Workspace changed to: ${workspace.title}`)
}

const handleLogout = () => {
  console.log('User logged out')
  alert('User logged out successfully!')
}

onMounted(async () => {
  // Load initial data
  console.log('Demo app mounted')
})
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

.demo-section h3 {
  color: #374151;
  margin: 1.5rem 0 0.5rem 0;
  font-size: 1.1rem;
}

.feature-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.feature-item {
  padding: 1rem;
  background: #f8fafc;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.feature-item h3 {
  margin: 0 0 0.5rem 0;
  color: #1e293b;
  font-size: 1rem;
}

.feature-item p {
  margin: 0;
  color: #64748b;
  font-size: 0.9rem;
}

.demo-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
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

.demo-info {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.demo-info h3 {
  margin: 0 0 0.5rem 0;
  color: #1e293b;
  font-size: 1rem;
}

.demo-info ul {
  margin: 0;
  padding-left: 1.5rem;
  color: #64748b;
}

.demo-info li {
  padding: 0.25rem 0;
}

.demo-section pre {
  background-color: #f1f5f9;
  padding: 1rem;
  border-radius: 0.5rem;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
  color: #1e293b;
  overflow-x: auto;
  margin: 1rem 0;
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
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>
