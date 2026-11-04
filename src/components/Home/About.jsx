"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const METRICS = [
  {
    label: "System SLA",
    value: "99.9%",
    sub: "High-Availability SaaS",
    color: "#EAB308",
    badge: "FAULT-TOLERANT",
  },
  {
    label: "Voice Streaming",
    value: "<180ms",
    sub: "OpenAI Realtime WebRTC",
    color: "#FACC15",
    badge: "LOW-LATENCY",
  },
  {
    label: "Design Fidelity",
    value: "100%",
    sub: "Pixel-Perfect Interfaces",
    color: "#F59E0B",
    badge: "FIGMA TO CODE",
  },
  {
    label: "Enterprise Platforms",
    value: "6+",
    sub: "Production Deployed",
    color: "#CA8A04",
    badge: "SCALABLE ARCH",
  },
];

const TIMELINE_DATA = [
  {
    id: "01",
    phase: "Current Frontier",
    role: "AI & Full-Stack Engineer",
    company: "Aicyro",
    period: "Sep 2025 – Present",
    location: "SaaS & AI Ecosystems",
    description:
      "Leading architecture and development of AI-integrated SaaS platforms. Engineered the CloseDesk 24/7 AI booking desk from scratch with OpenAI Realtime WebRTC voice streaming, gpt-4o-mini Vision diagnostics, and dynamic SMTP workflows. Designed automated data pipelines linking custom webhooks with Make.com and Google Calendar.",
    highlights: [
      "OpenAI Realtime WebRTC low-latency streaming",
      "Multi-tenant security overhaul & OAuth2 email auth",
      "Bespoke telemetry tracing & anomaly monitoring",
      "Automated Make.com workflows & calendar sync",
    ],
    techs: ["OpenAI WebRTC", "Next.js", "Firebase RTDB", "Node.js", "Make.com", "Whisper"],
    color: "#FACC15",
    badgeStatus: "ACTIVE LEAD",
  },
  {
    id: "02",
    phase: "Enterprise Foundation",
    role: "Software Engineer & IT Specialist",
    company: "Mark Vision",
    period: "Aug 2024 – Sep 2025",
    location: "Islamabad, Pakistan",
    description:
      "Engineered the official corporate web presence for Mark Vision, an ISO-certified ICT firm. Managed mission-critical IT infrastructure, implemented technical SEO best practices, and optimized platform performance for sub-second page loads and universal accessibility.",
    highlights: [
      "Official corporate web architecture & branding",
      "Technical SEO & lighthouse 95+ performance scores",
      "ISO-standard IT infrastructure maintenance",
      "Strict accessibility (a11y) & mobile responsiveness",
    ],
    techs: ["Next.js", "React", "JavaScript", "HTML5/CSS3", "REST APIs", "Netlify"],
    color: "#EAB308",
    badgeStatus: "ISO CERTIFIED",
  },
  {
    id: "03",
    phase: "The Foundation",
    role: "Visual Designer & UI/UX Architect",
    company: "Independent Practice",
    period: "Early Roots",
    location: "Design Systems",
    description:
      "Before writing production code, mastered visual hierarchy, spatial composition, typography, and user interaction flows. This design-first grounding ensures all software I architect is not just technically robust, but instinctively intuitive and pixel-perfect.",
    highlights: [
      "High-fidelity design systems and UI kits in Figma",
      "Complex user journey mapping & wireframing",
      "Adobe Creative Suite (Photoshop, Illustrator) mastery",
      "Bridging the designer-to-developer translation gap",
    ],
    techs: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "UI/UX Architecture"],
    color: "#F59E0B",
    badgeStatus: "CREATIVE ROOTS",
  },
  {
    id: "04",
    phase: "Academic Rigor",
    role: "BS Software Engineering",
    company: "PMAS Arid Agriculture University (UIIT)",
    period: "2021 – 2025",
    location: "Rawalpindi, Pakistan",
    description:
      "Completed four-year formal engineering degree covering software design patterns, distributed architecture, data structures, relational & NoSQL databases, and full-lifecycle system engineering.",
    highlights: [
      "Comprehensive software architecture & design patterns",
      "Database modeling (SQL, NoSQL, Relational Schemas)",
      "Object-oriented analysis & algorithm design",
    ],
    techs: ["Software Engineering", "Algorithms", "Database Systems", "Web Architecture"],
    color: "#CA8A04",
    badgeStatus: "GRADUATED",
  },
];

