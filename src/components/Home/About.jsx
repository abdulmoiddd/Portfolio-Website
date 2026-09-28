// // // "use client";

// // // import { motion } from "framer-motion";

// // // const About = () => {
// // //   // Animation variants for scroll reveal
// // //   const containerVariants = {
// // //     hidden: { opacity: 0 },
// // //     whileInView: {
// // //       opacity: 1,
// // //       transition: { staggerChildren: 0.2, delayChildren: 0.1 },
// // //     },
// // //   };

// // //   const itemVariants = {
// // //     hidden: { opacity: 0, y: 20 },
// // //     whileInView: {
// // //       opacity: 1,
// // //       y: 0,
// // //       transition: { duration: 0.6, ease: "easeOut" },
// // //     },
// // //   };

// // //   // Content data for the cards to keep the JSX clean
// // //   const skills = [
// // //     {
// // //       title: "Design Background",
// // //       description:
// // //         "Pixel-perfect designs with a focus on user experience and visual appeal.",
// // //       icon: (
// // //         <svg
// // //           className="w-6 h-6 text-[var(--primary)]"
// // //           fill="none"
// // //           stroke="currentColor"
// // //           viewBox="0 0 24 24"
// // //         >
// // //           <path
// // //             strokeLinecap="round"
// // //             strokeLinejoin="round"
// // //             strokeWidth={1.5}
// // //             d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.522-8.997 10.153 10.153 0 002.814 7.6m3.606 1.489c1.676.954 3.491 1.252 5.215.918M21.5 12a9.5 9.5 0 01-9.5 9.5M21.5 12a9.5 9.5 0 00-9.5-9.5M12 2.5v9.5"
// // //           />
// // //         </svg>
// // //       ),
// // //     },
// // //     {
// // //       title: "Full Stack Dev",
// // //       description:
// // //         "End-to-end development from database design to responsive frontends.",
// // //       icon: (
// // //         <svg
// // //           className="w-6 h-6 text-[var(--accent-blue)]"
// // //           fill="none"
// // //           stroke="currentColor"
// // //           viewBox="0 0 24 24"
// // //         >
// // //           <path
// // //             strokeLinecap="round"
// // //             strokeLinejoin="round"
// // //             strokeWidth={1.5}
// // //             d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
// // //           />
// // //         </svg>
// // //       ),
// // //     },
// // //     {
// // //       title: "Continuous Growth",
// // //       description:
// // //         "Always learning and adapting to new technologies and best practices in the ever-evolving web ecosystem.",
// // //       icon: (
// // //         <svg
// // //           className="w-6 h-6 text-emerald-400"
// // //           fill="none"
// // //           stroke="currentColor"
// // //           viewBox="0 0 24 24"
// // //         >
// // //           <path
// // //             strokeLinecap="round"
// // //             strokeLinejoin="round"
// // //             strokeWidth={1.5}
// // //             d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
// // //           />
// // //         </svg>
// // //       ),
// // //     },
// // //   ];

// // //   return (
// // //     <section
// // //       id="about"
// // //       className="relative w-full py-24 bg-[var(--background)] overflow-hidden"
// // //     >
// // //       {/* Subtle Background Accent */}
// // //       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-[var(--background)] via-[var(--card-bg)]/20 to-[var(--background)] pointer-events-none" />

// // //       <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
// // //         {/* Section Header */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true, margin: "-100px" }}
// // //           transition={{ duration: 0.6 }}
// // //           className="mb-16 md:mb-24"
// // //         >
// // //           <h2 className="text-sm font-mono tracking-widest text-[var(--primary)] uppercase mb-3">
// // //             About Me
// // //           </h2>
// // //           <h3 className="text-4xl md:text-5xl font-bold text-[var(--foreground)]">
// // //             My Journey.
// // //           </h3>
// // //         </motion.div>

// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
// // //           {/* LEFT COLUMN: The Narrative */}
// // //           <motion.div
// // //             variants={containerVariants}
// // //             initial="hidden"
// // //             whileInView="whileInView"
// // //             viewport={{ once: true, margin: "-100px" }}
// // //             className="flex flex-col gap-6 text-lg text-[var(--foreground-muted)] leading-relaxed font-light"
// // //           >
// // //             <motion.p variants={itemVariants}>
// // //               I started my career as a{" "}
// // //               <strong className="text-[var(--foreground)] font-medium">
// // //                 Graphic Designer
// // //               </strong>
// // //               , where I developed a keen eye for aesthetics, layouts, and
// // //               user-centric design. Working with tools like Adobe Photoshop and
// // //               Illustrator taught me the fundamentals of visual communication.
// // //             </motion.p>

