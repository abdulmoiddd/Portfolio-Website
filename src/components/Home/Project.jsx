"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FEATURED_PROJECTS = [
  {
    id: "closedesk",
    index: "01",
    title: "CloseDesk by Aicyro",
    type: "AI & Multi-Tenant SaaS",
    badge: "FLAGSHIP SHOWCASE",
    tagline: "24/7 AI Booking Desk with WebRTC Voice Agents & Vision AI",
    description:
      "Enterprise multi-tenant platform architected from scratch for automated lead conversion and 24/7 client booking. Engineered OpenAI Realtime WebRTC bi-directional voice streams for sub-180ms conversational agents, gpt-4o-mini Vision diagnostics, and native OAuth2 tenant isolation.",
    highlights: [
      "OpenAI Realtime WebRTC bi-directional audio streaming with sub-180ms latency",
      "gpt-4o-mini Vision automated diagnostic pipeline for document and hardware verification",
      "Multi-tenant security overhaul: server-side SuperAdmin endpoints & brute-force CAPTCHA",
      "Dynamic SMTP automated delivery & custom webhook telemetry infrastructure",
    ],
    techStack: [
      "Next.js 14",
      "OpenAI Realtime",
      "WebRTC",
      "gpt-4o Vision",
      "Node.js",
      "Firebase RTDB",
      "Tailwind CSS",
    ],
    stats: [
      { label: "VOICE LATENCY", value: "<180ms" },
      { label: "AVAILABILITY", value: "24/7/365" },
      { label: "TENANT MODEL", value: "Isolated" },
    ],
    links: { live: "https://aicyro.com", github: "https://github.com/abdulmoiddd" },
    image: "https://dummyimages.netlify.app/Mysite/Aicyro.jpg",
  },
  {
    id: "pocketpool",
    index: "02",
    title: "PocketPool",
    type: "Cross-Platform Mobile App",
    badge: "REACT NATIVE & EXPO",
    tagline: "Offline-Capable Mobile Architecture with Firebase Sync",
    description:
      "Engineered a high-performance cross-platform mobile application utilizing React Native and Expo. Architected an offline-capable data persistence layer with SQLite caching and Firebase real-time sync for seamless operation in low-connectivity environments.",
    highlights: [
      "Universal React Native & Expo codebase targeting iOS and Android native runtimes",
      "Offline-first local state caching ensuring uninterrupted offline usage",
      "Instant background synchronization on network reconnection",
      "Native 60fps UI transitions and gesture-driven bottom sheets",
    ],
    techStack: ["React Native", "Expo EAS", "Firebase RTDB", "Local Cache", "Tailwind"],
    stats: [
      { label: "FRAME RATE", value: "60 FPS" },
      { label: "OFFLINE MODE", value: "100% Ready" },
      { label: "SYNC ENGINE", value: "Realtime" },
    ],
    links: { live: "https://github.com/abdulmoiddd", github: "https://github.com/abdulmoiddd" },
  },
  {
    id: "brandwarranty",
    index: "03",
    title: "Brand Portfolio & Warranty App",
    type: "Full-Stack Web & Mobile",
    badge: "SERIAL NUMBER VERIFICATION",
    tagline: "Hardware Warranty Suite with 8-Digit Serial Verification",
    description:
      "Engineered an enterprise product showcase and companion mobile application for a premium stove and hob manufacturer. Built an 8-digit serial number verification engine allowing technicians and buyers to cryptographically validate authentic hardware.",
    highlights: [
      "8-digit serial cryptographic verification algorithm with tamper detection",
      "Sub-millisecond verification queries across catalog records",
      "Companion mobile app for offline warehouse verification and barcode lookup",
      "Lighthouse 100/100 performance across desktop and mobile catalogs",
    ],
    techStack: ["Next.js", "React Native", "Firebase", "Node.js", "Tailwind CSS"],
    stats: [
      { label: "SERIAL ALGORITHM", value: "8-Digit Hash" },
      { label: "VERIFICATION", value: "<50ms" },
      { label: "FIELD READINESS", value: "Offline" },
    ],
    links: { live: "https://github.com/abdulmoiddd", github: "https://github.com/abdulmoiddd" },
  },
];

