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
      "grey-200": "#D9D9D9",
    },
    extend: {
      gridTemplateColumns: {
        3: "repeat(3, minmax(360px, 1fr))",
      },
      fontFamily: {
        latoBlack: "LatoBlack",
        latoRegular: "LatoRegular",
        ralewayMedium: "RalewayMedium",
      },
      backgroundImage: {
        "cta-bg": "url('/bg-cta.png')",
        "flowers-bg": "url('/flowers.svg')",
        "flower-bg": "url('/flower.svg')",
        "hero-bg": "url('/hero.svg')",
      },
    },
  },
  plugins: [],
};
