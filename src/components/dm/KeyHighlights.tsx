"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    title: "Expert-Led In-Person Training -",
    description:
      "Gain mentorship from seasoned digital marketing professionals in an immersive classroom setting.",
  },
  {
    title: "Immersive Learning in Auroville's Sustainable Ecosystem -",
    description:
      "Experience a transformative educational environment with a focus on sustainability.",
  },
  {
    title: "Hands-On Projects & Case Studies -",
    description:
      "Apply your learning through real-world assignments, live campaigns, and data-driven strategies.",
  },
  {
    title: "Career Development with the Evolve Program -",
    description:
      "Develop a growth mindset, industry-relevant skills, and build a strong professional network.",
  },
  {
    title: "Internship & Certification Opportunities -",
    description:
      "Top 5 students secure paid (3-6 months) internships; receive an industry-recognized certification valued by employers.",
  },
  {
    title: "Affordable & Inclusive Learning -",
    description:
      "Scholarships available to ensure accessibility for all aspiring marketers, making career growth more attainable.",
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
            <h3 className="text-lg font-semibold text-[#FFCA2D] max-w-[250px] break-words">{item.title}</h3>
            <p className="text-[#FFFFFF]">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
