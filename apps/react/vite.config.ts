/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@js-camp/react/store': path.resolve(__dirname, 'src/store'),
      '@js-camp': path.resolve(__dirname, '../../libs'),
    },
  },
});
