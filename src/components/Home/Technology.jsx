"use client";

import { motion } from "framer-motion";

// Using the same tech icons from your Hero, plus a few extra relevant ones for a fuller marquee
const TECH_LIST = [
  {
    name: "OpenAI",
    svg: (
      <path fill="currentColor" d="M22.28 10.37a5.53 5.53 0 0 0-.44-4.27 5.68 5.68 0 0 0-5.18-2.92 5.58 5.58 0 0 0-2.45.57 5.6 5.6 0 0 0-4.14-1.85 5.68 5.68 0 0 0-5.46 4.07 5.54 5.54 0 0 0-3.3 2.4 5.65 5.65 0 0 0-.74 4.41 5.54 5.54 0 0 0 .44 4.27 5.68 5.68 0 0 0 5.18 2.92c.84 0 1.67-.2 2.45-.57a5.6 5.6 0 0 0 4.14 1.85 5.68 5.68 0 0 0 5.46-4.07 5.54 5.54 0 0 0 3.3-2.4 5.65 5.65 0 0 0 .74-4.41Zm-8.46 10.15a4.08 4.08 0 0 1-2.46-.82l.14-.08 4.2-2.43a.79.79 0 0 0 .4-.69v-5.94l1.79 1.03a.08.08 0 0 1 .04.07v4.83a4.11 4.11 0 0 1-4.11 4.03Zm-8.5-3.69a4.08 4.08 0 0 1-.54-2.54c0-.4.07-.8.2-1.18l.14.09 4.2 2.42a.8.8 0 0 0 .8 0l5.14-2.97v2.07a.08.08 0 0 1-.03.07l-4.19 2.42a4.11 4.11 0 0 1-5.72-.36Zm-1.4-8.8a4.07 4.07 0 0 1 1.92-1.72v.17l-.01 4.85a.8.8 0 0 0 .4.69l5.14 2.97-1.8 1.04a.08.08 0 0 1-.07 0l-4.19-2.42a4.11 4.11 0 0 1-1.39-5.58Zm14.67 2.6-5.14-2.97 1.8-1.04a.08.08 0 0 1 .07 0l4.19 2.42a4.1 4.1 0 0 1 1.92 3.86 4.08 4.08 0 0 1-.53 1.72v-.17l.01-4.85a.8.8 0 0 0-.4-.69l-1.92-1.11v2.83Zm2.28 4.77a4.08 4.08 0 0 1-.2 1.18l-.14-.09-4.2-2.42a.8.8 0 0 0-.8 0l-5.14 2.97V14.9a.08.08 0 0 1 .03-.07l4.19-2.42a4.11 4.11 0 0 1 6.26 3.9Zm-9.98-3.35-2.05-1.18 2.05-1.19 2.06 1.19-2.06 1.18Z" />
    ),
  },
  {
    name: "Next.js",
    svg: (
      <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm5.4 17.5-6.8-8.85v8.85H9V6.5h1.8l6.8 8.85V6.5h1.6v11h-1.8Z" />
    ),
  },
  {
    name: "React",
    svg: (
      <path fill="currentColor" d="M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0-7.5C6.5 2 2 4.7 2 8s4.5 6 10 6 10-2.7 10-6-4.5-6-10-6Zm0 10.5c-4.7 0-8.5-2-8.5-4.5S7.3 3.5 12 3.5s8.5 2 8.5 4.5-3.8 4.5-8.5 4.5Zm-8.7 4.1c-2.3 4-1.2 7.7 2.4 9.8 3.7 2.1 8.5.8 10.8-3.2 2.3-4 1.2-7.7-2.4-9.8-3.7-2.1-8.5-.8-10.8 3.2Zm1.5.8c1.9-3.4 5.9-4.5 9-2.7s3.8 5.7 1.9 9.1c-1.9 3.4-5.9 4.5-9 2.7-3.2-1.8-3.8-5.7-1.9-9.1Zm17.4-4.9c-2.3-4-7.1-5.3-10.8-3.2-3.7 2.1-4.8 5.8-2.4 9.8 2.3 4 7.1 5.3 10.8 3.2 3.6-2.1 4.7-5.8 2.4-9.8Zm-1.5.9c1.9 3.4 1.3 7.3-1.9 9.1-3.1 1.8-7.1.7-9-2.7-1.9-3.4-1.3-7.3 1.9-9.1 3.1-1.8 7.1-.7 9 2.7Z" />
    ),
  },
  {
    name: "Firebase",
    svg: (
      <path fill="currentColor" d="m4.2 17.8 2.5-15.6c.1-.4.5-.6.9-.4l3.7 7-7.1 9Zm8.2-5.4-3.1-6c-.2-.4-.8-.4-1 0L2.2 18.2l10.2-5.8Zm8.3 4.8L18.6 3.6c-.1-.5-.7-.6-1-.3L3.1 19.3l8.6 4.8c.6.3 1.3.3 1.9 0l7.1-4.9Z" />
    ),
  },
  {
    name: "Node.js",
    svg: (
      <path fill="currentColor" d="M12 2 3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2Zm-1 15.7-5.5-3.2v-6.3L11 5.1v12.6Zm2 0V5.1l5.5 3.1v6.3L13 17.7Z" />
    ),
  },
  {
    name: "Tailwind CSS",
    svg: (
      <path fill="currentColor" d="M12 6c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8C15 11.8 16.6 13.5 20.4 13.5c3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8C17.4 7.7 15.8 6 12 6ZM3.6 13.5c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8C6.6 19.3 8.2 21 12 21c3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8-1.3-1.3-2.9-3-6.7-3Z" />
    ),
  },
  {
    name: "AWS",
    svg: (
      <path fill="currentColor" d="M14.07 14.61a6.35 6.35 0 0 1-2.58.55c-2.31 0-3.66-1.37-3.66-3.83 0-2.76 1.69-4.14 4.2-4.14 1.15 0 2.21.36 2.92.83l.53-1.54a6.5 6.5 0 0 0-3.52-.89c-3.64 0-6.11 2.22-6.11 5.86 0 3.32 2.05 5.23 5.3 5.23 1.54 0 2.92-.5 3.73-1.07l-.81-1Zm8.32-8.73h-2.1l-1.9 6.27-2-6.27h-1.94l-2 6.27-1.8-6.27H8.6l2.64 8.78h2.06l2-6.07 2 6.07h2.06l2.76-8.78Zm2.6 5.81c0-2.3-.9-3.44-2.88-3.44-1.35 0-2.33.56-2.9 1.19l.73 1.48c.5-.54 1.1-.9 1.77-.9 1.05 0 1.34.6 1.34 1.37v.14c-.37-.15-1.05-.33-1.93-.33-1.8 0-3.23.78-3.23 2.5 0 1.5 1.08 2.45 2.55 2.45a3 3 0 0 0 2.49-1.21v1h1.96c-.05-.58-.08-1.42-.08-2.37v-1.9Zm-1.84 1.48c0 1-.84 1.6-1.78 1.6-1 0-1.4-.55-1.4-1.12 0-.8.74-1.22 1.95-1.22.47 0 .9.09 1.23.23v.51Zm-3.83 4.2c-5.4 1.83-11.83 2.08-17.1.66A19.98 19.98 0 0 0 13.92 21c3.15 0 6.1-.73 8.35-1.63l-2.86-2ZM23.4 18.6c.4-.3.92-1.01.62-1.5-.27-.47-1.02-.32-1.46-.14l-.06.03a16.27 16.27 0 0 1 2.39-1.94c.48-.3 1-.36 1.25.13.25.5-.05 1.15-.36 1.43l-.1.08c-.73.61-1.71 1.28-2.28 1.9Z"/>
    )
  },
  {
    name: "Make.com",
    svg: (
      <path fill="currentColor" d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm7.8 16.5L12 21.1l-7.8-4.6V7.5L12 2.9l7.8 4.6v9zM12 18.2l-5.3-3.1v-6.2L12 5.8l5.3 3.1v6.2L12 18.2zM9.5 9.7v4.6l2.5 1.4 2.5-1.4V9.7L12 8.3 9.5 9.7z"/>
    )
  }
];

