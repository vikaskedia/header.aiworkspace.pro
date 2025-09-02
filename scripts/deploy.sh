#!/bin/bash

# AIWorkspace Shared Header Deployment Script

set -e

echo "🚀 Starting deployment of @aiworkspace/shared-header..."

# Check if we're on main branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "❌ Error: Must be on main branch to deploy"
    echo "Current branch: $CURRENT_BRANCH"
    exit 1
fi

# Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "❌ Error: Uncommitted changes detected"
    git status --porcelain
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run tests (if you add them later)
# echo "🧪 Running tests..."
# npm test

# Build the package
echo "🔨 Building package..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed - dist directory not found"
    exit 1
fi

# Get current version
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo "📋 Current version: $CURRENT_VERSION"

# Ask for new version
echo "Enter new version (or press Enter to keep $CURRENT_VERSION):"
read NEW_VERSION

if [ -z "$NEW_VERSION" ]; then
    NEW_VERSION=$CURRENT_VERSION
fi

# Update version in package.json
echo "🔄 Updating version to $NEW_VERSION..."
npm version $NEW_VERSION --no-git-tag-version

# Commit version change
git add package.json
git commit -m "chore: bump version to $NEW_VERSION"

# Create git tag
git tag -a "v$NEW_VERSION" -m "Release version $NEW_VERSION"

# Push changes and tags
echo "📤 Pushing changes and tags..."
git push origin main
git push origin "v$NEW_VERSION"

# Publish to NPM
echo "📦 Publishing to NPM..."
npm publish --access public

echo "✅ Successfully deployed @aiworkspace/shared-header@$NEW_VERSION!"
echo ""
echo "📋 Next steps:"
echo "1. Update all apps to use the new version: npm install @aiworkspace/shared-header@$NEW_VERSION"
echo "2. Test the header in each app"
echo "3. Update app documentation if needed"
echo ""
echo "🎉 Deployment complete!"
