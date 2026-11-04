"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Skills structured directly from Abdul Moid's updated resume
const SKILLS_DATA = [
  {
    category: "AI & Speech",
    title: "AI & Intelligent Systems",
    color: "var(--primary)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    skills: [
      { name: "OpenAI Realtime API", level: 95, badge: "WebRTC Voice", desc: "Low-latency streaming & voice bots" },
      { name: "Whisper Transcription", level: 92, badge: "Speech-to-Text", desc: "Real-time speech recognition" },
      { name: "Gemini API", level: 90, badge: "Multimodal LLM", desc: "Healthcare & enterprise assistants" },
      { name: "OpenAI Vision & gpt-4o", level: 92, badge: "Diagnostics", desc: "Automated visual analysis" },
      { name: "WebRTC Audio Streaming", level: 90, badge: "Low Latency", desc: "Sub-200ms bi-directional audio" },
      { name: "AWS Polly", level: 85, badge: "TTS Engine", desc: "Neural speech synthesis" },
    ],
  },
  {
    category: "Full-Stack",
    title: "Frontend & Mobile",
    color: "var(--accent-blue)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: [
      { name: "Next.js (App & Pages)", level: 96, badge: "Core Engine", desc: "SSR, SSG & Server Components" },
      { name: "React & React Native", level: 94, badge: "Web & Mobile", desc: "Component systems & Expo apps" },
      { name: "Tailwind CSS", level: 98, badge: "Design Tokens", desc: "Pixel-perfect modern utility styling" },
      { name: "Framer Motion", level: 92, badge: "Interactions", desc: "Physics-based gestures & animations" },
      { name: "JavaScript (ESNext)", level: 95, badge: "Language", desc: "Asynchronous runtime & DOM mastery" },
      { name: "HTML5 / Modern CSS", level: 98, badge: "Standards", desc: "Semantic structure & responsive layouts" },
    ],
  },
  {
    category: "Backend",
    title: "Backend & Automation",
    color: "var(--accent-purple)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    skills: [
      { name: "Node.js & Express.js", level: 90, badge: "REST & APIs", desc: "Microservices & event handling" },
      { name: "Make.com Workflows", level: 92, badge: "Automation", desc: "Pipelines, webhooks & CRM flows" },
      { name: "Cloud Functions", level: 88, badge: "Serverless", desc: "Event-driven background processing" },
      { name: "OAuth2 & SMTP", level: 90, badge: "Auth & Mail", desc: "Native authentication & automated mail" },
      { name: "RESTful Architecture", level: 94, badge: "API Design", desc: "Contract design & endpoint security" },
    ],
  },
  {
    category: "Databases & Design",
    title: "Databases, Cloud & Design",
    color: "var(--success)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    skills: [
      { name: "Firebase RTDB & Storage", level: 92, badge: "Realtime Sync", desc: "Offline caching & live subscriptions" },
      { name: "MongoDB", level: 88, badge: "NoSQL Schemas", desc: "Document modeling & aggregations" },
      { name: "SQL & Relational DBs", level: 85, badge: "Relational", desc: "Complex queries & normalization" },
      { name: "Figma & UI/UX Design", level: 94, badge: "Architecture", desc: "Prototyping & design systems" },
      { name: "Adobe Suite (PS, AI)", level: 90, badge: "Visual Design", desc: "Asset preparation & vector branding" },
      { name: "Git, GitHub & Netlify", level: 95, badge: "DevOps", desc: "Version control & automated deployments" },
    ],
  },
];