// // //             <motion.p variants={itemVariants}>
// // //               Over time, my curiosity led me to the world of web development. I
// // //               began with HTML and CSS, gradually moving into JavaScript and
// // //               eventually mastering the full{" "}
// // //               <strong className="text-[var(--foreground)] font-medium">
// // //                 MERN stack
// // //               </strong>{" "}
// // //               and{" "}
// // //               <strong className="text-[var(--foreground)] font-medium">
// // //                 Next.js
// // //               </strong>
// // //               .
// // //             </motion.p>

// // //             <motion.p
// // //               variants={itemVariants}
// // //               className="pt-4 border-t border-[var(--border-color)]"
// // //             >
// // //               Today, I combine my design background with full-stack engineering
// // //               skills to build beautiful, performant, and scalable web
// // //               applications.
// // //             </motion.p>
// // //           </motion.div>

// // //           {/* RIGHT COLUMN: The Pillars/Cards */}
// // //           <motion.div
// // //             variants={containerVariants}
// // //             initial="hidden"
// // //             whileInView="whileInView"
// // //             viewport={{ once: true, margin: "-100px" }}
// // //             className="flex flex-col gap-5"
// // //           >
// // //             {skills.map((skill, index) => (
// // //               <motion.div
// // //                 key={index}
// // //                 variants={itemVariants}
// // //                 className="group flex gap-5 p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)]/30 backdrop-blur-sm transition-all duration-300 hover:bg-[var(--card-bg)] hover:-translate-y-1 hover:shadow-lg hover:border-[var(--primary)]/30"
// // //               >
// // //                 <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--background)] border border-[var(--border-color)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
// // //                   {skill.icon}
// // //                 </div>
// // //                 <div className="flex flex-col">
// // //                   <h4 className="text-xl font-semibold text-[var(--foreground)] mb-2">
// // //                     {skill.title}
// // //                   </h4>
// // //                   <p className="text-[var(--foreground-muted)] text-base font-light leading-relaxed">
// // //                     {skill.description}
// // //                   </p>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </motion.div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default About;

// // ///
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //
// // //

// // "use client";

// // import { motion } from "framer-motion";

// // const About = () => {
// //   // --- ANIMATION VARIANTS ---
// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     whileInView: {
// //       opacity: 1,
// //       transition: { staggerChildren: 0.15, delayChildren: 0.1 },
// //     },
// //   };

// //   const cardVariants = {
// //     hidden: { opacity: 0, y: 30, scale: 0.95 },
// //     whileInView: {
// //       opacity: 1,
// //       y: 0,
// //       scale: 1,
// //       transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
// //     },
// //   };

// //   return (
// //     <section
// //       id="about"
// //       className="relative w-full py-24 bg-[var(--background)] overflow-hidden"
// //     >
// //       {/* Subtle Glow Background */}
// //       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[var(--primary)]/5 rounded-full blur-[100px] pointer-events-none" />

// //       <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
// //         {/* Section Header */}
// //         <motion.div
// //           initial={{ opacity: 0, x: -20 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           viewport={{ once: true, margin: "-100px" }}
// //           transition={{ duration: 0.6 }}
// //           className="mb-12"
// //         >
// //           <div className="flex items-center gap-4 mb-4">
// //             <div className="h-[1px] w-12 bg-[var(--primary)]" />
// //             <h2 className="text-sm font-mono tracking-widest text-[var(--primary)] uppercase">
// //               About Me
// //             </h2>
// //           </div>
// //           <h3 className="text-4xl md:text-5xl font-black text-[var(--foreground)] tracking-tight">
// //             My Journey.
// //           </h3>
// //         </motion.div>

