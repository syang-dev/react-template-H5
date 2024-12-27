import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import px2rem from "postcss-pxtorem";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "./src",
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
        px2rem({
          rootValue: 16,
          propList: ["*"],
        }),
      ],
    },
  },
});
