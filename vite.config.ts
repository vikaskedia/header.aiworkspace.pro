import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(({ command }) => {
  const isDev = command === 'serve'
  
  if (isDev) {
    // Development mode - serve demo app
    return {
      plugins: [vue()],
      server: {
        port: 3000,
        open: true
      }
    }
  } else {
    // Build mode - create library
    return {
      plugins: [vue()],
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
