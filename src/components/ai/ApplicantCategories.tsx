"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const phases = [
  {
    phase: "PHASE 01",
    title: "Helper",
    description: "Writing snippets and explaining code blocks.",
  },
  {
    phase: "PHASE 02",
    title: "Guide",
    description: "Suggesting architecture and debugging errors.",
  },
  {
    phase: "PHASE 03",
    title: "Collaborator",
    description: "Pair programming on complex feature sets.",
  },
  {
    phase: "PHASE 04",
    title: "Builder",
    description: "You direct the AI to execute your vision.",
  },
];

// ✅ Properly typed variants
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemAnim: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1], // ✅ best practice easing
    },
  },
};

export function ApplicantCategories() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#001B44] text-white overflow-hidden">
      <div className="container mx-auto max-w-[1200px]">
        {/* Titles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24 flex flex-col gap-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black tracking-tight">
            Will <span className="text-[#FFC107]">AI</span> just do everything
            for you?
          </h2>

          <p className="text-xl md:text-2xl text-slate-300 font-medium">
            No. Here's how it actually works.
          </p>

          <p className="text-lg md:text-[19px] text-[#A8C0DB]">
            You'll work alongside an AI coding agent — but with structure, not
            autopilot.
          </p>
        </motion.div>

        {/* Phases */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-center items-stretch w-full mx-auto py-4"
        >
          {phases.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemAnim}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 18,
              }}
              className={`group flex-1 flex flex-col items-center text-center px-6 py-10 lg:py-0 relative transition-all
                ${
                  idx !== phases.length - 1
                    ? "lg:border-r lg:border-[#233C62]"
                    : ""
                }
                ${
                  idx !== phases.length - 1
                    ? "border-b border-[#233C62] lg:border-b-0"
                    : ""
                }`}
            >
              {/* Divider Glow */}
              {idx !== phases.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-16 bg-[#233C62] group-hover:bg-[#58AEE9] transition-colors duration-300" />
              )}

              {/* Phase */}
              <span className="text-[13px] tracking-[0.15em] text-[#A8C0DB] uppercase mb-6 group-hover:text-[#FFC107] transition">
                {item.phase}
              </span>

              {/* Title */}
              <h3 className="text-2xl md:text-[28px] font-bold mb-5 tracking-wide group-hover:text-[#58AEE9] transition">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-[#829EBE] leading-relaxed max-w-[240px] group-hover:text-white transition">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
          }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-28"
        >
          <p className="text-[22px] md:text-3xl text-[#E2E8F0] max-w-5xl mx-auto font-medium tracking-wide">
            You don't become dependent on AI. You become effective with it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
