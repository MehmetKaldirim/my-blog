import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5001", // Adjust this to your backend server URL
        changeOrigin: true,
        secure: false,
        // Comment out or remove the rewrite function
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    port: 5023,
    open: true,
  },
});
