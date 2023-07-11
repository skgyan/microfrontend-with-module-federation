import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "paycard",
      filename: "paycardEntry.js",
      exposes: {
        "./Bottom": "./src/Bottom",
      },
      remotes: {
        remote: "http://localhost:5001/assets/entry.js",
      },
      shared: ["react", "react-dom", "jotai"]
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  }
})
