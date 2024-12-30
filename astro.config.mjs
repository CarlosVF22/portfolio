import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), robotsTxt(), sitemap()],
    site: "https://carlosvasquez.dev/",
    output: "static",
    adapter: vercel({}),
});
