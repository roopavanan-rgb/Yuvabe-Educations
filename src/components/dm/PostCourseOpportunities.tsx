"use client";

import { motion } from "framer-motion";

const opportunities = [
  {
    text: "A portfolio of real work to show employers",
  },
  {
    text: "Access to the alumni network for ongoing learning and opportunities",
  },
  {
    text: "Pathways to advanced courses and certifications",
  },
];

export function PostCourseOpportunities() {
  return (
    <section className="w-full py-12 bg-[#140F20] text-[#FFFFFF] text-center overflow-hidden">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-raleway font-semibold text-[#FFCA2D] mb-8">
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
            className="p-8 bg-[#6B5320] border border-[#E8AC35] text-[#FFFFFF] font-sans font-semibold rounded-3xl flex items-center justify-center min-h-[150px]"
          >
            {opportunity.text}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
