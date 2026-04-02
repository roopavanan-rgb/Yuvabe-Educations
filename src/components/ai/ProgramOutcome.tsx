"use client";
import React from "react";
import {
  BotMessageSquare,
  FileText,
  Search,
  Lightbulb,
  Rocket,
  Folder,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const outcomes = [
  {
    icon: <BotMessageSquare className="w-[22px] h-[22px]" strokeWidth={2.5} />,
    title: "AI Chatbot",
    description: "A conversational AI you build from scratch",
  },
  {
    icon: <FileText className="w-[22px] h-[22px]" strokeWidth={2.5} />,
    title: "Document Summarizer",
    description: "Feed it any PDF — get the key points instantly",
  },
  {
    icon: <Search className="w-[22px] h-[22px]" strokeWidth={2.5} />,
    title: "Research Assistant",
    description: "An AI that finds and synthesises information for you",
  },
  {
    icon: <Lightbulb className="w-[22px] h-[22px]" strokeWidth={2.5} />,
    title: "Knowledge Base",
    description: 'Your own "ChatGPT for documents"',
  },
  {
    icon: <Rocket className="w-[22px] h-[22px]" strokeWidth={2.5} />,
    title: "Final AI Product",
    description: "Of your own choosing — built, shipped, demoed",
  },
  {
    icon: <Folder className="w-[22px] h-[22px]" strokeWidth={2.5} />,
    title: "Portfolio",
    description: "5–6 real, working tools to show employers",
  },
];

// ✅ Typed variants
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardAnim: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1], // ✅ FIXED
    },
  },
};

export function ProgramOutcome() {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#F6F8F9] flex flex-col items-center justify-center">
      <div className="container mx-auto max-w-[1200px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.4, 0, 0.2, 1],
          }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black text-[#001B44] mb-6 tracking-tight leading-tight">
            Real projects. Working tools. Things you actually built.
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto font-medium">
            This is not a course of exercises. By the end of the program, you
            will have built:
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {outcomes.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardAnim}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="group relative bg-[#E8EFF5] border border-[#B8D0E8] rounded-[24px] p-8 flex flex-col items-start overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#58AEE9]/20 to-transparent pointer-events-none"></div>

              {/* Icon */}
              <div className="flex items-center gap-4 mb-3">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-10 h-10 rounded-xl bg-[#CDDFEF] flex items-center justify-center group-hover:bg-[#B5CDE4]"
                >
                  <div className="text-[#001B44]">{item.icon}</div>
                </motion.div>

                <h3 className="text-lg md:text-xl font-bold text-[#001B44]">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-[#4A627B] leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
