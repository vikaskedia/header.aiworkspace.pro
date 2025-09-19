#!/bin/bash

# AIWorkspace Header - Environment Setup Script
# This script helps you set up your environment variables

echo "🚀 AIWorkspace Header - Environment Setup"
echo "=========================================="
echo ""

# Check if .env file already exists
if [ -f ".env" ]; then
    echo "⚠️  .env file already exists!"
    read -p "Do you want to overwrite it? (y/N): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Setup cancelled. Your existing .env file is preserved."
        exit 0
    fi
fi

echo "📝 Creating .env file..."

# Create .env file with template
cat > .env << EOF
# Supabase Configuration
SUPABASE_URL=https://your-project-url.supabase.co
SUPABASE_ANON_KEY=your-anon-key

# Domain Configuration
VITE_APEX_DOMAIN=aiworkspace.pro

# Default Post-Login URL
VITE_DEFAULT_POST_LOGIN_URL=/

# Environment Mode
VITE_ENV=development
EOF

echo "✅ .env file created successfully!"
echo ""
echo "🔧 Next steps:"
echo "1. Edit the .env file with your actual values"
echo "2. Get your Supabase credentials from: https://supabase.com/dashboard"
echo "3. Replace the placeholder values in the .env file"
echo "4. Run 'npm run dev' to test your setup"
echo ""
echo "📚 For detailed instructions, see ENV_SETUP.md"
echo ""
echo "🎯 Pro tip: Never commit your .env file to version control!"
