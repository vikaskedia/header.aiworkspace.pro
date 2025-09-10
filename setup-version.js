#!/usr/bin/env node

/**
 * Quick setup script for version.json generation
 * 
 * This script helps app developers quickly set up version.json generation
 * for the AIWorkspace header package.
 * 
 * Usage:
 * 1. Copy this file to your app's root directory
 * 2. Run: node setup-version.js
 * 3. Follow the prompts to add version generation to your build config
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 AIWorkspace Header - Version Setup Helper\n');

// Check if we're in a git repository
try {
  execSync('git rev-parse --git-dir', { stdio: 'ignore' });
  console.log('✅ Git repository detected');
} catch (error) {
  console.log('❌ Not in a git repository. Please run this from your app\'s root directory.');
  process.exit(1);
}

// Check for common build config files
const configFiles = [
  'vite.config.js',
  'vite.config.ts',
  'webpack.config.js',
  'webpack.config.ts',
  'rollup.config.js',
  'rollup.config.ts'
];

const foundConfigs = configFiles.filter(file => fs.existsSync(file));

if (foundConfigs.length === 0) {
  console.log('❌ No build configuration files found. Please ensure you have a build tool configured.');
  process.exit(1);
}

console.log(`✅ Found build config: ${foundConfigs.join(', ')}`);

// Generate version.json manually for testing
console.log('\n📝 Generating test version.json...');

try {
  const commitHash = execSync('git rev-parse HEAD').toString().trim();
  const shortCommitHash = commitHash.substring(0, 7);
  
  const versionData = {
    fullCommitHash: commitHash,
    shortCommitHash: shortCommitHash,
    timestamp: new Date().toISOString(),
    buildTime: new Date().toISOString()
  };

  // Create public directory if it doesn't exist
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
    console.log('📁 Created public directory');
  }

  // Write version.json
  const versionFilePath = path.join(publicDir, 'version.json');
  fs.writeFileSync(versionFilePath, JSON.stringify(versionData, null, 2));
  
  console.log(`✅ Generated version.json with hash: ${shortCommitHash}`);
  console.log(`📄 File location: ${versionFilePath}`);
  
} catch (error) {
  console.log('❌ Failed to generate version.json:', error.message);
  process.exit(1);
}

// Provide setup instructions
console.log('\n📋 Next Steps:');
console.log('1. Add version generation to your build process (see APP_INTEGRATION_GUIDE.md)');
console.log('2. Test that /version.json is accessible in your app');
console.log('3. The header will now show your app\'s commit hash instead of "unknown"');

console.log('\n🔧 For Vite apps, add this to your vite.config.js:');
console.log(`
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
`);

console.log('\n✨ Setup complete! Check your browser console for version loading details.');
