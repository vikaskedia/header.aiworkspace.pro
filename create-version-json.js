#!/usr/bin/env node

/**
 * Simple script to create version.json for AIWorkspace header
 * 
 * This script creates a version.json file in the public directory
 * with the current git commit hash.
 * 
 * Usage:
 * 1. Copy this file to your app's root directory
 * 2. Run: node create-version-json.js
 * 3. The header will now show your app's commit hash
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Creating version.json for AIWorkspace header...\n');

// Check if we're in a git repository
let commitHash = 'unknown';
try {
  commitHash = execSync('git rev-parse HEAD').toString().trim();
  console.log('✅ Git repository detected');
  console.log('📝 Current commit hash:', commitHash);
} catch (error) {
  console.log('⚠️  Not in a git repository or git not available');
  console.log('📝 Using fallback hash');
}

const shortCommitHash = commitHash.substring(0, 7);

// Create version data
const versionData = {
  fullCommitHash: commitHash,
  shortCommitHash: shortCommitHash,
  timestamp: new Date().toISOString(),
  buildTime: new Date().toISOString()
};

// Ensure public directory exists
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('📁 Created public directory');
}

// Write version.json
const versionFilePath = path.join(publicDir, 'version.json');
try {
  fs.writeFileSync(versionFilePath, JSON.stringify(versionData, null, 2));
  console.log('✅ Created version.json successfully!');
  console.log('📄 File location:', versionFilePath);
  console.log('🔗 Short hash:', shortCommitHash);
  console.log('🔗 Full hash:', commitHash);
  
  console.log('\n🎉 Done! The header should now show your commit hash.');
  console.log('🔄 Refresh your app to see the changes.');
  
} catch (error) {
  console.error('❌ Failed to create version.json:', error.message);
  process.exit(1);
}

console.log('\n📋 Next steps:');
console.log('1. Refresh your app in the browser');
console.log('2. Check that the header shows your commit hash instead of "setup-required"');
console.log('3. For automatic generation, add the build plugin to your vite.config.js (see APP_INTEGRATION_GUIDE.md)');
