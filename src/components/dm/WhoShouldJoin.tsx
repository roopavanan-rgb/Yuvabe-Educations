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
    <section className="w-full py-12 bg-[#140F20] text-[#FFFFFF] overflow-x-hidden">
      <div className="absolute left-10 blur-3xl w-90 h-90 rounded-full bg-[#976346] opacity-15"></div>
      {/* Title */}
      <h2 className="text-3xl font-semibold text-center mb-12">
      <div className="text-[#FFCA2D] font-raleway font-semibold">Who Should Join?</div>
      <div className="text-[#FFFFFF] font-sans font-semibold mt-4">This course is designed for:</div>
      </h2>

      {/* Cards Grid - 2x2 Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 max-w-4xl mx-auto">
        {joinCategories.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-[#FFCA2D66] border-2 border-[#E8AC35] rounded-3xl text-center"
          >
            <p className="text-[#DFDFDF] font-sans font-semibold">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
