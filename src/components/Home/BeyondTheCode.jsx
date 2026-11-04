"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const CREATIVE_PASSIONS = [
  {
    id: "calligraphy",
    title: "Marker-Style Calligraphy",
    subtitle: "The Architecture of the Stroke",
    category: "Visual Craft",
    badge: "PRECISION & KERNING",
    accent: "#FACC15",
    gradient: "from-amber-400/20 via-yellow-400/10 to-transparent",
    description:
      "Long before crafting CSS grid tokens, I fell in love with ink flow, pressure modulation, and spatial kerning. Marker calligraphy is an exercise in absolute intentionality: once the chisel tip touches paper, there is no undo command.",
    takeaway:
      "This discipline directly informs my frontend obsession with typographic hierarchy, optical alignment, and pixel-perfect UI execution.",
    stats: [
      { label: "MEDIUM", value: "Broad & Chisel Marker" },
      { label: "PHILOSOPHY", value: "Intentional Vector Flow" },
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
    visualDetail: (
      <div className="relative w-full h-32 rounded-2xl bg-[var(--background)]/80 border border-[var(--border-color)] p-4 flex items-center justify-center overflow-hidden">
        <div className="text-4xl sm:text-5xl font-black italic tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 font-serif select-none transform -rotate-3">
          Abdul Moid
        </div>
        <div className="absolute bottom-2 right-3 text-[9px] font-mono text-[var(--foreground-muted)] opacity-70">
          INK // FLOW 100%
        </div>
      </div>
    ),
  },
  {
    id: "crochet",
    title: "Crocheting Custom Keychains",
    subtitle: "Physical Algorithmic Recursion",
    category: "Tactile Engineering",
    badge: "MODULAR LOOPS & TENSION",
    accent: "#F59E0B",
    gradient: "from-yellow-400/20 via-amber-500/10 to-transparent",
    description:
      "Crochet is pure state management in the physical realm: each loop depends strictly on the tension, stitch count, and state of the previous row. A single dropped stitch ripples through the entire build.",
    takeaway:
      "Crafting bespoke tactile keychains keeps my hands connected to physical engineering, building infinite patience and an appreciation for clean, modular structures.",
    stats: [
      { label: "CRAFT", value: "Tactile Keychains" },
      { label: "STRUCTURE", value: "Zero-Drop Recursion" },
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    visualDetail: (
      <div className="relative w-full h-32 rounded-2xl bg-[var(--background)]/80 border border-[var(--border-color)] p-4 flex items-center justify-center gap-3 overflow-hidden">
        {/* Woven Loop Graphic Illustration */}
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full border-2 border-dashed border-amber-400/80 flex items-center justify-center animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="w-3 h-3 rounded-full bg-amber-400" />
            </div>
          ))}
        </div>
        <div className="absolute bottom-2 right-3 text-[9px] font-mono text-[var(--foreground-muted)] opacity-70">
          STATE // TACTILE 3D
        </div>
      </div>
    ),
  },
  {
    id: "touring",
    title: "Mountain Motorcycle Touring",
    subtitle: "High-Altitude Exploration & Focus",
    category: "High-Altitude Focus",
    badge: "ZERO ROOM FOR ERROR",
    accent: "#EAB308",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    description:
      "Navigating alpine switchbacks, high mountain passes, and unpaved riverbeds on two wheels demands acute mindfulness. In the twisties, your eyes look where you want to go—never at the cliff edge.",
    takeaway:
      "This hyper-focus directly mirrors managing high-stakes SaaS production fires: absolute calm, rapid hazard assessment, and unwavering confidence under shifting terrain.",
    stats: [
      { label: "TERRAIN", value: "High Karakoram Passes" },
      { label: "MINDSET", value: "Hyper-Focus Under Pressure" },
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    visualDetail: (
      <div className="relative w-full h-32 rounded-2xl bg-[var(--background)]/80 border border-[var(--border-color)] p-4 flex items-center justify-center overflow-hidden">
        {/* Topographic Altitude Contour Silhouette */}
        <svg className="w-full h-full text-amber-500/30" viewBox="0 0 200 60" fill="none">
          <path d="M0 50 Q 30 20, 60 40 T 120 15 T 180 35 T 200 45" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M0 55 Q 40 30, 80 45 T 140 25 T 200 40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-xs font-bold text-[var(--foreground)] px-3 py-1 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] shadow-sm">
            ALTITUDE // 4,200M+
          </span>
        </div>
        <div className="absolute bottom-2 right-3 text-[9px] font-mono text-[var(--foreground-muted)] opacity-70">
          EXPLORATION // ALPINE PASSES
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
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth * 0.75 : clientWidth * 0.75;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="beyond-code"
      className="relative w-full py-28 md:py-36 bg-[var(--background)] overflow-hidden border-t border-[var(--border-color)]/60"
    >
      {/* Background Soft Mesh Ambient */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(250, 204, 21, 0.12) 0%, transparent 60%), radial-gradient(circle at 10% 80%, rgba(245, 158, 11, 0.10) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[var(--border-color)]/70 pb-10"
        >
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] mb-4 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary-vibrant)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--primary)]"></span>
              </span>
              <span className="text-xs font-mono tracking-widest text-[var(--foreground-muted)] uppercase font-semibold">
                PERSONAL TOUCH // CREATIVE PURSUITS
              </span>
            </div>

            <h3 className="text-4xl md:text-6xl font-black text-[var(--foreground)] tracking-tight">
              Beyond the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 dark:from-yellow-300 dark:via-amber-400 dark:to-yellow-500">
                Codebase.
              </span>
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-base sm:text-lg text-[var(--foreground-muted)] font-light max-w-md">
              Software is craft and discipline. Here is how physical calligraphy,
              tactile loops, and mountain passes shape my engineering mindset.
            </p>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className={`interactive w-11 h-11 rounded-full border border-[var(--border-color)] flex items-center justify-center transition-all ${
                  canScrollLeft
                    ? "bg-[var(--card-bg)] text-[var(--foreground)] hover:border-[var(--primary-vibrant)] shadow-sm"
                    : "opacity-40 cursor-not-allowed bg-[var(--background-subtle)] text-[var(--foreground-muted)]"
                }`}
              >
                ←
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className={`interactive w-11 h-11 rounded-full border border-[var(--border-color)] flex items-center justify-center transition-all ${
                  canScrollRight
                    ? "bg-[var(--card-bg)] text-[var(--foreground)] hover:border-[var(--primary-vibrant)] shadow-sm"
                    : "opacity-40 cursor-not-allowed bg-[var(--background-subtle)] text-[var(--foreground-muted)]"
                }`}
              >
                →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Horizontally Scrolling Interactive Track */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-7 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {CREATIVE_PASSIONS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="interactive snap-center shrink-0 w-[85vw] sm:w-[480px] lg:w-[420px] p-8 sm:p-9 rounded-3xl bg-[var(--card-bg)]/85 backdrop-blur-2xl border border-[var(--border-color)] hover:border-[var(--primary-vibrant)] shadow-xl hover:shadow-[0_20px_45px_rgba(250,204,21,0.25)] transition-all duration-300 flex flex-col justify-between group overflow-hidden relative"
            >
              {/* Soft Gradient Ambient Card Corner Glow */}
              <div
                className={`absolute top-0 right-0 w-52 h-52 rounded-full bg-gradient-to-bl ${item.gradient} blur-[70px] pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Header Row */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--border-color)]/60">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner"
                      style={{
                        backgroundColor: `${item.accent}20`,
                        color: item.accent,
                        border: `1px solid ${item.accent}40`,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[var(--foreground-muted)]">
                        {item.category}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-black text-[var(--foreground)] tracking-tight">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Subtitle & Badge */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md uppercase tracking-wider bg-amber-400/15 text-[var(--primary)] border border-amber-400/30 inline-block mb-2">
                    {item.badge}
                  </span>
                  <div className="text-sm font-semibold text-[var(--foreground)]">
                    {item.subtitle}
                  </div>
                </div>

                {/* Narrative Description */}
                <p className="text-sm sm:text-base text-[var(--foreground-muted)] font-light leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Visual Accent Demonstration Card */}
                <div className="mb-6">{item.visualDetail}</div>

                {/* Engineering Connection / Takeaway */}
                <div className="p-4 rounded-2xl bg-[var(--background-subtle)] border border-[var(--border-color)]/70">
                  <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[var(--primary)] block mb-1">
                    ENGINEERING CORRELATION
                  </span>
                  <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                    {item.takeaway}
                  </p>
                </div>
              </div>

              {/* Stats Footer */}
              <div className="grid grid-cols-2 gap-3 pt-5 mt-6 border-t border-[var(--border-color)]/60 text-xs font-mono">
                {item.stats.map((s, i) => (
                  <div key={i}>
                    <span className="block text-[10px] text-[var(--foreground-muted)] uppercase">
                      {s.label}
                    </span>
                    <span className="font-bold text-[var(--foreground)] text-[11px]">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
