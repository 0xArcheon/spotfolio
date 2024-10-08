const { Outfit } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fern: {
          50: "#f0fdf4",
          100: "#dbfde6",
          200: "#baf8cf",
          300: "#84f1aa",
          400: "#48e07d",
          500: "#1db954",
          600: "#14a547",
          700: "#13823b",
          800: "#156633",
          900: "#13542c",
          950: "#042f15",
        },
        spotify: {
          400: "#56EA64",
        },
      },
      fontFamily: {
        outfit: ["outfit", "sans-serif"],
        switzer: ["switzer", "sans"],
        hauora: ["hauora-300", "sans"],
        hauora_md: ["hauora-500", "sans"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ preferredStrategy: "pseudoelements" }),
  ],
};
