import type { Config } from "tailwindcss";
import scrollbar from "tailwind-scrollbar";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-dark": "var(--color-bg-dark)",
        "bg-light": "var(--color-bg-light)",
        "text-dark": "var(--color-text-dark)",
        "text-light": "var(--color-text-light)",
        "title-dark": "var(--color-title-dark)",
        "title-light": "var(--color-title-light)",
        "accent-dark": "var(--color-accent-dark)",
        "accent-light": "var(--color-accent-light)",
      }
    }
  },
  darkMode: 'class', 
  plugins: [scrollbar]
};
export default config;
