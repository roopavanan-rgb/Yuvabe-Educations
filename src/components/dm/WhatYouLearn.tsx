"use client";
import { motion } from "framer-motion";

const learnTopics = [
  {
    title: "Digital Marketing Foundations",
    description: [
      "SEO & website optimization techniques.",
      "Content marketing, blogging, and copywriting.",
      "Social media marketing & advertising strategies."
    ],
  },
  {
    title: "Data-Driven Marketing & Growth",
    description: [
      "Google Ads, paid campaigns, and performance tracking.",
      "Email marketing, automation, and customer engagement.",
      "Growth hacking and conversion optimization."
    ],
  },
  {
    title: "Brand Building & Storytelling",
    description: [
      "Crafting a compelling brand identity.",
      "Engaging storytelling for content marketing.",
      "Capstone project: Create and launch a real-world campaign."
    ],
  },
];

export default function WhatYouLearn() {
  return (
    <section className="relative w-full py-16 px-4 sm:px-6 flex flex-col items-center bg-[#140F20] text-center overflow-hidden">
      {/* Background Blur */}
      <div className="absolute left-10 top-20 blur-3xl w-[360px] h-[360px] rounded-full bg-[#976346] opacity-15 z-0"></div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFCA2D] z-10">
        What You&apos;ll Learn:
      </h2>

      <div className="relative z-10 mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl w-full">
        {learnTopics.map((topic, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-[#FFCA2D] p-6 rounded-3xl text-left shadow-md"
          >
            {/* Decorative Bar */}
            <div className="absolute top-8 left-0 w-2 h-14 bg-[#D85151] rounded-3xl"></div>

            <h3 className="text-lg sm:text-xl font-semibold text-[#140F20] pl-4 mb-3">
              {topic.title}
            </h3>

            <ul className="list-disc list-inside text-[#140F20] text-sm sm:text-base leading-relaxed">
              {topic.description.map((point, idx) => (
                <li key={idx} className="mt-1">{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
