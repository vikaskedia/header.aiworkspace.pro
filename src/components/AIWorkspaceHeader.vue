<template>
  <header class="aiworkspace-header">
    <!-- Show loading state if Pinia is not ready -->
    <div v-if="!isPiniaReady && piniaRetryCount < maxPiniaRetries" class="header-content header-loading">
      <div class="header-left">
        <div class="logo-section">
          <a href="/" class="logo">
            <div class="text-logo">
              <span class="logo-text">AI Workspace</span>
            </div>
          </a>
        </div>
      </div>
      <div class="header-center">
        <span class="loading-text">Initializing...</span>
      </div>
    </div>
    
    <!-- Show fallback header when Pinia fails to initialize -->
    <div v-else-if="!isPiniaReady && piniaRetryCount >= maxPiniaRetries" class="header-content header-fallback">
      <div class="header-left">
        <div class="logo-section">
          <a href="/" class="logo">
            <div class="text-logo">
              <span class="logo-text">AI Workspace</span>
            </div>
          </a>
        </div>
      </div>
      <div class="header-center">
        <span class="fallback-text">Header Ready (Fallback Mode)</span>
        <button @click="manualRetry" class="retry-button">Retry Pinia</button>
      </div>
      <div class="header-right">
        <div class="user-profile">
          <div class="user-info">
            <span class="user-name">User</span>
          </div>
          <div class="user-avatar">
            <span class="avatar-placeholder">U</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Show full header when Pinia is ready -->
    <div v-else-if="isAuthenticated" class="header-content">
      <!-- Left side - Logo and Workspace -->
      <div class="header-left">
        <div class="logo-section">
          <a href="/" class="logo">
            <img 
              v-if="customLogo"
              :src="customLogo" 
              alt="AIWorkspace" 
              class="logo-image"
            />
            <div v-else class="text-logo">
              <span class="logo-text">AI Workspace</span>
            </div>
          </a>
        </div>
      </div>

      <!-- Center - Navigation -->
      <div v-if="showSecondaryNavigation" class="header-center">
        <nav class="main-navigation">
          <!-- Workspace selector -->
          <el-dropdown v-if="showWorkspaceSelector" @command="handleNavCommand" trigger="hover">
            <span class="nav-item">
              {{ currentWorkspace?.title || 'Select Workspace' }}
              <el-icon class="nav-arrow"><ArrowDown /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu class="workspace-tree-dropdown">
                <!-- All workspace option -->
                <el-dropdown-item command="all-workspace">
                  <a :href="'https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard'" class="nav-link">
                    <div class="workspace-dropdown-item">
                      <span class="workspace-icon">🌐</span>
                      <span>All workspace</span>
                    </div>
                  </a>
                </el-dropdown-item>
                <el-dropdown-item v-if="flattenedWorkspaces.length > 0" divided disabled>
                  <!-- Divider -->
                </el-dropdown-item>
                <el-dropdown-item 
                  v-for="w in flattenedWorkspaces" 
                  :key="w.id"
                  :command="`workspace-${w.id}`"
                >
                  <a :href="`/single-workspace/${w.id}/dashboard`" class="nav-link" @click.prevent="switchWorkspace(w)">
                    <div class="workspace-dropdown-item" :style="{ paddingLeft: ((w.level || 0) * 16) + 'px' }">
                      <span class="workspace-icon">{{ w.children && w.children.length ? '📁' : '📄' }}</span>
                      <span>{{ w.title }}</span>
                      <el-tag v-if="w.id === currentWorkspace?.id" size="small" type="success">Current</el-tag>
                    </div>
                  </a>
                </el-dropdown-item>
                <el-dropdown-item v-if="flattenedWorkspaces.length === 0" disabled>
                  No workspaces
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>

          <span v-if="showWorkspaceSelector" class="nav-divider">/</span>

          <!-- Static secondary navigation -->
          <el-dropdown v-if="showSecondaryNavigation" trigger="hover">
            <span class="nav-item">
              {{ currentSectionLabel }}
              <el-icon class="nav-arrow"><ArrowDown /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="item in secondaryNavItems" :key="item.label" :class="{ active: item.active }">
                  <a :href="secondaryHref(item)" class="nav-link" @click.prevent="handleSecondaryNavClick(item)">
                    {{ item.label }}
                  </a>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </nav>
      </div>

      <!-- Right side - User info and notifications -->
      <div class="header-right">
        <!-- User Profile -->
        <el-dropdown @command="handleUserCommand" trigger="click" placement="bottom-end">
          <div class="user-profile">
            <div class="user-info">
              <span class="user-name">{{ userInfo.name }}</span>
            </div>
            <div class="user-avatar">
              <img v-if="userInfo.avatar_url" :src="userInfo.avatar_url" :alt="userInfo.name" />
              <span v-else class="avatar-placeholder">{{ userInfo.initials }}</span>
            </div>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <a href="/profile" class="nav-link" @click.prevent="handleUserCommand('profile')">Profile Settings</a>
              </el-dropdown-item>
              <el-dropdown-item v-if="showWorkspaceSelector">
                <a href="#switch-workspace" class="nav-link" @click.prevent="handleUserCommand('workspaces')">Switch Workspace</a>
              </el-dropdown-item>
              <el-dropdown-item divided>
                <a href="#signout" class="nav-link" @click.prevent="handleUserCommand('logout')">Sign Out</a>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    
    <!-- Show unauthenticated message when Pinia is ready but user is not authenticated -->
    <div v-else class="unauth-message">
      <div class="unauth-inner">
        <strong>Authentication required.</strong> Please log in to access the workspace.
      </div>
    </div>

    <!-- Workspace Switcher Modal -->
    <el-dialog 
      v-if="isAuthenticated && showWorkspaceSelector"
      v-model="workspaceSwitcherVisible" 
      title="Switch Workspace" 
      width="500px"
      @close="workspaceSwitcherVisible = false"
    >
      <div class="workspace-list">
        <div 
          v-for="workspace in availableWorkspaces" 
          :key="workspace.id"
          class="workspace-item"
          :class="{ active: workspace.id === currentWorkspace?.id }"
          @click="switchWorkspace(workspace)"
        >
          <div class="workspace-icon">
            {{ workspace.children && workspace.children.length ? '📁' : '📄' }}
          </div>
          <div class="workspace-details">
            <h3>{{ workspace.title }}</h3>
            <p>{{ workspace.description }}</p>
            <span class="workspace-members">{{ workspace.hasAccess ? 'Active' : 'Inactive' }}</span>
          </div>
          <div v-if="workspace.id === currentWorkspace?.id" class="current-indicator">
            <el-icon><Check /></el-icon>
          </div>
        </div>
      </div>
      <template #footer>
        <el-button @click="workspaceSwitcherVisible = false">Cancel</el-button>
        <el-button type="primary" @click="createNewWorkspace">Create New Workspace</el-button>
      </template>
    </el-dialog>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ArrowDown, Check } from '@element-plus/icons-vue'
