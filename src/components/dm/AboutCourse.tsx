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
        <p className="text-sm sm:text-base md:text-lg text-[#140F20] font-sans font-normal leading-relaxed">
          Yuvabe Education&apos;s Digital Marketing Bridge Program is designed to
          provide an in-depth understanding of the digital marketing landscape.
          This 12-week, in-person classroom experience will help you build
          essential skills through practical training, real-world case studies,
          and industry mentorship.
        </p>
      </motion.div>
    </section>
  );
}
