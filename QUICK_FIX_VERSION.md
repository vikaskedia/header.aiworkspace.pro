# Quick Fix: Version.json Setup

## The Problem
Your app is showing "setup-required" or "unknown" for the version because the header package can't find a proper `version.json` file.

## The Error
```
SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

This happens because your server is returning HTML (likely a 404 page or index.html) instead of JSON when the header requests `/version.json`.

## Quick Fix

### Step 1: Create version.json manually (for immediate testing)

Create a file called `version.json` in your app's `public` directory:

```json
{
  "fullCommitHash": "a1b2c3d4e5f6789012345678901234567890abcd",
  "shortCommitHash": "a1b2c3d",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "buildTime": "2024-01-15T10:30:00.000Z"
}
```

Replace the hash values with your actual git commit hash:
```bash
git rev-parse HEAD
```

### Step 2: Test it works

1. Restart your development server
2. Check that `http://localhost/version.json` returns JSON (not HTML)
3. The header should now show your commit hash instead of "setup-required"

### Step 3: Set up automatic generation (recommended)

Add this to your build configuration to automatically generate version.json:

#### For Vite apps (vite.config.js):
```javascript
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

## Verification

After setting up version.json:

1. **Check the file exists**: Visit `http://localhost/version.json` in your browser
2. **Check content type**: Should return `Content-Type: application/json`
3. **Check the header**: Should show your commit hash instead of "setup-required"
4. **Check console**: Should see "Loaded commit hash from consuming app: [your-hash]"

## Common Issues

- **Still showing "setup-required"**: Make sure the file is in the `public` directory and your server serves static files
- **Still getting HTML**: Check that your server configuration serves JSON files with the correct content type
- **File not found**: Ensure the `public` directory exists and the file is named exactly `version.json`

## Need Help?

Check the full setup guide in `APP_INTEGRATION_GUIDE.md` for more detailed instructions and troubleshooting.