import { useEnhancedAuth } from '../composables/useEnhancedAuth'
import { useWorkspaceStore } from '../store/workspace'
import type { HeaderProps, Workspace, SecondaryNavigationItem } from '../types'

const props = withDefaults(defineProps<HeaderProps>(), {
  showUserMenu: true,
  showWorkspaceSelector: true,
  showSecondaryNavigation: true,
  customLogo: '',
  customLinks: () => []
})

// Emits
const emit = defineEmits<{
  workspaceChange: [workspace: Workspace]
  logout: []
  login: []
  profileClick: []
  settingsClick: []
}>()

// Composables
const { authState, logout: authLogout } = useEnhancedAuth()

// Lazy Pinia store initialization to prevent errors before Pinia is ready
const getWorkspaceStore = () => {
  try {
    return useWorkspaceStore()
  } catch (error) {
    console.warn('[AIWorkspaceHeader] Pinia not initialized yet, using fallback state')
    return null
  }
}

// Check if Pinia is available globally
const isPiniaAvailable = () => {
  try {
    // Check if we can access Pinia from the global scope
    if (typeof window !== 'undefined') {
      // Try to detect if Pinia is available in the global scope
      return !!(window as any).__PINIA__ || !!(window as any).Pinia
    }
    return false
  } catch {
    return false
  }
}

