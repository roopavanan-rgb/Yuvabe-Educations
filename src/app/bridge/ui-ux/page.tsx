"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, XCircle } from "lucide-react";
import FaqSection from "@/components/uiux/FaqSection";
import GsapSplitText from "@/components/uiux/GsapSplitText";
import GsapScramble from "@/components/uiux/GsapScramble";
import GsapHeroIllustration from "@/components/uiux/GsapHeroIllustration";
import GsapParallaxSvg from "@/components/uiux/GsapParallaxSvg";
import HighlightHover from "@/components/uiux/HighlightHover";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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


// Define slide data array
const slidesData = [
  {
    title: "Introduction to UI/UX Design",
    subtitle: "Understanding design principles and industry trends.",
    image: "/images/uiux/ui-slide1.png",
    alt: "Slide Image 1",
  },
  {
    title: "User Research & Analysis",
    subtitle: "Conducting research to understand user needs and behaviours.",
    image: "/images/uiux/ui-slide2.png",
    alt: "Slide Image 2",
  },
  {
    title: "Wireframing & Prototyping",
    subtitle: "Creating low-fidelity and high-fidelity prototypes.",
    image: "/images/uiux/ui-slide3.png",
    alt: "Slide Image 3",
  },
  {
    title: "Information Architecture",
    subtitle: "Structuring digital experiences for usability.",
    image: "/images/uiux/ui-slide4.png",
    alt: "Slide Image 4",
  },
  {
    title: "User Interface (UI) Design",
    subtitle: "Designing aesthetically pleasing and functional interfaces.",
    image: "/images/uiux/ui-slide5.png",
    alt: "Slide Image 5",
  },
  {
    title: "Interaction Design & Microinteractions",
    subtitle: "Enhancing user experience with intuitive interactions.",
    image: "/images/uiux/ui-slide6.png",
    alt: "Slide Image 6",
  },
  {
    title: "Usability Testing & User Feedback",
    subtitle: "Iterating designs based on user testing insights.",
    image: "/images/uiux/ui-slide7.png",
    alt: "Slide Image 7",
  },
  {
    title: "Mobile & Web Design",
    subtitle: "Optimizing designs for different platforms and devices.",
    image: "/images/uiux/ui-slide8.png",
    alt: "Slide Image 8",
  },
  {
    title: "Design Tools & Software",
    subtitle: "Mastering Figma, Adobe XD, and other essential tools.",
    image: "/images/uiux/ui-slide9.png",
    alt: "Slide Image 9",
  },
  {
    title: "Design Thinking & Problem-Solving",
    subtitle: "Applying design methodologies to real-world challenges.",
    image: "/images/uiux/ui-slide10.png",
    alt: "Slide Image 10",
  },
  {
    title: "AI & Emerging Technologies in UI/UX",
    subtitle:
      "Leveraging AI for design automation and user experience enhancement.",
    image: "/images/uiux/ui-slide11.png",
    alt: "Slide Image 11",
  },
  {
    title: "Portfolio & Resume Development",
    subtitle: "Showcasing your work effectively for job placements.",
    image: "/images/uiux/ui-slide12.png",
    alt: "Slide Image 12",
  },
];
export default function uiux() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1A2225] overflow-hidden min-h-145 md:min-h-160 lg:min-h-180">
        {/* Top-right gradient glow */}
        <div className="uiux-hero-glow absolute top-0 right-0 w-[560px] h-[560px] pointer-events-none" />

        <div className="relative max-w-[1240px] mx-auto px-5 md:px-8 xl:px-0 py-20 md:py-28 xl:py-32 z-10">
          {/* Left: Text */}
          <motion.div
            className="flex flex-col gap-y-5 lg:max-w-[950px] w-full"
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Breadcrumb */}
            <motion.div
              variants={heroFadeUp}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-[2px] bg-[#C94B24] shrink-0" />
              <p className="font-secondary text-[11px] tracking-[0.18em] text-[#F8F3EB]/60 uppercase">
                Bridge Program 2026&nbsp;&nbsp;/&nbsp;&nbsp;UI/UX Design
                Launchpad
              </p>
            </motion.div>

            {/* Headline */}
            <motion.div variants={heroFadeUp}>
              <h1 className="font-primary text-white font-bold leading-[1.1]  text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem]">
                <GsapScramble delay={0.4} chars="upperAndLowerCase">
                  Good design hasn&apos;t changed.
                </GsapScramble>
              </h1>
              <h2 className="font-primary font-bold leading-[1.1] tracking-wide text-xl md:text-2xl lg:text-[4xl] mt-1 text-[#C94B24]">
                <GsapScramble delay={0.9} chars="lowerCase" speed={0.5}>
                  How you get there has.
                </GsapScramble>
              </h2>
            </motion.div>

            {/* Meta */}
            <motion.p
              variants={heroFadeUp}
              className="font-secondary text-white text-lg md:text-2xl font-medium"
            >
              12 weeks &middot; In-person &middot; Auroville
            </motion.p>

            {/* Description */}
            <motion.p
              variants={heroFadeUp}
              className="font-secondary text-sm md:text-[16px] text-white/65 leading-relaxed max-w-[420px]"
            >
              Design real digital products — apps, interfaces, prototypes —
              using{" "}
              <motion.span
                className="text-[#C94B24] underline underline-offset-2 decoration-[#C94B24]/40 cursor-default"
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                AI as your creative partner.
              </motion.span>
            </motion.p>

            {/* Tagline */}
            <motion.p
              variants={heroFadeUp}
              className="font-secondary text-[12px] tracking-[0.28em] text-[#F8F3EB]/60 uppercase"
            >
              Design.&nbsp; Think.&nbsp; Ship.
            </motion.p>

            {/* CTA */}
            <motion.div variants={heroFadeUp}>
              <Link href="/bridge/ui-ux/registrationform">
                <motion.span
                  className="inline-flex items-center gap-2 font-secondary text-sm md:text-base text-white font-semibold px-7 py-3 rounded-full cursor-pointer bg-[#C94B24]"
                  whileHover={{ scale: 1.05, backgroundColor: "#b84320" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 340, damping: 22 }}
                >
                  Apply Now <span aria-hidden>→</span>
                </motion.span>
              </Link>
            </motion.div>

            {/* Footer note */}
            <motion.p
              variants={heroFadeUp}
              className="font-secondary text-[12px] md:text-[11px] tracking-[0.18em] text-[#F8F3EB]/60 uppercase"
            >
              No prior experience required &middot; Starts June 8, 2026
            </motion.p>
          </motion.div>
        </div>

        {/* Illustration — absolute bottom-right (GSAP-animated) */}
        <GsapHeroIllustration />
      </section>

      {/* Info ticker strip */}
      <div className="bg-[#F26622] py-3.5 overflow-x-auto">
        <div className="flex items-center justify-center gap-0 min-w-max mx-auto px-6">
          {[
            "12 WEEKS",
            "6 DELIVERABLES",
            "₹0 TUITION FEE",
            "₹3,500 REFUNDABLE DEPOSIT",
            "SEATS FILLING FAST",
          ].map((item, i, arr) => (
            <span key={item} className="flex items-center">
              <motion.span
                className="font-secondary text-[#F8F3EB] text-[14px] md:text-xs font-semibold tracking-[0.18em] cursor-default"
                whileHover={{ y: -3, color: "#fff" }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
              >
                {item}
              </motion.span>
              {i < arr.length - 1 && (
                <span className="mx-5 text-white/60 text-[14px]">◆</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Sound Familiar */}
      <section className="bg-[#F9F5F4] py-16 md:py-24 xl:py-32">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 xl:px-0 flex flex-col gap-y-8 md:gap-y-10">
          {/* Label */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-6 h-[2px] bg-[#F26622] shrink-0" />
            <span className="font-secondary text-[12px] tracking-[0.2em] text-[#999] uppercase">
              Sound Familiar?
            </span>
          </motion.div>

          {/* Heading + subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            viewport={{ once: true }}
            className="flex flex-col gap-y-4"
          >
            <h2 className="font-primary text-[#1a1a1a] font-bold text-2xl md:text-3xl lg:text-[4xl] leading-[1.15]">
              <GsapSplitText type="words">
                Does this sound{" "}
                <HighlightHover className="text-[#F26622]">
                  familiar?
                </HighlightHover>
              </GsapSplitText>
            </h2>
            <p className="font-secondary text-[#666] text-sm md:text-[20px] leading-relaxed max-w-full">
              You know design is everywhere. But actually learning it — for the
              world that exists now? That&rsquo;s a different story.
            </p>
          </motion.div>

          {/* Pain points grid */}
          <motion.div
            className="border border-[#E8E2D6] rounded-xl overflow-hidden "
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
          >
            {[
              [
                "You’ve watched tutorials but never actually shipped a product or app",
                "Figma feels overwhelming without someone to guide you through a real project",
              ],
              [
                "AI tools are clearly powerful — but you don’t know how to use them inside a design process",
                "Online courses give you theory. Nobody gives you feedback on your actual work.",
              ],
              [
                "You’ve seen apps you wish you’d designed — but don’t know where to even start",
                "You want to build digital products — but don’t know where design thinking ends and AI begins",
              ],
              [
                "Most programmes haven’t caught up with how product design actually works now",
                "You want a portfolio of real app and interface work. Right now, you have nothing to show.",
              ],
            ].map(([left, right], i, arr) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-2${
                  i < arr.length - 1 ? " border-b border-[#DDD6D3]" : ""
                }`}
              >
                <motion.div
                  className="flex items-start gap-3 px-6 py-5 border-b border-[#DDD6D3] md:border-b-0 md:border-r md:border-[#DDD6D3] rounded-tl-xl rounded-bl-xl cursor-default"
                  whileHover={{ backgroundColor: "rgba(242,102,34,0.05)" }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  <span className="mt-[5px] w-2 h-2 rounded-full bg-[#C94B24] shrink-0" />
                  <p className="font-secondary text-[#3a3a3a] text-sm md:text-[16px] leading-relaxed">
                    {left}
                  </p>
                </motion.div>
                <motion.div
                  className="flex items-start gap-3 px-6 py-5 rounded-tr-xl rounded-br-xl cursor-default"
                  whileHover={{ backgroundColor: "rgba(242,102,34,0.05)" }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  <span className="mt-[5px] w-2 h-2 rounded-full bg-[#C94B24] shrink-0" />
                  <p className="font-secondary text-[#3a3a3a] text-sm md:text-[16px] leading-relaxed">
                    {right}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#1C1B2E] py-16 md:py-24 xl:py-32">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 xl:px-0 flex flex-col gap-y-10 md:gap-y-14">
          {/* Label */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-6 h-[2px] bg-[#F26622] shrink-0" />
            <span className="font-secondary text-[12px] tracking-[0.2em] text-[#F26622] uppercase">
              How It Works
            </span>
          </motion.div>

          {/* Heading + subtitle */}
          <motion.div
            className="flex flex-col gap-y-4"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            viewport={{ once: true }}
          >
            <h2 className="font-albert-sans font-bold text-3xl md:text-3xl lg:text-4xl  leading-[1.2]">
              <span className="text-white">
                What if you didn&rsquo;t start with theory…
              </span>
              <br />
              <HighlightHover className="text-[#F26622]">
                but with designing an app?
              </HighlightHover>
            </h2>
            <p className="font-secondary text-white/65 text-sm md:text-[18px] leading-relaxed max-w-full">
              At Yuvabe, you don&rsquo;t prepare to design digital products. You
              design them. From Day 1.
            </p>
          </motion.div>

          {/* Cards 2×2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                num: "01",
                title: "Start a real product brief immediately.",
                body: "No preamble. No slides-only weeks. You're working on a live digital product — a real app or interface — from the first session.",
              },
              {
                num: "02",
                title:
                  "Use AI to research, generate ideas, and prototype faster.",
                body: "Claude for user research synthesis. Midjourney for visual concepts. Lovable and v0 to spin up interactive prototypes. You still do the thinking — AI amplifies how far it goes.",
              },
              {
                num: "03",
                title: "Get your product critiqued. Fix what doesn't work.",
                body: "Feedback sessions, peer reviews, facilitator crits on your actual app screens. Product design improves through honest critique — not isolation.",
              },
              {
                num: "04",
                title: "Iterate. Ship. Build again — better and faster.",
                body: "Every iteration sharpens your product thinking and your command of AI. By the end, you'll know how to go from zero to a working, tested digital product.",
              },
            ].map(({ num, title, body }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.1 + i * 0.08,
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-[#FFE2DD] border-l-4 border-[#F26622] rounded-2xl p-6 md:p-8 flex gap-x-5 md:gap-x-6 items-start h-full"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                >
                  {/* Number */}
                  <span className="font-albert-sans text-[#F26622] text-4xl font-bold leading-none shrink-0">
                    {num}
                  </span>

                  {/* Text Content */}
                  <div className="flex flex-col gap-y-2">
                    <h3 className="font-albert-sans text-[#1C1B2E] font-bold text-lg md:text-xl leading-snug">
                      {title}
                    </h3>
                    <p className="font-secondary text-[#5a5a6a] text-sm md:text-[14.5px] leading-relaxed max-w-[520px]">
                      {body}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Workflow strip */}
          <motion.div
            className="flex flex-col items-center gap-y-5 pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-center">
              {["Research", "Design", "Prototype", "Test", "Ship"].map(
                (step, i, arr) => (
                  <span key={step} className="flex items-center gap-2 md:gap-4">
                    <span className="font-secondary italic text-white text-xl md:text-2xl font-light tracking-wide">
                      {step}
                    </span>
                    {i < arr.length - 1 && (
                      <span className="text-[#F26622] text-lg md:text-xl font-bold">
                        →
                      </span>
                    )}
                  </span>
                ),
              )}
            </div>
            <p className="font-secondary text-white/45 text-xs md:text-sm text-center max-w-full leading-relaxed">
              AI is not a shortcut here. It&rsquo;s your{" "}
              <span className="text-[#F26622] font-semibold">
                creative partner at every stage
              </span>{" "}
              — from the first brief to the final prototype.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Real Work */}
      <section className="bg-[#F9F5F4] py-16 md:py-24 xl:py-32">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 xl:px-0 flex flex-col gap-y-8 md:gap-y-12">
          {/* Label */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-6 h-[2px] bg-[#F26622] shrink-0" />
            <span className="font-secondary text-[11px] tracking-[0.2em] text-[#F26622] uppercase">
              Real Work
            </span>
          </motion.div>

          {/* Heading + subtitle */}
          <motion.div
            className="flex flex-col gap-y-4"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            viewport={{ once: true }}
          >
            <h2 className="font-primary text-[#1a1a1a] font-bold text-3xl md:text-3xl lg:text-4xl leading-[1.15]">
              <GsapSplitText type="chars" stagger={0.022} duration={0.55}>
                {"This is not a course of "}
                <span className="text-[#F26622]">exercises.</span>
              </GsapSplitText>
            </h2>
            <p className="font-secondary text-[#15110E] text-sm md:text-[18px] leading-relaxed max-w-full">
              By the end of the programme, you will have designed and shipped
              real digital products — not placeholder mockups:
            </p>
          </motion.div>

          {/* 3×2 deliverables grid */}
          {(() => {
            const items = [
              {
                num: "01",
                title: "A fully researched UX brief for a digital product",
                body: "User interviews, personas, problem maps — built with traditional methods and Claude for synthesis and insight extraction.",
              },
              {
                num: "02",
                title: "A logo + brand identity system",
                body: "Designed in Illustrator — with Midjourney and Adobe Firefly for concept generation, refined by your own visual reasoning.",
              },
              {
                num: "03",
                title: "A 4-page responsive website",
                body: "Built in WordPress — applying layout, typography, and grid principles to a live brief, with AI-assisted content generation.",
              },
              {
                num: "04",
                title: "A hi-fi Figma prototype of an app",
                body: "Your capstone product — from wireframes through Figma AI-assisted layouts to a working, tested, interactive app prototype.",
              },
              {
                num: "05",
                title: "A usability-tested digital product",
                body: "Three rounds of real user testing on your app — iterated based on what you actually observed, not what you assumed.",
              },
              {
                num: "06",
                title: "A design portfolio — ready to show",
                body: "Documented app case studies, presented professionally, ready for employers — with real product work, not lorem ipsum mockups.",
              },
            ];
            const rows = [items.slice(0, 3), items.slice(3)];
            return (
              <motion.div
                className="flex flex-col divide-y divide-[#F26622]"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
                viewport={{ once: true }}
              >
                {rows.map((row, ri) => (
                  <div
                    key={ri}
                    className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#F26622]"
                  >
                    {row.map(({ num, title, body }, ci) => (
                      <motion.div
                        key={num}
                        className="flex flex-col gap-y-3 py-8 md:px-8 first:md:pl-0 last:md:pr-0"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.55,
                          ease: "easeOut",
                          delay: 0.08 * (ri * 3 + ci),
                        }}
                        viewport={{ once: true }}
                      >
                        <span className="font-albert-sans text-[#F26622] text-4xl font-bold leading-none">
                          {num}
                        </span>
                        <h3 className="font-albert-sans text-[#1a1a1a] font-bold text-base md:text-[20px] leading-snug">
                          {title}
                        </h3>
                        <p className="font-secondary text-[#666] text-sm md:text-[16px] leading-relaxed">
                          {body}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </motion.div>
            );
          })()}
        </div>
      </section>

      {/* The Honest Answer */}
      <section className="honest-answer-bg py-16 md:py-24 xl:py-32">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 xl:px-0 flex flex-col gap-y-10 md:gap-y-14">
          {/* Label */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-6 h-[2px] bg-[#F26622] shrink-0" />
            <span className="font-secondary text-[12px] tracking-[0.2em] text-[#F26622] uppercase">
              The Honest Answer
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="font-primary font-bold text-3xl md:text-3xl lg:text-4xl leading-[1.15]"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            viewport={{ once: true }}
          >
            <span className="text-white">Will AI just do the </span>
            <HighlightHover className="text-[#F26622]">
              designing for you?
            </HighlightHover>
          </motion.h2>

          {/* Phases */}
          <div className="flex flex-col">
            {[
              {
                phase: "Phase 01 · Research",
                title: "AI as your research partner",
                body: "Use Claude to synthesise user interview notes, spot patterns, and draft personas. Use ChatGPT for competitive landscape research. You ask the questions — AI helps you see the answers faster.",
              },
              {
                phase: "Phase 02 · Ideation",
                title: "AI as your idea expander",
                body: "Use Midjourney and Adobe Firefly to explore visual directions for your app. Use Claude to stress-test your UX decisions and challenge your assumptions before you commit to them.",
              },
              {
                phase: "Phase 03 · Prototyping",
                title: "AI as your build accelerator",
                body: "Figma AI for layout suggestions and auto-generated components. Lovable and v0 to spin up interactive app prototypes fast. Napkin.ai to turn ideas into visual flows — all inside your real workflow.",
              },
              {
                phase: "Phase 04 · Testing & Iteration",
                title: "AI as your critical reviewer",
                body: "Use Claude to review your app flows for UX gaps and inconsistencies. Use Maze and real user feedback to validate. You spot the problems. You make the calls. AI executes your vision — not the other way around.",
              },
            ].map(({ phase, title, body }, i, arr) => (
              <motion.div
                key={phase}
                className={`flex flex-col gap-y-3 py-8${
                  i < arr.length - 1 ? " border-b honest-divider" : ""
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.06 * i }}
                viewport={{ once: true }}
              >
                <span className="font-secondary text-[12px] tracking-[0.18em] text-[#F26622] uppercase">
                  {phase}
                </span>
                <h3 className="font-albert-sans text-white font-bold text-lg md:text-xl leading-snug">
                  {title}
                </h3>
                <p className="font-secondary text-white/55 text-sm md:text-[16px] leading-relaxed max-w-[900px]">
                  {body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Callout card */}
          <motion.div
            className="bg-[#F26622] rounded-2xl px-8 py-10 md:py-12 flex flex-col items-center gap-y-2 text-center"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
          >
            <p className="font-primary italic text-white/85 text-base md:text-lg font-light">
              You don&rsquo;t become dependent on AI.
            </p>
            <p className="font-primary italic text-white font-semibold text-lg md:text-xl leading-snug max-w-[620px]">
              You become the product designer who uses it better than everyone
              else in the room.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Is This For You */}
      <section className="bg-[#F9F5F4] py-16 md:py-24 xl:py-32">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 xl:px-0 flex flex-col gap-y-8 md:gap-y-12">
          {/* Label */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-6 h-[2px] bg-[#F26622] shrink-0" />
            <span className="font-secondary text-[12px] tracking-[0.2em] text-[#999] uppercase">
              Is This For You?
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="font-primary text-[#1a1a1a] font-bold text-3xl md:text-3xl lg:text-4xl  leading-[1.15]"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            viewport={{ once: true }}
          >
            Made for the{" "}
            <HighlightHover className="text-[#F26622]">curious.</HighlightHover>{" "}
            Not the credentialled.
          </motion.h2>

          {/* Two cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {/* For you */}
            <motion.div
              className="for-you-card bg-[#F9F5F4] rounded-2xl p-7 md:p-8 flex flex-col gap-y-5"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={30}
                  fill="#0EA900"
                  stroke="#F9F5F4"
                  strokeWidth={2.5}
                />
                <span className="font-secondary text-xl md:text-2xl tracking-[0.18em] text-[#1a1a1a] font-bold uppercase">
                  This is for you if:
                </span>
              </div>
              <ul className="flex flex-col gap-y-3">
                {[
                  "You're curious about design but don't know where to start",
                  "You've tried online courses and felt something was missing",
                  "You want to understand where AI fits inside real creative work",
                  "You prefer learning by making, not watching",
                  "You want feedback, critique, and a real studio environment",
                  "You're a student, career switcher, or creative professional",
                  "You want a portfolio — with real work in it",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#1a1a1a] shrink-0" />
                    <span className="font-secondary text-[#3a3a3a] text-sm md:text-[14.5px] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Not for you */}
            <motion.div
              className="for-you-card bg-[#F9F5F4] rounded-2xl p-7 md:p-8 flex flex-col gap-y-5"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <XCircle
                  size={30}
                  fill="#EA3434"
                  stroke="#F9F5F4"
                  strokeWidth={2.5}
                />
                <span className="font-secondary text-xl md:text-2xl tracking-[0.18em] text-[#1a1a1a] font-bold uppercase">
                  This is not for you if:
                </span>
              </div>
              <ul className="flex flex-col gap-y-3">
                {[
                  "You only want theory and slideshows",
                  "You expect AI to do the work for you",
                  "You won't engage in critique or push yourself",
                  "You want a guaranteed job placement promise (we don't make those)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#1a1a1a] shrink-0" />
                    <span className="font-secondary text-[#3a3a3a] text-sm md:text-[14.5px] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Footer note */}
          <motion.p
            className="font-albert-sans italic text-[#69625D] text-base md:text-xl text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            No coding required &middot; No prior design experience required
          </motion.p>
        </div>
      </section>

      {/* Programme Details */}
      <section className="honest-answer-bg py-16 md:py-24 xl:py-32">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 xl:px-0 flex flex-col gap-y-10 md:gap-y-14">
          {/* Label */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-6 h-[2px] bg-[#F26622] shrink-0" />
            <span className="font-secondary text-[12px] tracking-[0.2em] text-[#F26622] uppercase">
              Programme Details
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="font-primary font-bold text-3xl md:text-3xl lg:text-4xl leading-[1.15]"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            viewport={{ once: true }}
          >
            <span className="text-white">What the programme </span>
            <span className="text-[#F26622]">looks like</span>
          </motion.h2>

          {/* Details grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            {[
              { label: "Duration", value: "12 weeks · Full-time" },
              {
                label: "Format",
                value: "In-person · Project-based · Studio environment",
              },
              {
                label: "Schedule",
                value: "Monday – Friday, 9:00 AM – 5:00 PM",
              },
              {
                label: "Location",
                value: "Saracon Campus, Yuvabe, Auroville, Tamil Nadu",
              },
              { label: "Starts", value: "June 8, 2026" },
              {
                label: "Applications close",
                value: "May 30, 2026 · Filling fast",
              },
              { label: "Programme fee", value: "₹0 tuition" },
              {
                label: "Refundable deposit",
                value: "₹3,500 · Returned on completion",
              },
              {
                label: "Output",
                value:
                  "Portfolio of real digital products + AI design workflow experience",
              },
              {
                label: "Certification",
                value: "Printed · Recognised by employers and universities",
              },
              {
                label: "Top performers",
                value: "3-month paid internship at Yuvabe Studios",
              },
              {
                label: "Alumni",
                value: "Access to Yuvabe Alumni Network + future programmes",
              },
            ].map(({ label, value }, i) => (
              <motion.div
                key={label}
                className="flex items-start gap-3 cursor-default group"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.04 * i,
                  },
                }}
                whileHover={{
                  x: 6,
                  transition: { type: "spring", stiffness: 340, damping: 24 },
                }}
                viewport={{ once: true }}
              >
                <div className="w-[3px] bg-[#F26622] rounded-full shrink-0 self-stretch transition-opacity duration-200 group-hover:opacity-100 opacity-60" />
                <p className="font-secondary text-white/75 text-base md:text-[18px] leading-relaxed">
                  <span className="font-semibold text-white">{label}</span>
                  {" : "}
                  {value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Campus card */}
          <motion.div
            className="campus-card rounded-2xl overflow-hidden bg-white"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/uiux/campus.png"
              alt="Saracon Campus, Auroville"
              width={1240}
              height={560}
              className="w-full h-[220px] md:h-[340px] lg:h-[420px] object-cover"
            />

            {/* Stats 2×2 */}
            <div className="flex flex-col">
              {/* Row 1 */}
              <div className="flex flex-col md:flex-row border-b border-[#E0D9D6]">
                <div className="flex-1 flex items-start gap-3 py-5 px-6 border-b border-[#E0D9D6] md:border-b-0">
                  <div className="w-[3px] bg-[#F26622] rounded-full shrink-0 self-stretch" />
                  <div className="flex flex-col gap-y-0.5">
                    <span className="font-secondary text-[12px] text-[#999]">
                      Programme fee
                    </span>
                    <p className="font-albert-sans text-[#F26622] font-bold text-base md:text-lg">
                      ₹0 tuition
                    </p>
                  </div>
                </div>
                <div className="w-px bg-[#E0D9D6] shrink-0 hidden md:block" />
                <div className="flex-1 flex items-start gap-3 py-5 px-6">
                  <div className="w-[3px] bg-[#F26622] rounded-full shrink-0 self-stretch" />
                  <div className="flex flex-col gap-y-0.5">
                    <span className="font-secondary text-[12px] text-[#999]">
                      Refundable deposit
                    </span>
                    <p className="font-albert-sans text-[#1a1a1a] font-semibold text-base md:text-lg">
                      ₹3,500{" "}
                      <span className="font-secondary font-normal text-sm text-[#555]">
                        returned on completion
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Row 2 */}
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 flex items-start gap-3 py-5 px-6 border-b border-[#E0D9D6] md:border-b-0">
                  <div className="w-[3px] bg-[#F26622] rounded-full shrink-0 self-stretch" />
                  <div className="flex flex-col gap-y-0.5">
                    <span className="font-secondary text-[12px] text-[#999]">
                      Top 3 students receive
                    </span>
                    <p className="font-albert-sans text-[#1a1a1a] font-semibold text-base md:text-lg">
                      3-month{" "}
                      <HighlightHover className="text-[#F26622]">
                        paid internship
                      </HighlightHover>
                    </p>
                  </div>
                </div>
                <div className="w-px bg-[#E0D9D6] shrink-0 hidden md:block" />
                <div className="flex-1 flex items-start gap-3 py-5 px-6">
                  <div className="w-[3px] bg-[#F26622] rounded-full shrink-0 self-stretch" />
                  <div className="flex flex-col gap-y-0.5">
                    <span className="font-secondary text-[12px] text-[#999]">
                      Location
                    </span>
                    <p className="font-albert-sans text-[#1a1a1a] font-semibold text-base md:text-lg">
                      Auroville, Tamil Nadu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Week by Week */}
      <section className="bg-[#F9F5F4] py-16 md:py-24 xl:py-32">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 xl:px-0 flex flex-col gap-y-10 md:gap-y-14">
          {/* Label */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-6 h-[2px] bg-[#F26622] shrink-0" />
            <span className="font-secondary text-[12px] tracking-[0.2em] text-[#999] uppercase">
              Week by Week
            </span>
          </motion.div>

          {/* Heading + subtitle */}
          <motion.div
            className="flex flex-col gap-y-4 max-w-[680px]"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            viewport={{ once: true }}
          >
            <h2 className="font-primary text-[#1a1a1a] font-bold text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3rem] leading-[1.15]">
              <GsapSplitText type="words">
                12 weeks. One project.{" "}
                <span className="text-[#F26622]">Real depth.</span>
              </GsapSplitText>
            </h2>
            <p className="font-secondary text-[#666] text-sm md:text-[15px] leading-relaxed">
              Your capstone project runs as a through-line across the entire
              programme. Watch it evolve from a blank brief to a polished,
              tested product.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="flex flex-col max-w-[780px]">
            {[
              {
                week: "Week 1",
                title: "Start designing a digital product immediately",
                body: "UX principles, design thinking, colour, typography, layout. You get a live product brief on Day 1 — and start sketching that day.",
              },
              {
                week: "Week 3",
                title: "Research your user — with Claude and ChatGPT",
                body: "Conduct real interviews. Use Claude to synthesise notes and surface patterns. Build personas grounded in what real users actually told you.",
              },
              {
                week: "Week 6",
                title: "Build a brand identity and a live website",
                body: "Logo design in Illustrator with Midjourney for concept exploration. A 4-page responsive website in WordPress — real, live, on the internet.",
              },
              {
                week: "Week 8",
                title: "Prototype your app in Figma",
                body: "Sketches → lo-fi → hi-fi in Figma, with Figma AI for layout acceleration. Build a working, clickable prototype of your digital product.",
              },
              {
                week: "Week 10",
                title: "Go deep on AI — Lovable, v0, Napkin.ai, Claude",
                body: "Use AI to generate interactive prototypes, critique your UX flows, and accelerate every stage of the product design process. Not as a gimmick — as a real workflow.",
              },
              {
                week: "Week 12",
                title: "Ship it. Present it. Own it.",
                body: "Portfolio case study, design document, Demo Day presentation. You walk out with a tested digital product and the story of how you built it.",
              },
            ].map(({ week, title, body }, i, arr) => (
              <motion.div
                key={week}
                className="flex gap-5 md:gap-7"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: 0.05 * i,
                }}
                viewport={{ once: true, margin: "-40px" }}
              >
                {/* Left: circle + connecting line */}
                <div className="flex flex-col items-center shrink-0 w-3.5">
                  <motion.div
                    className="w-3.5 h-3.5 rounded-full bg-[#F26622] shrink-0 mt-[5px] z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 18,
                      delay: 0.08 * i,
                    }}
                    viewport={{ once: true }}
                  />
                  {i < arr.length - 1 && (
                    <motion.div
                      className="timeline-line origin-top w-[2px] flex-1 mt-2 min-h-[48px]"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 0.12 + 0.05 * i,
                      }}
                      viewport={{ once: true }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="pb-10 last:pb-0 flex flex-col gap-y-2">
                  <span className="font-secondary text-[11px] tracking-[0.18em] text-[#F26622] uppercase font-semibold">
                    {week}
                  </span>
                  <h3 className="font-albert-sans text-[#1a1a1a] font-bold text-lg md:text-xl leading-snug">
                    {title}
                  </h3>
                  <p className="font-secondary text-[#666] text-sm md:text-[14.5px] leading-relaxed">
                    {body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who You'll Learn From */}
      <section className="honest-answer-bg overflow-hidden">
        {/* Header */}
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 xl:px-0 pt-16 md:pt-24 xl:pt-32 pb-14 md:pb-20 flex flex-col gap-y-6 max-w-[640px]">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-6 h-[2px] bg-[#F26622] shrink-0" />
            <span className="font-secondary text-[12px] tracking-[0.2em] text-[#F26622] uppercase">
              Who You&rsquo;ll Learn From
            </span>
          </motion.div>
          <h2 className="font-albert-sans font-bold text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3rem] leading-[1.15]">
            <GsapSplitText type="words" stagger={0.1} duration={0.65}>
              <span className="text-white">Learn from practitioners, </span>
              <span className="text-[#F26622]">not lecturers.</span>
            </GsapSplitText>
          </h2>
          <motion.p
            className="font-secondary text-white/60 text-sm md:text-[15px] leading-relaxed"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.14 }}
            viewport={{ once: true }}
          >
            Every facilitator on this programme has designed and shipped real
            digital products. No theorists. No generalists. Just people who have
            done the work — and now want to help you do it too.
          </motion.p>
        </div>

        {/* Facilitator bands — each full-width */}
        {[
          {
            name: "Priya Kekre",
            role: "Mentor & Facilitator",
            bio: "Product & UI/UX designer with 12+ years shaping digital products — from early-stage startups to scaled platforms. Specialises in end-to-end product design, design systems, and shipping work that balances user needs with business goals. Brings real client briefs and studio rigour into every session.",
            image: "/images/uiux/priya.png",
            decoration: "/images/uiux/box.svg",
            flip: false,
            svgSide: "right" as const,
            svgSize: "md" as const,
          },
          {
            name: "Sagar",
            role: "Facilitator",
            bio: "UI/UX Designer and visual storyteller with 6+ years working across brand identity, app design, and design systems. Brings a sharp visual sensibility to product thinking — and teaches the reasoning behind design decisions, not just the tools.",
            image: "/images/uiux/sagar.png",
            decoration: "/images/uiux/box-2.svg",
            flip: true,
            svgSide: "left" as const,
            svgSize: "md" as const,
          },
          {
            name: "Prachi Gupta",
            role: "Facilitator",
            bio: "UX researcher and interaction designer focused on human-centred product design. Works at the intersection of user behaviour and interface logic — leading user research, usability testing, and the feedback-driven iteration cycles throughout the programme.",
            image: "/images/uiux/prachi.png",
            decoration: "/images/uiux/box-3.svg",
            flip: false,
            svgSide: "right" as const,
            svgSize: "lg" as const,
          },
        ].map(
          ({ name, role, bio, image, decoration, flip, svgSide, svgSize }) => (
            <div key={name} className="w-full border-t honest-divider">
              <div className="max-w-[1240px] mx-auto px-5 md:px-8 xl:px-0 grid grid-cols-1 md:grid-cols-2 items-end">
                {/* Text side */}
                <motion.div
                  className={`flex flex-col gap-y-5 py-12 md:py-16${
                    flip ? " order-1 md:order-2" : ""
                  }`}
                  initial={{ opacity: 0, x: flip ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div>
                    <h3 className="font-albert-sans text-[#F26622] font-bold text-2xl md:text-[1.85rem] leading-tight">
                      {name}
                    </h3>
                    <p className="font-secondary text-white/40 text-[11px] tracking-[0.18em] uppercase mt-1">
                      {role}
                    </p>
                  </div>
                  <p className="font-secondary text-white/65 text-sm md:text-[15px] leading-relaxed max-w-[480px]">
                    {bio}
                  </p>
                </motion.div>

                {/* Image side — fixed height, photos absolutely grounded to bottom */}
                <motion.div
                  className={`relative h-115 md:h-140${
                    flip ? " order-2 md:order-1" : ""
                  }`}
                  initial={{ opacity: 0, x: flip ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* SVG decoration — GSAP parallax rotate */}
                  <GsapParallaxSvg
                    src={decoration}
                    className={`absolute bottom-0 z-0 ${
                      svgSide === "left" ? "left-0" : "right-0"
                    } ${svgSize === "lg" ? "w-56 md:w-100" : "w-44 md:w-60"}`}
                    imageClassName="w-full h-auto"
                    width={300}
                    height={300}
                    startRotation={svgSide === "left" ? 18 : -18}
                    scrollRotation={svgSide === "left" ? -22 : 22}
                  />
                  {/* Facilitator photo — grounded to bottom */}
                  <Image
                    src={image}
                    alt={name}
                    width={400}
                    height={540}
                    className={`absolute bottom-0 z-10 max-h-115 md:max-h-140 w-auto object-contain object-bottom ${
                      flip ? "left-0" : "right-0"
                    }`}
                  />
                </motion.div>
              </div>
            </div>
          ),
        )}
      </section>

      {/* How to Join */}
      <section className="bg-[#F8F3EB] py-16 md:py-24 xl:py-32">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 xl:px-0 flex flex-col items-center gap-y-10 md:gap-y-14">
          {/* Label */}
          <motion.div
            className="flex items-center gap-x-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="block h-px w-10 bg-[#F26622]" />
            <span className="font-secondary text-[#F26622] text-xs tracking-[0.22em] uppercase font-semibold">
              How to Join
            </span>
            <span className="block h-px w-10 bg-[#F26622]" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="font-primary font-bold text-3xl md:text-4xl  text-center text-[#1C1B2E] leading-tight -mt-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            viewport={{ once: true }}
          >
            Three steps.{" "}
            <HighlightHover className="text-[#F26622]">
              No portfolio required.
            </HighlightHover>
          </motion.h2>

          {/* Cards row */}
          <div className="flex flex-col md:flex-row items-stretch w-full gap-6 md:gap-0">
            {[
              {
                title: "Apply online",
                desc: "No portfolio needed. Tell us why you want to learn design — and what you’d build if you could.",
              },
              {
                title: "Interview + aptitude check",
                desc: "A short conversation. We’re looking for curiosity and commitment — not experience.",
              },
              {
                title: "Pay the deposit.\nSecure your seat.",
                desc: "₹3,500 refundable deposit to confirm your place. Seats are limited and filling fast.",
              },
            ].flatMap(({ title, desc }, i) => {
              const items = [];
              if (i > 0) {
                items.push(
                  <div
                    key={`arrow-${i}`}
                    className="hidden md:flex items-center justify-center px-3 shrink-0 text-[#F26622] text-2xl"
                  >
                    →
                  </div>,
                );
              }
              items.push(
                <motion.div
                  key={title}
                  className="flex-1 bg-white rounded-2xl shadow-sm border border-[rgba(242,102,34,0.1)] flex flex-col items-center text-center px-6 py-9 gap-y-3"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: i * 0.12,
                  }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-primary font-semibold text-[#1C1B2E] text-lg md:text-xl leading-snug whitespace-pre-line">
                    {title}
                  </h3>
                  <p className="font-secondary text-[#1C1B2E]/55 text-sm md:text-[15px] leading-relaxed">
                    {desc}
                  </p>
                </motion.div>,
              );
              return items;
            })}
          </div>

          {/* CTA */}
          <motion.a
            href="/bridge/ui-ux/registrationform"
            className="bg-[#F26622] text-white font-primary font-semibold text-base px-9 py-4 rounded-full hover:bg-[#d9551a] transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Apply Now →
          </motion.a>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection />

      {/* Contact Us */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#14151F] via-[#1b1240] to-[#1E1244] py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-6 flex flex-col items-center text-center gap-y-8">
          {/* Small Label */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#F26622]" />
            <span className="text-xs tracking-[0.3em] text-[#F8F3EB]/50 uppercase">
              Ready?
            </span>
            <span className="w-8 h-[2px] bg-[#F26622]" />
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-primary font-bold text-white leading-[1.5] text-3xl md:text-5xl lg:text-[64px]"
          >
            The next generation of apps will be designed by{" "}
            <span className="text-[#F26622]">people like you.</span>
            <br />
            Start here.
          </motion.h2>

          {/* Subtext */}
          <p className="text-white/70 text-sm md:text-xl">
            Applications close May 30, 2026 · Limited seats · Cohort forming now
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/bridge/ui-ux/registrationform"
              target="_blank"
              className="bg-[#F26622] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#d9551c] transition text-center"
            >
              Apply Now →
            </Link>

            <a
              href="mailto:bridge@yuvabe.com"
              className="border border-white/30 text-white px-7 py-3 rounded-full font-semibold hover:bg-white/10 transition text-center"
            >
              Email us
            </a>
          </div>

          {/* Contact Line */}
          <p className="text-white/60 text-lg md:text-xl mt-4">
            Questions? Write to us at{" "}
            <a
              href="mailto:bridge@yuvabe.com"
              className="text-[#F26622] hover:underline"
            >
              bridge@yuvabe.com
            </a>{" "}
            or call{" "}
            <a
              href="tel:+919677604467"
              className="text-[#F26622] hover:underline"
            >
              +91 9677604467
            </a>{" "}
            (9am – 5pm)
          </p>
        </div>
      </section>
    </>
  );
}
