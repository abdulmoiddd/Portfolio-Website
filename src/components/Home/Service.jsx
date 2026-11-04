"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

const SERVICES_DATA = [
  {
    id: "01",
    tag: "AI & SPEECH",
    title: "Real-Time AI & Voice Streaming",
    shortDesc:
      "Engineering low-latency, conversational AI experiences using OpenAI Realtime WebRTC, Whisper transcription, and Gemini models.",
    features: [
      "OpenAI Realtime WebRTC Streaming",
      "Whisper Low-Latency Audio Transcription",
      "Gemini Multimodal LLM Integration",
      "gpt-4o-mini Vision Automated Diagnostics",
    ],
    status: "LATENCY <180ms",
    color: "#FACC15",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      </svg>
    ),
    liveGraphic: "waveform",
  },
  {
    id: "02",
    tag: "SAAS & FULL-STACK",
    title: "Multi-Tenant Web & SaaS Engineering",
    shortDesc:
      "Architecting enterprise-grade web applications from scalable Next.js and React frontends to robust Node.js APIs and isolated tenant databases.",
    features: [
      "Next.js SSR/SSG & React Ecosystems",
      "Multi-Tenant Isolation & Role Security",
      "Firebase RTDB, MongoDB & SQL Modeling",
      "Native OAuth2 & Dynamic SMTP Engines",
    ],
    status: "99.9% SLA UPTIME",
    color: "#EAB308",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    liveGraphic: "nodes",
  },
  {
    id: "03",
    tag: "MOBILE APPS",
    title: "Cross-Platform Mobile Architecture",
    shortDesc:
      "Developing seamless iOS & Android applications using React Native and Expo with offline-first data caching and real-time syncing.",
    features: [
      "React Native & Expo Development",
      "Offline-First Firebase Synchronization",
      "Hardware & Serial Number Verification",
      "Pixel-Perfect Mobile UI/UX",
    ],
    status: "OFFLINE-CAPABLE",
    color: "#38BDF8",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    liveGraphic: "mobile",
  },
  {
    id: "04",
    tag: "AUTOMATION & TELEMETRY",
    title: "Workflow Automation & Telemetry",
    shortDesc:
      "Eliminating manual overhead with automated booking workflows, custom webhook pipelines, Make.com scenarios, and system tracing.",
    features: [
      "Make.com & Zapier Workflow Scenarios",
      "Custom Webhook Ingestion & Triggers",
      "Google Calendar 24/7 Auto-Booking",
      "Bespoke Health Tracing & Anomaly Logging",
    ],
    status: "CONTINUOUS MONITORING",
    color: "#F59E0B",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    liveGraphic: "pipeline",
  },
];

function ServiceCard({ service, index }) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set(e.clientX - rect.left);
    pointerY.set(e.clientY - rect.top);
  };

  const glareBackground = useMotionTemplate`radial-gradient(circle 320px at ${pointerX}px ${pointerY}px, ${service.color}25, transparent 80%)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onPointerMove={handlePointerMove}
      whileHover={{ y: -6 }}
      className="interactive group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[var(--card-bg)] hover:bg-[var(--card-bg-elevated)] border border-[var(--border-color)] hover:border-[var(--primary)] transition-all duration-300 hover:shadow-md overflow-hidden"
    >
      {/* Top Accent Gradient Border */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-500 opacity-80 group-hover:opacity-100"
        style={{ backgroundColor: service.color }}
      />

      {/* Holographic Cursor Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: glareBackground }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Module Header Bar */}
        <div className="flex items-center justify-between pb-5 mb-6 border-b border-[var(--border-color)]/60">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-widest text-[var(--foreground-muted)] uppercase">
              [ MOD // {service.id} ]
            </span>
            <span
              className="text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase"
              style={{
                backgroundColor: `${service.color}18`,
                color: service.color,
                border: `1px solid ${service.color}40`,
              }}
            >
              {service.tag}
            </span>
          </div>

          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[var(--background-subtle)] border border-[var(--border-color)]">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: service.color }}
            />
            <span
              className="text-[9px] font-mono tracking-wider font-semibold uppercase"
              style={{ color: service.color }}
            >
              {service.status}
            </span>
          </div>
        </div>

        {/* Icon & Live Interactive Graphic Visualizer */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-inner transition-transform duration-300 group-hover:scale-105 bg-[var(--background-subtle)] relative overflow-hidden"
            style={{
              color: service.color,
              borderColor: `${service.color}45`,
            }}
          >
            {service.icon}
          </div>

          {service.liveGraphic === "waveform" && (
            <div className="flex items-center gap-1 h-7 px-2.5 rounded-lg bg-[var(--background-subtle)] border border-[var(--border-color)]">
              {[40, 85, 55, 100, 65, 90, 45].map((height, i) => (
                <span
                  key={i}
                  className="w-1 rounded-full"
                  style={{
                    backgroundColor: service.color,
                    height: `${height * 0.2}px`,
                  }}
                />
              ))}
              <span className="text-[9px] font-mono text-[var(--foreground-muted)] ml-1 font-semibold">
                RT-AUDIO
              </span>
            </div>
          )}

          {service.liveGraphic === "nodes" && (
            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[var(--background-subtle)] border border-[var(--border-color)]">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <div className="w-5 h-[1px] bg-amber-400/50" />
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <span className="text-[9px] font-mono text-[var(--foreground-muted)] font-semibold">
                MULTI-TENANT
              </span>
            </div>
          )}

          {service.liveGraphic === "mobile" && (
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[var(--background-subtle)] border border-[var(--border-color)]">
              <span className="text-[10px] font-mono text-sky-500 font-semibold">
                iOS / ANDROID
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
            </div>
          )}

          {service.liveGraphic === "pipeline" && (
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[var(--background-subtle)] border border-[var(--border-color)]">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="text-[9px] font-mono text-amber-500 font-semibold">
                HOOK → CRON → SYNC
              </span>
            </div>
          )}
        </div>

        {/* Title & Short Description */}
        <h4 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] tracking-tight mb-3 group-hover:text-[var(--primary)] transition-colors duration-300">
          {service.title}
        </h4>
        <p className="text-base text-[var(--foreground-muted)] font-light leading-relaxed mb-8 flex-grow">
          {service.shortDesc}
        </p>

        {/* Feature List */}
        <div className="pt-6 border-t border-[var(--border-color)]/50 space-y-2.5">
          {service.features.map((feature, fIdx) => (
            <div
              key={fIdx}
              className="flex items-center gap-3 text-xs sm:text-sm font-medium text-[var(--foreground)]"
            >
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: `${service.color}20`,
                  color: service.color,
                }}
              >
                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full py-16 md:py-24 bg-[var(--background)] overflow-hidden border-t border-[var(--border-color)]"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(250, 204, 21, 0.08) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(245, 158, 11, 0.06) 0%, transparent 45%)",
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
                SPEC // SERVICES • CORE CAPABILITIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--foreground)] tracking-tight">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 dark:from-yellow-300 dark:via-amber-400 dark:to-yellow-500">Without Limits</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[var(--foreground-muted)] max-w-md md:text-right leading-relaxed">
            From low-latency AI voice streaming to multi-tenant cloud platforms and cross-platform mobile apps, tailored for enterprise resilience.
          </p>
        </div>

        {/* 2x2 Services Grid (High-Density) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
