// Environment Configuration for AIWorkspace Header DemoApp
// Copy these values to your .env file

export const envConfig = {
  // Supabase Configuration
  VITE_SUPABASE_URL: 'https://your-project-url.supabase.co',
  VITE_SUPABASE_ANON_KEY: 'your-anon-key',
  
  // Domain Configuration
  VITE_APEX_DOMAIN: 'aiworkspace.pro',
  
  // Default Post-Login URL
  VITE_DEFAULT_POST_LOGIN_URL: '/',
  
  // Environment Mode
  VITE_ENV: 'development'
}

// Instructions:
// 1. Create a .env file in your project root
// 2. Copy the variables above to your .env file
// 3. Replace the placeholder values with your actual configuration
// 4. Make sure .env is in your .gitignore file

export default envConfig
