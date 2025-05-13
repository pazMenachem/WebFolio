import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  base: '/WebFolio/',
  build: {
    outDir: 'docs',
  },
  plugins: [tailwindcss(), react(), svgr()],
})
