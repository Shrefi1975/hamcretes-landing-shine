// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    // On Netlify, netlify.toml sets NITRO_PRESET=netlify so the SSR server is
    // deployed as a Netlify Function; everywhere else (incl. this workspace)
    // it stays on the default Cloudflare preset.
    preset: process.env["NITRO_PRESET"] === "netlify" ? "netlify" : "cloudflare-module",
    // Pin the output layout so hosting platforms always find the static site
    // at dist/client (outside the sandbox these default to .output otherwise).
    output: {
      dir: "dist",
      serverDir: "dist/server",
      publicDir: "dist/client",
    },
  },
});
