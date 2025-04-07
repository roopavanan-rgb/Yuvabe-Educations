"use client";

import { motion } from "framer-motion";

export function AboutCourse() {
  return (
    <section className="w-full flex justify-center py-8 bg-[#140F20] text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl p-8 bg-[#FFCA2D] rounded-3xl shadow-lg border-yellow-400 text-center"
      >
        <h2 className="text-3xl font-bold text-black mb-4">
          About the Course
        </h2>
        <p className="text-black leading-relaxed">
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