// //         {/* BENTO BOX GRID */}
// //         <motion.div
// //           variants={containerVariants}
// //           initial="hidden"
// //           whileInView="whileInView"
// //           viewport={{ once: true, margin: "-100px" }}
// //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]"
// //         >
// //           {/* Main Story Card (Spans 2 columns on large screens) */}
// //           <motion.div
// //             variants={cardVariants}
// //             className="md:col-span-2 lg:col-span-2 row-span-2 p-8 md:p-10 rounded-3xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--card-bg)]/80 to-[var(--background)]/50 backdrop-blur-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
// //           >
// //             {/* Decorative background accent inside the card */}
// //             <div className="absolute -right-20 -top-20 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-3xl group-hover:bg-[var(--primary)]/20 transition-colors duration-500" />

// //             <h4 className="text-2xl font-bold text-[var(--foreground)] mb-6 relative z-10">
// //               From Pixels to Full Stack.
// //             </h4>
// //             <div className="space-y-6 text-lg text-[var(--foreground-muted)] font-light leading-relaxed relative z-10">
// //               <p>
// //                 I started my career as a{" "}
// //                 <strong className="text-[var(--foreground)] font-medium">
// //                   Graphic Designer
// //                 </strong>
// //                 , where I developed a keen eye for aesthetics, layouts, and
// //                 user-centric design. Working with tools like Adobe Photoshop and
// //                 Illustrator taught me the fundamentals of visual communication.
// //               </p>
// //               <p>
// //                 Over time, my curiosity led me to the world of web development.
// //                 I began with HTML and CSS, gradually moving into JavaScript and
// //                 eventually mastering the full{" "}
// //                 <strong className="text-[var(--foreground)] font-medium">
// //                   MERN stack
// //                 </strong>{" "}
// //                 and{" "}
// //                 <strong className="text-[var(--foreground)] font-medium">
// //                   Next.js
// //                 </strong>
// //                 .
// //               </p>
// //               <p className="pt-4 border-t border-[var(--border-color)]/50">
// //                 Today, I combine my design background with full-stack
// //                 engineering skills to build beautiful, performant, and scalable
// //                 web applications.
// //               </p>
// //             </div>
// //           </motion.div>

// //           {/* Skill 1: Design Background */}
// //           <motion.div
// //             variants={cardVariants}
// //             className="p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/40 backdrop-blur-md flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300"
// //           >
// //             <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--primary)]/20 transition-all">
// //               <svg
// //                 className="w-6 h-6 text-[var(--primary)]"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={1.5}
// //                   d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.522-8.997 10.153 10.153 0 002.814 7.6m3.606 1.489c1.676.954 3.491 1.252 5.215.918M21.5 12a9.5 9.5 0 01-9.5 9.5M21.5 12a9.5 9.5 0 00-9.5-9.5M12 2.5v9.5"
// //                 />
// //               </svg>
// //             </div>
// //             <div>
// //               <h4 className="text-xl font-bold text-[var(--foreground)] mb-2">
// //                 Design Background
// //               </h4>
// //               <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
// //                 Pixel-perfect designs with a focus on user experience and visual
// //                 appeal.
// //               </p>
// //             </div>
// //           </motion.div>

// //           {/* Skill 2: Full Stack Dev */}
// //           <motion.div
// //             variants={cardVariants}
// //             className="p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/40 backdrop-blur-md flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300"
// //           >
// //             <div className="w-12 h-12 rounded-full bg-[var(--accent-blue)]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--accent-blue)]/20 transition-all">
// //               <svg
// //                 className="w-6 h-6 text-[var(--accent-blue)]"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={1.5}
// //                   d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
// //                 />
// //               </svg>
// //             </div>
// //             <div>
// //               <h4 className="text-xl font-bold text-[var(--foreground)] mb-2">
// //                 Full Stack Dev
// //               </h4>
// //               <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
// //                 End-to-end development from database design to responsive
// //                 frontends.
// //               </p>
// //             </div>
// //           </motion.div>

// //           {/* Skill 3: Continuous Growth (Spans remaining space smoothly) */}
// //           <motion.div
// //             variants={cardVariants}
// //             className="md:col-span-2 lg:col-span-1 p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/40 backdrop-blur-md flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300"
// //           >
// //             <div className="w-12 h-12 rounded-full bg-emerald-400/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-400/20 transition-all">
// //               <svg
// //                 className="w-6 h-6 text-emerald-400"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={1.5}
// //                   d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
// //                 />
// //               </svg>
// //             </div>
// //             <div>
// //               <h4 className="text-xl font-bold text-[var(--foreground)] mb-2">
// //                 Continuous Growth
// //               </h4>
// //               <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
// //                 Always learning and adapting to new technologies and best
// //                 practices in the ever-evolving web ecosystem.
// //               </p>
// //             </div>
// //           </motion.div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default About;

