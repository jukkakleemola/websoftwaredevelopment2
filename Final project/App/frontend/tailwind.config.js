/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Figma värit, esim. brand ja tumma tausta
      colors: {
        brand: {
          DEFAULT: "#0F4C75",
          dark: "#0A3756",
          light: "#3282B8",
        },
        darkbg: "#1B1B1B",
      },
      // Lisää halutessasi fontteja
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
