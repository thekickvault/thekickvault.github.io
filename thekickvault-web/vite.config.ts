import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// If deploying to GitHub Pages at https://<user>.github.io/thekickvault/
// set base to '/thekickvault/'. If using a custom domain or root, adjust accordingly.
export default defineConfig({
  plugins: [react()],
  base: '/thekickvault/',
})
