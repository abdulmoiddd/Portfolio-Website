"use client";

/**
 * Skills.jsx — Tech Stack Bento Grid
 *
 * Layout: 8-cell tight icon grid (4×2 desktop, 2×4 tablet, 1 col mobile)
 * + a live detail inspector strip below
 * + a 3-pillar architecture footer
 *
 * Interactions:
 *  - Per-card 3D tilt driven by mouse position (spring physics, 6° max)
 *  - Gradient border reveal on hover (CSS clip-path sweep, no JS)
 *  - Selected state: Cyber Yellow ring + accent glow on icon
 *  - No blinking. No text filler. Icon-first density.
 */

import { useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";

// ─── Tech Stack Data (icons preserved from original) ──────────────────────────
const CORE_STACK = [
  {
    id: "nextjs", index: "01", name: "Next.js",
    category: "Full-Stack Web", spec: "App Router · SSR · Edge",
    proficiency: 96, color: "#F5E623",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm5.4 17.5-6.8-8.85v8.85H9V6.5h1.8l6.8 8.85V6.5h1.6v11h-1.8Z" />
      </svg>
    ),
    description: "Core production framework for multi-tenant SaaS. Server actions, dynamic caching, and high-performance frontend architecture.",
    productionUse: "Powers CloseDesk and enterprise portals with sub-second LCP and edge-cached dynamic routes.",
  },
  {
    id: "nodejs", index: "02", name: "Node.js",
    category: "Backend Runtime", spec: "REST · Webhooks · Async I/O",
    proficiency: 92, color: "#84CC16",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M12 2 3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2Zm-1 15.7-5.5-3.2v-6.3L11 5.1v12.6Zm2 0V5.1l5.5 3.1v6.3L13 17.7Z" />
      </svg>
    ),
    description: "Asynchronous server runtime for scalable REST APIs, webhook consumers, dynamic SMTP mail engines, and middleware security.",
    productionUse: "Handles concurrent webhook ingestion and multi-tenant authorization barriers in production.",
  },
  {
    id: "reactnative", index: "03", name: "React Native",
    category: "Mobile", spec: "iOS · Android · Native Feel",
    proficiency: 94, color: "#38BDF8",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0-7.5C6.5 2 2 4.7 2 8s4.5 6 10 6 10-2.7 10-6-4.5-6-10-6Zm0 10.5c-4.7 0-8.5-2-8.5-4.5S7.3 3.5 12 3.5s8.5 2 8.5 4.5-3.8 4.5-8.5 4.5Zm-8.7 4.1c-2.3 4-1.2 7.7 2.4 9.8 3.7 2.1 8.5.8 10.8-3.2 2.3-4 1.2-7.7-2.4-9.8-3.7-2.1-8.5-.8-10.8 3.2Zm1.5.8c1.9-3.4 5.9-4.5 9-2.7s3.8 5.7 1.9 9.1c-1.9 3.4-5.9 4.5-9 2.7-3.2-1.8-3.8-5.7-1.9-9.1Zm17.4-4.9c-2.3-4-7.1-5.3-10.8-3.2-3.7 2.1-4.8 5.8-2.4 9.8 2.3 4 7.1 5.3 10.8 3.2 3.6-2.1 4.7-5.8 2.4-9.8Zm-1.5.9c1.9 3.4 1.3 7.3-1.9 9.1-3.1 1.8-7.1.7-9-2.7-1.9-3.4-1.3-7.3 1.9-9.1 3.1-1.8 7.1-.7 9 2.7Z" />
      </svg>
    ),
    description: "Cross-platform mobile apps with native fluid feel, hardware sensor integration, and offline-first database sync.",
    productionUse: "Architected PocketPool and the Brand Warranty Verification mobile suite.",
  },
  {
    id: "expo", index: "04", name: "Expo",
    category: "Mobile Tooling", spec: "EAS · Offline · Native APIs",
    proficiency: 92, color: "#A855F7",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm-.9 17.5-4.2-7.35h3.1l2.4 4.5 2.4-4.5h3.1l-4.2 7.35h-2.6Z" />
      </svg>
    ),
    description: "Rapid cross-platform deployment, native module bridging, push notifications, and local encrypted cache management.",
    productionUse: "Enables offline hardware warranty scanning with instantaneous cloud synchronization.",
  },
  {
    id: "tailwind", index: "05", name: "Tailwind CSS",
    category: "Design System", spec: "CSS Vars · Tokens · Fluid",
    proficiency: 98, color: "#06B6D4",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M12 6c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8C15 11.8 16.6 13.5 20.4 13.5c3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8C17.4 7.7 15.8 6 12 6ZM3.6 13.5c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8C6.6 19.3 8.2 21 12 21c3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8-1.3-1.3-2.9-3-6.7-3Z" />
      </svg>
    ),
    description: "Utility-first styling with CSS variable token architectures for seamless light/dark theming and micro-interactions.",
    productionUse: "Custom design token architectures across 6+ production web applications.",
  },
  {
    id: "firebase", index: "06", name: "Firebase",
    category: "Cloud Database", spec: "RTDB · Auth · Cloud Fns",
    proficiency: 92, color: "#F59E0B",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="m4.2 17.8 2.5-15.6c.1-.4.5-.6.9-.4l3.7 7-7.1 9Zm8.2-5.4-3.1-6c-.2-.4-.8-.4-1 0L2.2 18.2l10.2-5.8Zm8.3 4.8L18.6 3.6c-.1-.5-.7-.6-1-.3L3.1 19.3l8.6 4.8c.6.3 1.3.3 1.9 0l7.1-4.9Z" />
      </svg>
    ),
    description: "Realtime Database subscriptions, offline SQLite sync bridges, role-based security rules, and cloud event functions.",
    productionUse: "Delivers 99.9% uptime data persistence and instant tenant state synchronization.",
  },
  {
    id: "webrtc", index: "07", name: "WebRTC",
    category: "Real-Time Streaming", spec: "Sub-200ms · Bi-Directional",
    proficiency: 90, color: "#F5E623",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    description: "Peer-to-peer bi-directional audio/data channels for real-time conversational agents without HTTP latency overhead.",
    productionUse: "Powers the live voice conversation layer in CloseDesk with sub-180ms roundtrip latency.",
  },
  {
    id: "openai", index: "08", name: "OpenAI APIs",
    category: "AI & Intelligence", spec: "Realtime · Vision · Whisper",
    proficiency: 95, color: "#10B981",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M22.28 10.37a5.53 5.53 0 0 0-.44-4.27 5.68 5.68 0 0 0-5.18-2.92 5.58 5.58 0 0 0-2.45.57 5.6 5.6 0 0 0-4.14-1.85 5.68 5.68 0 0 0-5.46 4.07 5.54 5.54 0 0 0-3.3 2.4 5.65 5.65 0 0 0-.74 4.41 5.54 5.54 0 0 0 .44 4.27 5.68 5.68 0 0 0 5.18 2.92c.84 0 1.67-.2 2.45-.57a5.6 5.6 0 0 0 4.14 1.85 5.68 5.68 0 0 0 5.46-4.07 5.54 5.54 0 0 0 3.3-2.4 5.65 5.65 0 0 0 .74-4.41Zm-8.46 10.15a4.08 4.08 0 0 1-2.46-.82l.14-.08 4.2-2.43a.79.79 0 0 0 .4-.69v-5.94l1.79 1.03a.08.08 0 0 1 .04.07v4.83a4.11 4.11 0 0 1-4.11 4.03Zm-8.5-3.69a4.08 4.08 0 0 1-.54-2.54c0-.4.07-.8.2-1.18l.14.09 4.2 2.42a.8.8 0 0 0 .8 0l5.14-2.97v2.07a.08.08 0 0 1-.03.07l-4.19 2.42a4.11 4.11 0 0 1-5.72-.36Zm-1.4-8.8a4.07 4.07 0 0 1 1.92-1.72v.17l-.01 4.85a.8.8 0 0 0 .4.69l5.14 2.97-1.8 1.04a.08.08 0 0 1-.07 0l-4.19-2.42a4.11 4.11 0 0 1-1.39-5.58Zm14.67 2.6-5.14-2.97 1.8-1.04a.08.08 0 0 1 .07 0l4.19 2.42a4.1 4.1 0 0 1 1.92 3.86 4.08 4.08 0 0 1-.53 1.72v-.17l.01-4.85a.8.8 0 0 0-.4-.69l-1.92-1.11v2.83Zm2.28 4.77a4.08 4.08 0 0 1-.2 1.18l-.14-.09-4.2-2.42a.8.8 0 0 0-.8 0l-5.14 2.97V14.9a.08.08 0 0 1 .03-.07l4.19-2.42a4.11 4.11 0 0 1 6.26 3.9Zm-9.98-3.35-2.05-1.18 2.05-1.19 2.06 1.19-2.06 1.18Z" />
      </svg>
    ),
    description: "Native AI integration: Realtime voice streaming, gpt-4o-mini Vision diagnostics, and Whisper transcription.",
    productionUse: "Engineered 24/7 autonomous booking agents and multimodal document vision pipelines.",
  },
];

