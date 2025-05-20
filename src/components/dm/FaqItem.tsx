"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isLast?: boolean;
}

export default function FaqItem({ question, answer, isLast = false }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#E8AC35] rounded-lg overflow-hidden bg-[#FFCA2D0F]">
      {/* Question */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-4 flex justify-between items-center bg-[#FFCA2D33] hover:bg-[#FFCA2D55] transition"
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Plus className="text-white" />
        </motion.span>
      </button>

      {/* Animated Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className={`px-6 py-4 text-[#FFCA2D] text-left ${
                isLast ? "whitespace-pre-line" : ""
              }`}
            >
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
