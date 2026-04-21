import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "390px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        orange: { DEFAULT: "#FF5500", dim: "#ff5804" },
        black:    "#080808",
        surface:  "#101010",
        surface2: "#161616",
        muted:    "#5A5A55",
        muted2:   "rgb(255, 253, 251)",
        cream:    "#F4EFE9",
      },
      fontFamily: {
        display: ["Epilogue", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
        body:    ["Instrument Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
