import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Default theme is explicitly 'light'
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Default to 'light' mode
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Beyond Code", href: "#beyond-code" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? "pt-3.5" : "pt-6"
        }`}
      >
        <div
          className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled ? "max-w-6xl px-4" : "max-w-7xl px-6"
          }`}
        >
          <div
            className={`relative flex justify-between items-center transition-all duration-700 ${
              isScrolled
                ? "bg-[var(--card-bg)]/90 backdrop-blur-2xl border border-[var(--border-color)] rounded-full py-2.5 px-6 shadow-xl shadow-amber-500/5"
                : "bg-transparent py-2 border-transparent rounded-none px-0"
            }`}
          >
            {/* Brand Logo */}
            <Link
              href="/"
              className="interactive relative text-2xl font-black tracking-tight cursor-pointer z-50 flex items-center gap-2.5 group"
            >
              <div className="text-[var(--primary)] transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(250,204,21,0.5)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7 text-amber-500 dark:text-yellow-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[var(--foreground)] font-black tracking-tight">
                  Abdul
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 font-black">
                  Moid
                </span>

                {/* Live Status Indicator */}
                <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[var(--background-subtle)] border border-[var(--border-color)] ml-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-mono font-semibold uppercase text-emerald-600 dark:text-emerald-400">
                    OPEN TO WORK
                  </span>
                </div>
              </div>
            </Link>

            {/* Navigation Links (Desktop) */}
            <ul className="hidden md:flex items-center space-x-1 lg:space-x-3 text-[var(--foreground-muted)] font-medium z-50">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="interactive relative px-3 py-1.5 text-xs lg:text-sm font-mono tracking-wide transition-colors duration-300 group flex items-center"
                  >
                    <span className="text-amber-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 mr-0.5">
                      [
                    </span>
                    <span className="group-hover:text-[var(--foreground)] transition-colors">
                      {link.name}
                    </span>
                    <span className="text-yellow-400 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ml-0.5">
                      ]
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right Action Area */}
            <div className="flex items-center gap-2 sm:gap-3 z-50">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="interactive relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--background-subtle)] border border-[var(--border-color)] text-[var(--foreground-muted)] hover:text-[var(--primary)] hover:border-[var(--primary-vibrant)] transition-all duration-300 focus:outline-none overflow-hidden"
                aria-label="Toggle Theme"
              >
                {/* Sun icon for light mode */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className={`absolute w-4 h-4 transition-all duration-500 transform ${
                    theme === "light"
                      ? "opacity-100 rotate-0 scale-100 text-amber-500"
                      : "opacity-0 -rotate-90 scale-50"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>

                {/* Moon icon for dark mode */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className={`absolute w-4 h-4 transition-all duration-500 transform ${
                    theme === "dark"
                      ? "opacity-100 rotate-0 scale-100 text-yellow-300"
                      : "opacity-0 rotate-90 scale-50"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              </button>

              {/* Contact CTA */}
              <a
                href="#contact"
                className="interactive hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-white dark:text-zinc-950 text-xs font-mono font-bold tracking-wide transition-all duration-300 shadow-[0_0_15px_rgba(250,204,21,0.4)] hover:shadow-[0_0_25px_rgba(250,204,21,0.65)] hover:-translate-y-0.5"
              >
                <span>CONNECT</span>
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="interactive md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-[var(--background-subtle)] border border-[var(--border-color)] text-[var(--foreground)] hover:text-[var(--primary)] transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <div className="flex flex-col gap-1.5 w-4">
                    <span className="w-full h-0.5 bg-current rounded-full transition-all duration-300"></span>
                    <span className="w-3/4 h-0.5 bg-current rounded-full transition-all duration-300"></span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden absolute top-[110%] left-4 right-4 bg-[var(--card-bg)]/95 backdrop-blur-3xl border border-[var(--border-color)] rounded-2xl shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top overflow-hidden ${
            isMobileMenuOpen
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col p-6 space-y-2 text-[var(--foreground)] font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-amber-400/10 text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors duration-300 text-sm font-mono group"
                >
                  <span>{link.name}</span>
                  <span className="text-amber-500 text-xs">→</span>
                </Link>
              </li>
            ))}
            <li className="pt-3 border-t border-[var(--border-color)]/50">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex justify-center items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-white dark:text-zinc-950 font-mono text-xs font-bold rounded-xl shadow-md transition-all duration-300"
              >
                INITIALIZE CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
