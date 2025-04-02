import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  define: {
    "process.env": {}
  },
  plugins: [react()],
  server: {
    hmr: {
      clientPort: 5173, // Ensure correct port
    },
  },
})
