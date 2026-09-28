"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ABOUT_DATA = [
  {
    id: "01",
    phase: "The Foundation",
    title: "Visual Design & UI/UX",
    period: "Early Roots",
    content:
      "My journey began in the visual realm. Mastering composition, typography, and interface flow gave me an uncompromising eye for pixel-perfection. I learned to anticipate user behavior and craft intuitive layouts long before writing my first line of production code.",
    techs: ["Adobe Creative Suite", "Figma", "UI/UX Architecture", "Wireframing"],
    metricLabel: "Design Fidelity",
    metricValue: "100%",
    color: "var(--accent-blue)", // Cold blue
  },
  {
    id: "02",
    phase: "The Core",
    title: "Full-Stack Engineering",
    period: "Development Era",
    content:
      "Driven by a relentless desire to build what I designed, I transitioned into full-stack engineering. I constructed robust, scalable web applications using Next.js, React, and Firebase, mastering secure routing, server-side rendering, and complex database structures.",
    techs: ["Next.js", "React", "Tailwind CSS", "Firebase RTDB", "Node.js"],
    metricLabel: "System Uptime",
    metricValue: "99.9%",
    color: "var(--primary)", // Crimson
  },
  {
    id: "03",
    phase: "The Frontier",
    title: "AI & SaaS Architecture",
    period: "May 2026 – Present",
    content:
      "Independently engineered CloseDesk (Aicyro) from the ground up. I integrated cutting-edge artificial intelligence, featuring OpenAI Realtime WebRTC voice streaming, gpt-4o-mini Vision diagnostics, dynamic SMTP, and a bespoke telemetry and tracing suite.",
    techs: ["OpenAI WebRTC", "OpenAI Vision", "Cloud Functions", "AWS Polly", "Telemetry"],
    metricLabel: "AI Integration",
    metricValue: "Native",
    color: "var(--success)", // Emerald
  },
];

