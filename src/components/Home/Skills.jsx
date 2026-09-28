// // // "use client";

// // // import { motion } from "framer-motion";

// // // const Skills = () => {
// // //   // --- DATA STRUCTURE ---
// // //   const skillCategories = [
// // //     {
// // //       title: "Frontend",
// // //       color: "var(--primary)",
// // //       icon: (
// // //         <path
// // //           strokeLinecap="round"
// // //           strokeLinejoin="round"
// // //           strokeWidth={1.5}
// // //           d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
// // //         />
// // //       ),
// // //       skills: [
// // //         { name: "HTML & CSS", value: 95 },
// // //         { name: "JavaScript", value: 90 },
// // //         { name: "React", value: 88 },
// // //         { name: "Next.js", value: 85 },
// // //       ],
// // //     },
// // //     {
// // //       title: "Backend",
// // //       color: "var(--accent-blue)",
// // //       icon: (
// // //         <path
// // //           strokeLinecap="round"
// // //           strokeLinejoin="round"
// // //           strokeWidth={1.5}
// // //           d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
// // //         />
// // //       ),
// // //       skills: [
// // //         { name: "Node.js", value: 85 },
// // //         { name: "Express.js", value: 82 },
// // //         { name: "REST APIs", value: 88 },
// // //         { name: "MERN Stack", value: 84 },
// // //       ],
// // //     },
// // //     {
// // //       title: "Databases",
// // //       color: "rgb(52 211 153)", // emerald-400
// // //       icon: (
// // //         <path
// // //           strokeLinecap="round"
// // //           strokeLinejoin="round"
// // //           strokeWidth={1.5}
// // //           d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
// // //         />
// // //       ),
// // //       skills: [
// // //         { name: "MongoDB", value: 85 },
// // //         { name: "SQL", value: 78 },
// // //         { name: "Firebase", value: 80 },
// // //       ],
// // //     },
// // //     {
// // //       title: "Design",
// // //       color: "rgb(250 204 21)", // yellow-400
// // //       icon: (
// // //         <path
// // //           strokeLinecap="round"
// // //           strokeLinejoin="round"
// // //           strokeWidth={1.5}
// // //           d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
// // //         />
// // //       ),
// // //       skills: [
// // //         { name: "Adobe Photoshop", value: 90 },
// // //         { name: "Adobe Illustrator", value: 85 },
// // //         { name: "UI/UX Design", value: 82 },
// // //       ],
// // //     },
// // //   ];

// // //   // --- ANIMATION VARIANTS ---
// // //   const containerVariants = {
// // //     hidden: { opacity: 0 },
// // //     whileInView: {
// // //       opacity: 1,
// // //       transition: { staggerChildren: 0.15 },
// // //     },
// // //   };

// // //   const cardVariants = {
// // //     hidden: { opacity: 0, y: 30 },
// // //     whileInView: {
// // //       opacity: 1,
// // //       y: 0,
// // //       transition: { duration: 0.6, ease: "easeOut" },
// // //     },
// // //   };

// // //   return (
// // //     <section
// // //       id="skills"
// // //       className="relative w-full py-24 bg-[var(--background)] overflow-hidden"
// // //     >
// // //       {/* Background Glow */}
// // //       <div className="absolute right-[10%] top-[20%] w-[30vw] h-[30vw] rounded-full bg-[var(--accent-blue)]/5 blur-[120px] pointer-events-none" />

// // //       <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
// // //         {/* Section Header */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true, margin: "-100px" }}
// // //           transition={{ duration: 0.6 }}
// // //           className="mb-16 md:mb-20"
// // //         >
// // //           <div className="flex items-center gap-3 mb-4">
// // //             <div className="h-[2px] w-8 bg-[var(--primary)]" />
// // //             <h2 className="text-sm font-mono tracking-widest text-[var(--primary)] uppercase">
// // //               Skills
// // //             </h2>
// // //           </div>
// // //           <h3 className="text-4xl md:text-5xl font-black text-[var(--foreground)] tracking-tight">
// // //             Tech Stack & Expertise.
// // //           </h3>
// // //         </motion.div>

