"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const cards = [
  { step: "01", text: "Run a real AI application immediately." },
  { step: "02", text: "Modify it to see how it breaks and works." },
  { step: "03", text: "Use AI as a partner to write better code." },
  { step: "04", text: "Build again. Faster. Stronger. Real." },
];

// ✅ Typed variants
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardAnim: Variants = {
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
      ease: [0.4, 0, 0.2, 1], // ✅ FIXED
    },
  },
};

export function WhatYouLearn() {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-[#001B44] text-white overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.4, 0, 0.2, 1],
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-snug max-w-6xl mx-auto">
            What if you didn't start with theory... but with{" "}
            <span className="text-[#FFC107]">building?</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 font-medium">
            At Yuvabe, you don't prepare to code. You code. From Day 1.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardAnim}
              whileHover={{
                y: -12,
                scale: 1.04,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 18,
              }}
              className="group relative bg-[#15325C]/70 backdrop-blur-md border border-[#2D4A77] rounded-[28px] py-6 px-8 flex flex-col min-h-[220px] overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#58AEE9]/20 to-transparent pointer-events-none"></div>

              {/* Step */}
              <motion.span
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-2xl md:text-3xl font-bold mb-4 tracking-wider text-white group-hover:text-[#58AEE9] transition"
              >
                {card.step}
              </motion.span>

              {/* Text */}
              <p className="text-base md:text-lg text-gray-200 leading-relaxed group-hover:text-white transition">
                {card.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Flow Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gray-300 tracking-wide text-lg md:text-xl">
            Build <span className="mx-2 text-gray-500">→</span>
            Learn <span className="mx-2 text-gray-500">→</span>
            Build
          </p>
        </motion.div>

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
          }}
          viewport={{ once: true }}
          className="flex justify-center max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 px-6 md:px-0">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: 40 }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="w-1.5 bg-[#FFC107]"
            />
            <p className="text-lg md:text-2xl font-medium text-[#E2E8F0]">
              AI is not a crutch here. It's your collaborator.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#3991BD] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
}
