<template>
  <el-dialog
    v-model="visible"
    title=""
    width="500px"
    :close-on-click-modal="false"
    :close-on-press-escape="true"
    :show-close="true"
    class="login-modal"
    @close="handleClose"
  >
    <div class="login-container">
      <!-- Header Section -->
      <div class="logo-section">
        <h2>{{ isSignup ? 'Create Account' : 'Welcome Back' }}</h2>
        <p>{{ isSignup ? 'Sign up to get started with your account' : 'Sign in to continue to your account' }}</p>
      </div>
      
      <!-- Email and Password Form -->
      <el-form 
        :model="form" 
        :rules="rules"
        ref="formRef"
        class="login-form"
        @submit.prevent="handleSubmit"
      >
        <el-form-item prop="email">
          <el-input 
            v-model="form.email"
            placeholder="Email"
            type="email"
            size="large"
            class="form-input"
          >
            <template #prefix>
              <!-- Option 1: Element Plus icons (current) -->
              <el-icon><Message /></el-icon>
              <!-- Option 2: FontAwesome icons (uncomment if you prefer) -->
              <!-- <i class="fas fa-envelope"></i> -->
            </template>
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input 
            v-model="form.password"
            placeholder="Password"
            type="password"
            size="large"
            show-password
            class="form-input"
          >
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item v-if="isSignup" prop="confirmPassword">
          <el-input 
            v-model="form.confirmPassword"
            placeholder="Confirm Password"
            type="password"
            size="large"
            show-password
            class="form-input"
          >
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button 
            type="primary" 
            class="submit-button"
            :loading="loading"
            @click="handleSubmit"
            size="large"
          >
            {{ isSignup ? 'Sign Up' : 'Sign In' }}
          </el-button>
        </el-form-item>
      </el-form>

      <!-- Divider -->
      <div class="divider">
        <span>Or continue with</span>
      </div>

      <!-- Social Login Buttons -->
      <div class="login-buttons">
        <el-button
          class="login-button google"
          @click="handleOAuthLogin('google')"
          size="large"
        >
          <!-- Option 1: Simple text icons (current) -->
          <span class="social-icon">G</span>
          <!-- Option 2: FontAwesome icons (uncomment if you prefer) -->
          <!-- <i class="fab fa-google"></i> -->
          Google
        </el-button>

        <el-button
          class="login-button github"
          @click="handleOAuthLogin('github')"
          size="large"
        >
          <span class="social-icon">⚡</span>
          GitHub
        </el-button>

        <el-button
          class="login-button twitter"
          @click="handleOAuthLogin('twitter')"
          size="large"
        >
          <span class="social-icon">X</span>
          X (Twitter)
        </el-button>
      </div>

      <!-- Terms -->
      <div class="terms">
        By continuing, you agree to AI Workspace's Terms of Service and Privacy Policy
      </div>

      <!-- Forgot Password -->
      <div v-if="!isSignup" class="forgot-password">
        <a href="#" @click.prevent="handleForgotPassword">Forgot Password?</a>
      </div>

      <!-- Toggle Signup/Login -->
      <div class="signup-link">
        {{ isSignup ? 'Already have an account?' : "Don't have an account?" }}
        <a href="#" @click.prevent="toggleMode">
          {{ isSignup ? 'Sign in' : 'Sign up' }}
        </a>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { ElMessage, ElForm } from 'element-plus'
import { Message, Lock } from '@element-plus/icons-vue'
import { useAuth } from '../composables/useAuth'

// Props
interface Props {
  modelValue: boolean
}

const props = defineProps<Props>()

// Emits
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'login-success': [user: any]
}>()

// Reactive state
const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const isSignup = ref(false)
const loading = ref(false)
const formRef = ref<InstanceType<typeof ElForm>>()

// Use auth composable
const { loginWithEmail, signupWithEmail, loginWithProvider, resetPassword } = useAuth()

const form = reactive({
  email: '',
  password: '',
  confirmPassword: ''
})

