"use client";

import { motion, AnimatePresence } from "framer-motion";
import FaqItem from "./FaqItem";

const faqs = [
  {
    question: "Do I need coding experience?",
    answer:
      "Some basic exposure to code is helpful, but this is not a requirement. We profile every applicant in advance and tailor the pacing of the cohort accordingly. Curiosity and willingness to build matter more than prior experience.",
  },
  {
    question: "What if I get stuck?",
    answer:
      "Getting stuck is part of learning here. You'll have structured support from instructors, daily feedback loops, and AI as a co-problem-solver. You're never figuring it out alone.",
  },
  {
    question: "Will I receive a certificate?",
    answer: "Yes! A certification will be provided upon successful completion.",
  },
  {
    question: "What happens after the program?",
    answer:
      "You leave with a portfolio of 5–6 working AI tools and the ability to keep building independently. We also provide career guidance for students looking to move into product, dev, or AI-adjacent roles.",
  },
  {
    question: "Is this a live, in-person program?",
    answer:
      "Yes. The cohort format is fully in-person, based at our campus in Auroville. This collaborative, hands-on environment is core to how the program works.",
  },
  {
    question: "How does this internship differ from online courses?",
    answer:
      "This internship provides hands-on experience, real projects, and mentorship.",
  },
  {
    question: "What is the program fee?",
    answer:
      "Full scholarships are available for deserving candidates. Contact us for further details.",
  },

  {
    question: "How is this different from an online course?",
    answer:
      "In every way that matters. You work on real projects, get daily feedback, collaborate with a cohort, and graduate with things you actually built — not a badge for watching videos.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-16 px-6 bg-[#F2F2F2] text-center">
      <div className="absolute -right-60 bottom-200  blur-3xl border-none w-96 h-96 border rounded-full  bg-[#3991BD] opacity-30"></div>
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-3xl md:text-4xl font-raleway font-bold text-[#002357]"
      >
        Interactive FAQs
      </motion.h2>

      {/* FAQ Items */}
      <div className="mt-8 max-w-4xl mx-auto space-y-4">
        <AnimatePresence>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
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
    </section>
  );
}
