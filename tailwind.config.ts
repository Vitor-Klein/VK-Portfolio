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
        'primary': '#FFD600',
        'secondary': '#E8D3A4',
        'terciary': '#BFAC87',
        'primary white': '#F9E19C',
        'texts': '#FFF7E0',
        'dark': '#1B1A1F',
      },
      fontFamily: {
        title: ['var(--font-shrikhand)'],
        body: ['var(--font-mplus-rounded)'],
      },
    },
  },
  plugins: [],
};
export default config;
