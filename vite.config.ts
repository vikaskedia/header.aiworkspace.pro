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
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'AIWorkspaceHeader',
          fileName: (format) => {
            if (format === 'es') return 'index.esm.js'
            if (format === 'cjs') return 'index.js'
            return `index.${format}.js`
          }
        },
        rollupOptions: {
          external: ['vue', 'pinia', 'element-plus', '@supabase/supabase-js'],
          output: [
            {
              format: 'es',
              entryFileNames: 'index.esm.js',
              globals: {
                vue: 'Vue',
                pinia: 'Pinia',
                'element-plus': 'ElementPlus',
                '@supabase/supabase-js': 'Supabase'
              }
            },
            {
              format: 'cjs',
              entryFileNames: 'index.js',
              globals: {
                vue: 'Vue',
                pinia: 'Pinia',
                'element-plus': 'ElementPlus',
                '@supabase/supabase-js': 'Supabase'
              }
            }
          ]
        },
        cssCodeSplit: false
      }
    }
  }
})
