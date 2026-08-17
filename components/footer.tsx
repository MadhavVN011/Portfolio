import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub, SiX } from "react-icons/si";
import { profile } from "@/data/portfolio";
import { Container } from "@/components/container";

const footerLinks = [
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
  { label: "X", href: profile.twitter, icon: SiX },
  { label: "GitHub", href: profile.github, icon: SiGithub },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 py-10 dark:border-zinc-800/50">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-4">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
