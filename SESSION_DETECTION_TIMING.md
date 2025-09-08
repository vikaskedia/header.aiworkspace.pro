# Session Detection Timing Guide

This document explains the timing for session loss detection in different scenarios.

## ⏱️ **Detection Timing Summary**

| Scenario | Detection Time | Method |
|----------|---------------|---------|
| **Manual Logout** | **0-2 seconds** | Immediate via auth events |
| **Session Expiry** | **2-5 seconds** | Fast monitoring |
| **Token Invalidation** | **Up to 30 seconds** | Regular monitoring |
| **Network Issues** | **0-1 second** | Network event listener |
| **Cross-Tab Logout** | **2-5 seconds** | Storage events + fast monitoring |

## 🚀 **Immediate Detection (0-2 seconds)**

### **Manual Logout**
- **Timing**: Immediate (0-2 seconds)
- **Trigger**: User clicks logout button
- **Method**: 
  1. Auth state change event fires immediately
  2. Custom event `session-logout-detected` is dispatched
  3. Fast monitoring starts automatically
  4. Session loss detected within 2 seconds

```typescript
// When user clicks logout
handleLogout() {
  await authLogout() // Triggers SIGNED_OUT event
  // Custom event dispatched immediately
  window.dispatchEvent(new CustomEvent('session-logout-detected'))
  // Fast monitoring starts (2-5 second intervals)
}
```

### **Network Issues**
- **Timing**: Immediate (0-1 second)
- **Trigger**: Network connection lost/restored
- **Method**: Browser `online`/`offline` events

```typescript
window.addEventListener('offline', () => {
  handleNetworkError() // Immediate detection
})
```

## ⚡ **Fast Detection (2-5 seconds)**

### **Session Expiry**
- **Timing**: 2-5 seconds
- **Trigger**: Session token expires naturally
- **Method**: Fast monitoring detects invalid session

### **Cross-Tab Logout**
- **Timing**: 2-5 seconds
- **Trigger**: User logs out in another tab
- **Method**: Storage event listener + fast monitoring

## 📊 **Normal Detection (Up to 30 seconds)**

### **Token Invalidation**
- **Timing**: Up to 30 seconds
- **Trigger**: Token invalidated server-side
- **Method**: Regular monitoring interval

## ⚙️ **Configuration Options**

### **Default Configuration**
```typescript
{
  normalCheckInterval: 30000,      // 30 seconds
  fastCheckInterval: 5000,         // 5 seconds
  fastMonitoringDuration: 120000,  // 2 minutes
  maxRetryAttempts: 3,
  retryDelay: 2000
}
```

### **Fast Detection Configuration**
```typescript
{
  normalCheckInterval: 10000,      // 10 seconds
  fastCheckInterval: 2000,         // 2 seconds
  fastMonitoringDuration: 60000,   // 1 minute
  maxRetryAttempts: 2,
  retryDelay: 1000
}
```

### **Conservative Configuration**
```typescript
{
  normalCheckInterval: 60000,      // 1 minute
  fastCheckInterval: 10000,        // 10 seconds
  fastMonitoringDuration: 300000,  // 5 minutes
  maxRetryAttempts: 5,
  retryDelay: 3000
}
```

## 🔧 **Customizing Detection Timing**

### **Using Configuration Presets**
```typescript
import { useSessionMonitor, getConfigByPreset } from '@your-package/header'

// Use fast detection preset
const { isSessionValid, sessionLossEvent } = useSessionMonitor(
  getConfigByPreset('fast')
)

// Use conservative preset
const { isSessionValid, sessionLossEvent } = useSessionMonitor(
  getConfigByPreset('conservative')
)
```

### **Custom Configuration**
```typescript
import { useSessionMonitor, createSessionConfig } from '@your-package/header'

// Custom timing configuration
const customConfig = createSessionConfig({
  normalCheckInterval: 15000,      // 15 seconds
  fastCheckInterval: 3000,         // 3 seconds
  fastMonitoringDuration: 90000,   // 1.5 minutes
})

const { isSessionValid, sessionLossEvent } = useSessionMonitor(customConfig)
```

