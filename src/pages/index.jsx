import Head from "next/head";
import Navbar from "../components/Essential/Navbar";
import Hero from "../components/Home/Hero";
import Footer from "../components/Essential/Footer";
import About from "@/components/Home/About";
import Skills from "@/components/Home/Skills";
import Projects from "@/components/Home/Project";
import Services from "@/components/Home/Service";
import BeyondTheCode from "@/components/Home/BeyondTheCode";
import Contact from "@/components/Home/Contact";
import CustomCursor from "@/components/Essential/CustomCursor";
// DynamicBackground removed — ambient mesh now lives in layout.jsx (global)
// and Hero.jsx (section-local mouse-reactive mesh)

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        {/* --- Primary SEO Tags --- */}
        <title>Abdul Moid | AI & Full-Stack Software Engineer | Technical Lead</title>
        <meta
          name="title"
          content="Abdul Moid | AI & Full-Stack Software Engineer | Technical Lead"
        />
        <meta
          name="description"
          content="Portfolio of Abdul Moid, Full-Stack Engineer and Technical Lead specializing in OpenAI Realtime WebRTC voice streaming, multi-tenant SaaS architectures, Next.js, React Native, and robust backend scalability."
        />
        <meta
          name="keywords"
          content="Abdul Moid, Software Engineer, Full Stack Developer, AI Engineer, OpenAI Realtime, WebRTC Voice, Next.js, React Native, Firebase, Make.com, Aicyro, CloseDesk, Technical Lead"
        />
        <meta name="author" content="Abdul Moid" />

        {/* --- Theme & Color-Scheme Support (Default Light) --- */}
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#FAF7F2" />

        {/* --- Search Engine Crawling --- */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* --- Canonical URL --- */}
        <link rel="canonical" href="https://abdulmoid.com" />

        {/* --- Open Graph / Facebook / LinkedIn --- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abdulmoid.com" />
        <meta property="og:title" content="Abdul Moid | AI & Full-Stack Software Engineer" />
        <meta
          property="og:description"
          content="Full-Stack Engineer & Technical Lead specializing in AI-integrated SaaS architectures, OpenAI Realtime WebRTC streaming, and multi-tenant platforms."
        />
        <meta property="og:image" content="/og-image.jpg" />

        {/* --- Twitter --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://abdulmoid.com" />
        <meta name="twitter:title" content="Abdul Moid | AI & Full-Stack Software Engineer" />
        <meta
          name="twitter:description"
          content="Full-Stack Engineer & Technical Lead specializing in AI-integrated SaaS architectures, OpenAI Realtime WebRTC streaming, and multi-tenant platforms."
        />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>

      {/* Precision geometric cursor (desktop only) */}
      <CustomCursor />

      {/* Global Navigation Bar */}
      <Navbar />

      {/* Page Sections */}
      <div className="relative z-10">
        {/* Existing Hero Section */}
        <div id="home">
          <Hero />
        </div>

        {/* Architectural Evolution & Live Metrics */}
        <div id="about">
          <About />
        </div>

        {/* Capabilities & Engineering Modules */}
        <div id="services">
          <Services />
        </div>

        {/* Core Tech Stack & Interactive Matrix */}
        <div id="skills">
          <Skills />
        </div>

        {/* Featured Projects (Bento Box with 3D Tilt) */}
        <div id="projects">
          <Projects />
        </div>

        {/* Beyond the Code: Personal Creative Pursuits (Horizontal Scroll) */}
        <div id="beyond-code">
          <BeyondTheCode />
        </div>

        {/* Interactive Terminal / Chat-Bubble Contact Interface */}
        <div id="contact">
          <Contact />
        </div>
      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