// //
// //
// //
// //
// //
// //
// //
// //
// //

// "use client";

// import { motion } from "framer-motion";

// const About = () => {
//   // --- ANIMATION VARIANTS ---
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     whileInView: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.1 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     whileInView: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
//     },
//   };

//   // Variants for interactive cards
//   const cardVariants = {
//     hover: {
//       y: -8,
//       borderColor: "var(--primary)",
//       boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)",
//       transition: { duration: 0.3, ease: "easeOut" },
//     },
//   };

//   const iconVariants = {
//     hover: {
//       scale: 1.1,
//       rotate: [0, -10, 10, 0],
//       transition: { duration: 0.5, ease: "easeInOut" },
//     },
//   };

//   // --- BACKGROUND ANIMATED ELEMENTS ---
//   const floatingElements = [
//     { id: 1, type: "circle", size: "10px", x: "10%", y: "20%", delay: 0 },
//     { id: 2, type: "square", size: "15px", x: "85%", y: "15%", delay: 2 },
//     { id: 3, type: "triangle", size: "12px", x: "75%", y: "80%", delay: 1 },
//     { id: 4, type: "bracket", size: "18px", x: "20%", y: "75%", delay: 3 },
//     { id: 5, type: "circle", size: "8px", x: "50%", y: "50%", delay: 4 },
//   ];

//   // Map elements to SVG/DIV with animation
//   const renderFloatingElement = (element) => {
//     const baseClass = "absolute opacity-[0.08] pointer-events-none";
//     const animation = {
//       y: ["0px", "-20px", "0px"],
//       x: ["0px", "10px", "0px"],
//       rotate: [0, 15, -15, 0],
//     };
//     const transition = {
//       duration: 6 + Math.random() * 4,
//       repeat: Infinity,
//       ease: "easeInOut",
//       delay: element.delay,
//     };

//     switch (element.type) {
//       case "circle":
//         return (
//           <motion.div
//             key={element.id}
//             className={`${baseClass} rounded-full bg-[var(--primary)]`}
//             style={{
//               width: element.size,
//               height: element.size,
//               left: element.x,
//               top: element.y,
//             }}
//             animate={animation}
//             transition={transition}
//           />
//         );
//       case "square":
//         return (
//           <motion.div
//             key={element.id}
//             className={`${baseClass} bg-[var(--accent-blue)]`}
//             style={{
//               width: element.size,
//               height: element.size,
//               left: element.x,
//               top: element.y,
//             }}
//             animate={animation}
//             transition={transition}
//           />
//         );
//       case "triangle":
//         return (
//           <motion.svg
//             key={element.id}
//             className={`${baseClass} text-emerald-400`}
//             style={{
//               width: element.size,
//               height: element.size,
//               left: element.x,
//               top: element.y,
//             }}
//             viewBox="0 0 100 100"
//             fill="currentColor"
//             animate={animation}
//             transition={transition}
//           >
//             <polygon points="50,15 90,85 10,85" />
//           </motion.svg>
//         );
//       case "bracket":
//         return (
//           <motion.div
//             key={element.id}
//             className={`${baseClass} font-mono text-2xl text-[var(--foreground)]`}
//             style={{ left: element.x, top: element.y }}
//             animate={animation}
//             transition={transition}
//           >
//             {"{"}
//           </motion.div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <section
//       id="about"
//       className="relative w-full py-28 bg-[var(--background)] overflow-hidden"
//     >
//       {/* 1. LAYERED BACKGROUND ANIMATIONS */}
//       <div className="absolute inset-0 z-0 opacity-40">
//         {floatingElements.map(renderFloatingElement)}
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
//           {/* LEFT COLUMN: Narrative */}
//           <motion.div
//             className="lg:col-span-7"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="whileInView"
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             {/* Section Header */}
//             <motion.div variants={itemVariants} className="mb-12">
//               <div className="flex items-center gap-3 mb-2">
//                 <h2 className="text-sm font-mono tracking-widest text-[var(--primary)] uppercase">
//                   About Me
//                 </h2>
//                 <div className="h-[1px] flex-1 bg-[var(--border-color)]" />
//               </div>
//               <h3 className="text-5xl md:text-6xl font-extrabold text-[var(--foreground)] tracking-tighter leading-tight">
//                 My Journey<span className="text-[var(--primary)]">.</span>
//               </h3>
//             </motion.div>

