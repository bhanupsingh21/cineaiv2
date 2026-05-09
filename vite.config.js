import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  plugins: [],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        workspace: resolve(__dirname, 'workspace.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
