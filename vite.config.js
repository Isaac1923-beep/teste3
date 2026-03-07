import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/testem/',  // ← remplace par le nom exact de ton repo GitHub
});