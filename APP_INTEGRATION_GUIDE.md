# App Integration Guide for Commit Hash Display

This guide explains how to set up your app to display its own commit hash in the header package.

## Overview

The header package now loads the commit hash from the consuming app's `version.json` file at runtime, ensuring that each app shows its own commit hash rather than the package's commit hash.

## Setup Instructions

### 1. Add Version Generation to Your App's Build Process

You need to add version generation to your app's build configuration. Here are examples for different build tools:

#### For Vite Apps

Add this to your `vite.config.js` or `vite.config.ts`:

```javascript
import { defineConfig } from 'vite'
import { execSync } from 'child_process'
import { writeFileSync } from 'fs'
import { resolve } from 'path'

// Function to get current git commit hash
function getGitCommitHash() {
  try {
    return execSync('git rev-parse HEAD').toString().trim()
  } catch (error) {
    console.warn('Could not get git commit hash:', error.message)
    return 'unknown'
  }
}

// Plugin to generate version.json file
function generateVersionFile() {
  return {
    name: 'generate-version-file',
    buildStart() {
      const commitHash = getGitCommitHash()
      const shortCommitHash = commitHash.substring(0, 7)
      
      const versionData = {
        fullCommitHash: commitHash,
        shortCommitHash: shortCommitHash,
        timestamp: new Date().toISOString(),
        buildTime: new Date().toISOString()
      }

      // Write to public directory so it's accessible as a static file
      const publicDir = resolve(process.cwd(), 'public')
      const versionFilePath = resolve(publicDir, 'version.json')
      
      try {
        writeFileSync(versionFilePath, JSON.stringify(versionData, null, 2))
        console.log('✅ Generated version.json with hash:', shortCommitHash)
      } catch (error) {
        console.error('❌ Failed to generate version.json:', error)
      }
    }
  }
}

export default defineConfig({
  plugins: [
    // ... your other plugins
    generateVersionFile()
  ],
  // ... rest of your config
})
```

#### For Webpack Apps

Add this to your `webpack.config.js`:

```javascript
const { execSync } = require('child_process')
const { writeFileSync } = require('fs')
const { resolve } = require('path')

// Function to get current git commit hash
function getGitCommitHash() {
  try {
    return execSync('git rev-parse HEAD').toString().trim()
  } catch (error) {
    console.warn('Could not get git commit hash:', error.message)
    return 'unknown'
  }
}

// Plugin to generate version.json
class GenerateVersionFilePlugin {
  apply(compiler) {
    compiler.hooks.beforeCompile.tap('GenerateVersionFilePlugin', () => {
      const commitHash = getGitCommitHash()
      const shortCommitHash = commitHash.substring(0, 7)
      
      const versionData = {
        fullCommitHash: commitHash,
        shortCommitHash: shortCommitHash,
        timestamp: new Date().toISOString(),
        buildTime: new Date().toISOString()
      }

      const publicDir = resolve(process.cwd(), 'public')
      const versionFilePath = resolve(publicDir, 'version.json')
      
      try {
        writeFileSync(versionFilePath, JSON.stringify(versionData, null, 2))
        console.log('✅ Generated version.json with hash:', shortCommitHash)
      } catch (error) {
        console.error('❌ Failed to generate version.json:', error)
      }
    })
  }
}

module.exports = {
  // ... your webpack config
  plugins: [
    // ... your other plugins
    new GenerateVersionFilePlugin()
  ]
}
```

### 2. Ensure version.json is Served

Make sure your app serves the `version.json` file from the public directory. Most build tools do this automatically, but verify that:

- The file is accessible at `https://yourapp.com/version.json`
- The file is not cached aggressively (add cache-busting if needed)

### 3. Example version.json Output

Your `version.json` file should look like this:

```json
{
  "fullCommitHash": "a1b2c3d4e5f6789012345678901234567890abcd",
  "shortCommitHash": "a1b2c3d",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "buildTime": "2024-01-15T10:30:00.000Z"
}
```

## How It Works

1. **Build Time**: Your app's build process generates a `version.json` file with the current git commit hash
2. **Runtime**: The header package fetches this file and displays the commit hash
3. **Version Checking**: The header periodically checks for updates by comparing commit hashes
4. **User Experience**: Users see your app's commit hash and get notified of updates

## Benefits

- ✅ Each app shows its own commit hash
- ✅ Automatic version checking and update notifications
- ✅ No build-time dependencies between package and app
- ✅ Works with any build tool (Vite, Webpack, etc.)
- ✅ Easy to implement and maintain

## Troubleshooting

### Header Shows "unknown" for Version

1. **Check browser console** - Look for detailed error messages about version.json loading
2. **Verify version.json exists** - Check that `/version.json` is accessible in your browser
3. **Check content type** - Ensure the server returns `Content-Type: application/json`
4. **Verify file structure** - Make sure the JSON has the correct format with `shortCommitHash` and `fullCommitHash`

### Header Shows "setup-required"

This means the consuming app hasn't set up version.json generation yet:
1. **Run the setup script**: `node setup-version.js` (if available)
2. **Add version generation** to your build config (see examples above)
3. **Rebuild your app** to generate the version.json file

### Header Shows "not-found" or "error"

1. **Check file path** - Ensure version.json is in the public directory
2. **Check server configuration** - Make sure static files are served correctly
3. **Check build process** - Verify the version generation plugin is working
4. **Check console errors** - Look for network or parsing errors

### Version Checking Not Working

1. Verify `version.json` is being updated on each build
2. Check that the file is not cached
3. Ensure the build process runs `git rev-parse HEAD` successfully

### Build Errors

1. Make sure you have `child_process`, `fs`, and `path` available in your build environment
2. Verify git is available in your build environment
3. Check that the public directory exists and is writable

### Quick Test

To quickly test if version.json is working:
1. Open your app in the browser
2. Navigate to `https://yourapp.com/version.json`
3. You should see JSON content with commit hash information
4. Check the browser console for version loading messages

## Example Integration

Here's a complete example for a Vite app:

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { execSync } from 'child_process'
import { writeFileSync } from 'fs'
import { resolve } from 'path'

function getGitCommitHash() {
  try {
    return execSync('git rev-parse HEAD').toString().trim()
  } catch (error) {
    console.warn('Could not get git commit hash:', error.message)
    return 'unknown'
  }
}

function generateVersionFile() {
  return {
    name: 'generate-version-file',
    buildStart() {
      const commitHash = getGitCommitHash()
      const shortCommitHash = commitHash.substring(0, 7)
      
      const versionData = {
        fullCommitHash: commitHash,
        shortCommitHash: shortCommitHash,
        timestamp: new Date().toISOString(),
        buildTime: new Date().toISOString()
      }

      const publicDir = resolve(process.cwd(), 'public')
      const versionFilePath = resolve(publicDir, 'version.json')
      
      try {
        writeFileSync(versionFilePath, JSON.stringify(versionData, null, 2))
        console.log('✅ Generated version.json with hash:', shortCommitHash)
      } catch (error) {
        console.error('❌ Failed to generate version.json:', error)
      }
    }
  }
}

export default defineConfig({
  plugins: [vue(), generateVersionFile()],
  // ... rest of your config
})
```

After implementing this, your header will show your app's commit hash instead of the package's commit hash!