// Duplicate the array to make the infinite loop perfectly seamless
const MARQUEE_ITEMS = [...TECH_LIST, ...TECH_LIST];

const Technology = () => {
  return (
    <section className="relative w-full py-12  overflow-hidden ">
      
      {/* Background Glow to tie it to the HUD aesthetic */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[var(--card-bg)] to-[var(--background)] opacity-50 pointer-events-none" /> */}


      {/* 
        The Mask: Fades out the left and right edges so icons don't just cut off sharply.
      */}
      <div 
        className="relative w-full overflow-hidden flex"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
        }}
      >
        <motion.div
          className="flex whitespace-nowrap gap-12 sm:gap-20 items-center px-6 py-2"
          // Animate from 0 to -50% because we duplicated the array. 
          // Once it hits -50%, it seamlessly jumps back to 0.
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25, // Adjust this to make it scroll faster or slower
            repeat: Infinity,
          }}
        >
          {MARQUEE_ITEMS.map((tech, idx) => (
            <div 
              key={`${tech.name}-${idx}`} 
              className="group flex items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--foreground-muted)] group-hover:text-[var(--primary)] transition-colors duration-300">
                <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-md">
                  {tech.svg}
                </svg>
              </div>
              <span className="font-mono text-sm sm:text-base font-bold text-[var(--foreground-muted)] group-hover:text-[var(--foreground)] transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default Technology;