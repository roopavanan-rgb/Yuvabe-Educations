"use client";

import { motion, AnimatePresence } from "framer-motion";
import FaqItem from "./FaqItem";

const faqs = [
  {
    question: "Who is eligible to apply?",
    answer:
      "Anyone passionate about UI/UX design! No prior experience is required, but basic familiarity with online platforms is helpful.",
  },
  {
    question: "Is this program in-person or online?",
    answer:
      "This is an in-person classroom program designed for immersive learning and hands-on experience.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes! Upon successful completion, you will receive a Yuvabe Education’s Digital Marketing Certification.",
  },
  {
    question: "What is the program fee?",
    answer:
      "The fee structure is available in the brochure. You can download it from the link above.",
  },
  {
    question: "Is there placement assistance?",
    answer:
      "Yes! We provide career guidance, resume reviews, and access to job opportunities through our network.",
  },
  {
    question: "How do I apply?",
    answer:
      "Click the ‘Apply Now’ button, fill in the form, and our team will reach out for the next steps.",
  },
  {
    question: "Is prior experience required?",
    answer: "No.",
  },
  {
    question: "What is the EVOLVE program?",
    answer:
      "The Evolve Program is designed to be a transformative journey, empowering individuals to unlock their true potential and achieve personal growth. At its core, the program provides participants with tools and experiences that go beyond academic or professional skills, focusing instead on holistic development. <br /><br /> Through Evolve, you’ll discover how to communicate with clarity and present your ideas with confidence, enhancing your ability to make an impact in any setting. <br /><br /> In essence, the Evolve Program isn’t just about gaining skills—it’s about reshaping how you approach challenges, connect with others, and grow as an individual. It’s a journey of self-discovery and empowerment, designed to help you step into the best version of yourself.",
  },
  {
    question: "Is this course suitable for beginners?",
    answer:
      "Yes, the course is made for beginners and starts with basic topics, slowly moving to more advanced ones",
  },
  {
    question: "What is the time commitment required each week?",
    answer:
      "Participants are expected to commit an average of 35 - 40 hours per week, including lectures, assignments, and activities. Since the course is planned for in-person sessions, it will take a maximum of 6-8 hours per day from Monday to Friday.",
  },
  {
    question: "Will there be live sessions, or is the course self-paced?",
    answer: "In-person classroom sessions.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-transparent text-center z-10">
      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto space-y-4">
        <AnimatePresence>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
