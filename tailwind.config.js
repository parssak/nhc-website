const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        accent: {
          darkest: "#2D2D2D",
          dark: "#90a4ae",
          DEFAULT: "#0A5D70",
          darker: "#063840",
          hover: "#ED8C5F",
          light: "#F9B52F",
          light_hover: "#F9B52F",
          lightest: "#EBEFF0",
          "text-grey": "#8C8E8F",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