const workspaceStore = ref(getWorkspaceStore())
const isPiniaReady = computed(() => !!workspaceStore.value)
const piniaRetryCount = ref(0)
const maxPiniaRetries = 50 // Try for 5 seconds (50 * 100ms)

// Retry Pinia store initialization when it becomes available
const retryPiniaStore = () => {
  if (!workspaceStore.value && piniaRetryCount.value < maxPiniaRetries) {
    // Check if Pinia is now available
    if (isPiniaAvailable()) {
      const store = getWorkspaceStore()
      if (store) {
        workspaceStore.value = store
        console.log('[AIWorkspaceHeader] Pinia store initialized successfully')
        return
      }
    }
    
    // Increment retry count and try again
    piniaRetryCount.value++
    setTimeout(retryPiniaStore, 100)
  } else if (piniaRetryCount.value >= maxPiniaRetries) {
    console.warn('[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode')
  }
}

// Start retry process immediately
onMounted(() => {
  if (!workspaceStore.value) {
    retryPiniaStore()
  }
})

// Watch for Pinia availability and retry
watch(isPiniaReady, (ready) => {
  if (!ready && piniaRetryCount.value < maxPiniaRetries) {
    retryPiniaStore()
  }
})

// Local state
const workspaceSwitcherVisible = ref(false)
const availableWorkspaces = ref<Workspace[]>([])
const assignedWorkspaces = ref<Workspace[]>([])
const userInfo = ref<{ name: string; email: string; avatar_url: string | null; initials: string }>({ 
  name: '', 
  email: '', 
  avatar_url: null, 
  initials: '' 
})
const workspaceTree = ref<Workspace[]>([])
const flattenedWorkspaces = ref<Workspace[]>([])

// Computed
const isAuthenticated = computed(() => authState.value.isAuthenticated)
const currentWorkspace = computed<Workspace | null>(() => {
  if (!workspaceStore.value) return null
  return workspaceStore.value.currentWorkspace
})

// Static secondary nav items 
const secondaryNavItems = ref<SecondaryNavigationItem[]>([
  { label: 'Dashboard', key: 'dashboard', url: '/dashboard' },
  { label: 'Goals', key: 'goals', url: '/goals' },
  { label: 'Tasks', key: 'tasks', url: '/tasks' },
  { label: 'Events', key: 'events', url: '/events' },
  { label: 'Drive', key: 'files', url: '/files' },
  { label: 'Outlines', key: 'outlines', url: '/outlines' },
  { label: 'Communications', key: 'communications', url: '/communications' },
  { label: 'Canvas', key: 'canvas', url: '/canvas' },
  { label: 'AI Phone', key: 'ai_phone', url: '/ai_phone' },
  { label: 'AI Intake', key: 'ai_intake', url: '/ai_intake' },
  { label: 'AI Fax', key: 'ai_fax', url: '/ai_fax' },
  { label: 'AI Portfolios', key: 'ai-portfolios', url: '/ai-portfolios' },
  { label: 'AI Fund Analyst', key: 'ai_fund_analyst', url: '/ai_fund_analyst' },
  { label: 'Contacts', key: 'contacts', url: '/contacts' },
  { label: 'Settings', key: 'settings', url: '/settings' }
])

const currentSectionLabel = computed(() => {
  // For now, return a default label since we don't have route info in this component
  return 'Dashboard'
})

