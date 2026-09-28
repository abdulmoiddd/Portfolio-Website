// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// const Hero = () => {
//   // --- TEXT ANIMATION VARIANTS ---
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15, delayChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
//     },
//   };

//   // --- NEGATIVE SPACE FLOATING ELEMENTS ---
//   const floatingShapes = [
//     { id: 1, text: "{}", x: "15%", y: "20%", delay: 0, duration: 8 },
//     { id: 2, text: "</>", x: "85%", y: "30%", delay: 2, duration: 10 },
//     { id: 3, text: "+", x: "75%", y: "75%", delay: 1, duration: 7 },
//     { id: 4, text: "⌘", x: "20%", y: "80%", delay: 3, duration: 9 },
//     { id: 5, text: "○", x: "80%", y: "15%", delay: 4, duration: 11 },
//     { id: 6, text: "△", x: "10%", y: "60%", delay: 2.5, duration: 8.5 },
//   ];

//   return (
//     <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-[var(--background)] pt-20 pb-20">
//       {/* 1. LIVE AMBIENT BACKGROUND */}
//       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//         {/* Animated Moving Background Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[var(--hero-from)] via-[var(--hero-via)] to-[var(--hero-to)] animate-gradient-xy opacity-80" />

//         {/* Subtle dot grid masking */}
//         <div
//           className="absolute inset-0 opacity-20"
//           style={{
//             backgroundImage:
//               "radial-gradient(var(--grid-line) 1.5px, transparent 1.5px)",
//             backgroundSize: "32px 32px",
//             maskImage:
//               "radial-gradient(ellipse 90% 90% at center, black 10%, transparent 100%)",
//             WebkitMaskImage:
//               "radial-gradient(ellipse 90% 90% at center, black 10%, transparent 100%)",
//           }}
//         />

//         {/* Dynamic Glowing Orbs (Live Feel) */}
//         <motion.div
//           className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[var(--primary)] mix-blend-screen filter blur-[150px] opacity-[calc(var(--spotlight-opacity)*1.5)]"
//           animate={{
//             x: ["0%", "20%", "0%"],
//             y: ["0%", "30%", "0%"],
//             scale: [1, 1.2, 1],
//           }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[var(--accent-blue)] mix-blend-screen filter blur-[150px] opacity-[calc(var(--spotlight-opacity)*1.2)]"
//           animate={{
//             x: ["0%", "-30%", "0%"],
//             y: ["0%", "-20%", "0%"],
//             scale: [1, 1.3, 1],
//           }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       {/* 2. NEGATIVE SPACE ANIMATIONS */}
//       {floatingShapes.map((shape) => (
//         <motion.div
//           key={shape.id}
//           className="absolute z-0 font-mono text-2xl text-[var(--foreground-muted)] opacity-20 select-none pointer-events-none"
//           style={{ left: shape.x, top: shape.y }}
//           animate={{
//             y: [0, -30, 0],
//             rotate: [0, 15, -15, 0],
//             opacity: [0.1, 0.3, 0.1],
//           }}
//           transition={{
//             duration: shape.duration,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: shape.delay,
//           }}
//         >
//           {shape.text}
//         </motion.div>
//       ))}

//       {/* 3. MAIN CONTENT */}
//       <motion.div
//         className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center px-6 w-full"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* Availability Badge */}
//         <motion.div variants={itemVariants} className="mb-8">
//           <div className="inline-flex items-center px-5 py-2 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)]/40 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
//             <span className="relative flex h-2.5 w-2.5 mr-3">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--primary)] shadow-[0_0_8px_var(--primary)]"></span>
//             </span>
//             <span className="text-sm font-semibold text-[var(--foreground)] tracking-wide uppercase">
//               Available for New Projects
//             </span>
//           </div>
//         </motion.div>

//         {/* Main Headline with Waving Hand */}
//         <motion.div variants={itemVariants} className="mb-6">
//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-[var(--foreground)] drop-shadow-xl flex flex-wrap justify-center items-center gap-3 md:gap-4">
//             Hi, I’m Abdul Moid
//           </h1>
//         </motion.div>

//         {/* Animated Sub-headline Roles */}
//         <motion.div variants={itemVariants} className="mb-8">
//           <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent-blue)] to-[var(--primary)] animate-gradient-x py-2">
//             Software Engineer & Full Stack Developer
//           </h2>
//         </motion.div>

