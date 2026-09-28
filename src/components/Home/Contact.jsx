"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "moidsekhry@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative w-full pb-9 bg-[var(--background)] overflow-hidden flex items-center justify-center"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-gradient-to-tr from-[var(--primary)]/10 to-[var(--accent-blue)]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] border border-[var(--border-color)] bg-[var(--card-bg)]/40 backdrop-blur-xl p-10 md:p-16 lg:p-20 text-center shadow-2xl group"
        >
          {/* Internal Hover Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Abstract Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage:
                "radial-gradient(var(--foreground) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              maskImage:
                "radial-gradient(ellipse at center, black 40%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Availability Status */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border-color)] shadow-sm mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-[var(--foreground)] tracking-wide uppercase">
                Available for New Opportunities
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--foreground)] tracking-tighter mb-6 leading-tight">
              Let&apos;s build something <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
                extraordinary.
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-lg text-[var(--foreground-muted)] font-light max-w-xl mx-auto mb-10 leading-relaxed">
              Whether you have a fully formed project or just a concept in mind,
              I&apos;m always open to discussing new ideas, architectures, and
              digital experiences.
            </p>

            {/* Headline */}
            {/* <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--foreground)] tracking-tighter mb-6 leading-tight">
              Let's build something <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
                extraordinary.
              </span>
            </h2> */}

            {/* Subtext */}
            {/* <p className="text-lg text-[var(--foreground-muted)] font-light max-w-xl mx-auto mb-10 leading-relaxed">
              Whether you have a fully formed project or just a concept in mind,
              I'm always open to discussing new ideas, architectures, and
              digital experiences.
            </p> */}

            {/* Interaction Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              {/* Primary Email Button */}
              <a
                href={`mailto:${email}`}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold transition-all duration-300 bg-[var(--foreground)] text-[var(--background)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 group/btn"
              >
                Start a Conversation
                <svg
                  className="w-5 h-5 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </a>

              {/* Copy to Clipboard Button */}
              <button
                onClick={handleCopy}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium transition-all duration-300 border border-[var(--border-color)] bg-[var(--background)]/50 text-[var(--foreground)] hover:bg-[var(--card-bg)] hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <svg
                      className="w-5 h-5 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5 opacity-70"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
