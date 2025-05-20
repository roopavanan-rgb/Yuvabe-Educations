"use client";

import { motion } from "framer-motion";

const joinCategories = [
  {
    description: "Students and recent graduates eager to build skills in Digital Marketing.",
  },
  {
    description: "Entrepreneurs and business owners who want to scale their ventures online.",
  },
  {
    description: "Aspiring marketers looking to build a strong foundation in Digital Marketing.",
  },
  {
    description: "Professionals aiming to transition into a Digital Marketing role.",
  },
];

export function WhoShouldJoin() {
  return (
    <section className="relative w-full py-12 px-4 sm:px-6 bg-[#140F20] text-[#FFFFFF] overflow-hidden">
      {/* Background Blur */}
      <div className="absolute -left-10 top-10 blur-3xl w-[300px] h-[300px] rounded-full bg-[#976346] opacity-15 z-0"></div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10 relative z-10">
        <div className="text-[#FFCA2D] font-raleway font-semibold">
          Who Should Join?
        </div>
        <div className="text-white font-sans font-semibold mt-2 text-base sm:text-lg">
          This course is designed for:
        </div>
      </h2>

      {/* Responsive Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {joinCategories.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 sm:p-7 bg-[#FFCA2D33] border border-[#E8AC35] rounded-3xl text-center"
          >
            <p className="text-[#DFDFDF] text-sm sm:text-base font-sans font-semibold leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
