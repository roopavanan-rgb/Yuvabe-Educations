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
    <section className="w-full py-16 flex flex-col items-center text-center bg-[#140F20]">
      <h2 className="text-4xl font-bold text-[#FFCA2D]">What You&apos;ll Learn:</h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        {learnTopics.map((topic, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative bg-[#FFCA2D] p-6 rounded-3xl text-left "
          >
             {/* Red Div for Design */}
             <div className="absolute top-8 left-0 w-2 h-14 bg-[#D85151] rounded-3xl"></div>

            <h3 className="text-xl font-semibold text-[#140F20] pl-2 mb-2">{topic.title}</h3>
            
            {/* Bullet Points */}
            <ul className="list-disc list-inside text-[#140F20]">
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
