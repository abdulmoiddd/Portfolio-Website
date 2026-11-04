"use client";

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
} from "framer-motion";

const Hero = () => {
  const [isScanning, setIsScanning] = useState(false);
  
  // Custom states for the magnetic sticky effect
  const [isSticky, setIsSticky] = useState(false);
  const originRef = useRef(null);
  const stickyTimeoutRef = useRef(null); // Tracks the 3-second sticky timer

  // --- PHYSICS-BASED LANYARD & ID CARD LOGIC (PRESERVED VERBATIM) ---
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  const dragXSpring = useSpring(dragX, { stiffness: 120, damping: 12, mass: 0.9 });
  const dragYSpring = useSpring(dragY, { stiffness: 120, damping: 12, mass: 0.9 });

  const rotateZ = useTransform(dragXSpring, [-180, 180], [-10, 10]);
  const rotateY = useTransform(dragXSpring, [-180, 180], [-7, 7]);
  const rotateX = useTransform(dragYSpring, [-180, 180], [7, -7]);

  // --- HOLOGRAPHIC GLARE LOGIC (PRESERVED VERBATIM) ---
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set(e.clientX - rect.left);
    pointerY.set(e.clientY - rect.top);
  };

  const glareBackground = useMotionTemplate`radial-gradient(circle 200px at ${pointerX}px ${pointerY}px, rgba(255,255,255,0.08), transparent 80%)`;

  // --- INTERACTION LOGIC (Drag vs Double Click - PRESERVED VERBATIM) ---
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

  // Smooth mouse-follow when sticky is active
  useEffect(() => {
    if (isSticky) {
      const handleGlobalMove = (e) => {
        if (originRef.current) {
          const rect = originRef.current.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          
          const offsetX = e.clientX - centerX;
          const offsetY = e.clientY - centerY;
          
          animate(dragX, offsetX, { type: "spring", stiffness: 200, damping: 20, mass: 0.5 });
          animate(dragY, offsetY, { type: "spring", stiffness: 200, damping: 20, mass: 0.5 });
        }
      };
      
      window.addEventListener("pointermove", handleGlobalMove);
      return () => window.removeEventListener("pointermove", handleGlobalMove);
    } else {
      animate(dragX, 0, { type: "spring", stiffness: 120, damping: 12, mass: 0.9 });
      animate(dragY, 0, { type: "spring", stiffness: 120, damping: 12, mass: 0.9 });
    }
  }, [isSticky, dragX, dragY]);

  // Subtle ambient floating state (PRESERVED VERBATIM)
  const ambientFloat = {
    float: {
      y: [-6, 6],
      rotateZ: [-0.8, 0.8],
      transition: {
        duration: 4.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* REDESIGNED HIGH-DENSITY HERO SECTION */}
      <section className="relative w-full min-h-[92vh] flex flex-col justify-center overflow-hidden bg-[var(--background)] pt-24 pb-12 border-b border-[var(--border-color)]">
        {/* Crisp Architectural Grid Line Backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.035] dark:opacity-[0.04]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "3rem 3rem",
            }}
          />
        </div>

        {/* Ambient Warm Golden Highlight Glow */}
        <div className="absolute right-[5%] top-[15%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-bl from-amber-400/15 via-yellow-400/8 to-transparent blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col justify-center">
          {/* Top High-Density Metadata HUD Header Bar */}
          <div className="w-full py-2.5 px-4 mb-8 rounded-xl bg-[var(--card-bg)]/80 backdrop-blur-md border border-[var(--border-color)] flex flex-wrap items-center justify-between gap-3 text-xs font-mono shadow-sm">
            <div className="flex items-center gap-2.5">
              {/* Static crisp indicator dot (no blinking) */}
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
              <span className="text-[var(--foreground)] font-bold tracking-wider uppercase">
                SYSTEM STATUS: 100% OPERATIONAL
              </span>
              <span className="text-[var(--foreground-muted)] hidden sm:inline">•</span>
              <span className="text-[var(--foreground-muted)] hidden sm:inline">
                SLA: 99.9% PRODUCTION UPTIME
              </span>
            </div>

            <div className="flex items-center gap-4 text-[var(--foreground-muted)] text-[11px]">
              <span className="hidden md:inline">LOC: 33.5651°N, 73.0169°E (PKT UTC+5)</span>
              <span className="px-2 py-0.5 rounded bg-[var(--background-subtle)] text-[var(--primary)] font-bold border border-[var(--border-color)]">
                AI & FULL-STACK LEAD
              </span>
            </div>
          </div>

          {/* High-Density 2-Column Hero Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Editorial Typography & High-Density Specs (Span 7) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Terminal-style eyebrow */}
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[var(--primary)] font-semibold mb-3">
                <span>const engineer = &quot;Abdul Moid&quot;;</span>
                <span className="text-[var(--foreground-muted)]">{"// Full-Stack & AI Architect"}</span>
              </div>

              {/* Bold Compact Headline with Tight Editorial Tracking */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[var(--foreground)] leading-[1.04] mb-5">
                Architecting <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 dark:from-yellow-300 dark:via-amber-400 dark:to-yellow-500">
                  Scalable AI Systems.
                </span>
              </h1>

              {/* High-Density Statement */}
              <p className="text-base sm:text-lg text-[var(--foreground-muted)] font-normal leading-relaxed max-w-xl mb-7">
                Transitioned from visual design to deep full-stack engineering.
                Specialized in multi-tenant SaaS architectures, low-latency OpenAI
                Realtime WebRTC voice streaming, and cross-platform mobile apps.
              </p>

              {/* 4-Cell High-Density Architecture Spec Box */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-2xl bg-[var(--card-bg)]/85 backdrop-blur-md border border-[var(--border-color)] mb-7">
                <div className="p-2.5 rounded-xl bg-[var(--background-subtle)] border border-[var(--border-color)]/70">
                  <span className="text-[9px] font-mono text-[var(--foreground-muted)] uppercase block">
                    VOICE ENGINE
                  </span>
                  <span className="text-xs font-mono font-bold text-[var(--primary)] block mt-0.5">
                    &lt;180ms WebRTC
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-[var(--background-subtle)] border border-[var(--border-color)]/70">
                  <span className="text-[9px] font-mono text-[var(--foreground-muted)] uppercase block">
                    CORE STACK
                  </span>
                  <span className="text-xs font-mono font-bold text-[var(--foreground)] block mt-0.5">
                    Next.js + Node
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-[var(--background-subtle)] border border-[var(--border-color)]/70">
                  <span className="text-[9px] font-mono text-[var(--foreground-muted)] uppercase block">
                    MOBILE ARCH
                  </span>
                  <span className="text-xs font-mono font-bold text-[var(--foreground)] block mt-0.5">
                    React Native + Expo
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-[var(--background-subtle)] border border-[var(--border-color)]/70">
                  <span className="text-[9px] font-mono text-[var(--foreground-muted)] uppercase block">
                    AVAILABILITY
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 block mt-0.5">
                    99.9% Uptime SLA
                  </span>
                </div>
              </div>

              {/* Action Buttons & Quick Channels */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="#projects"
                  className="interactive px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-white dark:text-zinc-950 font-bold text-xs font-mono tracking-wider shadow-md hover:shadow-[0_0_20px_rgba(250,204,21,0.45)] hover:-translate-y-0.5 transition-all flex items-center gap-2"
                >
                  <span>EXPLORE PLATFORMS</span>
                  <span>↓</span>
                </Link>

                <Link
                  href="#contact"
                  className="interactive px-5 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--foreground)] font-mono text-xs font-semibold hover:border-[var(--primary-vibrant)] hover:-translate-y-0.5 transition-all"
                >
                  <span>INITIALIZE DISPATCH</span>
                  <span className="ml-1 text-[var(--primary)]">↗</span>
                </Link>

                {/* Crisp Static Social Links */}
                <div className="flex items-center gap-2 ml-auto">
                  <a
                    href="https://github.com/abdulmoiddd"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="interactive w-10 h-10 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:border-[var(--primary-vibrant)] transition-all"
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
                    className="interactive w-10 h-10 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:border-[var(--primary-vibrant)] transition-all"
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
              </div>
            </div>

            {/* ========================================================================= */}
            {/* RIGHT COLUMN: Realistic Suspended ID Badge (PRESERVED VERBATIM IN FULL)  */}
            {/* ========================================================================= */}
            <div
              ref={originRef}
              className="relative hidden lg:flex lg:col-span-5 w-full h-[620px] justify-center items-center pointer-events-none perspective-[1200px]"
            >
              <motion.div
                variants={ambientFloat}
                animate="float"
                onPointerMove={handlePointerMove}
                onDoubleClick={handleDoubleClick}
                className={`relative cursor-grab active:cursor-grabbing ${isSticky ? 'pointer-events-none' : 'pointer-events-auto'}`}
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

                    <div className="absolute z-20 top-1.5 left-1.5 w-2 h-2 border-t border-l border-[var(--primary)] opacity-70" />
                    <div className="absolute z-20 top-1.5 right-1.5 w-2 h-2 border-t border-r border-[var(--primary)] opacity-70" />
                    <div className="absolute z-20 bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-[var(--primary)] opacity-70" />
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
                    <span className="text-[8px] font-mono text-[var(--foreground-muted)] tracking-widest">{"NFC // PASS"}</span>
                  </div>
                </div>
              </motion.div>

              <div className="absolute -bottom-8 font-mono text-[10px] text-[var(--foreground-muted)] tracking-widest uppercase flex items-center gap-2">
                <span>[Drag to Engage Magnetic Link]</span>
                <span>•</span>
                <span>[Double-Click to Scan]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Density Technology Marquee Strip */}
      <Technology />
    </>
  );
};

export default Hero;
