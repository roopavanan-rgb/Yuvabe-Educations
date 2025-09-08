"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";

const bounceIn = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 10 },
  },
};

const testimonials = [
  {
    image: "/images/bridge/graduate1.png",
    testimonial: (
      <>
        This initiative is a great opportunity, especially for us girls, to
        learn valuable tech skills. It felt more like a ‘learn and build’
        journey than a traditional course — giving us hands-on experience that
        closely resembled working in a real-world environment.
        <br />
        <br />
        The meditation sessions were a unique and valuable addition, helping me
        stay focused and engaged throughout the program.
      </>
    ),
    name: "Logeshwari graduated from the AI Full Stack Development Program in 2025; Post program completion she joined Bevolve.ai",
  },

  {
    image: "/images/bridge/graduate2.png",
    testimonial: (
      <>
        “I was a student in the Yuvabe AI and Machine Learning with Python
        course, where I had the incredible opportunity to explore a wide range
        of concepts that truly expanded my perspective and deepened my curiosity
        in the tech field.
        <br />
        <br />
        Now, it's been two months since I joined Bevolve as a Software Testing
        Intern, where I continue to grow, learn, and contribute
        enthusiastically.“
      </>
    ),
    name: "Ezhilarasi graduated from the AI Full Stack Development Program in 2025; Post program completion she joined Bevolve.ai",
  },
];

