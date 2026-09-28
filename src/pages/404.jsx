import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Essential/Navbar";
import Footer from "../components/Essential/Footer";

export default function Custom404() {
  // Animation variants for the terminal typing effect
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col font-sans overflow-hidden">
      <Head>
        <title>404 | Not Found - Abdul Moid</title>
        <meta name="description" content="Error 404: Page not found." />
      </Head>

      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-6 min-h-[80vh] relative">
        {/* Subtle Background Mesh */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(var(--foreground) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 w-full max-w-3xl rounded-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-[#0A0A0B] overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="flex items-center px-4 py-3 bg-[#151517] border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="mx-auto flex transform -translate-x-5 items-center gap-2 opacity-50">
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
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xs font-mono tracking-wider">
                bash -- root@abdulmoid: ~
              </span>
            </div>
          </div>

          {/* Terminal Body */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed"
          >
            {/* Command 1 */}
            <motion.div variants={lineVariants} className="mb-4">
              <span className="text-emerald-400">visitor@abdulmoid</span>
              <span className="text-white/50">:</span>
              <span className="text-blue-400">~/current_directory</span>
              <span className="text-white/50">$ </span>
              <span className="text-white">cat requested_page.html</span>
            </motion.div>

            {/* Error Output */}
            <motion.div variants={lineVariants} className="mb-6 text-red-400">
              cat: requested_page.html: No such file or directory
              <br />
              <span className="text-white/50">
                Error 404: The route you are looking for has been moved or
                dropped from the build.
              </span>
            </motion.div>

            {/* Diagnostics */}
            <motion.div variants={lineVariants} className="mb-6 opacity-60">
              {">"} Running system diagnostics...
              <br />
              {">"} Status: All core systems operational.
              <br />
              {">"} Recommendation: Navigate back to the root directory.
            </motion.div>

            {/* Interactive Command Prompt */}
            <motion.div
              variants={lineVariants}
              className="flex items-center mt-8 pt-4 border-t border-white/5"
            >
              <span className="text-emerald-400">visitor@abdulmoid</span>
              <span className="text-white/50">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-white/50 mr-2">$ </span>
              <Link
                href="/"
                className="group flex items-center gap-2 text-[var(--primary)] hover:text-white transition-colors"
              >
                <span>cd /home</span>
                <span className="w-2.5 h-5 bg-[var(--primary)] group-hover:bg-white animate-pulse" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
