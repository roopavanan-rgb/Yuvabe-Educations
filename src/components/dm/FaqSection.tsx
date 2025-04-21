"use client";

import { motion, AnimatePresence } from "framer-motion";
import FaqItem from "./FaqItem";

const faqs = [
  {
    question: "Who is eligible to apply?",
    answer: "Anyone passionate about digital marketing! No prior experience is required, but basic familiarity with online platforms is helpful.",
  },
  {
    question: "Is this program in-person or online?",
    answer: "This is an in-person classroom program designed for immersive learning and hands-on experience.",
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes! Upon successful completion, you will receive a Yuvabe Education’s Digital Marketing Certification.",
  },
  {
    question: "What is the program fee?",
    answer: "The fee structure is available in the brochure. You can download it from the link above.",
  },
  {
    question: "What is the EVOLVE program?",
    answer: "The Evolve Program is designed to be a transformative journey, empowering individuals to unlock their true potential and achieve personal growth. At its core, the program provides participants with tools and experiences that go beyond academic or professional skills, focusing instead on holistic development.Through Evolve, you’ll discover how to communicate with clarity and present your ideas with confidence, enhancing your ability to make an impact in any setting. In essence, the Evolve Program isn’t just about gaining skills—it’s about reshaping how you approach challenges, connect with others, and grow as an individual. It’s a journey of self-discovery and empowerment, designed to help you step into the best version of yourself.",
  },
  {
    question: "How do I apply?",
    answer: "Click the ‘Apply Now’ button, fill in the form, and our team will reach out for the next steps.",
  },
  {
    question: "Is this course suitable for beginners?",
    answer: "Yes, the course is made for beginners and starts with basic topics, slowly moving to more advanced ones",
  },
  {
    question: "What is the time commitment required each week?",
    answer: "Participants are expected to commit an average of 35 - 40 hours per week, including lectures, assignments, and activities. Since the course is planned for in-person sessions, it will take a maximum of 6-8 hours per day from Monday to Friday.",
  },
  {
    question: "Will there be live sessions, or is the course self-paced?",
    answer: "In-person classroom sessions.",
  },
  {
    question: "Are there any scholarships available?",
    answer: "There are 5 scholarship seats available for women candidate from the bio-region.",
  },
  {
    question: "How will I receive the certificate (digital or printed)?",
    answer: "Printed",
  },
  {
    question: "Are there any exams or assessments for certification?",
    answer: "Yes. You will have an end-of-course assessment and presentation of the capstone project.",
  },
  {
    question: "Do I need any special software or hardware to take the course?",
    answer: "You will be required to bring your laptop for the course.",
  },
  {
    question: "What is the refund policy if I decide to withdraw from the course?",
    answer: "Your fees will not be refunded after the commencement of your course.",
  },
  {
    question: "What qualifications or experience do the instructors have?",
    answer: "Our instructors have extensive industry experience across brand marketing, advertising, UI/UX design along with expertise in SEO, social media, content marketing, and analytics, having certifications like Google Ads, HubSpot, or Meta Blueprint, and a strong background in teaching and mentoring",
  },
  {
    question: "Are there internship or project opportunities as part of the course",
    answer: "Top 3 candidates will receive a 3 month internship opportunity at Yuvabe.",
  },
  {
    question: "Will I gain access to a network of professionals or alumni?",
    answer: "You will be part of the Yuvabe Alumni group.",
  },
  {
    question: "What is the student support Offered By Yuvabe?",
    answer: "Lunch is provided on Campus from Monday - Friday.",
  },
  {
    question: "Does the course provide any career support or job placement assistance?",
    answer: "The course enhances employability through practical skills and industry insights but does not offer direct placement services.",
  },
  {
    question: "Do you offer group discounts for organizations or institutions?",
    answer: "Yes. Please call/email us for further information.\nEmail: bridge@yuvabe.com \nMobile: 9677604467 (9am - 5pm)",
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
        Interactive FAQs
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