// Live Segmented Telemetry Meter
const SegmentedMeter = ({ percentage, color }) => {
  const totalSegments = 16;
  const activeSegments = Math.round((percentage / 100) * totalSegments);

  return (
    <div className="flex items-center gap-[3px]">
      {Array.from({ length: totalSegments }).map((_, i) => {
        const isActive = i < activeSegments;
        return (
          <span
            key={i}
            className="w-1 sm:w-1.5 h-3.5 rounded-sm transition-all duration-300"
            style={{
              backgroundColor: isActive ? color : "var(--border-color)",
              opacity: isActive ? 1 : 0.25,
              boxShadow: isActive ? `0 0 6px ${color}60` : "none",
            }}
          />
        );
      })}
    </div>
  );
};

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterTabs = [
    "All",
    "AI & Speech",
    "Full-Stack",
    "Backend",
    "Databases & Design",
  ];

  const filteredCategories =
    activeFilter === "All"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((cat) => cat.category === activeFilter);

  return (
    <section
      id="skills"
      className="relative w-full py-28 md:py-36 bg-[var(--background)] overflow-hidden border-t border-[var(--border-color)]/50"
    >
      {/* Background Matrix Blueprint */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(var(--border-color) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
            maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Terminal Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-[var(--border-color)]/70 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-ping" />
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-muted)]">
                SYS.DIAG // CAPABILITY CONSOLE
              </span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-[var(--foreground)] tracking-tight">
              Tech Matrix & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent-blue)] to-[var(--success)]">
                Core Stack.
              </span>
            </h3>
          </div>

          {/* Live System Diagnostics Widget */}
          <div className="p-4 rounded-2xl bg-[var(--card-bg)]/80 border border-[var(--border-color)] backdrop-blur-md max-w-md w-full">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[var(--border-color)]/50 font-mono text-xs">
              <span className="text-[var(--foreground-muted)]">DIAGNOSTIC TELEMETRY</span>
              <span className="text-[var(--success)] flex items-center gap-1.5 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse" />
                ONLINE (99.9%)
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 font-mono text-[11px] text-[var(--foreground-muted)]">
              <div>
                <span className="opacity-60">AI LATENCY:</span>{" "}
                <span className="text-[var(--primary)] font-semibold">&lt;180ms</span>
              </div>
              <div>
                <span className="opacity-60">STACK:</span>{" "}
                <span className="text-[var(--foreground)] font-semibold">Next.js + AI</span>
              </div>
              <div>
                <span className="opacity-60">SECURITY:</span>{" "}
                <span className="text-[var(--accent-blue)] font-semibold">Multi-Tenant</span>
              </div>
              <div>
                <span className="opacity-60">DESIGN:</span>{" "}
                <span className="text-[var(--success)] font-semibold">Pixel-Perfect</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-14">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono tracking-wide transition-all duration-300 ${
                  isActive
                    ? "bg-[var(--foreground)] text-[var(--background)] font-bold shadow-md shadow-black/20"
                    : "bg-[var(--card-bg)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] border border-[var(--border-color)] hover:border-[var(--border-color-hover)]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="wait">
            {filteredCategories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 sm:p-9 rounded-3xl bg-[var(--card-bg)]/60 hover:bg-[var(--card-bg)]/90 backdrop-blur-xl border border-[var(--border-color)] hover:border-[var(--border-color-hover)] transition-all duration-300 shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)]"
              >
                {/* Top Accent Strip */}
                <div
                  className="absolute top-0 left-8 right-8 h-[2px] transition-all duration-500 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />

                {/* Category Header */}
                <div className="flex items-center justify-between pb-6 mb-7 border-b border-[var(--border-color)]/60">
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center border shadow-inner bg-[var(--background)]"
                      style={{
                        borderColor: `${cat.color}40`,
                        color: cat.color,
                      }}
                    >
                      {cat.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-wider uppercase text-[var(--foreground-muted)]">
                        MODULE DOMAIN
                      </span>
                      <h4 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] tracking-tight">
                        {cat.title}
                      </h4>
                    </div>
                  </div>

                  <span
                    className="text-xs font-mono font-bold px-2.5 py-1 rounded-md"
                    style={{
                      backgroundColor: `${cat.color}15`,
                      color: cat.color,
                      border: `1px solid ${cat.color}35`,
                    }}
                  >
                    {cat.skills.length} SKILLS
                  </span>
                </div>

                {/* Individual Skills List */}
                <div className="space-y-5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-[var(--background)]/50 border border-[var(--border-color)]/60 hover:border-[var(--border-color-hover)] transition-all duration-200 group/skill"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2.5">
                          <span className="font-semibold text-sm sm:text-base text-[var(--foreground)] group-hover/skill:text-[var(--primary)] transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[var(--card-bg)] text-[var(--foreground-muted)] border border-[var(--border-color)]">
                            {skill.badge}
                          </span>
                        </div>

                        {/* Progress Meter & Percent */}
                        <div className="flex items-center gap-3">
                          <SegmentedMeter
                            percentage={skill.level}
                            color={cat.color}
                          />
                          <span
                            className="font-mono text-xs font-bold w-10 text-right"
                            style={{ color: cat.color }}
                          >
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      <div className="text-xs font-light text-[var(--foreground-muted)]">
                        {skill.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
