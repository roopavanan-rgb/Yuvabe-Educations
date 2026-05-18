"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import {
  Calendar,
  Clock,
  MapPin,
  GraduationCap,
  Briefcase,
  Building,
  Users,
  CheckCircle,
} from "lucide-react";
import FaqSection from "@/components/FaqSection";
import TeamSection from "@/components/TeamSection";
import InfiniteSlider from "@/components/InfiniteSlider";
import KeyHighlights from "@/components/KeyHighlights";
import FooterSus from "@/components/FooterSus";

const audience = [
  {
    icon: <GraduationCap className="w-8 h-8 text-[#A0E75A]" />,
    title: "Students and Recent Graduates",
    description: "Eager to build a career in sustainability.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-[#A0E75A]" />,
    title: "Aspiring Professionals",
    description: "Transitioning to sustainability careers and roles.",
  },
  {
    icon: <Building className="w-8 h-8 text-[#A0E75A]" />,
    title: "Corporate Leaders",
    description: "Integrating sustainability into business strategies.",
  },
  {
    icon: <Users className="w-8 h-8 text-[#A0E75A]" />,
    title: "Passionate Changemakers",
    description: "About creating a positive environmental and social impact.",
  },
];

const features = [
  {
    title: "For All Levels",
    description:
      "Whether you're a student, a professional transitioning to sustainability roles, or someone passionate about creating impact, this course is tailored for you.",
    image: "/images/img1.png",
  },
  {
    title: "Practical Learning",
    description:
      "Gain actionable skills in GHG accounting, circular economy, ESG frameworks, and decarbonization strategies.",
    image: "/images/img2.png",
  },
  {
    title: "Real World Impact",
    description:
      "Engage in live projects and capstone presentations to apply your learning to real-life challenges.",
    image: "/images/img3.png",
  },
];

const learnings = [
  {
    number: "01",
    text: "Develop your sustainability skills with our comprehensive course. Learn key concepts, global trends, and best practices.",
  },
  {
    number: "02",
    text: "Understand GHG accounting, ESG frameworks, and reporting to make informed decisions.",
  },
  {
    number: "03",
    text: "Apply circular economy principles to reduce waste and drive innovation.",
  },
  {
    number: "04",
    text: "Develop skills to design, implement, and evaluate impactful projects.",
  },
  {
    number: "05",
    text: "Communicate solutions effectively to diverse stakeholders.",
  },
];

const left = [
  {
    title: "Leadership Training",
    description:
      "Gain insights into leadership essentials such as focus, discipline, time management, and people skills, guided by a professional coach. Techniques like meditation and journaling will be incorporated to foster self-awareness and personal growth.",
  },
  {
    title: "English Communication",
    description:
      "Specialized training for those looking to enhance their English speaking, reading, and writing skills.",
  },
  {
    title: "Resume Building",
    description:
      "Learn how to create a professional, standout resume tailored to your career goals.",
  },
];