// Helper: build tree from flat list
const buildWorkspaceTree = (list: Workspace[]) => {
  const nodeMap = new Map()
  list.forEach(w => {
    nodeMap.set(w.id, { ...w, children: [] })
  })
  const roots: Workspace[] = []
  nodeMap.forEach((node: any) => {
    if (node.parent_workspace_id && nodeMap.has(node.parent_workspace_id)) {
      nodeMap.get(node.parent_workspace_id).children.push(node)
    } else {
      roots.push(node)
    }
  })
  // Optional sort
  const sortNodes = (nodes: Workspace[]) => {
    nodes.sort((a, b) => a.title.localeCompare(b.title))
    nodes.forEach(n => {
      if (n.children) sortNodes(n.children)
    })
  }
  sortNodes(roots)
  return roots
}

const flattenTree = (nodes: Workspace[], level = 0, acc: Workspace[] = []) => {
  nodes.forEach(n => {
    acc.push({ ...n, level })
    if (n.children && n.children.length) flattenTree(n.children, level + 1, acc)
  })
  return acc
}

// Load hierarchical workspaces via store
const loadWorkspaces = async () => {
  try {
    const list = await workspaceStore.value?.loadWorkspaces()
    workspaceTree.value = buildWorkspaceTree(list || [])
    flattenedWorkspaces.value = flattenTree(workspaceTree.value)
    assignedWorkspaces.value = flattenedWorkspaces.value // keep old ref for modal logic
    availableWorkspaces.value = flattenedWorkspaces.value

    // Set current workspace from props if present
    if (props.currentWorkspaceId) {
      const found = flattenedWorkspaces.value.find(w => w.id.toString() === props.currentWorkspaceId?.toString())
      if (found) {
        workspaceStore.value?.setCurrentWorkspace(found)
      }
    } else if (!currentWorkspace.value && flattenedWorkspaces.value.length) {
      workspaceStore.value?.setCurrentWorkspace(flattenedWorkspaces.value[0])
    }
  } catch (e) {
    console.error('loadWorkspaces (header) error', e)
  }
}

// Handle navigation commands
const handleNavCommand = (command: string) => {
  console.log('Navigation command:', command)

  // Handle all workspace navigation
  if (command === 'all-workspace') {
    window.location.href = 'https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard'
    return
  }
  else {
    const workspaceId = parseInt(command.replace('workspace-', ''))
    window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${workspaceId}/dashboard`
    return
  }
  
  // Handle workspace switching from assigned workspaces dropdown
  /*if (command.startsWith('workspace-')) {
    const workspaceId = command.replace('workspace-', '')
    const workspace = assignedWorkspaces.value.find(w => w.id === parseInt(workspaceId))
    if (workspace) {
      switchWorkspace(workspace)
    }
    return
  }*/
}

// Handle secondary navigation clicks
const handleSecondaryNavClick = (item: SecondaryNavigationItem) => {
  const workspace = currentWorkspace.value
  
  switch (item.key) {
    case 'dashboard':
      // Stay in current app for dashboard
      if (workspace) {
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${workspace.id}/dashboard`
      } else {
        window.location.href = 'https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard'
      }
      break

    case 'outlines':
      // Redirect to outline.aiworkspace.pro
      if (workspace) {
        const outlinesUrl = `https://outline.aiworkspace.pro/single-workspace/${workspace.id}/outlines`
        window.location.href = outlinesUrl
      } else {
        window.location.href = 'https://outline.aiworkspace.pro'
      }
      break
    
    case 'canvas':
      // Redirect to canvas.aiworkspace.pro
      if (workspace) {
        const canvasUrl = `https://canvas.aiworkspace.pro/single-workspace/${workspace.id}/canvas`
        window.location.href = canvasUrl
      } else {
        window.location.href = 'https://canvas.aiworkspace.pro'
      }
      break

    case 'files':
      // Redirect to files.aiworkspace.pro
      if (workspace) {
        const filesUrl = `https://drive.aiworkspace.pro/single-workspace/${workspace.id}/files`
        window.location.href = filesUrl
      } else {
        window.location.href = 'https://drive.aiworkspace.pro'
      }
      break

    case 'tasks':
      // Redirect to tasks.aiworkspace.pro
      if (workspace) {
        const tasksUrl = `https://tasks.aiworkspace.pro/single-workspace/${workspace.id}/tasks`
        window.location.href = tasksUrl
      } else {
        window.location.href = 'https://tasks.aiworkspace.pro'
      }
      break

    case 'ai-portfolios':
      // Redirect to ai-portfolios.aiworkspace.pro
      if (workspace) {
        const aiPortfoliosUrl = `https://spreadsheet.aiworkspace.pro/single-workspace/${workspace.id}/ai-portfolios`
        window.location.href = aiPortfoliosUrl
      } else {
        window.location.href = 'https://spreadsheet.aiworkspace.pro'
      }
      break

    default:
      // Redirect to main app.aiworkspace.pro for all other items
      if (workspace) {
        const mainAppUrl = `https://app.aiworkspace.pro/single-workspace/${workspace.id}/${item.key}`
        window.location.href = mainAppUrl
      } else {
        const mainAppUrl = `https://app.aiworkspace.pro/${item.key}`
        window.location.href = mainAppUrl
      }
      break
  }
}

