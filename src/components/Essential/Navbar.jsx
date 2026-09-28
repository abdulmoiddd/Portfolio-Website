// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Theme state: defaults to 'dark'
//   const [theme, setTheme] = useState('dark');

//   // 1. Detect scroll to morph the navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // 2. On initial mount, check if the user has a saved theme preference
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') || 'dark';
//     setTheme(savedTheme);
//     if (savedTheme === 'light') {
//       document.documentElement.setAttribute('data-theme', 'light');
//     } else {
//       document.documentElement.removeAttribute('data-theme');
//     }
//   }, []);

//   // 3. Theme Toggle Function
//   const toggleTheme = () => {
//     const newTheme = theme === 'dark' ? 'light' : 'dark';
//     setTheme(newTheme);
//     localStorage.setItem('theme', newTheme);

//     if (newTheme === 'light') {
//       document.documentElement.setAttribute('data-theme', 'light');
//     } else {
//       document.documentElement.removeAttribute('data-theme');
//     }
//   };

//   const navLinks = [
//     { name: 'Overview', href: '#overview' },
//     { name: 'Solutions', href: '#solutions' },
//     { name: 'Industries', href: '#industries' },
//     { name: 'Roadmap', href: '#roadmap' },
//     { name: 'About', href: '/about' },
//   ];

//   return (
//     <>
//       <nav
//         className={`fixed w-full top-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
//           isScrolled ? 'pt-4' : 'pt-6'
//         }`}
//       >
//         {/* Floating Morphing Container */}
//         <div
//           className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
//             isScrolled
//               ? 'max-w-6xl px-4'
//               : 'max-w-7xl px-6'
//           }`}
//         >
//           {/* Glassmorphic Background & Border Panel */}
//           <div
//             className={`relative flex justify-between items-center transition-all duration-700 group/nav ${
//               isScrolled
//                 ? 'bg-[var(--card-bg)]/60 backdrop-blur-2xl border border-[var(--border-color)]/80 rounded-full py-3 px-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)]'
//                 : 'bg-transparent py-2 border-transparent rounded-none px-0'
//             }`}
//           >
//             {/* Ambient hover glow inside the floating pill */}
//             {isScrolled && (
//               <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--primary)]/0 via-[var(--primary)]/5 to-[var(--accent-blue)]/0 opacity-0 group-hover/nav:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
//             )}

//             {/* ========================================== */}
//             {/* LEFT: Brand Logo                           */}
//             {/* ========================================== */}
//             <Link href="/" className="relative text-2xl font-black tracking-tight cursor-pointer z-50 flex items-center gap-2 group">
//               {/* Spinning AI Core Dot */}
//               <div className="relative flex items-center justify-center w-3 h-3">
//                 <span className="absolute inset-0 rounded-full bg-[var(--primary)] blur-[4px] group-hover:blur-[6px] transition-all"></span>
//                 <span className="relative w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
//               </div>
//               <span className="text-[var(--foreground)] transition-colors duration-300">Aicyro</span>
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
//                 Shield
//               </span>
//             </Link>

//             {/* ========================================== */}
//             {/* CENTER: Navigation Links (Desktop)         */}
//             {/* ========================================== */}
//             <ul className="hidden md:flex items-center space-x-2 lg:space-x-4 text-[var(--foreground-muted)] font-medium z-50">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="relative px-3 py-2 text-sm tracking-wide transition-colors duration-300 group flex items-center overflow-hidden"
//                   >
//                     {/* Left Bracket */}
//                     <span className="text-[var(--primary)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mr-1 font-mono font-bold">
//                       [
//                     </span>

//                     {/* Link Text */}
//                     <span className="relative z-10 group-hover:text-[var(--foreground)] group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300">
//                       {link.name}
//                     </span>

//                     {/* Right Bracket */}
//                     <span className="text-[var(--accent-blue)] opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-1 font-mono font-bold">
//                       ]
//                     </span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//             {/* ========================================== */}
//             {/* RIGHT: Toggles & Call to Action            */}
//             {/* ========================================== */}
//             <div className="flex items-center gap-3 lg:gap-4 z-50">

//               {/* Theme Toggle */}
//               <button
//                 onClick={toggleTheme}
//                 className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[var(--background)]/40 border border-[var(--border-color)] text-[var(--foreground-muted)] hover:text-[var(--primary)] hover:border-[var(--primary)]/50 transition-all duration-300 focus:outline-none group overflow-hidden"
//                 aria-label="Toggle Theme"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`absolute w-4 h-4 transition-all duration-500 transform ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
//                 </svg>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`absolute w-4 h-4 transition-all duration-500 transform ${theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
//                 </svg>
//               </button>

//               {/* Desktop CTA Button */}
//               <button className="hidden md:flex relative overflow-hidden group px-6 py-2 bg-transparent border border-[var(--primary)]/50 text-[var(--foreground)] font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(138,43,226,0.3)] hover:-translate-y-0.5">
//                 <div className="absolute inset-0 w-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)] transition-all duration-500 ease-out group-hover:w-full"></div>
//                 <span className="relative z-10 group-hover:text-white transition-colors duration-300">
//                   Deploy Now
//                 </span>
//               </button>