const softSkills = [
  {
    title: "Communication & Presentation",
    description:
      "Develop effective communication techniques and impactful presentation skills to convey your ideas confidently.",
  },
  {
    title: "Teamwork",
    description:
      "Understand the dynamics of collaboration, fostering teamwork to achieve shared goals effectively.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen bg-[url('/images/herobg.png')] bg-cover bg-center bg-no-repeat text-white text-center px-4 md:px-6 lg:px-8">
        {/* Decorative Leaves */}
        <div className="absolute top-0 right-0 w-24 md:w-40 lg:w-52">
          <Image
            src="/images/leaf2.png"
            alt="Top Right Leaf"
            width={200}
            height={200}
            className="w-full"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-24 md:w-40 lg:w-52">
          <Image
            src="/images/leaf1.png"
            alt="Bottom Left Leaf"
            width={200}
            height={200}
            className="w-full"
          />
        </div>

        {/* Hero Content */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl"
        >
          Shape your career in Corporate Sustainability with Yuvabe Education’s
          Bridge Program.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-base sm:text-lg md:text-xl"
        >
          Launching September 2025 | Empowering Change for a Sustainable Future
        </motion.p>

        {/* Buttons */}
        {/* Centered Button */}
        <div className="flex justify-center mt-6">
          <div className="mt-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-6 flex flex-col sm:flex-row gap-6"
            >
              <Link
                href={"https://forms.gle/kXTTjSCYvBMRNa7z9"}
                target="_blank"
              >
                <button className="px-6 py-3 bg-[#90C645] text-white rounded-full font-semibold   w-full sm:w-[230px] cursor-pointer">
                  APPLY NOW
                </button>
              </Link>
              <Link
                href={"/docs/yuvabe Sustainability Brochure.pdf"}
                target="_blank"
              >
                <button className="px-6 py-3 border border-[#90C645] text-[#90C645] rounded-full font-semibold  w-full sm:w-auto cursor-pointer">
                  DOWNLOAD BROCHURE
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative flex flex-col items-center justify-center bg-[#1B360F] text-white text-center pt-12 pb-24  overflow-hidden">
        {/* About the Course */}
        <motion.div
          className="relative z-10 border border-[#90C645] rounded-[40px] w-full max-w-5xl px-4 md:px-12 py-6 md:py-10"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#90C645]">
            About The Course
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
            Unlock a comprehensive understanding of sustainability with our
            3-month, in-person 'Corporate Sustainability' course at Auroville,
            Tamil Nadu.
          </p>
        </motion.div>

        {/* 9 Immersive Modules */}
        <motion.h2
          className="pt-12 pb-4 text-lg sm:text-2xl md:text-4xl font-bold text-[#90C645] z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          9 Immersive Modules
        </motion.h2>

        <motion.p
          className="z-10 mt-2 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Join us at Yuvabe, Auroville, where innovation meets sustainability,
          and gain the skills, knowledge, and network to drive a positive impact
          in your career and beyond.
        </motion.p>

        {/* Slider */}
        <div className="z-10 w-full mt-12">
          <InfiniteSlider />
        </div>

        {/* Background Text */}
        <motion.h2
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[40px] sm:text-[60px] md:text-[120px] font-extrabold text-[#90C645] opacity-100 whitespace-nowrap pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Sustainability
        </motion.h2>
      </section>

      {/* Key Highlights */}
      <KeyHighlights />

      {/* Evolve section */}
      <section className="relative bg-[#1B360F] text-white text-center px-4 md:px-6 lg:px-8 pt-12 pb-16">
        {/* Title */}
        <h1 className="text-[60px] font-bold text-[#90C645]">
          What is the EVOLVE Program?
        </h1>

        {/* Content */}
        <div className="mt-8 max-w-5xl mx-auto">
          <ul className="list-disc list-inside text-left space-y-4">
            <li className="text-base sm:text-lg md:text-xl text-white mb-8">
              The Evolve Program is designed to be a transformative journey,
              empowering individuals to unlock their true potential and achieve
              personal growth. At its core, the program provides participants
              with tools and experiences beyond academic or professional skills,
              focusing instead on holistic development.
            </li>

            <li className="text-base sm:text-lg md:text-xl text-white mb-8">
              Through Evolve, you’ll discover how to communicate clearly and
              present your ideas confidently, enhancing your ability to make an
              impact in any setting.
            </li>

            <li className="text-base sm:text-lg md:text-xl text-white mb-8">
              In essence, the Evolve Program isn’t just about gaining
              skills—it’s about reshaping how you approach challenges, connect
              with others, and grow as an individual. It’s a journey of
              self-discovery and empowerment designed to help you become the
              best version of yourself.
            </li>
          </ul>
        </div>
      </section>

      {/* Why choose section */}
      <section className="py-12 px-6 md:px-12 lg:px-20 bg-white from-white to-green-100 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold text-[#90C645]">
          Why Choose This Course
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-white shadow-md"
            >
              <div className="relative w-full h-48">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 bg-[#719C35]-50">
                <h3 className="text-lg md:text-xl font-semibold text-[#90C645]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-gray-700">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What you Learn */}
      <section className="relative bg-[#1B360F] text-white py-16 px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl lg:text-6xl font-bold text-[#90C645] text-center"
        >
          What You'll Learn:
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-2 text-lg md:text-xl text-gray-300 text-center"
        >
          At the end of this course, you'll be able to
        </motion.p>

        {/* Learning Outcomes Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learnings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h3 className="text-4xl font-bold text-[#90C645]">
                {item.number}
              </h3>
              <p className="mt-2 text-lg text-gray-300">{item.text}</p>
              <div className="mt-2 w-24 h-[2px] bg-gray-400"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join */}
      <section className="py-12 px-6 md:px-12 lg:px-20 text-center bg-white">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#90C645]"
        >
          Join the Corporate Sustainability Program
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-2 text-lg md:text-xl text-gray-600"
        >
          Get ready to launch your career in corporate sustainability with our
          program!
        </motion.p>

        {/* Centered Button */}
        <div className="flex justify-center mt-6">
          <div className="mt-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-6 flex flex-col sm:flex-row gap-6"
            >
              <Link
                href={"https://forms.gle/kXTTjSCYvBMRNa7z9"}
                target="_blank"
              >
                <button className="px-6 py-3 bg-[#90C645] text-white rounded-full font-semibold   w-full sm:w-[230px] cursor-pointer">
                  APPLY NOW
                </button>
              </Link>
              <Link
                href={"/docs/yuvabe Sustainability Brochure.pdf"}
                target="_blank"
              >
                <button className="px-6 py-3 border border-[#90C645] text-[#90C645] rounded-full font-semibold  w-full sm:w-auto cursor-pointer">
                  DOWNLOAD BROCHURE
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Course Structure Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-[#92d82f70] bg-opacity-25 p-8 rounded-2xl max-w-5xl mx-auto"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-[#90C645]">
            Course Structure
          </h3>

          {/* Structure Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-[#90C645]">
            {/* Duration */}
            <div className="flex flex-col items-center">
              <Calendar className="text-[#90C645] w-8 h-8" />
              <p className="mt-2 font-semibold">Duration</p>
              <p className="text-sm">From September 2025 onwards</p>
            </div>

            {/* Schedule */}
            <div className="flex flex-col items-center border-l border-[#90C645] pl-6">
              <Clock className="text-[#90C645] w-8 h-8" />
              <p className="mt-2 font-semibold">Schedule</p>
              <p className="text-sm">Monday to Friday, 9:00 AM - 5:00 PM.</p>
            </div>

            {/* Mode */}
            <div className="flex flex-col items-center border-l border-[#90C645] pl-6">
              <MapPin className="text-[#90C645] w-8 h-8" />
              <p className="mt-2 font-semibold">Mode</p>
              <p className="text-sm">In-Person at Yuvabe Saracon Campus.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Who should Join */}
      <section className="relative min-h-[600px] flex items-center justify-center px-4 py-12">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/bg.png"
            alt="Forest Background"
            fill
            className="object-cover brightness-75"
          />
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#A0E75A]"
          >
            Who Should Join?
          </motion.h2>
          <p className="text-base sm:text-lg text-white mt-2">
            This course is designed for:
          </p>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 place-items-center">
            {audience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-start gap-3 p-5 sm:p-6 bg-[#92d82f38] bg-opacity-15 backdrop-blur-md border border-[#90C645] rounded-2xl shadow-lg text-left text-white w-full max-w-sm"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="text-base sm:text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Learning */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#7BA442] text-center">
          Additional Learnings
        </h2>

        {/* Section Divider */}
        <div className="w-full h-[2px] bg-[#7BA442] mt-4"></div>

        {/* Content Wrapper */}
        <div className="mt-8 flex flex-col md:flex-row items-start gap-8">
          {/* Image on the left */}
          <div className="md:w-1/3">
            <Image
              src="/images/hand.png"
              alt="Plant Growing in Hands"
              width={300}
              height={300}
              className="mx-auto relative flex bottom-8"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-2/3 text-gray-800 text-lg">
            <p className="mb-4 font-medium">
              Alongside your primary subject, the program offers comprehensive
              support training to equip you with essential career-related
              skills, including:
            </p>

            {/* Left Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                {left.map((item, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex items-center gap-2 text-[#7BA442] font-semibold">
                      <CheckCircle className="w-4 h-4 text-[#7BA442]" />
                      {item.title}
                    </div>
                    <p className="text-sm text-gray-700 mt-1">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div>
                {softSkills.map((item, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex items-center gap-2 text-[#7BA442] font-semibold">
                      <CheckCircle className="w-4 h-4 text-[#7BA442]" />
                      {item.title}
                    </div>
                    <p className="text-sm text-gray-700 mt-1">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#1B360F] text-white relative">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#90C645] text-center">
          Course Fees
        </h2>

        {/* Centered Image */}
        <div className="mt-4 flex justify-center">
          <div className="relative w-[900px] md:w-[650px]  rounded-xl ">
            <Image
              src="/images/fee.png"
              width={700}
              height={700}
              alt="Students Studying"
            />
          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Course Fee Card */}
          <div className="bg-[#92d82f38] bg-opacity-15 backdrop-blur-lg border border-[#90C645] rounded-2xl p-6">
            <h3 className="text-lg font-bold text-[#90C645]">Course Fee</h3>
            <p>
              <strong>Course fee:</strong> Completely Free
            </p>
            <p>
              <strong>Refundable Deposit:</strong> ₹3,500 (Paid at time of
              enrollment , will be refunded after course completion)
            </p>
          </div>

          {/* Payment Options Card (Full Width) */}
          <div className="bg-[#92d82f38] bg-opacity-15 backdrop-blur-lg border border-[#90C645] rounded-2xl p-6 ">
            <h3 className="text-lg font-bold text-[#A1D06E]">
              Payment Options
            </h3>
            <p>
              <strong>Payment Options:</strong> Cash, UPI, Bank Transfer.
            </p>
            <p>
              <strong>Contact:</strong> Email at{" "}
              <a href="mailto:bridge@yuvabe.com" className="text-[#A1D06E]">
                bridge@yuvabe.com
              </a>{" "}
              or call{" "}
              <a href="tel:+919677604467" className="text-[#A1D06E]">
                +91 9677604467
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-b from-white to-[#EAF4D3] text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#79A441]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Enrollment Process
        </motion.h2>

        {/* Steps Container */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Step 1 */}
          <motion.div
            className="bg-[#CDE5A7] p-4 rounded-xl shadow-md w-[300px] md:w-[320px] text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <strong>Online Application:</strong> Complete the application form
            before September 15, 2025.
          </motion.div>

          {/* Plus Icon */}
          <motion.div
            className="text-2xl font-bold text-[#79A441]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            +
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="bg-[#CDE5A7] p-4 rounded-xl shadow-md w-[300px] md:w-[320px] text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <strong>Screening:</strong> Shortlisted candidates will be notified
            and will have to come in for an interview and aptitude test.
          </motion.div>

          {/* Plus Icon */}
          <motion.div
            className="text-2xl font-bold text-[#79A441]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            +
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="bg-[#CDE5A7] p-4 rounded-xl shadow-md w-[300px] md:w-[320px] text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <strong>Confirmation:</strong> Secure your spot by paying the
            deposit amount after you clear your screening.
          </motion.div>
        </div>

       
        {/* Apply Now Button */}
        <Link href={"https://forms.gle/kXTTjSCYvBMRNa7z9"} target="_blank">
          <motion.button
            className="mt-4 bg-[#79A441] text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-[#6D923A] transition-all cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Apply Now
          </motion.button>
        </Link>
      </section>

      {/* Post Opportunities */}
      <section className="relative py-16 px-6 bg-[#1B360F] text-center text-white overflow-hidden">
        {/* Background Text */}
        <motion.h2
          className="absolute bottom-[-8%] left-1/2 transform -translate-x-1/2 text-[60px] md:text-[140px] font-extrabold text-white opacity-10 whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Yuvabe Education
        </motion.h2>

        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-6xl font-semibold text-[#90C645]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Post-Course Opportunities
        </motion.h2>

        {/* Opportunities List */}
        <div className="mt-10 space-y-10 max-w-2xl mx-auto mb-10">
          {[
            {
              id: "01",
              text: "Paid internships (3-6 months) for the top performing students at Yuvabe.",
            },
            {
              id: "02",
              text: "Access to an alumni network for ongoing learning and collaboration.",
            },
            {
              id: "03",
              text: "Opportunities for advanced courses and certifications.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.id}
              className="flex items-center space-x-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              {/* Number with Gradient */}
              <span className="text-[120px] font-extrabold bg-gradient-to-br from-[#90C645] to-[#507D2A] text-transparent bg-clip-text">
                {item.id}
              </span>
              {/* Description */}
              <p className="text-lg text-left font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <FaqSection />
      <TeamSection />

      {/* Get started */}
      <section className="flex justify-center py-12 px-">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#92d82f70] bg-opacity-15 border border-[#90C645] rounded-2xl w-full max-w-6xl p-8 text-center"
        >
          <motion.h2
            className="text-[#90C645] text-4xl font-semibold mb-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Get Started
          </motion.h2>
          <motion.p
            className="text-[#90C645] text-md mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Take the first step toward your career in Corporate Sustainability.
            <br />
            Register today and secure your spot!
          </motion.p>
          <div className="flex justify-center gap-4">
            {/* Centered Button */}
            <div className="flex justify-center mt-6">
              <div className="mt-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="mt-6 flex flex-col sm:flex-row gap-6"
                >
                  <Link
                    href={"https://forms.gle/kXTTjSCYvBMRNa7z9"}
                    target="_blank"
                  >
                    <button className="px-6 py-3 bg-[#90C645] text-white rounded-full font-semibold   w-full sm:w-[230px] cursor-pointer">
                      APPLY NOW
                    </button>
                  </Link>
                  <Link
                    href={"/docs/yuvabe Sustainability Brochure.pdf"}
                    target="_blank"
                  >
                    <button className="px-6 py-3 border border-[#90C645] text-[#90C645] rounded-full font-semibold  w-full sm:w-auto cursor-pointer">
                      DOWNLOAD BROCHURE
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <FooterSus />
    </main>
  );
}
