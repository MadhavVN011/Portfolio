"use client";

import { motion } from "framer-motion";
import type { ComponentType } from "react";

export function SectionHeading({
  title,
  subtitle,
  icon: Icon,
}: {
  title: string;
  subtitle?: string;
  icon?: ComponentType<{ className?: string }>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <div className="flex items-center gap-2">
        {Icon && <Icon className="h-5 w-5 text-emerald-500" />}
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {title}
        </h2>
      </div>
      {subtitle && <p className="mt-2 text-sm text-zinc-500">{subtitle}</p>}
    </motion.div>
  );
}
