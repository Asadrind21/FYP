/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#252525",
          "200": "#031734",
        },
        white: "#fff",
        gainsboro: "#d9d9d9",
        cornflowerblue: "#9ca6ff",
        darkgray: "#a3a3a3",
        black: "#000",
        darkslateblue: {
          "100": "#083677",
          "200": "#001e47",
        },
      },
      spacing: {},
      fontFamily: {
        "clash-display": "'Clash Display'",
        "open-sans": "'Open Sans'",
        poppins: "Poppins",
      },
      borderRadius: {
        "6xl": "25px",
        mini: "15px",
        "3xs": "10px",
        "21xl": "40px",
      },
    },
    fontSize: {
      "6xl": "25px",
      "106xl": "125px",
      "81xl": "100px",
      "26xl": "45px",
      mini: "15px",
      "21xl": "40px",
      "41xl": "60px",
      xl: "20px",
      "11xl": "30px",
      "4xl": "23px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
      mq1024: {
        raw: "screen and (max-width: 1200px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
