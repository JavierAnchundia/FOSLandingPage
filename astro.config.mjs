import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://fos-pages.pages.dev",
  output: "static",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
