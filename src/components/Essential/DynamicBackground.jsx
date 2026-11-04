"use client";

import { motion } from "framer-motion";

export default function DynamicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* 1. Subtle Radial Ambient Gradient Mesh */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(250, 204, 21, 0.12) 0%, transparent 45%), radial-gradient(circle at 85% 65%, rgba(245, 158, 11, 0.09) 0%, transparent 50%), radial-gradient(circle at 50% 90%, rgba(217, 119, 6, 0.07) 0%, transparent 45%)",
        }}
      />

      {/* 2. Slow-Moving Floating Warm Yellow Blobs */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.12, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 left-[10%] w-[45vw] h-[45vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-tr from-yellow-300/15 via-amber-400/10 to-transparent blur-[140px] pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, -50, 35, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.92, 1.08, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[45%] -right-28 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-bl from-amber-400/12 via-yellow-400/8 to-transparent blur-[150px] pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.05, 0.92, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute bottom-10 left-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-tr from-yellow-400/10 via-amber-500/8 to-transparent blur-[130px] pointer-events-none"
      />

      {/* 3. Subtle Technical Blueprint Grid Layer */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />
    </div>
  );
}
