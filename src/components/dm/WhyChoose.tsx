"use client";

import { motion } from "framer-motion";
import {
  BadgeIndianRupee,
  Briefcase,
  FolderOpen,
  GraduationCap,
  Mic,
  Sparkles,
  Sprout,
  Sun,
  Trees,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type Benefit = {
  title: string;
  description: string;
  icon: LucideIcon;
  // Grid placement on large screens (4-column bento grid)
  span?: string;
  variant?: "featured" | "accent";
};

const benefits: Benefit[] = [
  {
    title: "Completely free",
    description:
      "You only pay a refundable deposit, and you get it back when you finish.",
    icon: BadgeIndianRupee,
    span: "sm:col-span-2 lg:row-span-2",
    variant: "featured",
  },
  {
    title: "AI in every module",
    description:
      "You won’t get a single class on AI tools. You’ll use them throughout, for research, writing, design, video, ads, automation and reporting.",
    icon: Sparkles,
    span: "sm:col-span-2",
    variant: "accent",
  },
  {
    title: "Project-based learning",
    description:
      "You pick one real brand in week one and build on it through every module.",
    icon: Briefcase,
  },
  {
    title: "Half-day format",
    description:
      "Mornings only, so you can study, work or run your business alongside.",
    icon: Sun,
  },
  {
    title: "Learn from practitioners",
    description:
      "Sessions are led by people who do this work every day at Yuvabe Studios.",
    icon: Users,
  },
  {
    title: "Vibe marketing and automation",
    description:
      "Learn to build working marketing systems by describing what you want in plain language.",
    icon: Workflow,
  },
  {
    title: "A real portfolio",
    description:
      "You leave with a brand kit, a live landing page, campaigns, a working automation and a capstone case study.",
    icon: FolderOpen,
  },
  {
    title: "Yuvabe’s Evolve Program",
    description:
      "Build communication, teamwork and confidence alongside your technical skills.",
    icon: Sprout,
  },
  {
    title: "English and presentation skills",
    description: "Practise speaking, writing and presenting your work.",
    icon: Mic,
  },
  {
    title: "Career support",
    description:
      "Get help with your resume, portfolio and interviews, and access to job opportunities through our network.",
    icon: GraduationCap,
  },
  {
    title: "Learning in Auroville",
    description:
      "Study in a community built around sustainability and experimentation.",
    icon: Trees,
    span: "sm:col-span-2",
  },
];

const variantStyles = {
  featured: {
    card: "bg-[#F8C12C] border-[#F8C12C] text-[#140F20]",
    iconWrap: "bg-[#140F20] text-[#FFCA2D] w-16 h-16 rounded-2xl",
    number: "text-[#140F20]",
    watermark: "text-[#140F20]/10",
    title: "text-3xl sm:text-4xl text-[#140F20]",
    description: "text-base sm:text-lg text-[#140F20]/80",
  },
  accent: {
    card: "bg-[#2A2050] border-[#3A2F66] text-white",
    iconWrap: "bg-[#FFCA2D1A] text-[#FFCA2D] w-12 h-12 rounded-xl",
    number: "text-[#FFCA2D]",
    watermark: "text-white/5",
    title: "text-xl text-white",
    description: "text-sm sm:text-base text-white/80",
  },
  default: {
    card: "bg-[#1C1730] border-[#2A2340] text-white",
    iconWrap: "bg-[#FFCA2D1A] text-[#FFCA2D] w-12 h-12 rounded-xl",
    number: "text-[#FFCA2D]",
    watermark: "text-white/5",
    title: "text-xl text-white",
    description: "text-sm sm:text-base text-white/80",
  },
};

export function WhyChoose() {
  return (
    <section className="relative w-full py-16 px-4 sm:px-6 bg-[#140F20] text-white overflow-hidden">
      <div className="absolute right-0 bottom-0 blur-3xl w-[420px] h-[420px] rounded-full bg-[#976346] opacity-10 z-0"></div>

      <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#FFCA2D] mb-12 sm:mb-16">
        Why Choose the Bridge Digital Marketing Program?
      </h2>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {benefits.map((item, index) => {
          const styles = variantStyles[item.variant ?? "default"];
          const number = String(index + 1).padStart(2, "0");
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
              viewport={{ once: true }}
              className={`flex ${item.span ?? ""}`}
            >
              <div
                data-gsap="tilt"
                className={`relative w-full overflow-hidden rounded-3xl border p-6 sm:p-8 flex flex-col justify-between gap-10 min-h-[260px] will-change-transform ${styles.card}`}
              >
                {/* Cursor spotlight (driven by DmGsapEffects) */}
                <div
                  data-gsap-spotlight
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 opacity-0 invisible ${
                    item.variant === "featured"
                      ? "bg-[radial-gradient(320px_circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.35),transparent_60%)]"
                      : "bg-[radial-gradient(320px_circle_at_var(--x,50%)_var(--y,50%),rgba(255,202,45,0.14),transparent_60%)]"
                  }`}
                />

                {/* Large watermark number */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -bottom-6 -right-2 font-black leading-none select-none ${
                    item.variant === "featured"
                      ? "text-[10rem] sm:text-[14rem]"
                      : "text-[7rem] sm:text-[8rem]"
                  } ${styles.watermark}`}
                >
                  {number}
                </span>

                <div className="relative flex items-start justify-between">
                  <div className={`flex items-center justify-center ${styles.iconWrap}`}>
                    <Icon
                      aria-hidden="true"
                      className={item.variant === "featured" ? "w-9 h-9" : "w-6 h-6"}
                      strokeWidth={1.75}
                    />
                  </div>
                  <span className={`font-mono text-sm font-semibold ${styles.number}`}>
                    {number}
                  </span>
                </div>

                <div className="relative">
                  <h3 className={`font-bold leading-tight ${styles.title}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-3 leading-relaxed ${styles.description}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
