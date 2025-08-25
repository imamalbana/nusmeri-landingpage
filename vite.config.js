import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(), // penting agar React JSX bisa di-build
    tailwindcss(), // Tailwind CSS
  ],
  optimizeDeps: {
    include: ["framer-motion"], // paksa pre-bundle framer-motion
  },
  build: {
    sourcemap: false, // hilangkan warning sourcemap
  },
});
