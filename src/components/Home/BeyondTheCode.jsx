"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const IDENTITY_MODULES = [
  {
    id: "calligraphy",
    index: "01",
    title: "Marker-Style Calligraphy",
    discipline: "Typographic Physics & Stroke Alignment",
    badge: "PRECISION & KERNING",
    accent: "#FACC15",
    description:
      "Before writing code, I mastered broad-nib chisel calligraphy. The medium has no rollback buffer: every stroke demands deliberate pressure modulation, angle consistency, and spatial kerning.",
    engineeringParallel:
      "Directly translates to frontend design tokens, optical layout balance, and obsession with sub-pixel rendering accuracy.",
    meta: [
      { label: "Medium", value: "Chisel & Broad Nib" },
      { label: "Principle", value: "Permanent Vector Trajectory" },
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
    visualDemo: (
      <div className="relative w-full h-24 rounded-lg bg-[var(--background-subtle)] border border-[var(--border-color)] p-3 flex items-center justify-between overflow-hidden">
        <div className="text-3xl font-black italic tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 font-serif select-none">
          Abdul Moid
        </div>
        <div className="text-right">
          <span className="font-mono text-[9px] text-[var(--primary)] font-bold uppercase block">
            CHISEL // 45°
          </span>
          <span className="font-mono text-[9px] text-[var(--foreground-muted)] block">
            OPTICAL KERNING
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "crochet",
    index: "02",
    title: "Crocheting Custom Keychains",
    discipline: "Physical Algorithmic Recursion",
    badge: "MODULAR LOOPS & STATE",
    accent: "#F59E0B",
    description:
      "Crochet is physical state management: each row is mathematically dependent on the stitch count, tension, and loop parity of the preceding row. A dropped stitch corrupts downstream geometry.",
    engineeringParallel:
      "Reinforces clean modular decomposition, deterministic recursion, and deep patience for tracking edge cases in asynchronous state machines.",
    meta: [
      { label: "Output", value: "Bespoke Tactile Keychains" },
      { label: "Principle", value: "Zero-Drop State Chain" },
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    visualDemo: (
      <div className="relative w-full h-24 rounded-lg bg-[var(--background-subtle)] border border-[var(--border-color)] p-3 flex items-center justify-between overflow-hidden">
        {/* Crisp Static Interlocking Loops (NO pulsing/blinking) */}
        <div className="flex items-center gap-1.5">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="w-7 h-7 rounded-full border-2 border-amber-400/80 flex items-center justify-center bg-[var(--card-bg)]"
            >
              <div className="w-2 h-2 rounded-full bg-amber-400" />
            </div>
          ))}
        </div>
        <div className="text-right">
          <span className="font-mono text-[9px] text-[var(--primary)] font-bold uppercase block">
            LOOP N+1
          </span>
          <span className="font-mono text-[9px] text-[var(--foreground-muted)] block">
            DETERMINISTIC
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "touring",
    index: "03",
    title: "Mountain Motorcycle Touring",
    discipline: "High-Altitude Exploration & Telemetry",
    badge: "ZERO ROOM FOR ERROR",
    accent: "#EAB308",
    description:
      "Riding alpine switchbacks and gravel passes across high-altitude ranges requires total presence of mind. On extreme corners, fixating on the ravine ensures a spill; survival mandates looking strictly where you intend to go.",
    engineeringParallel:
      "Direct parallel to operating mission-critical production systems: absolute focus under pressure, rapid telemetry assessment, and decisive risk mitigation.",
    meta: [
      { label: "Terrain", value: "Alpine Passes & Karakoram" },
      { label: "Altitude", value: "4,200m+ Above Sea Level" },
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    visualDemo: (
      <div className="relative w-full h-24 rounded-lg bg-[var(--background-subtle)] border border-[var(--border-color)] p-3 flex items-center justify-between overflow-hidden">
        <svg className="w-40 h-16 text-amber-500/40" viewBox="0 0 160 50" fill="none" aria-hidden="true">
          <path d="M0 45 Q 25 10, 50 35 T 100 12 T 140 28 T 160 38" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M0 48 Q 30 20, 70 38 T 130 20 T 160 32" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" fill="none" />
        </svg>
        <div className="text-right">
          <span className="font-mono text-[9px] text-[var(--primary)] font-bold uppercase block">
            ELEVATION // 4.2KM
          </span>
          <span className="font-mono text-[9px] text-[var(--foreground-muted)] block">
            CALM UNDER LOAD
          </span>
        </div>
      </div>
    ),
  },
];

export default function BeyondTheCode() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth * 0.8 : clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="beyond-code"
      className="relative w-full py-16 md:py-24 bg-[var(--background)] overflow-hidden border-t border-[var(--border-color)]"
    >
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 75% 25%, rgba(250, 204, 21, 0.08) 0%, transparent 45%), radial-gradient(circle at 25% 75%, rgba(217, 119, 6, 0.06) 0%, transparent 45%)",
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
                SPEC // 04 • PERSONAL IDENTITY BOARD
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--foreground)] tracking-tight">
              Beyond The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 dark:from-yellow-300 dark:via-amber-400 dark:to-yellow-500">Codebase</span>
            </h2>
          </div>

          {/* Navigation Arrows for Horizontal Track */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[var(--foreground-muted)] hidden sm:inline">
              [HORIZONTAL MASONRY BOARD]
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className={`w-8 h-8 rounded-lg border border-[var(--border-color)] flex items-center justify-center transition-colors font-mono text-xs ${
                  canScrollLeft
                    ? "bg-[var(--card-bg)] text-[var(--foreground)] hover:border-[var(--primary)]"
                    : "opacity-35 cursor-not-allowed bg-[var(--background-subtle)] text-[var(--foreground-muted)]"
                }`}
              >
                ←
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className={`w-8 h-8 rounded-lg border border-[var(--border-color)] flex items-center justify-center transition-colors font-mono text-xs ${
                  canScrollRight
                    ? "bg-[var(--card-bg)] text-[var(--foreground)] hover:border-[var(--primary)]"
                    : "opacity-35 cursor-not-allowed bg-[var(--background-subtle)] text-[var(--foreground-muted)]"
                }`}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Tightly Packed Horizontally Scrolling Track */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-4 overflow-x-auto pb-4 pt-1 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {IDENTITY_MODULES.map((item) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[90vw] sm:w-[380px] lg:w-[400px] p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--primary)] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon + Index + Title */}
                <div className="flex items-start justify-between mb-3.5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border"
                      style={{
                        backgroundColor: `${item.accent}14`,
                        color: item.accent,
                        borderColor: `${item.accent}30`,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[var(--foreground)] tracking-tight group-hover:text-[var(--primary)] transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <span className="font-mono text-[10px] text-[var(--foreground-muted)] uppercase tracking-wider block">
                        {item.discipline}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] text-[var(--foreground-muted)] font-bold">
                    #{item.index}
                  </span>
                </div>

                {/* Badge */}
                <div className="mb-3">
                  <span className="inline-block text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[var(--background-subtle)] text-[var(--primary)] border border-[var(--border-color)]">
                    {item.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Visual Demonstration Block */}
                <div className="mb-4">{item.visualDemo}</div>

                {/* Engineering Correlation */}
                <div className="p-3 rounded-lg bg-[var(--background-subtle)] border border-[var(--border-color)]">
                  <span className="font-mono text-[9px] uppercase tracking-wider font-bold text-[var(--primary)] block mb-1">
                    ENGINEERING CONNECTION
                  </span>
                  <p className="text-xs text-[var(--foreground)] leading-relaxed">
                    {item.engineeringParallel}
                  </p>
                </div>
              </div>

              {/* Meta Specs Footer */}
              <div className="grid grid-cols-2 gap-2 pt-3 mt-4 border-t border-[var(--border-color)] text-xs font-mono">
                {item.meta.map((m) => (
                  <div key={m.label}>
                    <span className="block text-[9px] text-[var(--foreground-muted)] uppercase">
                      {m.label}
                    </span>
                    <span className="font-bold text-[var(--foreground)] text-[11px] truncate block">
                      {m.value}
                    </span>
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
