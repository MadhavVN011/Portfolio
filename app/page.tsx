import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ProjectsSection } from "@/components/projects-section";
import { GitHubSection } from "@/components/github-section";
import { SkillsGrid } from "@/components/skills-grid";
import { CertificationsSection } from "@/components/certifications-section";
import { HackathonTimeline } from "@/components/hackathon-timeline";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ExperienceTimeline />
        <ProjectsSection />
        <GitHubSection />
        <SkillsGrid />
        <CertificationsSection />
        <HackathonTimeline />
      </main>
      <Footer />
    </>
  );
}
