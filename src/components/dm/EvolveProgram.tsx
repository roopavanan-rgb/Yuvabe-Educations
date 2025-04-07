"use client";

import { motion } from "framer-motion";

export function EvolveProgram() {
  return (
    <section className="w-full py-12 bg-[#140F20] text-white text-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-[#FFCA2D] mb-8">
        What Is The EVOLVE Program?
      </h2>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-6"
      >
        <ul className="space-y-6 text-[#FFFFFF] text-lg leading-relaxed text-left">
          <li className="flex items-start gap-3">
          <span className="text-[#FFCA2D] text-xl">●</span>
            <span>The Evolve Program is designed to be a transformative journey, empowering individuals to unlock their true potential and achieve personal growth. At its core, the program provides participants with tools and experiences beyond academic or professional skills, focusing instead on holistic development.</span>
          </li>
          <li className="flex items-start gap-3">
          <span className="text-[#FFCA2D] text-xl">●</span>
            <span>Through Evolve, you&apos;ll discover how to communicate clearly and present your ideas confidently, enhancing your ability to make an impact in any setting.</span>
          </li>
          <li className="flex items-start gap-3">
          <span className="text-[#FFCA2D] text-xl">●</span>
            <span>In essence, the Evolve Program isn&apos;t just about gaining skills—it&apos;s about reshaping how you approach challenges, connect with others, and grow as an individual. It&apos;s a journey of self-discovery and empowerment designed to help you become the best version of yourself.</span>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
