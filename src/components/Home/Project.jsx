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

// 3 Core Featured Projects from the prompt + Auxiliary Enterprise Platforms
const FEATURED_PROJECTS = [
  {
    id: "closedesk",
    title: "CloseDesk by Aicyro",
    type: "AI & SaaS Architecture",
    badge: "FLAGSHIP SHOWCASE",
    headline: "Multi-Tenant 24/7 AI Booking Desk with WebRTC Voice Agents & Vision AI",
    description:
      "Engineered an enterprise-grade multi-tenant platform from the ground up to automate 24/7 customer capture and scheduling. Features OpenAI Realtime WebRTC voice streaming for sub-180ms conversational agents, gpt-4o-mini Vision diagnostics, dynamic SMTP, and native OAuth2 tenant isolation.",
    highlights: [
      "OpenAI Realtime WebRTC bi-directional audio streaming",
      "gpt-4o-mini Vision automated diagnostic pipeline",
      "Multi-tenant security overhaul: server-side SuperAdmin endpoints & brute-force CAPTCHA",
      "Dynamic SMTP automated delivery & custom webhook telemetry",
    ],
    techStack: [
      "Next.js",
      "OpenAI WebRTC",
      "gpt-4o Vision",
      "Node.js",
      "Firebase RTDB",
      "Make.com",
      "Tailwind CSS",
    ],
    stats: { primary: "<180ms", label: "Voice Latency" },
    links: { live: "https://aicyro.com", github: "https://github.com/abdulmoiddd" },
    image: "https://dummyimages.netlify.app/Mysite/Aicyro.jpg",
    accentColor: "#FACC15",
    isHero: true,
  },
  {
    id: "pocketpool",
    title: "PocketPool",
    type: "Cross-Platform Mobile App",
    badge: "REACT NATIVE & EXPO",
    headline: "Offline-Capable Mobile Architecture with Firebase Cloud Synchronization",
    description:
      "Built a seamless cross-platform mobile application utilizing React Native and Expo. Architected an offline-capable data layer using Firebase storage and encrypted local state, ensuring uninterrupted functionality in low-connectivity environments.",
    highlights: [
      "Universal React Native & Expo codebase targeting iOS and Android",
      "Offline-capable data architecture ensuring usability without network",
      "Instant cloud synchronization upon reconnecting to Firebase",
      "Native 60fps animations & gesture-driven navigation",
    ],
    techStack: ["React Native", "Expo", "Firebase RTDB", "Offline Sync", "Tailwind"],
    stats: { primary: "60 FPS", label: "Native Feel" },
    links: { live: "https://github.com/abdulmoiddd", github: "https://github.com/abdulmoiddd" },
    image: "https://dummyimages.netlify.app/Mysite/muhamadhub.jpg",
    accentColor: "#38BDF8",
    isHero: false,
  },
  {
    id: "brandwarranty",
    title: "Brand Portfolio & Warranty App",
    type: "Full-Stack & Hardware Verification",
    badge: "SERIAL NUMBER SECURITY",
    headline: "Web & Offline Mobile Suite with 8-Digit Serial Number Verification",
    description:
      "Engineered a full-scale brand portfolio website and companion offline mobile application for a stove and hob manufacturer. Built an 8-digit serial verification engine allowing customers and technicians to instantly validate authentic hardware and active warranty status.",
    highlights: [
      "8-digit serial number cryptographic verification algorithm",
      "Real-time validation for product authenticity and warranty status",
      "Companion mobile application operational in remote field warehouses",
      "Responsive high-converting brand catalog architecture",
    ],
    techStack: ["Next.js", "React Native", "Firebase", "Node.js", "Tailwind CSS"],
    stats: { primary: "8-Digit", label: "Serial Engine" },
    links: { live: "https://github.com/abdulmoiddd", github: "https://github.com/abdulmoiddd" },
    image: "https://dummyimages.netlify.app/Mysite/UDRA.jpg",
    accentColor: "#F59E0B",
    isHero: false,
  },
];

