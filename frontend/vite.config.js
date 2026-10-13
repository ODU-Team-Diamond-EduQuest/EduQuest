import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: { outDir: 'app', emptyOutDir: true },
  resolve: { alias: { 'react-native': 'react-native-web' } },
});
