"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";

interface HeroCtaProps {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export default function HeroCta({
  name,
  title,
  location,
  email,
  github,
  linkedin,
  resumeUrl,
}: HeroCtaProps) {
  const shouldReduce = useReducedMotion();

  const animate = (delay: number) =>
    shouldReduce
      ? {}
      : fadeUp(delay);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Availability badge */}
      <motion.div {...animate(0)}>
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent-subtle text-accent text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Open to opportunities
        </span>
      </motion.div>

      {/* Name */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight"
        {...animate(0.1)}
      >
        Hi, I&apos;m{" "}
        <span className="text-accent relative">
          {name}
        </span>
      </motion.h1>

      {/* Title */}
      <motion.h2
        className="text-lg sm:text-xl md:text-2xl text-foreground-muted font-medium"
        {...animate(0.2)}
      >
        {title}
      </motion.h2>

      {/* Location */}
      <motion.p
        className="flex items-center gap-1.5 text-sm text-foreground-faint"
        {...animate(0.25)}
      >
        <MapPin size={14} />
        {location}
      </motion.p>

      {/* Description */}
      <motion.p
        className="max-w-2xl text-base sm:text-lg text-foreground-muted leading-relaxed"
        {...animate(0.3)}
      >
        4 years shipping production-grade{" "}
        <span className="text-foreground font-medium">React &amp; Next.js</span>{" "}
        at scale. Passionate about{" "}
        <span className="text-foreground font-medium">
          performance, AI-powered products,
        </span>{" "}
        and engineering that drives real revenue.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-3 mt-2"
        {...animate(0.4)}
      >
        <motion.a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:bg-accent-hover transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          whileHover={shouldReduce ? {} : { scale: 1.03 }}
          whileTap={shouldReduce ? {} : { scale: 0.97 }}
        >
          <ExternalLink size={16} />
          View Resume
        </motion.a>

        <motion.a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent text-accent font-medium text-sm hover:bg-accent-subtle transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          whileHover={shouldReduce ? {} : { scale: 1.03 }}
          whileTap={shouldReduce ? {} : { scale: 0.97 }}
        >
          <Mail size={16} />
          Get in Touch
        </motion.a>
      </motion.div>

      {/* Social links */}
      <motion.div
        className="flex items-center gap-2 mt-1"
        {...animate(0.5)}
      >
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="p-2.5 rounded-lg text-foreground-muted hover:text-accent hover:bg-accent-subtle transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <GithubIcon size={20} />
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="p-2.5 rounded-lg text-foreground-muted hover:text-accent hover:bg-accent-subtle transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <LinkedinIcon size={20} />
        </a>
        <a
          href={`mailto:${email}`}
          aria-label="Email"
          className="p-2.5 rounded-lg text-foreground-muted hover:text-accent hover:bg-accent-subtle transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <Mail size={20} />
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="mt-8 flex flex-col items-center gap-1.5 text-foreground-faint"
        {...animate(0.6)}
      >
        <span className="text-xs tracking-wider uppercase">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-foreground-faint to-transparent"
          animate={shouldReduce ? {} : { scaleY: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
