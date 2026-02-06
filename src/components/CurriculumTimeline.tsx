"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const days = [
  {
    day: "DAY 1",
    title: "Design Thinking Sprint",
    desc: "Grounding in user context, empathy mapping, journey mapping, and problem discovery.",
    side: "left",
  },
  {
    day: "DAY 2",
    title: "Problem Framing & Research Planning",
    desc: "Converging on the right problem, defining HMW statements, and planning user research.",
    side: "right",
  },
  {
    day: "DAY 3",
    title: "User Interaction & Concept Testing",
    desc: "Conducting real user sessions, validating assumptions, and capturing usability insights.",
    side: "left",
  },
  {
    day: "DAY 4",
    title: "Insight Synthesis & Ideation",
    desc: "Turning research into insights, reframing problems, and brainstorming solution concepts.",
    side: "right",
  },
  {
    day: "DAY 5",
    title: "Solution Framing & Project Pitch",
    desc: "Refining solutions, defining user flows, preparing pitch decks, and planning next steps.",
    side: "left",
  },
];

const TOTAL_DAYS = days.length;

export default function CurriculumTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const getThreshold = (index: number) => index / (TOTAL_DAYS - 1);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
    pointer-events-none
    absolute
    top-0
    right-0
    hidden md:block
    w-[320px]
    max-w-[30vw]
    -translate-y-1/4
    overflow-hidden
  "
      >
        <Image
          src="/images/inverted-snake.svg"
          alt=""
          width={600}
          height={600}
          priority
        />
      </motion.div>

      <div className="mx-auto max-w-6xl relative overflow-hidden">
        {/* Header */}

        <div className="mb-20 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-[#6A4EDA]">
            5-DAY CURRICULUM
          </p>

          <h2 className="mb-4 text-3xl font-semibold text-black md:text-5xl font-primary">
            What You&apos;ll{" "}
            <span className="bg-gradient-to-l from-[#F99E1F] to-[#6A4EDA] bg-clip-text text-transparent">
              Learn
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-gray-600 text-lg">
            This workshop follows a design thinking sprint approach, guiding
            participants from problem discovery to validated solutions and a
            pitch-ready outcome.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* SVG Scroll Path */}
          <svg
            className="absolute left-1/2 top-0 h-full w-4 rounded-full -translate-x-1/2"
            viewBox="0 0 4 1000"
            preserveAspectRatio="none"
          >
            {/* Base line */}
            <path
              d="M2 0 V1000"
              stroke="#F99E1F"
              strokeOpacity={0.35}
              strokeWidth="2"
              fill="none"
            />

            {/* Animated line */}
            <motion.path
              d="M2 0 V1000"
              stroke="#6A4EDA"
              strokeWidth="2"
              fill="none"
              style={{ pathLength }}
            />
          </svg>

          <div className="space-y-20">
            {days.map((item, index) => {
              const isLeft = item.side === "left";
              const threshold = getThreshold(index);

              const rawOpacity = useTransform(
                scrollYProgress,
                [threshold - 0.15, threshold - 0.03],
                [0, 1],
              );

              const opacity = useSpring(rawOpacity, {
                stiffness: 100,
                damping: 20,
              });

              const rawX = useTransform(
                scrollYProgress,
                [threshold - 0.15, threshold - 0.03],
                [isLeft ? -60 : 60, 0],
              );

              const x = useSpring(rawX, {
                stiffness: 120,
                damping: 20,
                mass: 0.8,
              });

              const y = useSpring(
                useTransform(
                  scrollYProgress,
                  [threshold - 0.08, threshold],
                  [12, 0],
                ),
                { stiffness: 120, damping: 18 },
              );

              const dotProgress = useTransform(
                scrollYProgress,
                [threshold - 0.01, threshold],
                [0, 1],
              );

              const dotColor = useTransform(
                dotProgress,
                [0, 1],
                ["#6A4EDA", "#F99E1F"], // violet → orange
              );

              return (
                <div
                  key={index}
                  className={`relative flex ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Timeline Dot */}
                  <motion.span
                    style={{ backgroundColor: dotColor }}
                    className="
    absolute
    left-1/2
    top-8
    z-10
    h-3
    w-3
    -translate-x-1/2
    rounded-full
  "
                  />

                  {/* Card */}
                  <motion.div
                    style={{ x, opacity }}
                    className="w-full max-w-md"
                  >
                    <div className="rounded-xl bg-gradient-to-l from-[#F99E1F] to-[#6A4EDA] p-[1px]">
                      <div className="rounded-[11px] bg-white p-6">
                        <span className="mb-2 inline-block rounded-full bg-[#6A4EDA]/10 px-3 py-1 text-xs font-semibold text-[#6A4EDA]">
                          {item.day}
                        </span>

                        <h3 className="mb-2 font-semibold text-gray-900 text-lg">
                          {item.title}
                        </h3>

                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
