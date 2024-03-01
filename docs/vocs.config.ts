import { defineConfig } from "vocs";

export default defineConfig({
  logoUrl: {
    light: "/logo-light.svg",
    dark: "/logo-dark.svg",
  },
  title: "Tournament",
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "Example",
      link: "/example",
    },
  ],
});
