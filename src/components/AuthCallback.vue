<template>
  <div class="auth-callback">
    <div class="callback-container">
      <div class="loading-spinner">
        <div class="spinner"></div>
      </div>
      <h2>Processing login...</h2>
      <p>Please wait while we complete your authentication.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { supabase } from '../lib/supabase'
import { setSessionCookie, syncCookiesToLocalStorage, ACCESS_COOKIE, REFRESH_COOKIE, getPostLoginBase } from '../utils/authRedirect'

onMounted(async () => {
  console.log('[AuthCallback] Component mounted, starting callback processing...')
  console.log('[AuthCallback] Current URL:', window.location.href)
  console.log('[AuthCallback] Current hash:', window.location.hash)
  try {
    // Wait a moment to ensure session is properly established
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const { data, error } = await supabase.auth.getSession()
    
    if (error) {
      console.error('Error processing callback:', error)
      redirectToLogin()
      return
    }
    
    if (data?.session) {
      const user = data.session.user
      
      console.log('OAuth login successful:', user.email)
      
      // Set cross-subdomain cookies for session sharing
      if (data.session.access_token) {
        setSessionCookie(ACCESS_COOKIE, data.session.access_token)
      }
      if (data.session.refresh_token) {
        setSessionCookie(REFRESH_COOKIE, data.session.refresh_token)
      }
      syncCookiesToLocalStorage()
      
      // Get the post-login redirect URL
      const redirectUrl = getPostLoginBase()
      
      console.log('[callback] Post-login redirect URL:', redirectUrl)
      console.log('[callback] Session storage redirect:', sessionStorage.getItem('post-login-redirect'))
      console.log('[callback] Local storage redirect:', localStorage.getItem('post-login-redirect'))
      
      // If no redirect URL found, use the root path
      const finalRedirectUrl = redirectUrl || '/'
      console.log('[callback] Final redirect URL:', finalRedirectUrl)
      
      // If it's a relative URL, construct the full URL using current origin
      if (finalRedirectUrl.startsWith('/')) {
        const currentOrigin = window.location.origin
        const fullRedirectUrl = `${currentOrigin}${finalRedirectUrl}`
        console.log('[callback] redirecting to:', fullRedirectUrl, { hostname: window.location.hostname, origin: currentOrigin })
        
        // Clear the stored redirect URL
        sessionStorage.removeItem('post-login-redirect')
        localStorage.removeItem('post-login-redirect')
        
        // Redirect after a short delay to ensure session is fully established
        setTimeout(() => {
          window.location.href = fullRedirectUrl
        }, 100)
      } else {
        console.log('[callback] redirecting to absolute URL:', finalRedirectUrl)
        
        // Clear the stored redirect URL
        sessionStorage.removeItem('post-login-redirect')
        localStorage.removeItem('post-login-redirect')
        
        // Redirect after a short delay
        setTimeout(() => {
          window.location.href = finalRedirectUrl
        }, 100)
      }
    } else {
      // No session found, redirect to login
      redirectToLogin()
    }
  } catch (err) {
    console.error('Error processing callback:', err)
    redirectToLogin()
  }
})

const redirectToLogin = () => {
  // Redirect to the same page but without the callback path
  const currentUrl = window.location.href
  const baseUrl = currentUrl.replace('/auth/callback', '')
  window.location.href = baseUrl
}
</script>

<style scoped>
.auth-callback {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.callback-container {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
  max-width: 400px;
  width: 100%;
}

.loading-spinner {
  margin-bottom: 1.5rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e2e8f0;
  border-top: 4px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

h2 {
  color: #1e293b;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
}

p {
  color: #64748b;
  margin: 0;
  font-size: 1rem;
}
</style>