//         {/* Story Description */}
//         <motion.p
//           variants={itemVariants}
//           className="text-lg md:text-xl text-[var(--foreground-muted)] max-w-3xl mb-12 leading-relaxed font-light backdrop-blur-sm bg-[var(--background)]/10 p-4 rounded-2xl"
//         >
//           My journey started in{" "}
//           <span className="text-[var(--foreground)] font-medium">
//             Graphic Design
//           </span>
//           , mastering visual storytelling. Today, I build the{" "}
//           <span className="text-[var(--foreground)] font-medium">
//             Full Stack
//           </span>{" "}
//           architecture behind those designs using Next.js, MERN, and modern web
//           technologies.
//         </motion.p>

//         {/* Modern Call to Action Buttons */}
//         <motion.div
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto relative z-20"
//         >
//           <Link
//             href="#portfolio"
//             className="group relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 bg-[var(--foreground)] text-[var(--background)] hover:-translate-y-1 flex items-center justify-center gap-2 shadow-[0_0_20px_var(--lead-glow)] hover:shadow-[0_0_30px_var(--primary)] overflow-hidden"
//           >
//             {/* Button Hover Shine Effect */}
//             <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
//             <span className="relative z-10">Explore My Work</span>
//             <svg
//               className="w-5 h-5 relative z-10 transform transition-transform group-hover:translate-x-1"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M14 5l7 7m0 0l-7 7m7-7H3"
//               />
//             </svg>
//           </Link>
//           <Link
//             href="#about"
//             className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-[var(--border-color)] bg-[var(--card-bg)]/30 backdrop-blur-md text-[var(--foreground)] hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-[var(--background)] hover:-translate-y-1 shadow-sm"
//           >
//             Lets Connect
//           </Link>
//         </motion.div>
//       </motion.div>

