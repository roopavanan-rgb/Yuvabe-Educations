"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Palette,
  Code,
  Briefcase,
  AlertTriangle,
  Zap,
  Layers,
  MessageSquare,
  Users,
  Leaf,
  Target,
  Clock,
  Calendar,
  Timer,
  MapPin,
  Award,
  CircleCheck,
  ArrowRight,
  Lightbulb,
} from "lucide-react";
import CurriculumTimeline from "@/components/CurriculumTimeline";
import FacilitatorsSection from "@/components/FacilitatorsSection";
import FAQSection from "@/components/workshop/FAQSection";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const items = [
  {
    label: "Duration",
    value: "5 Days",
    icon: Clock,
    highlight: false,
  },
  {
    label: "Dates",
    value: "9–13 March 2026",
    icon: Calendar,
    highlight: true,
  },
  {
    label: "Time",
    value: "8:00 AM – 5:00 PM",
    icon: Timer,
    highlight: false,
  },
  {
    label: "Format",
    value: "In-Person",
    icon: Users,
    highlight: false,
  },
  {
    label: "Location",
    value: "Yuvabe Campus, Auroville",
    icon: MapPin,
    highlight: true,
  },
  {
    label: "Outcome",
    value: "Certificate + Portfolio Case Study",
    icon: Award,
    highlight: false,
  },
];

const cards = [
  {
    text: "Students & early-career professionals with basic UX or design thinking exposure",
    icon: User,
  },
  {
    text: "Aspiring UI/UX, Product, Motion or Digital Designers.",
    icon: Palette,
  },
  {
    text: "IT professionals transitioning into design or product roles",
    icon: Code,
  },
  {
    text: "Working professionals seeking stronger problem-solving and innovation skills",
    icon: Briefcase,
  },
];

const takeaway = [
  {
    id: "portfolio-case-study",
    title: "Portfolio Case Study",
    text: "Create a portfolio-ready design case study",
    icon: Briefcase,
  },
  {
    id: "career-clarity",
    title: "Career Clarity",
    text: "Develop clarity on next steps—UX roles, Product Design, or further learning",
    icon: Lightbulb,
  },
  {
    id: "practical-confidence",
    title: "Practical Confidence",
    text: "Gain confidence to apply design thinking in real projects",
    icon: Code,
  },
  {
    id: "community-access",
    title: "Community Access",
    text: "Become part of Yuvabe's learning and alumni community",
    icon: Users,
  },
];

const steps = [
  {
    step: "01",
    title: "Apply online",
    desc: "Fill out the application form",
  },
  {
    step: "02",
    title: "Screening",
    desc: "Eligibility check by our team",
  },
  {
    step: "03",
    title: "Confirm",
    desc: "Secure seat & complete payment",
  },
];
const card = [
  {
    title: "Hands-on sprint format",
    desc: "Learn by doing, not listening",
    icon: Zap,
  },
  {
    title: "Real-world simulation",
    desc: "Sprint (Day 1) + Marathon (Days 2–5) modes",
    icon: Layers,
  },
  {
    title: "Expert mentoring",
    desc: "Continuous feedback from industry practitioners",
    icon: MessageSquare,
  },
  {
    title: "Real user validation",
    desc: "Test ideas with users, not assumption",
    icon: Users,
  },
  {
    title: "Auroville environment",
    desc: "Deep focus and reflection in a unique setting",
    icon: Leaf,
  },
  {
    title: "Dual impact focus",
    desc: "User needs + business impact in solutions and pitches",
    icon: Target,
  },
];

