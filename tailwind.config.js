/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enables toggling dark mode manually via a class or data-theme on HTML tag
  darkMode: ['class', '[data-theme="dark"]'], 
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        textMain: 'var(--text-primary)',
        textMuted: 'var(--text-secondary)',
        brand: 'var(--brand-accent)',
        brandVibrant: 'var(--primary-vibrant)',
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
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'yellow-gradient': 'var(--gradient-accent)',
        'yellow-text-gradient': 'var(--gradient-text)',
      },
      animation: {
        'blob-1': 'float-blob-1 16s ease-in-out infinite',
        'blob-2': 'float-blob-2 20s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
