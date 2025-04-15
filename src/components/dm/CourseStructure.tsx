"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const courseDetails = [
  {
    title: "Duration",
    description: "10 -12 weeks",
    icon: "/dm/icons/dicon.png",
  },
  {
    title: "Schedule",
    description: "Monday to Friday, 9:00 AM - 5:00 PM.",
    icon: "/dm/icons/sicon.png",
  },
  {
    title: "Mode",
    description: "In-Person at Yuvabe Saracon Campus, Auroville",
    icon: "/dm/icons/micon.png",
  },
];

export function CourseStructure() {
  return (
    <section className="w-full py-12 bg-[#140F20] text-white overflow-x-hidden">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-[#FFCA2D] mb-8">
        Course Structure
      </h2>

      {/* Course Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-4xl mx-auto">
        {courseDetails.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative p-6 bg-transparent rounded-lg"
          >
            <div className="absolute top-0 left-6 w-12 h-[3px] bg-white"></div>
            
            {/* Icon + Title */}
            <div className="flex items-center gap-2">
              <Image
                src={item.icon}
                alt={item.title}
                width={24}
                height={24}
              />
              <h3 className="text-lg font-semibold text-[#FFFFFF]">
                {item.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-[#FFFFFF] mt-2 max-w-[150px] leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

