import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/RenaissanceHistoryHub/",   // REQUIRED for GitHub Pages
  build: {
    outDir: "dist",
  },
});