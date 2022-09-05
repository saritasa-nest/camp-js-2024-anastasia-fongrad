/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@js-camp/react': path.resolve(__dirname, 'src'),
      '@js-camp': path.resolve(__dirname, '../../libs'),
    },
  },
});