const AUXILIARY_PROJECTS = [
  {
    id: "aicyroshield",
    title: "Aicyro Shield",
    type: "Cybersecurity Platform",
    badge: "ML ARCHITECTURE",
    description:
      "Autonomous cybersecurity intelligence platform with real-time anomaly detection, risk scoring, and automated threat responses.",
    techStack: ["Next.js", "React", "Machine Learning", "WebSockets"],
    links: { live: "https://aicyro.com", github: "https://github.com/abdulmoiddd" },
  },
  {
    id: "brightsmile",
    title: "BrightSmile AI",
    type: "Healthcare Virtual Assistant",
    badge: "GEMINI AI ENGINE",
    description:
      "AI-powered dental virtual assistant web application leveraging Gemini LLM API with secure, HIPAA-compliant patient communication.",
    techStack: ["React", "Gemini API", "Tailwind CSS", "Netlify"],
    links: { live: "https://dentalbott.netlify.app/", github: "https://github.com/abdulmoiddd" },
  },
  {
    id: "udra",
    title: "UDRA Corporate Platform",
    type: "Corporate Web Platform",
    badge: "TECHNICAL SEO",
    description:
      "Official corporate web presence for UDRA debt recovery firm with 100/100 Lighthouse performance, sub-second TTFB, and structured schema.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Netlify"],
    links: { live: "https://udra.netlify.app/", github: "https://github.com/abdulmoiddd" },
  },
];