// Helper to build href for secondary nav items (used in template anchors)
const secondaryHref = (item: SecondaryNavigationItem) => {
  const workspace = currentWorkspace.value
  switch (item.key) {
    case 'dashboard':
      return workspace ? `/single-workspace/${workspace.id}/dashboard` : '/'
    case 'ai-portfolios':
      return workspace ? `https://spreadsheet.aiworkspace.pro/single-workspace/${workspace.id}/ai-portfolios` : 'https://spreadsheet.aiworkspace.pro'
    case 'outlines':
      return workspace ? `https://outline.aiworkspace.pro/single-workspace/${workspace.id}/outlines` : 'https://outline.aiworkspace.pro'
    case 'canvas':
      return workspace ? `https://canvas.aiworkspace.pro/single-workspace/${workspace.id}/canvas` : 'https://canvas.aiworkspace.pro'
    case 'files':
      return workspace ? `https://drive.aiworkspace.pro/single-workspace/${workspace.id}/files` : 'https://drive.aiworkspace.pro'
    case 'tasks':
      return workspace ? `https://tasks.aiworkspace.pro/single-workspace/${workspace.id}/tasks` : 'https://tasks.aiworkspace.pro'
    default:
      return workspace ? `https://app.aiworkspace.pro/single-workspace/${workspace.id}/${item.key}` : `https://app.aiworkspace.pro/${item.key}`
  }
}

// Handle user menu commands
const handleUserCommand = (command: string) => {
  switch (command) {
    case 'profile':
      if (props.onProfileClick) {
        props.onProfileClick()
      } else {
        ElMessage.info('Profile settings coming soon')
      }
      break
    case 'workspaces':
      workspaceSwitcherVisible.value = true
      break
    case 'logout':
      handleLogout()
      break
  }
}

// Switch workspace
const switchWorkspace = (workspace: Workspace) => {
  workspaceStore.value?.setCurrentWorkspace(workspace)
  workspaceSwitcherVisible.value = false
  
  // Emit event for parent component
  emit('workspaceChange', workspace)
  
  ElMessage.success(`Switched to ${workspace.title}`)
}

// Create new workspace
const createNewWorkspace = () => {
  ElMessageBox.prompt('Enter workspace name:', 'Create New Workspace', {
    confirmButtonText: 'Create',
    cancelButtonText: 'Cancel',
    inputPattern: /\S/,
    inputErrorMessage: 'Workspace name cannot be empty'
  }).then(({ value }) => {
    const newWorkspace = {
      id: Date.now(),
      title: value,
      description: 'New workspace',
      archived: false,
      created_by: '',
      created_at: new Date().toISOString(),
      latest_activity: new Date().toISOString(),
      hasAccess: true,
      accessType: 'edit'
    }
    
    availableWorkspaces.value.push(newWorkspace)
    workspaceStore.value?.setWorkspaces(availableWorkspaces.value)
    switchWorkspace(newWorkspace)
    
    ElMessage.success(`Created workspace: ${value}`)
  }).catch(() => {
    // User cancelled
  })
}

