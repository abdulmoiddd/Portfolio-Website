//
//
//
// First

// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";

// const Projects = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   // --- PROJECT DATA ---
//   const projects = [
//     {
//       id: "01",
//       title: "Aicyro Platform",
//       type: "Web Application",
//       description:
//         "The core web ecosystem and front-end architecture for Aicyro. Built with a heavy focus on technical SEO, blazing-fast performance, and a seamless, modern user experience.",
//       techStack: ["Next.js", "React", "Firebase", "Tailwind CSS"],
//       links: { github: "#", live: "https://aicyro.com" },
//       image: "https://dummyimages.netlify.app/Mysite/Aicyro.jpg",
//     },

//     {
//       id: "02",
//       title: "Muhammad Hub",
//       type: "Personal Portfolio",
//       description:
//         "A personal web platform or portfolio hosted on Netlify under the name 'Muhammad Hub'. Currently, the site displays minimal text or relies on client-side rendering for its core content.",
//       techStack: ["Next.js", "React", "Firebase", "Tailwind CSS"],
//       links: { github: "#", live: "https://muhammadhub.netlify.app/" },
//       image: "https://dummyimages.netlify.app/Mysite/muhamadhub.jpg", // Your custom image
//     },

//     {
//       id: "03",
//       title: "Mark Vision",
//       type: "Corporate Website",
//       description:
//         "The official website for Mark Vision, an ISO-certified firm established in 2018 based in Islamabad, Pakistan. The company specializes in ICT, general order supplies, medical and laboratory equipment, and industrial solutions like incinerators and laundry systems.",
//       techStack: ["HTML", "CSS", "JavaScript"],
//       links: { github: "#", live: "https://markvision.org/" },
//       image: "https://dummyimages.netlify.app/Mysite/Markvision.jpg", // Your custom image
//     },

//     {
//       id: "04",
//       title: "BrightSmile AI",
//       type: "AI Chatbot Web Application",
//       description:
//         "An AI-powered virtual dental assistant and healthcare chatbot application. Powered by a Gemini LLM API, it handles patient communication, routine checkup scheduling, and addresses dental inquiries like teeth whitening and tooth pain with a focus on secure, HIPAA-compliant interactions.",
//       techStack: [
//         "React",
//         "JavaScript",
//         "Tailwind CSS",
//         "Gemini API",
//         "Netlify",
//       ],
//       links: { github: "#", live: "https://dentalbott.netlify.app/" },
//       image: "https://dummyimages.netlify.app/Mysite/brightsmile.jpg", // Your custom image
//     },

//     {
//       id: "05",
//       title: "UDRA",
//       type: "Corporate Website",
//       description:
//         "The official web presence for UDRA, a leading debt collection and corporate risk management agency based in Pakistan. The site provides details on their 'No Recovery -- No Fee' methodology, services, and operational processes.",
//       techStack: ["HTML", "CSS", "JavaScript", "Netlify"],
//       links: { github: "#", live: "https://udra.netlify.app/" },
//       image: "https://dummyimages.netlify.app/Mysite/UDRA.jpg", // Your custom image
//     },
//   ];

//   return (
//     <section
//       id="portfolio"
//       className="relative w-full py-32 bg-[var(--background)] min-h-screen"
//     >
//       <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
//         {/* Minimalist Header */}
//         <div className="mb-20">
//           <div className="flex items-center gap-3 mb-4">
//             <div className="h-[2px] w-8 bg-[var(--primary)]" />
//             <h2 className="text-sm font-mono tracking-widest text-[var(--primary)] uppercase">
//               Index
//             </h2>
//           </div>
//           <h3 className="text-5xl md:text-7xl font-black text-[var(--foreground)] tracking-tighter">
//             Selected Works.
//           </h3>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
//           {/* LEFT COLUMN: Interactive Accordion List */}
//           <div className="w-full lg:w-1/2 flex flex-col border-t border-[var(--border-color)]">
//             {projects.map((project, index) => {
//               const isActive = activeIndex === index;

