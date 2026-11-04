"use client";

/**
 * Hero.jsx — Sleek, Professional SaaS-Style Redesign
 * 
 * Layout: 2-Column Desktop Grid
 * - Left: Clean, high-contrast typography, streamlined CTAs, and integrated metrics.
 * - Right: The showcase pedestal for the ID badge.
 * 
 * The ID Badge element and ALL of its physics, interactions, and internal 
 * structures have been preserved with 100% fidelity.
 */

import Link from "next/link";
import Image from "next/image";
import Technology from "@/components/Home/Technology";
import { useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useMotionTemplate,
  animate,
  useReducedMotion,
} from "framer-motion";

// ─── Live counters & Specs (Combined for a cleaner data display) ──────────────
const METRICS = [
  { label: "Uptime SLA", value: "99.9%" },
  { label: "Latency", value: "<180ms" },
  { label: "Projects", value: "14+" },
  { label: "Lines of Code", value: "120K+" },
];

// ─── Stagger animation for left column elements ───────────────────────────────
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.1 * i,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

// ─── Ambient Mesh Background ──────────────────────────────────────────────────
function AmbientMesh() {
  const shouldReduce = useReducedMotion();
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { damping: 60, stiffness: 40, mass: 1.2 });
  const springY = useSpring(mouseY, { damping: 60, stiffness: 40, mass: 1.2 });

  const p1x = useTransform(springX, [0, 1], ["10%", "40%"]);
  const p1y = useTransform(springY, [0, 1], ["10%", "40%"]);
  const p2x = useTransform(springX, [0, 1], ["60%", "90%"]);
  const p2y = useTransform(springY, [0, 1], ["60%", "90%"]);

  const bg = useMotionTemplate`
    radial-gradient(circle 800px at ${p1x} ${p1y}, rgba(245,230,35,0.06) 0%, transparent 80%),
    radial-gradient(circle 600px at ${p2x} ${p2y}, rgba(202,202,96,0.04) 0%, transparent 80%)
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
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: bg }}
      />
      {/* Sleeker, wider architectural grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--clr-ink) 1px, transparent 1px), linear-gradient(to bottom, var(--clr-ink) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, var(--clr-surface) 100%)",
        }}
      />
    </>
  );
}

// ─── Main Hero Component ──────────────────────────────────────────────────────
const Hero = () => {
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
      <section className="relative w-full min-h-[90dvh] sm:min-h-[95vh] flex flex-col justify-center overflow-hidden pt-28 sm:pt-36 pb-16 sm:pb-20">
        <AmbientMesh />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* ════════════════════════════════════════════════════════════════════
              LEFT COLUMN — Typography & Actions
              ════════════════════════════════════════════════════════════════════ */}
          <div className="w-full lg:w-7/12 flex flex-col items-start text-left">
            
            {/* HUD Status Pill */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="inline-flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[var(--clr-surface-card)] border border-[var(--clr-border)] shadow-sm mb-6 sm:mb-8"
            >
              <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--clr-accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-[var(--clr-accent)]"></span>
              </span>
              <span className="font-mono text-[11px] sm:text-xs font-medium tracking-wide text-[var(--clr-ink)] uppercase">
                Systems 100% Operational
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-black tracking-tighter text-[var(--clr-ink)] leading-[1.08] sm:leading-[1.05] mb-4">
                Architecting <br />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[var(--clr-accent)] to-[#CACA60]">
                  Scalable AI.
                </span>
              </h1>
            </motion.div>

            {/* Descriptor */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="text-base sm:text-xl text-[var(--clr-ink-muted)] leading-relaxed max-w-2xl mb-8 sm:mb-10 font-light"
            >
              Transitioned from visual design to deep full-stack engineering.
              Specialized in multi-tenant SaaS, low-latency OpenAI Realtime
              WebRTC voice streaming, and cross-platform mobile architectures.
            </motion.p>

            {/* Actions & Socials */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10 sm:mb-14"
            >
              {/* Primary Button */}
              <Link
                href="#projects"
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3.5 font-bold text-sm tracking-wide text-[var(--brand-charcoal)] bg-[var(--clr-accent)] rounded-full overflow-hidden transition-transform active:scale-95 hover:shadow-[0_0_24px_rgba(245,230,35,0.4)] text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Platforms
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>

              {/* Secondary Button */}
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3.5 font-bold text-sm tracking-wide text-[var(--clr-ink)] bg-transparent border border-[var(--clr-border)] rounded-full transition-all hover:border-[var(--clr-ink)] hover:bg-[var(--clr-ink)] hover:text-[var(--clr-surface)] active:scale-95 text-center"
              >
                Initialize Dispatch
              </Link>
            </motion.div>

            {/* Minimal Metrics Grid */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-[var(--clr-border)]"
            >
              {METRICS.map((metric, i) => (
                <div key={i} className="flex flex-col gap-0.5 sm:gap-1">
                  <span className="text-xl sm:text-2xl font-black text-[var(--clr-ink)] tracking-tight">
                    {metric.value}
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs text-[var(--clr-ink-muted)] uppercase tracking-wider">
                    {metric.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ════════════════════════════════════════════════════════════════════
              RIGHT COLUMN — ID Badge Showcase
              ════════════════════════════════════════════════════════════════════ */}
          <motion.div 
            custom={2}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-5/12 relative flex items-center justify-center"
          >
            {/* Clean, glowing pedestal background for the badge */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--clr-accent)]/5 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />
            
            <div 
              className="relative w-full max-w-md flex flex-col items-center justify-center p-4 sm:p-8 rounded-3xl sm:rounded-[2.5rem] border border-[var(--clr-border)] bg-[var(--clr-surface-card)]/30 backdrop-blur-sm shadow-2xl"
              data-cursor="drag"
            >
              {/* ── BADGE ORIGIN ANCHOR ── */}
              <div
                ref={originRef}
                className="relative flex justify-center items-center w-full h-[520px] sm:h-[580px] pointer-events-none perspective-[1200px]"
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
                <div className="absolute bottom-2 font-mono text-[10px] text-[var(--clr-ink-muted)] tracking-widest uppercase flex items-center gap-2 opacity-70">
                  <span>Drag</span>
                  <span className="text-[var(--clr-accent)]">•</span>
                  <span>Double-Click</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── TECHNOLOGY MARQUEE STRIP (unchanged) ─────────────────────────── */}
      <Technology />
    </>
  );
};

export default Hero;