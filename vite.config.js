import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/stream/",
  
})


// import { defineConfig, loadEnv } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig(({ mode }) => {
//   // Load the correct environment file
//   const env = loadEnv(mode, process.cwd(), "VITE");

//   return {
//     plugins: [react()],
//     base: env.VITE_BASE_URL || "/", // Use the correct base path
//   };
// });