//               return (
//                 <div
//                   key={project.id}
//                   onMouseEnter={() => setActiveIndex(index)}
//                   className={`group relative py-8 border-b border-[var(--border-color)] transition-opacity duration-300 ${
//                     isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
//                   }`}
//                 >
//                   {/* Row Header */}
//                   <div className="flex items-center justify-between cursor-pointer">
//                     <h4 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] tracking-tight transition-transform duration-300 group-hover:translate-x-2">
//                       {project.title}
//                     </h4>
//                     <span className="text-sm font-mono text-[var(--foreground-muted)] hidden md:block">
//                       {project.id} {"//"} {project.type}
//                     </span>
//                   </div>

//                   {/* Expandable Content Area */}
//                   <AnimatePresence>
//                     {isActive && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
//                         className="overflow-hidden"
//                       >
//                         <div className="pt-8 pb-4 pr-4 md:pr-12">
//                           <p className="text-lg text-[var(--foreground-muted)] font-light leading-relaxed mb-8">
//                             {project.description}
//                           </p>

//                           <div className="flex flex-wrap gap-3 mb-8">
//                             {project.techStack.map((tech, i) => (
//                               <span
//                                 key={i}
//                                 className="text-sm font-mono text-[var(--foreground)] bg-[var(--card-bg)] px-3 py-1.5 rounded-md border border-[var(--border-color)]"
//                               >
//                                 {tech}
//                               </span>
//                             ))}
//                           </div>

//                           <div className="flex items-center gap-6">
//                             <Link
//                               href={project.links.live}
//                               target="_blank"
//                               className="text-[var(--primary)] font-semibold hover:underline underline-offset-4 flex items-center gap-2"
//                             >
//                               Launch Deployment
//                               <svg
//                                 className="w-4 h-4"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth={2}
//                                   d="M14 5l7 7m0 0l-7 7m7-7H3"
//                                 />
//                               </svg>
//                             </Link>
//                             <Link
//                               href={project.links.github}
//                               target="_blank"
//                               className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors flex items-center gap-2 text-sm font-medium"
//                             >
//                               <svg
//                                 className="w-5 h-5"
//                                 fill="currentColor"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <path
//                                   fillRule="evenodd"
//                                   clipRule="evenodd"
//                                   d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
//                                 />
//                               </svg>
//                               Repository
//                             </Link>
//                           </div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               );
//             })}
//           </div>

//           {/* RIGHT COLUMN: Sticky Dual-Device Mockup */}
//           <div className="hidden lg:block lg:w-1/2">
//             <div className="sticky top-32 w-full aspect-[4/3] rounded-3xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--card-bg)] to-[var(--background)] shadow-2xl overflow-hidden p-8 relative">
//               {/* Subtle ambient backdrop glow */}
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[var(--primary)]/10 blur-[80px] rounded-full pointer-events-none" />

//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeIndex}
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -15 }}
//                   transition={{ duration: 0.5, ease: "easeOut" }}
//                   className="w-full h-full relative group cursor-pointer"
//                 >
//                   {/* === DESKTOP BROWSER MOCKUP === */}
//                   <div className="absolute top-[8%] left-[5%] w-[85%] h-[80%] rounded-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] bg-[var(--background)] overflow-hidden transition-transform duration-700 ease-out group-hover:-translate-y-3 z-10">
//                     {/* Minimalist Safari-style Header */}
//                     <div className="h-8 bg-[#1a1b1e] border-b border-white/5 flex items-center px-4 justify-between">
//                       <div className="flex gap-1.5">
//                         <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
//                         <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
//                         <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
//                       </div>
//                       <div className="w-1/3 h-4 bg-white/5 rounded-md flex items-center justify-center">
//                         <span className="text-[8px] text-white/30 font-mono tracking-widest uppercase">
//                           aicyro.com
//                         </span>
//                       </div>
//                       <div className="w-10" /> {/* Spacer for balance */}
//                     </div>

