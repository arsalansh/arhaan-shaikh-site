import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#EAE8E0",
        "cream-dark": "#DEDBCF",
        brand: "#D4322E",
        "brand-dark": "#B02320",
        ink: "#171717",
      },
      fontFamily: {
        sans: ['"Inter Tight"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
