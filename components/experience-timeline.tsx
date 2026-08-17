"use client";

import { Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20">
      <Container>
        <SectionHeading title="Experience" icon={Briefcase} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {experiences.map((experience) => (
            <div
              key={experience.role}
              className="rounded-2xl border border-zinc-200/70 bg-white p-5 transition-colors hover:border-zinc-300 dark:border-zinc-800/50 dark:bg-[#18181b] dark:hover:border-zinc-700"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                      {experience.role}
                    </h3>
                    {experience.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-500">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </span>
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-zinc-500">
                    {experience.organization}
                  </p>
                </div>
                <span
                  className={cn(
                    "rounded-full border px-2.5 py-1 text-xs",
                    experience.current
                      ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-500"
                      : "border-zinc-200 bg-zinc-100 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400",
                  )}
                >
                  {experience.period}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {experience.details}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
