/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Tokens from DESIGN.md
      colors: {
        spotify: {
          green: "#1ed760",
          "green-border": "#1db954",
          black: "#121212",
          surface: "#181818",
          elevated: "#1f1f1f",
          card: "#252525",
          "card-alt": "#272727",
          silver: "#b3b3b3",
          "near-white": "#cbcbcb",
          border: "#4d4d4d",
          "border-light": "#7c7c7c",
          negative: "#f3727f",
          warning: "#ffa42b",
          announcement: "#539df5",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        sans: [
          "SpotifyMixUI",
          "var(--font-mix)",
          "CircularSp-Arab",
          "CircularSp-Hebr",
          "CircularSp-Cyrl",
          "CircularSp-Grek",
          "CircularSp-Deva",
          "Helvetica Neue",
          "helvetica",
          "arial",
          "Hiragino Sans",
          "Hiragino Kaku Gothic ProN",
          "Meiryo",
          "MS Gothic",
          "sans-serif",
        ],
      },
      boxShadow: {
        heavy: "rgba(0,0,0,0.5) 0px 8px 24px",
        card: "rgba(0,0,0,0.3) 0px 8px 8px",
        inset:
          "rgb(18,18,18) 0px 1px 0px, rgb(124,124,124) 0px 0px 0px 1px inset",
      },
      letterSpacing: {
        button: "1.4px",
        label: "2px",
      },
      keyframes: {
        eq: {
          "0%, 100%": { transform: "scaleY(0.3)" },
          "50%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        eq: "eq 0.9s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ preferredStrategy: "pseudoelements" }),
    require("tailwindcss-animate"),
  ],
};
