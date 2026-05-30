import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import SectionHeading from "@/components/ui/section-heading";
import AnimatedEntry from "@/components/ui/animated-entry";
import { SITE } from "@/lib/constants";
import ContactForm from "./contact-form";

const socials = [
  { icon: GithubIcon, href: SITE.github, label: "GitHub" },
  { icon: LinkedinIcon, href: SITE.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${SITE.email}`, label: "Email" },
];

export default function ContactView() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-background-subtle"
      aria-label="Contact"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — intro */}
          <div>
            <AnimatedEntry>
              <SectionHeading
                eyebrow="Contact"
                title="Let's work together."
                subtitle="Open to full-time roles, freelance projects, or just a good conversation about tech."
              />
            </AnimatedEntry>

            <AnimatedEntry delay={0.1}>
              <div className="space-y-4">
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-foreground-muted hover:text-accent transition-colors duration-200 group"
                >
                  <span className="p-2 rounded-lg bg-accent-subtle text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-200">
                    <Mail size={18} />
                  </span>
                  <span className="text-sm font-medium">{SITE.email}</span>
                </a>

                <div className="flex items-center gap-2 pt-2">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-2.5 rounded-lg text-foreground-muted hover:text-accent hover:bg-accent-subtle transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedEntry>
          </div>

          {/* Right — form */}
          <AnimatedEntry delay={0.15} direction="right">
            <ContactForm email={SITE.email} />
          </AnimatedEntry>
        </div>
      </div>
    </section>
  );
}
