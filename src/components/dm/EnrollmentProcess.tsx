"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { DM_APPLY_URL, DM_SEATS } from "./programDetails";

const steps = [
  {
    number: "01",
    title: "Online Application",
    description: ["Fill in the application form"],
  },
  {
    number: "02",
    title: "Screening",
    description: [
      "Shortlisted candidates are invited for an interview and aptitude test",
    ],
  },
  {
    number: "03",
    title: "Confirmation",
    description: ["Pay the refundable deposit to secure your seat"],
  },
];

export function EnrollmentProcess() {
  return (
    <section className="w-full py-12 bg-[#140F20] text-[#DFDFDF] text-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -left-20 top-10 blur-3xl w-[300px] h-[300px] rounded-full bg-[#A6E1FF] opacity-10 z-0" />

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFCA2D] mb-14 z-10 relative">
        Enrollment Process
      </h2>

      {/* Steps Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-16 px-4 sm:px-6 md:px-8 lg:px-24 z-10 relative">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-full max-w-sm text-center md:text-left"
          >
            <h3 data-gsap="scramble" className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#6B5320]">
              {step.number}
            </h3>
            <h4 className="text-lg sm:text-xl font-semibold mt-2">
              {step.title}
            </h4>

            {/* Description lines */}
            {step.description.map((line, idx) => (
              <p key={idx} className="text-[#DFDFDF] mt-2 text-sm sm:text-base">
                {line}
              </p>
            ))}
          </motion.div>
        ))}
      </div>

      <p className="mt-14 relative z-10 px-4 text-[#FFCA2D] font-semibold text-base sm:text-lg">
        Limited seats: only {DM_SEATS} participants.
      </p>

      {/* CTA Section */}
      <div className="mt-28 relative z-10 px-4 text-center">
        {/* CTA Background Glow */}
        <div className="absolute right-0 top-10 translate-x-[50%] opacity-20 blur-3xl w-[300px] h-[200px] rounded-3xl bg-[linear-gradient(90deg,_rgba(151,99,70,1)_50%,_rgba(151,99,70,0.85)_100%)] -z-10" />

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-raleway font-semibold text-[#FFCA2D]">
          Get Started!
        </h3>
        <p className="text-[#FFCA2D] font-sans font-semibold mt-4 text-sm sm:text-base">
          Take the first step toward a career in digital marketing. Apply today
          and secure your spot.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link
            href={DM_APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden bg-[#FFCA2D] text-black px-8 md:px-10 py-3 rounded-full font-semibold hover:bg-yellow-500 transition text-center"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}
