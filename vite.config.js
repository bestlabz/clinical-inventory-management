import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { VitePWA } from "vite-plugin-pwa";
import compression from "vite-plugin-compression2";

import dns from "dns";
import path from "path";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  build: {
    outDir: "build",
    assetsDir: "assets",
    chunkSizeWarningLimit: 10 * 1024,
    rollupOptions: {
      // Additional Rollup configuration options if needed
    },
  },
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: false,
        type: "module",
        navigateFallback: "index.html",
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,xlsx}"],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
      },
      includeAssets: [
        "favicon.ico",
        "**/*.xlsx"
      ],
      manifest: {
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        orientation: "portrait",
        scope: ".",
        start_url: ".",
        id: ".",
        short_name: "Clinical Inventory",
        name: "Clinical Inventory Management Dashboard",
        description: "Clinical Inventory: Admin Dashboard",
        icons: [
          {
            src: "favicon.ico",
            sizes: "48x48",
            type: "image/x-icon",
          },
        ],
      },
    }),
    compression(),
  ],

  server: {
    port: 3000,
  },
  define: {
    "process.env": process.env,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
  assetsInclude: ["**/*.xlsx"],
});
