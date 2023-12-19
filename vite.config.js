import { defineConfig } from "vite";
import path from 'path';

export default defineConfig({
  root: "src",
  resolve: {
    alias: {
      "@scripts": path.resolve(__dirname, "./src/scripts"),      
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
      '@': path.resolve(__dirname, 'src'),
      "~": path.resolve(__dirname, "./"),
    },
  },
  build: {
    outDir: "../dist",
  },
  optimizeDeps: {
    include: ['gsap'],
  },
});