// Validation rules
const rules = computed(() => ({
  email: [
    { required: true, message: 'Please enter your email', trigger: 'blur' },
    { type: 'email' as const, message: 'Please enter a valid email', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please enter your password', trigger: 'blur' },
    { min: 6, message: 'Password must be at least 6 characters', trigger: 'blur' }
  ],
  ...(isSignup.value ? {
    confirmPassword: [
      { required: true, message: 'Please confirm your password', trigger: 'blur' },
      {
        validator: (_rule: any, value: string, callback: Function) => {
          if (value !== form.password) {
            callback(new Error('Passwords do not match'))
          } else {
            callback()
          }
        },
        trigger: 'blur'
      }
    ]
  } : {})
}))

// Methods
const toggleMode = () => {
  isSignup.value = !isSignup.value
  // Clear form when switching modes
  form.email = ''
  form.password = ''
  form.confirmPassword = ''
  formRef.value?.clearValidate()
}

const handleClose = () => {
  visible.value = false
  // Reset form
  form.email = ''
  form.password = ''
  form.confirmPassword = ''
  isSignup.value = false
  formRef.value?.clearValidate()
}

const handleSubmit = async () => {
  if (!formRef.value) return
  
  try {
    await formRef.value.validate()
    loading.value = true

    if (isSignup.value) {
      await handleSignup()
    } else {
      await handleLogin()
    }
  } catch (error) {
    console.error('Form validation failed:', error)
  } finally {
    loading.value = false
  }
}

const handleLogin = async () => {
  const result = await loginWithEmail(form.email, form.password)
  
  if (result.success) {
    ElMessage.success('Login successful')
    emit('login-success', { email: form.email })
    handleClose()
  } else {
    ElMessage.error('Login failed: ' + result.error)
  }
}

const handleSignup = async () => {
  const result = await signupWithEmail(form.email, form.password)
  
  if (result.success) {
    if (result.needsConfirmation) {
      ElMessage.success('Please check your email to confirm your account')
    } else {
      ElMessage.success('Account created successfully')
      emit('login-success', { email: form.email })
      handleClose()
    }
  } else {
    ElMessage.error('Signup failed: ' + result.error)
  }
}

const handleOAuthLogin = async (provider: 'google' | 'github' | 'twitter') => {
  const result = await loginWithProvider(provider)
  
  if (result.success) {
    ElMessage.success('Redirecting to login provider...')
  } else {
    ElMessage.error('Login failed: ' + result.error)
  }
}

const handleForgotPassword = async () => {
  if (!form.email) {
    ElMessage.warning('Please enter your email address first')
    return
  }

  const result = await resetPassword(form.email)
  
  if (result.success) {
    ElMessage.success('Password reset email sent! Please check your inbox.')
  } else {
    ElMessage.error('Failed to send reset email: ' + result.error)
  }
}
</script>

<style scoped>
.login-modal :deep(.el-dialog) {
  border-radius: 12px;
  overflow: hidden;
}

.login-modal :deep(.el-dialog__header) {
  display: none;
}

.login-modal :deep(.el-dialog__body) {
  padding: 0;
}

.login-container {
  padding: 2rem;
  background: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.logo-section {
  text-align: center;
  margin-bottom: 2rem;
}

.logo-section h2 {
  color: #303133;
  margin-bottom: 0.5rem;
  margin-top: 0;
  font-size: 1.8rem;
  font-weight: 600;
}

.logo-section p {
  color: #606266;
  font-size: 0.9rem;
  margin: 0;
}

.login-form {
  margin-bottom: 1.5rem;
}

.form-input {
  margin-bottom: 1rem;
}

.form-input :deep(.el-input__wrapper) {
  padding-left: 12px;
  border-radius: 8px;
  border: 1px solid #dcdfe6;
  transition: all 0.2s ease;
}

.form-input :deep(.el-input__wrapper:hover) {
  border-color: #c0c4cc;
}

.form-input :deep(.el-input__wrapper.is-focus) {
  border-color: #409eff;
  box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.1);
}

.form-input :deep(.el-input__prefix) {
  margin-right: 8px;
  color: #909399;
}

.submit-button {
  width: 100%;
  height: 48px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  background: linear-gradient(135deg, #409eff 0%, #337ecc 100%);
  border: none;
  transition: all 0.2s ease;
}

.submit-button:hover {
  background: linear-gradient(135deg, #337ecc 0%, #2c6cb0 100%);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(64, 158, 255, 0.3);
}

.divider {
  text-align: center;
  margin: 1.5rem 0;
  position: relative;
}

.divider::before,
.divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: calc(50% - 50px);
  height: 1px;
  background-color: #dcdfe6;
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

.divider span {
  background-color: white;
  padding: 0 1rem;
  color: #909399;
  font-size: 0.9rem;
}

.login-buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.login-button {
  font-size: 0.9rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  height: 44px;
  font-weight: 500;
}

.social-icon {
  font-size: 1.1rem;
  margin-right: 6px;
  font-weight: bold;
  display: inline-block;
  width: 16px;
  text-align: center;
}

.google {
  background-color: #fff;
  color: #606266;
  border: 1px solid #dcdfe6;
}

.google:hover {
  background-color: #f5f7fa;
  border-color: #c0c4cc;
  transform: translateY(-1px);
}

.github {
  background-color: #24292e;
  color: #fff;
  border: none;
}

.github:hover {
  background-color: #2f363d;
  transform: translateY(-1px);
}

.twitter {
  background-color: #1da1f2;
  color: #fff;
  border: none;
}

.twitter:hover {
  background-color: #1a91da;
  transform: translateY(-1px);
}

.terms {
  text-align: center;
  font-size: 0.8rem;
  color: #909399;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.forgot-password {
  text-align: center;
  margin-bottom: 1rem;
}

.forgot-password a {
  color: #409eff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
}

.forgot-password a:hover {
  text-decoration: underline;
}

.signup-link {
  text-align: center;
  font-size: 0.9rem;
  color: #606266;
}

.signup-link a {
  color: #409eff;
  text-decoration: none;
  font-weight: 500;
  margin-left: 4px;
}

.signup-link a:hover {
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 480px) {
  .login-container {
    padding: 1.5rem;
  }
  
  .login-buttons {
    grid-template-columns: 1fr;
  }
  
  .logo-section h2 {
    font-size: 1.6rem;
  }
}
</style>