// Handle logout
const handleLogout = () => {
  ElMessageBox.confirm(
    'Are you sure you want to sign out?',
    'Sign Out',
    {
      confirmButtonText: 'Sign Out',
      cancelButtonText: 'Cancel',
      type: 'warning'
    }
  ).then(async () => {
    // Clear all data from store and localStorage
    workspaceStore.value?.clearData()
    
    // Call auth logout
    await authLogout()
    
    // Emit logout event
    emit('logout')
    
    ElMessage.success('Signed out successfully')
  }).catch(() => {
    // User cancelled
  })
}

// Load user info and workspaces
const loadUserInfo = async () => {
  if (authState.value.user) {
    const user = authState.value.user
    userInfo.value = {
      name: user.name || user.email?.split('@')[0] || 'User',
      email: user.email || '',
      avatar_url: user.avatar_url || null,
      initials: (user.name || user.email?.split('@')[0] || 'U').split(' ').map(n => n[0]).join('').toUpperCase().substring(0,2)
    }
    // Don't call setUser here since userInfo is just for display
    // The actual user data is already in the auth state
    
    // Load workspaces if authenticated
    if (props.showWorkspaceSelector) {
      await loadWorkspaces()
    }
  }
}

// Watch for auth state changes
watch(() => authState.value.user, (newUser) => {
  if (newUser) {
    loadUserInfo()
  } else {
    userInfo.value = { name: '', email: '', avatar_url: null, initials: '' }
    workspaceStore.value?.clearData()
  }
})

// Watch for current workspace changes
watch(() => props.currentWorkspaceId, (newId) => {
  if (newId && flattenedWorkspaces.value.length) {
    const w = flattenedWorkspaces.value.find(x => x.id.toString() === newId.toString())
    if (w) workspaceStore.value?.setCurrentWorkspace(w)
  }
})

onMounted(async () => {
  if (isAuthenticated.value) {
    await loadUserInfo()
  }
})

// Manual retry function for fallback state
const manualRetry = () => {
  piniaRetryCount.value = 0 // Reset retry count
  retryPiniaStore()
  ElMessage.success('Manual Pinia retry initiated.')
}
</script>

<style scoped>
.aiworkspace-header {
  background: #ffffff;
  border-bottom: 1px solid #e1e5e9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  min-height: 60px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 60px;
}

.header-loading {
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
  color: #606266;
  font-size: 1.1rem;
  font-weight: 500;
}

.loading-text {
  color: #606266;
}

.header-fallback {
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
  color: #606266;
  font-size: 1.1rem;
  font-weight: 500;
}

.fallback-text {
  color: #606266;
  margin-right: 1rem;
}

.retry-button {
  background: #409eff;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.retry-button:hover {
  background: #337ecc;
}

.header-left {
  display: flex;
  align-items: center;
  min-width: 250px;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: -0.025em;
  transition: all 0.3s ease;
  padding: 8px 12px;
  border-radius: 8px;
}

.logo:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.logo-image {
  height: 32px;
  width: auto;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
}

.text-logo {
  display: flex;
  align-items: center;
}

.logo-text {
  font-weight: 800;
  font-size: 1.75rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
  display: inline-block;
  /* Professional blue-to-black gradient */
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 25%, #1e40af 50%, #1e3a8a 75%, #0f172a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* Ensure text is always visible with fallback */
  color: #3b82f6;
  /* Enhanced shadow for better depth and shade effect */
  text-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.08),
    0 4px 8px rgba(0, 0, 0, 0.06);
  /* Fallback for browsers that don't support gradients */
  @supports not (background-clip: text) {
    color: #3b82f6;
    text-shadow: 
      0 1px 2px rgba(0, 0, 0, 0.1),
      0 2px 4px rgba(0, 0, 0, 0.08),
      0 4px 8px rgba(0, 0, 0, 0.06);
  }
}

