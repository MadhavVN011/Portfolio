"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Mail, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub, SiX } from "react-icons/si";
import { profile } from "@/data/portfolio";
import { AuroraBackground } from "@/components/ui/aurora-background";

const initials = profile.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2);

const socialLinks = [
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
  { label: "X", href: profile.twitter, icon: SiX },
  { label: "GitHub", href: profile.github, icon: SiGithub },
];

export function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden">
      <AuroraBackground>
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-24">
          <div className="grid grid-cols-1 items-center gap-12 text-left lg:grid-cols-[1fr_1.5fr]">
            <div className="flex flex-col items-start text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/30 via-zinc-200 to-zinc-300 p-[3px] md:h-52 md:w-52 dark:via-zinc-800 dark:to-zinc-900">
                  <div className="relative h-full w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-900">
                    {profile.avatarUrl && !imageError ? (
                      <Image
                        src={profile.avatarUrl}
                        alt={profile.name}
                        fill
                        sizes="(min-width: 768px) 208px, 160px"
                        className="object-cover"
                        onError={() => setImageError(true)}
                        priority
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-4xl font-semibold text-zinc-900 md:text-5xl dark:text-zinc-100">
                        {initials}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-8 text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl dark:text-zinc-100"
              >
                {profile.name}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-2 flex items-center gap-1.5 text-sm text-zinc-500"
              >
                <MapPin className="h-3.5 w-3.5" />
                {profile.age}, {profile.location}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-300 hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-emerald-400"
                >
                  <Mail className="h-4 w-4" />
                  Get in Touch
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-5 flex items-center gap-3"
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
            >
              {profile.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
}
