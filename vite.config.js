import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // Add options to customize the plugin's behavior
      babel: {
        plugins: ['@babel/plugin-transform-runtime'],
      },
    }),
  ],
  server: {
    // Remove unused configuration
    // hmr: {
    //   overlay: false,
    // },
  },
});