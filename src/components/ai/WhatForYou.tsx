"use client";
import { X } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const items = [
  "Tutorials don't stick",
  "Coding feels overwhelming",
  "You don't know where to start",
  "AI tools feel powerful but unclear",
  `"Learn Python first" paths go nowhere`,
  "Copy-paste from ChatGPT teaches nothing",
  "Most programs are too basic or too advanced",
  "Overhyped promises, zero real depth",
];

// ✅ Typed variants
const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemAnim: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1], // ✅ FIXED
    },
  },
};

export function WhatForYou() {
  return (
    <section className="relative py-20 px-6 md:px-12 bg-[#F6F8F9] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[60%] pointer-events-none opacity-40 md:opacity-90">
        <Image
          src="/assets/hand.svg"
          alt="Hands reaching"
          fill
          className="object-cover object-right translate-x-1/4 md:translate-x-0"
        />
        <div className="absolute top-1/2 right-[20%] -translate-y-1/2 w-64 h-64 bg-[#75E2FF] opacity-20 blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center">
        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full md:w-3/5 lg:w-1/2 py-10"
        >
          <motion.h2
            variants={itemAnim}
            className="text-3xl md:text-5xl font-black text-[#001B44] mb-6 tracking-tight"
          >
            Does this sound familiar?
          </motion.h2>

          <motion.p
            variants={itemAnim}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-[90%] leading-relaxed"
          >
            You know AI is changing everything. But actually learning it? That's
            a different story.
          </motion.p>

          <motion.ul className="space-y-4">
            {items.map((item, idx) => (
              <motion.li
                key={idx}
                variants={itemAnim}
                whileHover={{ x: 6 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 18,
                }}
                className="group flex items-center gap-4 p-3 rounded-xl transition-all duration-300 "
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-[26px] h-[26px] rounded-full bg-[#001B44] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-red-500">
                  <X className="w-4 h-4 text-white" strokeWidth={3} />
                </div>

                {/* Text */}
                <span className="text-base md:text-lg font-medium text-[#2A4365] transition-all duration-300 group-hover:text-[#001B44]">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
