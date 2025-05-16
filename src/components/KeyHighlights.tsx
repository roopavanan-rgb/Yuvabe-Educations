"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const KeyHighlights = () => {
  const highlights = [
    "In-person sessions with industry experts.",
    "Immersive learning in Auroville's unique, sustainable ecosystem.",
    "Hands-on projects and real-world case studies.",
    "Paid (3-6 months) Internships with Yuvabe for the top 5 students of the course.",
    "Certification recognized by universities and employers.",
    "Affordable and inclusive, with scholarships available.",
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white text-center">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-[#90C465] mb-10">
        Key Highlights
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto items-center px-4">
        {/* Left Side */}
        <div className="flex flex-col items-center space-y-6">
          {highlights.slice(0, 3).map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-full max-w-[320px] bg-[#90C645]/25 border border-[#90C645] p-4 rounded-xl shadow-md text-black text-left min-h-[90px]"
            >
              {text}
            </motion.div>
          ))}
        </div>

        {/* Center Image & Highlight */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-6"
        >
          <Image
            src="/images/plant.png"
            alt="Growing Plant"
            width={300}
            height={300}
            className="w-[200px] sm:w-[250px] md:w-[300px]"
          />
          <div className="w-full max-w-[320px] bg-[#90C645]/25 border border-[#90C645] p-4 rounded-xl shadow-md text-black text-left min-h-[90px]">
            Grow with Yuvabe’s signature Evolve Program.
          </div>
        </motion.div>

        {/* Right Side */}
        <div className="flex flex-col items-center space-y-6">
          {highlights.slice(3, 6).map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-full max-w-[320px] bg-[#90C645]/25 border border-[#90C645] p-4 rounded-xl shadow-md text-black text-left min-h-[90px]"
            >
              {text}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
