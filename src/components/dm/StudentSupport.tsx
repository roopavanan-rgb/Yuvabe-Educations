"use client";

import { motion } from "framer-motion";

const supportItems = [
  {
    title: "No additional costs",
    description: "All materials, tools access and certification are included",
  },
  {
    title: "On-campus support",
    description: "Technical and administrative help throughout the course",
  },
  {
    title: "Mentor check-ins",
    description: "Regular feedback on your projects and capstone",
  },
];

export function StudentSupport() {
  return (
    <section className="w-full py-12 bg-[#140F20] text-white text-center overflow-hidden">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-raleway font-semibold text-[#FFCA2D] mb-8">
        Student Support
      </h2>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto">
        {supportItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 bg-[#2B2319] border border-[#5A4626] rounded-3xl"
          >
            <h3 className="text-lg font-semibold text-[#FFCA2D]">{item.title}</h3>
            <p className="mt-2 text-sm sm:text-base text-[#DFDFDF] leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
