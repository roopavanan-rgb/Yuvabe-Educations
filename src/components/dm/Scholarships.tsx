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
    <section className="w-full py-12 bg-[#140F20] text-white">
      
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-[#FFCA2D] mb-8">
        Course Fees and Scholarships
      </h2>
      <div className="w-[80px] h-[80px] translate-x-96 translate-y-40 blur-3xl bg-[linear-gradient(90deg,_rgba(123,34,191,1)_0%,_rgba(80,72,185,1)_52%,_rgba(28,103,131,1)_100%)]"></div>
      <div className="absolute text-3xl translate-x-[1200px] translate-y-48 opacity-10 blur-3xl w-[500px] h-[500px] border rounded-4xl bg-[linear-gradient(90deg,_rgba(151,99,70,1)_50%,_rgba(151,99,70,0.8487044475993523)_100%)]"></div>

      {/* Vertical Alignment: Flex Column */}
      <div className="flex flex-col gap-6 px-6 max-w-3xl mx-auto">
        {courseFeesAndScholarships.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative p-6 bg-transparent rounded-lg"
          >
            {/* White div above the heading */}
            <div className="absolute top-4 left-6 w-10 h-[3px] bg-white rounded-2xl"></div>

            {/* Heading */}
            <h3 className="text-lg font-semibold text-[#FFFFFF]">{item.title}</h3>

            {/* Bullet Points */}
            <ul className="mt-4 space-y-2">
              {item.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4 text-[#FFFFFF]">
                   <span className="text-[#FFCA2D] text-xl">●</span>
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
