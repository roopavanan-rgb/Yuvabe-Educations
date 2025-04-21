"use client";

import { motion } from "framer-motion";

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
    <section className="relative w-full py-16 bg-[#140F20] text-white overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-[#FFCA2D] mb-20">
        Why Choose This Course?
      </h2>

      {/* Timeline container */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Vertical line (visible only on md and up) */}
        <div className="hidden md:block absolute left-1/2 top-0 w-0.5 bg-[#E8AC35] h-full transform -translate-x-1/2 z-0" />

        {/* Items */}
        <div className="flex flex-col gap-16 relative z-10">
          <div className="absolute right-10 -bottom-10 blur-3xl w-90 h-90 rounded-full bg-[#976346] opacity-15"></div>

          {benefits.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative w-full flex flex-col md:flex-row items-center"
              >
                {/* Text box */}
                <div
                  className={`w-full md:w-1/2 px-4 flex items-start gap-4
                    ${isLeft ? "md:justify-end md:pr-10 text-left" : "md:pl-10"} 
                    ${!isLeft && "md:ml-auto"}
                  `}
                >
                  <span className="text-4xl font-raleway font-semibold text-[#FFCA2D] whitespace-nowrap">
                    {item.number}
                  </span>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-base text-white mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Dot - Only visible on md and up */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#FFCA2D] rounded-full animate-bounce shadow-lg" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
