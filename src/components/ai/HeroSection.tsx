"use client";
import { Button } from "@/components/ai/ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion, Variants } from "framer-motion";

export function HeroSection() {
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (waveRef.current) {
      gsap.to(waveRef.current, {
        y: -30,
        x: 20,
        scale: 1.05,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(waveRef.current, {
        opacity: 0.4,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, []);

  // ✅ Typed Variants
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1], // ✅ FIXED
      },
    },
  };

  return (
    <section className="relative bg-[#001B44] min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        ref={waveRef}
        className="absolute top-0 right-0 h-full w-full pointer-events-none opacity-80 z-0"
      >
        <Image
          src="/assets/wave.svg"
          alt="wave background"
          fill
          className="object-cover object-right"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container px-6 md:px-12 mx-auto relative z-10 pt-32 pb-20"
      >
        <div className="max-w-3xl text-left">
          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
          >
            Don't just use AI.
            <br />
            Learn to <span className="text-[#FFC107]">build with it.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-6"
          >
            Build your first real AI app in Week 1.
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-sm md:text-base text-gray-300 mt-6 max-w-2xl leading-relaxed"
          >
            Stop waiting. Stop watching tutorials. At Yuvabe's AI Bridge
            Program, you run real AI applications from Day 1 — learning to think
            with AI as a partner, not a shortcut.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-6 mt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Button
                size="lg"
                className="bg-[#FFC107] text-black hover:bg-yellow-500 font-bold px-8 py-6 rounded-full text-sm tracking-wide shadow-lg hover:shadow-yellow-500/30 transition-all"
                onClick={() =>
                  window.open(
                    "https://yuvabeeducation.com/bridge/ai/register",
                    "_blank",
                  )
                }
              >
                APPLY NOW
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white bg-transparent text-white hover:bg-white/10 font-bold px-8 py-6 rounded-full text-sm tracking-wide transition-all"
                onClick={() => window.open("/docs/AI Brochure_1.pdf", "_blank")}
              >
                BOOK A CALL
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Glow */}
      <div className="absolute -top-40 -left-40 opacity-40 blur-2xl w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#3991BD]/20 to-blue-300 pointer-events-none"></div>
    </section>
  );
}