export default function Bridge() {
  return (
    <main className="overflow-x-hidden">
      {/* Wrapper */}
      <div className="bg-white pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-16 md:gap-y-24 lg:gap-y-32">
          {/* Hero */}
          <div className="flex flex-col lg:gap-y-16 gap-y-8 w-full mx-auto px-5 md:px-8 xl:px-0">
            {/* Top */}
            <motion.div
              className="flex flex-col gap-y-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-[#592AC7] text-[32px] md:text-[48px] lg:text-[64px] leading-[120%] font-semibold text-center font-primary">
                Bridge Program
              </h1>
              <p className="font-secondary font-extrabold text-[#592AC7] text-[16px] md:text-[24px] lg:text-[32px] leading-[28px] md:leading-[30px] text-center">
                A 3-month project-based learning experience
              </p>
            </motion.div>
            {/* Text & Video */}
            <div className="flex flex-row gap-y-8 md:gap-y-16 lg:flex-wrap xl:gap-x-[106px] lg:justify-between">
              {/* Text */}
              <motion.div
                className="w-full lg:w-[35%] flex flex-col justify-between"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <p className="font-secondary font-medium text-black text-[18px] md:text-[18px] leading-[28px] md:leading-[30px] text-center lg:text-left">
                  Yuvabe Bridge Program is designed for young adults who are
                  completing their undergraduate degrees and seeking employment.
                </p>
                <p className="font-secondary font-medium text-black text-[18px] md:text-[18px] leading-[28px] md:leading-[30px] mt-3 text-center lg:text-left">
                  The program offers&nbsp;
                  <span className="text-[#592AC7] font-bold">
                    future-ready skills while nurturing self-growth and a
                    service-to-community mindset{" "}
                  </span>
                  through our Work-Serve-Evolve philosophy.
                </p>
                <p className="font-secondary font-medium text-black text-[18px] md:text-[18px] leading-[28px] md:leading-[30px] mt-3 text-center lg:text-left">
                  Through career-focused learning and personal growth, we
                  empower you to step confidently into the future!
                </p>
              </motion.div>
              {/* Video */}
              <motion.div
                className="max-w-full lg:w-[50%]"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <iframe
                  width="100%"
                  height="336"
                  src="https://www.youtube.com/embed/4CD3hrUG6w4?autoplay=1&mute=1"
                  title="YouTube video player"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  // referrerpolicy="strict-origin-when-cross-origin"
                  // allowfullscreen
                  className="rounded-[20px]"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Rural youth, Rising Potential */}
      <section className="bg-[#FFF9EA] pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-16 md:gap-y-24 lg:gap-y-32">
          <div className="flex flex-col gap-y-8 md:gap-y-16">
            <div className="flex flex-row xl:gap-x-[106px] flex-wrap lg:flex-nowrap gap-y-8 md:gap-y-16 justify-center">
              <motion.div
                className="lg:w-[52%] flex flex-col items-center relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/bridge/bridge-n1.png"
                  alt="Bridge Image"
                  width={533}
                  height={533}
                  className="w-[80%] lg:w-full max-w-[450px] md:max-w-none z-10 object-contain"
                />
              </motion.div>
              <motion.div
                className="w-full lg:w-[44%]"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.h2
                  className="text-black text-[32px] md:text-[40px] lg:text-5xl leading-[120%] font-semibold text-center lg:text-left font-primary lg:w-5/6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Rural Youth, Rising Potential
                </motion.h2>
                <p className="font-secondary font-medium text-black text-[18px] md:text-[18px] leading-[28px] md:leading-[30px]  text-center lg:text-left  mt-4 md:mt-6 lg:mt-9">
                  The Auroville Bioregion, covering 13 villages in Tamil Nadu’s
                  Villupuram district, is a rural area largely dependent on
                  agriculture. However, environmental changes have reduced
                  farm-based income,&nbsp;
                  <span className="text-[#592AC7] font-bold">
                    pushing families to rely on young adults for alternative
                    livelihoods.
                  </span>
                </p>
                <p className="font-secondary font-medium text-black text-[18px] md:text-[18px] leading-[28px] md:leading-[30px]  text-center lg:text-left  mt-3">
                  <span className="text-[#592AC7] font-bold">
                    74% of the population in the region is aged 15–35.
                  </span>
                  (Defined as “youth” by The Tamil Nadu State Youth Policy).
                  These&nbsp;
                  <span className="text-[#592AC7] font-bold">
                    young adults are the catalysts of social change,
                  </span>
                  with the potential to drive socioeconomic, political,
                  environmental, and technological developments. 
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Bridging the Skill Gap */}
      <section className="bg-white pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-16 md:gap-y-24 lg:gap-y-32">
          <div className="flex flex-col gap-y-8 md:gap-y-16">
            <div className="flex flex-row xl:gap-x-[106px] flex-wrap lg:flex-nowrap gap-y-8 md:gap-y-16 justify-center">
              <motion.div
                className="w-full lg:w-[56%]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.h2
                  className="text-black text-[32px] md:text-[40px] lg:text-5xl leading-[120%] font-semibold text-center lg:text-left font-primary lg:w-5/6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Bridging the Skill Gap
                </motion.h2>
                <p className="font-secondary font-medium text-black text-[18px] md:text-[18px] leading-[28px] md:leading-[30px]  text-center lg:text-left  mt-4 md:mt-6 lg:mt-9 lg:w-[82%]">
                  Our conventional education systems’ focus on rote learning
                  often leaves young people without critical, creative, or
                  job-ready skills.
                </p>
                <p className="font-secondary font-medium text-black text-[18px] md:text-[18px] leading-[28px] md:leading-[30px]  text-center lg:text-left mt-3 lg:w-[82%]">
                  <span className="text-[#592AC7] font-bold">
                    Rapid technological shifts have also widened the skills gap
                    for rural youth, making it harder for them to find or create
                    work.
                  </span>
                  The lack of access to career and growth opportunities for such
                  a large portion of the population creates both economic and
                  social concerns.
                </p>
                <p className="font-secondary font-medium text-black text-[18px] md:text-[18px] leading-[28px] md:leading-[30px]  text-center lg:text-left mt-3 lg:w-[82%]">
                  Yuvabe Bridge Program was born out of this need. Through the
                  program we help youth build future-ready skills, receive
                  mentorship, and empower them to pursue meaningful careers.
                </p>
              </motion.div>
              <motion.div
                className="lg:w-[44%] flex flex-col items-center relative justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/bridge/bridge-n2.png"
                  alt="Bridge Image"
                  width={533}
                  height={533}
                  className="w-[80%] lg:w-full max-w-[450px] md:max-w-none z-10 object-cover"
                />
                {/* Yellow Rectangle Decoration */}
                <motion.svg
                  width="128"
                  height="128"
                  viewBox="0 0 128 128"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute z-10 right-[-5%] md:right-0 lg:right-[-5%] top-[10%] md:scale-100 scale-75"
                  animate={{
                    y: [0, -10, 0], // Moves up by 10px and then back to original position
                  }}
                  transition={{
                    duration: 3, // Duration of one full cycle
                    repeat: Infinity, // Loops forever
                    ease: "easeInOut", // Smooth easing
                  }}
                >
                  <circle
                    cx="64.0088"
                    cy="64.0561"
                    r="63.3877"
                    fill="#33BED4"
                  />
                </motion.svg>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Women’s Scholarship Fund */}
      <section className="bg-white pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24">
        <div className="max-w-[1240px] bg-[#FFF9EA] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-16 md:gap-y-24 lg:gap-y-32 rounded-xl border-[#91C644] border-[5px]">
          <div className="flex flex-col gap-y-8 md:gap-y-16 px-4 md:px-12 lg:px-16 pb-4 md:pb-12 lg:pb-16">
            <div className="flex flex-row xl:gap-x-[106px] flex-wrap lg:flex-nowrap gap-y-8 md:gap-y-16 justify-center">
              <motion.div
                className="lg:w-[48%] flex flex-col items-center relative justify-center pt-4 md:pt-12 lg:pt-16"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/bridge/bridge-n3.png"
                  alt="Bridge Image"
                  width={533}
                  height={533}
                  className="w-[80%] lg:w-full max-w-[450px] md:max-w-none z-10 object-cover"
                />
              </motion.div>
              <motion.div
                className="w-full lg:w-[52%]"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="bg-[#91C644] p-3.5 md:pt-10 lg:pt-14 md:px-4 rounded-2xl lg:rounded-b-2xl lg:rounded-bl-2xl lg:rounded-tl-none lg:rounded-tr-none">
                  <p className="font-primary font-extrabold text-white text-[16px] md:text-[24px] lg:text-[32px] leading-[28px] md:leading-[30px] text-center">
                    Women’s Scholarship Fund
                  </p>
                </div>
                <motion.h2
                  className="text-black text-[32px] md:text-[40px] lg:text-5xl leading-[120%] font-semibold text-center lg:text-left font-primary lg:w-5/6 mt-8 md:mt-12 lg:mt-16"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Bridging The Gender Divide
                </motion.h2>
                <p className="font-secondary font-medium text-black text-[18px] md:text-[18px] leading-[28px] md:leading-[30px]  text-center lg:text-left  mt-4 md:mt-6 lg:mt-9">
                  Social norms in the region often restrict women's mobility,
                  further restricting their access to education and
                  opportunities.
                </p>
                <p className="font-secondary font-medium text-black text-[18px] md:text-[18px] leading-[28px] md:leading-[30px]  text-center lg:text-left  mt-3">
                  Yuvabe’s Bridge Program tackles this challenge by offering{" "}
                  <span className="text-[#592AC7] font-bold">
                    100% scholarships to women, removing the “if” and “how” from
                    a woman’s decision to learn,
                  </span>
                  opening pathways to work, income, and leadership—without
                  leaving their communities. 
                </p>
                <p className="font-secondary font-medium text-black text-[18px] md:text-[18px] leading-[28px] md:leading-[30px]  text-center lg:text-left  mt-3">
                  When rural women gain digital literacy and begin to earn
                  independently, they don’t just improve their lives—they change
                  how entire communities perceive what’s possible.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Domains */}
      <section className="bg-white pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-16 md:gap-y-24 lg:gap-y-32">
          <div className="flex flex-col gap-y-8 md:gap-y-16">
            <div className="flex flex-row xl:gap-x-[106px] flex-wrap lg:flex-nowrap gap-y-8 md:gap-y-16 justify-center">
              <motion.div
                className="w-full lg:w-[54%]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.h2
                  className="text-black text-[32px] md:text-[40px] lg:text-5xl leading-[120%] font-semibold text-center lg:text-left font-primary lg:w-5/6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Core Domains
                </motion.h2>
                <p className="font-secondary font-medium text-black text-[18px] md:text-[18px] leading-[28px] md:leading-[30px]  text-center lg:text-left  mt-4 md:mt-6 lg:mt-9">
                  The Yuvabe Bridge Program offers 3-month courses in four
                  future-forward fields:
                </p>
                <ul className="font-secondary font-bold text-[#592AC7] text-[18px] md:text-[18px] leading-[28px] md:leading-[30px]  text-center lg:text-left  mt-4 md:mt-6 list-disc list-inside">
                  <li className="mt-3">AI first Full Stack Development </li>
                  <li className="mt-3">UX Design </li>
                  <li className="mt-3"> Digital Marketing </li>
                  <li className="mt-3">Corporate Sustainability</li>
                </ul>
                <p className="font-secondary font-medium text-black text-[18px] md:text-[18px] leading-[28px] md:leading-[30px]  text-center lg:text-left mt-3 lg:w-[82%]">
                  Each track is led by mentors with over 10+ years of real-world
                  experience, offering hands-on learning, industry insights, and
                  guidance to help young adults confidently step into emerging
                  careers.
                </p>
              </motion.div>
              <motion.div
                className="lg:w-[46%] flex flex-col items-center justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {/* Programs */}
                <div className="flex flex-row gap-x-[14px] md:gap-x-10 lg:gap-x-16 gap-y-8 z-10 flex-wrap">
                  {[
                    {
                      href: "/bridge/ai",
                      border: "border-[#9688C0]",
                      bg: "bg-[#EBF8FB]",
                      imgSrc: "/images/bridge/ai.svg",
                      title: "AI - Full Stack Development",
                      iconBg: "bg-[#33BED4]",
                    },
                    {
                      href: "/bridge/sustainability",
                      border: "border-[#91C644]",
                      bg: "bg-[#F4F9EC]",
                      imgSrc: "/images/bridge/leaf.svg",
                      title: "Corporate Sustainability",
                      iconBg: "bg-[#91C644]",
                    },
                    {
                      href: "/bridge/digital-marketing",
                      border: "border-[#FFCA2D]",
                      bg: "bg-[#FFFAEA]",
                      imgSrc: "/images/bridge/megaphone.svg",
                      title: "Digital Marketing",
                      iconBg: "bg-[#FFCA2D]",
                    },
                    {
                      href: "/bridge/ui-ux",
                      border: "border-[#F8A91E]",
                      bg: "bg-[#FEF6E8]",
                      imgSrc: "/images/bridge/pen.svg",
                      title: "UI/UX Design",
                      iconBg: "bg-[#F8A91E]",
                    },
                  ].map(
                    ({ href, border, bg, imgSrc, title, iconBg }, index) => (
                      <motion.div
                        key={index}
                        variants={bounceIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="w-full md:w-2/5 md:grow-1 lg:w-2/5"
                      >
                        <Link href={href}>
                          <div
                            className={`flex flex-col ${border} ${bg} rounded-[15px] border-[1.5px] gap-y-[13px] justify-center items-center pt-8 pb-[22px] px-[28px] box-shadow-card min-h-[250px] h-full`}
                          >
                            <Image
                              src={imgSrc}
                              alt={title}
                              width={90}
                              height={90}
                            />
                            <h3 className="font-primary text-[18px] lg:text-2xl leading-[30px] font-semibold text-black text-center">
                              {title}
                            </h3>
                            <div
                              className={`${iconBg} rounded-full p-[6px] w-[31.5px] self-end`}
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.25 5.36523L14.7959 5.36523L14.7959 14.9112"
                                  stroke="white"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M14.7959 5.36617L5.25 14.9121"
                                  stroke="white"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Graduates speak */}
      <section className="bg-[#FFCA2D] pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24 ">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: ".swiper-button-prev-b",
              nextEl: ".swiper-button-next-b",
            }}
            modules={[Navigation, Autoplay, EffectFade]}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            speed={4000}
            className="w-full relative"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="bg-[#FFCA2D]">
                <div className="flex flex-col gap-y-8 md:gap-y-16">
                  <div className="flex flex-row xl:gap-x-[106px] flex-wrap lg:flex-nowrap gap-y-8 md:gap-y-16 justify-center max-w-[1075px] m-auto">
                    {/* Image */}
                    <motion.div
                      className="lg:w-[45%] flex flex-col items-center relative justify-center"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      <Image
                        src={testimonial.image}
                        alt="Bridge Image"
                        width={431}
                        height={446}
                        className="w-[80%] lg:w-full max-w-[431px] z-10 object-contain relative"
                      />
                      <svg
                        width="112"
                        height="92"
                        viewBox="0 0 112 92"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="scale-50 lg:scale-100 absolute top-3.5 lg:top-11 right-0 z-10"
                      >
                        <path
                          d="M0.509434 91.0917V60.5783C0.509434 53.0838 1.40164 46.1246 3.18605 39.7007C4.97046 33.0984 7.82551 26.6746 11.7512 20.4291C15.6769 14.0053 20.9409 7.49216 27.5432 0.889852L45.7442 15.0759C41.1047 19.7154 37.3575 24.0872 34.5024 28.1913C31.6474 32.2954 29.5061 36.4888 28.0785 40.7714C26.8295 44.8755 26.2049 49.3365 26.2049 54.1544L15.7661 42.3774H50.0268V91.0917H0.509434ZM62.0715 91.0917V60.5783C62.0715 53.0838 62.9637 46.1246 64.7481 39.7007C66.5325 33.0984 69.3876 26.6746 73.3133 20.4291C77.239 14.0053 82.503 7.49216 89.1053 0.889852L107.306 15.0759C102.667 19.7154 98.9196 24.0872 96.0645 28.1913C93.2094 32.2954 91.0682 36.4888 89.6406 40.7714C88.3916 44.8755 87.767 49.3365 87.767 54.1544L77.3282 42.3774H111.589V91.0917H62.0715Z"
                          fill="#592AC7"
                        />
                      </svg>
                    </motion.div>

                    {/* Testimonial Content */}
                    <motion.div
                      className="w-full lg:w-[55%]"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      <motion.h2
                        className="text-[#592AC7] text-[32px] md:text-[40px] lg:text-6xl leading-[120%] font-semibold font-primary text-center lg:text-left"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
                        Graduates Speak
                      </motion.h2>

                      <p className="font-secondary font-normal text-black text-[18px] md:text-[18px] leading-[28px] md:leading-[30px] mt-4 md:mt-6 lg:mt-9 text-center lg:text-left">
                        {testimonial.testimonial}
                      </p>

                      <p className="font-secondary text-[#592AC7] font-semibold text-[18px] md:text-[18px] leading-[28px] md:leading-[30px] mt-4 lg:mt-8 text-center lg:text-left">
                        {testimonial.name}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* Custom Navigation */}
            <div className="flex flex-row justify-center xl:justify-between gap-x-5 xl:gap-x-0 mt-6 xl:mt-0 xl:absolute xl:left-0 xl:top-1/2 transform xl:-translate-y-1/2 z-10 w-full items-center">
              <div className="swiper-button-prev-b cursor-pointer z-10">
                <svg
                  width="62"
                  height="62"
                  viewBox="0 0 62 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:scale-100 scale-75"
                >
                  <circle
                    cx="31"
                    cy="31"
                    r="31"
                    transform="rotate(180 31 31)"
                    fill="#592AC7"
                  />
                  <path
                    d="M37.5859 42.959L24.4048 30.8943L37.5859 19.0377"
                    stroke="white"
                    strokeWidth={3.5942}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="swiper-button-next-b cursor-pointer z-10">
                <svg
                  width="62"
                  height="62"
                  viewBox="0 0 62 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:scale-100 scale-75"
                >
                  <circle cx="31" cy="31" r="31" fill="#592AC7" />
                  <path
                    d="M24.4141 19.041L37.5952 31.1057L24.4141 42.9623"
                    stroke="white"
                    strokeWidth={3.5942}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Swiper>
        </div>
      </section>

      {/* Key Activities */}
      <section className="bg-white py-16 lg:py-32 md:py-24 overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-16 md:gap-y-24 lg:gap-y-32">
          <motion.h2
            className="text-black text-[40px] md:text-[40px] lg:text-[64px] leading-[120%] font-semibold text-center font-primary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Key Activities
          </motion.h2>

          <div className="flex flex-wrap gap-y-[65px] gap-x-4 lg:justify-between justify-center">
            {/* Card Items */}
            {[
              {
                img: "/images/bridge/bridge-icon1.png",
                text: (
                  <>
                    <span style={{ fontWeight: "bold" }}>
                      Domain specific technical training
                    </span>{" "}
                    with a focus on skills directly applicable to the industry.
                  </>
                ),
              },
              {
                img: "/images/bridge/bridge-key2.png",
                text: (
                  <>
                    <span style={{ fontWeight: "bold" }}>
                      Leadership coaching sessions
                    </span>{" "}
                    along with mental wellbeing workshops.
                  </>
                ),
              },
              {
                img: "/images/bridge/bridge-key3.png",
                text: (
                  <>
                    <span style={{ fontWeight: "bold" }}>
                      Development of soft skills
                    </span>{" "}
                    through workshops on English communication.
                  </>
                ),
              },
              {
                img: "/images/bridge/bridge-icon4.png",
                text: (
                  <>
                    <span style={{ fontWeight: "bold" }}>
                      Basic professional skills
                    </span>{" "}
                    like resume building, presentation skills, job application
                    writing.
                  </>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex lg:flex-row flex-col gap-x-4  md:gap-y-[65px] gap-y-8  items-center flex-wrap lg:flex-nowrap justify-center lg:w-[49%] w-full lg:max-w-[500px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              >
                <Image src={item.img} alt="" width={104} height={104} />
                <p className="font-secondary font-medium text-black text-[18px] leading-[30px] w-full md:w-[320px] lg:w-full text-center  lg:text-left mt-8 md:mt-0">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Impact Report from Homepage */}
      {/* Donation */}
      <div   id="donate"
 className="bg-[#592AC7] py-16 lg:py-32 md:py-24">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-8 md:gap-y-16">
          <motion.h2
            className="text-white text-[40px]  md:text-[40px] lg:text-[64px] leading-[120%] font-semibold text-center font-primary"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Your Support Matters!
          </motion.h2>
          {/* Donate From.... */}
          <div className="flex flex-row gap-x-[72px] gap-y-8 flex-wrap lg:flex-nowrap py-0 ">
            {/* Donate from India */}
            <motion.div
              className="flex flex-col gap-y-16 w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Text */}
              <div className="flex flex-col gap-y-6">
                <p className="font-secondary font-bold text-[18px] md:text-2xl leading-[30px] text-white  text-center lg:text-left">
                  <span className="font-normal">
                    Sponsor a youth or set up a recurring monthly gift that will
                    ensure a steady and reliable source of funding for the
                    program!
                  </span>
                  <br />
                  <br />
                  Per person cost for the program:
                  <br />
                  <br />
                  <span className="text-[#FFCA2D]">$220</span>{" "}
                  <span className="text-[16px]"> (USD)</span> or{" "}
                  <span className="text-[#FFCA2D]">₹18,800</span>{" "}
                  <span className="text-[16px]">(INR)</span>
                  <br />
                  <br />
                </p>
              </div>
              {/* Donate Button */}
              <div className="flex flex-col gap-y-8 py-12 px-8 md:py-24 md:px-16 bg-white rounded-[15px] justify-center items-center">
                <h2 className="text-[32px] md:text-[40x] font-semibold text-[#592Ac7] text-center font-primary">
                  Donate from India
                </h2>
                <p className="font-secondary font-normal text-[18px] leading-[30px] text-black  text-center lg:text-left">
                  To donate from India, kindly use this link:
                </p>
                <Link href={"https://donate.auroville.org/"}>
                  <div className="px-8 py-[18px] md:px-[61px] rounded-[30px] bg-[#592AC7] justify-center items-center">
                    <p className="font-secondary font-semibold text-[18px] leading-[150%] text-white  text-center lg:text-left">
                      Donate from India
                    </p>
                  </div>
                </Link>
                <div className="font-secondary font-normal text-[18px] leading-[30px] text-black">
                  <p>Please follow these steps on the donation page:</p>
                  <br />
                  <ul className="list-disc ml-5">
                    <li>
                      Select <strong>'Others'</strong> under Projects to donate,
                    </li>
                    <li>
                      Mention Project name as{" "}
                      <strong>'Yuvabe Bridge Program'</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            {/* Donate from Abroad */}
            <div className="w-full lg:w-1/2">
              <motion.div
                className="bg-white p-8 rounded-[30px] md:rounded-[50px] shadow-lg border border-gray-200 w-full lg:max-w-[584px] h-auto flex flex-col justify-between items-center gap-y-8 m-auto"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-[32px] md:text-[40x] font-semibold text-[#592Ac7] text-center font-primary">
                  Donate from Anywhere
                </h2>

                {/* FundraiseUp Widget */}
                <a href="#XXVLPPSW" className=""></a>
              </motion.div>
            </div>
          </div>
          <motion.p
            className="font-secondary font-extrabold text-[#FFCA2D] text-[18px] md:text-[30px] lg:text-[36px] leading-[28px] md:leading-[30px] text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Let’s empower one youth at a time and gift them a better future!
          </motion.p>
        </div>
      </div>
    </main>
  );
}
