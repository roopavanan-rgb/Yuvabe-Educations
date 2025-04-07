"use client";

import { motion } from "framer-motion";

export function StudentTestimonial() {
  return (
    <section className="w-full py-12 bg-[#140F20] text-white">
     <div className="w-[30px] h-[30px] translate-x-[870px] translate-y-8 blur-2xl border-rounded-full bg-[radial-gradient(circle,_rgba(105,176,189,1)_20%,_rgba(48,81,87,1)_100%)]"></div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-[#FFCA2D] mb-8">
        Hear Out From Our Past Students!
      </h2>
      
      {/* Video & Testimonial Row */}
      <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto px-6 gap-6">
        {/* Video Section */}
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-64 md:h-72 rounded-lg"
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
          className="w-full md:w-1/2"
        >
          <div className="text-[#FFCA2D] text-4xl">“</div>
          <p className="text-gray-300 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id elit
            eget justo iaculis tempus. Sed efficitur mauris nec leo ultrices,
            quis lacinia ipsum mattis.
          </p>
          <p className="text-[#FFCA2D]font-semibold mt-3">- Karthi</p>
        </motion.div>
      </div>

      {/* Call-to-Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-12 p-6 bg-[#FFCA2D40] rounded-3xl text-center border-1 border-yellow-400"
      >
        <h3 className="text-2xl font-semibold text-[#FFCA2D] mb-2">
          Get Started
        </h3>
        <p className="text-gray-300 mb-4">
          Take the first step toward your career in Digital Marketing.
          Register today and secure your spot!
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button
         className="bg-[#FFCA2D] text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-500"
         onClick={() =>
         window.open(
          "https://docs.google.com/forms/d/e/1FAIpQLSfJDp1CsV4wBiD0MJ6oOiJqjZgyNzITEwFiRhxPDRl3m5ghtQ/viewform",
          "_blank"
        )
        }>Apply Now
       </button>
          

        <button
         className="border border-[#E8AC35] text-[#FFCA2D] px-6 py-2 rounded-md font-semibold hover:bg-yellow-400 hover:text-black"
         onClick={() =>
         window.open(
          "https://www.yuvabe.com/_files/ugd/173e7b_bfd064d78d6f44f8b632efc8d85b7d4c.pdf",
          "_blank"
        )
        }>Download Brochure
      </button>
        </div>
      </motion.div>
    </section>
  );
}
