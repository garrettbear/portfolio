import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        agrandir: ['Agrandir', 'sans-serif'],
        biotif: ['Biotif', 'sans-serif'],
        inter: ['Inter, sans-serif'],
      },
      fontSize: {
        'xs': 'calc(0.8vmin + 0.2rem)',
        'sm': 'calc(1vmin + 0.25rem)',
        'base': 'calc(1.2vmin + 0.3rem)',
        'lg': 'calc(1.5vmin + 0.4rem)',
        'xl': 'calc(2vmin + 0.5rem)',
        '2xl': 'calc(2.5vmin + 0.6rem)',
        '3xl': 'calc(4.05vmin + 0.97rem)'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
