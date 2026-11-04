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
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Beyond Code", href: "#beyond-code" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-[100] transition-all duration-300 ${
        isScrolled ? "pt-2.5 sm:pt-3.5" : "pt-4 sm:pt-5"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-300 ${
          isScrolled ? "max-w-6xl px-4" : "max-w-7xl px-4 sm:px-6"
        }`}
      >
        <div
          className={`relative flex justify-between items-center transition-all duration-300 ${
            isScrolled
              ? "bg-[var(--clr-surface-card)] backdrop-blur-xl border border-[var(--clr-border)] rounded-2xl py-2 px-4 sm:px-5 shadow-lg"
              : "bg-[var(--clr-surface-card)]/80 backdrop-blur-md border border-[var(--clr-border)] rounded-2xl py-2.5 px-4 sm:px-6"
          }`}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            className="interactive relative font-black tracking-tight cursor-pointer flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--clr-accent)] flex items-center justify-center text-[var(--brand-charcoal)] font-mono font-black text-xs shadow-[0_0_12px_rgba(245,230,35,0.4)] group-hover:scale-105 transition-transform">
              AM
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[var(--clr-ink)] font-black text-base sm:text-lg tracking-tight">
                Abdul Moid
              </span>
              <span className="hidden md:inline-block px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-[var(--clr-surface-sub)] text-[var(--clr-ink-muted)] border border-[var(--clr-border)]">
                AI &amp; FULL-STACK
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center space-x-1 font-mono text-xs">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="interactive px-3 py-1.5 rounded-lg text-[var(--clr-ink-muted)] hover:text-[var(--clr-ink)] hover:bg-[var(--clr-surface-sub)] transition-colors duration-150 flex items-center"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Telemetry Pill */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--clr-surface-sub)] border border-[var(--clr-border)] text-[10px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--clr-accent)]" />
              <span className="text-[var(--clr-ink)] font-semibold">AVAILABLE</span>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="interactive flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[var(--clr-surface-sub)] border border-[var(--clr-border)] text-[var(--clr-ink)] hover:border-[var(--clr-accent)] transition-colors"
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

            {/* Direct Connect CTA */}
            <Link
              href="#contact"
              className="interactive inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-lg bg-[var(--clr-accent)] text-[var(--brand-charcoal)] font-mono font-bold text-xs shadow-sm hover:shadow-[0_0_16px_rgba(245,230,35,0.4)] transition-all"
            >
              <span>CONNECT</span>
              <span className="hidden sm:inline">→</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="interactive lg:hidden flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--clr-surface-sub)] border border-[var(--clr-border)] text-[var(--clr-ink)]"
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

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 rounded-xl bg-[var(--clr-surface-card)] border border-[var(--clr-border)] shadow-xl flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-mono text-[var(--clr-ink-muted)] hover:text-[var(--clr-ink)] hover:bg-[var(--clr-surface-sub)]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
