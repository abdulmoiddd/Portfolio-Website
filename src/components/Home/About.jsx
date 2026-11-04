"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const METRICS = [
  {
    label: "System SLA",
    value: "99.9%",
    sub: "High-Availability SaaS",
    color: "var(--success)",
    badge: "FAULT-TOLERANT",
  },
  {
    label: "Voice Streaming",
    value: "<180ms",
    sub: "OpenAI Realtime WebRTC",
    color: "var(--accent-blue)",
    badge: "LOW-LATENCY",
  },
  {
    label: "Design Fidelity",
    value: "100%",
    sub: "Pixel-Perfect Interfaces",
    color: "var(--primary)",
    badge: "FIGMA TO CODE",
  },
  {
    label: "Enterprise Platforms",
    value: "6+",
    sub: "Production Deployed",
    color: "var(--accent-purple)",
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
    color: "var(--primary)",
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
    color: "var(--accent-blue)",
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
    color: "var(--accent-purple)",
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
    color: "var(--success)",
    badgeStatus: "GRADUATED",
  },
];

const About = () => {
  const [activeItem, setActiveItem] = useState("01");
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="about"
      className="relative w-full py-24 md:py-32 bg-[var(--background)] overflow-hidden border-t border-[var(--border-color)]/50"
    >
      {/* Background Matrix HUD */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(var(--border-color) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          }}
        />
      </div>

      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-[var(--primary)] opacity-[0.05] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 rounded-full bg-[var(--accent-blue)] opacity-[0.05] blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* ========================================== */}
        {/* SECTION HEADER & BIO                       */}
        {/* ========================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20 border-b border-[var(--border-color)]/70 pb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] mb-5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
              </span>
              <span className="text-[11px] font-mono tracking-widest text-[var(--foreground-muted)] uppercase">
                SYSTEM.ARCH // ABOUT & EVOLUTION
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--foreground)] tracking-tight leading-[1.05]">
              Architecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent-blue)] to-[var(--accent-purple)]">
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

        {/* ========================================== */}
        {/* LIVE TELEMETRY METRICS GRID                */}
        {/* ========================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-24">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-6 rounded-2xl bg-[var(--card-bg)]/50 backdrop-blur-md border border-[var(--border-color)] hover:border-[var(--border-color-hover)] transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500 opacity-60 group-hover:opacity-100"
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

        {/* ========================================== */}
        {/* CAREER EVOLUTION TIMELINE                  */}
        {/* ========================================== */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-8 bg-[var(--primary)]" />
            <h3 className="text-xs font-mono tracking-[0.2em] text-[var(--foreground-muted)] uppercase">
              Career Trajectory & Architecture Log
            </h3>
          </div>
          <h4 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight">
            From Visual Design to AI Engineering.
          </h4>
        </div>

        <div ref={containerRef} className="relative w-full pb-8">
          {/* Laser Guide Track */}
          <div className="absolute left-[16px] md:left-[32px] top-4 bottom-0 w-[2px] bg-[var(--border-color)]/60 z-0" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[16px] md:left-[32px] top-4 w-[2px] bg-gradient-to-b from-[var(--primary)] via-[var(--accent-blue)] to-[var(--success)] shadow-[0_0_12px_var(--primary)] z-0"
          />

          <div className="flex flex-col gap-12 sm:gap-16">
            {TIMELINE_DATA.map((item, index) => {
              const isSelected = activeItem === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setActiveItem(item.id)}
                  className="relative pl-12 md:pl-24 group"
                >
                  {/* Glowing Node on Line */}
                  <div className="absolute left-[17px] md:left-[33px] top-6 -translate-x-1/2 flex items-center justify-center z-10">
                    <span
                      className="absolute w-6 h-6 rounded-full animate-ping opacity-30"
                      style={{ backgroundColor: item.color }}
                    />
                    <div
                      className="w-4 h-4 rounded-full border-2 border-[var(--background)] transition-transform duration-300 group-hover:scale-125 shadow-md"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>

                  {/* Card Content Container */}
                  <div className="p-7 sm:p-9 rounded-3xl bg-[var(--card-bg)]/40 hover:bg-[var(--card-bg)]/80 backdrop-blur-xl border border-[var(--border-color)] hover:border-[var(--border-color-hover)] transition-all duration-300 shadow-md group-hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.4)]">
                    {/* Header Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-[var(--border-color)]/50">
                      <div className="flex items-center gap-3">
                        <span
                          className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider"
                          style={{
                            backgroundColor: `${item.color}15`,
                            color: item.color,
                            border: `1px solid ${item.color}35`,
                          }}
                        >
                          {item.badgeStatus}
                        </span>
                        <span className="text-xs font-mono text-[var(--foreground-muted)]">
                          {item.phase}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 font-mono text-xs text-[var(--foreground-muted)]">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Role & Company */}
                    <div className="mb-4">
                      <h4 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] tracking-tight">
                        {item.role}
                      </h4>
                      <div className="flex items-center gap-2 mt-1 text-base text-[var(--foreground-muted)]">
                        <span
                          className="font-semibold"
                          style={{ color: item.color }}
                        >
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

                    {/* Highlights List */}
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
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--border-color)]/40">
                      {item.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-mono text-[var(--foreground)] bg-[var(--background)]/80 border border-[var(--border-color)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
