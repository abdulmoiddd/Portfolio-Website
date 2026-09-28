"use client";

import { motion } from "framer-motion";

const Services = () => {
  // --- SERVICES DATA ---
  const services = [
    {
      id: "01",
      title: "Full-Stack Web Architecture",
      description:
        "Building scalable, high-performance web applications from the ground up. Handling everything from complex database schemas to responsive, interactive user interfaces.",
      features: [
        "Next.js & React",
        "Node.js / Express",
        "MongoDB & Firebase",
        "API Integration",
      ],
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      ),
      color: "var(--primary)",
    },
    {
      id: "02",
      title: "UI/UX & Visual Design",
      description:
        "Translating brand identities into pixel-perfect digital experiences. Combining my graphic design background with modern web standards to create intuitive interfaces.",
      features: [
        "Wireframing & Prototyping",
        "Adobe Photoshop & Illustrator",
        "Design Systems",
        "User-Centric Layouts",
      ],
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      ),
      color: "rgb(250 204 21)", // yellow-400
    },
    {
      id: "03",
      title: "Technical SEO & Performance",
      description:
        "Optimizing web platforms to rank higher and load faster. Implementing best practices for Core Web Vitals, semantic HTML, and advanced search engine optimization.",
      features: [
        "Lighthouse Optimization",
        "Server-Side Rendering (SSR)",
        "Meta Data Management",
        "Performance Audits",
      ],
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      ),
      color: "var(--accent-blue)",
    },
    {
      id: "04",
      title: "Data & Security Solutions",
      description:
        "Developing robust data pipelines and security log ingestion systems. Ensuring data integrity and safe handling through modern cybersecurity practices and Python scripting.",
      features: [
        "Log Collection & Processing",
        "Python Automation",
        "Secure Data Flow",
        "AI/ML Integrations",
      ],
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
      color: "rgb(52 211 153)", // emerald-400
    },
  ];

  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="services"
      className="relative w-full py-32 bg-[var(--background)] overflow-hidden"
    >
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[var(--accent-blue)]/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-[var(--primary)]" />
              <h2 className="text-sm font-mono tracking-widest text-[var(--primary)] uppercase">
                Services
              </h2>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--foreground)] tracking-tight">
              What I Can Do <br className="hidden md:block" /> For You.
            </h3>
          </div>
          <p className="text-lg text-[var(--foreground-muted)] font-light max-w-md md:text-right">
            Delivering end-to-end digital solutions, combining robust
            engineering with pixel-perfect design aesthetics.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative p-8 md:p-10 rounded-3xl bg-[var(--card-bg)]/40 backdrop-blur-xl border border-[var(--border-color)] overflow-hidden transition-all duration-500 hover:border-[var(--border-color)]/80 hover:bg-[var(--card-bg)]/60"
            >
              {/* Hover Glow Effect inside the card */}
              <div
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundColor: service.color }}
              />

              {/* Service Header */}
              <div className="flex items-start justify-between mb-8">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/5 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                  style={{
                    backgroundColor: `${service.color}15`,
                    color: service.color,
                  }}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {service.icon}
                  </svg>
                </div>
                <span className="text-5xl font-black font-mono text-[var(--foreground-muted)] opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                  {service.id}
                </span>
              </div>

              {/* Content */}
              <h4 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-4 tracking-tight group-hover:text-[var(--primary)] transition-colors duration-300">
                {service.title}
              </h4>
              <p className="text-[var(--foreground-muted)] text-base md:text-lg font-light leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Features List */}
              <div className="pt-6 border-t border-[var(--border-color)]/50">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-[var(--foreground-muted)] font-medium"
                    >
                      <svg
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: service.color }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
