"use client";

import { motion } from "framer-motion";

export default function ImpactReport() {
  return (
    <div className="container mx-auto px-6 lg:px-12 py-24 overflow-hidden">
      {/* Title - Centered */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-[24px] md:text-[48px] lg:text-[64px] font-semibold font-primary text-gray-900"
      >
        Impact Report
      </motion.h2>

      {/* Content Section - Two Columns */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
      >
        {/* Image - Left Side */}
        <div className="flex justify-center">
          <motion.img
            src="/images/home/flipbook.gif"
            alt="Impact Report 2024"
            className="w-[800px] h-[400px] md:h-[400px] max-w-lg lg:max-w-2xl "
            initial={{ scale: 0.9 }}   

            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* Text & Button - Right Side */}
        <div className="text-center lg:text-left">
        <p className="text-gray-700 text-[22px] md:text-[40px] leading-8 md:leading-[52px] font-secondary">
  Explore the transformative journeys of our next generation of leaders.
</p>

          <p className="mt-2 text-gray-500 text-[18px] md:text-[24px]">View Yuvabe's Impact Report.</p>

          <motion.a
            href="https://heyzine.com/flip-book/a7ee0bc0d2.html"
            className="inline-block mt-6 px-6 py-3 bg-[#592AC7] text-white font-semibold rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Click Here
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