// // //         {/* Skills Grid */}
// // //         <motion.div
// // //           variants={containerVariants}
// // //           initial="hidden"
// // //           whileInView="whileInView"
// // //           viewport={{ once: true, margin: "-100px" }}
// // //           className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
// // //         >
// // //           {skillCategories.map((category, index) => (
// // //             <motion.div
// // //               key={index}
// // //               variants={cardVariants}
// // //               className="p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)]/30 backdrop-blur-md hover:bg-[var(--card-bg)]/50 transition-colors duration-300 group"
// // //             >
// // //               {/* Category Header */}
// // //               <div className="flex items-center gap-4 mb-8">
// // //                 <div
// // //                   className="w-12 h-12 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110"
// // //                   style={{
// // //                     borderColor: `${category.color}30`,
// // //                     backgroundColor: `${category.color}10`,
// // //                   }}
// // //                 >
// // //                   <svg
// // //                     className="w-6 h-6"
// // //                     style={{ color: category.color }}
// // //                     fill="none"
// // //                     stroke="currentColor"
// // //                     viewBox="0 0 24 24"
// // //                   >
// // //                     {category.icon}
// // //                   </svg>
// // //                 </div>
// // //                 <h4 className="text-2xl font-bold text-[var(--foreground)]">
// // //                   {category.title}
// // //                 </h4>
// // //               </div>

// // //               {/* Progress Bars */}
// // //               <div className="space-y-6">
// // //                 {category.skills.map((skill, skillIdx) => (
// // //                   <div key={skillIdx} className="w-full">
// // //                     <div className="flex justify-between items-center mb-2">
// // //                       <span className="text-base font-medium text-[var(--foreground-muted)] group-hover:text-[var(--foreground)] transition-colors">
// // //                         {skill.name}
// // //                       </span>
// // //                       <span className="text-sm font-mono text-[var(--foreground-muted)]">
// // //                         {skill.value}%
// // //                       </span>
// // //                     </div>

// // //                     {/* Progress Bar Track */}
// // //                     <div className="h-2.5 w-full bg-[var(--background)] rounded-full overflow-hidden border border-[var(--border-color)]/50">
// // //                       {/* Animated Fill */}
// // //                       <motion.div
// // //                         className="h-full rounded-full relative"
// // //                         style={{ backgroundColor: category.color }}
// // //                         initial={{ width: 0 }}
// // //                         whileInView={{ width: `${skill.value}%` }}
// // //                         viewport={{ once: true, margin: "-100px" }}
// // //                         transition={{
// // //                           duration: 1.2,
// // //                           ease: [0.16, 1, 0.3, 1],
// // //                           delay: 0.1 + skillIdx * 0.1, // Stagger the bars slightly
// // //                         }}
// // //                       >
// // //                         {/* Shimmer effect inside the bar */}
// // //                         <div
// // //                           className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]"
// // //                           style={{ transform: "translateX(-100%)" }}
// // //                         />
// // //                       </motion.div>
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </motion.div>
// // //       </div>

// // //       {/* Global style for the shimmer animation inside the progress bars */}
// // //       <style flex global>{`
// // //         @keyframes shimmer {
// // //           100% { transform: translateX(100%); }
// // //         }
// // //       `}</style>
// // //     </section>
// // //   );
// // // };

// // // export default Skills;

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
// // //
// // //

// // "use client";

// // import { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";

// // const Skills = () => {
// //   const [activeTab, setActiveTab] = useState(0);

// //   // --- DATA STRUCTURE ---
// //   const skillCategories = [
// //     {
// //       id: "frontend",
// //       title: "Frontend",
// //       color: "var(--primary)",
// //       skills: [
// //         { name: "HTML & CSS", value: 95 },
// //         { name: "JavaScript", value: 90 },
// //         { name: "React", value: 88 },
// //         { name: "Next.js", value: 85 },
// //       ],
// //     },
// //     {
// //       id: "backend",
// //       title: "Backend",
// //       color: "var(--accent-blue)",
// //       skills: [
// //         { name: "Node.js", value: 85 },
// //         { name: "Express.js", value: 82 },
// //         { name: "REST APIs", value: 88 },
// //         { name: "MERN Stack", value: 84 },
// //       ],
// //     },
// //     {
// //       id: "databases",
// //       title: "Databases",
// //       color: "rgb(52 211 153)", // emerald-400
// //       skills: [
// //         { name: "MongoDB", value: 85 },
// //         { name: "SQL", value: 78 },
// //         { name: "Firebase", value: 80 },
// //       ],
// //     },
// //     {
// //       id: "design",
// //       title: "Design",
// //       color: "rgb(250 204 21)", // yellow-400
// //       skills: [
// //         { name: "Adobe Photoshop", value: 90 },
// //         { name: "Adobe Illustrator", value: 85 },
// //         { name: "UI/UX Design", value: 82 },
// //       ],
// //     },
// //   ];

