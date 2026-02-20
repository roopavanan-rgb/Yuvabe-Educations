"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SLineBackground() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const pathD = `
  M200 80
  C 340 220, 120 360, 200 560
  C 280 760, 80 920, 200 1120
  C 320 1320, 200 1500, 200 1620
`;

  return (
    <div
      ref={sectionRef}
      className="absolute inset-0 pointer-events-none z-0 hidden md:block"
    >
      <motion.svg
        className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[400px]"
        viewBox="0 0 400 1750"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Gradient */}
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F99E1F" />
            <stop offset="100%" stopColor="#6A4EDA" />
          </linearGradient>

          {/* Arrow Head */}
          <marker
            id="arrowHead"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#6A4EDA" />
          </marker>
        </defs>

        {/* Base faded dashed path */}
        <path
          d={pathD}
          stroke="#6A4EDA"
          strokeOpacity="0.12"
          strokeWidth="4"
          strokeDasharray="8 8"
          fill="none"
        />

        {/* Animated dashed path with arrow */}
        <motion.path
          d={pathD}
          stroke="url(#gradient)"
          strokeWidth="4"
          strokeDasharray="14 12" // 👈 longer dash + clear gap
          strokeLinecap="butt" // 👈 sharp edges (IMPORTANT)
          fill="none"
          markerEnd="url(#arrowHead)"
          style={{ pathLength }}
        />
      </motion.svg>
    </div>
  );
}
