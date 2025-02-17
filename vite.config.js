// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base:"/stream/",
  
// })



import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Detect environment
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? "/stream/" : "/", // Use "/stream/" for GitHub Pages, "/" for Vercel
});
