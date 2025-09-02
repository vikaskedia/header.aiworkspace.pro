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
          fileName: (format) => `index.${format === 'es' ? 'esm' : format}.js`
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            globals: {
              vue: 'Vue'
            }
          }
        }
      }
    }
  }
})
