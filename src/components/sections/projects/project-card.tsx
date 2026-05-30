"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/social-icons";
import { Project } from "@/data/types";
import Badge from "@/components/ui/badge";
import { cn } from "@/lib/cn";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export default function ProjectCard({
  project,
  index,
  featured,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={shouldReduce ? {} : { y: -4 }}
      className={cn(
        "group relative flex flex-col rounded-xl border border-border bg-background-card",
        "shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]",
        "transition-shadow duration-300",
        featured && "lg:col-span-2"
      )}
    >
      {/* Featured label */}
      {featured && (
        <div className="absolute top-4 right-4">
          <Badge variant="accent">Featured</Badge>
        </div>
      )}

      <div className={cn("p-6 flex flex-col flex-1", featured && "lg:p-8")}>
        {/* Year */}
        <p className="text-xs font-medium text-foreground-faint mb-3">
          {project.year}
        </p>

        {/* Title */}
        <h3
          className={cn(
            "font-semibold text-foreground group-hover:text-accent transition-colors duration-200",
            featured ? "text-xl mb-3" : "text-base mb-2"
          )}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-foreground-muted leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="subtle">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="flex items-center gap-1.5 text-xs font-medium text-foreground-muted hover:text-accent transition-colors duration-150"
              >
                <GithubIcon size={14} />
                Source
              </a>
            )}
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="flex items-center gap-1.5 text-xs font-medium text-foreground-muted hover:text-accent transition-colors duration-150"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
