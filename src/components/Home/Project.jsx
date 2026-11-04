"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS_DATA = [
  {
    id: "01",
    title: "CloseDesk by Aicyro",
    type: "AI & SaaS Architecture",
    category: "AI & SaaS",
    badge: "FLAGSHIP LEAD",
    statusText: "LIVE 24/7 PRODUCTION",
    statusColor: "var(--primary)",
    role: "Lead Engineer",
    period: "May 2026 – Present",
    description:
      "Engineered a multi-tenant 24/7 AI booking desk and lead capture platform from the ground up to automate scheduling and customer interactions. Features OpenAI Realtime WebRTC voice streaming, gpt-4o-mini Vision diagnostics, and dynamic SMTP.",
    architecturePoints: [
      "OpenAI Realtime WebRTC voice streaming for sub-200ms audio conversational AI",
      "gpt-4o-mini Vision automated diagnostics pipeline",
      "Multi-tenant security overhaul: server-side SuperAdmin endpoints & brute-force CAPTCHA",
      "Native OAuth2 email authentication and strict tenant data isolation",
      "Bespoke telemetry tracing suite for monitoring latency and system uptime",
    ],
    techStack: [
      "Next.js",
      "OpenAI WebRTC",
      "gpt-4o Vision",
      "Firebase RTDB",
      "Node.js",
      "Make.com",
      "Tailwind CSS",
    ],
    links: {
      live: "https://aicyro.com",
      github: "https://github.com/abdulmoiddd",
    },
    image: "https://dummyimages.netlify.app/Mysite/Aicyro.jpg",
    stats: { primary: "<180ms", label: "Voice Latency" },
  },
  {
    id: "02",
    title: "Aicyro Shield",
    type: "Cybersecurity Platform",
    category: "AI & SaaS",
    badge: "ML ARCHITECTURE",
    statusText: "AUTONOMOUS MONITORING",
    statusColor: "var(--accent-blue)",
    role: "Full-Stack & ML Architect",
    period: "Enterprise Deployment",
    description:
      "Architected an autonomous, full-spectrum cybersecurity intelligence platform utilizing Next.js, React, and Machine Learning. Leveraged AI models for continuous system monitoring, anomaly detection, and real-time risk scoring.",
    architecturePoints: [
      "Real-time anomaly detection and continuous system risk scoring",
      "Autonomous threat response mechanisms to secure digital & physical infrastructure",
      "High-throughput WebSocket streams for live telemetry dashboards",
      "Modern dark-mode command center UI engineered with Next.js and Tailwind",
    ],
    techStack: [
      "Next.js",
      "React",
      "Machine Learning",
      "Node.js",
      "WebSockets",
      "Tailwind CSS",
    ],
    links: {
      live: "https://aicyro.com",
      github: "https://github.com/abdulmoiddd",
    },
    image: "https://dummyimages.netlify.app/Mysite/Markvision.jpg",
    stats: { primary: "Real-Time", label: "Anomaly Detection" },
  },
  {
    id: "03",
    title: "BrightSmile AI",
    type: "Healthcare Chatbot",
    category: "AI & SaaS",
    badge: "GEMINI AI ENGINE",
    statusText: "HIPAA COMPLIANT",
    statusColor: "var(--success)",
    role: "AI Integration Lead",
    period: "Production App",
    description:
      "Built an AI-powered virtual dental assistant web application leveraging the Gemini LLM API. Engineered secure patient communication channels for routine checkup scheduling and dental inquiry triage.",
    architecturePoints: [
      "Powered by Gemini Multimodal LLM API for accurate clinical triage",
      "Secure patient communication protocols designed around healthcare privacy",
      "Conversational scheduling assistant for dental procedures and whitening inquiries",
      "High-conversion, accessible frontend deployed on Netlify",
    ],
    techStack: [
      "React",
      "Gemini API",
      "JavaScript",
      "Tailwind CSS",
      "Netlify",
    ],
    links: {
      live: "https://dentalbott.netlify.app/",
      github: "https://github.com/abdulmoiddd",
    },
    image: "https://dummyimages.netlify.app/Mysite/brightsmile.jpg",
    stats: { primary: "100%", label: "Privacy Compliance" },
  },
  {
    id: "04",
    title: "PocketPool",
    type: "Cross-Platform Mobile App",
    category: "Mobile",
    badge: "REACT NATIVE",
    statusText: "OFFLINE READY",
    statusColor: "var(--accent-purple)",
    role: "Mobile Engineer",
    period: "Mobile Release",
    description:
      "Developed a robust cross-platform mobile application utilizing React Native and Expo. Engineered an offline-capable data architecture using Firebase storage to ensure uninterrupted functionality in low-connectivity environments.",
    architecturePoints: [
      "Universal React Native & Expo codebase targeting iOS and Android",
      "Offline-capable data architecture ensuring functionality without cellular connectivity",
      "Real-time state synchronization upon reconnecting to Firebase cloud",
      "Smooth 60fps animations and native mobile component architecture",
    ],
    techStack: [
      "React Native",
      "Expo",
      "Firebase Storage",
      "Offline Sync",
      "Mobile Architecture",
    ],
    links: {
      live: "https://github.com/abdulmoiddd",
      github: "https://github.com/abdulmoiddd",
    },
    image: "https://dummyimages.netlify.app/Mysite/muhamadhub.jpg",
    stats: { primary: "60 FPS", label: "Native Performance" },
  },
  {
    id: "05",
    title: "Brand Warranty & Verification",
    type: "Full-Stack & Mobile Suite",
    category: "Mobile",
    badge: "HARDWARE VALIDATION",
    statusText: "8-DIGIT SERIAL VERIFIED",
    statusColor: "var(--warning)",
    role: "Full-Stack & Mobile Developer",
    period: "Enterprise Deployment",
    description:
      "Designed and engineered a full-scale brand portfolio website and an accompanying offline mobile application for a stove and hob manufacturer. Built an 8-digit serial number warranty verification system.",
    architecturePoints: [
      "Engineered 8-digit serial number hashing and verification algorithm",
      "Allows consumers to validate authentic hardware and active warranty periods",
      "Companion mobile application operable in remote or warehouse environments",
      "Seamless brand presentation site with responsive product catalogs",
    ],
    techStack: [
      "Next.js",
      "React Native",
      "Firebase",
      "Node.js",
      "Tailwind CSS",
    ],
    links: {
      live: "https://github.com/abdulmoiddd",
      github: "https://github.com/abdulmoiddd",
    },
    image: "https://dummyimages.netlify.app/Mysite/UDRA.jpg",
    stats: { primary: "8-Digit", label: "Serial Security" },
  },
  {
    id: "06",
    title: "UDRA Corporate Platform",
    type: "Corporate Web Platform",
    category: "Corporate",
    badge: "ENTERPRISE SEO",
    statusText: "SUB-SECOND TTFB",
    statusColor: "var(--accent-blue)",
    role: "Frontend Engineer",
    period: "Corporate Release",
    description:
      "Developed the official corporate web presence for UDRA, a debt collection and risk management firm. Focused heavily on technical SEO, blazing-fast speed, accessibility standards, and a modern corporate user experience.",
    architecturePoints: [
      "Optimized for sub-second page loads and 100/100 Lighthouse performance metrics",
      "Structured schema data and technical SEO architecture for maximum visibility",
      "Fully accessible semantic markup conforming to modern accessibility standards",
      "Continuous CI/CD deployment pipeline hosted on Netlify",
    ],
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Netlify",
      "Technical SEO",
    ],
    links: {
      live: "https://udra.netlify.app/",
      github: "https://github.com/abdulmoiddd",
    },
    image: "https://dummyimages.netlify.app/Mysite/UDRA.jpg",
    stats: { primary: "98+", label: "Lighthouse Score" },
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "AI & SaaS", "Mobile", "Corporate"];

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative w-full py-28 md:py-36 bg-[var(--background)] min-h-screen overflow-hidden border-t border-[var(--border-color)]/50"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(var(--border-color) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
            maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-[var(--border-color)]/70 pb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-[var(--primary)]" />
              <h2 className="text-xs font-mono tracking-widest text-[var(--foreground-muted)] uppercase">
                Featured Architectures & Systems
              </h2>
            </div>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-[var(--foreground)] tracking-tight">
              Selected <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent-blue)] to-[var(--accent-purple)]">
                Projects.
              </span>
            </h3>
          </div>

          <p className="text-base sm:text-lg text-[var(--foreground-muted)] font-light max-w-md md:text-right">
            Real enterprise SaaS platforms, AI voice streaming engines, and
            cross-platform mobile apps engineered for reliability and scale.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-16">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono tracking-wide transition-all duration-300 ${
                  isActive
                    ? "bg-[var(--foreground)] text-[var(--background)] font-bold shadow-lg shadow-black/20"
                    : "bg-[var(--card-bg)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] border border-[var(--border-color)] hover:border-[var(--border-color-hover)]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 2-Column Responsive Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col rounded-3xl bg-[var(--card-bg)]/50 hover:bg-[var(--card-bg)]/90 backdrop-blur-xl border border-[var(--border-color)] hover:border-[var(--border-color-hover)] transition-all duration-500 overflow-hidden shadow-lg hover:shadow-[0_20px_45px_-15px_rgba(0,0,0,0.5)] hover:-translate-y-2"
            >
              {/* Project Image Preview with Live Pill */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-[var(--background)] border-b border-[var(--border-color)]/60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Ambient Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-transparent to-transparent opacity-60" />

                {/* Top Floating Telemetry Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase backdrop-blur-md shadow-md"
                    style={{
                      backgroundColor: `${project.statusColor}25`,
                      color: project.statusColor,
                      border: `1px solid ${project.statusColor}50`,
                    }}
                  >
                    {project.badge}
                  </span>

                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono">
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-ping"
                      style={{ backgroundColor: project.statusColor }}
                    />
                    <span>{project.statusText}</span>
                  </div>
                </div>

                {/* Hover Reveal Explore Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                  <div className="px-6 py-2.5 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-mono tracking-wider flex items-center gap-2 shadow-2xl transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 border border-white/20">
                    CLICK TO VIEW DETAILS
                    <svg
                      className="w-4 h-4 text-[var(--primary)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-7 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  {/* Category & Stat Header */}
                  <div className="flex items-center justify-between mb-3 font-mono text-xs">
                    <span className="text-[var(--foreground-muted)] uppercase tracking-wider">
                      {project.type}
                    </span>
                    <div className="flex items-center gap-1.5 text-[var(--foreground)] font-semibold">
                      <span className="text-[var(--primary)]">
                        {project.stats.primary}
                      </span>
                      <span className="text-[var(--foreground-muted)] font-normal text-[10px]">
                        ({project.stats.label})
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] tracking-tight mb-3 group-hover:text-[var(--primary)] transition-colors duration-300">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="text-[var(--foreground-muted)] text-sm sm:text-base font-light leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Footer: Tech Stack Chips & Action Links */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono text-[var(--foreground)] bg-[var(--background)]/80 border border-[var(--border-color)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)]/60">
                    {/* View Architecture Modal Trigger */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-mono tracking-wider font-semibold text-[var(--primary)] hover:underline flex items-center gap-1.5"
                    >
                      <span>[ VIEW ARCHITECTURE ]</span>
                    </button>

                    {/* External Platform Link */}
                    <Link
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-mono font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
                    >
                      <span>Live Site</span>
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* ARCHITECTURE DEEP-DIVE MODAL                             */}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] p-7 sm:p-9 shadow-2xl z-10 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[var(--background)] border border-[var(--border-color)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
                aria-label="Close dialog"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-center gap-2 mb-2 font-mono text-xs">
                <span
                  className="w-2 h-2 rounded-full animate-ping"
                  style={{ backgroundColor: selectedProject.statusColor }}
                />
                <span style={{ color: selectedProject.statusColor }}>
                  {selectedProject.badge}
                </span>
                <span className="text-[var(--foreground-muted)]">• {selectedProject.role}</span>
              </div>

              <h3 className="text-3xl font-black text-[var(--foreground)] tracking-tight mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-[var(--foreground-muted)] text-base font-light mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-muted)] mb-3">
                  Key Architectural Accomplishments
                </h4>
                <div className="space-y-2.5">
                  {selectedProject.architecturePoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-[var(--foreground)]">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: selectedProject.statusColor }}
                      />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-muted)] mb-3">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-[var(--background)] text-[var(--foreground)] border border-[var(--border-color)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-[var(--border-color)]">
                <Link
                  href={selectedProject.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-[var(--primary)] text-white text-xs font-mono font-semibold tracking-wider hover:opacity-90 transition-opacity"
                >
                  VISIT LIVE SYSTEM →
                </Link>
                <Link
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-[var(--background)] border border-[var(--border-color)] text-[var(--foreground)] text-xs font-mono hover:bg-[var(--card-bg-elevated)] transition-colors"
                >
                  VIEW GITHUB REPO
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
