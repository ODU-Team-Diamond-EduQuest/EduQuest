import { defineConfig } from 'vite';

export default defineConfig({
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  resolve: { alias: { 'react-native': 'react-native-web' } },
  build: {
    outDir: 'assets/frontend',
    emptyOutDir: true,
    lib: {
      entry: 'src/website.jsx',
      formats: ['es'],
      fileName: () => 'website.js',
    },
  },
});
