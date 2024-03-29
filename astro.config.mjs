import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://egromero.github.io",
  integrations: [ solidJs(), UnoCSS({
    injectReset: true
  }), icon()],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  output: "server",
  adapter: netlify()
});