//                     {/* Desktop Image */}
//                     <div className="relative w-full h-[calc(100%-2rem)] grayscale group-hover:grayscale-0 transition-all duration-300">
//                       <Image
//                         src={projects[activeIndex].image}
//                         alt={`${projects[activeIndex].title} Desktop`}
//                         fill
//                         className="object-cover object-top"
//                         sizes="(max-width: 1024px) 100vw, 50vw"
//                         priority
//                       />
//                       <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
//                     </div>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

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
//
//
//
//Full Page
//
// Second
//
// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const Projects = () => {
//   // --- PROJECT DATA ---
//   const projects = [
//     {
//       id: "01",
//       title: "Aicyro Platform",
//       type: "Web Application",
//       description:
//         "The core web ecosystem and front-end architecture for Aicyro. Built with a heavy focus on technical SEO, blazing-fast performance, and a seamless, modern user experience.",
//       techStack: ["Next.js", "React", "Firebase", "Tailwind CSS"],
//       links: { github: "#", live: "https://aicyro.com" },
//       image: "https://dummyimages.netlify.app/Mysite/Aicyro.jpg",
//     },
//     {
//       id: "02",
//       title: "Muhammad Hub",
//       type: "Personal Portfolio",
//       description:
//         "A personal web platform or portfolio hosted on Netlify under the name 'Muhammad Hub'. Currently, the site displays minimal text or relies on client-side rendering for its core content.",
//       techStack: ["Next.js", "React", "Firebase"],
//       links: { github: "#", live: "https://muhammadhub.netlify.app/" },
//       image: "https://dummyimages.netlify.app/Mysite/muhamadhub.jpg",
//     },
//     {
//       id: "03",
//       title: "Mark Vision",
//       type: "Corporate Website",
//       description:
//         "The official website for Mark Vision, an ISO-certified firm established in 2018 based in Islamabad, Pakistan. Specializing in ICT and industrial solutions.",
//       techStack: ["HTML", "CSS", "JavaScript"],
//       links: { github: "#", live: "https://markvision.org/" },
//       image: "https://dummyimages.netlify.app/Mysite/Markvision.jpg",
//     },
//     {
//       id: "04",
//       title: "BrightSmile AI",
//       type: "AI Chatbot Web Application",
//       description:
//         "An AI-powered virtual dental assistant. Powered by a Gemini LLM API, it handles patient communication, routine checkup scheduling, and dental inquiries.",
//       techStack: ["React", "Tailwind", "Gemini API"],
//       links: { github: "#", live: "https://dentalbott.netlify.app/" },
//       image: "https://dummyimages.netlify.app/Mysite/brightsmile.jpg",
//     },
//     {
//       id: "05",
//       title: "UDRA",
//       type: "Corporate Website",
//       description:
//         "The official web presence for UDRA, a leading debt collection and corporate risk management agency based in Pakistan.",
//       techStack: ["HTML", "CSS", "JavaScript"],
//       links: { github: "#", live: "https://udra.netlify.app/" },
//       image: "https://dummyimages.netlify.app/Mysite/UDRA.jpg",
//     },
//   ];

//   // --- ANIMATION VARIANTS ---
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     whileInView: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 40 },
//     whileInView: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
//     },
//   };

//   return (
//     <section
//       id="portfolio"
//       className="relative w-full py-32 bg-[var(--background)] min-h-screen"
//     >
//       <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
//         {/* Minimalist Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="mb-16 md:mb-24"
//         >
//           <div className="flex items-center gap-3 mb-4">
//             <div className="h-[2px] w-8 bg-[var(--primary)]" />
//             <h2 className="text-sm font-mono tracking-widest text-[var(--primary)] uppercase">
//               Portfolio
//             </h2>
//           </div>
//           <h3 className="text-5xl md:text-7xl font-black text-[var(--foreground)] tracking-tighter">
//             Selected Works.
//           </h3>
//         </motion.div>

//         {/* Cinematic Bento Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="whileInView"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
//         >
//           {projects.map((project, index) => {
//             // Make the very first project span both columns for a "Hero" layout
//             const isFeatured = index === 0;

//             return (
//               <motion.div
//                 key={project.id}
//                 variants={cardVariants}
//                 className={`group relative overflow-hidden rounded-[2.5rem] bg-[var(--card-bg)] border border-[var(--border-color)] shadow-2xl ${
//                   isFeatured
//                     ? "md:col-span-2 h-[600px] lg:h-[700px]"
//                     : "col-span-1 h-[500px] lg:h-[600px]"
//                 }`}
//               >
//                 {/* BACKGROUND IMAGE
//                   No transitions applied here per your request, ensuring an instant,
//                   hardware-level snap from grayscale to full color on hover.
//                 */}
//                 <div className="absolute inset-0 z-0 grayscale group-hover:grayscale-0">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     fill
//                     className="object-cover object-top"
//                     sizes={
//                       isFeatured ? "100vw" : "(max-width: 768px) 100vw, 50vw"
//                     }
//                     priority={isFeatured}
//                   />
//                 </div>

