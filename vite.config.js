import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/buscaPelis',
  plugins: [react()],
  define: {
    'process.env': process.env
  }
})
