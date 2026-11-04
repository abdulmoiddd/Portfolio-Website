"use client";

/**
 * CustomCursor — Precision Geometric Ring + Dot
 *
 * Design:
 *  - Two-layer system: fast inner dot (tracks instantly) + lagged outer ring (trails slightly)
 *  - Ring morphs into a filled highlight square on interactive elements (magnetic snap feel)
 *  - On click: dot compresses, ring pulses outward then retracts
 *  - On text elements: ring flattens to a thin underline-like bar (I-beam metaphor)
 *  - Zero blobs, zero opacity pulsing, zero blinking — precision only
 *
 * Color system: uses CSS tokens from globals.css (--clr-accent, --clr-ink)
 */

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue, animate } from "framer-motion";

// ─── Spring Configs ────────────────────────────────────────────────────────────
// Dot: ultra-tight, near-zero latency
const DOT_SPRING   = { damping: 40, stiffness: 900, mass: 0.08 };
// Ring: slightly laggy — creates the "trailing" magnetic feel
const RING_SPRING  = { damping: 28, stiffness: 320, mass: 0.35 };

// ─── Cursor States ─────────────────────────────────────────────────────────────
const STATE = {
  DEFAULT:     "default",
  HOVER:       "hover",       // over links, buttons, .interactive
  CLICKING:    "clicking",    // mousedown
  TEXT:        "text",        // over text nodes / paragraphs
  DRAG:        // over draggable ID badge
               "drag",
};

export default function CustomCursor() {
  const [state, setState]       = useState(STATE.DEFAULT);
  const [visible, setVisible]   = useState(false);
  const [isTouch, setIsTouch]   = useState(true);
  const stateRef                = useRef(STATE.DEFAULT);

  // Raw mouse position
  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  // Dot position (tight spring — near-instant)
  const dotX = useSpring(rawX, DOT_SPRING);
  const dotY = useSpring(rawY, DOT_SPRING);

  // Ring position (looser spring — slight lag = magnetic feel)
  const ringX = useSpring(rawX, RING_SPRING);
  const ringY = useSpring(rawY, RING_SPRING);

  // Helper: set state to both ref and state without stale closure issues
  const setCursorState = useCallback((s) => {
    stateRef.current = s;
    setState(s);
  }, []);

  useEffect(() => {
    // Desktop-only: bail on touch devices
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) { setIsTouch(true); return; }
    setIsTouch(false);
    document.body.classList.add("has-custom-cursor");

    // ── Event Handlers ──────────────────────────────────────────────────────
    const onMove = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onDown = () => {
      setCursorState(STATE.CLICKING);
    };

    const onUp = () => {
      // Restore to whatever the element underneath dictates
      setCursorState(stateRef.current === STATE.CLICKING ? STATE.DEFAULT : stateRef.current);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onOver = (e) => {
      if (stateRef.current === STATE.CLICKING) return; // don't interrupt click
      const el = e.target;

      // Priority 1 — draggable ID badge area
      if (el.closest('[data-cursor="drag"]') || el.closest('.cursor-grab')) {
        setCursorState(STATE.DRAG);
        return;
      }
      // Priority 2 — interactive elements (links, buttons, .interactive)
      if (el.closest('button, a, [role="button"], .interactive, [data-cursor="pointer"]')) {
        setCursorState(STATE.HOVER);
        return;
      }
      // Priority 3 — plain text / paragraphs
      if (el.closest('p, h1, h2, h3, h4, h5, h6, span, label, [data-cursor="text"]')) {
        setCursorState(STATE.TEXT);
        return;
      }
      setCursorState(STATE.DEFAULT);
    };

    window.addEventListener("mousemove",   onMove,   { passive: true });
    window.addEventListener("mousedown",   onDown);
    window.addEventListener("mouseup",     onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover",  onOver,  { passive: true });

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove",   onMove);
      window.removeEventListener("mousedown",   onDown);
      window.removeEventListener("mouseup",     onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover",  onOver);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rawX, rawY]);

  if (isTouch || !visible) return null;

  // ── Derived ring geometry per state ───────────────────────────────────────
  const ringVariants = {
    [STATE.DEFAULT]: {
      width: 28,
      height: 28,
      borderRadius: "50%",
      borderColor: "rgba(245,230,35,0.55)",
      borderWidth: 1.5,
      backgroundColor: "transparent",
      rotate: 0,
      scale: 1,
    },
    [STATE.HOVER]: {
      width: 44,
      height: 44,
      borderRadius: "10px",          // square snap on hover
      borderColor: "rgba(245,230,35,0.90)",
      borderWidth: 1.5,
      backgroundColor: "rgba(245,230,35,0.07)",
      rotate: 45,                    // diamond orientation
      scale: 1,
    },
    [STATE.CLICKING]: {
      width: 22,
      height: 22,
      borderRadius: "50%",
      borderColor: "#F5E623",
      borderWidth: 2,
      backgroundColor: "rgba(245,230,35,0.15)",
      rotate: 0,
      scale: 0.88,
    },
    [STATE.TEXT]: {
      width: 3,
      height: 28,
      borderRadius: "2px",          // thin bar = I-beam
      borderColor: "rgba(245,230,35,0.80)",
      borderWidth: 1,
      backgroundColor: "rgba(245,230,35,0.08)",
      rotate: 0,
      scale: 1,
    },
    [STATE.DRAG]: {
      width: 52,
      height: 52,
      borderRadius: "50%",
      borderColor: "rgba(245,230,35,0.70)",
      borderWidth: 1,
      backgroundColor: "transparent",
      rotate: 0,
      scale: 1,
    },
  };

  // Dot variants
  const dotVariants = {
    [STATE.DEFAULT]:  { scale: 1,    backgroundColor: "#F5E623", opacity: 1 },
    [STATE.HOVER]:    { scale: 0,    backgroundColor: "#F5E623", opacity: 0 },   // hide dot on hover — ring takes over
    [STATE.CLICKING]: { scale: 2.2,  backgroundColor: "#F5E623", opacity: 0.5 },
    [STATE.TEXT]:     { scale: 0,    backgroundColor: "#F5E623", opacity: 0 },
    [STATE.DRAG]:     { scale: 1.5,  backgroundColor: "#CACA60", opacity: 0.9 },
  };

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
      aria-hidden="true"
    >
      {/* ── Outer Ring ── */}
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          border: "1px solid",
          willChange: "transform",
        }}
        animate={ringVariants[state]}
        transition={{
          type: "spring",
          damping: 22,
          stiffness: 380,
          mass: 0.3,
        }}
      />

      {/* ── Inner Dot ── */}
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 5,
          height: 5,
          borderRadius: "50%",
          willChange: "transform",
        }}
        animate={dotVariants[state]}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 700,
          mass: 0.1,
        }}
      />

      {/* ── Hover glow — only on HOVER state, no blinking ── */}
      {state === STATE.HOVER && (
        <motion.div
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            x: ringX,
            y: ringY,
            translateX: "-50%",
            translateY: "-50%",
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,230,35,0.14) 0%, transparent 70%)",
            willChange: "transform",
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      )}
    </div>
  );
}
