import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, 'frontend'),
  plugins: [react()],
  server: {
    // Proxy is the connection between the front and back-end. My axios routes draw a reference to '/db', and once they do that, it pulls the "base" url from this target.
    proxy: {
      '/db': {
        target: `http://localhost:${process.env.PORT}`,
        changeOrigin: true,
        secure: false,
        ws: true,
      }
    }
  }
})
