// vite.config.js
import vue from "@vitejs/plugin-vue";

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("cds-"),
        },
      },
    }),
  ],

  server: {
    port: 8080,
  },

  build: {
    chunkSizeWarningLimit: 600,
    cssCodeSplit: true,
  },

  preview: {
    port: 8080,
  },

  base: process.env.NODE_ENV !== "production" ? "/" : process.env.BASE_URL,
};