//               {/* Mobile Menu Icon */}
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[var(--background)]/40 border border-[var(--border-color)] text-[var(--foreground)] hover:text-[var(--primary)] transition-colors focus:outline-none"
//               >
//                 {isMobileMenuOpen ? (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transform rotate-90 transition-transform duration-300">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 ) : (
//                   <div className="flex flex-col gap-1.5 w-5">
//                     <span className="w-full h-0.5 bg-current rounded-full transition-all duration-300"></span>
//                     <span className="w-3/4 h-0.5 bg-current rounded-full transition-all duration-300"></span>
//                   </div>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* ========================================== */}
//         {/* MOBILE MENU DROPDOWN PANEL                 */}
//         {/* ========================================== */}
//         <div
//           className={`md:hidden absolute top-[110%] left-4 right-4 bg-[var(--card-bg)]/95 backdrop-blur-3xl border border-[var(--border-color)] rounded-2xl shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top overflow-hidden ${
//             isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
//           }`}
//         >
//           <ul className="flex flex-col p-6 space-y-2 text-[var(--foreground)] font-medium">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <Link
//                   href={link.href}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="flex items-center justify-between px-4 py-3.5 rounded-xl hover:bg-[var(--primary)]/10 text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors duration-300 text-base group"
//                 >
//                   {link.name}
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//                   </svg>
//                 </Link>
//               </li>
//             ))}
//             <li className="pt-4 mt-2 border-t border-[var(--border-color)]/50">
//               <button className="w-full flex justify-center items-center gap-2 px-6 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)] text-white font-bold rounded-xl shadow-[0_0_20px_rgba(138,43,226,0.3)] hover:shadow-[0_0_30px_rgba(138,43,226,0.5)] transition-all duration-300">
//                 Deploy Now
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//                 </svg>
//               </button>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }

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

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Theme state: defaults to 'dark'
  const [theme, setTheme] = useState("dark");

  // 1. Detect scroll to morph the navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. On initial mount, check if the user has a saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, []);

  // 3. Theme Toggle Function
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? "pt-4" : "pt-6"
        }`}
      >
        {/* Floating Morphing Container */}
        <div
          className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled ? "max-w-6xl px-4" : "max-w-7xl px-6"
          }`}
        >
          {/* Solid Background & Border Panel */}
          <div
            className={`relative flex justify-between items-center transition-all duration-700 group/nav ${
              isScrolled
                ? "bg-[var(--card-bg)] border border-[var(--border-color)] rounded-full py-3 px-6 shadow-xl"
                : "bg-transparent py-2 border-transparent rounded-none px-0"
            }`}
          >
            {/* ========================================== */}
            {/* LEFT: Brand Logo                           */}
            {/* ========================================== */}
            <Link
              href="/"
              className="relative text-2xl font-black tracking-tight cursor-pointer z-50 flex items-center gap-2 group"
            >
              {/* Shield Icon */}
              <div className="text-[var(--primary)] transition-transform duration-300 group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <span className="text-[var(--foreground)] transition-colors duration-300">
                Abdul
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)]">
                Moid
              </span>
            </Link>

            {/* ========================================== */}
            {/* CENTER: Navigation Links (Desktop)         */}
            {/* ========================================== */}
            <ul className="hidden md:flex items-center space-x-2 lg:space-x-4 text-[var(--foreground-muted)] font-medium z-50">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="relative px-3 py-2 text-sm tracking-wide transition-colors duration-300 group flex items-center overflow-hidden"
                  >
                    {/* Left Bracket */}
                    <span className="text-[var(--primary)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mr-1 font-mono font-bold">
                      [
                    </span>

                    {/* Link Text */}
                    <span className="relative z-10 group-hover:text-[var(--foreground)] group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300">
                      {link.name}
                    </span>

                    {/* Right Bracket */}
                    <span className="text-[var(--accent-blue)] opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-1 font-mono font-bold">
                      ]
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* ========================================== */}
            {/* RIGHT: Toggles & Call to Action            */}
            {/* ========================================== */}
            <div className="flex items-center gap-3 lg:gap-4 z-50">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[var(--background)]/40 border border-[var(--border-color)] text-[var(--foreground-muted)] hover:text-[var(--primary)] hover:border-[var(--primary)]/50 transition-all duration-300 focus:outline-none group overflow-hidden"
                aria-label="Toggle Theme"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`absolute w-4 h-4 transition-all duration-500 transform ${theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`absolute w-4 h-4 transition-all duration-500 transform ${theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              </button>

              {/* Desktop CTA Button - FILLED */}
              <button className="hidden md:flex relative overflow-hidden group px-6 py-2.5 bg-[var(--primary)] text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(138,43,226,0.3)] hover:shadow-[0_0_25px_rgba(138,43,226,0.5)] hover:-translate-y-0.5">
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)] transition-all duration-500 ease-out group-hover:w-full"></div>
                <span className="relative z-10 transition-colors duration-300">
                  Get Started
                </span>
              </button>

              {/* Mobile Menu Icon */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[var(--background)]/40 border border-[var(--border-color)] text-[var(--foreground)] hover:text-[var(--primary)] transition-colors focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 transform rotate-90 transition-transform duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <div className="flex flex-col gap-1.5 w-5">
                    <span className="w-full h-0.5 bg-current rounded-full transition-all duration-300"></span>
                    <span className="w-3/4 h-0.5 bg-current rounded-full transition-all duration-300"></span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* MOBILE MENU DROPDOWN PANEL                 */}
        {/* ========================================== */}
        <div
          className={`md:hidden absolute top-[110%] left-4 right-4 bg-[var(--card-bg)]/95 backdrop-blur-3xl border border-[var(--border-color)] rounded-2xl shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top overflow-hidden ${
            isMobileMenuOpen
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col p-6 space-y-2 text-[var(--foreground)] font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl hover:bg-[var(--primary)]/10 text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors duration-300 text-base group"
                >
                  {link.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
              </li>
            ))}
            <li className="pt-4 mt-2 border-t border-[var(--border-color)]/50">
              <button className="w-full flex justify-center items-center gap-2 px-6 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)] text-white font-bold rounded-xl shadow-[0_0_20px_rgba(138,43,226,0.3)] hover:shadow-[0_0_30px_rgba(138,43,226,0.5)] transition-all duration-300">
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
