import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        livret: ["TT Livret", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
