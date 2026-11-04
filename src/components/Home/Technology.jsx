"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Official Tech Stack from Abdul Moid's Resume with brand accents and roles
const TECH_LIST = [
  {
    name: "OpenAI Realtime",
    category: "AI & Voice",
    role: "WebRTC & Vision",
    color: "#10A37F",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M22.28 10.37a5.53 5.53 0 0 0-.44-4.27 5.68 5.68 0 0 0-5.18-2.92 5.58 5.58 0 0 0-2.45.57 5.6 5.6 0 0 0-4.14-1.85 5.68 5.68 0 0 0-5.46 4.07 5.54 5.54 0 0 0-3.3 2.4 5.65 5.65 0 0 0-.74 4.41 5.54 5.54 0 0 0 .44 4.27 5.68 5.68 0 0 0 5.18 2.92c.84 0 1.67-.2 2.45-.57a5.6 5.6 0 0 0 4.14 1.85 5.68 5.68 0 0 0 5.46-4.07 5.54 5.54 0 0 0 3.3-2.4 5.65 5.65 0 0 0 .74-4.41Zm-8.46 10.15a4.08 4.08 0 0 1-2.46-.82l.14-.08 4.2-2.43a.79.79 0 0 0 .4-.69v-5.94l1.79 1.03a.08.08 0 0 1 .04.07v4.83a4.11 4.11 0 0 1-4.11 4.03Zm-8.5-3.69a4.08 4.08 0 0 1-.54-2.54c0-.4.07-.8.2-1.18l.14.09 4.2 2.42a.8.8 0 0 0 .8 0l5.14-2.97v2.07a.08.08 0 0 1-.03.07l-4.19 2.42a4.11 4.11 0 0 1-5.72-.36Zm-1.4-8.8a4.07 4.07 0 0 1 1.92-1.72v.17l-.01 4.85a.8.8 0 0 0 .4.69l5.14 2.97-1.8 1.04a.08.08 0 0 1-.07 0l-4.19-2.42a4.11 4.11 0 0 1-1.39-5.58Zm14.67 2.6-5.14-2.97 1.8-1.04a.08.08 0 0 1 .07 0l4.19 2.42a4.1 4.1 0 0 1 1.92 3.86 4.08 4.08 0 0 1-.53 1.72v-.17l.01-4.85a.8.8 0 0 0-.4-.69l-1.92-1.11v2.83Zm2.28 4.77a4.08 4.08 0 0 1-.2 1.18l-.14-.09-4.2-2.42a.8.8 0 0 0-.8 0l-5.14 2.97V14.9a.08.08 0 0 1 .03-.07l4.19-2.42a4.11 4.11 0 0 1 6.26 3.9Zm-9.98-3.35-2.05-1.18 2.05-1.19 2.06 1.19-2.06 1.18Z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    category: "Full-Stack",
    role: "SSR & Architecture",
    color: "#ECEEF2",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm5.4 17.5-6.8-8.85v8.85H9V6.5h1.8l6.8 8.85V6.5h1.6v11h-1.8Z" />
      </svg>
    ),
  },
  {
    name: "Gemini API",
    category: "LLM Systems",
    role: "Multimodal AI",
    color: "#3DA5FF",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24Z" />
      </svg>
    ),
  },
  {
    name: "React & Native",
    category: "Frontend & Mobile",
    role: "Web & Cross-Platform",
    color: "#61DAFB",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0-7.5C6.5 2 2 4.7 2 8s4.5 6 10 6 10-2.7 10-6-4.5-6-10-6Zm0 10.5c-4.7 0-8.5-2-8.5-4.5S7.3 3.5 12 3.5s8.5 2 8.5 4.5-3.8 4.5-8.5 4.5Zm-8.7 4.1c-2.3 4-1.2 7.7 2.4 9.8 3.7 2.1 8.5.8 10.8-3.2 2.3-4 1.2-7.7-2.4-9.8-3.7-2.1-8.5-.8-10.8 3.2Zm1.5.8c1.9-3.4 5.9-4.5 9-2.7s3.8 5.7 1.9 9.1c-1.9 3.4-5.9 4.5-9 2.7-3.2-1.8-3.8-5.7-1.9-9.1Zm17.4-4.9c-2.3-4-7.1-5.3-10.8-3.2-3.7 2.1-4.8 5.8-2.4 9.8 2.3 4 7.1 5.3 10.8 3.2 3.6-2.1 4.7-5.8 2.4-9.8Zm-1.5.9c1.9 3.4 1.3 7.3-1.9 9.1-3.1 1.8-7.1.7-9-2.7-1.9-3.4-1.3-7.3 1.9-9.1 3.1-1.8 7.1-.7 9 2.7Z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    category: "Backend",
    role: "REST APIs & Services",
    color: "#68A063",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12 2 3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2Zm-1 15.7-5.5-3.2v-6.3L11 5.1v12.6Zm2 0V5.1l5.5 3.1v6.3L13 17.7Z" />
      </svg>
    ),
  },
  {
    name: "Firebase",
    category: "Cloud Database",
    role: "RTDB & Auth",
    color: "#FFA000",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="m4.2 17.8 2.5-15.6c.1-.4.5-.6.9-.4l3.7 7-7.1 9Zm8.2-5.4-3.1-6c-.2-.4-.8-.4-1 0L2.2 18.2l10.2-5.8Zm8.3 4.8L18.6 3.6c-.1-.5-.7-.6-1-.3L3.1 19.3l8.6 4.8c.6.3 1.3.3 1.9 0l7.1-4.9Z" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    category: "Database",
    role: "MERN Stack",
    color: "#13AA52",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12 24c-.3 0-.6-.1-.8-.3-1.6-1.4-6.2-5.9-6.2-12.7C5 4.8 8.1 1.2 11.5.1c.3-.1.7-.1 1 0 3.4 1.1 6.5 4.7 6.5 10.9 0 6.8-4.6 11.3-6.2 12.7-.2.2-.5.3-.8.3zm0-21.7c-2.4 1-4.8 4-4.8 8.7 0 4.8 3.3 8.6 4.8 10 1.5-1.4 4.8-5.2 4.8-10 0-4.7-2.4-7.7-4.8-8.7z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "UI Styling",
    role: "Design Tokens",
    color: "#38BDF8",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12 6c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8C15 11.8 16.6 13.5 20.4 13.5c3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8C17.4 7.7 15.8 6 12 6ZM3.6 13.5c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8C6.6 19.3 8.2 21 12 21c3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8-1.3-1.3-2.9-3-6.7-3Z" />
      </svg>
    ),
  },
  {
    name: "Framer Motion",
    category: "Animation",
    role: "Physics & Interaction",
    color: "#FF3B30",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
      </svg>
    ),
  },
  {
    name: "Make.com",
    category: "Workflows",
    role: "Pipelines & Webhooks",
    color: "#6D28D9",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm7.8 16.5L12 21.1l-7.8-4.6V7.5L12 2.9l7.8 4.6v9zM12 18.2l-5.3-3.1v-6.2L12 5.8l5.3 3.1v6.2L12 18.2zM9.5 9.7v4.6l2.5 1.4 2.5-1.4V9.7L12 8.3 9.5 9.7z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    category: "UI/UX",
    role: "Visual Architecture",
    color: "#F24E1E",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4zm0-24C5.8 0 4 1.8 4 4s1.8 4 4 4h4V0H8zm0 8C5.8 8 4 9.8 4 12s1.8 4 4 4h4V8H8zm8-8h-4v8h4c2.2 0 4-1.8 4-4s-1.8-4-4-4zm0 8h-4v8h4c2.2 0 4-1.8 4-4s-1.8-4-4-4z" />
      </svg>
    ),
  },
  {
    name: "WebRTC",
    category: "Streaming",
    role: "Low-Latency Audio",
    color: "#3DA5FF",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
  },
];

