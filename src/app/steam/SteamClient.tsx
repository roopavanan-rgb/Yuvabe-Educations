"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import Link from "next/link";
import ImpactReport from "@/components/ImpactReport";

export default function Steam() {
  return (
    <>
      {/* Wrapper */}
      <div className="bg-white pb-16 xl:pb-20 md:pb-18 xl:pt-32 pt-16 md:pt-24 overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-16 md:gap-y-24 lg:gap-y-32 overflow-hidden">
          {/* Hero */}
          <div className="flex flex-col lg:gap-y-16 gap-y-8 overflow-hidden">
            {/* Top */}
            <motion.div
              className="flex flex-col gap-y-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-[#592AC7] text-[40px]  md:text-[40px] lg:text-[64px] leading-[120%] font-semibold text-center font-primary">
                STEAM
              </h1>
              <p className="font-secondary font-medium text-black text-[18px] leading-[30px] text-center">
                Our STEAM program reintroduces the joy of tinkering and learning
                by empowering young minds to experiment, innovate, and develop
                essential skills for the future. We make learning exciting
                through hands-on exploration in Science, Technology,
                Engineering, Arts, and Mathematics.
              </p>
            </motion.div>
            <motion.div
              className="max-w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/p4Qo589mg8U?autoplay=1&mute=1"
                title="YouTube video player"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // referrerpolicy="strict-origin-when-cross-origin"
                // allowfullscreen
                className="md:h-[617px] h-64"
              ></iframe>
            </motion.div>
          </div>

          {/* Overview */}
          <div className="flex flex-col gap-y-8 md:gap-y-16 overflow-hidden">
            {/* Heading with Slide Down Animation */}
            <motion.h2
              className="text-black text-[32px] md:text-[40px] lg:text-5xl leading-[120%] font-semibold text-center font-primary"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Overview
            </motion.h2>

            <div className="flex flex-col lg:flex-row gap-x-8 md:gap-x-16 lg:gap-x-[106px] gap-y-8 md:gap-y-16 justify-center items-center">
              {/* Text Content with Slide Left Animation */}
              <motion.div
                className="lg:w-[50%] px-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="font-secondary font-medium text-black text-[18px] leading-[30px] text-center lg:text-left">
                  The Auroville Bio-region comprises of approximately&nbsp;
                  <span className="text-[#592AC7] font-bold">
                    13 villages with about 40,000 people.
                  </span>
                  Situated in the Villupuram district of Tamil Nadu, the region
                  was primarily reliant on agricultural communities for income.
                  However, due to
                  <span className="text-[#592AC7] font-bold">
                    &nbsp;climate change, income from farming has been
                    decreasing.
                  </span>
                  <br />
                  <br />
                  This shift in the natural environment is also altering the
                  cultural perspective, where
                  <span className="text-[#592AC7] font-bold">
                    &nbsp;education
                  </span>
                  &nbsp;is now seen as a
                  <span className="text-[#592AC7] font-bold">
                    &nbsp;secure pathway
                  </span>
                  &nbsp;for employment and
                  <span className="text-[#592AC7] font-bold">
                    &nbsp;generating income
                  </span>
                  &nbsp;for families.
                </p>
              </motion.div>

              {/* Image with Slide Right Animation */}
              <motion.div
                className="lg:w-[50%] flex flex-col relative items-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/steam/steam1.png"
                  alt="group-1"
                  width={669}
                  height={447}
                  className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-full object-contain z-10"
                />

                {/* Floating SVG Animation */}
                <motion.svg
                  className="absolute top-[10%] right-[10%] w-40 md:w-[100px] lg:w-[215px]"
                  viewBox="0 0 215 216"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ y: [0, -20, 0] }} // Floating effect
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path
                    d="M214.996 107.863C214.996 167.075 166.995 215.076 107.783 215.076C48.5712 215.076 0.570312 167.075 0.570312 107.863C0.570312 48.6512 48.5712 0.650391 107.783 0.650391C166.995 0.650391 214.996 48.6512 214.996 107.863Z"
                    fill="#FFCA2D"
                  />
                </motion.svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* The Challenge */}
      <div className="bg-[#FFF9EA] py-16 lg:py-32 md:py-24 overflow-hidden">
        <div className="max-w-[1240px] w-full flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-16 md:gap-y-24 lg:gap-y-32">
          <div className="flex flex-col gap-y-8 md:gap-y-16">
            {/* Heading Animation */}
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-black text-[32px] md:text-[40px] lg:text-5xl leading-[120%] font-semibold text-center font-primary"
            >
              The Challenge
            </motion.h2>

            <div className="flex flex-col-reverse lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-16 justify-center items-center">
              {/* Image Animation */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full lg:w-[50%] flex justify-center relative"
              >
                <Image
                  src="/images/steam/steam2.png"
                  alt=""
                  width={447}
                  height={447}
                  className="w-[80%] md:w-[70%] lg:w-full max-w-[400px] z-10"
                />

                {/* Square SVG with Floating Animation */}
                <motion.svg
                  initial={{ y: 0 }}
                  whileInView={{ y: [0, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                  width="148"
                  height="148"
                  viewBox="0 0 148 148"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-[-5%] right-[10%] md:right-[5%] lg:right-[0] lg:z-11"
                >
                  <rect
                    x="117.871"
                    y="0.873047"
                    width="120.879"
                    height="120.879"
                    transform="rotate(75.8814 117.871 0.873047)"
                    fill="#91C644"
                  />
                </motion.svg>
              </motion.div>

              {/* Text Animation */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full lg:w-[50%] flex flex-col gap-6 px-5 md:px-0"
              >
                <p className="font-secondary font-medium text-black text-[18px] leading-[30px] text-center lg:text-left">
                  The conventional education system’s emphasis on
                  <span className="text-[#592AC7] font-bold">
                    &nbsp;rote learning
                  </span>
                  &nbsp;and lack of application-based curricula in subjects like
                  science and mathematics has been known to&nbsp;
                  <span className="text-[#592AC7] font-bold">
                    stifle creativity{''}
                  </span> and confidence in students.
                </p>
                <p className="font-secondary font-medium text-black text-[18px] leading-[30px] text-center lg:text-left">
                  This has further led to a lack of inspiration and&nbsp;
                  <span className="text-[#592AC7] font-bold">
                    lack of skills in the youth
                  </span> to think out of the box and turn their ideas into
                  reality.&nbsp;
                  <span className="text-[#592AC7] font-bold">
                    Growing underemployment
                  </span>
                  &nbsp;with little to no access to career growth opportunities
                  aggravates this situation for the youth.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* Challenges */}
      {/* The STEAM Lab */}
      <div className="bg-white py-16 lg:py-48 md:py-24">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-16 md:gap-y-24 lg:gap-y-32">
          <div className="flex flex-col gap-y-8 md:gap-y-16">
            {/* Animated Title */}
            <motion.h2
              className="text-black text-[32px] md:text-[40px] lg:text-5xl leading-[120%] font-semibold text-center font-primary"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              The STE(A)M Lab
            </motion.h2>

            <div className="flex flex-row gap-x-[106px] flex-wrap lg:flex-nowrap gap-y-8 md:gap-y-16 justify-center">
              {/* Animated Text */}
              <motion.div
                className="w-full lg:w-[50%]"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="font-secondary font-medium text-black text-[18px] leading-[30px] text-center lg:text-left">
                  Through our STEAM program, we want to re-introduce the
                  <span className="text-[#592AC7] font-bold">
                    {" "}
                    joy of tinkering
                  </span>
                  and learning by doing, especially in the fields of Science,
                  Technology, Engineering, and Mathematics.
                  <br />
                  <br />A dedicated STEAM Lab would give a platform and space
                  for the students to explore, innovate, and
                  <span className="text-[#592AC7] font-bold">
                    {" "}
                    develop essential skills
                  </span>
                  needed to fuel innovation and entrepreneurship.
                </p>
              </motion.div>

              {/* Animated Image */}
              <motion.div
                className="lg:w-[50%] lg:align-middle flex flex-col relative justify-center"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/steam/steam4.png"
                  alt=""
                  width={651}
                  height={373}
                  className="w-full md:min-w-[400px] z-10"
                />

                {/* Blue Triangle */}
                <motion.svg
                  width="550"
                  height="550"
                  viewBox="0 0 537 563"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -left-30 md:left-0 lg:top-[-35%] xl:top-[-25%] right-0 md:right-[0%] scale-50 md:scale-65 lg:scale-75 xl:scale-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <path
                    d="M438.396 0.794658L536.283 562.454L0.928781 366.397L438.396 0.794658Z"
                    fill="#33BED4"
                  />
                </motion.svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* What we want */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-[#FFF9EA] py-16 lg:py-32 md:py-24"
      >
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-16 md:gap-y-24 lg:gap-y-32">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-black text-[40px] md:text-[40px] lg:text-[64px] leading-[120%] font-semibold text-center font-primary"
          >
            What do we want to do?
          </motion.h2>

          {/* Items Container */}
          <div className="flex flex-row flex-wrap gap-y-[65px] gap-x-4 lg:justify-between justify-center">
            {/* Individual Items */}
            {[
              {
                img: "/images/bridge/bridge-icon1.png",
                text: "Drive engagement in Auroville, the bioregion and in underserved communities through an accessible centralised STEAM Lab.",
              },
              {
                img: "/images/bridge/bridge-icon2.png",
                text: "Out of school and school break programs for Aurovillians and bioregion kids.",
              },
              {
                img: "/images/bridge/bridge-icon3.png",
                text: "A more personalised learning with low mentor-student ratio with about 4 Yuvabe youth assigned to each class.",
              },
              {
                img: "/images/bridge/bridge-icon4.png",
                text: "Partnership with various STEAM and Experiential learning organisations like Agastya Foundation, ThinkTac etc.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="flex lg:flex-row flex-col gap-x-4 md:gap-y-[65px] gap-y-8 lg:w-[49%] items-center flex-wrap lg:flex-nowrap justify-center w-full"
              >
                <Image src={item.img} alt="" width={104} height={104} />
                <p className="font-secondary font-medium text-black text-[18px] leading-[30px] w-full md:w-[320px] lg:w-full text-center lg:text-left">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      {/* Our Programs */}
      <motion.div
        className="bg-white py-16 lg:py-32 md:py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-16 md:gap-y-24 lg:gap-y-32">
          <motion.h2
            className="text-black text-[40px] md:text-[40px] lg:text-[64px] leading-[120%] font-semibold text-center font-primary"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our Program
          </motion.h2>

          {/* Main Image */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative flex flex-col justify-center items-center">
              <Image
                src="/images/steam/steam3-hires.png"
                alt=""
                width={841}
                height={672}
                className="relative z-5"
              />

              {/* Programs */}
              <motion.div
                className="flex flex-row gap-x-16 gap-y-8 mt-8 md:mt-[-100px] z-10 xl:min-w-[1220px] lg:flex-nowrap flex-wrap justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.3 },
                  },
                }}
              >
                {[
                  {
                    title: "Program Calendar",
                    href: "/steam/program-calendar",
                    imgSrc: "/images/bridge/calendar.svg",
                    borderColor: "#9688C0",
                    bgColor: "#F4F3F9",
                  },
                  {
                    title: "Auroville Program",
                    href: "#",
                    imgSrc: "/images/bridge/matrimandir-oultine.svg",
                    borderColor: "#F8A91E",
                    bgColor: "#FEF6E8",
                  },
                  {
                    title: "Visitor Program",
                    href: "#",
                    imgSrc: "/images/bridge/laptop.svg",
                    borderColor: "#91C644",
                    bgColor: "#F4F9EC",
                  },
                ].map((program, index) => (
                  <Link
                    key={index}
                    href={program.href}
                    className="w-full md:w-1/4 lg:w-1/5"
                  >
                    <motion.div
                      className="flex flex-col border-[1.5px] rounded-[15px] gap-y-[13px] justify-center items-center pt-8 pb-[22px] px-[28px] box-shadow-card cursor-pointer hover:scale-105 transition-transform duration-300"
                      style={{
                        borderColor: program.borderColor,
                        backgroundColor: program.bgColor,
                      }}
                      variants={{
                        hidden: { opacity: 0, y: 40, scale: 0.9 },
                        visible: { opacity: 1, y: 0, scale: 1 },
                      }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <Image
                        src={program.imgSrc}
                        alt=""
                        width={90}
                        height={90}
                      />
                      <h3 className="font-primary text-[16px] lg:text-2xl leading-[30px] font-semibold text-black text-center">
                        {program.title}
                      </h3>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* Add Impact Report from Homepage */}
      <ImpactReport />
      {/* Donation */}
      <div className="bg-[#592AC7] py-16 lg:py-32">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-8 md:gap-y-16">
          <h2 className="text-white text-[40px] md:text-[40px] lg:text-[64px] leading-[120%] font-semibold text-center font-primary">
            Your Support Matters!
          </h2>

          {/* Donate From... */}
          <div className="flex flex-row gap-x-[72px] gap-y-8 flex-wrap lg:flex-nowrap py-0 lg:py-32">
            {/* Donate from India */}
            <div className="flex flex-col gap-y-16 w-full lg:w-1/2">
              {/* Text */}
              <div className="flex flex-col gap-y-6">
                <p className="font-secondary font-bold text-[18px] leading-[30px] text-white text-center lg:text-left">
                  The success of our STEAM Lab is made possible by the
                  generosity of donors like you. Your support can help us reach
                  more children, create lasting change, and bring dreams to
                  life.
                  <br />
                  <br />​ Join hands with Yuvabe to empower our future
                  innovators and leaders to uncover the potential of every
                  child. Your donation can light up a child's future, one life
                  at a time.
                </p>
                <p className="font-secondary font-bold text-2xl md:text-4xl leading-[40px] text-[#FFCA2D] text-center lg:text-left">
                  Donate Today and <br className="hidden lg:block" /> Be
                  a Changemaker!
                </p>
              </div>

              {/* Donate Button */}
              <div className="flex flex-col gap-y-8 py-12 px-8 md:py-24 md:px-16 bg-white rounded-[50px] justify-center items-center">
                <p className="font-secondary font-normal text-[18px] leading-[30px] text-black text-center lg:text-left">
                  To donate from India, kindly use this link:
                </p>

                <Link href="https://donate.auroville.org/">
                  <div className="py-[18px] px-8 md:px-[61px] rounded-[15px] bg-[#592AC7] justify-center items-center">
                    <p className="font-secondary font-semibold text-[18px] leading-[150%] text-white text-center lg:text-left">
                      Donate from India
                    </p>
                  </div>
                </Link>

                <div className="font-secondary font-normal text-[18px] leading-[30px] text-black text-center lg:text-left">
                  <p>Please follow these steps on the donation page:</p>
                  <br />
                  <ul className="list-disc ml-6">
                    <li>
                      Select <strong>'Others'</strong> under Projects to donate
                    </li>
                    <li>
                      Mention Project name as{" "}
                      <strong>'Yuvabe STEAM Lab'</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Donate from Abroad */}
            <div className="w-full lg:w-1/2">
              <motion.div
                className="bg-white p-8 rounded-[30px] md:rounded-[50px] shadow-lg border border-gray-200 w-full lg:max-w-[584px] h-auto lg:h-[850px] flex flex-col justify-between items-center gap-y-8"
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="text-[32px] md:text-[48px] font-semibold text-[#592Ac7] text-center font-primary">
                  Donate from Anywhere
                </h2>

                {/* FundraiseUp Widget */}
                {/* <a href="#XJLHERLT" className=""></a> */}
                <a href="#XMNLKYPV" className="display: none"></a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
