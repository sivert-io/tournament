import { defineConfig } from "vocs";

export default defineConfig({
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
  logoUrl: {
    light: "/logo-light.svg",
    dark: "/logo-dark.svg",
  },
  iconUrl: "/logo.svg",
  title: "Tournament",
  titleTemplate: "%s – Tournament",
});
