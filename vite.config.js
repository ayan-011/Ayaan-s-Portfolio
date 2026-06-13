import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import path from "path";

// https://vite.dev/config/
export default defineConfig({
  
    theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "25%": {
            transform: "translateY(-5px)",
          },
          "75%": {
            transform: "translateY(5px)",
          },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [react(),tailwindcss()],
  resolve: {
   alias: {
     "@": path.resolve(__dirname, "./src"),
   },
 },
})
