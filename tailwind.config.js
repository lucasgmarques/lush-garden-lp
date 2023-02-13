/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "green-500": "#337A5B",
      "green-900": "#285A43",
      "dark-900": "#121212",
      white: "#ffffff",
      "grey-100": "#F8F8F8",
    },
    extend: {
      fontFamily: {
        latoBlack: "LatoBlack",
        latoRegular: "LatoRegular",
        ralewayMedium: "RalewayMedium",
      },
      backgroundImage: {
        plantBg: "url('/public/plantBg.svg')",
      },
    },
  },
  plugins: [],
};
