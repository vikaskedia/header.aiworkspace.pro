#!/bin/bash

echo "🚀 Installing AIWorkspace Shared Header..."

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js and npm first."
    exit 1
fi

# Try different installation methods
echo "📦 Attempting installation..."

# Method 1: Try normal install first
if npm install @aiworkspace/shared-header; then
    echo "✅ Installation successful!"
    exit 0
fi

echo "⚠️  Normal installation failed, trying with legacy peer deps..."

# Method 2: Try with legacy peer deps
if npm install @aiworkspace/shared-header --legacy-peer-deps; then
    echo "✅ Installation successful with --legacy-peer-deps!"
    echo "💡 This is safe for most use cases."
    exit 0
fi

echo "⚠️  Legacy peer deps failed, trying with force..."

# Method 3: Try with force
if npm install @aiworkspace/shared-header --force; then
    echo "✅ Installation successful with --force!"
    echo "⚠️  Please test your application thoroughly."
    exit 0
fi

echo "❌ All installation methods failed."
echo ""
echo "🔧 Troubleshooting steps:"
echo "1. Clear npm cache: npm cache clean --force"
echo "2. Delete node_modules and package-lock.json"
echo "3. Run: npm install"
echo "4. Try installing again: npm install @aiworkspace/shared-header --legacy-peer-deps"
echo ""
echo "📖 For more help, see TROUBLESHOOTING.md"
exit 1
