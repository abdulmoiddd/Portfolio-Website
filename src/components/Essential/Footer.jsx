"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Beyond Code", href: "#beyond-code" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[var(--clr-surface)] pt-12 pb-8 overflow-hidden font-sans border-t border-[var(--clr-border)]">
      {/* Top Accent Gradient Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-[var(--clr-accent)] to-transparent opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Brand & Bio (Span 6) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <Link
              href="/"
              className="interactive relative font-black tracking-tight cursor-pointer flex items-center gap-2.5 group mb-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[var(--clr-accent)] flex items-center justify-center text-[var(--brand-charcoal)] font-mono font-black text-xs shadow-sm">
                AM
              </div>
              <span className="text-[var(--clr-ink)] font-black text-lg">
                Abdul Moid
              </span>
            </Link>

            <p className="text-[var(--clr-ink-muted)] text-xs sm:text-sm leading-relaxed mb-4 max-w-md">
              Full-Stack Software Engineer &amp; Technical Lead specializing in OpenAI Realtime WebRTC voice streaming, multi-tenant SaaS architectures, and high-performance web applications.
            </p>

            {/* Live Platform SLA Telemetry Chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--clr-surface-card)] border border-[var(--clr-border)] text-xs font-mono mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-[var(--clr-ink)] font-semibold">
                SYSTEM SLA: 99.9%
              </span>
              <span className="text-[var(--clr-ink-muted)]">• ALL PIPELINES OPERATIONAL</span>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/abdulmoiddd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="interactive w-8 h-8 rounded-lg border border-[var(--clr-border)] bg-[var(--clr-surface-card)] flex items-center justify-center text-[var(--clr-ink-muted)] hover:text-[var(--brand-charcoal)] hover:bg-[var(--clr-accent)] hover:border-[var(--clr-accent)] transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="https://github.com/abdulmoiddd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="interactive w-8 h-8 rounded-lg border border-[var(--clr-border)] bg-[var(--clr-surface-card)] flex items-center justify-center text-[var(--clr-ink-muted)] hover:text-[var(--brand-charcoal)] hover:bg-[var(--clr-accent)] hover:border-[var(--clr-accent)] transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="mailto:moidsekhry@gmail.com"
                aria-label="Direct Email"
                className="interactive w-8 h-8 rounded-lg border border-[var(--clr-border)] bg-[var(--clr-surface-card)] flex items-center justify-center text-[var(--clr-ink-muted)] hover:text-[var(--brand-charcoal)] hover:bg-[var(--clr-accent)] hover:border-[var(--clr-accent)] transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links (Span 3) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--clr-ink)] font-bold mb-3 pb-2 border-b border-[var(--clr-border)]">
              Navigation
            </h3>
            <ul className="space-y-1.5 text-xs font-mono text-[var(--clr-ink-muted)]">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[var(--clr-accent)] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[var(--clr-accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                      ›
                    </span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operations Center (Span 3) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--clr-ink)] font-bold mb-3 pb-2 border-b border-[var(--clr-border)]">
              Operations Center
            </h3>
            <div className="space-y-2 text-xs font-mono text-[var(--clr-ink-muted)]">
              <div>
                <span className="block text-[var(--clr-ink)] font-semibold">LOCATION</span>
                <span>Rawalpindi / Islamabad, PK</span>
              </div>
              <div>
                <span className="block text-[var(--clr-ink)] font-semibold">DIRECT INBOX</span>
                <span className="text-[var(--clr-accent)] font-semibold">moidsekhry@gmail.com</span>
              </div>
              <div>
                <span className="block text-[var(--clr-ink)] font-semibold">CURRENT FOCUS</span>
                <span>Multi-Tenant AI &amp; WebRTC SaaS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Footer Bar */}
        <div className="pt-6 border-t border-[var(--clr-border)] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[var(--clr-ink-muted)] gap-3">
          <p>© {currentYear} Abdul Moid. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="interactive flex items-center gap-1 hover:text-[var(--clr-accent)] transition-colors"
          >
            <span>BACK TO TOP</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
