import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import legacy from "@vitejs/plugin-legacy";
import path from "node:path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    legacy({
      // Eski iPhone/Safari sürümlerini hedefliyoruz
      targets: ['iOS >= 12', 'Safari >= 12', 'defaults'],
      renderLegacyChunks: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});