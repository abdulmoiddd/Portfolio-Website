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
  AnimatePresence,
  animate,
} from "framer-motion";

const TECH_STACK = [
  {
    name: "OpenAI",
    role: "Realtime WebRTC & Vision",
    svg: (
      <path
        fill="currentColor"
        d="M22.28 10.37a5.53 5.53 0 0 0-.44-4.27 5.68 5.68 0 0 0-5.18-2.92 5.58 5.58 0 0 0-2.45.57 5.6 5.6 0 0 0-4.14-1.85 5.68 5.68 0 0 0-5.46 4.07 5.54 5.54 0 0 0-3.3 2.4 5.65 5.65 0 0 0-.74 4.41 5.54 5.54 0 0 0 .44 4.27 5.68 5.68 0 0 0 5.18 2.92c.84 0 1.67-.2 2.45-.57a5.6 5.6 0 0 0 4.14 1.85 5.68 5.68 0 0 0 5.46-4.07 5.54 5.54 0 0 0 3.3-2.4 5.65 5.65 0 0 0 .74-4.41Zm-8.46 10.15a4.08 4.08 0 0 1-2.46-.82l.14-.08 4.2-2.43a.79.79 0 0 0 .4-.69v-5.94l1.79 1.03a.08.08 0 0 1 .04.07v4.83a4.11 4.11 0 0 1-4.11 4.03Zm-8.5-3.69a4.08 4.08 0 0 1-.54-2.54c0-.4.07-.8.2-1.18l.14.09 4.2 2.42a.8.8 0 0 0 .8 0l5.14-2.97v2.07a.08.08 0 0 1-.03.07l-4.19 2.42a4.11 4.11 0 0 1-5.72-.36Zm-1.4-8.8a4.07 4.07 0 0 1 1.92-1.72v.17l-.01 4.85a.8.8 0 0 0 .4.69l5.14 2.97-1.8 1.04a.08.08 0 0 1-.07 0l-4.19-2.42a4.11 4.11 0 0 1-1.39-5.58Zm14.67 2.6-5.14-2.97 1.8-1.04a.08.08 0 0 1 .07 0l4.19 2.42a4.1 4.1 0 0 1 1.92 3.86 4.08 4.08 0 0 1-.53 1.72v-.17l.01-4.85a.8.8 0 0 0-.4-.69l-1.92-1.11v2.83Zm2.28 4.77a4.08 4.08 0 0 1-.2 1.18l-.14-.09-4.2-2.42a.8.8 0 0 0-.8 0l-5.14 2.97V14.9a.08.08 0 0 1 .03-.07l4.19-2.42a4.11 4.11 0 0 1 6.26 3.9Zm-9.98-3.35-2.05-1.18 2.05-1.19 2.06 1.19-2.06 1.18Z"
      />
    ),
  },
  {
    name: "Next.js",
    role: "Full-Stack Architecture",
    svg: (
      <path
        fill="currentColor"
        d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm5.4 17.5-6.8-8.85v8.85H9V6.5h1.8l6.8 8.85V6.5h1.6v11h-1.8Z"
      />
    ),
  },
  {
    name: "React",
    role: "Component Systems",
    svg: (
      <path
        fill="currentColor"
        d="M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0-7.5C6.5 2 2 4.7 2 8s4.5 6 10 6 10-2.7 10-6-4.5-6-10-6Zm0 10.5c-4.7 0-8.5-2-8.5-4.5S7.3 3.5 12 3.5s8.5 2 8.5 4.5-3.8 4.5-8.5 4.5Zm-8.7 4.1c-2.3 4-1.2 7.7 2.4 9.8 3.7 2.1 8.5.8 10.8-3.2 2.3-4 1.2-7.7-2.4-9.8-3.7-2.1-8.5-.8-10.8 3.2Zm1.5.8c1.9-3.4 5.9-4.5 9-2.7s3.8 5.7 1.9 9.1c-1.9 3.4-5.9 4.5-9 2.7-3.2-1.8-3.8-5.7-1.9-9.1Zm17.4-4.9c-2.3-4-7.1-5.3-10.8-3.2-3.7 2.1-4.8 5.8-2.4 9.8 2.3 4 7.1 5.3 10.8 3.2 3.6-2.1 4.7-5.8 2.4-9.8Zm-1.5.9c1.9 3.4 1.3 7.3-1.9 9.1-3.1 1.8-7.1.7-9-2.7-1.9-3.4-1.3-7.3 1.9-9.1 3.1-1.8 7.1-.7 9 2.7Z"
      />
    ),
  },
  {
    name: "Firebase",
    role: "RTDB & Cloud Functions",
    svg: (
      <path
        fill="currentColor"
        d="m4.2 17.8 2.5-15.6c.1-.4.5-.6.9-.4l3.7 7-7.1 9Zm8.2-5.4-3.1-6c-.2-.4-.8-.4-1 0L2.2 18.2l10.2-5.8Zm8.3 4.8L18.6 3.6c-.1-.5-.7-.6-1-.3L3.1 19.3l8.6 4.8c.6.3 1.3.3 1.9 0l7.1-4.9Z"
      />
    ),
  },
  {
    name: "Node.js",
    role: "API Routes & Webhooks",
    svg: (
      <path
        fill="currentColor"
        d="M12 2 3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2Zm-1 15.7-5.5-3.2v-6.3L11 5.1v12.6Zm2 0V5.1l5.5 3.1v6.3L13 17.7Z"
      />
    ),
  },
  {
    name: "Tailwind",
    role: "UI Token Design",
    svg: (
      <path
        fill="currentColor"
        d="M12 6c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8C15 11.8 16.6 13.5 20.4 13.5c3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8C17.4 7.7 15.8 6 12 6ZM3.6 13.5c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8C6.6 19.3 8.2 21 12 21c3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8-1.3-1.3-2.9-3-6.7-3Z"
      />
    ),
  },
];

