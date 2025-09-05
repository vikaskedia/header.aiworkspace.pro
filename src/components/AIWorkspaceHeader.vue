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
              {{ isInAllWorkspaceMode ? 'All workspace' : (currentWorkspace?.title || 'Select Workspace') }}
              <el-icon class="nav-arrow"><ArrowDown /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu class="workspace-tree-dropdown">
                <!-- All workspace option -->
                <el-dropdown-item command="all-workspace" :class="{ active: isInAllWorkspaceMode }">
                  <a :href="'https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard'" class="nav-link">
                    <div class="workspace-dropdown-item">
                      <span class="workspace-icon">🌐</span>
                      <span>All workspace</span>
                      <el-tag v-if="isInAllWorkspaceMode" size="small" type="success">Current</el-tag>
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
                  <a :href="`https://single-ws-dashboard.aiworkspace.pro/single-workspace/${w.id}/dashboard`" class="nav-link">
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
    
    <!-- Show login button when Pinia is ready but user is not authenticated -->
    <div v-else class="header-content header-unauthenticated">
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
      
      <div class="header-center">
        <span class="welcome-text">Welcome to AI Workspace</span>
      </div>
      
      <div class="header-right">
        <el-button 
          type="primary" 
          size="large"
          class="login-button"
          @click="showLoginModal = true"
        >
          <el-icon><User /></el-icon>
          Login / Signup
        </el-button>
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

    <!-- Login Modal -->
    <LoginModal 
      v-model="showLoginModal"
      @login-success="handleLoginSuccess"
    />
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ArrowDown, Check, User } from '@element-plus/icons-vue'
import { useEnhancedAuth } from '../composables/useEnhancedAuth'
import { useWorkspaceStore } from '../store/workspace'
import LoginModal from './LoginModal.vue'
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

// Local state
const workspaceSwitcherVisible = ref(false)
const showLoginModal = ref(false)
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
const isInAllWorkspaceMode = ref(false)

// Watch for workspaces to be loaded and auto-select from URL
watch(flattenedWorkspaces, async (workspaces) => {
  if (workspaces.length > 0 && isPiniaReady.value && isAuthenticated.value) {
    await autoSelectWorkspaceFromUrl()
  }
}, { immediate: false })

// Watch for URL changes to auto-select workspace
watch(() => window.location.pathname + window.location.search + window.location.hash, async () => {
  if (isPiniaReady.value && isAuthenticated.value) {
    await autoSelectWorkspaceFromUrl()
  }
}, { immediate: false })

// Watch for URL changes to update current section label
const currentUrl = ref(window.location.pathname)
watch(() => window.location.pathname, (newPath) => {
  currentUrl.value = newPath
}, { immediate: true })

// Watch for Pinia availability and retry
watch(isPiniaReady, (ready) => {
  if (!ready && piniaRetryCount.value < maxPiniaRetries) {
    retryPiniaStore()
  }
})

// URL parameter detection and workspace selection
const getWorkspaceIdFromUrl = () => {
  try {
    // Check for workspace_id in URL path (e.g., /single-workspace/3/dashboard)
    const pathMatch = window.location.pathname.match(/\/single-workspace\/(\d+)/)
    if (pathMatch) {
      return pathMatch[1]
    }
    
    // Check for workspace_id in URL search params
    const urlParams = new URLSearchParams(window.location.search)
    const workspaceId = urlParams.get('workspace_id')
    if (workspaceId) {
      return workspaceId
    }
    
    // Check for workspace_id in URL hash
    const hashMatch = window.location.hash.match(/workspace_id=(\d+)/)
    if (hashMatch) {
      return hashMatch[1]
    }
    
    return null
  } catch (error) {
    console.warn('[AIWorkspaceHeader] Error parsing URL for workspace_id:', error)
    return null
  }
}

// Check if URL indicates all-workspace mode
const isAllWorkspaceMode = () => {
  try {
    return window.location.pathname.includes('/all-workspace/')
  } catch (error) {
    console.warn('[AIWorkspaceHeader] Error checking all-workspace mode:', error)
    return false
  }
}