// //   // Radial Circle Math
// //   const circleRadius = 40;
// //   const circleCircumference = 2 * Math.PI * circleRadius;

// //   return (
// //     <section
// //       id="skills"
// //       className="relative w-full py-24 md:py-32 bg-[var(--background)] overflow-hidden"
// //     >
// //       {/* Tech-inspired background grid */}
// //       <div
// //         className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
// //         style={{
// //           backgroundImage:
// //             "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
// //           backgroundSize: "50px 50px",
// //         }}
// //       />

// //       <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
// //         {/* Section Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           className="mb-16 md:mb-24"
// //         >
// //           <div className="flex items-center gap-3 mb-4">
// //             <div className="h-[2px] w-8 bg-[var(--primary)]" />
// //             <h2 className="text-sm font-mono tracking-widest text-[var(--primary)] uppercase">
// //               Capabilities
// //             </h2>
// //           </div>
// //           <h3 className="text-4xl md:text-6xl font-black text-[var(--foreground)] tracking-tight">
// //             Tech Stack & Expertise.
// //           </h3>
// //         </motion.div>

// //         <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 min-h-[400px]">
// //           {/* LEFT COLUMN: Interactive Navigation */}
// //           <div className="w-full lg:w-1/3 flex flex-col gap-4">
// //             {skillCategories.map((category, index) => {
// //               const isActive = activeTab === index;
// //               return (
// //                 <button
// //                   key={category.id}
// //                   onClick={() => setActiveTab(index)}
// //                   className="group relative flex items-center justify-between w-full p-6 text-left rounded-2xl border border-transparent transition-all duration-300"
// //                 >
// //                   {/* Active Background & Border */}
// //                   {isActive && (
// //                     <motion.div
// //                       layoutId="activeTabGlow"
// //                       className="absolute inset-0 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)]/40 backdrop-blur-md shadow-lg"
// //                       initial={false}
// //                       transition={{
// //                         type: "spring",
// //                         stiffness: 300,
// //                         damping: 30,
// //                       }}
// //                     />
// //                   )}

// //                   {/* Button Content */}
// //                   <span
// //                     className={`relative z-10 text-2xl md:text-3xl font-bold transition-colors duration-300 ${
// //                       isActive
// //                         ? "text-[var(--foreground)]"
// //                         : "text-[var(--foreground-muted)] group-hover:text-[var(--foreground)]"
// //                     }`}
// //                   >
// //                     {category.title}
// //                   </span>

// //                   {/* Active Indicator Arrow */}
// //                   <motion.div
// //                     animate={{
// //                       x: isActive ? 0 : -10,
// //                       opacity: isActive ? 1 : 0,
// //                     }}
// //                     className="relative z-10"
// //                     style={{ color: category.color }}
// //                   >
// //                     <svg
// //                       className="w-6 h-6"
// //                       fill="none"
// //                       stroke="currentColor"
// //                       viewBox="0 0 24 24"
// //                     >
// //                       <path
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                         strokeWidth={2}
// //                         d="M17 8l4 4m0 0l-4 4m4-4H3"
// //                       />
// //                     </svg>
// //                   </motion.div>
// //                 </button>
// //               );
// //             })}
// //           </div>

