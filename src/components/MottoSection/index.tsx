"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import MottoBlock from "./MottoBlock";
import SLineBackground from "./SLineBackground";

const blocks = [
  {
    title: "Work",
    description:
      "Work comprises higher order skilling and project work in predetermined areas such as AI Full stack, Digital Marketing, Sustainability.",
    image: "/images/home/arjun.png",
    buttonLink: "/about-us",
    side: "left",
  },
  {
    title: "Serve",
    description:
      "Serve is the commitment to give back to the community through various social programs and projects supporting Auroville units.",
    image: "/images/home/hema.png",
    reverse: true,
    buttonLink: "/get-involved/we-serve",
    side: "right",
  },
  {
    title: "Evolve",
    description:
      "Evolve incorporates self-growth through transformative activities that lead to better decision-making, self-compassion, overcoming fear, dealing with challenges and more.",
    image: "/images/home/priya.png",
    buttonLink: "/get-involved/we-evolve",
    side: "left",
  },
];

export default function MottoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const TOTAL = blocks.length;
  const getThreshold = (index: number) => index / (TOTAL - 1);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-[120px] px-6 overflow-hidden"
    >
      <div className="max-w-[1140px] mx-auto text-center relative">
        <h2 className="text-4xl font-semibold font-primary lg:text-[64px] text-[48px]">
          Our Motto
        </h2>

        <div className="relative z-10 space-y-28 mt-20">
          <div className="absolute inset-0">
            <SLineBackground />
          </div>

          {blocks.map((item, index) => {
            const threshold = getThreshold(index);
            const isLeft = item.side === "left";
            const earlyOffset = index === 2 ? 0.15 : 0; // 👈 tweak value

            const rawOpacity = useTransform(
              scrollYProgress,
              [threshold - 0.12 - earlyOffset, threshold - 0.02 - earlyOffset],
              [0, 1],
            );

            const opacity = useSpring(rawOpacity, {
              stiffness: 100,
              damping: 20,
            });

            const rawX = useTransform(
              scrollYProgress,
              [threshold - 0.15 - earlyOffset, threshold - 0.02 - earlyOffset],
              [isLeft ? -60 : 60, 0],
            );

            const x = useSpring(rawX, {
              stiffness: 120,
              damping: 18,
            });

            return (
              <motion.div key={index} style={{ opacity, x }}>
                <MottoBlock {...item} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
