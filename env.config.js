// Environment Configuration Template
// Copy this to .env and fill in your values

module.exports = {
  // Supabase Configuration
  VITE_SUPABASE_URL: 'https://your-project.supabase.co',
  VITE_SUPABASE_ANON_KEY: 'your-anon-key',
  
  // Cross-subdomain Authentication
  VITE_APEX_DOMAIN: 'aiworkspace.pro',
  
  // Optional: Default post-login redirect
  VITE_DEFAULT_POST_LOGIN_URL: '/dashboard'
}
