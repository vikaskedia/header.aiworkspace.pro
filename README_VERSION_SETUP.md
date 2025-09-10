# Version Display Setup for AIWorkspace Header

## 🚨 Problem: Header Shows "setup-required"

If your header is showing "Version: setup-required", it means your app hasn't set up the `version.json` file that the header needs to display your app's commit hash.

## 🚀 Quick Fix (2 minutes)

### Option 1: Use the Setup Script
1. Copy `create-version-json.js` to your app's root directory
2. Run: `node create-version-json.js`
3. Refresh your app - the header should now show your commit hash

### Option 2: Manual Setup
1. Create a file called `version.json` in your app's `public` directory
2. Add this content (replace with your actual git commit hash):

```json
{
  "fullCommitHash": "a1b2c3d4e5f6789012345678901234567890abcd",
  "shortCommitHash": "a1b2c3d",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "buildTime": "2024-01-15T10:30:00.000Z"
}
```

To get your commit hash, run: `git rev-parse HEAD`

## 🔧 Permanent Fix (Recommended)

Add automatic version generation to your build process so `version.json` is created every time you build.

### For Vite Apps

Add this to your `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
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
  plugins: [
    // ... your other plugins
    generateVersionFile()
  ],
  // ... rest of your config
})
```

### For Webpack Apps

Add this to your `webpack.config.js`:

```javascript
const { execSync } = require('child_process')
const { writeFileSync } = require('fs')
const { resolve } = require('path')

function getGitCommitHash() {
  try {
    return execSync('git rev-parse HEAD').toString().trim()
  } catch (error) {
    console.warn('Could not get git commit hash:', error.message)
    return 'unknown'
  }
}

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

## ✅ Verification

After setting up version.json:

1. **Check the file exists**: Visit `http://localhost/version.json` in your browser
2. **Should return JSON**: You should see JSON content, not HTML
3. **Check the header**: Should show your commit hash instead of "setup-required"
4. **Check console**: Should see "✅ Loaded commit hash from consuming app: [your-hash]"

## 🐛 Troubleshooting

### Still showing "setup-required"?
- Make sure `version.json` is in the `public` directory
- Check that your server serves static files from the public directory
- Verify the file has the correct JSON structure

### Getting HTML instead of JSON?
- Check your server configuration
- Make sure the file is named exactly `version.json`
- Ensure your build process is generating the file correctly

### Console shows errors?
- Check the browser console for detailed error messages
- Look for the emoji-prefixed messages (❌, 📋, 🔧, etc.)
- Follow the specific guidance in the console warnings

## 📚 More Information

- **Full setup guide**: `APP_INTEGRATION_GUIDE.md`
- **Quick fix guide**: `QUICK_FIX_VERSION.md`
- **Setup script**: `create-version-json.js`

## 🎯 Expected Result

Once set up correctly, your header should show:
```
Version: a1b2c3d
```

Instead of:
```
Version: setup-required
```

And clicking on it should copy your full commit hash to the clipboard!
