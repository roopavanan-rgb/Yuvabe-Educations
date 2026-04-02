"use client";
import React from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const forYouItems = [
  "You're curious about AI but unsure where to start",
  "You've tried coding online and got stuck",
  "You prefer learning by doing, not watching",
  "You want practical, portfolio-worthy skills",
  "You're a final-year engineering student or recent grad",
  "You have a junior dev job and feel left behind by AI",
];

const notForYouItems = [
  "You only want theory and lectures",
  "You're looking for shortcuts without effort",
  "You aren't willing to build actual things",
  "You want a guaranteed job promise (we don't make those)",
];

export function Outcomes() {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  const cardAnim = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F6F8F9]">
      <div className="container mx-auto max-w-[1200px]">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#001B44]">
            Is this program for you?
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* FOR YOU */}
          <motion.div
            variants={cardAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group bg-[#EAEFF4] border border-[#A6C0DE] rounded-[28px] p-8 md:p-12 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-8 h-8 rounded-full bg-[#18A02F] flex items-center justify-center"
              >
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </motion.div>

              <h3 className="text-lg md:text-xl text-[#001B44] tracking-wide">
                THIS IS <span className="font-bold">FOR YOU</span> IF:
              </h3>
            </div>

            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {forYouItems.map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={itemAnim}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4 group/item"
                >
                  <div className="w-2 h-2 rounded-full bg-[#18A02F] mt-2.5 group-hover/item:scale-125 transition" />
                  <span className="text-base md:text-[17px] text-[#2F4460] leading-relaxed font-medium">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* NOT FOR YOU */}
          <motion.div
            variants={cardAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group bg-[#EAEFF4] border border-[#A6C0DE] rounded-[28px] p-8 md:p-12 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-8 h-8 rounded-full bg-[#F54242] flex items-center justify-center"
              >
                <X className="w-5 h-5 text-white" strokeWidth={3} />
              </motion.div>

              <h3 className="text-lg md:text-xl text-[#001B44] tracking-wide">
                THIS IS <span className="font-bold">NOT FOR YOU</span> IF:
              </h3>
            </div>

            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {notForYouItems.map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={itemAnim}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4 group/item"
                >
                  <div className="w-2 h-2 rounded-full bg-[#F54242] mt-2.5 group-hover/item:scale-125 transition" />
                  <span className="text-base md:text-[17px] text-[#2F4460] leading-relaxed font-medium">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