//             {/* Paragraphs */}
//             <div className="space-y-7 text-xl text-[var(--foreground-muted)] font-light leading-relaxed">
//               <motion.p variants={itemVariants}>
//                 I started my career as a{" "}
//                 <strong className="text-[var(--foreground)] font-semibold">
//                   Graphic Designer
//                 </strong>
//                 , where I developed a keen eye for aesthetics, layouts, and
//                 user-centric design. Working with tools like Adobe Photoshop and
//                 Illustrator taught me the fundamentals of visual communication.
//               </motion.p>

//               <motion.p variants={itemVariants}>
//                 Over time, my curiosity led me to the world of web development.
//                 I began with HTML and CSS, gradually moving into JavaScript and
//                 eventually mastering the full{" "}
//                 <strong className="text-[var(--foreground)] font-semibold">
//                   MERN stack
//                 </strong>{" "}
//                 and{" "}
//                 <strong className="text-[var(--foreground)] font-semibold">
//                   Next.js
//                 </strong>
//                 .
//               </motion.p>

//               <motion.p
//                 variants={itemVariants}
//                 className="text-[var(--foreground)] font-medium pt-6 border-t border-[var(--border-color)]"
//               >
//                 Today, I combine my design background with full-stack
//                 engineering skills to build beautiful, performant, and scalable
//                 web applications.
//               </motion.p>
//             </div>
//           </motion.div>

//           {/* RIGHT COLUMN: Interactive Pillars */}
//           <motion.div
//             className="lg:col-span-5 grid grid-cols-1 gap-6 pt-10"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="whileInView"
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             {[
//               {
//                 title: "Design Background",
//                 desc: "Pixel-perfect designs focused on UX and visual appeal.",
//                 icon: (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1.5}
//                     d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.522-8.997 10.153 10.153 0 002.814 7.6m3.606 1.489c1.676.954 3.491 1.252 5.215.918M21.5 12a9.5 9.5 0 01-9.5 9.5M21.5 12a9.5 9.5 0 00-9.5-9.5M12 2.5v9.5"
//                   />
//                 ),
//                 color: "var(--primary)",
//               },
//               {
//                 title: "Full Stack Dev",
//                 desc: "End-to-end development, database design to frontend.",
//                 icon: (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1.5}
//                     d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                   />
//                 ),
//                 color: "var(--accent-blue)",
//               },
//               {
//                 title: "Continuous Growth",
//                 desc: "Always learning and adapting in the evolving web ecosystem.",
//                 icon: (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1.5}
//                     d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
//                   />
//                 ),
//                 color: "rgb(74 222 128)", // Tailwind emerald-400
//               },
//             ].map((skill, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="relative group"
//                 whileHover="hover" // Trigger children variants on hover
//               >
//                 {/* Border Glow Effect on Hover */}
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)] opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />

//                 {/* Main Card */}
//                 <motion.div
//                   variants={cardVariants}
//                   className="relative z-10 flex gap-6 p-7 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)]/80 backdrop-blur-xl transition-colors duration-300"
//                 >
//                   <motion.div
//                     className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center border transition-colors duration-300"
//                     style={{
//                       borderColor: `${skill.color}20`,
//                       backgroundColor: `${skill.color}10`,
//                     }}
//                     variants={iconVariants}
//                   >
//                     <svg
//                       className="w-7 h-7"
//                       style={{ color: skill.color }}
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       {skill.icon}
//                     </svg>
//                   </motion.div>

//                   <div className="flex flex-col justify-center">
//                     <h4 className="text-2xl font-bold text-[var(--foreground)] mb-1.5 tracking-tight">
//                       {skill.title}
//                     </h4>
//                     <p className="text-[var(--foreground-muted)] text-base font-light leading-relaxed">
//                       {skill.desc}
//                     </p>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

