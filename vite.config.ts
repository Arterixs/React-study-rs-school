import { defineConfig } from 'vite';
import postcssNesting from 'postcss-nesting';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [postcssNesting],
    },
  },
  server: {
    open: '/',
  },
});
