import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "#495AF3",
      warning: "#FFC62B",
      danger: "#FF4B55",
      black: "#000000",
      white: "#ffffff",
      grey: {
        "14": "#242424",
        "50": "#808080",
        "92": "#EBEBEB",
        "94": "#F0F0F0",
        "97": "#F7F7F7",
      },
    },
  },
  plugins: [],
};
export default config;
