"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { modules, type ModuleItem } from "./modules";

export default function ModulesSlider() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const TOTAL_ITEMS = modules.length;

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const getThreshold = (index: number) =>
    TOTAL_ITEMS > 1 ? index / (TOTAL_ITEMS - 1) : 0;

  return (
    <section className="w-full py-12 bg-[#140F20] text-white overflow-hidden relative">
      {/* Background Blur */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-20 blur-3xl w-72 h-72 rounded-full bg-[#FFA6A6] opacity-15 z-0"></div>
      
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-raleway font-semibold text-[#FFCA2D] mb-4 z-10 relative">
        12 Immersive Modules
      </h2>
      <p data-gsap="lines" className="text-center text-white text-base sm:text-lg px-4 mb-4 z-10 relative">
        12 modules over 12 weeks, followed by a 4-week capstone project.
      </p>

      <div className="mx-auto max-w-6xl relative overflow-hidden px-4 sm:px-6 py-16">
        <div ref={timelineRef} className="relative">
          {/* Vertical Line */}
          <svg
            className="absolute left-1/2 top-0 h-full w-4 -translate-x-1/2  hidden md:block"
            viewBox="0 0 4 1000"
            preserveAspectRatio="none"
          >
            <path
              d="M2 0 V1000"
              stroke="#ffca2d4d"
              strokeWidth="2"
              fill="none"
            />
            <motion.path
              d="M2 0 V1000"
              stroke="#ffca2d"
              strokeWidth="2"
              fill="none"
              style={{ pathLength }}
            />
          </svg>

          <div className="space-y-12">
            {modules.map((item, index) => (
              <ModuleRow
                key={item.title}
                item={item}
                isLeft={index % 2 === 0}
                threshold={getThreshold(index)}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type ModuleRowProps = {
  item: ModuleItem;
  isLeft: boolean;
  threshold: number;
  scrollYProgress: MotionValue<number>;
};

function ModuleRow({ item, isLeft, threshold, scrollYProgress }: ModuleRowProps) {
  const { title, description, icon: Icon } = item;

  // 1. Logic for Fading in (Opacity)
  const rawOpacity = useTransform(
    scrollYProgress,
    [threshold - 0.12, threshold - 0.02],
    [0, 1]
  );

  const opacity = useSpring(rawOpacity, {
    stiffness: 90,
    damping: 20,
  });

  // 2. Logic for Dot Color change
  const dotProgress = useTransform(
    scrollYProgress,
    [threshold - 0.01, threshold],
    [0, 1]
  );

  const dotColor = useTransform(
    dotProgress,
    [0, 1],
    ["#ffca2d7d", "#ffca2d"]
  );

  return (
    <div
      className={`relative flex ${isLeft ? "justify-start" : "justify-end"}`}
    >
      {/* Dot */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
        <div className="bg-[#140f20] rounded-full p-0.5">
          <motion.span
            style={{ backgroundColor: dotColor }}
            className="block h-4 w-4 rounded-full ring-4 ring-[#140f20]"
          />
        </div>
      </div>

      {/* Card */}
      <motion.div
        style={{ opacity }}
        data-gsap="lift"
        className="bg-[#4A3B22] text-white rounded-2xl px-6 sm:px-8 py-6 w-full md:w-[calc(50%-2.5rem)] flex flex-col items-start justify-center shadow-lg border border-[#6B5530]"
      >
        <div className="flex items-center gap-3">
          <Icon
            data-gsap-icon
            aria-hidden="true"
            className="w-8 h-8 shrink-0 text-[#EFDFB1]"
            strokeWidth={1.5}
          />
          <h3 className="text-lg sm:text-xl font-semibold leading-tight text-white">
            {title}
          </h3>
        </div>

        <p className="text-sm sm:text-base leading-relaxed text-[#EFDFB1] mt-3">
          {description}
        </p>
      </motion.div>
    </div>
  );
}
