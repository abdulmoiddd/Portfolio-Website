"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";

const FEATURED_PROJECTS = [
  {
    id: "closedesk",
    index: "01",
    title: "CloseDesk by Aicyro",
    type: "AI & Multi-Tenant SaaS",
    badge: "FLAGSHIP ARCHITECTURE",
    tagline: "24/7 AI Booking Desk with WebRTC Voice Agents & Vision AI",
    description:
      "Enterprise multi-tenant platform architected from scratch for automated lead conversion and 24/7 client booking. Engineered OpenAI Realtime WebRTC bi-directional voice streams for sub-180ms conversational agents, gpt-4o-mini Vision diagnostics, and OAuth2 tenant isolation.",
    highlights: [
      "OpenAI Realtime WebRTC bi-directional audio streaming with sub-180ms roundtrip latency",
      "gpt-4o-mini Vision automated diagnostic pipeline for document & device analysis",
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
      { label: "Voice Latency", value: "<180ms" },
      { label: "Availability", value: "24/7/365" },
      { label: "Tenant Model", value: "Isolated" },
    ],
    links: { live: "https://aicyro.com", github: "https://github.com/abdulmoiddd" },
    image: "https://dummyimages.netlify.app/Mysite/Aicyro.jpg",
    accentColor: "#FACC15",
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
      { label: "Frame Rate", value: "60 FPS" },
      { label: "Offline Mode", value: "100% Ready" },
      { label: "Sync Engine", value: "Realtime" },
    ],
    links: { live: "https://github.com/abdulmoiddd", github: "https://github.com/abdulmoiddd" },
    image: "https://dummyimages.netlify.app/Mysite/muhamadhub.jpg",
    accentColor: "#38BDF8",
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
      { label: "Serial Algorithm", value: "8-Digit Hash" },
      { label: "Verification", value: "<50ms" },
      { label: "Field Readiness", value: "Offline" },
    ],
    links: { live: "https://github.com/abdulmoiddd", github: "https://github.com/abdulmoiddd" },
    image: "https://dummyimages.netlify.app/Mysite/UDRA.jpg",
    accentColor: "#F59E0B",
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

