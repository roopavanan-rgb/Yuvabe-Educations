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
    <div className={`border-b ${isLast ? "border-transparent" : "border-[#1C1B2E]/10"}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-5 flex justify-between items-center gap-x-6 cursor-pointer group"
        suppressHydrationWarning
      >
        <span className="font-secondary text-base md:text-[17px] text-[#1C1B2E] leading-snug">
          {question}
        </span>
        <motion.span
          className="shrink-0 w-8 h-8 rounded-full bg-[rgba(242,102,34,0.12)] flex items-center justify-center"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
        >
          <Plus className="text-[#F26622] w-4 h-4 stroke-2" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 font-secondary text-[#1C1B2E]/60 text-sm md:text-[15px] leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: answer }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
