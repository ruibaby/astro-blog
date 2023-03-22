/** @type {import('tailwindcss').Config} */
const { Icons } = require("tailwindcss-plugin-icons");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    Icons(() => ({
      tabler: {
        includeAll: true,
      },
      mdi: {
        includeAll: true,
      },
    })),
  ],

  safelist: [
    "i-mdi-rss",
    "i-mdi-twitter",
    "i-mdi-facebook",
    "i-mdi-instagram",
    "i-mdi-dribbble",
    "i-mdi-sina-weibo",
    "i-mdi-qqchat",
    "i-mdi-telegram",
    "i-mdi-email",
    "i-mdi-github",
  ],
};
