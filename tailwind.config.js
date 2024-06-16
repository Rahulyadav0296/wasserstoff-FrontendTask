const { transform } = require("next/dist/build/swc");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "text-movement": "text-movement 1.5s linear infinite alternate",
        "move-text": "move-text 1.5s linear infinite alternate",
        "move-textOne": "move-textOne 1.5s linear infinite alternate",
        "move-textTwo": "move-textTwo 1.5s linear infinite alternate",
        "move-textThree": "move-textThree 1.5s linear infinite alternate",
        "move-textFour": "move-textFour 2s linear infinite",
      },
      keyframes: {
        "text-movement": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100px)" },
        },
        "move-text": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100px)" },
        },
        "move-textOne": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100px)" },
        },
        "move-textTwo": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100px)" },
        },
        "move-textThree": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50px)" },
        },
        "move-textFour": {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100px)" },
        },
      },
    },
  },
  plugins: [],
};
