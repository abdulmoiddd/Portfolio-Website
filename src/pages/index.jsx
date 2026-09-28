// // import Head from "next/head";
// // import Navbar from "../components/Essential/Navbar";
// // import Hero from "../components/Home/Hero";
// // import Footer from "../components/Essential/Footer";
// // import About from "@/components/Home/About";
// // import Skills from "@/components/Home/Skills";
// // import Projects from "@/components/Home/Project";
// // import Services from "@/components/Home/Service";
// // import Contact from "@/components/Home/Contact";

// // export default function Home() {
// //   return (
// //     <div className="min-h-screen bg-primary text-textMain flex flex-col font-sans overflow-x-hidden scroll-smooth">
// //       <Head>
// //         <title>Abdul Moid</title>
// //         <meta
// //           name="description"
// //           content="Promoting Aicyro Shield - The ultimate fusion of performance and security."
// //         />
// //       </Head>

// //       {/* Navbar is rendered globally here */}
// //       <Navbar />

// //       <main>
// //         <div id="home">
// //           <Hero />
// //         </div>

// //         <div id="about">
// //           <About />
// //         </div>

// //         <div id="services">
// //           <Services />
// //         </div>

// //         <div id="skills">
// //           <Skills />
// //         </div>

// //         <div id="projects">
// //           <Projects />
// //         </div>

// //         <div id="contact">
// //           <Contact />
// //         </div>
// //         {/* <div id="overview"><WhoAreWe /></div>
// //         <div id="solutions"><SolutionPhase /></div>
// //         <div id="aboutshield"><Aboutshield />   </div>
// //         <div id="industries"><Industries /></div>
// //         <div id="why-aicyro"><WhyAicyro /></div>
// //         <div id="security"><SecurityCompliance /></div>
// //         <div id="roadmap"><ProductRoadmap /></div>
// //         <div id="about"><AboutAicyro /></div> */}
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // }

// ///
// //
// //
// //
// //
// //
// //
// import Head from "next/head";
// import Navbar from "../components/Essential/Navbar";
// import Hero from "../components/Home/Hero";
// import Footer from "../components/Essential/Footer";
// import About from "@/components/Home/About";
// import Skills from "@/components/Home/Skills";
// import Projects from "@/components/Home/Project";
// import Services from "@/components/Home/Service";
// import Contact from "@/components/Home/Contact";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-primary text-textMain flex flex-col font-sans overflow-x-hidden scroll-smooth">
//       <Head>
//         <title>Abdul Moid | Software Engineer</title>
//         <meta
//           name="description"
//           content="Portfolio of Abdul Moid, a Full Stack Developer specializing in modern web applications, scalable architecture, and pixel-perfect design."
//         />

//         {/* Open Graph / Facebook / LinkedIn */}
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content="Abdul Moid | Software Engineer" />
//         <meta
//           property="og:description"
//           content="Portfolio of Abdul Moid, a Full Stack Developer specializing in modern web applications, scalable architecture, and pixel-perfect design."
//         />
//         <meta property="og:image" content="/og-image.jpg" />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Abdul Moid | Software Engineer" />
//         <meta
//           name="twitter:description"
//           content="Portfolio of Abdul Moid, a Full Stack Developer specializing in modern web applications, scalable architecture, and pixel-perfect design."
//         />
//         <meta name="twitter:image" content="/og-image.jpg" />
//       </Head>

//       {/* Navbar is rendered globally here */}
//       <Navbar />

//       <main>
//         <div id="home">
//           <Hero />
//         </div>

//         <div id="about">
//           <About />
//         </div>

//         <div id="services">
//           <Services />
//         </div>

//         <div id="skills">
//           <Skills />
//         </div>

//         <div id="projects">
//           <Projects />
//         </div>

//         <div id="contact">
//           <Contact />
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

//
//
////
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
    <div className="min-h-screen bg-primary text-textMain flex flex-col font-sans overflow-x-hidden scroll-smooth">
      <Head>
        {/* --- Primary SEO Tags --- */}
        <title>Abdul Moid | Software Engineer & Full Stack Developer</title>
        <meta
          name="title"
          content="Abdul Moid | Software Engineer & Full Stack Developer"
        />
        <meta
          name="description"
          content="Portfolio of Abdul Moid, a Full Stack Developer specializing in modern web applications, scalable architecture, and pixel-perfect design using Next.js, React, and Node.js."
        />
        <meta
          name="keywords"
          content="Abdul Moid, Software Engineer, Full Stack Developer, Next.js Developer, React Developer, Web Architecture, Frontend, Backend, Portfolio"
        />
        <meta name="author" content="Abdul Moid" />

        {/* --- Search Engine Crawling --- */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* --- Canonical URL (Replace with your actual live domain) --- */}
        <link rel="canonical" href="https://abdulmoid.com" />

        {/* --- Open Graph / Facebook / LinkedIn --- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abdulmoid.com" />
        <meta property="og:title" content="Abdul Moid | Software Engineer" />
        <meta
          property="og:description"
          content="Portfolio of Abdul Moid, a Full Stack Developer specializing in modern web applications, scalable architecture, and pixel-perfect design."
        />
        <meta property="og:image" content="/og-image.jpg" />

        {/* --- Twitter --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://abdulmoid.com" />
        <meta name="twitter:title" content="Abdul Moid | Software Engineer" />
        <meta
          name="twitter:description"
          content="Portfolio of Abdul Moid, a Full Stack Developer specializing in modern web applications, scalable architecture, and pixel-perfect design."
        />
        <meta name="twitter:image" content="/og-image.jpg" />

        {/* --- Theme Color for Mobile Browsers --- */}
        <meta name="theme-color" content="#0a0a0a" />
      </Head>

      {/* Navbar is rendered globally here */}
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
