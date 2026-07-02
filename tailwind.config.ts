import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#061329",
        royal: "#0A2D68",
        gold: "#F7C64A",
        cream: "#FFF6D8",
      },
      boxShadow: {
        glow: "0 0 60px rgba(247, 198, 74, .18)",
      },
    },
  },
  plugins: [],
} satisfies Config;
