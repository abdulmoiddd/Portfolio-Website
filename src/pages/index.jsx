import Head from "next/head";
import Navbar from "../components/Essential/Navbar";
import Hero from "../components/Home/Hero";
import Footer from "../components/Essential/Footer";
import About from "@/components/Home/About";
import Skills from "@/components/Home/Skills";
import Projects from "@/components/Home/Project";
import Services from "@/components/Home/Service";
import Contact from "@/components/Home/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col font-sans overflow-x-hidden scroll-smooth">
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

        {/* --- Theme & Color-Scheme Support --- */}
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#0A0C10" />

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

      {/* Navbar rendered globally */}
      <Navbar />

      <main>
        <div id="home">
          <Hero />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
