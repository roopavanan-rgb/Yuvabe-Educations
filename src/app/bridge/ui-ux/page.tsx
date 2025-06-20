"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function uiux() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FEF4EB] pb-16 xl:pb-32 md:pb-24 xl:pt-40 pt-16 md:pt-24 overflow-hidden">
        <motion.div className="max-w-[1240px] lg:min-h-[460px] xl:min-h-[611px] flex flex-col-reverse lg:flex-row m-auto px-5 md:px-8 xl:px-0 gap-y-6 md:gap-y-12 lg:gap-y-12 z-10">
          {/* Left */}
          <div className="flex flex-col gap-y-8 lg:max-w-[454px] z-10 justify-center">
            <h1 className="font-albert-sans text-black font-semibold leading-[120%] lg:text-[64px] md:text-4xl text-3xl text-center lg:text-left">
              Transform Your UI/UX Skills
            </h1>
            <p className="font-secondary md:text-[18px] text-[16px] text-[#020406] leading-9 text-center lg:text-left">
              Master UI/UX Design with Yuvabe Education’s 12-Week Immersive
              UI/UX Design Launchpad.
            </p>
            {/* Buttons */}
            <div className="flex flex-row gap-6 justify-center lg:justify-start flex-wrap">
              {/* Apply Now */}
              <Link href="example/com" className="flex-1 min-w-[194px]">
                <div className="bg-[#F48F38] border-1 border-black py-2.5 px-6 rounded-[94px]">
                  <p className="font-albert-sans text-[14px] md:text-[16px] leading-normal text-white text-center">
                    Apply Now
                  </p>
                </div>
              </Link>
              {/* Apply Now */}
              <Link href="example/com" className="flex-1 min-w-[194px]">
                <div className="bg-transparent border-1 border-black py-2.5 px-6 rounded-[94px]">
                  <p className="font-albert-sans text-[14px] md:text-[16px] leading-normal text-center">
                    Download Brochure
                  </p>
                </div>
              </Link>
            </div>
          </div>
          {/* Right */}
          <div className="lg:w-full flex flex-col justify-center items-center">
            {/* Images */}
            <Image
              src="/images/uiux/ui-ux-hero.png"
              alt="Bridge Image"
              width={1283}
              height={676}
              className="object-cover w-full md:w-[55%] lg:w-full z-1 hidden lg:block"
            />
            <Image
              src="/images/uiux/ui-ux-hero-m.png"
              alt="Bridge Image"
              width={1283}
              height={676}
              className="object-cover z-1  md:max-w-[55%] lg:hidden"
            />
          </div>
        </motion.div>
      </section>

      {/* About the course */}
      <section className="bg-gradient-to-b from-[#F3802FCC] to-[#F7C8593D] pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24 relative overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-6 md:gap-y-12 lg:gap-y-12 z-10">
          {/* Translucent Box */}
          <motion.div
            className="flex flex-col gap-y-6 lg:px-[90px] md:px-16 px-4 z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }} // Ensure the animation only runs once when in view
          >
            <motion.h2
              className="font-albert-sans text-black font-normal leading-[120%] lg:text-[64px] md:text-4xl text-3xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              About the Course
            </motion.h2>
            <p className="font-secondary md:text-[18px] text-[16px] text-[#020406] leading-9 text-center md:text-left">
              Step into the world of UI/UX design with confidence! Yuvabe
              Education’s 12-week, full-time UI/UX Design Launchpad equips you
              with industry-leading design principles, hands-on experience, and
              expert mentorship to help you succeed in this fast-growing
              creative field.
            </p>
            <p className="font-secondary md:text-[18px] text-[16px] text-[#020406] leading-9 text-center md:text-left">
              <span className="font-bold">Duration:</span> 12 Weeks
              <span className="font-bold"> | Start Date:</span> May, 2025.{" "}
              <br />
              <span className="font-bold">Learning Mode:</span> In-person,
              classroom sessions <br />
              <span className="font-bold">Location:</span> Saracon Campus,
              Yuvabe, Auroville, Tamil Nadu, India.
              <br />
              <span className="font-bold">Certification: </span>UI/UX Design
              Certification recognised by employers and universities <br />
              <span className="font-bold">Expert Guidance: </span>Learn directly
              from experienced UI/UX professionals
              <br /> <span className="font-bold">Paid Internship: </span>Top 3
              students will receive a 3-month paid internship with Yuvabe
            </p>
            <p className="font-secondary md:text-[18px] text-[16px] text-[#020406] leading-9 text-center md:text-left">
              This full-time program blends theoretical foundations with
              real-world applications through hands-on projects, user research,
              wireframing, prototyping, and live case studies to help you
              develop job-ready skills.
            </p>
          </motion.div>
        </div>
        {/* Image */}
        <Image
          src="/images/uiux/Ellipseui-ux3svg.svg"
          alt="Bridge Image"
          width={585}
          height={585}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full md:h-full lg:h-auto object-cover z-1 max-w-[50%] lg:max-w-auto"
        />
      </section>

      {/* Evolve Program */}
      <section className="bg-[#FEF4EB] pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24 relative overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-6 md:gap-y-12 lg:gap-y-12 xl:gap-y-16 z-10">
          {/* Heading */}
          <div>
            <h2 className="leading-[130%] text-center bg-[linear-gradient(180deg,_#FFE7D3_-6.84%,_#EE8A33_90.74%)] bg-clip-text text-transparent font-bold text-3xl md:text-5xl lg:text-8xl xl:text-[115px]">
              Evolve Program
            </h2>
            <p className="font-secondary md:text-[18px] text-[16px] text-[#020406] leading-9 text-center pt-2 md:pt-4">
              The Evolve Program is a transformative journey that empowers
              individuals to unlock their true potential. It focuses on personal
              growth, confidence-building, and problem-solving, helping
              participants develop skills beyond technical expertise.
              <span className="text-bold">Through Evolve, you’ll learn:</span>
            </p>
          </div>
          {/* Blocks */}
          <div className="flex flex-col gap-y-6 md:gap-y-12 lg:gap-y-12 xl:gap-y-16">
            {/* Individual Blocks */}
            <div className="flex flex-row custom-glass-ui custom-glass-ui-border border-[2px]">
              {/* Text */}
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
