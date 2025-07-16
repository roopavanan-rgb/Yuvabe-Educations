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
    <div className="border border-[#F3802F] rounded-lg overflow-hidden">
      {/* Question */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-4 flex justify-between items-center 
                   bg-[#ffffff66] hover:bg-[#f3802f8c] transition-all duration-[350ms] ease-in cursor-pointer"
      >
        <span className="text-[16px] md:text-lg font-bold text-black font-albert-sans">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0, ease: "easeInOut" }}
        >
          <Plus className="text-black w-3.5 h-7 stroke-[3.5px]" />
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
            className={`px-6 py-4 bg-[#ffffff66] font-secondary text-black text-left ${
              isLast ? "whitespace-pre-line" : ""
            }`}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: answer,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
