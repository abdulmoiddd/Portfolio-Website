/** @type {import('tailwindcss').Config} */
module.exports = {
  // Dark mode: driven entirely by data-theme attribute, same as before.
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // ─── Design Token Color Aliases ─────────────────────────────────────────
      // All values reference CSS custom properties so light/dark switching is
      // handled entirely at the CSS layer — zero JS re-renders needed.
      colors: {
        // Core surfaces
        surface:        'var(--clr-surface)',
        'surface-sub':  'var(--clr-surface-sub)',
        'surface-card': 'var(--clr-surface-card)',

        // Text
        ink:            'var(--clr-ink)',
        'ink-muted':    'var(--clr-ink-muted)',

        // Brand palette (always exact spec values)
        'cyber':        '#F5E623',   // Cyber Yellow — primary accent
        'yellow':       '#CACA60',   // Muted yellow — borders, secondary
        'charcoal':     '#292C31',   // Charcoal Black
        'off-white':    '#F2F0E7',   // Warm Off-White
        'neutral':      '#A6A6A6',   // Neutral Gray

        // Semantic shortcuts (resolved at runtime via CSS vars)
        accent:         'var(--clr-accent)',
        'accent-sub':   'var(--clr-accent-sub)',
        border:         'var(--clr-border)',
        'border-hover': 'var(--clr-border-hover)',
      },

      // ─── Typography ──────────────────────────────────────────────────────────
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },

      // ─── Bento Grid Spacing ──────────────────────────────────────────────────
      // The entire layout is built on a 12-column grid with a fixed gap token.
      // Individual section grids use subsets of these column counts.
      gap: {
        bento: 'var(--bento-gap)',
      },
      borderRadius: {
        bento: 'var(--bento-radius)',
        'bento-sm': 'var(--bento-radius-sm)',
      },

      // ─── Background Gradients ────────────────────────────────────────────────
      backgroundImage: {
        'cyber-glow':    'radial-gradient(circle, rgba(245,230,35,0.18) 0%, transparent 70%)',
        'mesh-dark':     'radial-gradient(at 0% 0%, rgba(245,230,35,0.10) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(202,202,96,0.08) 0px, transparent 50%)',
        'mesh-light':    'radial-gradient(at 0% 0%, rgba(245,230,35,0.08) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(202,202,96,0.06) 0px, transparent 50%)',
        'grid-line':     'linear-gradient(to right, var(--clr-grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--clr-grid-line) 1px, transparent 1px)',
      },

      // ─── Animations ──────────────────────────────────────────────────────────
      // Only smooth, non-blinking keyframes. Framer Motion handles most motion;
      // these CSS animations are for ambient background effects only.
      keyframes: {
        'blob-drift-1': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%':       { transform: 'translate(28px, -36px) scale(1.07)' },
          '66%':       { transform: 'translate(-22px, 18px) scale(0.95)' },
        },
        'blob-drift-2': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%':       { transform: 'translate(-32px, 30px) scale(0.96)' },
          '66%':       { transform: 'translate(26px, -22px) scale(1.05)' },
        },
        'mesh-shift': {
          '0%, 100%': { backgroundPosition: '0% 0%, 100% 100%' },
          '50%':       { backgroundPosition: '5% 5%, 95% 95%' },
        },
      },
      animation: {
        'blob-1':     'blob-drift-1 18s ease-in-out infinite',
        'blob-2':     'blob-drift-2 22s ease-in-out infinite',
        'mesh-shift': 'mesh-shift 30s ease-in-out infinite',
      },

      // ─── Perspective (for 3D Bento hover tilts) ──────────────────────────────
      perspective: {
        '800':  '800px',
        '1200': '1200px',
        '2000': '2000px',
      },
    },
  },
  plugins: [],
};
