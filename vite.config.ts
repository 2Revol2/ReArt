import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        exportType: "default",
      },
      include: "**/*.svg",
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify("http://localhost:8000"),
    __PROJECT__: JSON.stringify("frontend"),
  },
});
