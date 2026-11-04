"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Snappy, high-precision spring physics (minimal latency)
  const dotSpringConfig = { damping: 30, stiffness: 600, mass: 0.2 };
  const cursorX = useSpring(mouseX, dotSpringConfig);
  const cursorY = useSpring(mouseY, dotSpringConfig);

  const ringSpringConfig = { damping: 25, stiffness: 350, mass: 0.4 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
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

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target;
      const interactiveEl = target.closest(
        'button, a, input, textarea, select, [role="button"], .interactive, [data-cursor]'
      );
      setIsHovered(!!interactiveEl);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Geometric Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 40 : 26,
          height: isHovered ? 40 : 26,
          scale: isClicking ? 0.85 : 1,
          borderColor: isHovered
            ? "var(--primary-vibrant)"
            : "rgba(217, 119, 6, 0.4)",
          backgroundColor: isHovered
            ? "rgba(250, 204, 21, 0.08)"
            : "transparent",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 400 }}
        className="rounded-full border border-dashed flex items-center justify-center transition-colors duration-150"
      />

      {/* Inner Precision Cross-Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.4 : isClicking ? 0.7 : 1,
          backgroundColor: isHovered
            ? "var(--primary-vibrant)"
            : "var(--foreground)",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 600 }}
        className="w-1.5 h-1.5 rounded-full shadow-[0_0_6px_var(--primary-vibrant)]"
      />
    </div>
  );
}
