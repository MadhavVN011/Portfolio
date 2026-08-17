"use client";

import { motion } from "framer-motion";
import { BadgeCheck, GraduationCap } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/container";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20">
      <Container>
        <SectionHeading
          title="Certifications"
          subtitle="Courses and credentials I've completed"
          icon={GraduationCap}
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
              className="group flex items-start gap-3 rounded-2xl border border-zinc-200/70 bg-white p-4 transition-colors hover:border-zinc-300 dark:border-zinc-800/50 dark:bg-[#18181b] dark:hover:border-zinc-700"
            >
              <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {certification.name}
                </h3>
                <p className="mt-0.5 text-xs text-zinc-500">
                  {certification.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
