"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CORE_STACK = [
  {
    id: "nextjs",
    index: "01",
    name: "Next.js",
    category: "Full-Stack Web",
    spec: "App Router / SSR / Server Actions",
    proficiency: 96,
    color: "#EAB308",
    description:
      "Core production framework for multi-tenant SaaS platforms, server actions, dynamic caching, and high-performance frontend architecture.",
    productionUse: "Powers CloseDesk and enterprise portals with sub-second LCP and edge-cached dynamic routes.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm5.4 17.5-6.8-8.85v8.85H9V6.5h1.8l6.8 8.85V6.5h1.6v11h-1.8Z" />
      </svg>
    ),
  },
  {
    id: "nodejs",
    index: "02",
    name: "Node.js",
    category: "Backend Runtime",
    spec: "Asynchronous I/O / REST / Webhooks",
    proficiency: 92,
    color: "#84CC16",
    description:
      "Asynchronous server runtime for scalable RESTful APIs, webhook consumers, dynamic SMTP mail engines, and middleware security checks.",
    productionUse: "Handles concurrent webhook ingestion and multi-tenant authorization barriers in production.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
        <path d="M12 2 3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2Zm-1 15.7-5.5-3.2v-6.3L11 5.1v12.6Zm2 0V5.1l5.5 3.1v6.3L13 17.7Z" />
      </svg>
    ),
  },
  {
    id: "reactnative",
    index: "03",
    name: "React Native",
    category: "Mobile Architecture",
    spec: "Cross-Platform iOS & Android",
    proficiency: 94,
    color: "#38BDF8",
    description:
      "Engineered cross-platform mobile apps with native fluid feel, hardware sensor integration, and offline-first database synchronization.",
    productionUse: "Architected PocketPool and the Brand Warranty Verification mobile suite.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
        <path d="M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0-7.5C6.5 2 2 4.7 2 8s4.5 6 10 6 10-2.7 10-6-4.5-6-10-6Zm0 10.5c-4.7 0-8.5-2-8.5-4.5S7.3 3.5 12 3.5s8.5 2 8.5 4.5-3.8 4.5-8.5 4.5Zm-8.7 4.1c-2.3 4-1.2 7.7 2.4 9.8 3.7 2.1 8.5.8 10.8-3.2 2.3-4 1.2-7.7-2.4-9.8-3.7-2.1-8.5-.8-10.8 3.2Zm1.5.8c1.9-3.4 5.9-4.5 9-2.7s3.8 5.7 1.9 9.1c-1.9 3.4-5.9 4.5-9 2.7-3.2-1.8-3.8-5.7-1.9-9.1Zm17.4-4.9c-2.3-4-7.1-5.3-10.8-3.2-3.7 2.1-4.8 5.8-2.4 9.8 2.3 4 7.1 5.3 10.8 3.2 3.6-2.1 4.7-5.8 2.4-9.8Zm-1.5.9c1.9 3.4 1.3 7.3-1.9 9.1-3.1 1.8-7.1.7-9-2.7-1.9-3.4-1.3-7.3 1.9-9.1 3.1-1.8 7.1-.7 9 2.7Z" />
      </svg>
    ),
  },
  {
    id: "expo",
    index: "04",
    name: "Expo",
    category: "Mobile Tooling",
    spec: "EAS / Offline Storage / Native APIs",
    proficiency: 92,
    color: "#A855F7",
    description:
      "Rapid cross-platform deployment, native module bridging, push notifications, and local encrypted cache management.",
    productionUse: "Enables offline hardware warranty scanning with instantaneous cloud synchronization.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
        <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm-.9 17.5-4.2-7.35h3.1l2.4 4.5 2.4-4.5h3.1l-4.2 7.35h-2.6Z" />
      </svg>
    ),
  },
  {
    id: "tailwind",
    index: "05",
    name: "Tailwind CSS",
    category: "Design System",
    spec: "CSS Variables / Fluid Tokens",
    proficiency: 98,
    color: "#06B6D4",
    description:
      "Utility-first styling architected with CSS variables for seamless light/dark theming, micro-interactions, responsive fluid grids, and animations.",
    productionUse: "Crafted custom design token architectures across 6+ production web applications.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
        <path d="M12 6c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8C15 11.8 16.6 13.5 20.4 13.5c3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8C17.4 7.7 15.8 6 12 6ZM3.6 13.5c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8C6.6 19.3 8.2 21 12 21c3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8-1.3-1.3-2.9-3-6.7-3Z" />
      </svg>
    ),
  },
  {
    id: "firebase",
    index: "06",
    name: "Firebase",
    category: "Cloud Database",
    spec: "RTDB / Cloud Functions / Auth",
    proficiency: 92,
    color: "#F59E0B",
    description:
      "Realtime Database subscriptions, offline SQLite sync bridges, role-based security rules, and cloud event functions.",
    productionUse: "Delivers 99.9% uptime data persistence and instant tenant state synchronization.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
        <path d="m4.2 17.8 2.5-15.6c.1-.4.5-.6.9-.4l3.7 7-7.1 9Zm8.2-5.4-3.1-6c-.2-.4-.8-.4-1 0L2.2 18.2l10.2-5.8Zm8.3 4.8L18.6 3.6c-.1-.5-.7-.6-1-.3L3.1 19.3l8.6 4.8c.6.3 1.3.3 1.9 0l7.1-4.9Z" />
      </svg>
    ),
  },
  {
    id: "webrtc",
    index: "07",
    name: "WebRTC",
    category: "Real-Time Streaming",
    spec: "Sub-200ms Bi-Directional Audio",
    proficiency: 90,
    color: "#EAB308",
    description:
      "Peer-to-peer and client-to-server bi-directional audio/data channels engineered for real-time conversational agents without HTTP latency.",
    productionUse: "Powers the live voice conversation layer in CloseDesk with sub-180ms latency.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
  },
  {
    id: "openai",
    index: "08",
    name: "OpenAI APIs",
    category: "AI & Intelligence",
    spec: "Realtime API / Vision / Whisper",
    proficiency: 95,
    color: "#10B981",
    description:
      "Native AI integration: OpenAI Realtime voice streaming, gpt-4o-mini Vision diagnostics, and Whisper automated transcription models.",
    productionUse: "Engineered 24/7 autonomous booking agents and multimodal document vision pipelines.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
        <path d="M22.28 10.37a5.53 5.53 0 0 0-.44-4.27 5.68 5.68 0 0 0-5.18-2.92 5.58 5.58 0 0 0-2.45.57 5.6 5.6 0 0 0-4.14-1.85 5.68 5.68 0 0 0-5.46 4.07 5.54 5.54 0 0 0-3.3 2.4 5.65 5.65 0 0 0-.74 4.41 5.54 5.54 0 0 0 .44 4.27 5.68 5.68 0 0 0 5.18 2.92c.84 0 1.67-.2 2.45-.57a5.6 5.6 0 0 0 4.14 1.85 5.68 5.68 0 0 0 5.46-4.07 5.54 5.54 0 0 0 3.3-2.4 5.65 5.65 0 0 0 .74-4.41Zm-8.46 10.15a4.08 4.08 0 0 1-2.46-.82l.14-.08 4.2-2.43a.79.79 0 0 0 .4-.69v-5.94l1.79 1.03a.08.08 0 0 1 .04.07v4.83a4.11 4.11 0 0 1-4.11 4.03Zm-8.5-3.69a4.08 4.08 0 0 1-.54-2.54c0-.4.07-.8.2-1.18l.14.09 4.2 2.42a.8.8 0 0 0 .8 0l5.14-2.97v2.07a.08.08 0 0 1-.03.07l-4.19 2.42a4.11 4.11 0 0 1-5.72-.36Zm-1.4-8.8a4.07 4.07 0 0 1 1.92-1.72v.17l-.01 4.85a.8.8 0 0 0 .4.69l5.14 2.97-1.8 1.04a.08.08 0 0 1-.07 0l-4.19-2.42a4.11 4.11 0 0 1-1.39-5.58Zm14.67 2.6-5.14-2.97 1.8-1.04a.08.08 0 0 1 .07 0l4.19 2.42a4.1 4.1 0 0 1 1.92 3.86 4.08 4.08 0 0 1-.53 1.72v-.17l.01-4.85a.8.8 0 0 0-.4-.69l-1.92-1.11v2.83Zm2.28 4.77a4.08 4.08 0 0 1-.2 1.18l-.14-.09-4.2-2.42a.8.8 0 0 0-.8 0l-5.14 2.97V14.9a.08.08 0 0 1 .03-.07l4.19-2.42a4.11 4.11 0 0 1 6.26 3.9Zm-9.98-3.35-2.05-1.18 2.05-1.19 2.06 1.19-2.06 1.18Z" />
      </svg>
    ),
  },
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(CORE_STACK[0]);

  return (
    <section
      id="skills"
      className="relative w-full py-16 md:py-24 bg-[var(--background)] overflow-hidden border-t border-[var(--border-color)]"
    >
      {/* Background Subtle Mesh (Static, Clean) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(250, 204, 21, 0.08) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(217, 119, 6, 0.06) 0%, transparent 45%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Section Header: Compact Bento HUD Bar */}
        <div className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border-color)] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[var(--background-subtle)] border border-[var(--border-color)] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
              <span className="font-mono text-[11px] font-semibold tracking-wider text-[var(--foreground-muted)] uppercase">
                SPEC // 02 • CORE RUNTIME MODULES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--foreground)] tracking-tight">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 dark:from-yellow-300 dark:via-amber-400 dark:to-yellow-500">Architecture Matrix</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-[var(--foreground-muted)]">
            <span className="px-2.5 py-1 rounded bg-[var(--card-bg)] border border-[var(--border-color)]">
              [08 / 08 ACTIVE]
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline text-[var(--primary)] font-semibold">
              READY FOR PRODUCTION
            </span>
          </div>
        </div>

        {/* High-Density 8-Cell Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {CORE_STACK.map((tech) => {
            const isSelected = selectedSkill.id === tech.id;

            return (
              <motion.div
                key={tech.id}
                onClick={() => setSelectedSkill(tech)}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15 }}
                className={`group interactive relative p-4 rounded-xl cursor-pointer transition-all duration-200 flex flex-col justify-between border ${
                  isSelected
                    ? "bg-[var(--card-bg-elevated)] border-[var(--primary)] shadow-sm ring-1 ring-[var(--primary)]/30"
                    : "bg-[var(--card-bg)] border-[var(--border-color)] hover:border-[var(--primary)]/70 hover:bg-[var(--background-subtle)]"
                }`}
              >
                {/* Top Row: Index + Static Crisp Icon + Category */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    {/* Crisp Static Icon Container (NO pulsing/blinking) */}
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors border"
                      style={{
                        backgroundColor: `${tech.color}14`,
                        color: tech.color,
                        borderColor: `${tech.color}30`,
                      }}
                    >
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[var(--foreground)] tracking-tight leading-tight group-hover:text-[var(--primary)] transition-colors">
                        {tech.name}
                      </h3>
                      <span className="text-[10px] font-mono text-[var(--foreground-muted)] block uppercase tracking-wider">
                        {tech.category}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] text-[var(--foreground-muted)] font-semibold">
                    #{tech.index}
                  </span>
                </div>

                {/* Spec Tag */}
                <div className="mb-3">
                  <span className="inline-block text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-[var(--background-subtle)] text-[var(--foreground)] border border-[var(--border-color)] truncate max-w-full">
                    {tech.spec}
                  </span>
                </div>

                {/* Compact Proficiency Meter */}
                <div className="mt-auto pt-2 border-t border-[var(--border-color)]/70">
                  <div className="flex justify-between items-center mb-1 text-[10px] font-mono">
                    <span className="text-[var(--foreground-muted)] uppercase">Fluency</span>
                    <span className="font-bold text-[var(--foreground)]">{tech.proficiency}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[var(--background-subtle)] overflow-hidden border border-[var(--border-color)]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-400 to-yellow-500"
                      style={{ width: `${tech.proficiency}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Module Deep-Dive Inspector (Edge-to-Edge Compact HUD) */}
        <div className="mt-4 p-5 rounded-xl bg-[var(--card-bg-elevated)] border border-[var(--border-color)] shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSkill.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center"
            >
              {/* Col 1: Identity & Badge (Span 4) */}
              <div className="md:col-span-4 flex items-center gap-3.5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border"
                  style={{
                    backgroundColor: `${selectedSkill.color}18`,
                    color: selectedSkill.color,
                    borderColor: `${selectedSkill.color}40`,
                  }}
                >
                  {selectedSkill.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[var(--primary)] font-bold uppercase tracking-wider">
                      ACTIVE INSPECTION
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                  </div>
                  <h4 className="text-xl font-black text-[var(--foreground)] tracking-tight">
                    {selectedSkill.name}
                  </h4>
                  <p className="font-mono text-xs text-[var(--foreground-muted)]">
                    {selectedSkill.spec}
                  </p>
                </div>
              </div>

              {/* Col 2: Architectural Capability (Span 4) */}
              <div className="md:col-span-4 md:border-l md:border-[var(--border-color)] md:pl-5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--foreground-muted)] block mb-1">
                  Capability Scope
                </span>
                <p className="text-xs sm:text-sm text-[var(--foreground)] leading-relaxed">
                  {selectedSkill.description}
                </p>
              </div>

              {/* Col 3: Production Impact (Span 4) */}
              <div className="md:col-span-4 md:border-l md:border-[var(--border-color)] md:pl-5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--primary)] font-bold block mb-1">
                  Production Application
                </span>
                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {selectedSkill.productionUse}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3-Column Architecture Pillar Footer Strip */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
            <div className="min-w-0">
              <span className="font-mono text-[10px] text-[var(--foreground-muted)] uppercase block">
                Pillar 01 // Voice & AI
              </span>
              <p className="text-xs font-semibold text-[var(--foreground)] truncate">
                WebRTC + OpenAI Realtime API + Vision
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
            <div className="min-w-0">
              <span className="font-mono text-[10px] text-[var(--foreground-muted)] uppercase block">
                Pillar 02 // Full-Stack Core
              </span>
              <p className="text-xs font-semibold text-[var(--foreground)] truncate">
                Next.js 14 App Router + Node.js + Firebase
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)] flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-sky-500 shrink-0" />
            <div className="min-w-0">
              <span className="font-mono text-[10px] text-[var(--foreground-muted)] uppercase block">
                Pillar 03 // Mobile & Offline
              </span>
              <p className="text-xs font-semibold text-[var(--foreground)] truncate">
                React Native + Expo EAS + Local Cache
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
