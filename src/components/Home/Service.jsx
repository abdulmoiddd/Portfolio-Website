"use client";

const SERVICES_DATA = [
  {
    id: "01",
    tag: "AI & SPEECH",
    title: "Real-Time AI & Voice Streaming",
    shortDesc:
      "Engineering low-latency, conversational AI agents utilizing OpenAI Realtime WebRTC, Whisper transcription, and Gemini multimodal models.",
    features: [
      "OpenAI Realtime WebRTC bi-directional audio",
      "Whisper low-latency audio transcription",
      "Gemini multimodal LLM integration",
      "gpt-4o-mini Vision automated diagnostics",
    ],
    status: "LATENCY <180ms",
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    liveGraphic: "waveform",
  },
  {
    id: "02",
    tag: "SAAS & FULL-STACK",
    title: "Multi-Tenant Web & SaaS Engineering",
    shortDesc:
      "Architecting enterprise-grade web applications from scalable Next.js and React frontends to robust Node.js APIs and isolated tenant schemas.",
    features: [
      "Next.js App Router, SSR & Server Actions",
      "Multi-tenant isolation & role-based security",
      "Firebase RTDB & SQL transactional modeling",
      "Native OAuth2 & dynamic SMTP engines",
    ],
    status: "99.9% UPTIME SLA",
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    liveGraphic: "nodes",
  },
  {
    id: "03",
    tag: "MOBILE APPS",
    title: "Cross-Platform Mobile Architecture",
    shortDesc:
      "Developing seamless iOS & Android applications using React Native and Expo with offline-first local state caching and real-time cloud sync.",
    features: [
      "React Native & Expo EAS deployment pipelines",
      "Offline-first SQLite & Firebase synchronization",
      "Hardware barcode & serial number verification",
      "Native 60 FPS gesture-driven navigation",
    ],
    status: "OFFLINE READY",
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    liveGraphic: "mobile",
  },
  {
    id: "04",
    tag: "AUTOMATION & TELEMETRY",
    title: "Workflow Automation & Telemetry",
    shortDesc:
      "Eliminating manual friction with automated booking workflows, custom webhook ingestion, Make.com scenarios, and real-time health telemetry.",
    features: [
      "Make.com & Zapier complex workflow scenarios",
      "Custom webhook ingestion & automated triggers",
      "Google Calendar 24/7 automated booking sync",
      "Health tracing, telemetry & anomaly alerts",
    ],
    status: "CONTINUOUS SYNC",
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    liveGraphic: "pipeline",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full py-16 md:py-24 border-t border-[var(--clr-border)]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Section Header: Compact Bento HUD Bar */}
        <div className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--clr-border)] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[var(--clr-surface-sub)] border border-[var(--clr-border)] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--clr-accent)]" />
              <span className="font-mono text-[11px] font-semibold tracking-wider text-[var(--clr-ink-muted)] uppercase">
                SPEC // 02 • CORE CAPABILITIES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--clr-ink)] tracking-tight">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">Without Limits</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[var(--clr-ink-muted)] max-w-md md:text-right leading-relaxed">
            From low-latency AI voice streaming to multi-tenant cloud platforms and cross-platform mobile apps, tailored for enterprise resilience.
          </p>
        </div>

        {/* 2x2 High-Density Capabilities Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="p-5 sm:p-6 rounded-2xl bg-[var(--clr-surface-card)] border border-[var(--clr-border)] hover:border-[var(--clr-accent)] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Module Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--clr-border)]">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest text-[var(--clr-ink-muted)] uppercase">
                      [ MOD // {service.id} ]
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--clr-surface-sub)] text-[var(--clr-accent)] border border-[var(--clr-border)] uppercase">
                      {service.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[var(--clr-surface-sub)] border border-[var(--clr-border)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--clr-accent)]" />
                    <span className="text-[9px] font-mono tracking-wider font-semibold uppercase text-[var(--clr-ink)]">
                      {service.status}
                    </span>
                  </div>
                </div>

                {/* Icon & Live Visualizer */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border bg-[var(--clr-surface-sub)] text-[var(--clr-accent)] border-[var(--clr-border)]">
                    {service.icon}
                  </div>

                  {service.liveGraphic === "waveform" && (
                    <div className="flex items-center gap-1 h-6 px-2.5 rounded-lg bg-[var(--clr-surface-sub)] border border-[var(--clr-border)]">
                      {[30, 70, 45, 90, 60, 80, 40].map((height, i) => (
                        <span
                          key={i}
                          className="w-1 rounded-full bg-[var(--clr-accent)]"
                          style={{ height: `${height * 0.18}px` }}
                        />
                      ))}
                      <span className="text-[9px] font-mono text-[var(--clr-ink-muted)] ml-1 font-semibold">
                        AUDIO
                      </span>
                    </div>
                  )}

                  {service.liveGraphic === "nodes" && (
                    <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[var(--clr-surface-sub)] border border-[var(--clr-border)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--clr-accent)]" />
                      <div className="w-4 h-[1px] bg-[var(--clr-border)]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="text-[9px] font-mono text-[var(--clr-ink-muted)] font-semibold">
                        ISOLATED
                      </span>
                    </div>
                  )}

                  {service.liveGraphic === "mobile" && (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--clr-surface-sub)] border border-[var(--clr-border)]">
                      <span className="text-[10px] font-mono text-sky-400 font-semibold">
                        iOS / ANDROID
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    </div>
                  )}

                  {service.liveGraphic === "pipeline" && (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--clr-surface-sub)] border border-[var(--clr-border)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span className="text-[9px] font-mono text-[var(--clr-ink-muted)] font-semibold">
                        HOOK → CRON
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-black text-[var(--clr-ink)] tracking-tight mb-2 group-hover:text-[var(--clr-accent)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--clr-ink-muted)] leading-relaxed mb-5">
                  {service.shortDesc}
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="pt-4 border-t border-[var(--clr-border)] space-y-2">
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-[var(--clr-ink)] font-mono">
                    <span className="w-1 h-1 rounded-full bg-[var(--clr-accent)]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