const Hero = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [hoveredTech, setHoveredTech] = useState(null);
  
  // Custom states for the magnetic sticky effect
  const [isSticky, setIsSticky] = useState(false);
  const originRef = useRef(null);
  const stickyTimeoutRef = useRef(null); // Tracks the 3-second sticky timer

  // --- PHYSICS-BASED LANYARD & ID CARD LOGIC ---
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  const dragXSpring = useSpring(dragX, { stiffness: 120, damping: 12, mass: 0.9 });
  const dragYSpring = useSpring(dragY, { stiffness: 120, damping: 12, mass: 0.9 });

  const rotateZ = useTransform(dragXSpring, [-180, 180], [-10, 10]);
  const rotateY = useTransform(dragXSpring, [-180, 180], [-7, 7]);
  const rotateX = useTransform(dragYSpring, [-180, 180], [7, -7]);

  // --- HOLOGRAPHIC GLARE LOGIC ---
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set(e.clientX - rect.left);
    pointerY.set(e.clientY - rect.top);
  };

  const glareBackground = useMotionTemplate`radial-gradient(circle 200px at ${pointerX}px ${pointerY}px, rgba(255,255,255,0.08), transparent 80%)`;

  // --- INTERACTION LOGIC (Drag vs Double Click) ---
  const handleDragEnd = () => {
    setIsSticky(true);
    
    // Clear any existing timer so they don't overlap
    if (stickyTimeoutRef.current) clearTimeout(stickyTimeoutRef.current);
    
    // After 3 seconds, release the magnetic link
    stickyTimeoutRef.current = setTimeout(() => {
      setIsSticky(false);
    }, 3000);
  };

  const handleDoubleClick = () => {
    // If the user double clicks, immediately cancel the magnetic sticky effect
    setIsSticky(false);
    if (stickyTimeoutRef.current) clearTimeout(stickyTimeoutRef.current);

    // Trigger the scan
    if (isScanning) return;
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 2000);
  };

  // Clean up the timeout if the component unmounts
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
      // Smoothly swing back to origin
      animate(dragX, 0, { type: "spring", stiffness: 120, damping: 12, mass: 0.9 });
      animate(dragY, 0, { type: "spring", stiffness: 120, damping: 12, mass: 0.9 });
    }
  }, [isSticky, dragX, dragY]);

  // --- TEXT VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const ambientFloat = {
    float: {
      y: [0, -6, 0],
      rotateZ: [0, -0.5, 0.5, 0],
      transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[var(--background)] py-20">
      {/* 1. ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(circle at 70% 45%, black, transparent 80%)",
            WebkitMaskImage: "radial-gradient(circle at 70% 45%, black, transparent 80%)",
          }}
        />
        <div className="absolute right-0 top-1/4 w-[40vw] h-[40vw] bg-[var(--primary)]/15 rounded-full blur-[140px]" />
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        {/* LEFT COLUMN: Typography, CTAs & Interactive Tech Stack */}
        <motion.div
          className="flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={textVariants} className="mb-6">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)]/80 backdrop-blur-md shadow-sm cursor-default">
              <span className="flex h-2 w-2 mr-2.5">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[var(--success)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--success)] shadow-[0_0_8px_var(--success)]"></span>
              </span>
              <span className="text-[11px] font-mono font-medium text-[var(--foreground)] tracking-widest uppercase">
                SYSTEM ONLINE • LEVEL 9 ACCESS
              </span>
            </div>
          </motion.div>

          {/* Name Headline */}
          <motion.div variants={textVariants} className="mb-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-[var(--foreground)] leading-[1.05]">
              Abdul <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
                Moid
              </span>
            </h1>
          </motion.div>

          {/* Designation */}
          <motion.div variants={textVariants} className="mb-6">
            <h2 className="text-xl sm:text-2xl font-mono text-[var(--foreground)] flex items-center gap-2">
              <span className="text-[var(--primary)] font-bold">{">"}</span> AI and Full-Stack Engineer
              <span className="animate-pulse text-[var(--primary)] font-bold">_</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={textVariants}
            className="text-base sm:text-lg text-[var(--foreground-muted)] max-w-lg mb-8 leading-relaxed font-normal"
          >
            I engineer complex, data-driven architectures. From WebRTC voice streaming to intelligent CRMs, I build robust{" "}
            <span className="text-[var(--foreground)] font-semibold border-b border-[var(--primary)]/40 pb-0.5">
              AI-integrated applications
            </span>{" "}
            that scale flawlessly.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={textVariants} className="flex flex-wrap gap-4 w-full mb-10">
            <Link
              href="https://github.com/abdulmoiddd"
              className="px-7 py-3.5 rounded-lg font-medium transition-all bg-[var(--primary)] text-white hover:scale-[1.02] hover:shadow-[var(--neon-glow)] flex items-center gap-2 text-sm"
            >
              View Infrastructure
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="#contact"
              className="px-7 py-3.5 rounded-lg font-medium transition-all border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[var(--primary)] hover:text-[var(--primary)] text-[var(--foreground)] text-sm"
            >
              Initialize Contact
            </Link>
          </motion.div>

          {/* Interactive Tech Dock */}
          <motion.div variants={textVariants} className="w-full">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--foreground-muted)] block mb-3">
              Active Production Stack
            </span>
            <div className="flex items-center gap-2.5 flex-wrap">
              {TECH_STACK.map((tech) => (
                <div key={tech.name} className="relative">
                  <motion.button
                    type="button"
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:border-[var(--primary)]/60 hover:shadow-md transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      {tech.svg}
                    </svg>
                  </motion.button>

                  <AnimatePresence>
                    {hoveredTech === tech.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-md bg-[var(--surface-alt)] border border-[var(--border-color)] shadow-xl whitespace-nowrap z-30 pointer-events-none"
                      >
                        <div className="text-[11px] font-mono font-bold text-[var(--foreground)]">{tech.name}</div>
                        <div className="text-[9px] font-mono text-[var(--accent-blue)]">{tech.role}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Realistic Suspended ID Badge */}
        <div ref={originRef} className="relative hidden lg:flex w-full h-[620px] justify-center items-center pointer-events-none perspective-[1200px]">
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
            // Disable default drag constraints during the 3-second sticky phase to avoid physics conflicts
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
                <span className="text-[8px] font-mono text-[var(--foreground-muted)] tracking-widest">NFC // PASS</span>
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
      
    </section>
    
  );
};

export default Hero;