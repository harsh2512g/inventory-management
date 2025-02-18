import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dgray: "#262626",
        mgray: "#343333",
        lightgray: "#E4E4E4",
        bordergray: "#D2D4DA",
        disabledgray: "rgb(223 223 223)",
        blue: "#148EFF",
        //  blackcolor: "#000000",
        blackcolor: "#121212",
        whitecolor: "#FFFFFF",
        graycolor: "#5D6B98",
        placeholdergray: "#0000001A",

        sidebargray: "#FFFFFF1A",
        //new
        nwhitecolor: "#FFFFFF",
        nblackcolor: "#000000",
        nblueborder: "#84CAFF",
        ngraycool: "#EFF1F5",
        ntextgraycool: "#5D6B98",
        nbluecolor: "#148EFF",
        ngraycolor: "#5D6B98",
        nplaceholdergray: "#0000001A",
        nsidebargray: "#FFFFFF1A",
        nsidebaricon: "#2E90FA",
        xgray25: "#FCFCFD",
        xgray50: "#F9F9FB",
        xgray100: "#EFF1F5",
        xgray200: "#DCDFEA",
        xgray300: "#B9C0D4",
        xgray400: "#7D89B0",
        xgray500: "#5D6B98",
        xgray600: "#4A5578",
        xgray700: "#404968",
        xgray800: "#30374F",
        xgray900: "#111322",
        xgray950: "#0E101B",
      },
      backgroundImage: {
        bluegradient: "linear-gradient(360deg, #0D2D7E 0%, #1852E4 100%)",
        oldblackcolor: "linear-gradient(120deg, #0a1430 0%, #14203d 100%)",
        // blackcolor: "linear-gradient(360deg, #0D2D7E 0%, #1852E4 100%)",
        blackcolor: "linear-gradient(120deg, #0a0f1d 0%, #0f1629 100%)",
      },
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        shadowsm: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        blueshadowborder: "0px 4px 16px 0px #84CAFF4D",
      },
      animation: {
        shimmer: "shimmer 1.5s infinite linear",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
