"use client";

import { motion } from "framer-motion";

export function AboutCourse() {
  return (
    <section className="relative w-full flex justify-center py-12 px-4 sm:px-6 bg-[#140F20] text-white overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute -left-40 bottom-0 blur-3xl w-72 h-72 rounded-full bg-[#FFA6A6] opacity-15 z-0"></div>
      <div className="absolute -right-20 bottom-0 blur-3xl w-72 h-72 rounded-full bg-[#FFA6A6] opacity-15 z-0"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl w-full p-6 sm:p-8 bg-[#FFCA2D] rounded-3xl shadow-lg border border-yellow-400 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-raleway font-semibold text-[#140F20] mb-4">
          About the Course
        </h2>
        <p data-gsap="lines" className="text-sm sm:text-base md:text-lg text-[#140F20] font-sans font-normal leading-relaxed">
          The course is project-based. You learn a concept, then use it
          straight away: building pages, running campaigns, making content and
          setting up automations. In the final month you plan and run a live
          campaign as your capstone project.
        </p>
      </motion.div>
    </section>
  );
}
