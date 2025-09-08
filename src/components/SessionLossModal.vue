<template>
  <el-dialog
    v-model="visible"
    title="Session Expired"
    width="500px"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
    class="session-loss-modal"
    center
  >
    <div class="session-loss-content">
      <!-- Icon -->
      <div class="session-loss-icon">
        <el-icon size="48" color="#f56c6c">
          <Warning />
        </el-icon>
      </div>
      
      <!-- Message -->
      <div class="session-loss-message">
        <h3>Your session has expired</h3>
        <p>{{ sessionLossEvent?.message || 'Please log in again to continue using the application.' }}</p>
        
        <!-- Additional info based on session loss type -->
        <div v-if="sessionLossEvent" class="session-loss-details">
          <div class="detail-item">
            <span class="detail-label">Issue:</span>
            <span class="detail-value">{{ getIssueDescription(sessionLossEvent.type) }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Time:</span>
            <span class="detail-value">{{ formatTimestamp(sessionLossEvent.timestamp) }}</span>
          </div>
        </div>
      </div>
      
      <!-- Actions -->
      <div class="session-loss-actions">
        <el-button
          v-if="canRetrySession && !isRetrying"
          type="primary"
          @click="handleRetry"
          :loading="isRetrying"
        >
          <el-icon><Refresh /></el-icon>
          Try Again
        </el-button>
        
        <el-button
          type="primary"
          @click="handleLogin"
          :disabled="isRetrying"
        >
          <el-icon><User /></el-icon>
          Log In
        </el-button>
        
        <el-button
          v-if="!canRetrySession"
          type="info"
          @click="handleRefresh"
          :disabled="isRetrying"
        >
          <el-icon><Refresh /></el-icon>
          Refresh Page
        </el-button>
      </div>
      
      <!-- Retry status -->
      <div v-if="isRetrying" class="retry-status">
        <el-progress
          :percentage="retryProgress"
          :status="retryStatus"
          :stroke-width="6"
        />
        <p class="retry-message">{{ retryMessage }}</p>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { ElDialog, ElButton, ElIcon, ElProgress, ElMessage } from 'element-plus'
import { Warning, Refresh, User } from '@element-plus/icons-vue'
import type { SessionLossEvent } from '../composables/useSessionMonitor'

// Props
interface Props {
  modelValue: boolean
  sessionLossEvent: SessionLossEvent | null
  canRetrySession: boolean
}

const props = defineProps<Props>()

// Emits
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'retry': []
  'login': []
  'refresh': []
}>()

// State
const isRetrying = ref(false)
const retryProgress = ref(0)
const retryStatus = ref<'success' | 'exception' | 'warning' | undefined>(undefined)
const retryMessage = ref('')

// Computed
const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

// Methods
const getIssueDescription = (type: SessionLossEvent['type']): string => {
  switch (type) {
    case 'session_expired':
      return 'Authentication session has expired'
    case 'token_invalid':
      return 'Authentication token is invalid or corrupted'
    case 'network_error':
      return 'Network connection issue detected'
    case 'manual_check_failed':
      return 'Session validation failed'
    default:
      return 'Unknown authentication issue'
  }
}

const formatTimestamp = (timestamp: Date): string => {
  return timestamp.toLocaleString()
}

const handleRetry = async () => {
  if (isRetrying.value) return
  
  isRetrying.value = true
  retryProgress.value = 0
  retryStatus.value = undefined
  retryMessage.value = 'Attempting to restore session...'
  
  // Simulate progress
  const progressInterval = setInterval(() => {
    if (retryProgress.value < 90) {
      retryProgress.value += Math.random() * 20
    }
  }, 200)
  
  try {
    emit('retry')
    
    // Wait a bit for the retry to complete
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    retryProgress.value = 100
    retryStatus.value = 'success'
    retryMessage.value = 'Session restored successfully!'
    
    // Close modal after success
    setTimeout(() => {
      visible.value = false
    }, 1000)
    
  } catch (error) {
    retryProgress.value = 100
    retryStatus.value = 'exception'
    retryMessage.value = 'Failed to restore session. Please log in again.'
    
    ElMessage.error('Session restoration failed')
  } finally {
    clearInterval(progressInterval)
    setTimeout(() => {
      isRetrying.value = false
      retryProgress.value = 0
      retryStatus.value = undefined
      retryMessage.value = ''
    }, 3000)
  }
}

const handleLogin = () => {
  emit('login')
  visible.value = false
}

const handleRefresh = () => {
  emit('refresh')
  window.location.reload()
}

// Watch for session loss event changes
watch(() => props.sessionLossEvent, (newEvent) => {
  if (newEvent) {
    // Reset retry state when new session loss event occurs
    isRetrying.value = false
    retryProgress.value = 0
    retryStatus.value = undefined
    retryMessage.value = ''
  }
})
</script>

<style scoped>
.session-loss-modal :deep(.el-dialog) {
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.session-loss-modal :deep(.el-dialog__header) {
  background: linear-gradient(135deg, #f56c6c, #e74c3c);
  color: white;
  border-radius: 12px 12px 0 0;
  padding: 20px 24px;
  margin: 0;
}

.session-loss-modal :deep(.el-dialog__title) {
  color: white;
  font-weight: 600;
  font-size: 18px;
}

.session-loss-modal :deep(.el-dialog__body) {
  padding: 0;
}

.session-loss-content {
  padding: 32px 24px;
  text-align: center;
}

.session-loss-icon {
  margin-bottom: 20px;
}

.session-loss-message h3 {
  margin: 0 0 12px 0;
  color: #303133;
  font-size: 20px;
  font-weight: 600;
}

.session-loss-message p {
  margin: 0 0 20px 0;
  color: #606266;
  font-size: 14px;
  line-height: 1.5;
}

.session-loss-details {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin: 20px 0;
  text-align: left;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.detail-item:last-child {
  margin-bottom: 0;
}

.detail-label {
  font-weight: 500;
  color: #606266;
  font-size: 13px;
}

.detail-value {
  color: #303133;
  font-size: 13px;
  font-weight: 500;
}

.session-loss-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 24px;
  flex-wrap: wrap;
}

.session-loss-actions .el-button {
  min-width: 120px;
  border-radius: 8px;
  font-weight: 500;
}

.retry-status {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid #ebeef5;
}

.retry-message {
  margin: 12px 0 0 0;
  color: #606266;
  font-size: 13px;
}

/* Responsive design */
@media (max-width: 600px) {
  .session-loss-modal :deep(.el-dialog) {
    width: 95%;
    margin: 0 auto;
  }
  
  .session-loss-content {
    padding: 24px 16px;
  }
  
  .session-loss-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .session-loss-actions .el-button {
    width: 100%;
    max-width: 200px;
  }
}

/* Animation for modal appearance */
.session-loss-modal :deep(.el-dialog) {
  animation: slideInDown 0.3s ease-out;
}

@keyframes slideInDown {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
