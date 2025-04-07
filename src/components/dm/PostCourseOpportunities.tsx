"use client";

import { motion } from "framer-motion";

const opportunities = [
  {
    text: "Paid internships (3 months) for the top 3 students at Yuvabe.",
  },
  {
    text: "Access to an alumni network for ongoing learning and collaboration.",
  },
  {
    text: "Opportunities for advanced courses and certifications at Yuvabe.",
  },
];

export function PostCourseOpportunities() {
  return (
    <section className="w-full py-12 bg-[#140F20] text-[#FFFFFF] text-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-[#FFCA2D] mb-6">
        Post-Course Opportunities
      </h2>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto">
        {opportunities.map((opportunity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-[#FFCA2D66] opacity-40 border-2 border-[#E8AC35] text-[#FFFFFF] font-semibold rounded-3xl"
          >
            {opportunity.text}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
