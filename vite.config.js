import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base:"/NeumanDev/" ,
    server: {
    host: '0.0.0.0', // Esto permite que se acceda desde cualquier dispositivo en la red local
    port: 5173, // O cualquier otro puerto que prefieras
  },
})
