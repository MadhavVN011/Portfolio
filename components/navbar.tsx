"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/data/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav className="flex max-w-full items-center gap-0.5 overflow-x-auto rounded-full border border-zinc-200/80 bg-white/70 px-1.5 py-1.5 shadow-lg shadow-zinc-200/40 backdrop-blur-md sm:gap-1 sm:px-2 sm:py-2 dark:border-zinc-800/80 dark:bg-zinc-950/70 dark:shadow-black/20">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={cn(
              "relative shrink-0 rounded-full px-2.5 py-1.5 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-900 sm:px-3.5 sm:text-sm dark:text-zinc-400 dark:hover:text-zinc-100",
              active === link.href && "text-zinc-900 dark:text-zinc-100",
            )}
          >
            {active === link.href && (
              <motion.span
                layoutId="nav-active"
                className="absolute inset-0 rounded-full bg-zinc-200/80 dark:bg-zinc-800/80"
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              />
            )}
            <span className="relative">{link.label}</span>
          </a>
        ))}
        <div className="ml-0.5 h-5 w-px shrink-0 bg-zinc-200 sm:ml-1 dark:bg-zinc-800" />
        <div className="ml-0.5 flex shrink-0 items-center pr-0.5 sm:ml-1 sm:pr-1">
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}
