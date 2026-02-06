"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    id: "beginner",
    question: "Is this workshop beginner-friendly?",
    answer:
      "This is an advanced workshop. Basic familiarity with UX or design thinking is recommended.",
  },
  {
    id: "laptop",
    question: "Do I need to bring a laptop?",
    answer: "Yes, participants should bring their own laptop.",
  },
  {
    id: "certificate",
    question: "Will I get a certificate?",
    answer: "Yes, upon successful participation and final pitch.",
  },
  {
    id: "project",
    question: "Is there a final project?",
    answer:
      "Yes—you’ll work on a real design challenge and pitch your solution.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-3xl">
      {/* Header */}
      <div className="mb-14 text-center">
        <p className="mb-3 text-sm font-semibold tracking-widest text-[#6A4EDA]">
          QUESTIONS
        </p>

        <h2 className="text-3xl font-semibold text-black md:text-5xl font-primary">
          Frequently Asked{" "}
          <span className="bg-gradient-to-l from-[#F99E1F] to-[#6A4EDA] bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((item) => {
          const isOpen = active === item.id;

          return (
            <div
              key={item.id}
              className="rounded-xl border border-[rgba(229,227,220,0.2)] bg-[#F2EFE9]"
            >
              {/* Question */}
              <button
                onClick={() => setActive(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
              >
                <span className="font-medium text-gray-900">
                  {item.question}
                </span>

                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-5 w-5 text-gray-600" />
                </motion.span>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-700">{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
