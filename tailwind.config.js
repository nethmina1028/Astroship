/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors:{
        primary: "#FFFFFF",
        secondary: "#F9FAFB",
        accent: "#7E3AF2",
        dark: "#111928",
        gray:"#6B7280"
      },
    },
  },
  plugins: [],
}

