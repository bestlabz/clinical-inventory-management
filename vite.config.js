import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { VitePWA } from "vite-plugin-pwa";
import compression from "vite-plugin-compression2";

import dns from "dns";
import path from "path";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  // root: "./", // Set the root directory of your project
  // base: "/", // Set the base URL path for your application

  build: {
    outDir: "build", // Set the output directory for the build files
    assetsDir: "@/assets", // Set the directory for the static assets
    // sourcemap: process.env.__DEV__ === "true",
    rollupOptions: {
      // Additional Rollup configuration options if needed
    },
    chunkSizeWarningLimit: 10 * 1024,
  },
  plugins: [
    react(),
    cssInjectedByJsPlugin(),

    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        // enabled: process.env.SW_DEV === "true",
        enabled: false,
        /* when using generateSW the PWA plugin will switch to classic */
        type: "module",
        navigateFallback: "index.html",
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
      },
      // add this to cache all the
      // // static assets in the public folder
      // includeAssets: ["**/*"],
      includeAssets: [
        "**/*",       
        "favicon.ico",
      ],
      manifest: [
        {
          theme_color: "",
          background_color: "",
          display: "standalone",
          orientation: "portrait",
          scope: ".",
          start_url: ".",
          id: ".",
          short_name: "Clinical Inventory",
          name: "Clinical Inventory Management Dashboard",
          description:
            "Clinical Inventory : Admin Dashboard",
          icons: [
            {
              src: "favicon.ico",
              sizes: "48x48",
              type: "image/x-icon",
            },
          ],
        },
      ],
    }),
    compression(),
  ],

  server: {
    port: 3000
  },
  define: {
    "process.env": process.env,
    // global: {}, //enable this when running on dev/local mode
  },

  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src/"),
    },
  },
  // test: {
  //   global: true,
  //   environment: "jsdom",
  //   setupFiles: ["./src/setupTest.js"],
  // },
});
