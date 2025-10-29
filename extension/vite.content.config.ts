import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/content/main.tsx',
      name: 'CopilotContent',
      formats: ['iife'],
      fileName: () => 'content.js',
    },
    outDir: 'dist-content',
    ssr: false,
    rollupOptions: {
      external: [],
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': '{}'
  },
});