// ─── 3D Tilt Card ─────────────────────────────────────────────────────────────
function TiltIconCard({ tech, isSelected, onClick }) {
  const ref    = useRef(null);
  const mx     = useMotionValue(0);
  const my     = useMotionValue(0);
  const smx    = useSpring(mx, { damping: 20, stiffness: 280, mass: 0.4 });
  const smy    = useSpring(my, { damping: 20, stiffness: 280, mass: 0.4 });
  const rotateX = useTransform(smy, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(smx, [-0.5, 0.5], ["-6deg", "6deg"]);
  const glare   = useTransform(smx, [-0.5, 0.5], ["rgba(245,230,35,0)", "rgba(245,230,35,0.06)"]);

  const onMove = useCallback((e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width  - 0.5);
    my.set((e.clientY - r.top)  / r.height - 0.5);
  }, [mx, my]);

  const onLeave = useCallback(() => { mx.set(0); my.set(0); }, [mx, my]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.02 }}
      transition={{ scale: { type: "spring", damping: 22, stiffness: 380 } }}
      className="interactive group relative cursor-pointer perspective-800"
    >
      {/* Gradient border reveal — CSS pseudo-element via inline style */}
      <div
        className="
          relative p-4 rounded-[var(--bento-radius)] flex flex-col gap-3
          border transition-all duration-300
          overflow-hidden
        "
        style={{
          background: isSelected
            ? `linear-gradient(135deg, rgba(245,230,35,0.08), rgba(202,202,96,0.04))`
            : "var(--clr-surface-card)",
          borderColor: isSelected ? "rgba(245,230,35,0.7)" : "var(--clr-border)",
          boxShadow: isSelected
            ? "0 0 0 1px rgba(245,230,35,0.4), 0 8px 32px rgba(245,230,35,0.14)"
            : "var(--shadow-card)",
        }}
      >
        {/* Tilt glare overlay */}
        <motion.div
          className="absolute inset-0 rounded-[var(--bento-radius)] pointer-events-none z-10"
          style={{ background: glare }}
        />

        {/* Gradient border sweep on hover (pseudo-border trick) */}
        <div
          className="absolute inset-0 rounded-[var(--bento-radius)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, rgba(245,230,35,0.15) 0%, transparent 60%)`,
          }}
        />

        {/* Top row: icon + index */}
        <div className="flex items-start justify-between">
          {/* Icon container */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300"
            style={{
              backgroundColor: isSelected ? `${tech.color}22` : `${tech.color}14`,
              color: isSelected ? tech.color : tech.color,
              borderColor: isSelected ? `${tech.color}60` : `${tech.color}28`,
              boxShadow: isSelected ? `0 0 16px ${tech.color}30` : "none",
              transform: "translateZ(10px)",
            }}
          >
            {tech.icon}
          </div>
          <span
            className="label-mono font-bold"
            style={{ color: isSelected ? "#F5E623" : "var(--clr-ink-muted)" }}
          >
            #{tech.index}
          </span>
        </div>

        {/* Name + category */}
        <div style={{ transform: "translateZ(6px)" }}>
          <h3
            className="font-black text-sm tracking-tight leading-tight transition-colors duration-200"
            style={{ color: isSelected ? "#F5E623" : "var(--clr-ink)" }}
          >
            {tech.name}
          </h3>
          <span className="label-mono mt-0.5 block">{tech.category}</span>
        </div>

        {/* Spec tag */}
        <div
          className="inline-block px-2 py-0.5 rounded-md border label-mono"
          style={{
            background: "var(--clr-surface-sub)",
            borderColor: "var(--clr-border)",
            color: "var(--clr-ink-muted)",
            transform: "translateZ(4px)",
          }}
        >
          {tech.spec}
        </div>

        {/* Proficiency bar */}
        <div className="mt-auto pt-2.5 border-t" style={{ borderColor: "var(--clr-border)" }}>
          <div className="flex justify-between items-center mb-1">
            <span className="label-mono">Fluency</span>
            <span
              className="label-mono font-bold"
              style={{ color: isSelected ? "#F5E623" : "var(--clr-ink)" }}
            >
              {tech.proficiency}%
            </span>
          </div>
          <div
            className="w-full h-1 rounded-full overflow-hidden"
            style={{ background: "var(--clr-surface-sub)" }}
          >
            <motion.div
              className="h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${tech.proficiency}%` }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: isSelected
                  ? "linear-gradient(90deg, #F5E623, #CACA60)"
                  : `linear-gradient(90deg, ${tech.color}cc, ${tech.color}66)`,
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Skills Component ─────────────────────────────────────────────────────
export default function Skills() {
  const [selected, setSelected] = useState(CORE_STACK[0]);

  return (
    <section
      id="skills"
      className="relative w-full py-16 md:py-24 overflow-hidden border-t"
      style={{ borderColor: "var(--clr-border)" }}
    >
      {/* Static radial mesh — no animation */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 90% 10%, rgba(245,230,35,0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 10% 90%, rgba(202,202,96,0.05) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6">

        {/* ── Section Header ─────────────────────────────────────────────── */}
        <div
          className="mb-8 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-5 border-b"
          style={{ borderColor: "var(--clr-border)" }}
        >
          <div>
            <div
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg border mb-3"
              style={{ background: "var(--clr-surface-sub)", borderColor: "var(--clr-border)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--clr-accent)]" />
              <span className="label-mono">SPEC // 02 · CORE RUNTIME MODULES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight" style={{ color: "var(--clr-ink)" }}>
              Technical{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(110deg, #F5E623 0%, #CACA60 60%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Architecture Matrix
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-3 label-mono" style={{ color: "var(--clr-ink-muted)" }}>
            <span
              className="px-2.5 py-1 rounded-lg border"
              style={{ background: "var(--clr-surface-card)", borderColor: "var(--clr-border)" }}
            >
              [08 / 08 ACTIVE]
            </span>
            <span className="hidden sm:inline font-bold" style={{ color: "#F5E623" }}>
              PRODUCTION READY
            </span>
          </div>
        </div>

        {/* ── 8-Cell Icon Grid ───────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
          {CORE_STACK.map((tech) => (
            <TiltIconCard
              key={tech.id}
              tech={tech}
              isSelected={selected.id === tech.id}
              onClick={() => setSelected(tech)}
            />
          ))}
        </div>

        {/* ── Detail Inspector Strip ─────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="bento-cell p-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">

              {/* Identity */}
              <div className="md:col-span-4 flex items-center gap-3.5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border"
                  style={{
                    backgroundColor: `${selected.color}20`,
                    color: selected.color,
                    borderColor: `${selected.color}44`,
                    boxShadow: `0 0 20px ${selected.color}20`,
                  }}
                >
                  {selected.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="label-mono font-bold" style={{ color: "#F5E623" }}>ACTIVE INSPECTION</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--clr-accent)]" />
                  </div>
                  <h4 className="text-lg font-black tracking-tight" style={{ color: "var(--clr-ink)" }}>
                    {selected.name}
                  </h4>
                  <p className="label-mono">{selected.spec}</p>
                </div>
              </div>

              {/* Capability */}
              <div
                className="md:col-span-4 md:border-l md:pl-5"
                style={{ borderColor: "var(--clr-border)" }}
              >
                <span className="label-mono block mb-1.5">Capability Scope</span>
                <p className="text-xs leading-relaxed" style={{ color: "var(--clr-ink)" }}>
                  {selected.description}
                </p>
              </div>

              {/* Production use */}
              <div
                className="md:col-span-4 md:border-l md:pl-5"
                style={{ borderColor: "var(--clr-border)" }}
              >
                <span className="label-mono block mb-1.5 font-bold" style={{ color: "#F5E623" }}>
                  Production Application
                </span>
                <p className="text-xs leading-relaxed" style={{ color: "var(--clr-ink-muted)" }}>
                  {selected.productionUse}
                </p>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── 3-Pillar Architecture Footer ───────────────────────────────── */}
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { dot: "#10B981", label: "Pillar 01 // Voice & AI",    desc: "WebRTC · OpenAI Realtime · Vision" },
            { dot: "#F5E623", label: "Pillar 02 // Full-Stack",     desc: "Next.js 14 · Node.js · Firebase"   },
            { dot: "#38BDF8", label: "Pillar 03 // Mobile & Offline", desc: "React Native · Expo EAS · Cache" },
          ].map((p) => (
            <div
              key={p.label}
              className="flex items-center gap-3 px-4 py-3 rounded-[var(--bento-radius-sm)] border"
              style={{ background: "var(--clr-surface-card)", borderColor: "var(--clr-border)" }}
            >
              <span className="w-2 h-2 rounded-full shrink-0" style={{ background: p.dot }} />
              <div className="min-w-0">
                <span className="label-mono block">{p.label}</span>
                <p className="text-xs font-semibold truncate" style={{ color: "var(--clr-ink)" }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
