"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface AnimatedEntryProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}

export default function AnimatedEntry({
  children,
  delay = 0,
  className,
  direction = "up",
}: AnimatedEntryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const initialMap = {
    up: { opacity: 0, y: 20 },
    left: { opacity: 0, x: -20 },
    right: { opacity: 0, x: 20 },
    none: { opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={shouldReduce ? { opacity: 1 } : initialMap[direction]}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : shouldReduce
          ? { opacity: 1 }
          : initialMap[direction]
      }
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
