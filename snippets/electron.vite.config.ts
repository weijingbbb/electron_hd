import react from '@vitejs/plugin-react';
import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import { resolve } from 'path';
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin(),visualizer() ]
  },
  preload: {
    plugins: [externalizeDepsPlugin(),visualizer()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react(),visualizer()]
  },
})
