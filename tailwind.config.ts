import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#32393F',
        'secondary': '#EDF1EA',
        'background-destaq': '#6A6059',
        'midia': '#E2AF53',
      },
      fontFamily: {
        primary: ['var(--font-titillium_web)'],
        primaryBold: ['var(--font-titillium_web_bold)']
      },
      keyframes: {
        'one-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '20%': { transform: 'translateY(-20px)' },
          '40%': { transform: 'translateY(10px)' },
          '60%': { transform: 'translateY(-10px)' },
          '80%': { transform: 'translateY(5px)' },
        },
        orbit: {
          "0%": {
            transform: "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        'one-bounce': 'one-bounce 2s ease-in-out',
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