const AUXILIARY_PLATFORMS = [
  {
    id: "aicyroshield",
    title: "Aicyro Shield",
    type: "Cybersecurity Platform",
    badge: "ML THREAT INTEL",
    description:
      "Autonomous cybersecurity intelligence platform with real-time anomaly detection and automated risk scoring.",
    tech: ["Next.js", "WebSockets", "ML Models"],
    link: "https://aicyro.com",
  },
  {
    id: "brightsmile",
    title: "BrightSmile AI",
    type: "Healthcare Assistant",
    badge: "GEMINI LLM ENGINE",
    description:
      "AI-powered dental virtual assistant web application leveraging Gemini API with secure patient intake workflows.",
    tech: ["React", "Gemini API", "Tailwind CSS"],
    link: "https://dentalbott.netlify.app/",
  },
  {
    id: "udra",
    title: "UDRA Corporate",
    type: "Enterprise Portal",
    badge: "100 LIGHTHOUSE",
    description:
      "Corporate web presence for debt resolution firm with 100/100 Lighthouse performance and sub-second TTFB.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    link: "https://udra.netlify.app/",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [testSerial, setTestSerial] = useState("AM-8892-XT");
  const [serialVerified, setSerialVerified] = useState(true);

  const handleVerifySerial = (code) => {
    setTestSerial(code);
    setSerialVerified(code.trim().length >= 8);
  };

  return (
    <section
      id="projects"
      className="relative w-full py-16 md:py-24 border-t border-[var(--clr-border)]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Section Header: Compact Bento HUD Bar */}
        <div className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--clr-border)] pb-6">
          <div>
            

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--clr-ink)] tracking-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">Architectures</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-[var(--clr-ink-muted)]">
            
            <span className="hidden sm:inline text-[var(--clr-accent)] font-semibold">
              REAL-WORLD IMPACT
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* BENTO BOX GRID                                           */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
          
          {/* Bento Card 1: CloseDesk by Aicyro (Dominant Flagship - Span 12) */}
          <div className="lg:col-span-12">
            <div className="p-4 sm:p-8 rounded-2xl bg-[var(--clr-surface-card)] border border-[var(--clr-border)] hover:border-[var(--clr-accent)] shadow-sm transition-all group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Left Specification Column (Span 7) */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    {/* Eyebrow & Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[var(--clr-surface-sub)] text-[var(--clr-accent)] border border-[var(--clr-border)] uppercase tracking-wider">
                        {FEATURED_PROJECTS[0].badge}
                      </span>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[var(--clr-surface-sub)] text-[var(--clr-ink-muted)] border border-[var(--clr-border)] uppercase">
                        {FEATURED_PROJECTS[0].type}
                      </span>
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[var(--clr-surface-sub)] border border-[var(--clr-border)] text-[10px] font-mono text-[var(--clr-ink)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="font-semibold">PRODUCTION LIVE</span>
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[var(--clr-ink)] tracking-tight mb-2 group-hover:text-[var(--clr-accent)] transition-colors">
                      {FEATURED_PROJECTS[0].title}
                    </h3>

                    <p className="text-sm sm:text-base font-semibold text-[var(--clr-accent)] mb-3">
                      {FEATURED_PROJECTS[0].tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-[var(--clr-ink-muted)] leading-relaxed mb-4">
                      {FEATURED_PROJECTS[0].description}
                    </p>

                    {/* Telemetry Row */}
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 p-2.5 sm:p-3 rounded-xl bg-[var(--clr-surface-sub)] border border-[var(--clr-border)] mb-4">
                      {FEATURED_PROJECTS[0].stats.map((s) => (
                        <div key={s.label}>
                          <span className="text-[8px] sm:text-[9px] font-mono text-[var(--clr-ink-muted)] uppercase block truncate">
                            {s.label}
                          </span>
                          <span className="text-xs sm:text-sm font-mono font-bold text-[var(--clr-ink)]">
                            {s.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills & CTA */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {FEATURED_PROJECTS[0].techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono bg-[var(--clr-surface-sub)] text-[var(--clr-ink)] border border-[var(--clr-border)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                      <Link
                        href={FEATURED_PROJECTS[0].links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-lg bg-[var(--clr-accent)] text-[var(--brand-charcoal)] font-bold text-xs font-mono tracking-wider shadow-sm hover:shadow-[0_0_16px_rgba(245,230,35,0.4)] transition-all inline-flex items-center justify-center gap-1.5 text-center"
                      >
                        <span>LAUNCH PLATFORM</span>
                        <span>→</span>
                      </Link>

                      <button
                        onClick={() => setSelectedProject(FEATURED_PROJECTS[0])}
                        className="px-4 py-2.5 rounded-lg border border-[var(--clr-border)] bg-[var(--clr-surface-sub)] text-[var(--clr-ink)] font-mono text-xs hover:border-[var(--clr-accent)] transition-colors text-center"
                      >
                        [ VIEW ARCHITECTURE ]
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Image Showcase (Span 5) */}
                <div className="lg:col-span-5 relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-[var(--clr-border)] bg-[var(--clr-surface-sub)]">
                  <Image
                    src={FEATURED_PROJECTS[0].image}
                    alt={FEATURED_PROJECTS[0].title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono">
                    <span className="font-semibold">WebRTC Audio Channel</span>
                    <span className="text-[var(--clr-accent)] font-bold">&lt;180ms RTT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: PocketPool (Span 6 - Text Only Redesign) */}
          <div className="lg:col-span-6">
            <div className="p-4 sm:p-8 rounded-2xl bg-[var(--clr-surface-card)] border border-[var(--clr-border)] hover:border-sky-400 shadow-sm flex flex-col justify-between h-full group transition-all">
              <div>
                {/* Badges moved to top */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 uppercase tracking-wider">
                    {FEATURED_PROJECTS[1].badge}
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[var(--clr-surface-sub)] text-[var(--clr-ink-muted)] border border-[var(--clr-border)] uppercase">
                    {FEATURED_PROJECTS[1].type}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-sky-400 ml-auto">
                    #{FEATURED_PROJECTS[1].index}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[var(--clr-ink)] tracking-tight mb-2 group-hover:text-sky-400 transition-colors">
                  {FEATURED_PROJECTS[1].title}
                </h3>
                
                <p className="text-sm sm:text-base font-semibold text-sky-400 mb-4">
                  {FEATURED_PROJECTS[1].tagline}
                </p>

                <p className="text-sm text-[var(--clr-ink-muted)] leading-relaxed mb-6">
                  {FEATURED_PROJECTS[1].description}
                </p>

                {/* Micro Stats */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 p-2.5 sm:p-3 rounded-lg bg-[var(--clr-surface-sub)] border border-[var(--clr-border)] mb-6">
                  {FEATURED_PROJECTS[1].stats.map((s) => (
                    <div key={s.label}>
                      <span className="text-[8px] sm:text-[9px] font-mono text-[var(--clr-ink-muted)] uppercase block truncate">
                        {s.label}
                      </span>
                      <span className="text-xs sm:text-sm font-mono font-bold text-[var(--clr-ink)]">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {FEATURED_PROJECTS[1].techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--clr-surface-sub)] text-[var(--clr-ink)] border border-[var(--clr-border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-4 border-t border-[var(--clr-border)]">
                  <button
                    onClick={() => setSelectedProject(FEATURED_PROJECTS[1])}
                    className="text-xs font-mono font-semibold text-sky-400 hover:underline text-left"
                  >
                    [ VIEW ARCHITECTURE ]
                  </button>
                  <Link
                    href={FEATURED_PROJECTS[1].links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[var(--clr-ink-muted)] hover:text-[var(--clr-ink)] transition-colors flex items-center gap-1"
                  >
                    <span>GitHub Code</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Brand Portfolio & Warranty (Span 6 - Text Only Redesign) */}
          <div className="lg:col-span-6">
            <div className="p-4 sm:p-8 rounded-2xl bg-[var(--clr-surface-card)] border border-[var(--clr-border)] hover:border-amber-400 shadow-sm flex flex-col justify-between h-full group transition-all">
              <div>
                {/* Badges moved to top */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400/10 text-amber-500 border border-amber-400/20 uppercase tracking-wider">
                    {FEATURED_PROJECTS[2].badge}
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[var(--clr-surface-sub)] text-[var(--clr-ink-muted)] border border-[var(--clr-border)] uppercase">
                    {FEATURED_PROJECTS[2].type}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-amber-500 ml-auto">
                    #{FEATURED_PROJECTS[2].index}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[var(--clr-ink)] tracking-tight mb-2 group-hover:text-amber-500 transition-colors">
                  {FEATURED_PROJECTS[2].title}
                </h3>
                
                <p className="text-sm sm:text-base font-semibold text-amber-500 mb-4">
                  {FEATURED_PROJECTS[2].tagline}
                </p>

                <p className="text-sm text-[var(--clr-ink-muted)] leading-relaxed mb-6">
                  {FEATURED_PROJECTS[2].description}
                </p>

                {/* Interactive Serial Verification Engine Simulator */}
                <div className="p-4 rounded-xl bg-[var(--clr-surface-sub)] border border-[var(--clr-border)] mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[var(--clr-ink-muted)] uppercase font-bold tracking-wide">
                      LIVE SERIAL VALIDATOR SIMULATOR
                    </span>
                    <span className={`text-[10px] font-mono font-bold ${serialVerified ? "text-emerald-500" : "text-rose-500"}`}>
                      {serialVerified ? "✓ AUTHENTIC PASS" : "✗ INVALID HASH"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2.5">
                    <input
                      type="text"
                      value={testSerial}
                      onChange={(e) => handleVerifySerial(e.target.value)}
                      placeholder="Enter 8-digit serial..."
                      className="flex-1 px-3 py-1.5 text-sm font-mono rounded-lg bg-[var(--clr-surface-card)] border border-[var(--clr-border)] text-[var(--clr-ink)] outline-none focus:border-[var(--clr-accent)]"
                    />
                    <button
                      onClick={() => handleVerifySerial("AM-8892-XT")}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-[var(--clr-accent)] text-[var(--brand-charcoal)]"
                    >
                      TEST AM
                    </button>
                    <button
                      onClick={() => handleVerifySerial("STV-4921-OK")}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-[var(--clr-surface-card)] border border-[var(--clr-border)] text-[var(--clr-ink)] hidden sm:block"
                    >
                      STV-OK
                    </button>
                  </div>

                  <span className="text-[10px] font-mono text-[var(--clr-ink-muted)] block">
                    Verification query latency: <span className="text-[var(--clr-accent)] font-semibold">&lt;42ms</span> · Offline catalog encrypted
                  </span>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {FEATURED_PROJECTS[2].techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--clr-surface-sub)] text-[var(--clr-ink)] border border-[var(--clr-border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-4 border-t border-[var(--clr-border)]">
                  <button
                    onClick={() => setSelectedProject(FEATURED_PROJECTS[2])}
                    className="text-xs font-mono font-semibold text-amber-500 hover:underline text-left"
                  >
                    [ VIEW ARCHITECTURE ]
                  </button>
                  <Link
                    href={FEATURED_PROJECTS[2].links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[var(--clr-ink-muted)] hover:text-[var(--clr-ink)] transition-colors flex items-center gap-1"
                  >
                    <span>Verification Engine</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Auxiliary Platforms 3-Cell Bento Row */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
          {AUXILIARY_PLATFORMS.map((platform) => (
            <div
              key={platform.id}
              className="p-4 rounded-xl bg-[var(--clr-surface-card)] border border-[var(--clr-border)] hover:border-[var(--clr-accent)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-[var(--clr-accent)] font-semibold uppercase tracking-wider">
                    {platform.badge}
                  </span>
                  <span className="text-[10px] font-mono text-[var(--clr-ink-muted)]">
                    {platform.type}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[var(--clr-ink)] mb-1">
                  {platform.title}
                </h4>
                <p className="text-xs text-[var(--clr-ink-muted)] leading-relaxed mb-3">
                  {platform.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {platform.tech.map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[var(--clr-surface-sub)] text-[var(--clr-ink)] border border-[var(--clr-border)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[var(--clr-accent)] hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>Explore Platform</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Inspection Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl max-h-[90dvh] overflow-y-auto rounded-2xl bg-[var(--clr-surface-card)] border border-[var(--clr-border)] p-5 sm:p-7 shadow-2xl z-10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-[var(--clr-surface-sub)] border border-[var(--clr-border)] text-[var(--clr-ink-muted)] hover:text-[var(--clr-ink)] transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="inline-flex items-center gap-2 mb-2 text-xs font-mono font-semibold text-[var(--clr-accent)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--clr-accent)]" />
                <span>{selectedProject.badge}</span>
                <span className="text-[var(--clr-ink-muted)]">
                  {selectedProject.type}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[var(--clr-ink)] tracking-tight mb-2 pr-8">
                {selectedProject.title}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--clr-ink-muted)] leading-relaxed mb-4">
                {selectedProject.description}
              </p>

              <div className="mb-5">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-[var(--clr-ink-muted)] mb-2.5">
                  Core Engineering Milestones
                </h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[var(--clr-ink)]">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--clr-accent)] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-3 border-t border-[var(--clr-border)]">
                <Link
                  href={selectedProject.links.live || selectedProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-[var(--clr-accent)] text-[var(--brand-charcoal)] text-xs font-mono font-bold tracking-wider hover:opacity-95 transition-opacity text-center"
                >
                  LIVE SYSTEM →
                </Link>
                <Link
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-[var(--clr-surface-sub)] border border-[var(--clr-border)] text-[var(--clr-ink)] text-xs font-mono hover:border-[var(--clr-accent)] transition-colors text-center"
                >
                  GITHUB REPOSITORY
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}