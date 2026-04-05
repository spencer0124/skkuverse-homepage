"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface AnimatedRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedReveal({
  children,
  delay = 0,
  className,
}: AnimatedRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
