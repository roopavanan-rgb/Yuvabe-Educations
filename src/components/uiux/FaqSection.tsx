"use client";

import { motion, AnimatePresence } from "framer-motion";
import FaqItem from "./FaqItem";

const faqs = [
  {
    question: "Do I need design experience to apply?",
    answer:
      "None at all. Curiosity and commitment are the only requirements. We'll teach you everything else.",
  },
  {
    question: "Do I need to know how to use AI tools already?",
    answer:
      "No. You'll learn how to use AI tools inside a real design process — not in isolation. That's the whole point.",
  },
  {
    question: "Is there a tuition fee?",
    answer:
      "There is no tuition fee. You pay a ₹3,500 refundable deposit at enrolment — returned to you when you complete the programme.",
  },
  {
    question: "Why in-person? Why not online?",
    answer:
      "Design is a craft you learn through feedback, not videos. The studio environment, peer critique sessions, and facilitator guidance don't translate to solo online learning. This is why the programme works.",
  },
  {
    question: "What software will I use?",
    answer:
      "Design tools: Figma (with Figma AI), Adobe Illustrator, Photoshop, Canva, WordPress. AI tools for product design: Claude (Anthropic) for UX research and flow critique, ChatGPT for ideation and content, Lovable and v0 for AI-generated interactive prototypes, Napkin.ai for turning ideas into user flow diagrams, Midjourney and Adobe Firefly for visual concepts, Leonardo.ai for UI asset generation, and Gemini for multimodal research.Testing: Maze for usability testing on real prototypes. Bring your own laptop. All tools are provided or accessible at no cost.  ",
  },
  {
    question: "What happens after the programme?",
    answer:
      "Top 3 students are offered a 3-month paid internship at Yuvabe Studios. All graduates join the Yuvabe Alumni Network with access to future advanced programmes.",
  },
  {
    question: "Are there scholarships available?",
    answer:
      "There is no tuition fee — you only pay a ₹3,500 refundable deposit. If you have specific financial constraints around the deposit, reach out to us directly at bridge@yuvabe.com.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-[#F9F5F4] py-16 md:py-24 xl:py-32">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 xl:px-0 flex flex-col gap-y-10 md:gap-y-12">

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
            Common Questions
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-primary font-bold text-3xl md:text-4xl xl:text-[48px] text-[#1C1B2E] leading-tight -mt-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          viewport={{ once: true }}
        >
          Got questions?{" "}
          <span className="text-[#F26622]">We&apos;ve got answers.</span>
        </motion.h2>

        {/* FAQ Items */}
        <div className="max-w-7xl border-t border-[#1C1B2E]/10">
          <AnimatePresence>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.07 }}
              >
                <FaqItem
                  question={faq.question}
                  answer={faq.answer}
                  isLast={index === faqs.length - 1}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
