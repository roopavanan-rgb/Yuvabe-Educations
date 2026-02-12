"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export type ModuleItem = {
  title: string;
  description: string;
  icon: string;
};

type ModulesSliderProps = {
  modules: ModuleItem[];
};

export default function ModulesSlider({ modules }: ModulesSliderProps) {
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
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-raleway font-semibold text-[#FFCA2D] mb-16 z-10 relative">
        12 Immersive Modules
      </h2>

      <div className="mx-auto max-w-6xl relative overflow-hidden py-24">
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
            {modules.map((item, index) => {
              const { title, description, icon } = item;
              const isLeft = index % 2 === 0;
              const threshold = getThreshold(index);

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
                  key={index}
                  className={`relative flex ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Dot Container - Now with Opacity Fade & Shield */}
                  <motion.div 
                    className="absolute left-1/2 top-8 -translate-x-1/2 z-10 hidden md:block"
                  >
                    <div className="bg-[#140f20] rounded-full p-0.5">
                      <motion.span
                        style={{ backgroundColor: dotColor }}
                        className="block h-4 w-4 rounded-full ring-4 ring-[#140f20]"
                      />
                    </div>
                  </motion.div>

                  {/* Card - Already has Opacity Fade */}
                  <motion.div
                    style={{ opacity }}
                    className="bg-[#FFCA2D66] text-white rounded-3xl px-8 py-4 max-w-96 h-[150px] flex flex-col items-start justify-center shadow-lg border border-[#E8AC35]"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={icon}
                        alt={title}
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain"
                      />
                      <h3 className="text-lg font-semibold leading-tight text-[#DFDFDF]">
                        {title}
                      </h3>
                    </div>

                    <p className="text-base leading-snug text-white mt-2">
                      {description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}