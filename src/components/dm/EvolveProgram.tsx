"use client";

import { motion } from "framer-motion";

const evolveLearnings = [
  "How to communicate clearly and present your ideas with confidence",
  "How to work in teams, manage your time and approach problems calmly",
  "Reflective practices like journaling and meditation",
];

export function EvolveProgram() {
  return (
    <section className="w-full py-12 bg-[#140F20] text-white text-center overflow-hidden">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFCA2D] mb-8">
        What is the Evolve Program?
      </h2>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-6 text-left"
      >
        <p data-gsap="lines" className="text-[#FFFFFF] text-base sm:text-lg leading-relaxed">
          Evolve is Yuvabe&apos;s personal growth program and runs alongside the
          course. It helps you build the skills that sit beside technical
          ability.
        </p>

        <p className="mt-6 text-[#FFFFFF] text-base sm:text-lg font-semibold">
          Through Evolve, you&apos;ll learn:
        </p>

        <ul className="mt-4 space-y-4 text-[#FFFFFF] text-base sm:text-lg leading-relaxed">
          {evolveLearnings.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#FFCA2D]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
