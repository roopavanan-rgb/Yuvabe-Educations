"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function HighlightHover({ children, className }: Props) {
  return (
    <motion.span
      className={`relative inline-block cursor-default ${className ?? ""}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Sweep background — grows left-to-right on hover */}
      <motion.span
        aria-hidden
        className="absolute inset-x-[-3px] inset-y-[-1px] rounded-sm bg-[#F26622]/14 origin-left pointer-events-none"
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Text: tiny upward nudge + color brightens */}
      <motion.span
        className="relative"
        variants={{
          rest: { y: 0, color: "inherit" },
          hover: { y: -2, color: "#f7813a" },
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
