"use client";

import { motion, AnimatePresence } from "framer-motion";
import FaqItem from "./FaqItem";
import { DM_DEPOSIT } from "./programDetails";

const faqs = [
  {
    question: "Is the course really free?",
    answer: `Yes. There is no course fee. You pay a refundable deposit of ${DM_DEPOSIT} when you confirm your seat, and you get it back when you complete the course.`,
  },
  {
    question: "Who is eligible to apply?",
    answer: "Students, recent graduates, aspiring marketers, entrepreneurs and working professionals who want to build digital marketing skills. No prior marketing experience is required.",
  },
  {
    question: "Do I need to know how to use AI tools?",
    answer: "No. You will learn to use AI tools for research, writing, design, video, ads, automation and reporting as part of every module.",
  },
  {
    question: "Is this program in-person or online?",
    answer: "It is in-person, with classroom and lab sessions at Yuvabe, Saracon Campus, Auroville.",
  },
  {
    question: "Can I work or study alongside the course?",
    answer: "Yes. Sessions run half days, Monday to Friday from 9:30 AM to 12:45 PM, so you can study, work or run your business alongside.",
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes. When you complete the course you receive the Yuvabe Education Digital Marketing Certification.",
  },
  {
    question: "Is there placement assistance?",
    answer: "We help with your resume, portfolio and interviews, and share job opportunities through our network. You also leave with a portfolio of real work to show employers.",
  },
  {
    question: "How do I apply?",
    answer: "Fill in the online application form. Shortlisted candidates are invited for an interview and aptitude test, and you secure your seat by paying the refundable deposit.\nEmail: bridge@yuvabe.com\nMobile: 9677604467 (9am - 5pm)",
  },
];

export default function FaqSection() {
  return (
    <section className=" bg-[#140F20] py-16 px-6 bg-background text-center overflow-hidden">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-3xl md:text-4xl font-raleway font-semibold text-[#FFCA2D]"
      >
        FAQs
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
        className="text-[#FFFFFF] font-sans font-semibold mt-4"
      >
        Click each question to reveal the answer
      </motion.p>

      {/* FAQ Items */}
      <div className="mt-8 max-w-4xl mx-auto space-y-4">
        <AnimatePresence>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1 }}
            >
               <FaqItem question={faq.question} answer={faq.answer} isLast={index === faqs.length - 1} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
