"use client";
import { motion } from "framer-motion";
import { DM_DEPOSIT, DM_MIN_ATTENDANCE } from "./programDetails";

const feeBlocks = [
  {
    title: "Course Fee",
    points: [
      "Course Fee: Free",
      `Refundable Deposit: ${DM_DEPOSIT}, payable when you confirm your seat`,
      "Payment Methods: Cash, Bank Transfer, GPay",
    ],
  },
  {
    title: "Refund",
    points: [
      `The full deposit is returned when you complete the course and capstone, with minimum ${DM_MIN_ATTENDANCE} attendance`,
    ],
  },
];

export function CourseFeesAndScholarships() {
  return (
    <section className="relative w-full py-16 px-4 bg-[#140F20] text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute right-10 top-32 blur-3xl w-[400px] h-[400px] rounded-full bg-[linear-gradient(90deg,_rgba(123,34,191,1)_0%,_rgba(80,72,185,1)_52%,_rgba(28,103,131,1)_100%)] opacity-10 z-0"></div>

      <div className="absolute right-0 bottom-10 translate-x-[30%] blur-3xl w-[500px] h-[500px] bg-[linear-gradient(90deg,_rgba(151,99,70,1)_50%,_rgba(151,99,70,0.85)_100%)] opacity-10 rounded-[2rem] z-0"></div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#FFCA2D] mb-12 z-10 relative">
        Course Fee &amp; Deposit
      </h2>

      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        {feeBlocks.map((block, index) => (
          <motion.div
            key={block.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 bg-[#1C1730] rounded-2xl border border-white/5 shadow-md text-left"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              {block.title}
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-white/90 leading-relaxed">
              {block.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#E8AC35]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