// //           {/* RIGHT COLUMN: Dynamic Radial Progress Display */}
// //           <div className="w-full lg:w-2/3 relative flex items-center">
// //             <AnimatePresence mode="wait">
// //               <motion.div
// //                 key={activeTab}
// //                 initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
// //                 animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
// //                 exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
// //                 transition={{ duration: 0.4, ease: "easeInOut" }}
// //                 className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8"
// //               >
// //                 {skillCategories[activeTab].skills.map((skill, index) => (
// //                   <div
// //                     key={skill.name}
// //                     className="flex flex-col items-center justify-center gap-4 group"
// //                   >
// //                     {/* Radial Chart Container */}
// //                     <div className="relative w-32 h-32 flex items-center justify-center">
// //                       {/* Background SVG Circle */}
// //                       <svg
// //                         className="absolute inset-0 w-full h-full -rotate-90 transform"
// //                         viewBox="0 0 100 100"
// //                       >
// //                         <circle
// //                           cx="50"
// //                           cy="50"
// //                           r={circleRadius}
// //                           fill="transparent"
// //                           stroke="var(--border-color)"
// //                           strokeWidth="6"
// //                           className="opacity-20"
// //                         />
// //                         {/* Animated Foreground SVG Circle */}
// //                         <motion.circle
// //                           cx="50"
// //                           cy="50"
// //                           r={circleRadius}
// //                           fill="transparent"
// //                           stroke={skillCategories[activeTab].color}
// //                           strokeWidth="6"
// //                           strokeLinecap="round"
// //                           strokeDasharray={circleCircumference}
// //                           initial={{ strokeDashoffset: circleCircumference }}
// //                           animate={{
// //                             strokeDashoffset:
// //                               circleCircumference -
// //                               (skill.value / 100) * circleCircumference,
// //                           }}
// //                           transition={{
// //                             duration: 1.5,
// //                             delay: index * 0.1,
// //                             ease: "easeOut",
// //                           }}
// //                           className="drop-shadow-md"
// //                         />
// //                       </svg>

// //                       {/* Inner Percentage Text */}
// //                       <div className="absolute inset-0 flex items-center justify-center flex-col">
// //                         <motion.span
// //                           initial={{ opacity: 0, scale: 0.5 }}
// //                           animate={{ opacity: 1, scale: 1 }}
// //                           transition={{ delay: 0.5 + index * 0.1 }}
// //                           className="text-2xl font-black text-[var(--foreground)] font-mono"
// //                         >
// //                           {skill.value}
// //                           <span className="text-sm text-[var(--foreground-muted)] ml-0.5">
// //                             %
// //                           </span>
// //                         </motion.span>
// //                       </div>
// //                     </div>

// //                     {/* Skill Label */}
// //                     <h5 className="text-center font-medium text-[var(--foreground-muted)] group-hover:text-[var(--foreground)] transition-colors">
// //                       {skill.name}
// //                     </h5>
// //                   </div>
// //                 ))}
// //               </motion.div>
// //             </AnimatePresence>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Skills;

// //
// //
// //
// //
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

// const Skills = () => {
//   // --- DATA STRUCTURE ---
//   const skillCategories = [
//     {
//       title: "Frontend Architecture",
//       color: "var(--primary)", // e.g., a vibrant blue/purple
//       bgGradient: "from-[var(--primary)]/20 to-transparent",
//       icon: (
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={1.5}
//           d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
//         />
//       ),
//       skills: [
//         { name: "HTML & CSS", value: 95 },
//         { name: "JavaScript", value: 90 },
//         { name: "React", value: 88 },
//         { name: "Next.js", value: 85 },
//       ],
//     },
//     {
//       title: "Backend Engineering",
//       color: "var(--accent-blue)",
//       bgGradient: "from-[var(--accent-blue)]/20 to-transparent",
//       icon: (
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={1.5}
//           d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
//         />
//       ),
//       skills: [
//         { name: "Node.js", value: 85 },
//         { name: "Express.js", value: 82 },
//         { name: "REST APIs", value: 88 },
//         { name: "MERN Stack", value: 84 },
//       ],
//     },
//     {
//       title: "Database Systems",
//       color: "rgb(52 211 153)", // emerald-400
//       bgGradient: "from-emerald-500/20 to-transparent",
//       icon: (
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={1.5}
//           d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
//         />
//       ),
//       skills: [
//         { name: "MongoDB", value: 85 },
//         { name: "SQL", value: 78 },
//         { name: "Firebase", value: 80 },
//       ],
//     },
//     {
//       title: "Visual Design",
//       color: "rgb(250 204 21)", // yellow-400
//       bgGradient: "from-yellow-500/20 to-transparent",
//       icon: (
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={1.5}
//           d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
//         />
//       ),
//       skills: [
//         { name: "Adobe Photoshop", value: 90 },
//         { name: "Adobe Illustrator", value: 85 },
//         { name: "UI/UX Design", value: 82 },
//       ],
//     },
//   ];

