import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },

  // REQUIRED for GitHub Pages!
  base: "/RenaissanceHistoryHub/",

  // Optional but recommended
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
});
