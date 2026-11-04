"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [localTime, setLocalTime] = useState("");

  const email = "moidsekhry@gmail.com";
  const phone = "+92 347 2539535";
  const rawPhone = "03472539535";

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Karachi",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date());
        setLocalTime(timeStr);
      } catch (e) {
        setLocalTime("18:30 PKT");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(rawPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-28 md:py-36 bg-[var(--background)] overflow-hidden border-t border-[var(--border-color)]/50"
    >
      {/* Dynamic Background Spotlight Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-gradient-to-tr from-[var(--primary)]/10 via-[var(--accent-blue)]/5 to-[var(--accent-purple)]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* Contact Shell Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] border border-[var(--border-color)] bg-[var(--card-bg)]/60 backdrop-blur-2xl p-8 sm:p-14 lg:p-20 shadow-2xl group"
        >
          {/* Subtle Top Neon Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--primary)] via-[var(--accent-blue)] to-[var(--success)] opacity-70" />

          {/* Grid Mask Blueprint */}
          <div
            className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage:
                "radial-gradient(var(--foreground) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage:
                "radial-gradient(ellipse at center, black 40%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Live Availability Status Pill */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[var(--background)]/90 border border-[var(--border-color)] shadow-inner mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--success)]"></span>
              </span>
              <span className="text-xs font-mono font-medium text-[var(--foreground)] tracking-wider uppercase">
                STATUS: AVAILABLE FOR LEADERSHIP & AI CONTRACTS
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[var(--foreground)] tracking-tight mb-6 leading-tight max-w-4xl">
              Let&apos;s build the next <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent-blue)] to-[var(--accent-purple)]">
                breakthrough together.
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[var(--foreground-muted)] font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              Whether you need to architect a real-time AI SaaS, deploy low-latency
              OpenAI WebRTC voice streaming, or scale a multi-tenant web platform,
              my inbox and line are always open.
            </p>

            {/* Quick Action Matrix (Email + Phone + Schedule) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mb-12">
              {/* Primary Email Card */}
              <div className="p-5 rounded-2xl bg-[var(--background)]/70 border border-[var(--border-color)] flex flex-col items-start text-left justify-between gap-4">
                <div className="flex items-center justify-between w-full">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--foreground-muted)]">
                    DIRECT EMAIL
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs font-mono text-[var(--primary)] hover:underline flex items-center gap-1"
                  >
                    {copiedEmail ? "COPIED!" : "COPY"}
                  </button>
                </div>
                <a
                  href={`mailto:${email}`}
                  className="text-lg font-bold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors break-all"
                >
                  {email}
                </a>
              </div>

              {/* Direct Phone / WhatsApp Card */}
              <div className="p-5 rounded-2xl bg-[var(--background)]/70 border border-[var(--border-color)] flex flex-col items-start text-left justify-between gap-4">
                <div className="flex items-center justify-between w-full">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--foreground-muted)]">
                    PHONE & WHATSAPP
                  </span>
                  <button
                    onClick={handleCopyPhone}
                    className="text-xs font-mono text-[var(--primary)] hover:underline flex items-center gap-1"
                  >
                    {copiedPhone ? "COPIED!" : "COPY"}
                  </button>
                </div>
                <a
                  href={`tel:${rawPhone}`}
                  className="text-lg font-bold text-[var(--foreground)] hover:text-[var(--accent-blue)] transition-colors"
                >
                  {phone}
                </a>
              </div>
            </div>

            {/* Interactive Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href={`mailto:${email}?subject=Project%20Inquiry%20-%20Abdul%20Moid&body=Hi%20Abdul%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss...`}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold transition-all duration-300 bg-[var(--primary)] text-white hover:opacity-90 hover:shadow-[0_10px_30px_rgba(255,59,48,0.35)] hover:-translate-y-1 flex items-center justify-center gap-2 group/btn"
              >
                <span>Initiate Conversation</span>
                <svg
                  className="w-4 h-4 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
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
              </a>

              <a
                href="https://www.linkedin.com/in/abdulmoiddd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-mono text-sm transition-all duration-300 border border-[var(--border-color)] bg-[var(--background)]/80 text-[var(--foreground)] hover:bg-[var(--card-bg)] hover:border-[var(--primary)]/60 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Connect on LinkedIn
              </a>
            </div>

            {/* Telemetry Footer with Live Local Time */}
            <div className="mt-14 pt-8 border-t border-[var(--border-color)]/50 w-full flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[var(--foreground-muted)] gap-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />
                <span>RAWALPINDI / ISLAMABAD, PAKISTAN</span>
              </div>
              <div className="flex items-center gap-2">
                <span>LOCAL TIME:</span>
                <span className="text-[var(--foreground)] font-semibold">
                  {localTime || "18:30:00 PKT"}
                </span>
                <span>(UTC+5)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
