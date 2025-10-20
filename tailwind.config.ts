import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#000000",
          secondary: "#1C1C1E",
          tertiary: "#2C2C2E",
        },
        surface: {
          DEFAULT: "#1C1C1E",
          elevated: "#2C2C2E",
          overlay: "#3A3A3C",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#EBEBF5",
          tertiary: "#EBEBF599",
        },
        accent: {
          blue: "#0A84FF",
          green: "#30D158",
          orange: "#FF9F0A",
          red: "#FF453A",
          purple: "#BF5AF2",
        },
        ton: {
          blue: "#0088CC",
          light: "#31A6DE",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        'dark': '0 10px 40px rgba(0, 0, 0, 0.5)',
        'dark-lg': '0 20px 60px rgba(0, 0, 0, 0.7)',
      }
    },
  },
  plugins: [],
};

export default config;
