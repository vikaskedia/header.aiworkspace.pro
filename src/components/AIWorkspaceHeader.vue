<template>
  <header class="aiworkspace-header">
    <div class="header-container">
      <!-- Logo Section -->
      <div class="logo-section">
        <a href="/" class="logo">
          <img 
            :src="customLogo || '/logo.svg'" 
            alt="AIWorkspace" 
            class="logo-image"
          />
          <span class="logo-text">AIWorkspace</span>
        </a>
      </div>

      <!-- Navigation Links -->
      <nav class="nav-links" v-if="customLinks && customLinks.length">
        <a 
          v-for="link in customLinks" 
          :key="link.label"
          :href="link.url"
          :target="link.external ? '_blank' : undefined"
          class="nav-link"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Right Section -->
      <div class="right-section">
        <!-- Notifications -->
        <button 
          v-if="showNotifications" 
          class="notification-btn"
          @click="toggleNotifications"
        >
          <span class="notification-icon">🔔</span>
        </button>

        <!-- User Menu -->
        <div v-if="showUserMenu" class="user-section">
          <div v-if="authState.isLoading" class="loading-spinner">
            Loading...
          </div>
          
          <div v-else-if="authState.isAuthenticated && authState.user" class="user-menu">
            <button class="user-button" @click="toggleUserDropdown">
              <img 
                v-if="authState.user.avatar_url" 
                :src="authState.user.avatar_url" 
                :alt="authState.user.name || 'User'"
                class="user-avatar"
              />
              <span v-else class="user-avatar-placeholder">
                {{ (authState.user.name || authState.user.email).charAt(0).toUpperCase() }}
              </span>
              <span class="user-name">{{ authState.user.name || authState.user.email }}</span>
              <span class="dropdown-arrow">▼</span>
            </button>
            
            <div v-if="showUserDropdown" class="user-dropdown">
              <a href="/profile" class="dropdown-item">Profile</a>
              <a href="/settings" class="dropdown-item">Settings</a>
              <button @click="handleLogout" class="dropdown-item logout-btn">Logout</button>
            </div>
          </div>
          
          <div v-else class="auth-buttons">
            <a href="/login" class="auth-btn login-btn">Login</a>
            <a href="/signup" class="auth-btn signup-btn">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useAuth } from '../composables/useAuth'
import type { HeaderProps } from '../types'

const props = withDefaults(defineProps<HeaderProps>(), {
  showUserMenu: true,
  showNotifications: true,
  customLogo: '',
  customLinks: () => []
})

const { authState, logout } = useAuth()
const showUserDropdown = ref(false)

const toggleUserDropdown = () => {
  showUserDropdown.value = !showUserDropdown.value
}

const toggleNotifications = () => {
  // Implement notifications logic
  console.log('Toggle notifications')
}

const handleLogout = () => {
  logout()
  showUserDropdown.value = false
}

// Close dropdown when clicking outside
const closeDropdown = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('.user-menu')) {
    showUserDropdown.value = false
  }
}

// Add click outside listener
onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>

<style scoped>
.aiworkspace-header {
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo-section {
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #1f2937;
  font-weight: 600;
  font-size: 1.25rem;
}

.logo-image {
  height: 32px;
  width: auto;
  margin-right: 0.5rem;
}

.logo-text {
  color: #3b82f6;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #6b7280;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #3b82f6;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.notification-btn {
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0.375rem;
  transition: background-color 0.2s;
}

.notification-btn:hover {
  background-color: #f3f4f6;
}

.notification-icon {
  font-size: 1.25rem;
}

.user-section {
  position: relative;
}

.loading-spinner {
  color: #6b7280;
  font-size: 0.875rem;
}

.user-menu {
  position: relative;
}

.user-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0.375rem;
  transition: background-color 0.2s;
}

.user-button:hover {
  background-color: #f3f4f6;
}

.user-avatar,
.user-avatar-placeholder {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3b82f6;
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
}

.user-name {
  color: #1f2937;
  font-weight: 500;
}

.dropdown-arrow {
  color: #6b7280;
  font-size: 0.75rem;
}

.user-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  min-width: 160px;
  z-index: 100;
}

.dropdown-item {
  display: block;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: #374151;
  transition: background-color 0.2s;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
}

.dropdown-item:hover {
  background-color: #f9fafb;
}

.logout-btn {
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  color: #dc2626;
}

.logout-btn:hover {
  background-color: #fef2f2;
}

.auth-buttons {
  display: flex;
  gap: 0.75rem;
}

.auth-btn {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
  display: inline-block;
}

.login-btn {
  color: #3b82f6;
  border: 1px solid #3b82f6;
}

.login-btn:hover {
  background-color: #3b82f6;
  color: white;
}

.signup-btn {
  background-color: #3b82f6;
  color: white;
  border: 1px solid #3b82f6;
}

.signup-btn:hover {
  background-color: #2563eb;
  border-color: #2563eb;
}

@media (max-width: 768px) {
  .header-container {
    padding: 0 0.75rem;
  }
  
  .nav-links {
    display: none;
  }
  
  .user-name {
    display: none;
  }
}
</style>
