import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import px2rem from "postcss-pxtorem";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // 💡注意：这里用 “/” 是一种危险的用法，请确保工作目录与该文件同级
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
