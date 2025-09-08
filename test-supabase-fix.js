// Test script to verify Supabase error fix
// Run this in your app's browser console to test the fix

console.log('Testing Supabase Error Fix...')

// Test 1: Check if environment variables are available
console.log('Test 1: Environment Variables')
console.log('VITE_SUPABASE_URL:', import.meta.env?.VITE_SUPABASE_URL ? '✓ Available' : '✗ Missing')
console.log('VITE_SUPABASE_ANON_KEY:', import.meta.env?.VITE_SUPABASE_ANON_KEY ? '✓ Available' : '✗ Missing')

// Test 2: Check global configuration
console.log('\nTest 2: Global Configuration')
console.log('window.__SUPABASE_URL__:', window.__SUPABASE_URL__ ? '✓ Available' : '✗ Missing')
console.log('window.__SUPABASE_ANON_KEY__:', window.__SUPABASE_ANON_KEY__ ? '✓ Available' : '✗ Missing')

// Test 3: Test Supabase client creation
console.log('\nTest 3: Supabase Client Creation')
try {
  const { createClient } = await import('@supabase/supabase-js')
  const url = import.meta.env?.VITE_SUPABASE_URL || window.__SUPABASE_URL__ || 'https://placeholder.supabase.co'
  const key = import.meta.env?.VITE_SUPABASE_ANON_KEY || window.__SUPABASE_ANON_KEY__ || 'placeholder-key'
  
  const client = createClient(url, key)
  console.log('✓ Supabase client created successfully')
  
  // Test 4: Test auth.getSession
  console.log('\nTest 4: Auth Session Test')
  try {
    const { data, error } = await client.auth.getSession()
    if (error) {
      console.log('⚠ Auth session error (expected if not logged in):', error.message)
    } else {
      console.log('✓ Auth session retrieved successfully')
      console.log('Session exists:', !!data.session)
    }
  } catch (sessionError) {
    console.log('✗ Auth session test failed:', sessionError.message)
  }
  
} catch (importError) {
  console.log('✗ Failed to import Supabase client:', importError.message)
}

// Test 5: Check for the specific error
console.log('\nTest 5: Error Check')
const errorLogs = []
const originalError = console.error
console.error = function(...args) {
  errorLogs.push(args.join(' '))
  originalError.apply(console, args)
}

// Wait a moment for any async errors
setTimeout(() => {
  console.error = originalError
  
  const hasTypeError = errorLogs.some(log => log.includes('TypeError: ne is not a function'))
  if (hasTypeError) {
    console.log('✗ Found the TypeError: ne is not a function error')
  } else {
    console.log('✓ No TypeError: ne is not a function error found')
  }
  
  console.log('\nTest Complete!')
  console.log('If you see any ✗ marks above, please check the SUPABASE_ERROR_FIX.md guide')
}, 1000)
