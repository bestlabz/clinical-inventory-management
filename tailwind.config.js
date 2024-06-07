const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        serif: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        bottom:
          "0 5px 6px -7px rgba(0, 0, 0, 0.6), 0 2px 4px -5px rgba(0, 0, 0, 0.06)",
      },
      screens: {
        "2xl": "1440px",
        xl: "1280px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
        xs: "420px",
        xss: "320px",
        mobile: "375px"
      },
      colors: {
       primary_color: "#171717",
       navbar_activate_color: "#545D5F",
       navbar_color: "#293332",
       green_light: "#17B26A",
       green_dark: "#069B56",
       light_gray: "#E8E8E8",
       blue: "#0073EE",
       light_purple: "#E9D7FE",
       dark_purple: "#6941C6",
       pagination_text_color: "#344054",
       orange_light: "#F9DBAF",
       orange_dark: "#F79009"
       
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
  variants: {
    display: ["group-hover"],
  },
};

module.exports = {
  ...config,
};
