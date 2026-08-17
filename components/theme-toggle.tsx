"use client";

import { useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useMounted } from "@/lib/use-mounted";

type Ripple = {
  id: number;
  x: number;
  y: number;
  radius: number;
  color: string;
};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const [ripple, setRipple] = useState<Ripple | null>(null);

  const isDark = mounted && resolvedTheme === "dark";

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    if (ripple) return;

    const nextTheme = isDark ? "light" : "dark";
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setTheme(nextTheme);
      return;
    }

    const { clientX: x, clientY: y } = event;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );
    const currentBg = getComputedStyle(document.documentElement)
      .getPropertyValue("--background")
      .trim();

    setRipple({ id: Date.now(), x, y, radius, color: currentBg || "#111111" });
    setTheme(nextTheme);
  }

  return (
    <>
      <button
        type="button"
        aria-label="Toggle theme"
        onClick={handleClick}
        className="relative flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100/60 text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
      >
        {mounted && (
          <>
            <Sun
              className={`h-4 w-4 transition-all ${isDark ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}
            />
            <Moon
              className={`absolute h-4 w-4 transition-all ${isDark ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
            />
          </>
        )}
      </button>

      {mounted &&
        ripple &&
        createPortal(
          <motion.div
            key={ripple.id}
            aria-hidden
            className="pointer-events-none fixed inset-0 z-[9999] will-change-[clip-path]"
            style={{ backgroundColor: ripple.color }}
            initial={{
              clipPath: `circle(${ripple.radius}px at ${ripple.x}px ${ripple.y}px)`,
            }}
            animate={{
              clipPath: `circle(0px at ${ripple.x}px ${ripple.y}px)`,
            }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            onAnimationComplete={() => setRipple(null)}
          />,
          document.body,
        )}
    </>
  );
}