//   // --- ANIMATION VARIANTS ---
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     whileInView: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     whileInView: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       id="skills"
//       className="relative w-full py-32 bg-[var(--background)] overflow-hidden"
//     >
//       {/* Abstract Modern Background */}
//       <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
//         <div className="w-full max-w-[1000px] h-full relative">
//           <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--primary)]/10 blur-[150px]" />
//           <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--accent-blue)]/10 blur-[150px]" />
//         </div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
//         {/* Minimalist Section Header */}
//         <motion.div
//           initial={{ opacity: 0, filter: "blur(10px)" }}
//           whileInView={{ opacity: 1, filter: "blur(0px)" }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8 }}
//           className="mb-20 text-center flex flex-col items-center"
//         >
//           <div className="inline-flex items-center px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)]/50 backdrop-blur-md mb-6">
//             <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-2 animate-pulse" />
//             <span className="text-xs font-mono font-medium text-[var(--foreground)] tracking-widest uppercase">
//               System Capabilities
//             </span>
//           </div>
//           <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--foreground)] tracking-tighter mb-4">
//             Tech Stack & Expertise
//           </h3>
//           <p className="text-lg text-[var(--foreground-muted)] font-light max-w-2xl">
//             A comprehensive breakdown of the tools and technologies I use to
//             build robust, scalable, and beautifully designed digital products.
//           </p>
//         </motion.div>

//         {/* Modern Grid Layout */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="whileInView"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-8"
//         >
//           {skillCategories.map((category, idx) => (
//             <motion.div
//               key={idx}
//               variants={itemVariants}
//               className="group relative flex flex-col p-8 md:p-10 rounded-[2rem] border border-[var(--border-color)] bg-[var(--card-bg)]/40 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[var(--border-color)]/80 hover:shadow-2xl"
//             >
//               {/* Subtle Animated Background Gradient on Hover */}
//               <div
//                 className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
//               />

//               {/* Category Header */}
//               <div className="relative z-10 flex items-center gap-5 mb-10">
//                 <div
//                   className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/5 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
//                   style={{
//                     backgroundColor: `${category.color}15`,
//                     color: category.color,
//                   }}
//                 >
//                   <svg
//                     className="w-7 h-7"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     {category.icon}
//                   </svg>
//                 </div>
//                 <h4 className="text-2xl font-bold text-[var(--foreground)] tracking-tight">
//                   {category.title}
//                 </h4>
//               </div>

//               {/* "Fill Pill" Skill Bars */}
//               <div className="relative z-10 flex flex-col gap-4">
//                 {category.skills.map((skill, skillIdx) => (
//                   <div
//                     key={skillIdx}
//                     className="relative w-full h-14 rounded-xl border border-[var(--border-color)]/50 bg-[var(--background)]/50 overflow-hidden flex items-center px-5 group/pill hover:border-[var(--border-color)] transition-colors duration-300"
//                   >
//                     {/* Animated Fill Background */}
//                     <motion.div
//                       className="absolute left-0 top-0 bottom-0 opacity-20"
//                       style={{ backgroundColor: category.color }}
//                       initial={{ width: 0 }}
//                       whileInView={{ width: `${skill.value}%` }}
//                       viewport={{ once: true, margin: "-100px" }}
//                       transition={{
//                         duration: 1.2,
//                         ease: [0.16, 1, 0.3, 1],
//                         delay: 0.2 + skillIdx * 0.1,
//                       }}
//                     />

//                     {/* Skill Name */}
//                     <span className="relative z-10 text-[var(--foreground)] font-medium text-base">
//                       {skill.name}
//                     </span>

