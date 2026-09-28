/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enables toggling dark mode manually via a class on the HTML tag
  darkMode: 'class', 
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mapping Tailwind classes (e.g., 'bg-primary') to your CSS variables
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        textMain: 'var(--text-primary)',
        textMuted: 'var(--text-secondary)',
        brand: 'var(--brand-accent)',
      },
    },
  },
  plugins: [],
};