// Auto-select workspace based on URL
const autoSelectWorkspaceFromUrl = async () => {
  if (!workspaceStore.value || !isPiniaReady.value) return
  
  // Check if we're in all-workspace mode
  const allWorkspaceMode = isAllWorkspaceMode()
  isInAllWorkspaceMode.value = allWorkspaceMode
  
  if (allWorkspaceMode) {
    // Clear current workspace when in all-workspace mode
    workspaceStore.value.currentWorkspace = null
    localStorage.removeItem('current_workspace')
    console.log('[AIWorkspaceHeader] Auto-selected all-workspace mode from URL')
    return
  }
  
  const urlWorkspaceId = getWorkspaceIdFromUrl()
  if (!urlWorkspaceId) return
  
  try {
    // Load workspaces if not already loaded
    if (flattenedWorkspaces.value.length === 0) {
      await loadWorkspaces()
    }
    
    // Find and select the workspace from URL
    const workspace = flattenedWorkspaces.value.find(w => w.id.toString() === urlWorkspaceId)
    if (workspace) {
      workspaceStore.value.setCurrentWorkspace(workspace)
      console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${workspace.title} (ID: ${workspace.id})`)
      
      // Emit workspace change event
      emit('workspaceChange', workspace)
    } else {
      console.warn(`[AIWorkspaceHeader] Workspace with ID ${urlWorkspaceId} not found in available workspaces`)
    }
  } catch (error) {
    console.error('[AIWorkspaceHeader] Error auto-selecting workspace from URL:', error)
  }
}

// Computed
const isAuthenticated = computed(() => authState.value.isAuthenticated)
const currentWorkspace = computed<Workspace | null>(() => {
  if (!workspaceStore.value) return null
  return workspaceStore.value.currentWorkspace
})

// Static secondary nav items for single workspace mode
const singleWorkspaceNavItems = ref<SecondaryNavigationItem[]>([
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

// Static secondary nav items for all workspace mode
const allWorkspaceNavItems = ref<SecondaryNavigationItem[]>([
  { label: 'Dashboard', key: 'dashboard', url: '/dashboard' },
  { label: 'All Tasks', key: 'tasks', url: '/tasks' },
  { label: 'All Goals', key: 'goals', url: '/goals' },
  { label: 'All Events', key: 'events', url: '/events' },
  { label: 'All Drive', key: 'files', url: '/files' },
  { label: 'All Contacts', key: 'contacts', url: '/contacts' },
  { label: 'All Settings', key: 'settings', url: '/settings' }
])

// Computed property to get the appropriate secondary nav items based on workspace mode
const secondaryNavItems = computed(() => {
  return isInAllWorkspaceMode.value ? allWorkspaceNavItems.value : singleWorkspaceNavItems.value
})

const currentSectionLabel = computed(() => {
  try {
    // Get current URL path from reactive ref
    const currentPath = currentUrl.value
    
    // Extract the section from URL patterns like:
    // /single-workspace/3/outlines -> outlines
    // /single-workspace/3/dashboard -> dashboard
    // /all-workspace/tasks -> tasks
    // /all-workspace/dashboard -> dashboard
    // /outlines -> outlines
    // /dashboard -> dashboard
    
    let section = ''
    
    // Check for all-workspace pattern: /all-workspace/{section}
    const allWorkspaceMatch = currentPath.match(/\/all-workspace\/([^\/]+)/)
    if (allWorkspaceMatch) {
      section = allWorkspaceMatch[1]
    } else {
      // Check for single-workspace pattern: /single-workspace/{id}/{section}
      const singleWorkspaceMatch = currentPath.match(/\/single-workspace\/\d+\/([^\/]+)/)
      if (singleWorkspaceMatch) {
        section = singleWorkspaceMatch[1]
      } else {
        // Check for direct pattern: /{section}
        const directMatch = currentPath.match(/\/([^\/]+)$/)
        if (directMatch) {
          section = directMatch[1]
        }
      }
    }
    
    // Find matching secondary nav item
    if (section) {
      const matchingItem = secondaryNavItems.value.find(item => 
        item.key === section || 
        item.url.includes(`/${section}`) ||
        item.url === `/${section}`
      )
      
      if (matchingItem) {
        return matchingItem.label
      }
    }
    
    // Default fallback
    return 'Dashboard'
  } catch (error) {
    console.warn('[AIWorkspaceHeader] Error determining current section:', error)
    return 'Dashboard'
  }
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
  const isAllWorkspace = isInAllWorkspaceMode.value
  
  switch (item.key) {
    case 'dashboard':
      if (isAllWorkspace) {
        window.location.href = 'https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard'
      } else if (workspace) {
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${workspace.id}/dashboard`
      } else {
        window.location.href = 'https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard'
      }
      break

    case 'outlines':
      if (isAllWorkspace) {
        window.location.href = 'https://outline.aiworkspace.pro/all-workspace/outlines'
      } else if (workspace) {
        const outlinesUrl = `https://outline.aiworkspace.pro/single-workspace/${workspace.id}/outlines`
        window.location.href = outlinesUrl
      } else {
        window.location.href = 'https://outline.aiworkspace.pro'
      }
      break
    
    case 'canvas':
      if (isAllWorkspace) {
        window.location.href = 'https://canvas.aiworkspace.pro/all-workspace/canvas'
      } else if (workspace) {
        const canvasUrl = `https://canvas.aiworkspace.pro/single-workspace/${workspace.id}/canvas`
        window.location.href = canvasUrl
      } else {
        window.location.href = 'https://canvas.aiworkspace.pro'
      }
      break

    case 'files':
      if (isAllWorkspace) {
        window.location.href = 'https://drive.aiworkspace.pro/all-workspace/files'
      } else if (workspace) {
        const filesUrl = `https://drive.aiworkspace.pro/single-workspace/${workspace.id}/files`
        window.location.href = filesUrl
      } else {
        window.location.href = 'https://drive.aiworkspace.pro'
      }
      break

    case 'tasks':
      if (isAllWorkspace) {
        window.location.href = 'https://tasks.aiworkspace.pro/all-workspace/tasks'
      } else if (workspace) {
        const tasksUrl = `https://tasks.aiworkspace.pro/single-workspace/${workspace.id}/tasks`
        window.location.href = tasksUrl
      } else {
        window.location.href = 'https://tasks.aiworkspace.pro'
      }
      break

    case 'goals':
      if (isAllWorkspace) {
        window.location.href = 'https://app.aiworkspace.pro/all-workspace/goals'
      } else if (workspace) {
        const goalsUrl = `https://app.aiworkspace.pro/single-workspace/${workspace.id}/goals`
        window.location.href = goalsUrl
      } else {
        window.location.href = 'https://app.aiworkspace.pro/all-workspace/goals'
      }
      break

    case 'events':
      if (isAllWorkspace) {
        window.location.href = 'https://app.aiworkspace.pro/all-workspace/events'
      } else if (workspace) {
        const eventsUrl = `https://app.aiworkspace.pro/single-workspace/${workspace.id}/events`
        window.location.href = eventsUrl
      } else {
        window.location.href = 'https://app.aiworkspace.pro/all-workspace/events'
      }
      break

    case 'contacts':
      if (isAllWorkspace) {
        window.location.href = 'https://app.aiworkspace.pro/all-workspace/contacts'
      } else if (workspace) {
        const contactsUrl = `https://app.aiworkspace.pro/single-workspace/${workspace.id}/contacts`
        window.location.href = contactsUrl
      } else {
        window.location.href = 'https://app.aiworkspace.pro/all-workspace/contacts'
      }
      break

    case 'ai-portfolios':
      if (isAllWorkspace) {
        window.location.href = 'https://spreadsheet.aiworkspace.pro/all-workspace/ai-portfolios'
      } else if (workspace) {
        const aiPortfoliosUrl = `https://spreadsheet.aiworkspace.pro/single-workspace/${workspace.id}/ai-portfolios`
        window.location.href = aiPortfoliosUrl
      } else {
        window.location.href = 'https://spreadsheet.aiworkspace.pro'
      }
      break

    case 'settings':
      if (isAllWorkspace) {
        window.location.href = 'https://settings.aiworkspace.pro/all-workspace/settings'
      } else if (workspace) {
        const settingsUrl = `https://settings.aiworkspace.pro/single-workspace/${workspace.id}/settings`
        window.location.href = settingsUrl
      } else {
        window.location.href = 'https://settings.aiworkspace.pro'
      }
      break

    default:
      // Redirect to main app.aiworkspace.pro for all other items
      if (isAllWorkspace) {
        const mainAppUrl = `https://app.aiworkspace.pro/all-workspace/${item.key}`
        window.location.href = mainAppUrl
      } else if (workspace) {
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
  const isAllWorkspace = isInAllWorkspaceMode.value
  
  switch (item.key) {
    case 'dashboard':
      if (isAllWorkspace) {
        return 'https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard'
      } else if (workspace) {
        return `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${workspace.id}/dashboard`
      } else {
        return 'https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard'
      }
    case 'ai-portfolios':
      if (isAllWorkspace) {
        return 'https://spreadsheet.aiworkspace.pro/all-workspace/ai-portfolios'
      } else if (workspace) {
        return `https://spreadsheet.aiworkspace.pro/single-workspace/${workspace.id}/ai-portfolios`
      } else {
        return 'https://spreadsheet.aiworkspace.pro'
      }
    case 'outlines':
      if (isAllWorkspace) {
        return 'https://outline.aiworkspace.pro/all-workspace/outlines'
      } else if (workspace) {
        return `https://outline.aiworkspace.pro/single-workspace/${workspace.id}/outlines`
      } else {
        return 'https://outline.aiworkspace.pro'
      }
    case 'canvas':
      if (isAllWorkspace) {
        return 'https://canvas.aiworkspace.pro/all-workspace/canvas'
      } else if (workspace) {
        return `https://canvas.aiworkspace.pro/single-workspace/${workspace.id}/canvas`
      } else {
        return 'https://canvas.aiworkspace.pro'
      }
    case 'files':
      if (isAllWorkspace) {
        return 'https://drive.aiworkspace.pro/all-workspace/files'
      } else if (workspace) {
        return `https://drive.aiworkspace.pro/single-workspace/${workspace.id}/files`
      } else {
        return 'https://drive.aiworkspace.pro'
      }
    case 'tasks':
      if (isAllWorkspace) {
        return 'https://tasks.aiworkspace.pro/all-workspace/tasks'
      } else if (workspace) {
        return `https://tasks.aiworkspace.pro/single-workspace/${workspace.id}/tasks`
      } else {
        return 'https://tasks.aiworkspace.pro'
      }
    case 'goals':
      if (isAllWorkspace) {
        return 'https://app.aiworkspace.pro/all-workspace/goals'
      } else if (workspace) {
        return `https://app.aiworkspace.pro/single-workspace/${workspace.id}/goals`
      } else {
        return 'https://app.aiworkspace.pro/all-workspace/goals'
      }
    case 'events':
      if (isAllWorkspace) {
        return 'https://app.aiworkspace.pro/all-workspace/events'
      } else if (workspace) {
        return `https://app.aiworkspace.pro/single-workspace/${workspace.id}/events`
      } else {
        return 'https://app.aiworkspace.pro/all-workspace/events'
      }
    case 'contacts':
      if (isAllWorkspace) {
        return 'https://app.aiworkspace.pro/all-workspace/contacts'
      } else if (workspace) {
        return `https://app.aiworkspace.pro/single-workspace/${workspace.id}/contacts`
      } else {
        return 'https://app.aiworkspace.pro/all-workspace/contacts'
      }
    case 'settings':
      if (isAllWorkspace) {
        return 'https://settings.aiworkspace.pro/all-workspace/settings'
      } else if (workspace) {
        return `https://settings.aiworkspace.pro/single-workspace/${workspace.id}/settings`
      } else {
        return 'https://settings.aiworkspace.pro'
      }
    default:
      if (isAllWorkspace) {
        return `https://app.aiworkspace.pro/all-workspace/${item.key}`
      } else if (workspace) {
        return `https://app.aiworkspace.pro/single-workspace/${workspace.id}/${item.key}`
      } else {
        return `https://app.aiworkspace.pro/${item.key}`
      }
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
    await autoSelectWorkspaceFromUrl() // Auto-select workspace from URL on mount
  }
})

// Handle successful login
const handleLoginSuccess = async (user: any) => {
  console.log('Login successful:', user)
  showLoginModal.value = false
  
  // Reload user info and workspaces
  await loadUserInfo()
  
  // Emit login event
  emit('login')
  
  ElMessage.success('Welcome back!')
}

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

.header-unauthenticated {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-bottom: 1px solid #e2e8f0;
}

.welcome-text {
  color: #475569;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
}

.login-button {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);
}

.login-button:hover {
  background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.login-button .el-icon {
  margin-right: 8px;
  font-size: 0.9rem;
}
</style>
