import { defineConfig } from "vocs";

export default defineConfig({
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "API",
      items: [
        {
          text: "Gettings Started",
          link: "/api/getting-started",
        },
      ],
    },
    {
      text: "Server",
      items: [],
    },
    {
      text: "Client",
      items: [],
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
