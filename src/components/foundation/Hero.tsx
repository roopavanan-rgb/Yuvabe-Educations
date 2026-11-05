"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Clock,
  MapPin,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";

const scrollToId = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const metaItems = [
  { icon: Clock, label: "6 Weeks" },
  { icon: CalendarDays, label: "Every Saturday" },
  { icon: Sparkles, label: "Free" },
  { icon: MapPin, label: "SaraCon, Auroville" },
];

const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const heroFadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
};

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden min-h-screen flex items-center">
      <div className="relative max-w-310 mx-auto px-5 md:px-8 xl:px-0 py-12 md:py-14 z-10 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-y-16 gap-x-12 items-center">
        {/* Left: Text */}
        <motion.div
          className="flex flex-col gap-y-7"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Breadcrumb */}
          <motion.div variants={heroFadeUp} className="flex items-center gap-3">
            <div className="w-8 h-0.5 bg-[#D9A404] shrink-0" />
            <p className="font-secondary text-[12px] md:text-[13px] tracking-[0.12em] text-[#5B4A25] font-semibold uppercase">
              Bridge Program 2026&nbsp;&nbsp;/&nbsp;&nbsp;Foundation Programme
            </p>
          </motion.div>

          {/* Headline */}
          <motion.div variants={heroFadeUp}>
            <h1 className="font-primary text-[#1C1710] font-bold leading-[1.12] text-4xl md:text-5xl lg:text-[3.4rem]">
              Build Confidence.
              <br />
              <span className="text-[#B8790A]">Gain Clarity.</span>
              <br />
              Find Your Direction.
            </h1>
          </motion.div>

          {/* Meta */}
          <motion.div
            variants={heroFadeUp}
            className="flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            {metaItems.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="font-secondary text-[#3A3225] text-sm md:text-base font-medium flex items-center gap-1.5"
              >
                <Icon className="w-4 h-4 text-[#B8790A]" strokeWidth={2.25} />
                {label}
              </span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            variants={heroFadeUp}
            className="font-secondary text-sm md:text-base text-[#5B5346] leading-relaxed max-w-120"
          >
            A free 6-week learning journey designed to help young adults build
            essential{" "}
            <span className="text-[#B8790A] font-semibold">
              life, communication, digital, and career skills.
            </span>{" "}
            <br />
            Two interactive sessions every Saturday.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={heroFadeUp}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <Link
              href="#curriculum"
              onClick={scrollToId("curriculum")}
              scroll={false}
            >
              <motion.span
                className="inline-flex items-center gap-2 font-secondary text-sm md:text-base text-[#1C1710] font-semibold px-7 py-3 rounded-full cursor-pointer border border-[#D9A404]/50 bg-white/40"
                whileHover={{ scale: 1.05, borderColor: "#D9A404" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 340, damping: 22 }}
              >
                View Curriculum
              </motion.span>
            </Link>
            <Link href="https://forms.gle/UQ3FRbqpk6Xqby5u9" target="_blank">
              <motion.span
                className="inline-flex items-center gap-2 font-secondary text-sm md:text-base text-[#1C1710] font-semibold px-7 py-3 rounded-full cursor-pointer bg-[#F2B705] shadow-[0_8px_24px_rgba(217,164,4,0.35)]"
                whileHover={{ scale: 1.05, backgroundColor: "#E2711D" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 340, damping: 22 }}
              >
                {" "}
                Apply Now <span aria-hidden>→</span>
              </motion.span>
            </Link>
          </motion.div>

          {/* Footer note */}
          <motion.p
            variants={heroFadeUp}
            className="font-secondary text-[12px] md:text-[13px] tracking-widest text-[#5B4A25] font-semibold uppercase mt-1"
          >
            Lunch Provided &middot; Limited to 20 Seats &middot; Starts{" "}
            <span className="text-[#B8790A] font-bold">10 October 2026</span>{" "}
            <br />
            &middot; Last Date to Apply:{" "}
            <span className="text-[#B8790A] font-bold">5 October 2026</span>
          </motion.p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="relative w-full max-w-120 mx-auto lg:max-w-none"
          variants={imageReveal}
          initial="hidden"
          animate="visible"
        >
          <div className="relative rounded-[28px] overflow-hidden border border-[#D9A404]/30 shadow-[0_20px_60px_rgba(217,164,4,0.22)] aspect-square">
            <Image
              src="/images/foundation/Foundation01.webp"
              alt="Yuvabe Bridge Program graduates celebrating with their certificates of achievement"
              fill
              priority
              className="object-cover object-[40%_center]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#1C1710]/50 via-transparent to-transparent" />
          </div>

          {/* Floating badge: seats */}
          <motion.div
            className="absolute -left-4 md:-left-8 bottom-8 flex items-center gap-2 bg-white/95 backdrop-blur-md border border-[#D9A404]/30 rounded-2xl px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Users className="w-5 h-5 text-[#B8790A]" />
            <span className="font-secondary text-xs md:text-sm text-[#1C1710] font-semibold">
              Limited to 20 Seats
            </span>
          </motion.div>

          {/* Floating badge: free */}
          <motion.div
            className="absolute -right-2 md:-right-6 top-8 flex items-center gap-2 bg-white/95 backdrop-blur-md border border-[#D9A404]/30 rounded-2xl px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <Sparkles className="w-5 h-5 text-[#B8790A]" />
            <span className="font-secondary text-xs md:text-sm text-[#1C1710] font-semibold">
              100% Free
            </span>
          </motion.div>

          {/* Floating badge: schedule */}
          <motion.div
            className="absolute left-4 md:left-8 -top-4 md:-top-6 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md border border-[#D9A404]/30 rounded-2xl px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <CalendarDays className="w-5 h-5 text-[#B8790A]" />
            <span className="font-secondary text-xs md:text-sm text-[#1C1710] font-semibold">
              Every Saturday
            </span>
          </motion.div>

          {/* Floating badge: start date */}
          <motion.div
            className="absolute right-4 md:right-8 -bottom-4 md:-bottom-6 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md border border-[#D9A404]/30 rounded-2xl px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          >
            <Rocket className="w-5 h-5 text-[#B8790A]" />
            <span className="font-secondary text-xs md:text-sm text-[#1C1710] font-semibold">
              Starts <span className="text-[#B8790A]">10 October 2026</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
