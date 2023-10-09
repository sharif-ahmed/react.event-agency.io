/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerBg: "url('./assets/img/banner_2.jpg')",
        bannerBG_With_Overlay:
          "linear-gradient(rgba(17, 17, 17, 0.08),rgba(17, 17, 17, 0.8)), url(./assets/img/banner_2.jpg)",
      },
    },
  },
  plugins: [require("daisyui")],
};
