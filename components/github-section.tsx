"use client";

import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/container";
import { useMounted } from "@/lib/use-mounted";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[140px] items-center justify-center text-sm text-zinc-500 dark:text-zinc-600">
        Loading contribution graph…
      </div>
    ),
  },
);

const lightTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
};

const darkTheme = {
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

export function GitHubSection() {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section id="github" className="py-20">
      <Container>
        <SectionHeading
          title="GitHub Activity"
          subtitle={`@${profile.githubUsername}`}
          icon={SiGithub}
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-zinc-200/70 bg-white p-5 transition-colors hover:border-zinc-300 dark:border-zinc-800/50 dark:bg-[#18181b] dark:hover:border-zinc-700"
        >
          <div className="overflow-x-auto">
            <div className="min-w-[650px]">
              <GitHubCalendar
                username={profile.githubUsername}
                colorScheme={isDark ? "dark" : "light"}
                theme={isDark ? darkTheme : lightTheme}
                fontSize={12}
                blockSize={11}
                blockMargin={4}
              />
            </div>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center text-sm font-medium text-zinc-500 transition-colors hover:text-emerald-500"
          >
            @{profile.githubUsername}
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
