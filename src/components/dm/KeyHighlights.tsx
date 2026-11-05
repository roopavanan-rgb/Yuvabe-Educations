"use client";

import { motion } from "framer-motion";
import { DM_DEPOSIT, DM_START_DATE } from "./programDetails";

const highlights = [
  {
    title: "Duration",
    description: "16 weeks (12 weeks of modules + 4-week capstone)",
  },
  {
    title: "Start Date",
    description: DM_START_DATE,
  },
  {
    title: "Timing",
    description: "Half day, Monday to Friday, 9:30 AM – 12:45 PM",
  },
  {
    title: "Learning Mode",
    description: "In-person, classroom and lab sessions",
  },
  {
    title: "Location",
    description: "Saracon Campus, Yuvabe, Auroville, Tamil Nadu, India",
  },
  {
    title: "Fee",
    description: `Free. A refundable deposit of ${DM_DEPOSIT} is returned when you complete the course.`,
  },
  {
    title: "Certification",
    description: "Yuvabe Education Digital Marketing Certification",
  },
];

export function KeyHighlights() {
  return (
    <section className="w-full py-12 bg-[#140F20] text-white overflow-hidden">
      {/* Title */}
      <h2 className="text-3xl font-semibold font-raleway text-center text-[#FFCA2D] mb-12 mt-12">
        Key Highlights
      </h2>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
      <div className="absolute left-10 -bottom-320 blur-3xl w-90 h-90 rounded-full bg-[#976346] opacity-15"></div>
      <div className="absolute right-10 -bottom-280 blur-3xl w-90 h-90 rounded-full bg-[#FFA6A6] opacity-8"></div>
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative p-6 bg-transparent rounded-lg"
          >
            <div className="absolute top-0 left-6 w-16 h-[3px] rounded-2xl bg-white mt-2"></div>
            <h3 className="text-lg font-semibold text-[#FFCA2D] mt-3">{item.title}</h3>
            <p className="text-[#FFFFFF] mt-2 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
