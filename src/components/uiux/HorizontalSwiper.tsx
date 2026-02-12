"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const boxes = [
  {
    title: "In-Person Sessions with Industry Experts",
    description: "Learn directly from experienced designers and professionals.",
    imageSrc: "/images/uiux/ui-immer1.svg",
    imageWidth: 86.36,
    imageHeight: 88.41,
  },
  {
    title: "Immersive Learning in Auroville’s Unique, Sustainable Ecosystem",
    description: "Experience transformative education in a vibrant community.",
    imageSrc: "/images/uiux/ui-immer2.svg",
    imageWidth: 82.09,
    imageHeight: 88,
  },
  {
    title: "Hands-On Projects & Real-World Case Studies",
    description: "Work on live projects and apply design strategies effectively.",
    imageSrc: "/images/uiux/ui-immer3.svg",
    imageWidth: 87.36,
    imageHeight: 87.44,
  },
  {
    title: "Grow with Yuvabe’s Signature Evolve Program",
    description: "Develop leadership, communication, and problem-solving skills.",
    imageSrc: "/images/uiux/ui-immer4.svg",
    imageWidth: 67.82,
    imageHeight: 87.11,
  },
  {
    title: "Paid Internships (3-6 months) for the Top 5 Students",
    description: "Gain industry experience to kickstart your career.",
    imageSrc: "/images/uiux/ui-immer5.svg",
    imageWidth: 86.61,
    imageHeight: 86.86,
  },
  {
    title: "Certification Recognized by Employers & Universities",
    description: "Enhance your resume with a prestigious credential.",
    imageSrc: "/images/uiux/ui-immer6.svg",
    imageWidth: 62.88,
    imageHeight: 87.63,
  },
  {
    title: "Affordable & Inclusive, with Scholarships Available",
    description: "Accessible education for aspiring designers from all backgrounds.",
    imageSrc: "/images/uiux/ui-immer7.svg",
    imageWidth: 106.52,
    imageHeight: 87.39,
  },
  {
    title: "Leadership & Professional Development",
    description: "Focus on discipline, time management, and teamwork skills.",
    imageSrc: "/images/uiux/ui-immer8.svg",
    imageWidth: 86.71,
    imageHeight: 86.87,
  },
  {
    title: "English Communication & Presentation Skills",
    description: "Build confidence in articulating design decisions and ideas.",
    imageSrc: "/images/uiux/ui-immer9.svg",
    imageWidth: 82,
    imageHeight: 87,
  },
  {
    title: "Portfolio Building & Career Support ",
    description: "Create a strong design portfolio and prepare for job placements.",
    imageSrc: "/images/uiux/ui-immer10.svg",
    imageWidth: 88.23,
    imageHeight: 87.68,
  },
];

const TOTAL_ITEMS = boxes.length;

export default function CurriculumTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const getThreshold = (index: number) => index / (TOTAL_ITEMS - 1);

  return (
     <div className="w-full">
      <div className="mx-auto max-w-6xl relative">
        <div ref={timelineRef} className="relative">
          
          {/* Vertical Line */}
          <svg
            className="absolute left-1/2 top-0 h-full w-4 -translate-x-1/2  hidden md:block"
            viewBox="0 0 4 1000"
            preserveAspectRatio="none"
          >
            <path d="M2 0 V1000" stroke="#f48f3824" strokeWidth="2" fill="none" />
            <motion.path
              d="M2 0 V1000"
              stroke="#f48f38"
              strokeWidth="2"
              fill="none"
              style={{ pathLength }}
            />
          </svg>

          <div className="space-y-4">
            {boxes.map((item, index) => {
              const isLeft = index % 2 === 0;
              const threshold = getThreshold(index);

              const rawOpacity = useTransform(
              scrollYProgress,
              [threshold - 0.12, threshold - 0.02],
              [0, 1]
            );

              const opacity = useSpring(rawOpacity, {
                stiffness: 90,
                damping: 20,
              });

              const dotProgress = useTransform(
                scrollYProgress,
                [threshold - 0.01, threshold],
                [0, 1]
              );

              const dotColor = useTransform(
                dotProgress,
                [0, 1],
                ["#f48f3824", "#f48f38"]
              );

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"}`}
                >
                  {/* Dot with Line Shield - Always Visible */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:block">
                    <div className="bg-[#f48f38] rounded-full p-1">
                      <motion.span
                        style={{ backgroundColor: dotColor }}
                        className="block h-4 w-4 rounded-full ring-4 ring-[#f48f38]"
                      />
                    </div>
                  </div>

                  {/* Card - Fades in on scroll */}
                  <motion.div
                    style={{ opacity }}
                    className={`w-full max-w-md ${isLeft ? "md:pr-12" : "md:pl-12"}`}
                  >
                    <div className="rounded-[30px] bg-[#FFFFFF66] border border-[#FFFFFF33] p-8 shadow-lg backdrop-blur-[35px] flex flex-col items-center lg:items-start">
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        width={item.imageWidth}
                        height={item.imageHeight}
                        className="mb-6"
                      />
                      <h3 className="text-xl md:text-2xl font-medium text-[#020406] leading-tight text-center lg:text-left font-albert-sans">
                        {item.title}
                      </h3>
                      <p className="text-base md:text-lg text-[#020406] mt-4 text-center lg:text-left font-secondary">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </div>

  );
}