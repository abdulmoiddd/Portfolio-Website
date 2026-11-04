"use client";

/**
 * Hero.jsx — Redesigned Bento Grid Hero Section
 *
 * Layout: 12-column CSS grid, asymmetric bento composition
 *
 * Grid map (desktop):
 * ┌─────────────────────────────┬──────────────────┐
 * │  HUD Status Bar             │  (full width)     │
 * ├──────────┬──────────────────┼──────────────────-┤
 * │          │  Headline Cell   │                   │
 * │  ID Badge│  (col 1–7)       │  Live Metric Grid │
 * │  Column  ├──────────────────┤  (col 10–12)      │
 * │  (col    │  Spec Mini-Cells │                   │
 * │  8–12)   ├──────────────────┤                   │
 * │          │  Action CTAs     │                   │
 * └──────────┴──────────────────┴───────────────────┘
 *
 * The ID Badge RIGHT column (col 8–12) is a pixel-perfect port of the
 * original Hero.jsx badge — ZERO internal changes.
 *
 * The ambient background is a mouse-reactive gradient mesh rendered via
 * canvas-free CSS + Framer Motion — no WebGL, smooth 60fps.
 */

import Link from "next/link";
import Image from "next/image";
import Technology from "@/components/Home/Technology";
import { useState, useRef, useEffect, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useMotionTemplate,
  animate,
  useReducedMotion,
} from "framer-motion";

// ─── Spec cells data ───────────────────────────────────────────────────────────
const SPEC_CELLS = [
  { label: "VOICE ENGINE",  value: "<180ms WebRTC", accent: true  },
  { label: "CORE STACK",    value: "Next.js + Node", accent: false },
  { label: "MOBILE",        value: "RN + Expo",      accent: false },
  { label: "UPTIME SLA",    value: "99.9%",          accent: true  },
];

// ─── Live counters ─────────────────────────────────────────────────────────────
const METRICS = [
  { label: "PROJECTS SHIPPED",  value: "14+",   sub: "in production" },
  { label: "LATENCY TARGET",    value: "180ms", sub: "WebRTC voice"  },
  { label: "LINES OF CODE",     value: "120K+", sub: "this year"     },
];

// ─── Stagger animation for bento cells ────────────────────────────────────────
const cellVariants = {
  hidden:  { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.08 * i,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// ─── Ambient Mesh Background (mouse-reactive) ──────────────────────────────────
function AmbientMesh() {
  const shouldReduce = useReducedMotion();
  const mouseX = useMotionValue(0.5);   // normalized 0–1
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { damping: 60, stiffness: 40, mass: 1.2 });
  const springY = useSpring(mouseY, { damping: 60, stiffness: 40, mass: 1.2 });

  // Convert springs into CSS gradient positions (percent strings)
  const p1x = useTransform(springX, [0, 1], ["0%",   "30%"]);
  const p1y = useTransform(springY, [0, 1], ["0%",   "30%"]);
  const p2x = useTransform(springX, [0, 1], ["70%",  "100%"]);
  const p2y = useTransform(springY, [0, 1], ["70%",  "100%"]);
  const p3x = useTransform(springX, [0, 1], ["40%",  "60%"]);
  const p3y = useTransform(springY, [0, 1], ["20%",  "80%"]);

  const bg = useMotionTemplate`
    radial-gradient(ellipse 55% 45% at ${p1x} ${p1y}, rgba(245,230,35,0.11) 0%, transparent 70%),
    radial-gradient(ellipse 50% 55% at ${p2x} ${p2y}, rgba(202,202,96,0.08) 0%, transparent 65%),
    radial-gradient(ellipse 35% 35% at ${p3x} ${p3y}, rgba(245,230,35,0.06) 0%, transparent 60%)
  `;

  useEffect(() => {
    if (shouldReduce) return;
    const onMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [shouldReduce, mouseX, mouseY]);

  return (
    <>
      {/* Mouse-reactive gradient mesh */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: bg }}
      />
      {/* Static architectural line grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--clr-ink) 1px, transparent 1px), linear-gradient(to bottom, var(--clr-ink) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
      {/* Corner vignette — keeps edges from feeling flat */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 55%, var(--clr-surface) 100%)",
        }}
      />
    </>
  );
}

