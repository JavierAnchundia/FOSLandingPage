import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://fos-pages.pages.dev",
  output: "static",
  redirects: {
    "/empresa": "/#empresa",
    "/servicios": "/#servicios",
    "/proyectos": "/#proyectos",
    "/contacto": "/#contacto",
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
