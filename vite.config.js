import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname,'./src'),
      '@assets': path.resolve(__dirname,'./src/assets'),
      '@components': path.resolve(__dirname,'./src/assets/components'),
      '@styles': path.resolve(__dirname,'./src/assets/styles'),
      '@lib': path.resolve(__dirname,'./src/assets/lib'),
      '@public': path.resolve(__dirname,'./public/img'),
    }
  }
})