// Duplicate items for continuous seamless infinite loop
const MARQUEE_ITEMS = [...TECH_LIST, ...TECH_LIST];

const Technology = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative w-full py-8 md:py-10 bg-[var(--background)] overflow-hidden border-y border-[var(--border-color)]/60">
      {/* Dynamic ambient HUD grid line */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-transparent to-[var(--background)] z-10 pointer-events-none" />

      {/* Top Telemetry Header Bar */}
      <div className="max-w-7xl mx-auto px-6 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--success)]"></span>
          </span>
          <span className="text-[11px] font-mono tracking-widest text-[var(--foreground-muted)] uppercase font-semibold">
            CORE ARCHITECTURE & TOOLCHAIN
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-[var(--foreground-muted)] opacity-60">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
          <span>PRODUCTION VERIFIED</span>
          <span className="mx-1">•</span>
          <span>SYSTEMS READY</span>
        </div>
      </div>

      {/* Infinite Marquee Mask */}
      <div
        className="relative w-full overflow-hidden flex"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <motion.div
          className="flex whitespace-nowrap gap-5 sm:gap-7 items-center px-4 py-2"
          animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 32,
            repeat: Infinity,
          }}
        >
          {MARQUEE_ITEMS.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="group relative flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-[var(--card-bg)]/60 hover:bg-[var(--card-bg-elevated)] border border-[var(--border-color)] hover:border-[var(--primary)]/60 transition-all duration-300 shadow-sm hover:shadow-[0_8px_25px_-5px_rgba(255,59,48,0.25)] hover:-translate-y-1 cursor-default"
            >
              {/* Brand Accent Indicator */}
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-110 shadow-inner"
                style={{
                  backgroundColor: `${tech.color}15`,
                  color: tech.color,
                  border: `1px solid ${tech.color}35`,
                }}
              >
                {tech.svg}
              </div>

              {/* Label & Role */}
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm sm:text-base text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-200">
                    {tech.name}
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-[var(--background)] border border-[var(--border-color)] text-[var(--foreground-muted)] opacity-80">
                    {tech.category}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[var(--foreground-muted)] group-hover:text-[var(--foreground)] transition-colors">
                  {tech.role}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
