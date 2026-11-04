"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [activeMode, setActiveMode] = useState("terminal"); // "terminal" or "chat"
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [localTime, setLocalTime] = useState("");

  const email = "moidsekhry@gmail.com";
  const phone = "+92 347 2539535";
  const rawPhone = "03472539535";

  // --- Live Local Time Clock for Rawalpindi / Islamabad (Asia/Karachi) ---
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
        setLocalTime("18:45 PKT");
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

  // --- Terminal State & Engine ---
  const [terminalHistory, setTerminalHistory] = useState([
    { type: "system", text: "SYSTEM DISPATCH CONSOLE v2.4 — ABDUL MOID" },
    { type: "system", text: "Type 'help' or click any command below to initialize connection." },
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
        text: "Available commands:\n  • email      - Send or copy direct email address\n  • phone      - View direct mobile & WhatsApp line\n  • github     - Open GitHub profile (@abdulmoiddd)\n  • linkedin   - Open LinkedIn profile (@abdulmoiddd)\n  • status     - Check live availability & local telemetry\n  • message    - Launch interactive message composer\n  • clear      - Clear terminal screen",
      });
    } else if (lower === "email") {
      handleCopyEmail();
      newHistory.push({
        type: "output",
        text: `✓ Copied email (${email}) to clipboard! Opening mail client...`,
      });
      window.open(`mailto:${email}?subject=Project%20Inquiry%20from%20Portfolio`, "_blank");
    } else if (lower === "phone") {
      handleCopyPhone();
      newHistory.push({
        type: "output",
        text: `✓ Copied phone (${phone}) to clipboard! Available for direct WhatsApp or calls.`,
      });
    } else if (lower === "github") {
      newHistory.push({ type: "output", text: "Redirecting to https://github.com/abdulmoiddd..." });
      window.open("https://github.com/abdulmoiddd", "_blank");
    } else if (lower === "linkedin") {
      newHistory.push({ type: "output", text: "Redirecting to https://www.linkedin.com/in/abdulmoiddd..." });
      window.open("https://www.linkedin.com/in/abdulmoiddd", "_blank");
    } else if (lower === "status") {
      newHistory.push({
        type: "output",
        text: `[STATUS]: AVAILABLE FOR FULL-TIME ROLES & AI CONTRACTS\n[LOCATION]: Rawalpindi / Islamabad, PK (Local time: ${localTime || "Active PKT"})\n[SPECIALTY]: Multi-Tenant AI Architectures, WebRTC Voice & Full-Stack Systems`,
      });
    } else if (lower.startsWith("message") || lower.startsWith("msg")) {
      const msgContent = cleanCmd.replace(/^(message|msg)\s*/i, "").trim();
      const subject = encodeURIComponent("Project Inquiry via Portfolio Terminal");
      const body = encodeURIComponent(msgContent || "Hi Abdul, I'd like to discuss a project...");
      newHistory.push({
        type: "output",
        text: `✓ Prepared message draft! Redirecting to email dispatcher...`,
      });
      window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");
    } else if (lower === "clear") {
      setTerminalHistory([]);
      setTerminalInput("");
      return;
    } else {
      newHistory.push({
        type: "error",
        text: `Command '${cleanCmd}' not recognized. Type 'help' to inspect command directory.`,
      });
    }

    setTerminalHistory(newHistory);
    setTerminalInput("");
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    executeCommand(terminalInput);
  };

  // --- Interactive Chat Bubble State ---
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "abdul",
      text: "Hey! I'm Abdul Moid. Full-Stack Software Engineer & AI Technical Lead. How can I help you bring your vision to life?",
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

    // Simulated responsive AI dispatch
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "abdul",
          text: `Got your note: "${text}". Let's jump into the details over email or a quick consultation call!`,
          time: "Just now",
        },
      ]);

      setTimeout(() => {
        const subject = encodeURIComponent("Consultation Request - Abdul Moid Portfolio");
        const body = encodeURIComponent(`Hi Abdul,\n\n${text}\n\nLooking forward to speaking with you!`);
        window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");
      }, 900);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-28 md:py-36 bg-[var(--background)] overflow-hidden border-t border-[var(--border-color)]/60"
    >
      {/* Background Radiant Yellow Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[65vw] max-w-[800px] max-h-[800px] bg-gradient-to-tr from-amber-400/12 via-yellow-400/8 to-transparent blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] mb-4 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary-vibrant)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--primary)]"></span>
            </span>
            <span className="text-xs font-mono tracking-widest text-[var(--foreground-muted)] uppercase font-semibold">
              REAL-TIME DISPATCH // INITIALIZE CONNECTION
            </span>
          </div>

          <h3 className="text-4xl md:text-6xl font-black text-[var(--foreground)] tracking-tight mb-4">
            Let&apos;s Engineer the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 dark:from-yellow-300 dark:via-amber-400 dark:to-yellow-500">
              Future Together.
            </span>
          </h3>

          <p className="text-base sm:text-lg text-[var(--foreground-muted)] font-light leading-relaxed">
            Choose your preferred interface below—enter commands directly in the
            interactive terminal or chat with the dispatch assistant.
          </p>
        </motion.div>

        {/* Mode Switcher Tabs */}
        <div className="flex justify-center mb-8">
          <div className="p-1 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] flex items-center gap-1 shadow-sm">
            <button
              onClick={() => setActiveMode("terminal")}
              className={`interactive px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 ${
                activeMode === "terminal"
                  ? "bg-[var(--foreground)] text-[var(--background)] shadow-md"
                  : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
              }`}
            >
              <span>&gt;_ DEVELOPER TERMINAL</span>
            </button>
            <button
              onClick={() => setActiveMode("chat")}
              className={`interactive px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 ${
                activeMode === "chat"
                  ? "bg-[var(--foreground)] text-[var(--background)] shadow-md"
                  : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
              }`}
            >
              <span>💬 CHAT BUBBLE ASSISTANT</span>
            </button>
          </div>
        </div>

        {/* Main Interface Window */}
        <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-2xl shadow-2xl overflow-hidden mb-12">
          {/* Window Titlebar */}
          <div className="px-6 py-4 bg-[var(--background-subtle)] border-b border-[var(--border-color)]/70 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-[var(--foreground-muted)] ml-2">
                {activeMode === "terminal" ? "bash — abdulmoid@dispatch: ~" : "dispatch-agent — active"}
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--foreground-muted)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{localTime || "18:45 PKT"}</span>
              <span className="hidden sm:inline">• RAWALPINDI / ISLAMABAD</span>
            </div>
          </div>

          {/* VIEW 1: DEVELOPER TERMINAL */}
          {activeMode === "terminal" && (
            <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm">
              {/* Output History */}
              <div className="space-y-3 min-h-[260px] max-h-[380px] overflow-y-auto mb-4 scrollbar-none">
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="leading-relaxed">
                    {item.type === "system" && (
                      <span className="text-[var(--foreground-muted)] opacity-75">{item.text}</span>
                    )}
                    {item.type === "user" && (
                      <div>
                        <span className="text-amber-500 dark:text-yellow-400 font-bold">amoid@dispatch:~$ </span>
                        <span className="text-[var(--foreground)]">{item.text}</span>
                      </div>
                    )}
                    {item.type === "output" && (
                      <pre className="text-emerald-600 dark:text-emerald-400 whitespace-pre-wrap font-mono mt-1">
                        {item.text}
                      </pre>
                    )}
                    {item.type === "error" && (
                      <div className="text-rose-500 mt-1">{item.text}</div>
                    )}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              {/* Command Quick-Click Pills */}
              <div className="pt-4 border-t border-[var(--border-color)]/60 mb-4 flex flex-wrap gap-2 items-center">
                <span className="text-[10px] text-[var(--foreground-muted)] uppercase tracking-wider mr-1">
                  QUICK RUN:
                </span>
                {["help", "email", "phone", "github", "linkedin", "status", "clear"].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => executeCommand(cmd)}
                    className="interactive px-2.5 py-1 rounded-md text-[11px] bg-[var(--background-subtle)] hover:bg-[var(--primary)] hover:text-white border border-[var(--border-color)] transition-colors"
                  >
                    {cmd}
                  </button>
                ))}
              </div>

              {/* Terminal Input Line */}
              <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 pt-2">
                <span className="text-amber-500 dark:text-yellow-400 font-bold">amoid@dispatch:~$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type 'email', 'status', 'help' or any custom message..."
                  className="flex-1 bg-transparent text-[var(--foreground)] outline-none border-none font-mono text-xs sm:text-sm placeholder:text-[var(--foreground-muted)]/50"
                  autoFocus
                />
                <button
                  type="submit"
                  className="interactive px-4 py-1.5 rounded-lg bg-[var(--primary)] text-white text-xs font-bold hover:opacity-90"
                >
                  EXECUTE
                </button>
              </form>
            </div>
          )}

          {/* VIEW 2: INTERACTIVE CHAT BUBBLE ASSISTANT */}
          {activeMode === "chat" && (
            <div className="p-6 sm:p-8">
              {/* Chat Thread */}
              <div className="space-y-4 min-h-[260px] max-h-[360px] overflow-y-auto mb-6 scrollbar-none">
                {chatMessages.map((msg, i) => {
                  const isAbdul = msg.sender === "abdul";
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${isAbdul ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`max-w-[85%] sm:max-w-[70%] p-4 rounded-2xl ${
                          isAbdul
                            ? "bg-[var(--background-subtle)] text-[var(--foreground)] rounded-tl-sm border border-[var(--border-color)]"
                            : "bg-gradient-to-r from-amber-500 to-yellow-400 text-white dark:text-zinc-950 rounded-tr-sm shadow-md"
                        }`}
                      >
                        <div className="text-xs font-semibold mb-1 opacity-75 font-mono">
                          {isAbdul ? "Abdul Moid" : "You"}
                        </div>
                        <p className="text-sm leading-relaxed">{msg.text}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Quick Prompt Starters */}
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "I want to build an AI SaaS with WebRTC voice",
                  "Let's discuss a full-stack engineering role",
                  "Need offline-first React Native mobile app",
                ].map((promptText) => (
                  <button
                    key={promptText}
                    onClick={() => sendChatMessage(promptText)}
                    className="interactive px-3 py-1.5 rounded-full text-xs font-mono bg-[var(--background-subtle)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] border border-[var(--border-color)] hover:border-[var(--primary-vibrant)] transition-colors text-left"
                  >
                    "{promptText}"
                  </button>
                ))}
              </div>

              {/* Chat Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendChatMessage();
                }}
                className="flex items-center gap-3 pt-2"
              >
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type your project overview or message here..."
                  className="flex-1 px-4 py-3 rounded-xl bg-[var(--background-subtle)] border border-[var(--border-color)] text-[var(--foreground)] text-sm outline-none focus:border-[var(--primary)] transition-colors"
                />
                <button
                  type="submit"
                  className="interactive px-6 py-3 rounded-xl bg-[var(--primary)] text-white font-bold text-xs font-mono tracking-wider hover:opacity-90 transition-opacity"
                >
                  SEND
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Direct Coordinates Cards (Email & Phone Quick Copy) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-[var(--foreground-muted)] uppercase tracking-wider block mb-1">
                DIRECT INBOX
              </span>
              <a
                href={`mailto:${email}`}
                className="text-base sm:text-lg font-bold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
              >
                {email}
              </a>
            </div>
            <button
              onClick={handleCopyEmail}
              className="interactive px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-[var(--background-subtle)] border border-[var(--border-color)] hover:border-[var(--primary)] transition-colors"
            >
              {copiedEmail ? "COPIED! ✓" : "COPY"}
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-[var(--foreground-muted)] uppercase tracking-wider block mb-1">
                MOBILE & WHATSAPP
              </span>
              <a
                href={`tel:${rawPhone}`}
                className="text-base sm:text-lg font-bold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
              >
                {phone}
              </a>
            </div>
            <button
              onClick={handleCopyPhone}
              className="interactive px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-[var(--background-subtle)] border border-[var(--border-color)] hover:border-[var(--primary)] transition-colors"
            >
              {copiedPhone ? "COPIED! ✓" : "COPY"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
