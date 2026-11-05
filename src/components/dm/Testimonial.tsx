"use client";

import { motion } from "framer-motion";

export function StudentTestimonial() {
  return (
    <section className="w-full py-12 bg-[#140F20] text-white overflow-hidden px-4">
      <div className="w-[50px] h-[50px] translate-x-[870px] translate-y-8 blur-2xl border-rounded-full bg-[radial-gradient(circle,_rgba(105,176,189,1)_20%,_rgba(48,81,87,1)_100%)]"></div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-raleway font-semibold text-center text-[#FFCA2D] mb-8">
        Hear Out From Our Past Students!
      </h2>

      {/* Video & Testimonial Row */}
      <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto px-4 sm:px-6 gap-8 sm:gap-12">
        {/* Video Section */}
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-56 sm:h-64 md:h-72 rounded-lg"
            src="https://www.youtube.com/embed/R-4CU6DyeJ8?feature=share"
            title="Student Testimonial"
            allowFullScreen
          ></iframe>
        </div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <div className="text-[#FFCA2D] text-6xl sm:text-7xl md:text-9xl leading-none mb-3">
            “
          </div>
          <p className="font-sans font-semibold text-[#DFDFDF] text-base sm:text-lg">
            I was able to learn from basic to advanced digital marketing skills
            in just 3 months, with Yuvabe’s neat beginner-friendly practices.
          </p>
          <p className="text-[#FFCA2D] font-semibold mt-3">- Karthi</p>
        </motion.div>
      </div>
    </section>
  );
}