// Interactive 3D Perspective Tilt Card Component
function TiltCard({ children, className = "", accentColor = "#FACC15" }) {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { damping: 20, stiffness: 250 });
  const mouseYSpring = useSpring(y, { damping: 20, stiffness: 250 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["9deg", "-9deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-9deg", "9deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
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
      className={`interactive relative rounded-3xl transition-shadow duration-500 ${className}`}
    >
      <div style={{ transform: "translateZ(30px)" }}>{children}</div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="projects"
      className="relative w-full py-28 md:py-36 bg-[var(--background)] min-h-screen overflow-hidden border-t border-[var(--border-color)]/60"
    >
      {/* Dynamic Ambient Gradient Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 20%, rgba(250, 204, 21, 0.14) 0%, transparent 55%), radial-gradient(circle at 90% 80%, rgba(245, 158, 11, 0.10) 0%, transparent 55%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[var(--border-color)]/70 pb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] mb-4 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary-vibrant)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--primary)]"></span>
              </span>
              <span className="text-xs font-mono tracking-widest text-[var(--foreground-muted)] uppercase font-semibold">
                FEATURED WORK // BENTO SHOWCASE
              </span>
            </div>

            <h3 className="text-4xl md:text-6xl font-black text-[var(--foreground)] tracking-tight">
              Featured <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 dark:from-yellow-300 dark:via-amber-400 dark:to-yellow-500">
                Architectures.
              </span>
            </h3>
          </div>

          <p className="text-base sm:text-lg text-[var(--foreground-muted)] font-light max-w-md lg:text-right">
            Enterprise AI SaaS platforms, cross-platform mobile apps, and
            hardware validation systems engineered for sub-second performance.
          </p>
        </motion.div>

        {/* ======================================================== */}
        {/* BENTO BOX GRID                                           */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Card 1: CloseDesk (Hero Bento Card - Span 12 on mobile, Span 12 or 7 on desktop) */}
          <div className="lg:col-span-12">
            <TiltCard
              accentColor="#FACC15"
              className="p-8 sm:p-12 rounded-3xl bg-[var(--card-bg)]/85 backdrop-blur-2xl border border-[var(--border-color)] hover:border-[var(--primary-vibrant)] shadow-xl hover:shadow-[0_20px_50px_rgba(250,204,21,0.25)] overflow-hidden group"
            >
              {/* Radiant Ambient Glow Behind CloseDesk */}
              <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-yellow-400/20 via-amber-500/10 to-transparent blur-[110px] pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Description Column */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Top Status & Badge */}
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-amber-400/15 text-[var(--primary)] border border-amber-400/30">
                        {FEATURED_PROJECTS[0].badge}
                      </span>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--background-subtle)] border border-[var(--border-color)] text-xs font-mono">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-semibold text-[var(--foreground)]">
                          LIVE 24/7 SAAS
                        </span>
                      </div>
                    </div>

                    <h4 className="text-3xl sm:text-5xl font-black text-[var(--foreground)] tracking-tight mb-4 group-hover:text-[var(--primary)] transition-colors">
                      {FEATURED_PROJECTS[0].title}
                    </h4>

                    <p className="text-lg text-[var(--foreground-muted)] font-normal leading-relaxed mb-6">
                      {FEATURED_PROJECTS[0].headline}
                    </p>

                    <p className="text-sm sm:text-base text-[var(--foreground-muted)] font-light leading-relaxed mb-8">
                      {FEATURED_PROJECTS[0].description}
                    </p>

                    {/* Live Waveform Indicator */}
                    <div className="p-4 rounded-2xl bg-[var(--background-subtle)] border border-[var(--border-color)] mb-8 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 h-6">
                          {[30, 80, 50, 100, 65, 85, 40].map((h, i) => (
                            <span
                              key={i}
                              className="w-1 rounded-full bg-[var(--primary-vibrant)] animate-waveform"
                              style={{
                                animationDelay: `${i * 0.14}s`,
                                height: `${h * 0.22}px`,
                              }}
                            />
                          ))}
                        </div>
                        <span className="font-mono text-xs font-bold text-[var(--foreground)]">
                          OpenAI WebRTC Voice Stream
                        </span>
                      </div>
                      <span className="font-mono text-xs font-bold text-[var(--primary)]">
                        &lt;180ms LATENCY
                      </span>
                    </div>
                  </div>

                  {/* Actions & Stack */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {FEATURED_PROJECTS[0].techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-[var(--background)] text-[var(--foreground)] border border-[var(--border-color)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <Link
                        href={FEATURED_PROJECTS[0].links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-white dark:text-zinc-950 font-bold text-xs font-mono tracking-wider shadow-lg hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] transition-all flex items-center gap-2"
                      >
                        EXPLORE SAAS PLATFORM →
                      </Link>
                      <button
                        onClick={() => setSelectedProject(FEATURED_PROJECTS[0])}
                        className="px-5 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--foreground)] font-mono text-xs hover:border-[var(--primary)] transition-colors"
                      >
                        [ VIEW ARCHITECTURE ]
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Image Showcase Column */}
                <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--background)] shadow-2xl">
                  <Image
                    src={FEATURED_PROJECTS[0].image}
                    alt={FEATURED_PROJECTS[0].title}
                    fill
                    className="object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                    <span>24/7 AI AGENT</span>
                    <span>MULTI-TENANT ISOLATED</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Card 2: PocketPool (Mobile App Bento - Span 6 on desktop) */}
          <div className="lg:col-span-6">
            <TiltCard
              accentColor="#38BDF8"
              className="p-8 sm:p-10 rounded-3xl bg-[var(--card-bg)]/85 backdrop-blur-2xl border border-[var(--border-color)] hover:border-[#38BDF8] shadow-xl hover:shadow-[0_20px_45px_rgba(56,189,248,0.25)] flex flex-col justify-between h-full group"
            >
              <div>
                {/* Image Preview */}
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--border-color)] mb-6 bg-[var(--background)]">
                  <Image
                    src={FEATURED_PROJECTS[1].image}
                    alt={FEATURED_PROJECTS[1].title}
                    fill
                    className="object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-sky-500/20 text-sky-400 border border-sky-500/40 backdrop-blur-md">
                    {FEATURED_PROJECTS[1].badge}
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/60 text-white text-[10px] font-mono backdrop-blur-md">
                    OFFLINE SYNC READY
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--foreground-muted)]">
                    {FEATURED_PROJECTS[1].type}
                  </span>
                  <span className="font-mono text-xs font-bold text-sky-500">
                    60 FPS MOBILE UX
                  </span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-black text-[var(--foreground)] tracking-tight mb-3 group-hover:text-sky-500 transition-colors">
                  {FEATURED_PROJECTS[1].title}
                </h4>

                <p className="text-sm sm:text-base text-[var(--foreground-muted)] font-light leading-relaxed mb-6">
                  {FEATURED_PROJECTS[1].description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {FEATURED_PROJECTS[1].techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[var(--background)] text-[var(--foreground)] border border-[var(--border-color)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)]/70">
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
                    <span>GitHub Repository</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Card 3: Brand Portfolio & Warranty (Hardware App Bento - Span 6 on desktop) */}
          <div className="lg:col-span-6">
            <TiltCard
              accentColor="#F59E0B"
              className="p-8 sm:p-10 rounded-3xl bg-[var(--card-bg)]/85 backdrop-blur-2xl border border-[var(--border-color)] hover:border-amber-400 shadow-xl hover:shadow-[0_20px_45px_rgba(245,158,11,0.25)] flex flex-col justify-between h-full group"
            >
              <div>
                {/* Image Preview */}
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--border-color)] mb-6 bg-[var(--background)]">
                  <Image
                    src={FEATURED_PROJECTS[2].image}
                    alt={FEATURED_PROJECTS[2].title}
                    fill
                    className="object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-amber-400/20 text-amber-500 border border-amber-400/40 backdrop-blur-md">
                    {FEATURED_PROJECTS[2].badge}
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/60 text-white text-[10px] font-mono backdrop-blur-md">
                    8-DIGIT HASH SECURE
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--foreground-muted)]">
                    {FEATURED_PROJECTS[2].type}
                  </span>
                  <span className="font-mono text-xs font-bold text-amber-500">
                    HARDWARE VERIFIED
                  </span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-black text-[var(--foreground)] tracking-tight mb-3 group-hover:text-amber-500 transition-colors">
                  {FEATURED_PROJECTS[2].title}
                </h4>

                <p className="text-sm sm:text-base text-[var(--foreground-muted)] font-light leading-relaxed mb-6">
                  {FEATURED_PROJECTS[2].description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {FEATURED_PROJECTS[2].techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[var(--background)] text-[var(--foreground)] border border-[var(--border-color)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)]/70">
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
            </TiltCard>
          </div>
        </div>

        {/* Auxiliary Projects Accordion / Expand Button */}
        <div className="text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="interactive px-8 py-3.5 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--foreground)] font-mono text-xs font-bold hover:border-[var(--primary-vibrant)] hover:shadow-lg transition-all"
          >
            {showMore ? "HIDE ADDITIONAL PLATFORMS ↑" : "VIEW MORE PLATFORMS (AICYRO SHIELD, UDRA, BRIGHTSMILE) ↓"}
          </button>
        </div>

        {/* Auxiliary Cards Grid */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 overflow-hidden"
            >
              {AUXILIARY_PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--primary-vibrant)] transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[var(--primary)] uppercase font-semibold mb-2 block">
                      {project.badge}
                    </span>
                    <h5 className="text-xl font-bold text-[var(--foreground)] mb-2">
                      {project.title}
                    </h5>
                    <p className="text-xs text-[var(--foreground-muted)] mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--background-subtle)] text-[var(--foreground)] border border-[var(--border-color)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[var(--primary)] hover:underline flex items-center gap-1"
                    >
                      <span>Explore Platform</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Architecture Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[var(--card-bg-elevated)] border border-[var(--border-color)] p-8 sm:p-10 shadow-2xl z-10 overflow-hidden"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[var(--background-subtle)] border border-[var(--border-color)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-semibold text-[var(--primary)]">
                <span className="w-2 h-2 rounded-full bg-[var(--primary-vibrant)] animate-pulse" />
                <span>{selectedProject.badge}</span>
                <span className="text-[var(--foreground-muted)]">• {selectedProject.type}</span>
              </div>

              <h3 className="text-3xl font-black text-[var(--foreground)] tracking-tight mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-base text-[var(--foreground-muted)] font-light leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-muted)] mb-3">
                  Core Architectural Accomplishments
                </h4>
                <div className="space-y-2.5">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-[var(--foreground)]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary-vibrant)] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-[var(--border-color)]">
                <Link
                  href={selectedProject.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-white dark:text-zinc-950 text-xs font-mono font-bold tracking-wider hover:opacity-90 transition-opacity"
                >
                  VISIT LIVE SYSTEM →
                </Link>
                <Link
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-[var(--background-subtle)] border border-[var(--border-color)] text-[var(--foreground)] text-xs font-mono hover:border-[var(--primary)] transition-colors"
                >
                  VIEW REPOSITORY
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
