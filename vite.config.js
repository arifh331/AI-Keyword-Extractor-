import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  //changing the default port number because its like 5153
  plugins: [react()],
  server:{
    port:3000,

  },
  
})