## 📈 **Performance Considerations**

### **Battery Life**
- **Fast monitoring** uses more battery due to frequent checks
- **Conservative mode** reduces battery usage
- **Auto-stop** fast monitoring after configured duration

### **Network Usage**
- **Caching** reduces API calls (5-10 second cache)
- **Smart retry** prevents excessive requests
- **Network awareness** handles connectivity issues

### **CPU Usage**
- **Efficient intervals** balance detection speed vs performance
- **Event-driven** detection reduces polling
- **Cleanup** prevents memory leaks

## 🧪 **Testing Detection Timing**

### **Simulate Different Scenarios**
```javascript
// Test immediate detection
simulateSessionLoss() // Clears tokens immediately

// Test fast detection
setTimeout(() => {
  // Session will be detected within 2-5 seconds
}, 1000)

// Test normal detection
// Wait up to 30 seconds for detection
```

### **Browser Console Testing**
```javascript
// Available test functions
testSessionValidation()     // Test current session
simulateSessionLoss()       // Simulate session loss
simulateNetworkIssues()     // Test network scenarios
testSessionLossScenarios()  // Run comprehensive tests
```

## 📱 **Mobile Considerations**

### **Background App Behavior**
- **iOS**: Apps may be suspended, affecting detection timing
- **Android**: Background restrictions may impact monitoring
- **Solution**: Use `visibilitychange` events for app focus

### **Network Switching**
- **WiFi to Cellular**: May cause temporary network issues
- **Cellular to WiFi**: Network restoration detection
- **Solution**: Network-aware monitoring handles these scenarios

## 🔍 **Debugging Detection Issues**

### **Enable Debug Logging**
```javascript
// In browser console
localStorage.setItem('debug', 'session-monitor')
```

### **Check Monitoring Status**
```javascript
// Check if monitoring is active
console.log('Monitoring active:', isMonitoring.value)
console.log('Fast monitoring active:', isFastMonitoring.value)
console.log('Last valid session:', lastValidSession.value)
```

### **Manual Session Check**
```javascript
// Force immediate session validation
const isValid = await validateSession(true) // Force refresh
console.log('Session valid:', isValid)
```

## 📋 **Best Practices**

### **For Production Apps**
1. **Use production config** for optimal performance
2. **Monitor detection timing** in real user scenarios
3. **Test across different devices** and network conditions
4. **Implement fallback mechanisms** for edge cases

### **For Development**
1. **Use development config** for faster testing
2. **Enable debug logging** for troubleshooting
3. **Test all scenarios** including network issues
4. **Verify cross-tab behavior**

### **For Battery-Sensitive Apps**
1. **Use conservative config** to reduce battery usage
2. **Disable fast monitoring** if not needed
3. **Implement smart monitoring** based on app state
4. **Consider user preferences** for detection timing

## 🎯 **Expected User Experience**

### **Immediate Scenarios (0-2 seconds)**
- User clicks logout → Immediate session loss modal
- Network disconnects → Immediate network error message
- **User Impact**: Minimal, expected behavior

### **Fast Scenarios (2-5 seconds)**
- Session expires → Quick detection with retry option
- Cross-tab logout → Fast detection with login prompt
- **User Impact**: Slight delay, but still responsive

### **Normal Scenarios (Up to 30 seconds)**
- Server-side token invalidation → Detection within 30 seconds
- **User Impact**: May notice delay, but system handles gracefully

## 🔄 **Recovery Options**

### **Automatic Recovery**
- **Session restoration** attempts automatically
- **Network reconnection** triggers retry
- **Token refresh** handled transparently

### **Manual Recovery**
- **Retry button** in session loss modal
- **Login button** for re-authentication
- **Refresh button** as last resort

This timing system ensures users get appropriate feedback about session status while maintaining good performance and battery life across all your applications.
