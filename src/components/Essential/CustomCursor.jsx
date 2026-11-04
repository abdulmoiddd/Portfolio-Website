"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Mouse coordinates with high-performance springs
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const ringSpringConfig = { damping: 20, stiffness: 200, mass: 0.8 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    // Only enable on non-touch devices with fine pointers
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);
    document.body.classList.add("has-custom-cursor");

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Detect clickable element interactions
    const handleMouseOver = (e) => {
      const target = e.target;
      const interactiveEl = target.closest(
        'button, a, input, textarea, select, [role="button"], .interactive, [data-cursor]'
      );

      if (interactiveEl) {
        setIsHovered(true);
        const customText = interactiveEl.getAttribute("data-cursor");
        setCursorText(customText || "");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Magnetic Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? (cursorText ? 68 : 52) : 32,
          height: isHovered ? (cursorText ? 68 : 52) : 32,
          backgroundColor: isHovered
            ? "rgba(250, 204, 21, 0.22)"
            : "rgba(250, 204, 21, 0.05)",
          borderColor: isHovered
            ? "var(--primary-vibrant)"
            : "rgba(234, 179, 8, 0.4)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="rounded-full border backdrop-blur-[1px] flex items-center justify-center shadow-[0_0_15px_rgba(250,204,21,0.25)]"
      >
        {cursorText && (
          <span className="text-[9px] font-mono font-bold tracking-widest text-[var(--foreground)] uppercase select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Inner Pin Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0.4 : 1,
          backgroundColor: "var(--primary-vibrant)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 400 }}
        className="w-2.5 h-2.5 rounded-full shadow-[0_0_8px_var(--primary-vibrant)]"
      />
    </div>
  );
}
