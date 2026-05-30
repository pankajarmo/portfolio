import { ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import AnimatedEntry from "@/components/ui/animated-entry";
import { SITE } from "@/lib/constants";
import SkillsGrid from "./skills-grid";
import { SkillCategory } from "@/data/types";

interface AboutViewProps {
  skillCategories: SkillCategory[];
}

export default function AboutView({ skillCategories }: AboutViewProps) {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-background-subtle"
      aria-label="About"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — bio */}
          <div>
            <AnimatedEntry>
              <SectionHeading
                eyebrow="About Me"
                title="Building software that scales."
              />
            </AnimatedEntry>

            <AnimatedEntry delay={0.1}>
              <div className="space-y-4 text-foreground-muted leading-relaxed">
                <p>
                  I&apos;m a <span className="text-foreground font-medium">frontend-focused software engineer</span> with
                  4 years of experience shipping production-grade React and
                  Next.js applications at scale.
                </p>
                <p>
                  At{" "}
                  <span className="text-foreground font-medium">Apna</span>,
                  I&apos;ve owned entire product verticals — from migrating a
                  monolithic app to Next.js (
                  <span className="text-accent font-medium">+30% impressions</span>),
                  to architecting an AI-powered voice-driven job posting system
                  that generated{" "}
                  <span className="text-accent font-medium">₹10L in additional monthly revenue</span>.
                </p>
                <p>
                  Currently expanding into{" "}
                  <span className="text-foreground font-medium">
                    full-stack and Agentic AI development
                  </span>{" "}
                  — building RAG pipelines, LLM-powered search, and autonomous
                  agents.
                </p>
                <p>
                  I graduated from{" "}
                  <span className="text-foreground font-medium">
                    IIT Kharagpur
                  </span>{" "}
                  with a dual B.Tech + M.Tech degree and bring an
                  engineering-first mindset to everything I build.
                </p>
              </div>

              <a
                href={SITE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:bg-accent-hover transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <ExternalLink size={16} />
                View Full Resume
              </a>
            </AnimatedEntry>
          </div>

          {/* Right — skills */}
          <div>
            <AnimatedEntry delay={0.15}>
              <h3 className="text-sm font-semibold text-foreground-faint tracking-widest uppercase mb-6">
                Tech Stack
              </h3>
            </AnimatedEntry>
            <SkillsGrid skillCategories={skillCategories} />
          </div>
        </div>
      </div>
    </section>
  );
}
