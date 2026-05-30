"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { SkillCategory } from "@/data/types";

interface SkillsGridProps {
  skillCategories: SkillCategory[];
}

export default function SkillsGrid({ skillCategories }: SkillsGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduce ? 0 : 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 400, damping: 28 },
    },
  };

  return (
    <div ref={ref} className="space-y-6">
      {skillCategories.map((category) => (
        <div key={category.name}>
          <p className="text-xs font-semibold text-foreground-faint uppercase tracking-wider mb-2.5">
            {category.name}
          </p>
          <motion.div
            className="flex flex-wrap gap-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {category.skills.map((skill) => (
              <motion.span
                key={skill}
                variants={itemVariants}
                className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-background-card border border-border text-foreground-muted hover:border-accent hover:text-accent hover:bg-accent-subtle transition-colors duration-150 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
