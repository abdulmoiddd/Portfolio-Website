"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CORE_STACK = [
  {
    id: "nextjs",
    name: "Next.js",
    category: "Full-Stack Web",
    proficiency: 96,
    badge: "SSR / SSG / App Router",
    color: "#EAB308",
    description:
      "Core production framework for multi-tenant SaaS platforms, server actions, dynamic caching, and high-performance frontend architecture.",
    productionUse: "Powers CloseDesk by Aicyro and high-traffic corporate portals with 100/100 Lighthouse performance.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm5.4 17.5-6.8-8.85v8.85H9V6.5h1.8l6.8 8.85V6.5h1.6v11h-1.8Z" />
      </svg>
    ),
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend Engine",
    proficiency: 92,
    badge: "REST APIs & Microservices",
    color: "#84CC16",
    description:
      "Asynchronous server runtime for scalable RESTful APIs, webhook consumers, dynamic SMTP mail engines, and middleware security checks.",
    productionUse: "Handles concurrent webhook ingestion and multi-tenant authorization barriers in production.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M12 2 3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2Zm-1 15.7-5.5-3.2v-6.3L11 5.1v12.6Zm2 0V5.1l5.5 3.1v6.3L13 17.7Z" />
      </svg>
    ),
  },
  {
    id: "reactnative",
    name: "React Native",
    category: "Mobile Architecture",
    proficiency: 94,
    badge: "Cross-Platform iOS & Android",
    color: "#38BDF8",
    description:
      "Engineered cross-platform mobile apps with native fluid feel, hardware sensor integration, and offline-first database synchronization.",
    productionUse: "Architected PocketPool and the Brand Warranty Verification mobile suite.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0-7.5C6.5 2 2 4.7 2 8s4.5 6 10 6 10-2.7 10-6-4.5-6-10-6Zm0 10.5c-4.7 0-8.5-2-8.5-4.5S7.3 3.5 12 3.5s8.5 2 8.5 4.5-3.8 4.5-8.5 4.5Zm-8.7 4.1c-2.3 4-1.2 7.7 2.4 9.8 3.7 2.1 8.5.8 10.8-3.2 2.3-4 1.2-7.7-2.4-9.8-3.7-2.1-8.5-.8-10.8 3.2Zm1.5.8c1.9-3.4 5.9-4.5 9-2.7s3.8 5.7 1.9 9.1c-1.9 3.4-5.9 4.5-9 2.7-3.2-1.8-3.8-5.7-1.9-9.1Zm17.4-4.9c-2.3-4-7.1-5.3-10.8-3.2-3.7 2.1-4.8 5.8-2.4 9.8 2.3 4 7.1 5.3 10.8 3.2 3.6-2.1 4.7-5.8 2.4-9.8Zm-1.5.9c1.9 3.4 1.3 7.3-1.9 9.1-3.1 1.8-7.1.7-9-2.7-1.9-3.4-1.3-7.3 1.9-9.1 3.1-1.8 7.1-.7 9 2.7Z" />
      </svg>
    ),
  },
  {
    id: "expo",
    name: "Expo",
    category: "Mobile Tooling",
    proficiency: 92,
    badge: "EAS / Offline Storage / Native APIs",
    color: "#A855F7",
    description:
      "Rapid cross-platform deployment, native module bridging, push notifications, and local encrypted cache management.",
    productionUse: "Enables offline hardware warranty scanning with instantaneous cloud synchronization.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm-.9 17.5-4.2-7.35h3.1l2.4 4.5 2.4-4.5h3.1l-4.2 7.35h-2.6Z" />
      </svg>
    ),
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Design System",
    proficiency: 98,
    badge: "Design Tokens & Themes",
    color: "#06B6D4",
    description:
      "Utility-first styling architected with CSS variables for seamless light/dark theming, micro-interactions, responsive fluid grids, and animations.",
    productionUse: "Crafted custom design token architectures across 6+ production web applications.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M12 6c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8C15 11.8 16.6 13.5 20.4 13.5c3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8C17.4 7.7 15.8 6 12 6ZM3.6 13.5c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8C6.6 19.3 8.2 21 12 21c3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8-1.3-1.3-2.9-3-6.7-3Z" />
      </svg>
    ),
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "Cloud Database",
    proficiency: 92,
    badge: "RTDB & Cloud Functions",
    color: "#F59E0B",
    description:
      "Realtime Database subscriptions, offline SQLite sync bridges, role-based security rules, and cloud event functions.",
    productionUse: "Delivers 99.9% uptime data persistence and instant tenant state synchronization.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="m4.2 17.8 2.5-15.6c.1-.4.5-.6.9-.4l3.7 7-7.1 9Zm8.2-5.4-3.1-6c-.2-.4-.8-.4-1 0L2.2 18.2l10.2-5.8Zm8.3 4.8L18.6 3.6c-.1-.5-.7-.6-1-.3L3.1 19.3l8.6 4.8c.6.3 1.3.3 1.9 0l7.1-4.9Z" />
      </svg>
    ),
  },
  {
    id: "webrtc",
    name: "WebRTC",
    category: "Real-Time Streaming",
    proficiency: 90,
    badge: "Sub-200ms Audio Streams",
    color: "#EAB308",
    description:
      "Peer-to-peer and client-to-server bi-directional audio/data channels engineered for real-time conversational agents without HTTP latency.",
    productionUse: "Powers the live voice conversation layer in CloseDesk with sub-180ms latency.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
  },
  {
    id: "openai",
    name: "OpenAI APIs",
    category: "AI & Intelligence",
    proficiency: 95,
    badge: "Realtime API, Vision & Whisper",
    color: "#10B981",
    description:
      "Native AI integration: OpenAI Realtime voice streaming, gpt-4o-mini Vision diagnostics, and Whisper automated transcription models.",
    productionUse: "Engineered 24/7 autonomous booking agents and multimodal document vision pipelines.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
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
      className="relative w-full py-28 md:py-36 bg-[var(--background)] overflow-hidden border-t border-[var(--border-color)]/60"
    >
      {/* Background Ambient Glow & Grid Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 75% 30%, rgba(250, 204, 21, 0.12) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.08) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Section Header with Gradient Typography */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[var(--border-color)]/70 pb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] mb-4 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary-vibrant)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--primary)]"></span>
              </span>
              <span className="text-xs font-mono tracking-widest text-[var(--foreground-muted)] uppercase font-semibold">
                SYSTEM ARCHITECTURE // CORE STACK
              </span>
            </div>

            <h3 className="text-4xl md:text-6xl font-black text-[var(--foreground)] tracking-tight">
              Interactive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 dark:from-yellow-300 dark:via-amber-400 dark:to-yellow-500">
                Tech Matrix.
              </span>
            </h3>
          </div>

          <p className="text-base sm:text-lg text-[var(--foreground-muted)] font-light max-w-md lg:text-right">
            Click or hover any technology block below to inspect production
            telemetry, architecture role, and real-world system applications.
          </p>
        </motion.div>

        {/* 2-Column Interactive Layout: Grid on Left, Deep-Dive Console on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Grid: 8 Core Stack Cards (8 cols on lg) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CORE_STACK.map((tech) => {
              const isSelected = selectedSkill.id === tech.id;

              return (
                <motion.div
                  key={tech.id}
                  onClick={() => setSelectedSkill(tech)}
                  onMouseEnter={() => setSelectedSkill(tech)}
                  whileHover={{ scale: 1.04, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`interactive relative p-5 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[170px] backdrop-blur-xl border ${
                    isSelected
                      ? "bg-[var(--card-bg-elevated)] border-[var(--primary-vibrant)] shadow-[0_10px_30px_rgba(250,204,21,0.35)]"
                      : "bg-[var(--card-bg)] border-[var(--border-color)] hover:border-[var(--primary-vibrant)]/60 hover:shadow-md"
                  }`}
                >
                  {/* Glowing Top Node */}
                  {isSelected && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[var(--primary-vibrant)] shadow-[0_0_8px_var(--primary-vibrant)]"
                    />
                  )}

                  {/* Floating Animated Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 shadow-inner my-auto"
                    style={{
                      backgroundColor: `${tech.color}15`,
                      color: tech.color,
                      border: `1px solid ${tech.color}35`,
                    }}
                  >
                    <div className="animate-pulse-slow">{tech.icon}</div>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-[var(--foreground)] tracking-tight">
                      {tech.name}
                    </h4>
                    <span className="text-[10px] font-mono text-[var(--foreground-muted)] block mt-0.5">
                      {tech.category}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Live Interactive Architecture Telemetry Console (5 cols on lg) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSkill.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="relative p-8 rounded-3xl bg-[var(--card-bg)] backdrop-blur-2xl border border-[var(--border-color)] shadow-2xl overflow-hidden"
              >
                {/* Radiant Yellow Ambient Glow */}
                <div
                  className="absolute top-0 right-0 w-44 h-44 rounded-full blur-[90px] opacity-25 pointer-events-none"
                  style={{ backgroundColor: selectedSkill.color }}
                />

                {/* Console Top Header */}
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-[var(--border-color)]/60">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: `${selectedSkill.color}20`,
                        color: selectedSkill.color,
                        border: `1px solid ${selectedSkill.color}40`,
                      }}
                    >
                      {selectedSkill.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[var(--foreground-muted)] uppercase">
                        INSPECTION // NODE
                      </span>
                      <h4 className="text-2xl font-black text-[var(--foreground)] tracking-tight">
                        {selectedSkill.name}
                      </h4>
                    </div>
                  </div>

                  <span
                    className="text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                    style={{
                      backgroundColor: `${selectedSkill.color}15`,
                      color: selectedSkill.color,
                      border: `1px solid ${selectedSkill.color}35`,
                    }}
                  >
                    {selectedSkill.proficiency}% PROFICIENCY
                  </span>
                </div>

                {/* Meter Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2 font-mono text-xs">
                    <span className="text-[var(--foreground-muted)]">
                      MASTERY & FLUIDITY
                    </span>
                    <span className="font-bold text-[var(--primary)]">
                      PRODUCTION READY
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[var(--background-subtle)] overflow-hidden p-0.5 border border-[var(--border-color)]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.proficiency}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 shadow-[0_0_10px_rgba(250,204,21,0.5)]"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h5 className="text-[11px] font-mono uppercase tracking-widest text-[var(--foreground-muted)] mb-2">
                    Architectural Capability
                  </h5>
                  <p className="text-base text-[var(--foreground)] font-normal leading-relaxed">
                    {selectedSkill.description}
                  </p>
                </div>

                {/* Production Role in Abdul's Projects */}
                <div className="p-4 rounded-2xl bg-[var(--background-subtle)] border border-[var(--border-color)]/70">
                  <div className="flex items-center gap-2 mb-1.5 font-mono text-xs font-semibold text-[var(--primary)]">
                    <span className="w-2 h-2 rounded-full bg-[var(--primary-vibrant)] animate-pulse" />
                    <span>PRODUCTION APPLICATION</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                    {selectedSkill.productionUse}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