// ─── Main Hero Component ───────────────────────────────────────────────────────
const Hero = () => {
  const shouldReduce = useReducedMotion();

  // ── ID Badge physics (PRESERVED VERBATIM — zero changes) ──────────────────
  const [isScanning, setIsScanning]   = useState(false);
  const [isSticky,   setIsSticky]     = useState(false);
  const originRef                     = useRef(null);
  const stickyTimeoutRef              = useRef(null);

  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  const dragXSpring = useSpring(dragX, { stiffness: 120, damping: 12, mass: 0.9 });
  const dragYSpring = useSpring(dragY, { stiffness: 120, damping: 12, mass: 0.9 });

  const rotateZ = useTransform(dragXSpring, [-180, 180], [-10, 10]);
  const rotateY = useTransform(dragXSpring, [-180, 180], [-7, 7]);
  const rotateX = useTransform(dragYSpring, [-180, 180], [7, -7]);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set(e.clientX - rect.left);
    pointerY.set(e.clientY - rect.top);
  };

  const glareBackground = useMotionTemplate`radial-gradient(circle 200px at ${pointerX}px ${pointerY}px, rgba(255,255,255,0.08), transparent 80%)`;

  const handleDragEnd = () => {
    setIsSticky(true);
    if (stickyTimeoutRef.current) clearTimeout(stickyTimeoutRef.current);
    stickyTimeoutRef.current = setTimeout(() => {
      setIsSticky(false);
    }, 3000);
  };

  const handleDoubleClick = () => {
    setIsSticky(false);
    if (stickyTimeoutRef.current) clearTimeout(stickyTimeoutRef.current);
    if (isScanning) return;
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 2000);
  };

  useEffect(() => {
    return () => {
      if (stickyTimeoutRef.current) clearTimeout(stickyTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (isSticky) {
      const handleGlobalMove = (e) => {
        if (originRef.current) {
          const rect    = originRef.current.getBoundingClientRect();
          const centerX = rect.left + rect.width  / 2;
          const centerY = rect.top  + rect.height / 2;
          animate(dragX, e.clientX - centerX, { type: "spring", stiffness: 200, damping: 20, mass: 0.5 });
          animate(dragY, e.clientY - centerY, { type: "spring", stiffness: 200, damping: 20, mass: 0.5 });
        }
      };
      window.addEventListener("pointermove", handleGlobalMove);
      return () => window.removeEventListener("pointermove", handleGlobalMove);
    } else {
      animate(dragX, 0, { type: "spring", stiffness: 120, damping: 12, mass: 0.9 });
      animate(dragY, 0, { type: "spring", stiffness: 120, damping: 12, mass: 0.9 });
    }
  }, [isSticky, dragX, dragY]);

  const ambientFloat = {
    float: {
      y:        [-6, 6],
      rotateZ:  [-0.8, 0.8],
      transition: {
        duration:   4.5,
        repeat:     Infinity,
        repeatType: "reverse",
        ease:       "easeInOut",
      },
    },
  };
  // ── END BADGE PHYSICS ──────────────────────────────────────────────────────

  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          HERO SECTION
          ════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[95vh] flex flex-col justify-center overflow-hidden pt-28 pb-16">

        {/* Ambient background mesh — sits behind everything */}
        <AmbientMesh />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full">

          {/* ── HUD STATUS BAR ─────────────────────────────────────────────── */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={cellVariants}
            className="
              bento-cell glass-panel
              w-full px-4 py-2.5 mb-5
              flex flex-wrap items-center justify-between gap-3
            "
          >
            <div className="flex items-center gap-2.5">
              {/* Static solid dot — no blinking */}
              <span className="w-2 h-2 rounded-full bg-[var(--clr-accent)] shadow-[0_0_8px_rgba(245,230,35,0.7)]" />
              <span className="label-mono text-[var(--clr-ink)] font-bold">
                SYSTEM STATUS: 100% OPERATIONAL
              </span>
              <span className="label-mono text-[var(--clr-ink-muted)] hidden sm:inline">
                • SLA: 99.9% UPTIME
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="label-mono text-[var(--clr-ink-muted)] hidden md:inline">
                LOC: 33.5651°N, 73.0169°E · PKT UTC+5
              </span>
              <span className="
                px-2.5 py-1 rounded-lg
                bg-[var(--clr-accent)] text-[var(--brand-charcoal)]
                label-mono font-bold text-[10px]
              ">
                AI & FULL-STACK LEAD
              </span>
            </div>
          </motion.div>

          {/* ── MAIN BENTO GRID ────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--bento-gap)]">

            {/* ════════════════════════════════════════════════════════════
                LEFT COLUMN — Content (col 1–7)
                ════════════════════════════════════════════════════════════ */}
            <div className="lg:col-span-7 flex flex-col gap-[var(--bento-gap)]">

              {/* ── HEADLINE CELL ─────────────────────────────────────── */}
              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={cellVariants}
                className="bento-cell px-6 py-7 relative overflow-hidden"
              >
                {/* Accent corner tick */}
                <div className="absolute top-0 left-0 w-10 h-10 pointer-events-none">
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[var(--clr-accent)] opacity-70 rounded-tl-sm" />
                </div>
                <div className="absolute bottom-0 right-0 w-10 h-10 pointer-events-none">
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[var(--clr-accent)] opacity-70 rounded-br-sm" />
                </div>

                {/* Terminal eyebrow */}
                <div className="inline-flex items-center gap-2 font-mono text-[11px] text-[var(--clr-accent)] font-semibold mb-4 tracking-wider">
                  <span className="opacity-60">const</span>
                  <span>engineer</span>
                  <span className="opacity-60">=</span>
                  <span className="text-[var(--clr-ink)]">&quot;Abdul Moid&quot;</span>
                  <span className="text-[var(--clr-ink-muted)]">&#47;&#47; AI &amp; Full-Stack Architect</span>
                </div>

                {/* Headline */}
                <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight text-[var(--clr-ink)] leading-[1.02] mb-2">
                  Architecting
                </h1>
                <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.02] mb-5">
                  <span
                    className="text-gradient"
                    style={{
                      backgroundImage:
                        "linear-gradient(110deg, #F5E623 0%, #CACA60 45%, #F5E623 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Scalable AI.
                  </span>
                </h1>

                {/* Descriptor */}
                <p className="text-sm text-[var(--clr-ink-muted)] leading-relaxed max-w-lg">
                  Transitioned from visual design to deep full-stack engineering.
                  Specialized in multi-tenant SaaS, low-latency OpenAI Realtime
                  WebRTC voice streaming, and cross-platform mobile.
                </p>
              </motion.div>

              {/* ── SPEC MINI-CELLS (4 cells in a 2×2 grid) ──────────── */}
              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={cellVariants}
                className="grid grid-cols-2 sm:grid-cols-4 gap-[var(--bento-gap)]"
              >
                {SPEC_CELLS.map((cell) => (
                  <div
                    key={cell.label}
                    className={`
                      bento-cell px-3 py-3
                      ${cell.accent
                        ? "border-[var(--clr-accent)] bg-[rgba(245,230,35,0.05)]"
                        : ""}
                    `}
                  >
                    <span className="label-mono block mb-1">{cell.label}</span>
                    <span className={`
                      font-mono font-bold text-xs block
                      ${cell.accent
                        ? "text-[var(--clr-accent)]"
                        : "text-[var(--clr-ink)]"}
                    `}>
                      {cell.value}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* ── CTA + SOCIAL ROW ──────────────────────────────────── */}
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={cellVariants}
                className="bento-cell px-5 py-4 flex flex-wrap items-center gap-3"
              >
                {/* Primary CTA */}
                <Link
                  href="#projects"
                  className="
                    interactive
                    inline-flex items-center gap-2
                    px-6 py-2.5 rounded-[var(--bento-radius-sm)]
                    font-mono font-bold text-xs tracking-wider
                    bg-[var(--clr-accent)] text-[var(--brand-charcoal)]
                    shadow-[0_0_20px_rgba(245,230,35,0.35)]
                    hover:shadow-[0_0_32px_rgba(245,230,35,0.55)]
                    hover:-translate-y-0.5
                    transition-all duration-200
                  "
                >
                  <span>EXPLORE PLATFORMS</span>
                  <span>↓</span>
                </Link>

                {/* Secondary CTA */}
                <Link
                  href="#contact"
                  className="
                    interactive
                    inline-flex items-center gap-2
                    px-5 py-2.5 rounded-[var(--bento-radius-sm)]
                    font-mono font-bold text-xs tracking-wider
                    border border-[var(--clr-border)]
                    text-[var(--clr-ink)]
                    hover:border-[var(--clr-accent)]
                    hover:text-[var(--clr-accent)]
                    hover:-translate-y-0.5
                    transition-all duration-200
                  "
                >
                  <span>INITIALIZE DISPATCH</span>
                  <span className="text-[var(--clr-accent)]">↗</span>
                </Link>

                {/* Social icons */}
                <div className="flex items-center gap-2 ml-auto">
                  <a
                    href="https://github.com/abdulmoiddd"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="
                      interactive
                      w-9 h-9 rounded-[var(--bento-radius-sm)]
                      border border-[var(--clr-border)]
                      bg-[var(--clr-surface-card)]
                      flex items-center justify-center
                      text-[var(--clr-ink-muted)]
                      hover:text-[var(--clr-ink)]
                      hover:border-[var(--clr-accent)]
                      transition-all duration-200
                    "
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/abdulmoiddd"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="
                      interactive
                      w-9 h-9 rounded-[var(--bento-radius-sm)]
                      border border-[var(--clr-border)]
                      bg-[var(--clr-surface-card)]
                      flex items-center justify-center
                      text-[var(--clr-ink-muted)]
                      hover:text-[var(--clr-ink)]
                      hover:border-[var(--clr-accent)]
                      transition-all duration-200
                    "
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>

            </div>
            {/* END LEFT COLUMN */}

            {/* ════════════════════════════════════════════════════════════
                RIGHT COLUMN — ID Badge + Live Metrics (col 8–12)
                ════════════════════════════════════════════════════════════ */}
            <div className="lg:col-span-5 flex flex-col gap-[var(--bento-gap)]">

              {/* ── LIVE METRICS CELL ─────────────────────────────────── */}
              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={cellVariants}
                className="bento-cell px-5 py-4"
              >
                <div className="grid grid-cols-3 divide-x divide-[var(--clr-border)]">
                  {METRICS.map((m) => (
                    <div key={m.label} className="px-3 first:pl-0 last:pr-0">
                      <div className="text-2xl font-black font-mono text-[var(--clr-accent)] leading-none mb-0.5">
                        {m.value}
                      </div>
                      <div className="label-mono text-[var(--clr-ink)] leading-tight">{m.label}</div>
                      <div className="label-mono text-[var(--clr-ink-muted)] mt-0.5">{m.sub}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ══════════════════════════════════════════════════════════
                  ID BADGE CELL
                  The outer bento-cell wrapper is NEW (positions & sizes it),
                  but every single element inside the motion.div below is
                  PRESERVED VERBATIM from the original Hero.jsx.
                  ══════════════════════════════════════════════════════════ */}
              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={cellVariants}
                className="
                  bento-cell
                  relative flex-1
                  hidden lg:flex flex-col
                  items-center justify-center
                  py-10 overflow-visible
                "
                /* data-cursor tells the custom cursor to show drag ring */
                data-cursor="drag"
              >
                {/* ── BADGE ORIGIN ANCHOR ── */}
                <div
                  ref={originRef}
                  className="relative flex justify-center items-center w-full h-[580px] pointer-events-none perspective-[1200px]"
                >
                  {/* ════ REALISTIC SUSPENDED ID BADGE — PRESERVED VERBATIM ════ */}
                  <motion.div
                    variants={ambientFloat}
                    animate="float"
                    onPointerMove={handlePointerMove}
                    onDoubleClick={handleDoubleClick}
                    className={`relative cursor-grab active:cursor-grabbing ${isSticky ? "pointer-events-none" : "pointer-events-auto"}`}
                    style={{
                      x: dragX,
                      y: dragY,
                      rotateZ,
                      rotateX,
                      rotateY,
                      transformStyle: "preserve-3d",
                    }}
                    drag={!isSticky}
                    dragConstraints={isSticky ? undefined : { top: 0, left: 0, right: 0, bottom: 0 }}
                    dragElastic={0.25}
                    onDragEnd={handleDragEnd}
                    whileDrag={{ scale: 1.03, cursor: "grabbing" }}
                  >
                    {/* 1. LANYARD RIBBON */}
                    <div
                      className="absolute bottom-full left-[calc(50%-14px)] -translate-x-1/2 w-7 h-[1200px] bg-[var(--primary)] shadow-2xl overflow-hidden flex flex-col justify-end items-center"
                      style={{ transform: "translateZ(-1px)" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-black/20 to-black/40 pointer-events-none" />
                      <div className="flex flex-col items-center opacity-60 font-mono text-black font-extrabold text-[9px] tracking-widest leading-loose mb-4">
                        <span className="rotate-90 whitespace-nowrap mb-24">AI and Full-Stack Engineer</span>
                        <span className="rotate-90 whitespace-nowrap mb-24">AI and Full-Stack Engineer</span>
                        <span className="rotate-90 whitespace-nowrap mb-24">AI and Full-Stack Engineer</span>
                        <span className="rotate-90 whitespace-nowrap">AI and Full-Stack Engineer</span>
                      </div>
                    </div>

                    {/* 2. CHROME CLAMP & HOOK */}
                    <div
                      className="absolute -top-5 left-[calc(50%-15px)] -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none"
                      style={{ transform: "translateZ(8px)" }}
                    >
                      <div className="w-8 h-3 bg-gradient-to-r from-zinc-400 via-zinc-200 to-zinc-500 rounded-[2px] shadow-sm border-b border-zinc-600" />
                      <div className="w-4 h-3.5 border-2 border-zinc-300 rounded-full -mt-0.5 bg-transparent shadow-inner" />
                      <div className="w-3 h-5 bg-gradient-to-b from-zinc-300 via-zinc-100 to-zinc-400 rounded-b-sm -mt-1 shadow-md border border-zinc-500/80 flex items-end justify-center pb-0.5">
                        <div className="w-1.5 h-1 bg-zinc-700/60 rounded-full" />
                      </div>
                    </div>

                    {/* 3. NORMAL-SIZED ID CARD BODY */}
                    <div className="relative w-72 bg-[var(--card-bg)]/95 backdrop-blur-xl border border-[var(--border-color)] rounded-2xl shadow-2xl flex flex-col items-center p-4 pt-3 group transition-colors duration-300 hover:border-[var(--primary)]/60">
                      <motion.div
                        className="absolute inset-0 pointer-events-none z-40 rounded-2xl mix-blend-overlay"
                        style={{ background: glareBackground }}
                      />

                      <div className="w-10 h-2 rounded-full bg-[var(--background)] border border-[var(--border-color)] mb-3 shadow-inner" />

                      <div className="w-full flex items-center justify-between pb-2.5 border-b border-[var(--border-color)] mb-3 px-1">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[var(--success)] shadow-[0_0_6px_var(--success)]" />
                          <span className="text-[9px] font-mono tracking-widest text-[var(--foreground)] uppercase font-semibold">
                            AICYRO / ACCESS PASS
                          </span>
                        </div>
                        <span className="text-[9px] font-mono text-[var(--accent-blue)] font-bold">LVL-09</span>
                      </div>

                      {/* 4:5 ASPECT RATIO AVATAR CONTAINER WITH BACKGROUND SVG */}
                      <div className="relative w-44 aspect-[4/5] rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--background)] mb-3 shadow-sm">
                        {/* SVG Background Pattern */}
                        <div className="absolute inset-0 pointer-events-none z-0">
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 288 360"
                            className="w-full h-full object-cover"
                          >
                            <g opacity="0.82" fill="var(--primary)">
                              <rect x="17.53" y="177.38" transform="matrix(0.7071 0.7071 -0.7071 0.7071 257.0318 -12.8275)" width="252.93" height="252.93"/>
                              <rect x="17.53" y="177.38" transform="matrix(0.9246 0.3809 -0.3809 0.9246 126.5853 -31.9438)" width="252.93" height="252.93"/>
                              <rect x="17.53" y="177.38" transform="matrix(0.4002 0.9164 -0.9164 0.4002 364.8261 50.282)" width="252.93" height="252.93"/>
                              <rect x="17.53" y="177.38" width="252.93" height="252.93"/>
                            </g>
                          </svg>
                        </div>

                        <Image
                          src="/Moid.png"
                          alt="Abdul Moid"
                          fill
                          sizes="176px"
                          style={{ objectFit: "cover", objectPosition: "top center" }}
                          className="grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-none z-10"
                          priority
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />

                        {/* Scan Laser on Double Click */}
                        {isScanning && (
                          <motion.div
                            initial={{ top: "-5%" }}
                            animate={{ top: "105%" }}
                            transition={{ duration: 1.4, ease: "easeInOut" }}
                            className="absolute left-0 right-0 h-1 bg-[var(--primary)] shadow-[0_0_15px_var(--primary)] z-20 pointer-events-none"
                          />
                        )}

                        <div className="absolute z-20 top-1.5 left-1.5  w-2 h-2 border-t border-l border-[var(--primary)] opacity-70" />
                        <div className="absolute z-20 top-1.5 right-1.5 w-2 h-2 border-t border-r border-[var(--primary)] opacity-70" />
                        <div className="absolute z-20 bottom-1.5 left-1.5  w-2 h-2 border-b border-l border-[var(--primary)] opacity-70" />
                        <div className="absolute z-20 bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[var(--primary)] opacity-70" />
                      </div>

                      <div className="w-full text-center px-1">
                        <h3 className="text-xl font-black text-[var(--foreground)] tracking-tight uppercase leading-none">
                          Abdul Moid
                        </h3>
                        <p className="text-[10px] font-mono text-[var(--primary)] font-bold mt-1 tracking-wider uppercase">
                          AI and Full-Stack Engineer
                        </p>
                      </div>

                      <div className="w-full grid grid-cols-2 gap-2 mt-3 pt-2.5 border-t border-[var(--border-color)] text-left px-1">
                        <div>
                          <span className="text-[8px] font-mono text-[var(--foreground-muted)] uppercase block">ID Number</span>
                          <span className="text-[10px] font-mono text-[var(--foreground)] font-semibold">AM-8892-XT</span>
                        </div>
                        <div>
                          <span className="text-[8px] font-mono text-[var(--foreground-muted)] uppercase block">Status</span>
                          <span className="text-[10px] font-mono text-[var(--success)] font-semibold">AUTHORIZED</span>
                        </div>
                      </div>

                      <div className="w-full mt-2.5 pt-2 border-t border-[var(--border-color)]/60 flex justify-between items-center px-1 opacity-70 group-hover:opacity-100 transition-opacity">
                        <div className="flex gap-[2px] items-center h-3.5">
                          {[2, 1, 3, 1, 4, 1, 2, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3].map((w, i) => (
                            <div
                              key={i}
                              className="h-full bg-[var(--foreground)] rounded-[0.5px]"
                              style={{ width: `${w}px` }}
                            />
                          ))}
                        </div>
                        <span className="text-[8px] font-mono text-[var(--foreground-muted)] tracking-widest">
                          {"NFC // PASS"}
                        </span>
                      </div>
                    </div>
                    {/* ════ END PRESERVED ID BADGE ════ */}
                  </motion.div>

                  {/* Hint label below badge */}
                  <div className="absolute -bottom-2 font-mono text-[9px] text-[var(--clr-ink-muted)] tracking-widest uppercase flex items-center gap-2 opacity-60">
                    <span>[Drag]</span>
                    <span>•</span>
                    <span>[Double-Click to Scan]</span>
                  </div>
                </div>
              </motion.div>
              {/* END ID BADGE CELL */}

            </div>
            {/* END RIGHT COLUMN */}

          </div>
          {/* END MAIN BENTO GRID */}

        </div>
      </section>

      {/* ── TECHNOLOGY MARQUEE STRIP (unchanged) ─────────────────────────── */}
      <Technology />
    </>
  );
};

export default Hero;
