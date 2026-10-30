"use client";
import { motion } from "framer-motion";

export function CourseFeesAndScholarships() {
  return (
    <section className="relative w-full py-16 bg-[#140F20] text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute right-10 top-32 blur-3xl w-[400px] h-[400px] rounded-full bg-[linear-gradient(90deg,_rgba(123,34,191,1)_0%,_rgba(80,72,185,1)_52%,_rgba(28,103,131,1)_100%)] opacity-10 z-0"></div>

      <div className="absolute right-0 bottom-10 translate-x-[30%] blur-3xl w-[500px] h-[500px] bg-[linear-gradient(90deg,_rgba(151,99,70,1)_50%,_rgba(151,99,70,0.85)_100%)] opacity-10 rounded-[2rem] z-0"></div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#FFCA2D] mb-12 z-10 relative">
        Course Fees
      </h2>

      {/* Course Fee */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10 p-8 bg-[#1f1b2b] rounded-2xl border border-[#FFCA2D]/20 shadow-md max-w-3xl mx-auto text-center"
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
          Course Fee
        </h3>

        <p className="text-3xl sm:text-4xl font-bold text-[#FFCA2D]">
          Free
        </p>
      </motion.div>
    </section>
  );
}