//       {/* Required Custom CSS Keyframes */}
//       <style flex global>{`
//         @keyframes shimmer {
//           100% { transform: translateX(100%); }
//         }
//         @keyframes gradient-xy {
//           0%, 100% {
//             background-size: 400% 400%;
//             background-position: left center;
//           }
//           50% {
//             background-size: 200% 200%;
//             background-position: right center;
//           }
//         }
//         .animate-gradient-xy {
//           animation: gradient-xy 15s ease infinite;
//         }
//         @keyframes gradient-x {
//           0%, 100% {
//             background-size: 200% 200%;
//             background-position: left center;
//           }
//           50% {
//             background-size: 200% 200%;
//             background-position: right center;
//           }
//         }
//         .animate-gradient-x {
//           animation: gradient-x 6s ease infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  // --- TEXT & LAYOUT ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const floatingCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.4 },
    },
    float: {
      y: [0, -15, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[var(--background)] py-20">
      {/* 1. ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Crisp grid background */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
            maskImage:
              "radial-gradient(circle at 70% 50%, black, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(circle at 70% 50%, black, transparent 80%)",
          }}
        />

        {/* Subtle Accent Glow */}
        <div className="absolute right-0 top-1/4 w-[40vw] h-[40vw] bg-[var(--primary)]/10 rounded-full blur-[120px]" />
      </div>

      {/* 2. MAIN LAYOUT GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* LEFT COLUMN: Typography & CTAs */}
        <motion.div
          className="flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={textVariants} className="mb-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-md border border-[var(--border-color)] bg-[var(--background)]/50 backdrop-blur-sm">
              <span className="flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-[var(--foreground)] tracking-wider uppercase">
                System Online • Accepting Projects
              </span>
            </div>
          </motion.div>

          {/* Massive Headline */}
          <motion.div variants={textVariants} className="mb-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-[var(--foreground)] leading-[1.1]">
              Abdul <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
                Moid
              </span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.div variants={textVariants} className="mb-6">
            <h2 className="text-xl sm:text-2xl font-mono text-[var(--foreground-muted)] flex items-center gap-2">
              <span className="text-[var(--primary)]">{">"}</span> Software
              Engineer
              <span className="animate-pulse text-[var(--foreground)]">_</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={textVariants}
            className="text-lg text-[var(--foreground-muted)] max-w-lg mb-10 leading-relaxed font-light"
          >
            I transition concepts into structural realities. Starting in visual
            design, I now engineer robust{" "}
            <span className="text-[var(--foreground)] font-semibold border-b border-[var(--primary)]/30">
              Full Stack architectures
            </span>{" "}
            using Next.js and the MERN stack.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={textVariants}
            className="flex flex-wrap gap-4 w-full"
          >
            <Link
              href="https://github.com/abdulmoiddd"
              className="px-8 py-3.5 rounded-lg font-medium transition-all bg-[var(--foreground)] text-[var(--background)] hover:scale-[1.02] hover:shadow-lg flex items-center gap-2"
            >
              View Repository
              <svg
                className="w-4 h-4"
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
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3.5 rounded-lg font-medium transition-all border border-[var(--border-color)] hover:bg-[var(--foreground)]/5 text-[var(--foreground)]"
            >
              Initialize Contact
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Visual Terminal/Code Element */}
        <motion.div
          className="relative hidden lg:block w-full h-[500px]"
          variants={floatingCardVariants}
          initial="hidden"
          animate={["visible", "float"]}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/20 to-[var(--accent-blue)]/20 rounded-2xl transform rotate-3 blur-xl opacity-50 transition-transform duration-700 hover:rotate-6" />

          <div className="absolute inset-0 bg-[var(--card-bg)]/80 backdrop-blur-xl border border-[var(--border-color)] rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-transform duration-700 hover:-translate-y-2 hover:shadow-[var(--primary)]/10">
            {/* Terminal Header */}
            <div className="h-10 border-b border-[var(--border-color)] bg-[var(--background)]/50 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs font-mono text-[var(--foreground-muted)]">
                abdulmoid.js
              </span>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm lg:text-base text-[var(--foreground-muted)] leading-relaxed flex-1 overflow-hidden">
              <p>
                <span className="text-[var(--accent-blue)]">const</span>{" "}
                <span className="text-yellow-400">developer</span> = {"{"}
              </p>

              <p className="ml-6">
                name:{" "}
                <span className="text-green-400">&quot;Abdul Moid&quot;</span>,
              </p>

              <p className="ml-6">
                role:{" "}
                <span className="text-green-400">
                  &quot;Full Stack Engineer&quot;
                </span>
                ,
              </p>

              <p className="ml-6">
                skills: [
                <span className="text-green-400">&quot;Next.js&quot;</span>,{" "}
                <span className="text-green-400">&quot;React&quot;</span>,{" "}
                <span className="text-green-400">&quot;Node.js&quot;</span>],
              </p>

              <p className="ml-6">
                designBackground:{" "}
                <span className="text-[var(--accent-blue)]">true</span>,
              </p>

              <p className="ml-6">
                currentTask:{" "}
                <span className="text-[var(--primary)]">() =&gt;</span>{" "}
                buildAwesomeThings()
              </p>

              <p>{"}"};</p>
              <br />
              <p>
                <span className="text-[var(--accent-blue)]">developer</span>.
                <span className="text-yellow-400">execute</span>();
              </p>
              <p className="mt-4 text-emerald-400 opacity-80 animate-pulse">
                {">"} Compiling successful...
              </p>
              <p className="text-emerald-400 opacity-80">
                {">"} Server running on port 3000
              </p>
            </div>

            {/* Terminal Body */}
            {/* <div className="p-6 font-mono text-sm lg:text-base text-[var(--foreground-muted)] leading-relaxed flex-1 overflow-hidden">
              <p>
                <span className="text-[var(--accent-blue)]">const</span>{" "}
                <span className="text-yellow-400">developer</span> = {"{"}
              </p>
              <p className="ml-6">
                name: <span className="text-green-400">"Abdul Moid"</span>,
              </p>
              <p className="ml-6">
                role:{" "}
                <span className="text-green-400">"Full Stack Engineer"</span>,
              </p>
              <p className="ml-6">
                skills: [<span className="text-green-400">"Next.js"</span>,{" "}
                <span className="text-green-400">"React"</span>,{" "}
                <span className="text-green-400">"Node.js"</span>],
              </p>
              <p className="ml-6">
                designBackground:{" "}
                <span className="text-[var(--accent-blue)]">true</span>,
              </p>
              <p className="ml-6">
                currentTask:{" "}
                <span className="text-[var(--primary)]">() =&gt;</span>{" "}
                buildAwesomeThings()
              </p>
              <p>{"}"};</p>
              <br />
              <p>
                <span className="text-[var(--accent-blue)]">developer</span>.
                <span className="text-yellow-400">execute</span>();
              </p>
              <p className="mt-4 text-emerald-400 opacity-80 animate-pulse">
                {">"} Compiling successful...
              </p>
              <p className="text-emerald-400 opacity-80">
                {">"} Server running on port 3000
              </p>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
