"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

// --- UPDATED SERVICES DATA REFLECTING YOUR ACTUAL TECH STACK ---
const SERVICES_DATA = [
  {
    id: "01",
    title: "AI & Voice Integration",
    description:
      "Engineering real-time artificial intelligence features into web applications. Specialized in integrating OpenAI's Realtime API and Whisper models for intelligent, low-latency voice assistants and chatbots.",
    features: [
      "OpenAI Realtime API",
      "Whisper Transcription",
      "Custom AI Chatbots",
      "Voice Data Streaming",
    ],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
      />
    ),
    color: "var(--primary)", // Crimson
  },
  {
    id: "02",
    title: "Full-Stack Architecture",
    description:
      "Building scalable, high-performance web applications from the ground up. Handling everything from complex data schemas in Firebase RTDB to dynamic page layouts using Next.js and React.",
    features: [
      "Next.js Architecture",
      "React Component Systems",
      "Firebase RTDB",
      "Secure API Routes",
    ],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    ),
    color: "var(--accent-blue)", // Cold Blue
  },
  {
    id: "03",
    title: "Workflow Automation",
    description:
      "Constructing automated booking workflows and data pipelines. Seamlessly linking custom webhooks with tools like Google Calendar and Make.com to eliminate manual tasks and streamline operations.",
    features: [
      "Make.com Scenarios",
      "Custom Webhooks",
      "Google Calendar API",
      "Automated Scheduling",
    ],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
    color: "rgb(250 204 21)", // Amber/Gold
  },
  {
    id: "04",
    title: "Interactive Frontends",
    description:
      "Translating logic into pixel-perfect, highly interactive digital experiences. Utilizing Tailwind CSS and Framer Motion to build fluid, physics-based UIs and 3D layouts that captivate users.",
    features: [
      "Framer Motion Physics",
      "Tailwind CSS Tokens",
      "Interactive 3D UIs",
      "Responsive Layouts",
    ],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      />
    ),
    color: "var(--success)", // Emerald
  },
];

// --- INTERACTIVE SERVICE CARD COMPONENT ---
const ServiceCard = ({ service, index }) => {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set(e.clientX - rect.left);
    pointerY.set(e.clientY - rect.top);
  };

  // Holographic glare effect that follows the cursor
  const glareBackground = useMotionTemplate`radial-gradient(circle 300px at ${pointerX}px ${pointerY}px, ${service.color}25, transparent 80%)`;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      onPointerMove={handlePointerMove}
      className="group relative flex flex-col p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[var(--card-bg)]/80 to-[var(--background)]/60 backdrop-blur-2xl border border-[var(--border-color)] overflow-hidden transition-all duration-500 hover:border-[var(--border-color)]/80 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:-translate-y-1.5"
      style={{ borderTopColor: service.color, borderTopWidth: "2px" }}
    >
      {/* Dynamic Mouse Follow Glare */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: glareBackground }}
      />

      <div className="relative z-10 flex flex-col h-full">
        
        {/* Top HUD Header */}
        <div className="w-full flex items-center justify-between mb-8 pb-4 border-b border-[var(--border-color)]/50">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
            <span>[ MODULE // {service.id} ]</span>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[var(--background)]/50 border border-[var(--border-color)]/50">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse shadow-sm" style={{ backgroundColor: service.color, boxShadow: `0 0 8px ${service.color}` }} />
            <span className="text-[9px] font-mono tracking-widest uppercase font-bold" style={{ color: service.color }}>
              Online
            </span>
          </div>
        </div>

        {/* Icon & Title */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
          <div
            className="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center border border-white/10 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 bg-[var(--background)]/90 relative overflow-hidden"
            style={{ color: service.color }}
          >
            {/* Soft glow behind the icon inside the box */}
            <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at center, ${service.color}, transparent)` }}/>
            <svg className="w-7 h-7 relative z-10 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {service.icon}
            </svg>
          </div>
          <h4 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight drop-shadow-sm group-hover:text-[var(--foreground)] transition-colors duration-300">
            {service.title}
          </h4>
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed mb-8 flex-1 group-hover:text-zinc-300 transition-colors duration-300">
          {service.description}
        </p>

        {/* Features Terminal Tags */}
        <div className="pt-6 border-t border-[var(--border-color)]/50 mt-auto">
          <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 block mb-4">
            Core Capabilities
          </span>
          <div className="flex flex-wrap gap-2.5">
            {service.features.map((feature, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-[var(--background)]/80 border border-[var(--border-color)] text-[11px] font-mono text-zinc-300 flex items-center gap-2 group-hover:border-[var(--foreground-muted)] group-hover:bg-[var(--background)] transition-all duration-300 shadow-sm"
              >
                <svg className="w-3.5 h-3.5" style={{ color: service.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section
      id="services"
      className="relative w-full py-24 md:py-32 bg-[var(--background)] overflow-hidden "
    >
      {/* --- HUD GRID BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(circle at 70% 50%, black, transparent 80%)",
            WebkitMaskImage: "radial-gradient(circle at 70% 50%, black, transparent 80%)",
          }}
        />
      </div>

      {/* --- MASSIVE FLOATING BACKGROUND ICONS --- */}
      {/* 1. Wireframe Globe on the right */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute -right-[10%] top-[10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] opacity-[0.02] text-[var(--foreground)] pointer-events-none"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
          <circle cx="12" cy="12" r="10" strokeWidth="0.5"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)" strokeWidth="0.5"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)" strokeWidth="0.5"/>
          <ellipse cx="12" cy="12" rx="4" ry="10" strokeWidth="0.5"/>
        </svg>
      </motion.div>

      {/* 2. Abstract Hexagon Matrix on the left */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        className="absolute -left-[10%] bottom-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] opacity-[0.02] text-[var(--primary)] pointer-events-none"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="0.5" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      {/* --- PULSING AMBIENT BACKGROUND GLOWS --- */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-0 w-[40vw] h-[40vw] bg-[var(--primary)] rounded-full blur-[150px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.07, 0.04] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 left-0 w-[40vw] h-[40vw] bg-[var(--accent-blue)] rounded-full blur-[150px] pointer-events-none" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        
        {/* --- HEADER SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-[var(--primary)]" />
              <h2 className="text-xs font-mono tracking-[0.2em] text-[var(--foreground-muted)] uppercase">
                Deployed Services
              </h2>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-md">
              What I Can Build <br className="hidden md:block" /> For You.
            </h3>
          </div>
          <p className="text-lg text-zinc-400 font-light max-w-md md:text-right leading-relaxed">
            Delivering end-to-end digital solutions, combining robust
            engineering with intelligent, scalable AI architecture.
          </p>
        </motion.div>

        {/* --- SERVICES GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;