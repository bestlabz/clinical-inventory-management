const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/BackgroundFrame.png')", 
        'clinic-bg': "url('/ClinicImage.png')", 

      },

      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
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
       primary_color: "#0073EE",
       text_blue_color: "#1C01FF",
       navbar_activate_color: "#545D5F",
       navbar_color: "#293332",
       green_light: "#17B26A",
       green_dark: "#069B56",
       light_gray: "#E8E8E8",
       blue: "#0073EE",
       light_purple: "#f0e5fd",
       dark_purple: "#6941C6",
       pagination_text_color: "#344054",
       orange_light: "#F9DBAF",
       orange_dark: "#F79009",
       secondary_text: "#8A8A8A"
       
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
