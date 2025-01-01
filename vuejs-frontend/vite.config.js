import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),vuetify({ autoImport: true }),], 
  server: {
    proxy: {
      '/api': 'http://localhost:8000', // Laravel API 
    },
     },
})
