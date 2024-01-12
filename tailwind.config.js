/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        darkGray: "#344054",
        gray: "#475467",
        lightGray: "#667085",
        dark: "#111927",
        gray_500: "#6C737F",
      },
      backgroundColor: {
        purple: "#731EE2",
        gray: "#F9FAFB",
      },
      borderColor: {
        gray: "#EAECF0",
        gray_300: "#D2D6DB",
        gray_200: "#E5E7EB",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        DMSans: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        toggleShadow: [
          " 0px 1px 2px 0px #1018280F",
          " 0px 1px 3px 0px #1018281A",
        ],
        inputShadow: "0px 1px 2px 0px #1018280D",
      },
    },
  },
  plugins: [],
};
