"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [activeMode, setActiveMode] = useState("standard"); // "standard" or "terminal"
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [localTime, setLocalTime] = useState("");

  const email = "moidsekhry@gmail.com";
  const phone = "+92 347 2539535";
  const rawPhone = "03472539535";

  // Form State for Standard Mode
  const [formSubject, setFormSubject] = useState("");
  const [formMessage, setFormMessage] = useState("");

  // Live Local Time for Rawalpindi / Islamabad (Asia/Karachi)
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
        setLocalTime("Active PKT");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(rawPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(formSubject || "Project Inquiry");
    const body = encodeURIComponent(formMessage || "Hi Abdul, I would like to discuss a project...");
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");
  };

  // Terminal State & Engine (Preserved for developers)
  const [terminalHistory, setTerminalHistory] = useState([
    { type: "system", text: "SYSTEM DISPATCH CONSOLE v2.4 — ABDUL MOID [READY]" },
    { type: "system", text: "Type 'help' or click quick commands below to initialize connection." },
  ]);
  const [terminalInput, setTerminalInput] = useState("");
  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (activeMode === "terminal") {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalHistory, activeMode]);

  const executeCommand = (cmdStr) => {
    const cleanCmd = cmdStr.trim();
    if (!cleanCmd) return;

    const newHistory = [...terminalHistory, { type: "user", text: cleanCmd }];
    const lower = cleanCmd.toLowerCase();

    if (lower === "help") {
      newHistory.push({
        type: "output",
        text: "Available commands:\n  • email      - Copy email & launch mail client\n  • phone      - Copy mobile & WhatsApp direct line\n  • github     - Open GitHub profile (@abdulmoiddd)\n  • linkedin   - Open LinkedIn profile (@abdulmoiddd)\n  • status     - Check live availability & local telemetry\n  • clear      - Clear terminal buffer",
      });
    } else if (lower === "email") {
      handleCopyEmail();
      newHistory.push({
        type: "output",
        text: `✓ Copied ${email} to clipboard! Launching mail client...`,
      });
      window.open(`mailto:${email}?subject=Project%20Inquiry%20from%20Portfolio`, "_blank");
    } else if (lower === "phone") {
      handleCopyPhone();
      newHistory.push({
        type: "output",
        text: `✓ Copied ${phone} to clipboard! Available for WhatsApp and direct calls.`,
      });
    } else if (lower === "github") {
      newHistory.push({ type: "output", text: "Opening https://github.com/abdulmoiddd..." });
      window.open("https://github.com/abdulmoiddd", "_blank");
    } else if (lower === "linkedin") {
      newHistory.push({ type: "output", text: "Opening https://www.linkedin.com/in/abdulmoiddd..." });
      window.open("https://www.linkedin.com/in/abdulmoiddd", "_blank");
    } else if (lower === "status") {
      newHistory.push({
        type: "output",
        text: `[STATUS]: AVAILABLE FOR FULL-TIME ROLES & AI CONTRACTS\n[LOCATION]: Rawalpindi / Islamabad, PK (Local time: ${localTime || "Active PKT"})\n[SPECIALTY]: Multi-Tenant AI Architectures, WebRTC Voice & Full-Stack Systems`,
      });
    } else if (lower.startsWith("message") || lower.startsWith("msg")) {
      const msgContent = cleanCmd.replace(/^(message|msg)\s*/i, "").trim();
      const subject = encodeURIComponent("Project Inquiry via Portfolio Terminal");
      const body = encodeURIComponent(msgContent || "Hi Abdul, I would like to discuss a project...");
      newHistory.push({
        type: "output",
        text: "✓ Prepared message draft! Redirecting to email dispatcher...",
      });
      window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");
    } else if (lower === "clear") {
      setTerminalHistory([]);
      setTerminalInput("");
      return;
    } else {
      newHistory.push({
        type: "error",
        text: `Command '${cleanCmd}' not recognized. Type 'help' to inspect command list.`,
      });
    }

    setTerminalHistory(newHistory);
    setTerminalInput("");
  };

  // MISSING FUNCTION ADDED HERE
  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    executeCommand(terminalInput);
  };

  return (
    <section id="contact" className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Subtle Background Mesh */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-dot-grid opacity-50" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Section Header */}
        <div className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--clr-border)] pb-8">
          <div>
            

            <h2 className="text-4xl sm:text-5xl font-black text-[var(--clr-ink)] tracking-tight">
              Let&apos;s Build <span className="text-gradient">Together</span>
            </h2>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="w-full sm:w-auto grid grid-cols-2 sm:flex items-center p-1 rounded-xl bg-[var(--clr-surface-sub)] border border-[var(--clr-border)] shadow-inner">
            <button
              onClick={() => setActiveMode("standard")}
              className={`px-2.5 sm:px-4 py-2 rounded-lg font-mono text-[11px] sm:text-xs font-bold transition-all duration-200 ease-in-out text-center ${
                activeMode === "standard"
                  ? "bg-[var(--clr-surface-card)] text-[var(--clr-ink)] shadow-md border border-[var(--clr-border)]"
                  : "text-[var(--clr-ink-muted)] hover:text-[var(--clr-ink)]"
              }`}
            >
              STANDARD INTERFACE
            </button>
            <button
              onClick={() => setActiveMode("terminal")}
              className={`px-2.5 sm:px-4 py-2 rounded-lg font-mono text-[11px] sm:text-xs font-bold transition-all duration-200 ease-in-out flex items-center justify-center gap-1.5 text-center ${
                activeMode === "terminal"
                  ? "bg-[var(--clr-surface-card)] text-[var(--clr-ink)] shadow-md border border-[var(--clr-border)]"
                  : "text-[var(--clr-ink-muted)] hover:text-[var(--clr-ink)]"
              }`}
            >
              <span className="text-[var(--clr-accent)]">&gt;_</span> DEVELOPER CLI
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* VIEW 1: STANDARD UI (User-Friendly Default) */}
          {activeMode === "standard" && (
            <motion.div
              key="standard"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--bento-gap)]"
            >
              {/* Left Column: Direct Message Form */}
              <div className="lg:col-span-7 bento-cell p-4 sm:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-[var(--clr-ink)] tracking-tight mb-2">Send a Message</h3>
                  <p className="text-sm text-[var(--clr-ink-muted)] mb-8">
                    Drop a line regarding a project, role, or just to say hello. This drafts an email securely through your default client.
                  </p>

                  <form onSubmit={handleSendEmail} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-[var(--clr-ink-muted)] uppercase mb-2">Subject</label>
                      <input
                        type="text"
                        value={formSubject}
                        onChange={(e) => setFormSubject(e.target.value)}
                        placeholder="e.g., Full-Stack Role at Acme Corp"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--clr-surface-sub)] border border-[var(--clr-border)] text-[var(--clr-ink)] focus:border-[var(--clr-accent)] outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-[var(--clr-ink-muted)] uppercase mb-2">Message</label>
                      <textarea
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        rows={5}
                        placeholder="Tell me about your project or opportunity..."
                        className="w-full px-4 py-3 rounded-xl bg-[var(--clr-surface-sub)] border border-[var(--clr-border)] text-[var(--clr-ink)] focus:border-[var(--clr-accent)] outline-none transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 w-full sm:w-auto rounded-xl bg-[var(--clr-ink)] text-[var(--clr-surface)] font-bold text-sm hover:scale-[1.02] hover:shadow-lg transition-all"
                    >
                      Draft Email
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>

              {/* Right Column: Contact Cards */}
              <div className="lg:col-span-5 flex flex-col gap-[var(--bento-gap)]">
                {/* Email Card */}
                <div className="bento-cell p-6 flex flex-col justify-center">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--clr-surface-sub)] border border-[var(--clr-border)] flex items-center justify-center text-[var(--clr-ink)]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <button onClick={handleCopyEmail} className="label-mono text-[var(--clr-accent)] hover:text-[var(--clr-ink)] transition-colors">
                      {copiedEmail ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <span className="label-mono mb-1">Direct Email</span>
                  <a href={`mailto:${email}`} className="text-lg font-bold text-[var(--clr-ink)] hover:text-[var(--clr-accent)] transition-colors truncate">
                    {email}
                  </a>
                </div>

                {/* Phone Card */}
                <div className="bento-cell p-6 flex flex-col justify-center">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--clr-surface-sub)] border border-[var(--clr-border)] flex items-center justify-center text-[var(--clr-ink)]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <button onClick={handleCopyPhone} className="label-mono text-[var(--clr-accent)] hover:text-[var(--clr-ink)] transition-colors">
                      {copiedPhone ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <span className="label-mono mb-1">Mobile & WhatsApp</span>
                  <a href={`tel:${rawPhone}`} className="text-lg font-bold text-[var(--clr-ink)] hover:text-[var(--clr-accent)] transition-colors truncate">
                    {phone}
                  </a>
                </div>

                {/* Social Split */}
                <div className="grid grid-cols-2 gap-[var(--bento-gap)]">
                  <Link href="https://github.com/abdulmoiddd" target="_blank" className="bento-cell p-5 flex flex-col items-center justify-center text-center group hover:border-[var(--clr-accent)] transition-colors">
                    <svg className="w-6 h-6 mb-2 text-[var(--clr-ink-muted)] group-hover:text-[var(--clr-ink)] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    <span className="label-mono group-hover:text-[var(--clr-ink)] transition-colors">GitHub</span>
                  </Link>
                  <Link href="https://www.linkedin.com/in/abdulmoiddd" target="_blank" className="bento-cell p-5 flex flex-col items-center justify-center text-center group hover:border-[#0A66C2] transition-colors">
                    <svg className="w-6 h-6 mb-2 text-[var(--clr-ink-muted)] group-hover:text-[#0A66C2] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    <span className="label-mono group-hover:text-[var(--clr-ink)] transition-colors">LinkedIn</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* VIEW 2: DEVELOPER TERMINAL */}
          {activeMode === "terminal" && (
            <motion.div
              key="terminal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-[var(--clr-border)] bg-[var(--clr-surface-card)] shadow-xl overflow-hidden"
            >
              {/* Window Titlebar */}
              <div className="px-4 py-3 bg-[var(--clr-surface-sub)] border-b border-[var(--clr-border)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/90 shadow-sm" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/90 shadow-sm" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-sm" />
                  <span className="text-[11px] font-mono font-bold text-[var(--clr-ink-muted)] ml-3">
                    bash — amoid@dispatch: ~
                  </span>
                </div>

                <div className="flex items-center gap-2 font-mono text-[10px] font-bold text-[var(--clr-ink-muted)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--clr-accent)] animate-pulse" />
                  <span>{localTime || "Active PKT"}</span>
                  <span className="hidden sm:inline">• RWP/ISB</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm">
                {/* Output History */}
                <div className="space-y-2 min-h-[300px] max-h-[400px] overflow-y-auto mb-4 scrollbar-none">
                  {terminalHistory.map((item, idx) => (
                    <div key={idx} className="leading-relaxed">
                      {item.type === "system" && (
                        <span className="text-[var(--clr-ink-muted)] opacity-75">{item.text}</span>
                      )}
                      {item.type === "user" && (
                        <div>
                          <span className="text-[var(--clr-accent)] font-bold">amoid@dispatch:~$ </span>
                          <span className="text-[var(--clr-ink)] font-bold">{item.text}</span>
                        </div>
                      )}
                      {item.type === "output" && (
                        <pre className="text-[var(--success)] whitespace-pre-wrap font-mono mt-0.5 text-xs font-semibold">
                          {item.text}
                        </pre>
                      )}
                      {item.type === "error" && (
                        <div className="text-rose-500 mt-0.5 text-xs font-bold">{item.text}</div>
                      )}
                    </div>
                  ))}
                  <div ref={terminalEndRef} />
                </div>

                {/* Command Quick-Click Pills */}
                <div className="pt-3 border-t border-[var(--clr-border)] mb-4 flex flex-wrap gap-2 items-center">
                  <span className="text-[10px] text-[var(--clr-ink-muted)] font-bold uppercase tracking-wider mr-1">
                    Quick Exec:
                  </span>
                  {["help", "email", "phone", "github", "linkedin", "status", "clear"].map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => executeCommand(cmd)}
                      className="px-2.5 py-1 rounded-[6px] text-[10px] font-bold bg-[var(--clr-surface-sub)] hover:bg-[var(--clr-accent)] hover:text-[var(--brand-charcoal)] border border-[var(--clr-border)] transition-colors"
                    >
                      {cmd}
                    </button>
                  ))}
                </div>

                {/* Terminal Input Line */}
                <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 pt-1 bg-[var(--clr-surface-sub)] p-2 rounded-lg border border-[var(--clr-border)]">
                  <span className="text-[var(--clr-accent)] font-bold text-xs pl-1 sm:pl-2 shrink-0">
                    <span className="hidden sm:inline">amoid@dispatch:</span>$
                  </span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="type command..."
                    className="flex-1 bg-transparent text-[var(--clr-ink)] font-bold outline-none border-none font-mono text-xs placeholder:text-[var(--clr-ink-muted)]/50 placeholder:font-normal min-w-0"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="px-3 sm:px-4 py-1.5 rounded-[6px] bg-[var(--clr-ink)] text-[var(--clr-surface)] font-mono text-xs font-bold hover:scale-105 transition-transform shrink-0"
                  >
                    RETURN
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}