import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { execSync } from 'child_process'
import { writeFileSync } from 'fs'

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

export default defineConfig(({ command }) => {
  const isDev = command === 'serve'
  
  // Get commit hash for version tracking
  const commitHash = getGitCommitHash()
  const shortCommitHash = commitHash.substring(0, 7)
  
  if (isDev) {
    // Development mode - serve demo app
    return {
      plugins: [vue(), generateVersionFile()],
      define: {
        __COMMIT_HASH__: JSON.stringify(commitHash),
        __SHORT_COMMIT_HASH__: JSON.stringify(shortCommitHash),
      },
      server: {
        port: 3000,
        open: true
      }
    }
  } else {
    // Build mode - create library
    return {
      plugins: [vue(), generateVersionFile()],
      define: {
        // Prevent environment variables from being inlined in library builds
        'import.meta.env.VITE_SUPABASE_URL': 'undefined',
        'import.meta.env.VITE_SUPABASE_ANON_KEY': 'undefined',
        'import.meta.env.MODE': '"production"',
        // Add commit hash variables
        __COMMIT_HASH__: JSON.stringify(commitHash),
        __SHORT_COMMIT_HASH__: JSON.stringify(shortCommitHash),
      },
      build: {
        lib: {
          entry: {
            index: resolve(__dirname, 'src/index.ts'),
            'utils/universalCallback': resolve(__dirname, 'src/utils/universalCallback.ts'),
            'utils/authRedirect': resolve(__dirname, 'src/utils/authRedirect.ts'),
            'utils/simpleCallback': resolve(__dirname, 'src/utils/simpleCallback.ts')
          },
          name: 'AIWorkspaceHeader',
          fileName: (format, entryName) => {
            if (entryName === 'index') {
              if (format === 'es') return 'index.esm.js'
              if (format === 'cjs') return 'index.js'
              return `index.${format}.js`
            }
            return `${entryName}.js`
          }
        },
        rollupOptions: {
          external: ['vue', 'pinia', 'element-plus', '@supabase/supabase-js'],
          output: [
            {
              format: 'es',
              entryFileNames: (chunkInfo) => {
                if (chunkInfo.name === 'index') return 'index.esm.js'
                return '[name].js'
              },
              globals: {
                vue: 'Vue',
                pinia: 'Pinia',
                'element-plus': 'ElementPlus',
                '@supabase/supabase-js': 'Supabase'
              },
              // Add manual chunks to better handle Supabase
              manualChunks: (id) => {
                if (id.includes('@supabase/supabase-js')) {
                  return 'supabase'
                }
              }
            },
            {
              format: 'cjs',
              entryFileNames: (chunkInfo) => {
                if (chunkInfo.name === 'index') return 'index.js'
                return '[name].js'
              },
              globals: {
                vue: 'Vue',
                pinia: 'Pinia',
                'element-plus': 'ElementPlus',
                '@supabase/supabase-js': 'Supabase'
              },
              // Add manual chunks to better handle Supabase
              manualChunks: (id) => {
                if (id.includes('@supabase/supabase-js')) {
                  return 'supabase'
                }
              }
            }
          ]
        },
        cssCodeSplit: false
      }
    }
  }
})
