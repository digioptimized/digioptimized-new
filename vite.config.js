import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Set `base` to your GitHub repository name so built assets use the correct
// path when you host the site at https://<user>.github.io/<repo>/
// Make the base path configurable so the same codebase can build for
// GitHub Pages (repo subpath) and for platforms like Vercel (root path).
// - Use the VITE_BASE env var when provided at build time (e.g. in GH Actions)
// - Fallback to '/' which is correct for Vercel and most hosts.
const basePath = process.env.VITE_BASE || process.env.SITE_BASE || '/';

export default defineConfig({
  base: basePath,
  plugins: [react()],
})
