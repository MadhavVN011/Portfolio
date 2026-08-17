"use client";

import { BarChart3, Cloud, Sparkles } from "lucide-react";
import {
  SiApache,
  SiC,
  SiCplusplus,
  SiCss,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFlask,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiKeras,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPython,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiSolidity,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import type { ComponentType, CSSProperties } from "react";
import { skillCategories } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/container";

const skillMeta: Record<
  string,
  { icon: ComponentType<{ className?: string; style?: CSSProperties }>; color: string }
> = {
  html5: { icon: SiHtml5, color: "#E34F26" },
  css3: { icon: SiCss, color: "#1572B6" },
  javascript: { icon: SiJavascript, color: "#F7DF1E" },
  typescript: { icon: SiTypescript, color: "#3178C6" },
  react: { icon: SiReact, color: "#61DAFB" },
  tailwindcss: { icon: SiTailwindcss, color: "#06B6D4" },
  figma: { icon: SiFigma, color: "#F24E1E" },
  python: { icon: SiPython, color: "#3776AB" },
  flask: { icon: SiFlask, color: "#8A8A93" },
  nodejs: { icon: SiNodedotjs, color: "#339933" },
  express: { icon: SiExpress, color: "#8A8A93" },
  solidity: { icon: SiSolidity, color: "#8A8A93" },
  c: { icon: SiC, color: "#A8B9CC" },
  cpp: { icon: SiCplusplus, color: "#00599C" },
  pytorch: { icon: SiPytorch, color: "#EE4C2C" },
  tensorflow: { icon: SiTensorflow, color: "#FF6F00" },
  keras: { icon: SiKeras, color: "#D00000" },
  scikitlearn: { icon: SiScikitlearn, color: "#F7931E" },
  opencv: { icon: SiOpencv, color: "#5C3EE8" },
  pandas: { icon: SiPandas, color: "#8B87D6" },
  numpy: { icon: SiNumpy, color: "#4DABCF" },
  aws: { icon: Cloud, color: "#FF9900" },
  linux: { icon: SiLinux, color: "#FCC624" },
  git: { icon: SiGit, color: "#F05032" },
  docker: { icon: SiDocker, color: "#2496ED" },
  mysql: { icon: SiMysql, color: "#4479A1" },
  apache: { icon: SiApache, color: "#D22128" },
  mongodb: { icon: SiMongodb, color: "#47A248" },
  powerbi: { icon: BarChart3, color: "#F2C811" },
};

export function SkillsGrid() {
  return (
    <section id="skills" className="py-20">
      <Container>
        <SectionHeading
          title="Skills"
          subtitle="Languages, frameworks, and tools I work with"
          icon={Sparkles}
        />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {skillCategories.map((group) => (
            <div key={group.category}>
              <h3 className="mb-3 text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                {group.category}
              </h3>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                {group.skills.map((skill) => {
                  const meta = skillMeta[skill.icon];
                  const Icon = meta?.icon ?? Sparkles;
                  const color = meta?.color ?? "#10b981";
                  return (
                    <div
                      key={skill.name}
                      style={{ "--glow": color } as CSSProperties}
                      className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-zinc-200/70 bg-white px-3 py-5 transition-all duration-300 hover:border-zinc-300 hover:shadow-[0_0_20px_-6px_var(--glow)] dark:border-zinc-800/50 dark:bg-[#18181b] dark:hover:border-zinc-700"
                    >
                      <Icon
                        className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                        style={{ color }}
                      />
                      <span className="text-xs text-zinc-500">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