const About = () => {
  const [hoveredColor, setHoveredColor] = useState("var(--primary)");
  const containerRef = useRef(null);

  // --- SCROLL-LINKED TIMELINE LOGIC ---
  // Tracks how far down the user has scrolled within the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Maps the scroll progress to the height of the glowing laser line
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // --- ANIMATION VARIANTS ---
  const itemVariants = {
    hidden: { opacity: 0, x: 30, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full py-24 md:py-32 bg-[var(--background)] overflow-hidden border-t border-[var(--border-color)]/40"
    >
      {/* --- HUD GRID BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(circle at 30% 50%, black, transparent 80%)",
            WebkitMaskImage: "radial-gradient(circle at 30% 50%, black, transparent 80%)",
          }}
        />
      </div>

      {/* --- DYNAMIC AMBIENT GLOW --- */}
      <motion.div
        animate={{ backgroundColor: hoveredColor }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-1/4 right-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen opacity-[0.06] blur-[150px] pointer-events-none z-0"
      />
      <motion.div
        animate={{ backgroundColor: hoveredColor }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        className="absolute bottom-1/4 left-[-10%] w-[40vw] h-[40vw] rounded-full mix-blend-screen opacity-[0.05] blur-[120px] pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        
        {/* --- HEADER SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 md:mb-28 text-center md:text-left flex flex-col md:items-center"
        >
          <div className="flex items-center gap-3 mb-4 mx-auto md:mx-0">
            <div className="h-[2px] w-8 bg-[var(--primary)]" />
            <h2 className="text-xs font-mono tracking-[0.2em] text-[var(--foreground-muted)] uppercase">
              Architectural Evolution
            </h2>
            <div className="h-[2px] w-8 bg-[var(--primary)] md:hidden" />
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--foreground)] tracking-tight">
            Evolving from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">Pixels to AI.</span>
          </h3>
          <p className="mt-6 text-lg text-[var(--foreground-muted)] font-light max-w-2xl mx-auto md:mx-0 text-center">
            A comprehensive log of my transition from visual communication to building high-performance, AI-integrated SaaS architectures.
          </p>
        </motion.div>

        {/* --- THE TIMELINE --- */}
        <div ref={containerRef} className="relative w-full pb-10">
          
          {/* Base Track Line */}
          <div className="absolute left-[15px] md:left-[39px] top-4 bottom-0 w-[2px] bg-[var(--border-color)]/50 z-0 rounded-full" />

          {/* Glowing Scroll-Linked Laser Line */}
          <div className="absolute left-[15px] md:left-[39px] top-4 bottom-0 w-[2px] z-0 rounded-full flex justify-center">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[var(--accent-blue)] via-[var(--primary)] to-[var(--success)] shadow-[0_0_15px_var(--primary)]"
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-20">
            {ABOUT_DATA.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
                onMouseEnter={() => setHoveredColor(item.color)}
                onMouseLeave={() => setHoveredColor("var(--primary)")}
                className="relative pl-12 md:pl-24 group"
              >
                {/* Glowing Node on the line */}
                <div className="absolute left-[16px] md:left-[40px] top-6 md:top-8 flex items-center justify-center -translate-x-1/2">
                  <div
                    className="absolute w-6 h-6 rounded-full opacity-0 group-hover:opacity-40 animate-ping transition-opacity duration-300"
                    style={{ backgroundColor: item.color }}
                  />
                  {/* Outer Diamond */}
                  <div 
                    className="absolute w-4 h-4 rotate-45 border border-[var(--background)] transition-all duration-500 group-hover:rotate-90 group-hover:scale-150"
                    style={{ backgroundColor: item.color }}
                  />
                  {/* Inner Dot */}
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--background)] z-10" />
                </div>

                {/* --- CONTENT CARD --- */}
                <div className="p-6 md:p-10 rounded-2xl border border-[var(--border-color)]/60 bg-[var(--card-bg)]/40 backdrop-blur-xl transition-all duration-500 hover:bg-[var(--card-bg)]/80 hover:-translate-y-1 hover:shadow-2xl hover:border-[var(--border-color)] overflow-hidden relative"
                     style={{ borderLeftColor: item.color, borderLeftWidth: "3px" }}
                >
                  
                  {/* Subtle Background Number */}
                  <div className="absolute -right-6 -bottom-12 text-[140px] font-black opacity-[0.03] pointer-events-none select-none transition-transform duration-700 group-hover:scale-110" style={{ color: item.color }}>
                    {item.id}
                  </div>

                  <div className="relative z-10">
                    {/* Header Row */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold tracking-widest uppercase" style={{ color: item.color }}>
                          PHASE {item.id} // {item.phase}
                        </span>
                      </div>
                      <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest rounded bg-[var(--background)]/80 border border-[var(--border-color)] text-[var(--foreground)] backdrop-blur-md shadow-sm">
                        {item.period}
                      </span>
                    </div>

                    <h4 className="text-3xl md:text-4xl font-black text-[var(--foreground)] tracking-tight mb-5 transition-colors duration-300 group-hover:text-white">
                      {item.title}
                    </h4>

                    <p className="text-base md:text-lg text-[var(--foreground-muted)] font-light leading-relaxed mb-8">
                      {item.content}
                    </p>

                    {/* Data Grid: Tech & KPIs */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[var(--border-color)]/60">
                      
                      {/* Tech Stack */}
                      <div className="md:col-span-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--foreground-muted)] block mb-3">
                          Deployed Modules
                        </span>
                        <div className="flex flex-wrap gap-2.5">
                          {item.techs.map((tech, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1.5 rounded-lg text-[11px] font-mono bg-[var(--background)]/80 border border-[var(--border-color)] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)] cursor-default shadow-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* KPI Metric */}
                      <div className="md:border-l border-[var(--border-color)]/60 md:pl-6 pt-4 md:pt-0">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--foreground-muted)] block mb-2">
                          Key Indicator
                        </span>
                        <div className="flex flex-col">
                          <span 
                            className="text-4xl font-black tracking-tighter leading-none mb-1 transition-colors duration-300 drop-shadow-md"
                            style={{ color: item.color }}
                          >
                            {item.metricValue}
                          </span>
                          <span className="text-[11px] font-mono text-[var(--foreground)] font-bold uppercase">
                            {item.metricLabel}
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;