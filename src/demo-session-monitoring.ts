/**
 * Demo script for testing session monitoring functionality
 * This can be used to test session loss detection in development
 */

import { sessionValidator, validateSession, restoreSession } from './utils/sessionValidator'

// Test session validation
export async function testSessionValidation() {
  console.log('🧪 Testing session validation...')
  
  try {
    const result = await validateSession()
    console.log('✅ Session validation result:', result)
    
    if (!result.isValid) {
      console.log('⚠️ Session is invalid, attempting restoration...')
      const restoreResult = await restoreSession()
      console.log('🔄 Session restoration result:', restoreResult)
    }
    
    return result
  } catch (error) {
    console.error('❌ Session validation failed:', error)
    return { isValid: false, needsLogin: true, error: String(error), canRetry: true }
  }
}

// Simulate session loss by clearing tokens
export function simulateSessionLoss() {
  console.log('🎭 Simulating session loss...')
  
  // Clear localStorage tokens
  localStorage.removeItem('sb-auth-token-shared')
  localStorage.removeItem('sb-access-token')
  localStorage.removeItem('sb-refresh-token')
  
  // Clear cookies
  document.cookie = 'sb-access-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.aiworkspace.pro;'
  document.cookie = 'sb-refresh-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.aiworkspace.pro;'
  
  console.log('✅ Session loss simulated - tokens cleared')
}

// Simulate network issues
export function simulateNetworkIssues() {
  console.log('🌐 Simulating network issues...')
  
  // Dispatch offline event
  window.dispatchEvent(new Event('offline'))
  
  setTimeout(() => {
    // Dispatch online event after 3 seconds
    window.dispatchEvent(new Event('online'))
    console.log('✅ Network restored')
  }, 3000)
  
  console.log('✅ Network issues simulated')
}

// Test different session loss scenarios
export async function testSessionLossScenarios() {
  console.log('🧪 Testing session loss scenarios...')
  
  // Test 1: Valid session
  console.log('\n--- Test 1: Valid Session ---')
  await testSessionValidation()
  
  // Test 2: Simulate session loss
  console.log('\n--- Test 2: Simulated Session Loss ---')
  simulateSessionLoss()
  await testSessionValidation()
  
  // Test 3: Network issues
  console.log('\n--- Test 3: Network Issues ---')
  simulateNetworkIssues()
  
  // Test 4: Force cache clear and revalidate
  console.log('\n--- Test 4: Cache Clear and Revalidate ---')
  sessionValidator.clearCache()
  await testSessionValidation(true) // Force refresh
}

// Monitor session changes
export function startSessionMonitoring() {
  console.log('👀 Starting session monitoring...')
  
  const { useSessionMonitor } = require('./composables/useSessionMonitor')
  
  // This would be used in a Vue component
  console.log('📝 To use in a Vue component:')
  console.log(`
    import { useSessionMonitor } from './composables/useSessionMonitor'
    
    const { 
      isSessionValid, 
      sessionLossEvent, 
      hasSessionLoss, 
      canRetrySession 
    } = useSessionMonitor()
    
    // Watch for session loss
    watch(hasSessionLoss, (hasLoss) => {
      if (hasLoss) {
        console.log('Session loss detected:', sessionLossEvent.value)
      }
    })
  `)
}

// Export test functions for browser console usage
if (typeof window !== 'undefined') {
  (window as any).testSessionValidation = testSessionValidation
  (window as any).simulateSessionLoss = simulateSessionLoss
  (window as any).simulateNetworkIssues = simulateNetworkIssues
  (window as any).testSessionLossScenarios = testSessionLossScenarios
  (window as any).startSessionMonitoring = startSessionMonitoring
  
  console.log('🧪 Session monitoring test functions available:')
  console.log('- testSessionValidation()')
  console.log('- simulateSessionLoss()')
  console.log('- simulateNetworkIssues()')
  console.log('- testSessionLossScenarios()')
  console.log('- startSessionMonitoring()')
}

// Auto-run basic test if in development
if (import.meta.env?.MODE === 'development') {
  console.log('🚀 Development mode detected, running basic session test...')
  setTimeout(() => {
    testSessionValidation()
  }, 2000)
}
