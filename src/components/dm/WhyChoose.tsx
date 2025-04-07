"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const benefits = [
  {
    number: "01",
    title: "Hands-On Learning",
    description:
      "Work on live projects, case studies, and interactive assignments.",
  },
  {
    number: "02",
    title: "Expert-Led Training",
    description:
      "Learn from top marketing professionals with real-world experience.",
  },
  {
    number: "03",
    title: "Comprehensive Curriculum",
    description:
      "Cover the entire digital marketing landscape in 12 structured weeks.",
  },
  {
    number: "04",
    title: "Career-Focused Approach",
    description:
      "Develop job-ready skills with mentorship and industry exposure.",
  },
  {
    number: "05",
    title: "In-Person Classroom Learning",
    description:
      "Benefit from engaging discussions, peer collaboration, and hands-on workshops.",
  },
  {
    number: "06",
    title: "Certification & Placement Support",
    description:
      "Receive a Yuvabe certificate and access to career opportunities.",
  },
];

export function WhyChoose() {
  return (
    <section className="relative w-full py-12 bg-[#140F20] text-[#FFFFFF]">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-[#FFCA2D] mb-8">
        Why Choose This Course?
      </h2>

      <div className="relative flex justify-center">
        {/* Vertical Line (Replace 'vertical-line.png' with your actual image)
        <Image
          src="/images/line.png"
          alt="Vertical Line"
          width={2}
          height={1000}
          className="absolute left-1/2 transform -translate-x-1/2 h-full"
        /> */}

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl px-6 mx-auto">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-start space-x-4 ${
                index % 2 === 0 ? "justify-start" : "justify-end text-left"
              }`}
            >
              {/* Number */}
              <span className="text-5xl font-bold text-[#FFCA2D]">
                {item.number}
              </span>

              {/* Text Content */}
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-[#FFFFFF] mt-1">{item.description}</p>
              </div>

              {/* Dot (For Alignment with Vertical Line)
              <div className="absolute left-1/2 top-[60%] transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full" /> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
