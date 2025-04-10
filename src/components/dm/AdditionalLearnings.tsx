"use client";

import { motion } from "framer-motion";

const learnings = [
  {
    title: "Leadership Training",
    description:
      "Gain insights into leadership essentials such as focus, discipline, time management, and people skills, guided by a professional coach. Techniques like meditation and journaling will be incorporated to foster self-awareness and personal growth.",
  },
  {
    title: "Communication & Presentation",
    description:
      "Develop effective communication techniques and impactful presentation skills to convey your ideas confidently.",
  },
  {
    title: "English Communication",
    description:
      "Specialized training for those looking to enhance their English speaking, reading, and writing skills.",
  },
  {
    title: "Teamwork",
    description:
      "Understand the dynamics of collaboration, fostering teamwork to achieve shared goals effectively.",
  },
  {
    title: "Resume Building",
    description:
      "Learn how to create a professional, standout resume tailored to your career goals.",
  },
 ];

export function AdditionalLearnings() {
  return (
    <section className="w-full py-12 bg-[#140F20] text-white">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-[#FFCA2D] mb-4">
        Additional Learnings
      </h2>
      <div className="h-[3px] w-275 bg-[#FFCA2D] mx-auto mb-6"></div>

      {/* subheading */}
      <p className="text-center text-[#FFFFFF] text-3xl font-semibold w-full mx-auto mb-12">
        Alongside your primary subject, the program offers comprehensive support<br />
        <span className="block pr-30">training to equip you with essential career-related skills, including:</span>
      </p>
      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 max-w-6xl mx-auto">
        {learnings.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-3"
          >
            {/* Bullet Point */}
            <span className="text-[#FFCA2D] text-xl">●</span>

            {/* Text Content */}
            <div>
              <h3 className="text-lg font-semibold text-[#FFCA2D]">
                {item.title}:
              </h3>
              <p className="text-[#FFFFFF] -ml-6">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