export default function About() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="about"
      className="relative w-full py-24 md:py-32 bg-[var(--background)] overflow-hidden border-t border-[var(--border-color)]/60"
    >
      {/* Background Soft Mesh Ambient */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(250, 204, 21, 0.12) 0%, transparent 55%), radial-gradient(circle at 10% 70%, rgba(245, 158, 11, 0.08) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20 border-b border-[var(--border-color)]/70 pb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] mb-5 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary-vibrant)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--primary)]"></span>
              </span>
              <span className="text-xs font-mono tracking-widest text-[var(--foreground-muted)] uppercase font-semibold">
                SYSTEM.ARCH // ABOUT & EVOLUTION
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--foreground)] tracking-tight leading-[1.05]">
              Architecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 dark:from-yellow-300 dark:via-amber-400 dark:to-yellow-500">
                Intelligent Systems.
              </span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[var(--foreground-muted)] font-light max-w-xl leading-relaxed">
            Full-Stack Software Engineer & Technical Lead specializing in
            multi-tenant SaaS architectures, native AI streaming with OpenAI
            Realtime WebRTC, and high-uptime platforms. Transitioned from visual
            design to deep full-stack engineering.
          </p>
        </div>

        {/* Live Telemetry Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-24">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="interactive relative p-6 rounded-2xl bg-[var(--card-bg)]/85 backdrop-blur-md border border-[var(--border-color)] hover:border-[var(--primary-vibrant)] transition-all duration-300 shadow-sm hover:shadow-[0_10px_30px_rgba(250,204,21,0.25)] overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] opacity-75"
                style={{ backgroundColor: metric.color }}
              />

              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono tracking-widest text-[var(--foreground-muted)] uppercase">
                  {metric.badge}
                </span>
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: metric.color }}
                />
              </div>

              <div
                className="text-3xl sm:text-4xl font-black tracking-tight mb-1"
                style={{ color: metric.color }}
              >
                {metric.value}
              </div>

              <div className="text-sm font-semibold text-[var(--foreground)]">
                {metric.label}
              </div>
              <div className="text-xs text-[var(--foreground-muted)] mt-0.5">
                {metric.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-8 bg-[var(--primary-vibrant)]" />
            <h3 className="text-xs font-mono tracking-[0.2em] text-[var(--foreground-muted)] uppercase">
              Career Trajectory & Architecture Log
            </h3>
          </div>
          <h4 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight">
            From Visual Design to AI Engineering.
          </h4>
        </div>

        {/* Interactive Career Timeline */}
        <div ref={containerRef} className="relative w-full pb-8">
          <div className="absolute left-[16px] md:left-[32px] top-4 bottom-0 w-[2px] bg-[var(--border-color)]/70 z-0" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[16px] md:left-[32px] top-4 w-[2px] bg-gradient-to-b from-yellow-400 via-amber-500 to-amber-600 shadow-[0_0_12px_rgba(250,204,21,0.6)] z-0"
          />

          <div className="flex flex-col gap-12 sm:gap-16">
            {TIMELINE_DATA.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-12 md:pl-24 group"
              >
                {/* Glowing Node on Line */}
                <div className="absolute left-[17px] md:left-[33px] top-6 -translate-x-1/2 flex items-center justify-center z-10">
                  <span
                    className="absolute w-6 h-6 rounded-full animate-ping opacity-35"
                    style={{ backgroundColor: item.color }}
                  />
                  <div
                    className="w-4 h-4 rounded-full border-2 border-[var(--background)] transition-transform duration-300 group-hover:scale-125 shadow-md"
                    style={{ backgroundColor: item.color }}
                  />
                </div>

                {/* Card Container */}
                <div className="interactive p-7 sm:p-9 rounded-3xl bg-[var(--card-bg)]/85 hover:bg-[var(--card-bg-elevated)] backdrop-blur-xl border border-[var(--border-color)] hover:border-[var(--primary-vibrant)] transition-all duration-300 shadow-md hover:shadow-[0_15px_35px_rgba(250,204,21,0.25)]">
                  {/* Header Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-[var(--border-color)]/50">
                    <div className="flex items-center gap-3">
                      <span
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider"
                        style={{
                          backgroundColor: `${item.color}18`,
                          color: item.color,
                          border: `1px solid ${item.color}40`,
                        }}
                      >
                        {item.badgeStatus}
                      </span>
                      <span className="text-xs font-mono text-[var(--foreground-muted)]">
                        {item.phase}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs text-[var(--foreground-muted)]">
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Role & Company */}
                  <div className="mb-4">
                    <h4 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] tracking-tight">
                      {item.role}
                    </h4>
                    <div className="flex items-center gap-2 mt-1 text-base text-[var(--foreground-muted)]">
                      <span className="font-semibold" style={{ color: item.color }}>
                        {item.company}
                      </span>
                      <span>•</span>
                      <span className="text-xs font-mono">{item.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[var(--foreground-muted)] text-base sm:text-lg font-light leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {item.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--foreground)] font-normal"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: item.color }}
                        />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--border-color)]/50">
                    {item.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-mono text-[var(--foreground)] bg-[var(--background-subtle)] border border-[var(--border-color)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
