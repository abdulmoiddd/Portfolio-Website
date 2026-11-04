"use client";

import { motion } from "framer-motion";

const METRICS = [
  {
    label: "SYSTEM SLA",
    value: "99.9%",
    sub: "High-Availability SaaS",
    spec: "FAULT-TOLERANT",
    accent: true,
  },
  {
    label: "VOICE STREAMING",
    value: "<180ms",
    sub: "OpenAI Realtime WebRTC",
    spec: "SUB-SECOND RTT",
    accent: true,
  },
  {
    label: "DESIGN FIDELITY",
    value: "100%",
    sub: "Pixel-Perfect Tokens",
    spec: "FIGMA TO CODE",
    accent: false,
  },
  {
    label: "PRODUCTION APPS",
    value: "6+",
    sub: "Enterprise Platforms",
    spec: "SCALABLE ARCH",
    accent: false,
  },
];

const CAREER_LOG = [
  {
    id: "01",
    phase: "CURRENT FRONTIER",
    role: "AI & Full-Stack Engineer",
    company: "Aicyro",
    period: "Sep 2025 – Present",
    focus: "AI SaaS & Real-Time Voice Ecosystems",
    description:
      "Leading architecture and delivery of AI-integrated SaaS platforms. Engineered the CloseDesk 24/7 AI booking desk from scratch featuring OpenAI Realtime WebRTC voice streaming, gpt-4o-mini Vision diagnostics, and dynamic SMTP workflows. Built automated data pipelines linking custom webhooks with Make.com and Google Calendar.",
    stack: ["OpenAI WebRTC", "Next.js", "Firebase RTDB", "Node.js", "Make.com", "Whisper"],
  },
  {
    id: "02",
    phase: "ENTERPRISE ICT",
    role: "Software Engineer & IT Specialist",
    company: "Mark Vision",
    period: "Aug 2024 – Sep 2025",
    focus: "Corporate Platforms & Infrastructure",
    description:
      "Engineered the official corporate web presence for Mark Vision, an ISO-certified ICT firm. Managed mission-critical IT infrastructure, implemented technical SEO best practices, and optimized platform performance for sub-second page loads and strict accessibility.",
    stack: ["Next.js", "React", "JavaScript", "REST APIs", "ISO Standards", "Netlify"],
  },
  {
    id: "03",
    phase: "DESIGN FOUNDATION",
    role: "Visual Designer & UI/UX Architect",
    company: "Independent Practice",
    period: "Early Roots",
    focus: "Design Systems & Spatial Hierarchy",
    description:
      "Before writing production code, mastered visual hierarchy, spatial composition, typography, and interaction design. This design-first grounding ensures all software I architect is not just technically robust, but instinctively intuitive and pixel-perfect.",
    stack: ["Figma", "Adobe Suite", "Design Systems", "UI Tokens", "User Journey Mapping"],
  },
  {
    id: "04",
    phase: "ACADEMIC RIGOR",
    role: "BS Software Engineering",
    company: "PMAS Arid Agriculture University (UIIT)",
    period: "2021 – 2025",
    focus: "Distributed Systems & Algorithms",
    description:
      "Four-year formal engineering degree covering software design patterns, distributed architecture, data structures, relational & NoSQL databases, and full-lifecycle system engineering.",
    stack: ["Distributed Systems", "Algorithms", "Relational Schemas", "System Architecture"],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-16 md:py-24 border-t border-[var(--clr-border)]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Section Header: Compact Bento HUD Bar */}
        <div className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--clr-border)] pb-6">
          <div>
            

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--clr-ink)] tracking-tight">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">Intelligent Systems</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[var(--clr-ink-muted)] max-w-md leading-relaxed md:text-right">
            Full-Stack Software Engineer &amp; Technical Lead specializing in multi-tenant SaaS architectures, native OpenAI Realtime WebRTC voice streaming, and high-uptime platforms.
          </p>
        </div>

        {/* 4-Cell Telemetry Metrics Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-8 sm:mb-10">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className={`p-3 sm:p-4 rounded-xl border transition-all ${
                metric.accent
                  ? "bg-[var(--clr-surface-card)] border-[var(--clr-accent)] shadow-sm"
                  : "bg-[var(--clr-surface-card)] border-[var(--clr-border)]"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                <span className="text-[9px] sm:text-[10px] font-mono tracking-wider text-[var(--clr-ink-muted)] uppercase truncate">
                  {metric.spec}
                </span>
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: metric.accent ? "var(--clr-accent)" : "var(--clr-ink-muted)" }}
                />
              </div>

              <div
                className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-0.5 font-mono"
                style={{ color: metric.accent ? "var(--clr-accent)" : "var(--clr-ink)" }}
              >
                {metric.value}
              </div>

              <div className="text-[11px] sm:text-xs font-bold text-[var(--clr-ink)] truncate">
                {metric.label}
              </div>
              <div className="text-[9px] sm:text-[10px] font-mono text-[var(--clr-ink-muted)] mt-0.5 truncate">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Career & Architectural Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CAREER_LOG.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-6 rounded-2xl bg-[var(--clr-surface-card)] border border-[var(--clr-border)] hover:border-[var(--clr-accent)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--clr-surface-sub)] text-[var(--clr-accent)] border border-[var(--clr-border)] uppercase tracking-wider">
                    {item.phase}
                  </span>
                  <span className="text-[10px] font-mono text-[var(--clr-ink-muted)]">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-lg font-black text-[var(--clr-ink)] tracking-tight mb-0.5">
                  {item.role}
                </h3>
                <div className="text-xs font-mono font-semibold text-[var(--clr-accent)] mb-3">
                  {item.company} <span className="text-[var(--clr-ink-muted)] font-normal">• {item.focus}</span>
                </div>

                <p className="text-xs sm:text-sm text-[var(--clr-ink-muted)] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--clr-border)]">
                {item.stack.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--clr-surface-sub)] text-[var(--clr-ink)] border border-[var(--clr-border)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
