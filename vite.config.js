import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  plugins: [],
  server: {
    port: 3000,
    open: true,
  },
});
