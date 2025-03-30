import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  define: {
    'import.meta.env.VITE_APP_API_URL': JSON.stringify(process.env.VITE_APP_API_URL || ''),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),

      '@styles': path.resolve(__dirname, 'src/assets/styles'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@types': path.resolve(__dirname, 'src/types'),
    },
  },
  base: '/irenemerino-photo/',
  build: {
    outDir: 'dist',
  },
  server: {
    allowedHosts: [
      'cute-lemons-brush.loca.lt',
      'localhost',
      '0.0.0.0',
      'irenemerino-photo-back.onrender.com',
    ],
  },
})
