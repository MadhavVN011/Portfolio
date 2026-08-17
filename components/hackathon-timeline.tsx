"use client";

import { MapPin, Trophy } from "lucide-react";
import { FaEthereum } from "react-icons/fa6";
import { SiWeb3Dotjs } from "react-icons/si";
import type { ComponentType } from "react";
import { hackathons } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/container";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  ethereum: FaEthereum,
  web3: SiWeb3Dotjs,
};

export function HackathonTimeline() {
  return (
    <section id="hackathons" className="py-20">
      <Container>
        <SectionHeading
          title="Hackathons"
          subtitle="Inspiration from building under pressure"
          icon={Trophy}
        />
        <div className="relative mx-auto max-w-2xl">
          <div className="absolute top-4 bottom-4 left-4 w-px bg-zinc-200 dark:bg-zinc-800" />
          <div className="space-y-8">
            {hackathons.map((hackathon) => {
              const Icon = iconMap[hackathon.iconType] ?? FaEthereum;
              return (
                <div key={hackathon.name} className="relative flex gap-4">
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-indigo-500/40 bg-zinc-900 text-indigo-400 shadow-[0_0_14px_-4px_rgba(99,102,241,0.6)]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="flex-1 rounded-2xl border border-zinc-200/70 bg-white p-5 transition-colors hover:border-zinc-300 dark:border-zinc-800/50 dark:bg-[#18181b] dark:hover:border-zinc-700">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                        {hackathon.name}
                      </h3>
                      <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-500">
                        {hackathon.result}
                      </span>
                    </div>
                    {hackathon.detail && (
                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {hackathon.detail}
                      </p>
                    )}
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-zinc-500">
                      <MapPin className="h-3.5 w-3.5" />
                      {hackathon.location}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
