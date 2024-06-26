/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      textColor: {
        default: `var(--color-text)`,
        light: `var(--color-light-text)`,
        dark: `var(--color-dark-text)`,
      },
      backgroundColor: {
        default: `var(--color-background)`,
        light: `var(--color-light-background)`,
        dark: `var(--color-dark-text)`,
        border: `var(--color-border)`,
      },
      borderColor: {
        default: `var(--color-border)`,
      },
    },
  },
  plugins: [],
};
