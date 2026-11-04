"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/pages/layout";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Optional: Close mobile menu when scrolling for a cleaner experience
      if (window.scrollY > 20) setIsMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    // { name: "Beyond Code", href: "#beyond-code" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-[100] transition-all duration-500 ease-out ${
        isScrolled ? "pt-4 sm:pt-6" : "pt-6 sm:pt-8"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        {/* ── MAIN NAVBAR WRAPPER ── */}
        <div
          className={`relative flex items-center justify-between transition-all duration-500 ease-out ${
            isScrolled
              ? "mx-auto max-w-5xl bg-[var(--clr-surface-card)] backdrop-blur-xl border border-[var(--clr-border)] rounded-full py-2.5 px-3 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
              : "bg-transparent border-transparent py-2 px-2 rounded-none"
          }`}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 pl-2 sm:pl-3"
          >
            <div className="w-8 h-8 rounded-full bg-[var(--clr-accent)] flex items-center justify-center text-[var(--brand-charcoal)] font-mono font-bold text-xs shadow-sm group-hover:scale-105 transition-transform duration-300">
              AM
            </div>
            <span className="font-bold tracking-tight text-[var(--clr-ink)] text-sm sm:text-base md:text-lg">
              Abdul Moid
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="px-4 py-2 rounded-full text-[13px] font-medium text-[var(--clr-ink-muted)] hover:text-[var(--clr-ink)] hover:bg-[var(--clr-surface-sub)] transition-all duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2 sm:gap-3 pr-1 sm:pr-2">
            
           

            {/* Theme Toggle Button — Mobile / Tablet Only (Desktop uses the ID Badge Pull-Down) */}
            <button
              onClick={toggleTheme}
              className="flex lg:hidden items-center justify-center w-9 h-9 rounded-full bg-[var(--clr-surface-sub)] text-[var(--clr-ink)] hover:bg-[var(--clr-border)] hover:scale-105 transition-all duration-200"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                /* Moon Icon */
                <svg className="w-4 h-4 fill-current text-[var(--clr-ink)]" viewBox="0 0 24 24">
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              ) : (
                /* Sun Icon */
                <svg className="w-4 h-4 fill-none stroke-current text-[var(--clr-accent)]" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              )}
            </button>

            {/* Direct Connect CTA - Solid High Contrast */}
            <Link
              href="#contact"
              className="hidden sm:flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-[var(--clr-ink)] text-[var(--clr-surface)] text-xs font-bold tracking-wide hover:scale-105 hover:shadow-[0_4px_14px_rgba(0,0,0,0.1)] transition-all duration-200"
            >
              <span>Connect</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full bg-[var(--clr-surface-sub)] text-[var(--clr-ink)] hover:bg-[var(--clr-border)] transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ── MOBILE DROPDOWN MENU ── */}
        <div
          className={`lg:hidden absolute top-full left-4 right-4 mt-3 transition-all duration-300 ease-in-out origin-top ${
            isMobileMenuOpen
              ? "opacity-100 scale-y-100 translate-y-0 visible pointer-events-auto"
              : "opacity-0 scale-y-95 -translate-y-4 invisible pointer-events-none"
          }`}
        >
          <div className="p-2 bg-[var(--clr-surface-card)] backdrop-blur-2xl border border-[var(--clr-border)] rounded-2xl shadow-2xl flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-[var(--clr-ink-muted)] hover:text-[var(--clr-ink)] hover:bg-[var(--clr-surface-sub)] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 mt-1 border-t border-[var(--clr-border)] flex items-center justify-between px-3 py-2">
              <span className="text-xs font-mono text-[var(--clr-ink-muted)] uppercase">Theme Preference</span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--clr-surface-sub)] border border-[var(--clr-border)] text-xs font-mono font-bold text-[var(--clr-ink)] hover:border-[var(--clr-accent)] transition-colors"
              >
                <span>{theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}</span>
              </button>
            </div>
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 px-4 py-3 rounded-xl bg-[var(--clr-ink)] text-[var(--clr-surface)] text-center text-sm font-bold shadow-md"
            >
              Connect →
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}