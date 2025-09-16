import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Deploying to GitHub Pages at https://thekickvault.github.io/
export default defineConfig({
  plugins: [react()],
  base: '/',
})