.logo:hover .logo-text {
  transform: scale(1.02);
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.header-center {
  flex: 1;
  display: flex;
  justify-content: center;
}

.main-navigation {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  color: #666;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease;
  font-weight: 500;
  font-size: 0.95rem;
}

.nav-item:hover {
  color: #2c3e50;
  background-color: #f8f9fa;
}

.nav-arrow {
  font-size: 12px;
  transition: transform 0.2s ease;
}

.nav-divider {
  color: #ccc;
  margin: 0 0.5rem;
  font-weight: 300;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 250px;
  justify-content: flex-end;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 6px;
  transition: background-color 0.2s ease;
}

.user-profile:hover {
  background-color: #f8f9fa;
}

.user-info {
  text-align: right;
}

.user-name {
  font-weight: 600;
  color: #2c3e50;
  font-size: 0.95rem;
  letter-spacing: -0.01em;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  background: #007bff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
}

.user-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  color: white;
}

/* Workspace Switcher Styles */
.workspace-list {
  max-height: 400px;
  overflow-y: auto;
}

.workspace-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border: 2px solid transparent;
}

.workspace-item:hover {
  background-color: #f8f9fa;
}

.workspace-item.active {
  background-color: #e3f2fd;
  border-color: #007bff;
}

.workspace-icon {
  font-size: 24px;
  width: 40px;
  text-align: center;
}

.workspace-details {
  flex: 1;
}

.workspace-details h3 {
  margin: 0 0 4px 0;
  font-size: 1rem;
  color: #2c3e50;
}

.workspace-details p {
  margin: 0 0 4px 0;
  font-size: 0.85rem;
  color: #666;
}

.workspace-members {
  font-size: 0.8rem;
  color: #999;
}

.current-indicator {
  color: #007bff;
  font-size: 18px;
}

.workspace-dropdown-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
}

.workspace-dropdown-item .workspace-icon {
  font-size: 16px;
}

/* Tree view specific styles */
.workspace-tree-dropdown {
  max-height: 400px;
  overflow-y: auto;
  min-width: 280px;
}

.workspace-dropdown-item { 
  display: flex; 
  align-items: center; 
  gap: 8px; 
}

.workspace-dropdown-item .workspace-icon { 
  width: 18px; 
  text-align: center; 
}

/* Responsive Design */
@media (max-width: 768px) {
  .header-content {
    padding: 0 1rem;
  }
  
  .header-left,
  .header-right {
    min-width: auto;
  }
  
  .user-info {
    display: none;
  }
  
  .main-navigation {
    gap: 0.5rem;
  }
  
  .nav-item {
    padding: 6px 8px;
    font-size: 0.9rem;
  }
}

.nav-link { 
  display: block; 
  width: 100%; 
  text-decoration: none; 
  color: inherit; 
  cursor: pointer;
  padding: 0 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.nav-link:hover { 
  color: #2c3e50; 
  background-color: #f8f9fa;
}

.el-dropdown-menu .active > .nav-link { 
  font-weight: 600; 
}

/* Remove blue focus outline/border on dropdown triggers */
.nav-item:focus,
.nav-item:focus-visible {
  outline: none !important;
  box-shadow: none !important;
}

:deep(.el-dropdown .el-tooltip__trigger:focus),
:deep(.el-dropdown .el-tooltip__trigger:focus-visible) {
  outline: none !important;
  box-shadow: none !important;
}

:deep(.el-dropdown .el-tooltip__trigger) {
  box-shadow: none !important;
}

.unauth-message { 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  height: 60px; 
  font-size: 0.9rem; 
  color: #c0392b; 
  background: #fff5f5; 
  border-bottom: 1px solid #f2d7d5; 
}

.unauth-inner { 
  max-width: 1400px; 
  width: 100%; 
  padding: 0 2rem; 
}
</style>
