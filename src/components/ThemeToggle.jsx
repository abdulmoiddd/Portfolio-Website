"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check local storage or system preference on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-secondary text-textMain hover:opacity-80 transition-opacity"
      aria-label="Toggle Theme"
    >
      {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

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

// "use client";

// import { useEffect, useState } from "react";

// export default function ThemeToggle() {
//   const [mounted, setMounted] = useState(false);
//   // Defaulting to true because your CSS :root is Dark Mode
//   const [isDarkMode, setIsDarkMode] = useState(true);

//   useEffect(() => {
//     // Tells React it's now safe to run client-side logic
//     setMounted(true);

//     const savedTheme = localStorage.getItem("theme");
//     const prefersLight = window.matchMedia(
//       "(prefers-color-scheme: light)",
//     ).matches;

//     // Logic updated to match your CSS [data-theme='light']
//     if (savedTheme === "light" || (!savedTheme && prefersLight)) {
//       document.documentElement.setAttribute("data-theme", "light");
//       setIsDarkMode(false);
//     } else {
//       document.documentElement.removeAttribute("data-theme");
//       setIsDarkMode(true);
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (isDarkMode) {
//       document.documentElement.setAttribute("data-theme", "light");
//       localStorage.setItem("theme", "light");
//       setIsDarkMode(false);
//     } else {
//       document.documentElement.removeAttribute("data-theme");
//       localStorage.setItem("theme", "dark");
//       setIsDarkMode(true);
//     }
//   };

//   // HYDRATION FIX: Render an invisible placeholder until mounted to prevent mismatch
//   if (!mounted) {
//     return (
//       <button
//         className="p-2 rounded-md bg-secondary text-textMain opacity-0"
//         aria-hidden="true"
//       >
//         ☀️ Light Mode
//       </button>
//     );
//   }

//   return (
//     <button
//       onClick={toggleTheme}
//       className="p-2 rounded-md bg-secondary text-textMain hover:opacity-80 transition-opacity"
//       aria-label="Toggle Theme"
//     >
//       {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
//     </button>
//   );
// }
