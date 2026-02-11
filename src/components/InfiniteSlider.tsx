"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const modules = [
  { id: "01", title: "Environmental Science and Conservation" },
  { id: "02", title: "Sustainable Development and Policy Frameworks" },
  { id: "03", title: "Climate Science" },
  { id: "04", title: "GHG Accounting and Carbon Footprinting" },
  { id: "05", title: "Renewable Energy Systems" },
  { id: "06", title: "Water Resource Management" },
  { id: "07", title: "Waste Management and Circular Economy" },
  { id: "08", title: "Sustainable Architecture" },
  { id: "09", title: "Community Engagement and Social Innovation" },
];

const TOTAL_ITEMS = modules.length;

export default function CurriculumTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const getThreshold = (index: number) => index / (TOTAL_ITEMS - 1);

  return (
    <div className="mx-auto max-w-6xl relative overflow-hidden py-24">
      {/* Timeline */}
      <div ref={timelineRef} className="relative">
        {/* Vertical Line */}
        <svg
          className="absolute left-1/2 top-0 h-full w-4 -translate-x-1/2"
          viewBox="0 0 4 1000"
          preserveAspectRatio="none"
        >
          {/* Base line */}
          <path
            d="M2 0 V1000"
            stroke="#4B6F44"
            strokeWidth="2"
            fill="none"
          />

          {/* Animated line */}
          <motion.path
            d="M2 0 V1000"
            stroke="#A3E635"
            strokeWidth="2"
            fill="none"
            style={{ pathLength }}
          />
        </svg>

        <div className="space-y-20">
          {modules.map((item, index) => {
            const isLeft = index % 2 === 0;
            const threshold = getThreshold(index);

            const rawOpacity = useTransform(
              scrollYProgress,
              [threshold - 0.12, threshold - 0.02],
              [0, 1]
            );

            const opacity = useSpring(rawOpacity, {
              stiffness: 90,
              damping: 20,
            });

            const dotProgress = useTransform(
              scrollYProgress,
              [threshold - 0.01, threshold],
              [0, 1]
            );

            const dotColor = useTransform(
              dotProgress,
              [0, 1],
              ["#6B8E5E", "#A3E635"]
            );

            return (
              <div
                key={item.id}
                className={`relative flex ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Dot */}
                <motion.span
                  style={{ backgroundColor: dotColor }}
                  className="
                    absolute
                    left-1/2
                    top-8
                    z-10
                    h-4
                    w-4
                    -translate-x-1/2
                    rounded-full
                    ring-4
                    ring-[#1B360F]
                  "
                />

                {/* Card (Fade Only) */}
                <motion.div
                  style={{ opacity }}
                  className="w-full max-w-md"
                >
                  <div className="rounded-2xl bg-[#23491A] border border-[#90C645] p-6 shadow-lg shadow-black/20">
                    <span className="text-xl sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#A2E64D] font-primary">
                    {item.id}
                    </span>

                    <h3 className="text-lg font-semibold text-white leading-snug mt-4 font-primary">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}