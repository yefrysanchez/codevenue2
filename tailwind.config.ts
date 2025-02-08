import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#EFEEE0",
        dark: "#1D2123",
        primary: "#9D00FF",
        secundary: "#0598CE",
        darkAlt: "#1A1E1F"
      },
    },
  },
  plugins: [],
} satisfies Config;
