"use client";
import { motion } from "framer-motion";

const learnTopics = [
  {
    title: "Month 1: Foundations",
    description: [
      "Introduction to Digital Marketing",
      "Digital Marketing Landscape",
      "Behavioral Marketing",
      "Brand Design & Strategy",
    ],
  },
  {
    title: "Month 2: Channels",
    description: [
      "Website & Landing Page Creation",
      "Search Engine Optimization (SEO)",
      "Search Engine Marketing (SEM)",
      "Social Media & Content Strategy",
    ],
  },
  {
    title: "Month 3: Growth & Measurement",
    description: [
      "Email & CRM Marketing",
      "Mobile & Messaging Marketing",
      "Automation & Vibe Marketing",
      "Analytics & ROI Optimization",
    ],
  },
  {
    title: "Month 4: Capstone Project",
    description: ["Capstone Project"],
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

      <div className="relative z-10 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {learnTopics.map((topic, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-[#8A6D24] p-6 sm:p-8 rounded-3xl text-left shadow-md min-h-[320px]"
          >
            {/* Decorative Bar */}
            <div className="absolute top-8 left-0 w-2 h-14 bg-[#D85151] rounded-3xl"></div>

            <h3 className="text-lg sm:text-xl font-semibold text-[#140F20] pl-4 mb-3">
              {topic.title}
            </h3>

            <ul className="list-disc list-outside pl-5 text-[#140F20] text-sm sm:text-base leading-relaxed">
              {topic.description.map((point, idx) => (
                <li key={idx} className="mt-1">
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
