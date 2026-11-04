/**
 * ThemeProvider + RootLayout
 *
 * Responsibilities:
 *  1. Read the saved theme preference from localStorage (SSR-safe)
 *  2. Apply `data-theme` to <html> before first paint — eliminates flash
 *  3. Expose a `useTheme()` hook so any component can read/write the theme
 *     without prop-drilling or a heavy Context library
 *  4. Render global overlay layers: LoadingScreen, then children
 *
 * Color system is 100% CSS-var-driven — no inline style injection needed.
 */

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import LoadingScreen from "@/components/Essential/LoadingScreen";

// ─── Theme Context ─────────────────────────────────────────────────────────────
const ThemeContext = createContext({
  theme: "dark",           // default
  toggleTheme: () => {},
  setTheme: () => {},
});

/**
 * Hook — consume theme state anywhere in the tree.
 * Returns { theme, toggleTheme, setTheme }
 */
export function useTheme() {
  return useContext(ThemeContext);
}

// ─── Helper: apply theme to DOM ───────────────────────────────────────────────
function applyTheme(theme) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
  // Keep the <meta theme-color> in sync for mobile browser chrome
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute(
      "content",
      theme === "dark" ? "#292C31" : "#F2F0E7"
    );
  }
}

// ─── ThemeProvider ────────────────────────────────────────────────────────────
function ThemeProvider({ children }) {
  /**
   * Initialise from localStorage synchronously on the client.
   * Falls back to "dark" (Charcoal Black background — the hero aesthetic).
   * The LoadingScreen component runs for ~1.35 s, which provides a natural
   * window for the theme to be applied before any content is visible.
   */
  const [theme, setThemeState] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  // Apply DOM attribute whenever theme state changes
  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const setTheme = useCallback((t) => {
    setThemeState(t);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ─── RootLayout ───────────────────────────────────────────────────────────────
/**
 * RootLayout wraps every page.  It:
 *  - Provides the ThemeProvider context
 *  - Renders the LoadingScreen splash (1.35 s, then exits via AnimatePresence)
 *  - Renders the page content in a positioned <main>
 *
 * The outer <div> carries the Bento shell classes:
 *  `min-h-screen` — full viewport height guarantee
 *  `bg-[var(--clr-surface)]` — always matches active theme token
 *  `text-[var(--clr-ink)]`   — same
 *  `overflow-x-hidden`       — prevent horizontal scroll from animated elements
 */
export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      {/* Loading Splash — exits after ~1.35 s via Framer Motion AnimatePresence */}
      <LoadingScreen />

      {/* Page Shell */}
      <div
        className="
          relative
          min-h-screen
          bg-[var(--clr-surface)]
          text-[var(--clr-ink)]
          font-sans
          overflow-x-hidden
          scroll-smooth
          transition-colors
          duration-400
        "
      >
        {/*
          Global Ambient Mesh Background
          ─ Two large blurred blobs that drift slowly.
          ─ pointer-events-none ensures they never intercept clicks.
          ─ aria-hidden keeps them out of the accessibility tree.
        */}
        <div
          aria-hidden="true"
          className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        >
          {/* Blob 1 — top-left warm Cyber Yellow */}
          <div
            className="
              absolute -top-[20%] -left-[10%]
              w-[55vw] h-[55vw] max-w-[700px] max-h-[700px]
              rounded-full
              animate-blob-1
            "
            style={{
              background:
                "radial-gradient(circle, rgba(245,230,35,0.10) 0%, rgba(202,202,96,0.06) 40%, transparent 70%)",
              filter: "blur(80px)",
              willChange: "transform",
            }}
          />

          {/* Blob 2 — bottom-right deeper yellow */}
          <div
            className="
              absolute -bottom-[25%] -right-[10%]
              w-[50vw] h-[50vw] max-w-[640px] max-h-[640px]
              rounded-full
              animate-blob-2
            "
            style={{
              background:
                "radial-gradient(circle, rgba(202,202,96,0.08) 0%, rgba(245,230,35,0.04) 40%, transparent 70%)",
              filter: "blur(90px)",
              willChange: "transform",
            }}
          />

          {/* Dot-grid architectural overlay */}
          <div className="absolute inset-0 bg-dot-grid opacity-100" />
        </div>

        {/* Page content (Navbar + sections + Footer) */}
        <main className="relative z-10">{children}</main>
      </div>
    </ThemeProvider>
  );
}
