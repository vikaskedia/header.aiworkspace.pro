/**
 * Session monitoring configuration
 * This allows customization of detection timing and behavior
 */

export interface SessionConfig {
  // Monitoring intervals
  normalCheckInterval: number    // Normal monitoring interval (ms)
  fastCheckInterval: number      // Fast monitoring interval for immediate scenarios (ms)
  fastMonitoringDuration: number // How long to run fast monitoring (ms)
  
  // Retry configuration
  maxRetryAttempts: number       // Maximum retry attempts
  retryDelay: number            // Delay between retry attempts (ms)
  
  // Cache configuration
  validationCacheDuration: number // How long to cache validation results (ms)
  
  // Detection modes
  enableImmediateDetection: boolean // Enable immediate detection on logout
  enableFastMonitoring: boolean     // Enable fast monitoring mode
  enableNetworkAwareness: boolean   // Enable network-aware monitoring
}

// Default configuration with improved reliability
export const defaultSessionConfig: SessionConfig = {
  // Monitoring intervals - less aggressive to reduce false positives
  normalCheckInterval: 45000,      // 45 seconds - normal monitoring (increased from 30s)
  fastCheckInterval: 8000,         // 8 seconds - fast monitoring (increased from 5s)
  fastMonitoringDuration: 180000,  // 3 minutes - how long to run fast monitoring (increased from 2m)
  
  // Retry configuration
  maxRetryAttempts: 3,             // 3 retry attempts
  retryDelay: 2000,               // 2 seconds between retries
  
  // Cache configuration - longer cache to reduce API calls
  validationCacheDuration: 10000,  // 10 seconds cache duration (increased from 5s)
  
  // Detection modes
  enableImmediateDetection: true,  // Enable immediate detection on logout
  enableFastMonitoring: true,      // Enable fast monitoring mode
  enableNetworkAwareness: true     // Enable network-aware monitoring
}

// Fast detection configuration (for immediate logout detection)
export const fastDetectionConfig: SessionConfig = {
  ...defaultSessionConfig,
  normalCheckInterval: 10000,      // 10 seconds - faster normal monitoring
  fastCheckInterval: 2000,         // 2 seconds - very fast monitoring
  fastMonitoringDuration: 60000,   // 1 minute - shorter fast monitoring duration
  maxRetryAttempts: 2,             // Fewer retry attempts for faster response
  retryDelay: 1000,               // 1 second between retries
}

// Conservative configuration (for battery/performance sensitive environments)
export const conservativeConfig: SessionConfig = {
  ...defaultSessionConfig,
  normalCheckInterval: 60000,      // 1 minute - less frequent monitoring
  fastCheckInterval: 10000,        // 10 seconds - slower fast monitoring
  fastMonitoringDuration: 300000,  // 5 minutes - longer fast monitoring duration
  maxRetryAttempts: 5,             // More retry attempts
  retryDelay: 3000,               // 3 seconds between retries
  enableFastMonitoring: false      // Disable fast monitoring to save resources
}

// Development configuration (for testing)
export const developmentConfig: SessionConfig = {
  ...defaultSessionConfig,
  normalCheckInterval: 10000,      // 10 seconds - faster for testing
  fastCheckInterval: 2000,         // 2 seconds - very fast for testing
  fastMonitoringDuration: 30000,   // 30 seconds - shorter for testing
  validationCacheDuration: 1000,   // 1 second cache for testing
}

// Production configuration (optimized for production)
export const productionConfig: SessionConfig = {
  ...defaultSessionConfig,
  normalCheckInterval: 45000,      // 45 seconds - balanced monitoring
  fastCheckInterval: 3000,         // 3 seconds - quick detection
  fastMonitoringDuration: 90000,   // 1.5 minutes - reasonable fast monitoring
  validationCacheDuration: 10000,  // 10 seconds cache for better performance
}

// Get configuration based on environment
export function getSessionConfig(): SessionConfig {
  const env = import.meta.env?.MODE || 'development'
  
  switch (env) {
    case 'production':
      return productionConfig
    case 'development':
      return developmentConfig
    default:
      return defaultSessionConfig
  }
}

// Custom configuration builder
export function createSessionConfig(overrides: Partial<SessionConfig>): SessionConfig {
  return {
    ...defaultSessionConfig,
    ...overrides
  }
}

// Configuration presets for different use cases
export const sessionConfigPresets = {
  default: defaultSessionConfig,
  fast: fastDetectionConfig,
  conservative: conservativeConfig,
  development: developmentConfig,
  production: productionConfig
} as const

export type SessionConfigPreset = keyof typeof sessionConfigPresets

// Get configuration by preset name
export function getConfigByPreset(preset: SessionConfigPreset): SessionConfig {
  return sessionConfigPresets[preset]
}

// Timing information for documentation
export const timingInfo = {
  immediate: 'Immediate (0-2 seconds) - When logout is detected via auth events',
  fast: 'Fast (2-5 seconds) - When fast monitoring is active',
  normal: 'Normal (up to 30 seconds) - Regular monitoring interval',
  conservative: 'Conservative (up to 60 seconds) - Less frequent monitoring'
} as const

// Detection scenarios and their expected timing
export const detectionScenarios = {
  manualLogout: {
    timing: 'Immediate (0-2 seconds)',
    description: 'User clicks logout button',
    method: 'Auth state change event + fast monitoring'
  },
  sessionExpiry: {
    timing: 'Fast (2-5 seconds)',
    description: 'Session token expires naturally',
    method: 'Fast monitoring detects invalid session'
  },
  tokenInvalidation: {
    timing: 'Normal (up to 30 seconds)',
    description: 'Token is invalidated server-side',
    method: 'Regular monitoring detects validation failure'
  },
  networkIssues: {
    timing: 'Immediate (0-1 second)',
    description: 'Network connection lost',
    method: 'Network event listener'
  },
  crossTabLogout: {
    timing: 'Fast (2-5 seconds)',
    description: 'User logs out in another tab',
    method: 'Storage event listener + fast monitoring'
  }
} as const
