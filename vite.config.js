import path from 'path';
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  resolve: {
    alias: {
      "@scripts": path.resolve(__dirname, "./src/javascript"),      
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
      '@': path.resolve(__dirname, 'src'),
      "~": path.resolve(__dirname, "./"),
    },
  },
  build: {
    outDir: "../dist",
  },
});