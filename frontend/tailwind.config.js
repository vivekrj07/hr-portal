/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "10p": "10px",
      },
    },
    fontFamily: {
      sans: ["Lexend", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      dark: "#16151C",
      white: "#FFF",
      light: "#D9E1E1",
      gray: "#A2A1A8",
      primary: {
        10: " rgba(113, 82, 243, 0.10)",
        100: "#E6E2F8",
        200: "#CEC4F6",
        300: "#B2A2F9",
        400: "#9178FA",
        500: "#7152F3",
        600: "#5D3DE7",
        700: "#4F31D0",
        800: "#3517B4",
        900: "#250C92",
      },
      secondary: {
        100: "#E1F1BC",
        200: "CEE993",
        300: "#BCDE6B",
        400: "#AFD751",
        500: "#A3D139",
        600: "#97BD33",
        700: "#88A52A",
        800: "#798D21",
        900: "#626615",
      },
      tertiary: {
        100: "#F0B0D9",
        200: "#E67BC2",
        300: "#D846AB",
        400: "#CD0D9B",
        500: "#B21589",
        600: "#AF0A87",
        700: "#9B0982",
        800: "#8A087C",
        900: "#6C0772",
      },
    },
  },
  plugins: [],
};
