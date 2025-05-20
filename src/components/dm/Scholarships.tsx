"use client";
import { motion } from "framer-motion";

const courseFeesAndScholarships = [
  {
    title: "Course Fee",
    points: [
      "Course Fee: ₹15,000 /-",
      "Early Bird Discount, Easy EMI & scholarships available.",
    ],
  },
  {
    title: "Scholarships",
    points: [
      "Scholarships: Need-based scholarships.",
      "Women Education: 100% scholarships for 5 eligible women from the bioregion.",
    ],
  },
  {
    title: "Payment Options",
    points: [
      "Payment Plan: Easy installment plans.",
      "Payment Options: Cash, UPI & Bank Transfer.",
      "Contact: Email at bridge@yuvabe.com or call +91 9677604467.",
    ],
  },
];

export function CourseFeesAndScholarships() {
  return (
    <section className="relative w-full py-16 bg-[#140F20] text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute right-10 top-32 blur-3xl w-[400px] h-[400px] rounded-full bg-[linear-gradient(90deg,_rgba(123,34,191,1)_0%,_rgba(80,72,185,1)_52%,_rgba(28,103,131,1)_100%)] opacity-10 z-0"></div>

      <div className="absolute right-0 bottom-10 translate-x-[30%] blur-3xl w-[500px] h-[500px] bg-[linear-gradient(90deg,_rgba(151,99,70,1)_50%,_rgba(151,99,70,0.85)_100%)] opacity-10 rounded-[2rem] z-0"></div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#FFCA2D] mb-12 z-10 relative">
        Course Fees and Scholarships
      </h2>

      {/* Content Blocks */}
      <div className="relative z-10 flex flex-col gap-8 px-6 sm:px-8 max-w-3xl mx-auto">
        {courseFeesAndScholarships.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative p-6 bg-[#1f1b2b] rounded-2xl border border-[#FFCA2D]/20 shadow-md"
          >
            {/* Decorative Line */}
            <div className="absolute top-4 left-6 w-10 h-[3px] bg-white rounded-2xl"></div>

            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
              {item.title}
            </h3>

            <ul className="space-y-2 pl-4">
              {item.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
                  <span className="text-[#FFCA2D] text-lg mt-1">●</span>
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
