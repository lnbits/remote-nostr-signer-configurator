import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        lilygo: resolve(__dirname, 'lilygo-firmware.html')
      }
    }
  },
  publicDir: 'public'
}) 