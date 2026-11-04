"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { useState } from "react";

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
    statusType: "online",
    color: "var(--primary)",
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
    statusType: "secure",
    color: "var(--accent-blue)",
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
    statusType: "active",
    color: "var(--accent-purple)",
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
    statusType: "active",
    color: "var(--success)",
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

// Reusable Interactive Service Card with Holographic Cursor Glare & Live Graphic
const ServiceCard = ({ service, index }) => {
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
      className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[var(--card-bg)]/60 hover:bg-[var(--card-bg)]/90 backdrop-blur-xl border border-[var(--border-color)] hover:border-[var(--border-color-hover)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
    >
      {/* Top Accent Gradient Border */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-500 opacity-70 group-hover:opacity-100"
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
                backgroundColor: `${service.color}15`,
                color: service.color,
                border: `1px solid ${service.color}35`,
              }}
            >
              {service.tag}
            </span>
          </div>

          {/* Live Status Pill */}
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[var(--background)]/80 border border-[var(--border-color)]">
            <span
              className="w-1.5 h-1.5 rounded-full animate-ping"
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
        <div className="flex items-center justify-between gap-4 mb-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center border shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 bg-[var(--background)] relative overflow-hidden"
            style={{
              color: service.color,
              borderColor: `${service.color}40`,
            }}
          >
            {service.icon}
          </div>

          {/* Mini Live Element Animation */}
          {service.liveGraphic === "waveform" && (
            <div className="flex items-center gap-1 h-8 px-3 rounded-lg bg-[var(--background)]/60 border border-[var(--border-color)]">
              {[40, 85, 55, 100, 65, 90, 45].map((height, i) => (
                <span
                  key={i}
                  className="w-1 rounded-full animate-waveform"
                  style={{
                    backgroundColor: service.color,
                    animationDelay: `${i * 0.15}s`,
                    height: `${height * 0.22}px`,
                  }}
                />
              ))}
              <span className="text-[9px] font-mono text-[var(--foreground-muted)] ml-1">
                RT-AUDIO
              </span>
            </div>
          )}

          {service.liveGraphic === "nodes" && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--background)]/60 border border-[var(--border-color)]">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)] animate-pulse" />
              <div className="w-6 h-[1px] bg-[var(--accent-blue)]/50" />
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
              <span className="text-[9px] font-mono text-[var(--foreground-muted)]">
                MULTI-TENANT
              </span>
            </div>
          )}

          {service.liveGraphic === "mobile" && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--background)]/60 border border-[var(--border-color)]">
              <span className="text-[10px] font-mono text-[var(--accent-purple)]">
                iOS / ANDROID
              </span>
              <span className="w-2 h-2 rounded-full bg-[var(--accent-purple)] animate-ping" />
            </div>
          )}

          {service.liveGraphic === "pipeline" && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--background)]/60 border border-[var(--border-color)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />
              <span className="text-[9px] font-mono text-[var(--success)]">
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
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full py-28 md:py-36 bg-[var(--background)] overflow-hidden border-t border-[var(--border-color)]/50"
    >
      {/* Background Ambience & Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(var(--border-color) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 90%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[var(--border-color)]/70 pb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-[var(--primary)]" />
              <h2 className="text-xs font-mono tracking-widest text-[var(--foreground-muted)] uppercase">
                Core Capabilities & Offerings
              </h2>
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-[var(--foreground)] tracking-tight">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent-blue)] to-[var(--accent-purple)]">
                Without Limits.
              </span>
            </h3>
          </div>

          <p className="text-base sm:text-lg text-[var(--foreground-muted)] font-light max-w-md md:text-right">
            From low-latency AI voice streaming to multi-tenant cloud platforms
            and cross-platform mobile apps, tailored for enterprise resilience.
          </p>
        </motion.div>

        {/* 2x2 Interactive Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
