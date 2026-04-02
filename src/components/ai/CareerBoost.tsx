"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const programDetails = [
  { label: "Duration", value: "12 weeks · Full-time" },
  { label: "Format", value: "In-person · Project-based · Collaborative" },
  { label: "Location", value: "Auroville, Tamil Nadu" },
  { label: "Output", value: "5–6 working AI tools + personal portfolio" },
  {
    label: "Taught By",
    value: "Experienced AI/ML practitioners from industry",
  },
  { label: "Intake", value: "Limited seats per cohort" },
];

// ✅ Typed Variants
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemAnim: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1], // ✅ FIXED
    },
  },
};

export function CareerBoost() {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-[#001B44] overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 h-full w-full md:w-[60%] pointer-events-none opacity-40 mix-blend-screen z-0">
        <Image
          src="/assets/ai.svg"
          alt="AI Network Graphic"
          fill
          className="object-cover object-right"
        />
      </div>

      <div className="container mx-auto max-w-[1200px] relative z-10 w-full px-2 lg:px-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.4, 0, 0.2, 1],
          }}
          viewport={{ once: true }}
          className="mb-14 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-[46px] font-bold text-white tracking-tight leading-tight">
            What the program <span className="text-[#FFC107]">looks like</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-10 gap-x-12 lg:gap-x-24"
        >
          {programDetails.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemAnim}
              whileHover={{ x: 8 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 18,
              }}
              className="group relative pl-6 md:pl-7 py-3"
            >
              {/* Animated Border */}
              <div className="absolute left-0 top-0 h-full w-[4px] bg-[#FFC107] transition-all duration-300 group-hover:w-[6px] group-hover:bg-[#58AEE9]" />

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-white/5 to-transparent rounded-lg pointer-events-none" />

              {/* Content */}
              <p className="text-[16px] md:text-[18px] text-[#E2E8F0] tracking-wide font-medium">
                <span className="text-white font-semibold">{item.label}</span>{" "}
                <span className="text-[#A8C0DB]">:</span> {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
