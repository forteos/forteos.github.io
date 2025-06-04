import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import VueRouter from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-layouts-next'

export default defineConfig({
  base: '',
  plugins: [VueRouter(),vue(), tailwindcss(), Layouts()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})