"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Contact() {
  const [activeMode, setActiveMode] = useState("terminal"); // "terminal" or "chat"
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [localTime, setLocalTime] = useState("");

  const email = "moidsekhry@gmail.com";
  const phone = "+92 347 2539535";
  const rawPhone = "03472539535";

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

  // Terminal State & Engine
  const [terminalHistory, setTerminalHistory] = useState([
    { type: "system", text: "SYSTEM DISPATCH CONSOLE v2.4 — ABDUL MOID [READY]" },
    { type: "system", text: "Type 'help' or click quick commands below to initialize connection." },
  ]);
  const [terminalInput, setTerminalInput] = useState("");
  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalHistory]);

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

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    executeCommand(terminalInput);
  };

  // Chat Bubble State
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "abdul",
      text: "Hello! I am Abdul Moid, Full-Stack Engineer & AI Technical Lead. How can I help you build your system?",
      time: "Just now",
    },
  ]);
  const [chatInput, setChatInput] = useState("");

  const sendChatMessage = (textToSend) => {
    const text = textToSend || chatInput;
    if (!text.trim()) return;

    const userMsg = { sender: "user", text, time: "Just now" };
    setChatMessages((prev) => [...prev, userMsg]);
    setChatInput("");

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "abdul",
          text: `Received note: "${text}". Opening mail dispatcher for direct conversation!`,
          time: "Just now",
        },
      ]);

      setTimeout(() => {
        const subject = encodeURIComponent("Project Consultation - Abdul Moid Portfolio");
        const body = encodeURIComponent(`Hi Abdul,\n\n${text}\n\nLooking forward to speaking with you!`);
        window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");
      }, 700);
    }, 400);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-16 md:py-24 border-t border-[var(--clr-border)]"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Section Header: Compact Bento HUD Bar */}
        <div className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--clr-border)] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[var(--clr-surface-sub)] border border-[var(--clr-border)] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--clr-accent)]" />
              <span className="font-mono text-[11px] font-semibold tracking-wider text-[var(--clr-ink-muted)] uppercase">
                SPEC // 05 • DISPATCH INTERFACE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--clr-ink)] tracking-tight">
              Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">Connection</span>
            </h2>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[var(--clr-surface-sub)] border border-[var(--clr-border)]">
            <button
              onClick={() => setActiveMode("terminal")}
              className={`px-3 py-1.5 rounded font-mono text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                activeMode === "terminal"
                  ? "bg-[var(--clr-surface-card)] text-[var(--clr-ink)] shadow-sm border border-[var(--clr-border)]"
                  : "text-[var(--clr-ink-muted)] hover:text-[var(--clr-ink)]"
              }`}
            >
              <span>&gt;_ CLI TERMINAL</span>
            </button>
            <button
              onClick={() => setActiveMode("chat")}
              className={`px-3 py-1.5 rounded font-mono text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                activeMode === "chat"
                  ? "bg-[var(--clr-surface-card)] text-[var(--clr-ink)] shadow-sm border border-[var(--clr-border)]"
                  : "text-[var(--clr-ink-muted)] hover:text-[var(--clr-ink)]"
              }`}
            >
              <span>DISPATCH CHAT</span>
            </button>
          </div>
        </div>

        {/* Main Interface Window */}
        <div className="rounded-2xl border border-[var(--clr-border)] bg-[var(--clr-surface-card)] shadow-sm overflow-hidden mb-5">
          {/* Window Titlebar */}
          <div className="px-4 py-2.5 bg-[var(--clr-surface-sub)] border-b border-[var(--clr-border)] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] font-mono text-[var(--clr-ink-muted)] ml-2">
                {activeMode === "terminal" ? "bash — amoid@dispatch: ~" : "dispatch-agent — active"}
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[10px] text-[var(--clr-ink-muted)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--clr-accent)]" />
              <span>{localTime || "Active PKT"}</span>
              <span className="hidden sm:inline">• RAWALPINDI / ISLAMABAD</span>
            </div>
          </div>

          {/* VIEW 1: DEVELOPER TERMINAL */}
          {activeMode === "terminal" && (
            <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm">
              {/* Output History */}
              <div className="space-y-2 min-h-[200px] max-h-[300px] overflow-y-auto mb-4 scrollbar-none">
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="leading-relaxed">
                    {item.type === "system" && (
                      <span className="text-[var(--clr-ink-muted)] opacity-75">{item.text}</span>
                    )}
                    {item.type === "user" && (
                      <div>
                        <span className="text-[var(--clr-accent)] font-bold">amoid@dispatch:~$ </span>
                        <span className="text-[var(--clr-ink)]">{item.text}</span>
                      </div>
                    )}
                    {item.type === "output" && (
                      <pre className="text-emerald-500 whitespace-pre-wrap font-mono mt-0.5 text-xs">
                        {item.text}
                      </pre>
                    )}
                    {item.type === "error" && (
                      <div className="text-rose-400 mt-0.5 text-xs">{item.text}</div>
                    )}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              {/* Command Quick-Click Pills */}
              <div className="pt-3 border-t border-[var(--clr-border)] mb-3 flex flex-wrap gap-1.5 items-center">
                <span className="text-[10px] text-[var(--clr-ink-muted)] uppercase tracking-wider mr-1">
                  QUICK RUN:
                </span>
                {["help", "email", "phone", "github", "linkedin", "status", "clear"].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => executeCommand(cmd)}
                    className="interactive px-2 py-0.5 rounded text-[10px] bg-[var(--clr-surface-sub)] hover:bg-[var(--clr-accent)] hover:text-[var(--brand-charcoal)] border border-[var(--clr-border)] transition-colors"
                  >
                    {cmd}
                  </button>
                ))}
              </div>

              {/* Terminal Input Line */}
              <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 pt-1">
                <span className="text-[var(--clr-accent)] font-bold text-xs">amoid@dispatch:~$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type 'email', 'status', 'help' or any custom message..."
                  className="flex-1 bg-transparent text-[var(--clr-ink)] outline-none border-none font-mono text-xs placeholder:text-[var(--clr-ink-muted)]/50"
                  autoFocus
                />
                <button
                  type="submit"
                  className="interactive px-3 py-1 rounded bg-[var(--clr-accent)] text-[var(--brand-charcoal)] font-mono text-xs font-bold hover:opacity-90"
                >
                  EXECUTE
                </button>
              </form>
            </div>
          )}

          {/* VIEW 2: INTERACTIVE CHAT BUBBLE ASSISTANT */}
          {activeMode === "chat" && (
            <div className="p-4 sm:p-6">
              {/* Chat Thread */}
              <div className="space-y-3 min-h-[200px] max-h-[300px] overflow-y-auto mb-4 scrollbar-none">
                {chatMessages.map((msg, i) => {
                  const isAbdul = msg.sender === "abdul";
                  return (
                    <div key={i} className={`flex ${isAbdul ? "justify-start" : "justify-end"}`}>
                      <div
                        className={`max-w-[85%] sm:max-w-[70%] p-3 rounded-xl ${
                          isAbdul
                            ? "bg-[var(--clr-surface-sub)] text-[var(--clr-ink)] rounded-tl-none border border-[var(--clr-border)]"
                            : "bg-[var(--clr-accent)] text-[var(--brand-charcoal)] rounded-tr-none shadow-sm font-semibold"
                        }`}
                      >
                        <div className="text-[10px] font-semibold mb-0.5 opacity-75 font-mono">
                          {isAbdul ? "Abdul Moid" : "You"}
                        </div>
                        <p className="text-xs leading-relaxed">{msg.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Prompt Starters */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {[
                  "I want to build an AI SaaS with WebRTC voice",
                  "Let's discuss a full-stack engineering role",
                  "Need offline-first React Native mobile app",
                ].map((promptText) => (
                  <button
                    key={promptText}
                    onClick={() => sendChatMessage(promptText)}
                    className="interactive px-2.5 py-1 rounded text-[11px] font-mono bg-[var(--clr-surface-sub)] text-[var(--clr-ink-muted)] hover:text-[var(--clr-ink)] border border-[var(--clr-border)] hover:border-[var(--clr-accent)] transition-colors text-left"
                  >
                    &ldquo;{promptText}&rdquo;
                  </button>
                ))}
              </div>

              {/* Chat Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendChatMessage();
                }}
                className="flex items-center gap-2 pt-1"
              >
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type your project overview or message here..."
                  className="flex-1 px-3 py-2 rounded-lg bg-[var(--clr-surface-sub)] border border-[var(--clr-border)] text-[var(--clr-ink)] text-xs outline-none focus:border-[var(--clr-accent)] transition-colors"
                />
                <button
                  type="submit"
                  className="interactive px-4 py-2 rounded-lg bg-[var(--clr-accent)] text-[var(--brand-charcoal)] font-bold text-xs font-mono tracking-wider hover:opacity-90 transition-opacity"
                >
                  SEND
                </button>
              </form>
            </div>
          )}
        </div>

        {/* High-Density 4-Cell Direct Coordinates Bento Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Inbox */}
          <div className="p-3.5 rounded-xl bg-[var(--clr-surface-card)] border border-[var(--clr-border)] flex items-center justify-between">
            <div className="min-w-0 pr-2">
              <span className="text-[9px] font-mono text-[var(--clr-ink-muted)] uppercase tracking-wider block">
                DIRECT INBOX
              </span>
              <a
                href={`mailto:${email}`}
                className="text-xs font-bold text-[var(--clr-ink)] hover:text-[var(--clr-accent)] transition-colors truncate block"
              >
                {email}
              </a>
            </div>
            <button
              onClick={handleCopyEmail}
              className="interactive px-2.5 py-1 rounded text-[10px] font-mono font-semibold bg-[var(--clr-surface-sub)] border border-[var(--clr-border)] hover:border-[var(--clr-accent)] transition-colors shrink-0"
            >
              {copiedEmail ? "COPIED!" : "COPY"}
            </button>
          </div>

          {/* Mobile */}
          <div className="p-3.5 rounded-xl bg-[var(--clr-surface-card)] border border-[var(--clr-border)] flex items-center justify-between">
            <div className="min-w-0 pr-2">
              <span className="text-[9px] font-mono text-[var(--clr-ink-muted)] uppercase tracking-wider block">
                MOBILE &amp; WHATSAPP
              </span>
              <a
                href={`tel:${rawPhone}`}
                className="text-xs font-bold text-[var(--clr-ink)] hover:text-[var(--clr-accent)] transition-colors truncate block"
              >
                {phone}
              </a>
            </div>
            <button
              onClick={handleCopyPhone}
              className="interactive px-2.5 py-1 rounded text-[10px] font-mono font-semibold bg-[var(--clr-surface-sub)] border border-[var(--clr-border)] hover:border-[var(--clr-accent)] transition-colors shrink-0"
            >
              {copiedPhone ? "COPIED!" : "COPY"}
            </button>
          </div>

          {/* GitHub */}
          <div className="p-3.5 rounded-xl bg-[var(--clr-surface-card)] border border-[var(--clr-border)] flex items-center justify-between">
            <div>
              <span className="text-[9px] font-mono text-[var(--clr-ink-muted)] uppercase tracking-wider block">
                GITHUB REPOSITORIES
              </span>
              <span className="text-xs font-bold text-[var(--clr-ink)]">@abdulmoiddd</span>
            </div>
            <Link
              href="https://github.com/abdulmoiddd"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded text-[10px] font-mono font-semibold bg-[var(--clr-surface-sub)] border border-[var(--clr-border)] hover:border-[var(--clr-accent)] transition-colors shrink-0 text-[var(--clr-ink)] hover:text-[var(--clr-accent)]"
            >
              OPEN →
            </Link>
          </div>

          {/* LinkedIn */}
          <div className="p-3.5 rounded-xl bg-[var(--clr-surface-card)] border border-[var(--clr-border)] flex items-center justify-between">
            <div>
              <span className="text-[9px] font-mono text-[var(--clr-ink-muted)] uppercase tracking-wider block">
                LINKEDIN NETWORK
              </span>
              <span className="text-xs font-bold text-[var(--clr-ink)]">abdulmoiddd</span>
            </div>
            <Link
              href="https://www.linkedin.com/in/abdulmoiddd"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded text-[10px] font-mono font-semibold bg-[var(--clr-surface-sub)] border border-[var(--clr-border)] hover:border-[var(--clr-accent)] transition-colors shrink-0 text-[var(--clr-ink)] hover:text-[var(--clr-accent)]"
            >
              OPEN →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