//                 {/* Dark Gradient Overlay for Text Readability */}
//                 <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

//                 {/* Floating Top Badge */}
//                 <div className="absolute top-8 left-8 z-20">
//                   <span className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-semibold tracking-widest uppercase text-white shadow-lg">
//                     {project.type}
//                   </span>
//                 </div>

//                 {/* Card Content (Anchored to Bottom) */}
//                 <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 flex flex-col justify-end">
//                   <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
//                     {/* Left Side: Title & Description */}
//                     <div
//                       className={`flex flex-col ${isFeatured ? "md:w-2/3" : "w-full"}`}
//                     >
//                       <div className="flex flex-wrap gap-2 mb-4">
//                         {project.techStack.map((tech, i) => (
//                           <span
//                             key={i}
//                             className="text-xs font-mono text-white/80 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10"
//                           >
//                             {tech}
//                           </span>
//                         ))}
//                       </div>

//                       <h4 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight group-hover:text-[var(--primary)] transition-colors duration-300">
//                         {project.title}
//                       </h4>

//                       <p className="text-lg text-white/60 font-light leading-relaxed max-w-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
//                         {project.description}
//                       </p>
//                     </div>

//                     {/* Right Side: Action Buttons */}
//                     <div className="flex items-center gap-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 ease-out">
//                       <Link
//                         href={project.links.github}
//                         target="_blank"
//                         className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
//                         aria-label="View Source Code"
//                       >
//                         <svg
//                           className="w-5 h-5"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             clipRule="evenodd"
//                             d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
//                           />
//                         </svg>
//                       </Link>
//                       <Link
//                         href={project.links.live}
//                         target="_blank"
//                         className="px-6 py-3 rounded-full bg-[var(--primary)] text-white font-medium flex items-center gap-2 hover:bg-[var(--primary)]/80 transition-colors shadow-lg shadow-[var(--primary)]/30"
//                       >
//                         Visit Site
//                         <svg
//                           className="w-4 h-4"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M14 5l7 7m0 0l-7 7m7-7H3"
//                           />
//                         </svg>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
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

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Projects = () => {
  // --- PROJECT DATA ---
  const projects = [
    {
      id: "01",
      title: "Aicyro Platform",
      type: "Web Application",
      description:
        "The core web ecosystem and front-end architecture for Aicyro. Built with a heavy focus on technical SEO, blazing-fast performance, and a seamless, modern user experience.",
      techStack: ["Next.js", "React", "Firebase", "Tailwind CSS"],
      links: { github: "#", live: "https://aicyro.com" },
      image: "https://dummyimages.netlify.app/Mysite/Aicyro.jpg",
    },
    {
      id: "02",
      title: "Mark Vision",
      type: "Corporate Website",
      description:
        "The official website for Mark Vision, an ISO-certified firm established in 2018 based in Islamabad, Pakistan. The company specializes in ICT, general order supplies, medical and laboratory equipment, and industrial solutions like incinerators and laundry systems.",
      techStack: ["HTML", "CSS", "JavaScript"],
      links: { github: "#", live: "https://markvision.org/" },
      image: "https://dummyimages.netlify.app/Mysite/Markvision.jpg",
    },

    {
      id: "03",
      title: "Aicyro Shield",
      type: "Cybersecurity Platform",
      description:
        "An autonomous, full-spectrum security intelligence platform. It leverages AI and machine learning for continuous monitoring, anomaly detection, real-time risk scoring, and autonomous threat response across both digital and physical infrastructures.",
      techStack: ["Next.js", "React", "Tailwind CSS", "Machine Learning"],
      links: { github: "#", live: "https://aicyroshield.netlify.app/" },
      image: "https://dummyimages.netlify.app/Mysite/Aicyroshield.jpg",
    },

    {
      id: "04",
      title: "Muhammad Hub",
      type: "Personal Portfolio",
      description:
        "A personal web platform or portfolio hosted on Netlify under the name 'Muhammad Hub'. Currently, the site displays minimal text or relies on client-side rendering for its core content.",
      techStack: ["Next.js", "React", "Firebase", "Tailwind CSS"],
      links: { github: "#", live: "https://muhammadhub.netlify.app/" },
      image: "https://dummyimages.netlify.app/Mysite/muhamadhub.jpg",
    },

    {
      id: "05",
      title: "BrightSmile AI",
      type: "AI Chatbot Web Application",
      description:
        "An AI-powered virtual dental assistant and healthcare chatbot application. Powered by a Gemini LLM API, it handles patient communication, routine checkup scheduling, and addresses dental inquiries like teeth whitening and tooth pain with a focus on secure, HIPAA-compliant interactions.",
      techStack: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Gemini API",
        "Netlify",
      ],
      links: { github: "#", live: "https://dentalbott.netlify.app/" },
      image: "https://dummyimages.netlify.app/Mysite/brightsmile.jpg",
    },

    {
      id: "06",
      title: "UDRA",
      type: "Corporate Website",
      description:
        "The official web presence for UDRA, a leading debt collection and corporate risk management agency based in Pakistan. The site provides details on their 'No Recovery -- No Fee' methodology, services, and operational processes.",
      techStack: ["HTML", "CSS", "JavaScript", "Netlify"],
      links: { github: "#", live: "https://udra.netlify.app/" },
      image: "https://dummyimages.netlify.app/Mysite/UDRA.jpg",
    },
  ];

  // Split projects into two columns for the waterfall effect
  const leftColumnProjects = projects.filter((_, index) => index % 2 === 0);
  const rightColumnProjects = projects.filter((_, index) => index % 2 !== 0);

  // --- ANIMATION VARIANTS ---
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Reusable Project Card Component to keep JSX clean
  const ProjectCard = ({ project }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col gap-8 group w-full"
    >
      {/* 1. Image Container (Instant Grayscale Snap) */}
      <Link
        href={project.links.live}
        target="_blank"
        className="block relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[var(--border-color)] bg-[var(--card-bg)] shadow-lg"
      >
        {/* We specifically exclude transition classes from the grayscale element to ensure the instant snap */}
        <div className="absolute inset-0 grayscale group-hover:grayscale-0 w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={project.id === "01" || project.id === "02"}
          />
        </div>

        {/* Overlay "View Project" Pill that reveals on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
          <div className="px-6 py-3 rounded-full bg-black/60 backdrop-blur-md text-white font-medium flex items-center gap-2 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            Explore Project
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
          </div>
        </div>
      </Link>

      {/* 2. Content Container */}
      <div className="flex flex-col gap-5 px-2">
        {/* Title & ID Row */}
        <div className="flex items-end justify-between border-b border-[var(--border-color)] pb-5">
          <div>
            <span className="block text-sm font-mono tracking-widest text-[var(--primary)] uppercase mb-2">
              {project.type}
            </span>
            <h4 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] tracking-tight group-hover:text-[var(--primary)] transition-colors duration-300">
              {project.title}
            </h4>
          </div>
          <span className="text-4xl font-black font-mono text-[var(--foreground-muted)] opacity-30">
            {project.id}
          </span>
        </div>

        {/* Description */}
        <p className="text-[var(--foreground-muted)] text-lg leading-relaxed font-light">
          {project.description}
        </p>

        {/* Footer: Tech Stack & Repo Link */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 pt-4">
          <ul className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <li
                key={i}
                className="text-xs font-mono text-[var(--foreground)] bg-[var(--card-bg)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]"
              >
                {tech}
              </li>
            ))}
          </ul>

          <Link
            href={project.links.github}
            target="_blank"
            className="flex items-center gap-2 text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            Repository
          </Link>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="portfolio"
      className="relative w-full py-32 bg-[var(--background)] min-h-screen"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Editorial Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[var(--border-color)] pb-12"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-[var(--primary)]" />
              <h2 className="text-sm font-mono tracking-widest text-[var(--primary)] uppercase">
                Selected Works
              </h2>
            </div>
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-black text-[var(--foreground)] tracking-tighter leading-[0.9]">
              Featured <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
                Projects.
              </span>
            </h3>
          </div>

          <p className="text-lg text-[var(--foreground-muted)] font-light max-w-sm md:text-right">
            A curated collection of web applications, platforms, and AI
            integrations engineered for performance and scale.
          </p>
        </motion.div>

        {/* Asymmetrical Waterfall Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-24">
          {/* Left Column (Starts immediately) */}
          <div className="flex flex-col gap-24">
            {leftColumnProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Right Column (Staggered downwards on large screens) */}
          <div className="flex flex-col gap-24 lg:mt-48">
            {rightColumnProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