function BentoTiltCard({ children, className = "" }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { damping: 25, stiffness: 300 });
  const mouseYSpring = useSpring(y, { damping: 25, stiffness: 300 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`interactive relative rounded-2xl transition-all duration-200 ${className}`}
    >
      <div style={{ transform: "translateZ(15px)" }}>{children}</div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative w-full py-16 md:py-24 bg-[var(--background)] overflow-hidden border-t border-[var(--border-color)]"
    >
      {/* Subtle Static Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 25%, rgba(250, 204, 21, 0.08) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(217, 119, 6, 0.06) 0%, transparent 45%)",
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
                SPEC // 03 • PRODUCTION CASE STUDIES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--foreground)] tracking-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 dark:from-yellow-300 dark:via-amber-400 dark:to-yellow-500">Architectures</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-[var(--foreground-muted)]">
            <span className="px-2.5 py-1 rounded bg-[var(--card-bg)] border border-[var(--border-color)]">
              [03 FLAGSHIP SYSTEMS]
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline text-[var(--primary)] font-semibold">
              REAL-WORLD IMPACT
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* HIGH-DENSITY BENTO BOX GRID                               */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
          
          {/* Bento Card 1: CloseDesk (Dominant Flagship - Span 12 on mobile, Span 12 on desktop with 2-col interior) */}
          <div className="lg:col-span-12">
            <BentoTiltCard className="p-6 sm:p-8 rounded-2xl bg-[var(--card-bg-elevated)] border border-[var(--border-color)] hover:border-[var(--primary)] shadow-sm group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* Left Specification Column (Span 7) */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Eyebrow & Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400/15 text-[var(--primary)] border border-amber-400/30 uppercase tracking-wider">
                        {FEATURED_PROJECTS[0].badge}
                      </span>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[var(--background-subtle)] text-[var(--foreground-muted)] border border-[var(--border-color)] uppercase">
                        {FEATURED_PROJECTS[0].type}
                      </span>
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[var(--background-subtle)] border border-[var(--border-color)] text-[10px] font-mono text-[var(--foreground)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="font-semibold">PRODUCTION LIVE</span>
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[var(--foreground)] tracking-tight mb-2 group-hover:text-[var(--primary)] transition-colors">
                      {FEATURED_PROJECTS[0].title}
                    </h3>

                    <p className="text-sm sm:text-base font-medium text-[var(--primary)] mb-3">
                      {FEATURED_PROJECTS[0].tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed mb-4">
                      {FEATURED_PROJECTS[0].description}
                    </p>

                    {/* Compact Telemetry Row */}
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[var(--background-subtle)] border border-[var(--border-color)] mb-4">
                      {FEATURED_PROJECTS[0].stats.map((s) => (
                        <div key={s.label} className="text-left">
                          <span className="text-[10px] font-mono text-[var(--foreground-muted)] uppercase block">
                            {s.label}
                          </span>
                          <span className="text-sm font-mono font-bold text-[var(--foreground)]">
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
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--background)] text-[var(--foreground)] border border-[var(--border-color)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        href={FEATURED_PROJECTS[0].links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 text-zinc-950 font-bold text-xs font-mono tracking-wider shadow-sm hover:opacity-95 transition-opacity inline-flex items-center gap-1.5"
                      >
                        <span>LAUNCH PLATFORM</span>
                        <span>→</span>
                      </Link>

                      <button
                        onClick={() => setSelectedProject(FEATURED_PROJECTS[0])}
                        className="px-4 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--foreground)] font-mono text-xs hover:border-[var(--primary)] transition-colors"
                      >
                        [ VIEW ARCHITECTURE ]
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Image Showcase (Span 5) */}
                <div className="lg:col-span-5 relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--background)]">
                  <Image
                    src={FEATURED_PROJECTS[0].image}
                    alt={FEATURED_PROJECTS[0].title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono">
                    <span className="font-semibold">WebRTC Audio Channel</span>
                    <span className="text-yellow-400 font-bold">&lt;180ms</span>
                  </div>
                </div>
              </div>
            </BentoTiltCard>
          </div>

          {/* Bento Card 2: PocketPool (Span 6 on desktop) */}
          <div className="lg:col-span-6">
            <BentoTiltCard className="p-5 sm:p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-sky-400 shadow-sm flex flex-col justify-between h-full group">
              <div>
                {/* Image Banner */}
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-[var(--border-color)] mb-4 bg-[var(--background)]">
                  <Image
                    src={FEATURED_PROJECTS[1].image}
                    alt={FEATURED_PROJECTS[1].title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-sky-500/20 text-sky-400 border border-sky-500/40 backdrop-blur-md">
                    {FEATURED_PROJECTS[1].badge}
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/70 text-white text-[10px] font-mono">
                    OFFLINE CACHE READY
                  </div>
                </div>

                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--foreground-muted)]">
                    {FEATURED_PROJECTS[1].type}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-sky-500">
                    #{FEATURED_PROJECTS[1].index}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[var(--foreground)] tracking-tight mb-1 group-hover:text-sky-500 transition-colors">
                  {FEATURED_PROJECTS[1].title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed mb-4">
                  {FEATURED_PROJECTS[1].description}
                </p>

                {/* Micro Stats */}
                <div className="grid grid-cols-3 gap-2 p-2.5 rounded-lg bg-[var(--background-subtle)] border border-[var(--border-color)] mb-4">
                  {FEATURED_PROJECTS[1].stats.map((s) => (
                    <div key={s.label}>
                      <span className="text-[9px] font-mono text-[var(--foreground-muted)] uppercase block">
                        {s.label}
                      </span>
                      <span className="text-xs font-mono font-bold text-[var(--foreground)]">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {FEATURED_PROJECTS[1].techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--background)] text-[var(--foreground)] border border-[var(--border-color)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[var(--border-color)]">
                  <button
                    onClick={() => setSelectedProject(FEATURED_PROJECTS[1])}
                    className="text-xs font-mono font-semibold text-sky-500 hover:underline"
                  >
                    [ VIEW ARCHITECTURE ]
                  </button>
                  <Link
                    href={FEATURED_PROJECTS[1].links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors flex items-center gap-1"
                  >
                    <span>GitHub Code</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </BentoTiltCard>
          </div>

          {/* Bento Card 3: Brand Portfolio & Warranty (Span 6 on desktop) */}
          <div className="lg:col-span-6">
            <BentoTiltCard className="p-5 sm:p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-amber-500 shadow-sm flex flex-col justify-between h-full group">
              <div>
                {/* Image Banner */}
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-[var(--border-color)] mb-4 bg-[var(--background)]">
                  <Image
                    src={FEATURED_PROJECTS[2].image}
                    alt={FEATURED_PROJECTS[2].title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-amber-400/20 text-amber-500 border border-amber-400/40 backdrop-blur-md">
                    {FEATURED_PROJECTS[2].badge}
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/70 text-white text-[10px] font-mono">
                    8-DIGIT HASH SECURE
                  </div>
                </div>

                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--foreground-muted)]">
                    {FEATURED_PROJECTS[2].type}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-amber-500">
                    #{FEATURED_PROJECTS[2].index}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[var(--foreground)] tracking-tight mb-1 group-hover:text-amber-500 transition-colors">
                  {FEATURED_PROJECTS[2].title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed mb-4">
                  {FEATURED_PROJECTS[2].description}
                </p>

                {/* Micro Stats */}
                <div className="grid grid-cols-3 gap-2 p-2.5 rounded-lg bg-[var(--background-subtle)] border border-[var(--border-color)] mb-4">
                  {FEATURED_PROJECTS[2].stats.map((s) => (
                    <div key={s.label}>
                      <span className="text-[9px] font-mono text-[var(--foreground-muted)] uppercase block">
                        {s.label}
                      </span>
                      <span className="text-xs font-mono font-bold text-[var(--foreground)]">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {FEATURED_PROJECTS[2].techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--background)] text-[var(--foreground)] border border-[var(--border-color)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[var(--border-color)]">
                  <button
                    onClick={() => setSelectedProject(FEATURED_PROJECTS[2])}
                    className="text-xs font-mono font-semibold text-amber-500 hover:underline"
                  >
                    [ VIEW ARCHITECTURE ]
                  </button>
                  <Link
                    href={FEATURED_PROJECTS[2].links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors flex items-center gap-1"
                  >
                    <span>Verification Engine</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </BentoTiltCard>
          </div>
        </div>

        {/* Auxiliary Platforms: Tightly Bordered 3-Cell Bento Row */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
          {AUXILIARY_PLATFORMS.map((platform) => (
            <div
              key={platform.id}
              className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--primary)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-[var(--primary)] font-semibold uppercase tracking-wider">
                    {platform.badge}
                  </span>
                  <span className="text-[10px] font-mono text-[var(--foreground-muted)]">
                    {platform.type}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[var(--foreground)] mb-1">
                  {platform.title}
                </h4>
                <p className="text-xs text-[var(--foreground-muted)] leading-relaxed mb-3">
                  {platform.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {platform.tech.map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[var(--background-subtle)] text-[var(--foreground)] border border-[var(--border-color)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[var(--primary)] hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>Explore Platform</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High-Density Architecture Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl rounded-2xl bg-[var(--card-bg-elevated)] border border-[var(--border-color)] p-6 sm:p-7 shadow-2xl z-10 overflow-hidden"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-[var(--background-subtle)] border border-[var(--border-color)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="inline-flex items-center gap-2 mb-2 text-xs font-mono font-semibold text-[var(--primary)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                <span>{selectedProject.badge}</span>
                <span className="text-[var(--foreground-muted)]">• {selectedProject.type}</span>
              </div>

              <h3 className="text-2xl font-black text-[var(--foreground)] tracking-tight mb-2">
                {selectedProject.title}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed mb-4">
                {selectedProject.description}
              </p>

              <div className="mb-5">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-[var(--foreground-muted)] mb-2.5">
                  Key Engineering Milestones
                </h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[var(--foreground)]">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[var(--border-color)]">
                <Link
                  href={selectedProject.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 text-zinc-950 text-xs font-mono font-bold tracking-wider hover:opacity-95 transition-opacity"
                >
                  LIVE SYSTEM →
                </Link>
                <Link
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[var(--background-subtle)] border border-[var(--border-color)] text-[var(--foreground)] text-xs font-mono hover:border-[var(--primary)] transition-colors"
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
