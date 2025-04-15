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
    <div className="border border-[#E8AC35] rounded-lg overflow-hidden">
      {/* Question */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-4 flex justify-between items-center 
                   bg-[#FFCA2D66] hover:bg-primary/30 transition"
      >
        <span className="text-lg font-semibold text-[#FFFFFF]">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
        >
          <Plus className="text-[#FFFFFF]" />
        </motion.span>
      </button>

      {/* Answer - Animated Slide Down */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0, ease: "easeInOut" }}
            className={`px-6 py-4 text-[#FFCA2D] text-left ${
              isLast ? "whitespace-pre-line" : ""
            }`}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