//
//
//
//
//
//
//
//
//
//

"use client";

import { motion } from "framer-motion";

const About = () => {
  // Animation for the timeline nodes and cards
  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const lineVariants = {
    hidden: { height: 0 },
    whileInView: {
      height: "100%",
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  const timelineData = [
    {
      id: "01",
      phase: "The Foundation",
      title: "Design Background",
      content:
        "I started my career as a Graphic Designer, where I developed a keen eye for aesthetics, layouts, and user-centric design. Working with tools like Adobe Photoshop and Illustrator taught me the fundamentals of visual communication. Pixel-perfect designs with a focus on user experience and visual appeal.",
      color: "var(--primary)",
    },
    {
      id: "02",
      phase: "The Transition",
      title: "Full Stack Dev",
      content:
        "Over time, my curiosity led me to the world of web development. I began with HTML and CSS, gradually moving into JavaScript and eventually mastering the full MERN stack and Next.js. End-to-end development from database design to responsive frontends.",
      color: "var(--accent-blue)",
    },
    {
      id: "03",
      phase: "The Future",
      title: "Continuous Growth",
      content:
        "Today, I combine my design background with full-stack engineering skills to build beautiful, performant, and scalable web applications. Always learning and adapting to new technologies and best practices in the ever-evolving web ecosystem.",
      color: "rgb(52 211 153)", // Tailwind emerald-400
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-24 md:py-32 bg-[var(--background)] overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent opacity-50" />
      <div className="absolute -left-[20vw] top-[20%] w-[50vw] h-[50vw] rounded-full bg-[var(--primary)]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* LEFT COLUMN: Sticky Header (Pins to screen on desktop) */}
          <div className="lg:w-1/3 flex-shrink-0">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[2px] w-8 bg-[var(--primary)]" />
                  <h2 className="text-sm font-mono tracking-widest text-[var(--primary)] uppercase">
                    About Me
                  </h2>
                </div>

                <h3 className="text-5xl md:text-6xl font-black text-[var(--foreground)] tracking-tight mb-6 leading-tight">
                  My <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
                    Journey.
                  </span>
                </h3>

                <p className="text-lg text-[var(--foreground-muted)] font-light leading-relaxed mb-8">
                  From visual communication to complex system architecture. Here
                  is how I evolved into a Full Stack Engineer.
                </p>

                {/* Decorative Tech Stack Dots */}
                <div className="flex gap-3">
                  {[
                    "bg-blue-500",
                    "bg-yellow-400",
                    "bg-cyan-400",
                    "bg-green-500",
                  ].map((color, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${color} opacity-50`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Timeline */}
          <div className="lg:w-2/3 relative pl-8 md:pl-12">
            {/* The Vertical Line */}
            <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-[var(--border-color)]">
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-[var(--primary)] via-[var(--accent-blue)] to-transparent"
                variants={lineVariants}
                initial="hidden"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-100px" }}
              />
            </div>

            {/* Timeline Items */}
            <div className="flex flex-col gap-16 md:gap-24">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="whileInView"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {/* Glowing Node on the line */}
                  <div className="absolute -left-[39px] md:-left-[55px] top-1.5 flex items-center justify-center">
                    <div
                      className="absolute w-6 h-6 rounded-full animate-ping opacity-20"
                      style={{ backgroundColor: item.color }}
                    />
                    <div
                      className="w-4 h-4 rounded-full border-4 border-[var(--background)] shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>

                  {/* Content Card */}
                  <div className="group">
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="text-sm font-mono text-[var(--foreground-muted)] opacity-50">
                        {item.id} —
                      </span>
                      <span
                        className="text-sm font-semibold tracking-wider uppercase"
                        style={{ color: item.color }}
                      >
                        {item.phase}
                      </span>
                    </div>

                    <h4 className="text-3xl font-bold text-[var(--foreground)] mb-6 group-hover:translate-x-2 transition-transform duration-300">
                      {item.title}
                    </h4>

                    <div className="p-6 md:p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)]/30 backdrop-blur-md hover:bg-[var(--card-bg)]/60 transition-colors duration-300">
                      <p className="text-lg text-[var(--foreground-muted)] font-light leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
