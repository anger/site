const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        serif: ["Newsreader", ...defaultTheme.fontFamily.serif],
      },
      typography: {
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};

module.exports = config;
