import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/cn";

const socials = [
  { icon: GithubIcon, href: SITE.github, label: "GitHub" },
  { icon: LinkedinIcon, href: SITE.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${SITE.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-subtle">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground-muted">
          &copy; {new Date().getFullYear()} {SITE.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className={cn(
                "p-2 rounded-lg text-foreground-muted hover:text-accent hover:bg-accent-subtle",
                "transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              )}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
