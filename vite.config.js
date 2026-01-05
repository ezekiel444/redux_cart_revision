import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined  // Fixes MIME type issues
      }
    },
  },
  server: {
    port: 3000,
    open: true
  }
})
