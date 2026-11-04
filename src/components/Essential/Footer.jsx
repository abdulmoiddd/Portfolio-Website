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
    <footer className="relative bg-[var(--background)] pt-20 pb-10 overflow-hidden font-sans border-t border-[var(--border-color)]/60">
      {/* Top Accent Gradient Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60"></div>

      {/* Cyber Mesh Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_100%_at_50%_100%,#000_20%,transparent_100%)] opacity-20 pointer-events-none z-0"></div>

      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-yellow-400/10 to-transparent blur-[120px] rounded-t-full pointer-events-none z-0"></div>

      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[9vw] font-black text-[var(--foreground)] opacity-[0.02] pointer-events-none select-none z-0 tracking-tighter whitespace-nowrap">
        ABDUL MOID
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand & Bio (Span 6) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <Link
              href="/"
              className="interactive relative text-2xl font-black tracking-tight cursor-pointer flex items-center gap-3 group mb-4"
            >
              <div className="text-[var(--primary)] group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">
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
              <span className="text-[var(--foreground)] font-black">
                Abdul
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 font-black">
                Moid
              </span>
            </Link>

            <p className="text-[var(--foreground-muted)] text-sm sm:text-base leading-relaxed mb-6 max-w-md font-light">
              Full-Stack Software Engineer & Technical Lead specializing in
              OpenAI Realtime WebRTC voice streaming, multi-tenant SaaS
              architectures, and high-performance web applications.
            </p>

            {/* Live Platform SLA Telemetry Chip */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[var(--foreground)] font-semibold">
                SYSTEM SLA: 99.9%
              </span>
              <span className="text-[var(--foreground-muted)]">• ALL PIPELINES OPERATIONAL</span>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/abdulmoiddd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="interactive w-10 h-10 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center text-[var(--foreground-muted)] hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
                className="interactive w-10 h-10 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center text-[var(--foreground-muted)] hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
                className="interactive w-10 h-10 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center text-[var(--foreground-muted)] hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links (Span 3) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--foreground)] font-bold mb-4 pb-2 border-b border-[var(--border-color)]/60">
              System Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-mono text-[var(--foreground-muted)]">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[var(--primary)] transition-colors flex items-center gap-2 group"
                  >
                    <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--primary)]">
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
            <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--foreground)] font-bold mb-4 pb-2 border-b border-[var(--border-color)]/60">
              Operations Center
            </h3>
            <div className="space-y-3 text-xs font-mono text-[var(--foreground-muted)]">
              <div>
                <span className="block text-[var(--foreground)] font-semibold">LOCATION</span>
                <span>Rawalpindi / Islamabad, Pakistan</span>
              </div>
              <div>
                <span className="block text-[var(--foreground)] font-semibold">DIRECT CONTACT</span>
                <span className="text-[var(--primary)] font-semibold">moidsekhry@gmail.com</span>
                <br />
                <span>+92 347 2539535</span>
              </div>
              <div>
                <span className="block text-[var(--foreground)] font-semibold">CURRENT FOCUS</span>
                <span>Multi-Tenant AI & WebRTC SaaS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Footer Bar */}
        <div className="pt-8 border-t border-[var(--border-color)]/60 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[var(--foreground-muted)] gap-4">
          <p>© {currentYear} Abdul Moid. All Rights Reserved.</p>
          <p>Engineered with Next.js, Framer Motion & Tailwind</p>
          <button
            onClick={scrollToTop}
            className="interactive flex items-center gap-1.5 hover:text-[var(--primary)] transition-colors"
          >
            <span>BACK TO TOP</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
