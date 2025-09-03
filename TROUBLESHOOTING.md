# Troubleshooting Guide

## Common Installation Issues

### 1. Pinia Version Conflicts

If you encounter errors like:
```
npm error peer pinia@"^2.0.0" from @aiworkspace/shared-header@1.0.0
npm error Found: pinia@3.0.3
```

**Solution**: The package supports both Pinia v2 and v3. Try one of these approaches:

#### Option A: Force Install (Recommended for testing)
```bash
npm install @aiworkspace/shared-header --legacy-peer-deps
```

#### Option B: Use Yarn (often handles conflicts better)
```bash
yarn add @aiworkspace/shared-header
```

#### Option C: Clear npm cache and retry
```bash
npm cache clean --force
npm install @aiworkspace/shared-header
```

### 2. Element Plus Version Conflicts

If you get Element Plus version conflicts:

**Solution**: Ensure you have Element Plus v2.x installed:
```bash
npm install element-plus@^2.0.0
```

### 3. Vue Version Issues

**Solution**: Ensure you're using Vue 3:
```bash
npm install vue@^3.0.0
```

### 4. TypeScript Errors

If you get TypeScript compilation errors:

**Solution**: Ensure you have the latest TypeScript:
```bash
npm install typescript@^5.0.0
```

## Alternative Installation Methods

### From Git Repository
```bash
npm install git+https://github.com/vikaskedia/header.aiworkspace.pro.git
```

### With Specific Version
```bash
npm install @aiworkspace/shared-header@latest
```

## Environment Setup

Make sure you have these environment variables set:
```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_APEX_DOMAIN=aiworkspace.pro
```

## Still Having Issues?

1. Check your Node.js version (should be >=16)
2. Clear npm/yarn cache
3. Delete `node_modules` and `package-lock.json`
4. Run `npm install` again
5. Check the [GitHub Issues](https://github.com/vikaskedia/header.aiworkspace.pro/issues)

## Compatibility Matrix

| Dependency | Supported Versions |
|------------|-------------------|
| Vue        | ^3.0.0            |
| Pinia      | ^2.0.0 \|\| ^3.0.0 |
| Element Plus| ^2.0.0            |
| Node.js    | >=16.0.0          |