export default function Hero() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex  items-center justify-center bg-[linear-gradient(180deg,#FBFBF8_0%,#FBFBF8_50%,#F2EFE9_100%)] px-6 py-20 overflow-hidden">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}

          {/* SVG Title */}
          <motion.div
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto mb-6 w-full max-w-3xl"
          >
            <Image
              src="/images/problem-to-pitch.png"
              alt="Problem to Pitch"
              width={1200}
              height={300}
              priority
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-2 text-2xl font-medium text-[#F95A35] font-secondary"
          >
            A 5-Day Immersive Advanced Design Workshop in Auroville
          </motion.p>

          <motion.p
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-8 text-lg text-gray-500 font-secondary"
          >
            Learn. Design. Validate. Pitch.
          </motion.p>

          {/* Value Proposition */}
          <motion.h2
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-4 text-3xl font-semibold text-gray-900 md:text-4xl font-primary"
          >
            Design Experiences That Users{" "}
            <span className="bg-gradient-to-l from-[#F99E1F] to-[#6A4EDA] bg-clip-text text-transparent">
              Love!
            </span>
          </motion.h2>

          <motion.p
            custom={0.5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto mb-10 max-w-2xl text-gray-600 text-lg font-secondary"
          >
            Design solutions that are user-centered, business-aligned, and ready
            for real-world implementation.
          </motion.p>
          <motion.p
            custom={0.5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto mb-10 max-w-2xl text-gray-600 text-lg font-secondary"
          >
            Problem to Pitch is an in-person, industry-mentored Advanced Design
            Thinking workshop hosted at the Yuvabe Campus, Auroville. Work
            closely with expert mentors, collaborate with peers, test idea with
            real users, and walk away with a portfolio-ready case study and
            pitch deck—all within the calm, reflective learning environment of
            Auroville.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={0.6}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/bridge/advanced-design-workshop/registrationform"
              className="inline-flex items-center gap-2 rounded-xl bg-[#6A4EDA] px-8 py-2 font-medium text-white shadow-md transition hover:bg-violet-700 active:scale-95"
            >
              Apply Now →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center pt-20  "
          >
            <Image
              src="/images/snake.svg"
              alt=""
              width={100}
              height={100}
              className="w-[40%]"
            />
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="relative bg-[linear-gradient(180deg,#F2EFE9_0%,#F2EFE9_100%)] px-6 pb-20">
        <div className="mx-auto max-w-3xl">
          {/* Overline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-4 text-center text-md font-semibold tracking-widest text-[#6A4EDA]"
          >
            THE VISION
          </motion.p>

          {/* Heading */}
          <motion.h2
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 text-center text-3xl font-semibold text-black md:text-5xl font-primary"
          >
            Why Problem to{" "}
            <span
              className="
      inline-block
      bg-gradient-to-l
      from-[#F99E1F]
      to-[#6A4EDA]
      bg-clip-text
      text-transparent
    "
            >
              Pitch
            </span>
            ?
          </motion.h2>

          {/* Body */}
          <motion.div
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 text-[18px] leading-relaxed text-gray-600 font-secondary"
          >
            <p>
              The world of digital design is evolving rapidly. Visual design
              alone is no longer enough—successful products demand strong UX
              strategy, research-driven decisions, and seamless user flows.
            </p>

            <p>
              Problem to Pitch is designed for learners who already have basic
              exposure to UX or design thinking and are ready to move beyond
              theory into real-world application.
            </p>

            <p>
              Across five intensive days, participants experience how real
              design teams work—from understanding users and framing the right
              problem to testing solutions and pitching outcomes that balance
              user needs and business impact.
            </p>
          </motion.div>

          {/* Callout */}
          <motion.div
            custom={0.35}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative mt-10 pl-6"
          >
            <span className="absolute left-0 top-0 h-full w-1 rounded-full bg-[#6A4EDA]" />
            <p className="italic text-gray-800 font-secondary text-lg">
              This is not a lecture-based course. It&apos;s a hands-on,
              execution-focused design journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who should apply? */}
      <section className="bg-[#FBFBF8] px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          {/* Overline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-3 text-sm font-semibold tracking-widest text-[#6A4EDA]"
          >
            IDEAL CANDIDATES
          </motion.p>

          {/* Heading */}
          <motion.h2
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-4 text-3xl md:text-5xl font-semibold text-black  font-primary"
          >
            Who Should{" "}
            <span className="bg-gradient-to-l from-[#F99E1F] to-[#6A4EDA] bg-clip-text text-transparent">
              Apply
            </span>
            ?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-2xl text-gray-600 text-lg"
          >
            This advanced workshop is ideal for learners who want to apply
            design thinking methods to real-world digital challenges.
          </motion.p>

          {/* Cards */}
          <motion.div
  custom={0.3}
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid gap-6 sm:grid-cols-2 items-stretch"
>
  {cards.map((card, i) => {
    const Icon = card.icon;

    return (
      <div
        key={i}
        className="
          h-full
          rounded-xl
          bg-gradient-to-l
          from-[#F99E1F]
          to-[#6A4EDA]
          p-[1px]
        "
      >
        <div
          className="
            h-full
            flex
            items-start
            gap-4
            rounded-[12px]
            bg-[#F7F5EF]
            p-5
            text-left
          "
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-[#6A4EDA] p-2">
            <Icon size={20} strokeWidth={2} />
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            {card.text}
          </p>
        </div>
      </div>
    );
  })}
</motion.div>


          {/* Important Note */}
          <motion.div
            custom={0.45}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mt-12 max-w-5xl rounded-xl bg-[#F99E1F]/10 p-5 border border-[#F99E1F]/30"
          >
            <div className="flex items-center justify-start gap-4">
              {/* Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-200 text-orange-700">
                <AlertTriangle size={20} strokeWidth={2} />
              </div>

              {/* Content */}
              <div>
                <p className="mb-1 font-semibold text-black text-start text-md">
                  Important Note
                </p>
                <p className="text-sm text-[#6A6A7C] text-start">
                  This workshop is advanced and not intended for complete
                  beginners with no prior exposure to design thinking or UX.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="relative bg-[#FBFBF8] px-6 pb-24">
        <CurriculumTimeline />
      </section>

      {/* What Makes This Programme Different */}
      <section className="bg-[#FBFBF8] px-6 pt-6 pb-20">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <p className="mb-3 text-md font-semibold tracking-widest text-[#6A4EDA]">
              OUR DIFFERENCE
            </p>

            <h2 className="text-3xl font-semibold text-black md:text-5xl font-primary">
              What Makes This Programme{" "}
              <span className="bg-gradient-to-l from-[#F99E1F] to-[#6A4EDA] bg-clip-text text-transparent">
                Different
              </span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {card.map((card, i) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={i}
                  custom={i * 0.08}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="rounded-xl bg-[#F2EFE9] border border-[#E5E3DC] p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg  bg-[linear-gradient(135deg,rgba(106,78,218,0.1)_0%,rgba(249,158,31,0.1)_100%)]  text-[#6A4EDA]">
                    <Icon size={20} strokeWidth={2} />
                  </div>

                  <h3 className="mb-1 font-semibold text-black text-md font-primary">
                    {card.title}
                  </h3>

                  <p className="text-sm font-secondary text-[#6A6A7C]">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Facilitators */}
      <section>
        <FacilitatorsSection />
      </section>
      {/* Program Snapshot */}
      <section className="bg-[#FBFBF8] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold tracking-widest text-[#6A4EDA]">
              QUICK OVERVIEW
            </p>

            <h2 className="text-3xl font-semibold text-black md:text-5xl font-primary">
              Program{" "}
              <span className="bg-gradient-to-l from-[#F99E1F] to-[#6A4EDA] bg-clip-text text-transparent">
                Snapshot
              </span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className={`flex items-center gap-4 rounded-xl p-6 border ${
                    item.highlight
                      ? "bg-[#6A4EDA]/5 border-[rgba(106,78,218,0.2)]"
                      : "bg-[#F2EFE9] border-[rgba(229,227,220,0.2)]"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                      item.highlight
                        ? "bg-violet-100 text-[#6A4EDA]"
                        : "bg-[#F4F2EC] text-gray-700"
                    }`}
                  >
                    <Icon size={20} strokeWidth={2} />
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-1">
                      {item.label}
                    </p>

                    <p
                      className={`text-sm font-semibold ${
                        item.highlight ? "text-violet-700" : "text-gray-900"
                      }`}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="relative bg-[#FBFBF8] px-6 pt-10 pb-20">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold tracking-widest text-[#6A4EDA] font-secondary">
              INVESTMENT
            </p>

            <h2 className="text-3xl font-semibold text-black md:text-5xl font-primary">
              Fees &{" "}
              <span className="bg-gradient-to-l from-[#F99E1F] to-[#6A4EDA] bg-clip-text text-transparent">
                Inclusions
              </span>
            </h2>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Standard */}
            <div className="rounded-2xl border border-[#E5E3DC] bg-[#FBFBF8] p-6">
              <h3 className="mb-6 text-xl font-semibold font-secondary text-gray-900">
                Standard
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-gray-700 text-sm font-secondary">
                  <span>Students</span>
                  <span className="font-bold text-gray-900 text-xl">
                    ₹7,000
                  </span>
                </div>
                <div className="flex items-center justify-between text-gray-700 text-sm font-secondary">
                  <span>Professionals</span>
                  <span className="font-bold text-gray-900 text-xl">
                    ₹8,000
                  </span>
                </div>
              </div>
            </div>

            {/* Early Bird */}
            <div className="relative rounded-2xl border border-[#6A4EDA] bg-[#FBFBF8] p-8">
              {/* Badge */}
              <div className=" absolute
      top-0
      inset-x-0
      rounded-t-2xl
      bg-[#6A4EDA]
      py-1
      text-center
      text-xs
      font-semibold
      text-white">
                Best Value
              </div>

              <div className="mb-6 flex items-center justify-between mt-4">
                <h3 className="text-xl font-semibold font-secondary text-gray-900">
                  Early Bird
                </h3>
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs text-[#6A4EDA]">
                  till 20 Feb
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm font-secondary ">
                  <span className="text-gray-600">Students</span>
                  <span className="font-bold text-[#6A4EDA] text-xl">
                    ₹5,500
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm font-secondary">
                  <span className="text-gray-600 ">Professionals</span>
                  <span className="font-bold text-[#6A4EDA] text-xl">
                    ₹6,500
                  </span>
                </div>
              </div>
            </div>

            {/* Group */}
            <div className="rounded-2xl border border-[#E5E3DC] bg-[#FBFBF8] p-8">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold font-secondary text-gray-900">
                  Group
                </h3>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600 font-secondary">
                  3+ participants
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-gray-700 text-sm font-secondary">
                  <span>Students</span>
                  <span className="font-bold text-gray-900 text-xl">
                    ₹4,500
                  </span>
                </div>
                <div className="flex items-center justify-between text-gray-700 text-sm font-secondary">
                  <span>Professionals</span>
                  <span className="font-bold text-gray-900 text-xl">
                    ₹5,500
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Inclusions */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CircleCheck className="h-5 w-5 text-[#6A4EDA]" />
              Certificate of Completion
            </div>
            <div className="flex items-center gap-2">
              <CircleCheck className="h-5 w-5 text-[#6A4EDA]" />
              Daily Lunch
            </div>
            <div className="flex items-center gap-2">
              <CircleCheck className="h-5 w-5 text-[#6A4EDA]" />
              Workshop Kit & Materials
            </div>
          </div>

          {/* Limited seats */}
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F99E1F]/30 bg-[#F99E1F]/10 px-6 py-2 text-sm text-gray-800 font-secondary font-semibold">
              <span className="h-2 w-2 rounded-full bg-[#F99E1F]" />
              Limited seats — small batch for deep learning
            </div>
          </div>
        </div>
      </section>
      {/* Enrolment Process */}
      <section className="bg-[#FBFBF8] px-6 pt-10 py-20">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold tracking-widest text-[#6A4EDA]">
              GETTING STARTED
            </p>

            <h2 className="text-3xl font-semibold text-black md:text-5xl font-primary">
              Enrolment{" "}
              <span className="bg-gradient-to-l from-[#F99E1F] to-[#6A4EDA] bg-clip-text text-transparent">
                Process
              </span>
            </h2>
          </div>

          {/* Steps */}
          <div
            className="
    grid
    gap-6
    grid-cols-1
    sm:grid-cols-2
    lg:flex
    lg:items-center
    lg:justify-between
  "
          >
            {steps.map((item, index) => (
              <div key={index} className="flex items-center justify-center">
                {/* Card */}
                <div
                  className="
        flex
        w-full
        sm:max-w-[280px]
        lg:w-[260px]
        flex-col
        items-center
        rounded-xl
        bg-[#F2EFE9]
        p-6
        text-center
        border
        border-[#E5E3DC]
      "
                >
                  {/* Step badge */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#F99E1F] to-[#6A4EDA] text-lg font-semibold text-white">
                    {item.step}
                  </div>

                  <h3 className="mb-1 font-semibold text-gray-900 text-md font-primary">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 font-secondary">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow (desktop only) */}
                {index < steps.length - 1 && (
                  <ArrowRight className="mx-6 hidden lg:block text-gray-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Your takeaway */}
      <section className="bg-[#FBFBF8] px-6 pt-10 py-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Overline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-3 text-sm font-semibold tracking-widest font-secondary text-[#6A4EDA]"
          >
            Your Takeaway
          </motion.p>

          {/* Heading */}
          <motion.h2
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-4 text-3xl font-semibold text-black md:text-5xl font-primary"
          >
            Where This Can{" "}
            <span className="bg-gradient-to-l from-[#F99E1F] to-[#6A4EDA] bg-clip-text text-transparent">
              Take You
            </span>
            ?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-2xl text-gray-600 text-lg"
          >
            By the end of Problem to Pitch, you will:
          </motion.p>

          {/* Cards */}
          <motion.div
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {takeaway.map((card, i) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.id ?? i}
                  className="
          flex
          items-start
          gap-4
          rounded-[12px]
          bg-[#FBFBF8]
          border
          border-[#E5E3DC]
          p-5
          text-left
        "
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[linear-gradient(135deg,rgba(106,78,218,0.1)_0%,rgba(249,158,31,0.1)_100%)] text-[#6A4EDA] p-2">
                    <Icon size={20} strokeWidth={2} />
                  </div>

                  <div>
                    <h5 className="text-md font-semibold text-gray-900 font-primary">
                      {card.title}
                    </h5>
                    <p className="text-gray-700 text-sm font-secondary">
                      {card.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
      <section className="bg-[#FBFBF8] px-6 pt-10 py-20 relative overflow-hidden">
        <FAQSection />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
      pointer-events-none
      absolute
      bottom-0
      left-0
      w-[260px]
      md:w-[560px]
      -translate-x-1/12
      translate-y-1/6
      opacity-40
    "
        >
          <Image
            src="/images/inverted-snake2.svg"
            alt=""
            width={400}
            height={400}
            priority
          />
        </motion.div>
      </section>

      {/* About Yuvabe */}
      <section className="bg-[#FBFBF8] px-6 pt-10 py-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Overline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-3 text-sm font-semibold tracking-widest text-[#6A4EDA]"
          >
            ABOUT YUVABE
          </motion.p>

          {/* Heading */}
          <motion.h2
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-6 text-3xl font-semibold text-black md:text-5xl font-primary"
          >
            A Collaboration You Can{" "}
            <span className="bg-gradient-to-l from-[#F99E1F] to-[#6A4EDA] bg-clip-text text-transparent">
              Trust
            </span>
          </motion.h2>

          {/* Paragraph 1 */}
          <motion.p
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-4 max-w-3xl text-lg text-gray-600"
          >
            Yuvabe Education is a purpose-driven learning platform based in
            Auroville. Through its Bridge Programme, Yuvabe equips young adults
            with practical, industry-relevant skills, hands-on learning
            experiences, and a supportive community.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-lg text-gray-600"
          >
            By bridging education with real-world design practice, Yuvabe helps
            learners grow into confident, thoughtful, and impact-oriented
            professionals.
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-[linear-gradient(135deg, rgba(106, 78, 218, 0.05) 0%, rgba(106, 78, 218, 0) 50%, rgba(249, 158, 31, 0.05) 100%)] px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          {/* Overline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-3 text-sm font-semibold tracking-widest text-[#6A4EDA]"
          >
            GET STARTED
          </motion.p>

          {/* Heading */}
          <motion.h2
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-4 text-3xl font-semibold text-black md:text-5xl font-primary leading-tight"
          >
            Ready to Design Solutions That{" "}
            <span className="bg-gradient-to-l from-[#F99E1F] to-[#6A4EDA] bg-clip-text text-transparent">
              Matter
            </span>
            ?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-10 max-w-2xl text-lg text-gray-600"
          >
            Your journey into confident, user-centered design starts here.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" flex flex-wrap justify-center gap-4"
          >
            <a
              href="/bridge/advanced-design-workshop/registrationform"
              className="
              inline-flex items-center gap-2 rounded-xl bg-[#6A4EDA] px-8 py-2 font-medium text-white shadow-md transition hover:bg-violet-700 active:scale-95
            "
            >
              Apply Now <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
