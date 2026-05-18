"use client";

import { motion, AnimatePresence } from "framer-motion";
import FaqItem from "@/components/Faqitem";

const faqs = [
  {
    question: "What is the course about?",
    answer:
      "This course helps gain hands-on knowledge in corporate sustainability, and catapult your career in this in-demand field. </br></br>Our comprehensive program covers: <ul style='list-style-type: disc; margin-left: 1rem;'><li>Sustainability fundamentals and global trends</li><li>GHG accounting, ESG frameworks, and reporting</li><li>Circular economy principles and innovative practices</li><li>Designing and executing impactful sustainability projects</li><li>Effective communication for stakeholder engagement</li></ul>",
  },
  {
    question: "Who is this course designed for? (Target Audience)",
    answer:
      "The course is suitable for <ul style='list-style-type: disc; margin-left: 1rem;'><li>students</li><li>early-career professionals,</li><li>corporate leaders,</li><li>anyone interested in advancing their knowledge of sustainability and its applications across various industries.</li></ul>",
  },
  {
    question: "What are the key topics covered in this course?",
    answer:
      "<ul style='list-style-type: disc; margin-left: 1rem;'><li>Introduction to Sustainability</li><li>Fundamentals of Environmental Studies</li><li>Climate Science</li><li>GHG Accounting and Carbon Footprint</li><li>Circular Economy and Resource Management</li><li>Corporate Sustainability and ESG Frameworks</li><li>Sustainable Agriculture and Permaculture</li><li>Social Impact Analysis</li><li>Decarbonisation</li></ul>",
  },
  {
    question: "What are the expected learning outcomes of the course? ",
    answer:
      "At the end of the course, participants will: <ul style='list-style-type: disc; margin-left: 1rem;'><li>Gain a strong understanding of corporate sustainability concepts.</li><li>Demonstrate proficiency in GHG accounting and ESG integration.</li><li>Apply circular economy and resource management principles.</li><li>Design and implement sustainability-focused projects.</li><li>Communicate effectively about sustainability challenges and solutions.</li><li>Experience personal growth through the YUVABE’s signature Evolve.</li><li>Program, fostering self-discovery, resilience, and empowerment.</li></ul>",
  },
  {
    question: "Is prior experience required?",
    answer:
      "No, this course is beginner-friendly and builds foundational knowledge.",
  },
  {
    question: "What is the EVOLVE program?",
    answer:
      "The Evolve Program is designed to be a transformative journey, empowering individuals to unlock their true potential and achieve personal growth. At its core, the program provides participants with tools and experiences that go beyond academic or professional skills, focusing instead on holistic development. </br></br>Through Evolve, you’ll discover how to communicate with clarity and present your ideas with confidence, enhancing your ability to make an impact in any setting. </br></br>In essence, the Evolve Program isn’t just about gaining skills—it’s about reshaping how you approach challenges, connect with others, and grow as an individual. It’s a journey of self-discovery and empowerment, designed to help you step into the best version of yourself.</br>",
  },
  {
    question: "Is this course suitable for beginners?",
    answer:
      "Yes, the course is made for beginners and starts with basic topics, slowly moving to more advanced ones. ",
  },
  {
    question: "What is the time commitment required each week?",
    answer:
      "Participants are expected to commit an average of 35 - 40 hours per week, including lectures, assignments, and activities. Since the course is planned for in-person sessions, it will take a maximum of 6-8 hours per day from Monday to Friday.",
  },
  {
    question: "Will there be live sessions, or is the course self-paced?",
    answer: "In person class room sessions.",
  },
  {
    question: "How will I receive the certificate (digital, or printed)?",
    answer: "Printed",
  },
  {
    question: "Are there any exams or assessments for certification?",
    answer:
      "Yes. You will have an end-of-course assessment and presentation of the capstone project.",
  },
  {
    question: "Do I need any special software or hardware to take the course?",
    answer: "You will be required to bring your laptop for the course.",
  },
  {
    question:
      "Does the course provide any career support or job placement assistance?",
    answer:
      "The course enhances employability through practical skills and industry insights but does not offer direct placement services.",
  },
  {
    question:
      "What is the refund policy if I decide to withdraw from the course?",
    answer:
      "Your deposit amount will not be refunded after the commencement of your course.",
  },
  {
    question: "What qualifications or experience do the instructors have?",
    answer:
      "The instructors have backgrounds in environmental engineering and management, sustainability, climate change, and carbon markets.",
  },
  {
    question:
      "Are there internship or project opportunities as part of the course",
    answer: "Top 5 candidates get paid 3-6 months internship with Yuvabe.",
  },
  {
    question: "Will I gain access to a network of professionals or alumni?",
    answer: "You will be part of the Yuvabe Alumni group.",
  },
  {
    question: "What is the student support Offered By Yuvabe?",
    answer: "Lunch is provided on Campus from Monday - Friday.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-3xl md:text-4xl font-bold text-[#7CB518]"
      >
        Interactive FAQs
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
        className="text-gray-600 mt-2"
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
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
            >
              <FaqItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
