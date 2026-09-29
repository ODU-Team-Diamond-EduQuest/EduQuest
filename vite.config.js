import { defineConfig } from 'vite';
import { copyFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [{ name: 'pdf-worker', writeBundle() {
    copyFileSync(require.resolve('pdfjs-dist/build/pdf.worker.min.mjs'), 'assets/frontend/pdf.worker.min.mjs');
  } }],
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  resolve: { alias: { 'react-native': 'react-native-web' } },
  build: {
    outDir: 'assets/frontend',
    emptyOutDir: true,
    lib: {
      entry: { website: 'src/website.jsx', viewer: 'src/viewer.jsx' },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.js`,
    },
  },
});
