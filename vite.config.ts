import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // GitHub Pages 배포를 위한 base 경로 설정
  // Repository 이름이 'my-repo'라면 '/my-repo/'로 설정
  // 사용자 GitHub Pages (username.github.io)인 경우 '/'로 설정
  base: process.env.GITHUB_ACTIONS ? '/' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
