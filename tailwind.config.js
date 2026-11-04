/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enables toggling dark mode manually via a class on the HTML tag
  darkMode: ['class', '[data-theme="dark"]'], 
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mapping Tailwind classes to CSS variables
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        textMain: 'var(--text-primary)',
        textMuted: 'var(--text-secondary)',
        brand: 'var(--brand-accent)',
        brandGlow: 'var(--primary-glow)',
        accentBlue: 'var(--accent-blue)',
        accentPurple: 'var(--accent-purple)',
        accentSuccess: 'var(--success)',
        accentWarning: 'var(--warning)',
        cardBg: 'var(--card-bg)',
        cardBgElevated: 'var(--card-bg-elevated)',
        borderColor: 'var(--border-color)',
        borderColorHover: 'var(--border-color-hover)',
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