//                     {/* Glowing Percentage */}
//                     <motion.span
//                       initial={{ opacity: 0 }}
//                       whileInView={{ opacity: 1 }}
//                       transition={{ delay: 1 + skillIdx * 0.1 }}
//                       className="relative z-10 ml-auto font-mono text-lg font-semibold"
//                       style={{ color: category.color }}
//                     >
//                       {skill.value}%
//                     </motion.span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

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
//
//
//
//
//
//
//
///

"use client";

import { motion } from "framer-motion";

const Skills = () => {
  // --- DATA STRUCTURE ---
  const skillCategories = [
    {
      title: "Frontend",
      color: "var(--primary)",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      ),
      skills: [
        { name: "HTML & CSS", value: 95 },
        { name: "JavaScript", value: 90 },
        { name: "React", value: 88 },
        { name: "Next.js", value: 85 },
      ],
    },
    {
      title: "Backend",
      color: "var(--accent-blue)",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      ),
      skills: [
        { name: "Node.js", value: 85 },
        { name: "Express.js", value: 82 },
        { name: "REST APIs", value: 88 },
        { name: "MERN Stack", value: 84 },
      ],
    },
    {
      title: "Databases",
      color: "rgb(52 211 153)", // emerald-400
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      ),
      skills: [
        { name: "MongoDB", value: 85 },
        { name: "SQL", value: 78 },
        { name: "Firebase", value: 80 },
      ],
    },
    {
      title: "Design",
      color: "rgb(250 204 21)", // yellow-400
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      ),
      skills: [
        { name: "Adobe Photoshop", value: 90 },
        { name: "Adobe Illustrator", value: 85 },
        { name: "UI/UX Design", value: 82 },
      ],
    },
  ];

  // Helper component to render the segmented blocks
  const SegmentedMeter = ({ percentage, color }) => {
    const totalBlocks = 20; // 5% per block
    const activeBlocks = Math.round(percentage / 5);

    return (
      <div className="flex gap-[3px] items-center h-4">
        {Array.from({ length: totalBlocks }).map((_, i) => {
          const isActive = i < activeBlocks;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scaleY: 0.5 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2, delay: i * 0.03 }}
              className={`w-1.5 h-full rounded-sm ${
                isActive ? "shadow-[0_0_8px_currentColor]" : "opacity-20"
              }`}
              style={{
                backgroundColor: isActive ? color : "var(--border-color)",
                color: isActive ? color : "transparent",
              }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="relative w-full py-28 bg-[var(--background)] overflow-hidden font-sans"
    >
      {/* Technical Background Blueprint */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(var(--border-color) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "linear-gradient(to bottom, black 40%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Dashboard-style Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--border-color)] pb-6 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[var(--primary)] text-sm uppercase tracking-widest">
              <span className="w-2 h-2 bg-[var(--primary)] animate-pulse" />
              <span>System.Diagnostics // Skills</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-[var(--foreground)] tracking-tighter">
              Tech Stack & Expertise.
            </h3>
          </div>
          <div className="font-mono text-sm text-[var(--foreground-muted)] opacity-60 text-right hidden md:block">
            <p>DATA_STREAM: ACTIVE</p>
            <p>MODULES: 04</p>
          </div>
        </motion.div>

        {/* Modular Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-[var(--card-bg)]/20 backdrop-blur-sm border border-[var(--border-color)] rounded-xl p-6 md:p-8 hover:bg-[var(--card-bg)]/40 transition-colors duration-300"
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 ease-in-out rounded-t-xl"
                style={{ backgroundColor: category.color }}
              />

              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-lg border bg-[var(--background)]"
                  style={{
                    borderColor: `${category.color}40`,
                    color: category.color,
                  }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {category.icon}
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-[var(--foreground)] font-mono tracking-tight">
                  {"{"} {category.title} {"}"}
                </h4>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    {/* Skill Label & Percentage */}
                    <div className="flex items-center justify-between sm:w-1/3 pr-4">
                      <span className="text-[var(--foreground)] font-medium">
                        {skill.name}
                      </span>
                      <span
                        className="font-mono text-sm"
                        style={{ color: category.color }}
                      >
                        {skill.value}%
                      </span>
                    </div>

                    {/* Segmented Progress Meter */}
                    <div className="sm:w-2/3 flex sm:justify-end">
                      <SegmentedMeter
                        percentage={skill.value}
                        color={category.color}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
