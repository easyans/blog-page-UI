/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#d0d0d0",
          "200": "#585858",
          "300": "#1e1e1e",
          "400": "rgba(0, 0, 0, 0.85)",
          "500": "rgba(0, 0, 0, 0.5)",
        },
        blue: { "100": "#5c17ef", "200": "rgba(92, 23, 239, 0.8)" },
        black: "#000",
        green: {
          "100": "#8cfb6e",
          "200": "#5cdb38",
          "300": "#1fee40",
          "400": "rgba(92, 219, 56, 0.8)",
        },
        indigo: "#746fff",
      },
      fontFamily: { "chakra-petch": "'Chakra Petch'" },
      borderRadius: {
        xxs: "10px",
        small: "15px",
        base: "256px",
        large: "368px",
        xxl: "400px",
      },
    },
    fontSize: {
      "5xs": "15px",
      "4xs": "18px",
      "3xs": "19px",
      "2xs": "20px",
      xs: "24px",
      sm: "25px",
      base: "30px",
      lg: "55px",
      xl: "56px",
    },
    screens: { sm: { max: "428px" } },
  },
  corePlugins: { preflight: false },
};
