import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/popup.tsx',
      name: 'CopilotPopup',
      formats: ['iife'],
      fileName: () => 'popup.js',
    },
    outDir: 'dist-popup',
    rollupOptions: {
      external: [],
    },
    ssr: false,
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': '{}'
  },
});