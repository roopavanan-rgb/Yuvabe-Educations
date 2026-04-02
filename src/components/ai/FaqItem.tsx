"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isLast?: boolean;
}

export default function FaqItem({
  question,
  answer,
  isLast = false,
}: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="rounded-2xl overflow-hidden shadow-sm"
    >
      {/* Question */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left px-6 py-5 flex justify-between items-center transition-colors duration-300
        ${isOpen ? "bg-[#002357] text-white" : "bg-[#F5F7FB] text-[#002357]"}`}
      >
        <span className="text-lg font-semibold">{question}</span>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0, scale: isOpen ? 1.1 : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Plus />
        </motion.span>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden bg-white"
          >
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={` pb-4 text-[#002357] ${
                isLast ? "whitespace-pre-line" : ""
              }`}
            >
              {answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
