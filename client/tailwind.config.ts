import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-1": "#1C1C1C",
        "base-2": "#272727",
        "base-3": "#323232",
        "base-4": "#393939",
        bg: "#1F2333",
        primary: "#7060FF",
      },
    },
  },
  plugins: [],
};
export default config;
