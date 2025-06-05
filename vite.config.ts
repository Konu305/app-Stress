import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/app-Stress-main/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui': ['lucide-react']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild',
    sourcemap: true
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom', 'react-router-dom']
  }
});
