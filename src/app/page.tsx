"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import ImpactReport from "@/components/ImpactReport";
import Timeline from "@/components/Timeline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ImArrowUpRight2 } from "react-icons/im";
import Link from "next/link";

const logos = [
  "/images/clientlogo/deep.webp",
  "/images/clientlogo/play.webp",
  "/images/clientlogo/agastya.webp",
  "/images/clientlogo/ness.webp",
  "/images/clientlogo/c3stream.webp",
];

const settings = {
  infinite: true,
  speed: 800,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 2 },
    },
  ],
};

const courses = [
  {
    title: "AI",
    status: "Up Coming",
    image: "/images/home/ai.svg",
    description:
      "Our AI First Full Stack Program is designed to provide hands-on experience. You won’t just learn the theory—you’ll apply it to real-world problems, gaining the kind of practical skills that make you stand out to employers.",
    tagColor: "bg-[#592ac7]",
    arrowColor: "bg-[#33BED4]",
    borderColor: "border-[#33BED4]",
    bgColor: "bg-[#33BED4]/10",
    link: "/bridge/ai",
  },
  {
    title: "Sustainability",
    status: "Up Coming",
    image: "/images/home/sus.svg",
    description:
      "Unlock a comprehensive understanding of sustainability with our 3- month, in-person ‘Corporate Sustainability’ course at Auroville, Tamil Nadu.",
    tagColor: "bg-[#33BED4]",
    arrowColor: "bg-[#91C644]",
    borderColor: "border-[#91C644]",
    bgColor: "bg-[#91C644]/10",
    link: "/bridge/sustainability",
  },
  {
    title: "Digital Marketing",
    status: "Active",
    image: "/images/home/dm.svg",
    description:
      "Yuvabe Education’s Digital Marketing Bridge Program is designed to provide an in-depth understanding of the digital marketing landscape. This 12-week, in-person classroom experience will help you build essential skills through practical training, real-world case studies, and industry mentorship.",
    tagColor: "bg-purple-600",
    arrowColor: "bg-[#FFCA2D]",
    borderColor: "border-[#FFCA2D]",
    bgColor: "bg-[#FFCA2D]/10",
    link: "/bridge/digital-marketing",
  },
  {
    title: "UI/UX Design",
    status: "Active",
    image: "/images/home/UI-UX-Design.jpg",
    description:
      "Our UI/UX program delivers top-tier design thinking education...",
    tagColor: "bg-purple-600",
    arrowColor: "bg-pink-400",
    borderColor: "border-pink-400",
    bgColor: "bg-pink-100",
    link: "/bridge/ui-ux",
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between px-6 sm:px-8 md:px-16 py-12 bg-[#FDF8EE] min-h-[700px] overflow-x-hidden">
        {/* Right Side - Text */}
        <motion.div
          className="w-full md:w-4/5 lg:w-1/2 text-center md:text-center lg:text-start  order-1 md:order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold font-primary text-black leading-tight ">
            Empowering Minds, <br />
            <span className="text-[#592AC7]">Bridging Futures</span>
          </h1>
          <p className="mt-4 text-gray-700 max-w-full md:max-w-xl font-secondary font-normal text-lg md:text-xl ">
            Empowering young adults with practical skills, hands-on experience,
            and a purpose-driven community to thrive in a dynamic world.
          </p>
          <motion.a
            href="/about-us"
            className="mt-6 inline-block px-6 py-3 text-white bg-[#592AC7] rounded-lg shadow-md hover:bg-white hover:text-[#592AC7] transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Know More
          </motion.a>
        </motion.div>

        {/* Left Side - Image */}
        <motion.div
          className="relative w-full md:w-full lg:w-1/2 flex justify-center md:justify-start mt-10 lg:mt-0 order-2 md:order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-[600px] md:max-w-[800px] lg:max-w-[850px]">
            {/* Floating Circle */}
            <motion.div
              className="absolute top-10 left-40 md:top-20 md:left-50 lg:top-20 lg:left-70 transform -translate-x-1/2 w-15 h-15 md:w-20 md:h-20 bg-[#91C644] rounded-full z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating Triangle */}
            <motion.div
              className="absolute bottom-0 left-60  md:bottom-5 md:left-130  lg:bottom-5 lg:left-120 transform -translate-x-1/2 w-0 h-0 
          border-l-[45px] border-r-[45px] 
          border-b-[80px] border-transparent 
          border-b-[#F8A91E] z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Main Image */}
            <Image
              src="/images/home/hero.webp"
              alt="Group working on laptop"
              width={850}
              height={830}
              priority
              className="w-full h-auto object-contain top-12 right-6 md:top-10 md:right-18 lg:top-12 lg:right-16 relative z-0"
            />
          </div>
        </motion.div>
      </section>

      {/* Client Logo Slider */}
      <section className="bg-white pt-12 shadow-lg backdrop-blur-lg flex justify-center items-center overflow-hidden">
        <div className="w-full  px-6 sm:px-8 md:px-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <Slider {...settings}>
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex justify-center px-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                >
                  <Image
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    width={150}
                    height={150}
                    priority
                    className="w-[100px] sm:w-[140px] md:w-[130px] lg:w-[150px] object-contain transition duration-300"
                  />
                </motion.div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </section>

      {/* client logo slider End */}

      {/* Our story */}
      <section className="bg-white py-[120px] md:py-[120px] lg:py-[120px] shadow-md shadow-gray-300 overflow-hidden">
        <div className="container max-w-[1240px]  mx-auto ">
          {/* Centered Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primary font-semibold text-gray-900 mb-6 sm:mb-8 md:mb-10"
          >
            Our Story
          </motion.h2>

          <div className="flex flex-col-reverse lg:flex-row items-center gap-2 sm:gap-8 lg:gap-10">
            {/* Left Side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-left mt-6 lg:mt-0 px-6"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-3 sm:mb-4 font-primary text-center md:text-center lg:text-start">
                Empowering Rural Youth Through Education
              </h3>
              <p className="text-gray-700 text-[14px] sm:text-[18px] mb-3 sm:mb-4 text-center md:text-center lg:text-start leading-7">
                At Yuvabe Education, we believe every young adult carries
                extraordinary potential; what many lack is access. In the
                Villupuram district (Tamil Nadu) , young people often face
                barriers to the skills, exposure, and support needed to grow,
                especially as many are the first generation of learners in their
                families. Our programs bridge this gap through technical
                training, digital literacy, career readiness, and guided
                self-awareness that build both competence and confidence.
              </p>
              <p className="text-gray-700 text-[14px] sm:text-[18px] text-center md:text-center lg:text-start leading-7">
                We place intentional focus on young women, knowing that when one
                woman gains access, she becomes a catalyst for generational
                uplift — strengthening household income, inspiring younger
                siblings, and shifting community attitudes toward education. By
                turning access into agency, Yuvabe Education empowers youth,
                especially women, to rise and create meaningful change. Our
                holistic approach nurtures not only professional success but
                also personal fulfillment, dignity, and purpose.
              </p>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="relative w-full max-w-[420px] sm:max-w-[550px] md:max-w-[650px] lg:max-w-[700px] h-[320px] sm:h-[320px] md:h-[450px] lg:h-[600px]">
                <Image
                  src="/images/home/story.webp"
                  alt="Our Story"
                  width={1200}
                  priority
                  height={900}
                  className="rounded-lg w-full h-full object-contain"
                />
                <motion.div
                  className="absolute bottom-5 left-50 md:bottom-15 md:left-80 lg:bottom-10 lg:left-100 w-10 h-10  md:w-26 md:h-26 sm:h-15 sm:w-15 bg-[#91C644] rotate-45 "
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* our story End */}

      {/* Through program */}
      <section className="bg-[#FFF9EA] py-[120px] overflow-hidden">
        <div className="container  max-w-[1240px] mx-auto flex flex-col md:flex-col lg:flex-row items-center justify-between ">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative lg:w-1/2 flex justify-center items-center mb-10 lg:mb-0 ml-6 md:ml-0"
          >
            <motion.div
              className="absolute top-15 right-10 transform -translate-x-1/2 w-10 h-10 md:w-20 md:h-20 sm:h-12 sm:w-12 bg-[#91C644] rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>

            <Image
              src="/images/home/program.webp"
              alt="Children Learning"
              width={800}
              height={800}
              priority
              className="w-[350px] md:w-[680px] h-auto max-w-full"
            />
          </motion.div>

          {/* Right Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-12 text-center lg:text-left"
          >
            <h2 className="text-2xl md:text-3xl font-semibold font-primary text-gray-900 mb-6">
              Through programs like:
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-4 leading-7 md:leading-8 text-[14px] sm:text-[18px] font-secondary font-regular">
              <li>
                <strong>The STEAM Program (ages 7-14):</strong> Hands-on
                science, technology, engineering, arts, and math that spark
                curiosity and confidence, giving first-generation learners early
                exposure and opening pathways to possibilities they may never
                have imagined.
              </li>
              <li>
                <strong>The Bridge Program (ages 20+):</strong> A transformative
                journey building future-ready skills, workplace confidence, and
                inner clarity for young adults, especially first-generation
                women, empowering them to seize opportunities and become
                catalysts of progress for their families and communities.
              </li>
            </ul>
            <p className="text-gray-700 mt-6 text-[14px] sm:text-[18px] text-center lg:text-left">
              Together, these programs nurture growth from early childhood into
              young adulthood, turning access into opportunity and opportunity
              into empowered lives shaped with clarity and dignity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Join us  */}
      <section className="py-20 overflow-hidden px-12">
        <div className="container  max-w-[1240px] mx-auto flex flex-col md:flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-3/4 lg:w-1/2 space-y-4  text-center lg:text-left"
          >
            <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-semibold font-primary text-black">
              Join Us in This Mission
            </h2>
            <p className="text-[#000000] leading-7 text-sm  md:text-[18px] text-justify font-secondary font-normal">
              Your support can open doors for first-generation learners who
              simply need access to the right opportunities. With your
              encouragement, young people from Auroville and the Villupuram
              district (Tamil Nadu) can gain the skills, confidence, and clarity
              to transform their lives and uplift their families.
            </p>
            <p className="text-[#000000] leading-7 text-sm  md:text-[18px] text-justify font-secondary font-normal">
              We have come this far through the kindness of people who believed
              in their potential. You can be part of the next chapter.
            </p>
            <p className="text-[#000000] leading-7 text-sm  md:text-[18px] mb-6 md:mb-10 text-justify font-secondary font-bold">
              <Link
                href={"/get-involved/donate"}
                className="text-blue-500 cursor-pointer"
              >
                Click here
              </Link>{" "}
              to support a first-generation learner from rural Tamil Nadu.
            </p>

            {/* Button */}
            {/* <motion.a
              href="/get-involved/join-us"
              className="mt-6 mx-auto lg:ml-0 block sm:inline-block px-6 py-3 text-white bg-[#592AC7] rounded-lg shadow-md hover:bg-white hover:text-[#592ac7] transition w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Know More
            </motion.a> */}
          </motion.div>

          {/* Right: Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-4/5 lg:w-1/2 flex justify-center items-center mt-16"
          >
            <div className="relative w-[90%] sm:w-[75%] md:w-full lg:w-full">
              <Image
                src="/images/home/join.webp"
                alt="Join the mission"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full justify-center items-center -mb-20"
              />

              {/* Floating Triangle Decoration */}
              <motion.div
                className="absolute bottom-5 left-5 md:bottom-50 md:left-5 w-0 h-0 rotate-10
    border-l-[30px] sm:border-l-[40px] md:border-l-[46px] 
    border-r-[30px] sm:border-r-[40px] md:border-r-[46px] 
    border-b-[60px] sm:border-b-[75px] md:border-b-[82px] border-transparent 
    border-b-[#F8A91E] z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[#592AC7] text-white py-28 px-4 sm:px-6 lg:px-12">
        <div className="container max-w-[1240px]  mx-auto flex flex-col md:flex-col lg:flex-row items-start justify-between gap-6 md:gap-10">
          {/* Left: Vision & Mission Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6 px-4 sm:px-6 lg:px-0 text-center lg:text-left"
          >
            <h2 className="text-[36px] font-primary font-semibold">
              Our Vision
            </h2>
            <p className="text-[18px] leading-7 font-secondary font-normal text-center md:text-center lg:text-left">
              To nurture a generation of self-aware, skilled, and purpose-driven
              individuals who contribute meaningfully to the world, guided by
              inner exploration and outward impact.
            </p>

            <h2 className="text-[36px] font-primary font-semibold mt-14">
              Our Mission
            </h2>
                 <p className="text-[18px] font-secondary">
              Through Yuvabe Education, we aim to:






            </p>
            <ul className="list-disc pl-5 space-y-2 text-[18px] font-secondary font-normal text-left">
              <li>
                Equip individuals with futuristic skills for career success.
              </li>
              <li>
                Foster self-awareness and inner exploration to uncover true
                purpose.
              </li>
              <li>
                Support holistic development through our unique
                Work-Serve-Evolve model.
              </li>
              <li>
                Provide access to opportunities for lifelong learning,
                emphasizing that age is just a number when it comes to personal
                growth.
              </li>
            </ul>
          </motion.div>
          {/* Right: Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-[90%] sm:max-w-[75%] md:max-w-[600px] lg:max-w-[800px]">
              <Image
                src="/images/home/mission.webp"
                alt="Vision-Mission"
                width={800}
                height={600}
                priority
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work, serve & evolve */}
      <section className="bg-white py-[120px] px-6 min-h-screen flex items-center justify-center relative">
        <div className="container max-w-[1140px] mx-auto text-center relative">
          <h2 className="text-4xl font-semibold font-primary lg:text-[64px] text-[48px]">
            Our Motto
          </h2>

          {/* Centered Zig-Zag Line Image */}
          <div className="absolute top-3/5 left-3/5 transform -translate-x-4/5 -translate-y-1/2 z-[0] hidden md:block">
            <Image
              src="/images/home/plane2.gif"
              alt="Paper Plane"
              width={900}
              height={900}
              priority
            />
          </div>

          <div className="relative z-10 space-y-28 mt-16">
            {/* Work Section */}
            <motion.div
              initial={{ opacity: 0 }} // Only fade in
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col md:flex-row items-center gap-16"
            >
              <div className="md:w-3/4 space-y-4 text-left">
                <h3 className="text-[36px] font-semibold font-primary">Work</h3>
                <p className="text-[#000000] font-secondary font-normal  text-[18px] mb-6 text-wrap">
                  Work comprises higher order skilling and project work in
                  predetermined areas such as AI Full stack, Digital Marketing,
                  Sustainability.
                </p>
                <Button href="/about-us">Read more</Button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/images/home/arjun.png"
                  alt="Work"
                  width={600}
                  height={600}
                  priority
                />
              </div>
            </motion.div>

            {/* Serve Section */}
            <motion.div
              initial={{ opacity: 0 }} // Only fade-in
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
              className="flex flex-col md:flex-row-reverse items-center gap-18"
            >
              <div className="md:w-3/4 space-y-4 text-left ml-auto z-10 ">
                <h3 className="text-[36px] font-semibold font-primary z-10">
                  Serve
                </h3>
                <p className="text-[#000000] font-secondary font-normal  text-[18px] mb-6 z-10">
                  Serve is the commitment to give back to the community through
                  various social programs and projects supporting Auroville
                  units.
                </p>
                <Button href="/get-involved/we-serve">Read more</Button>
              </div>
              <div className="md:w-1/2 flex justify-center relative">
                <motion.div
                  className="absolute top-20 left-10 md:top-5 md:left-5 lg:top-20 lg:left-10 w-20 h-20 bg-[#33BED4] rounded-full"
                  animate={{ y: [0, -10, 0] }} // This keeps bouncing
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
                <Image
                  src="/images/home/hema.png"
                  alt="Serve"
                  width={800}
                  height={800}
                  priority
                />
              </div>
            </motion.div>

            {/* Evolve Section */}
            <motion.div
              initial={{ opacity: 0 }} // Only fade-in
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
              className="flex flex-col md:flex-row items-center gap-16"
            >
              <div className="md:w-1/2 space-y-4 text-left">
                <h3 className="text-[36px] font-semibold font-primary">
                  Evolve
                </h3>
                <p className="text-[#000000] font-secondary font-normal text-[18px] mb-6">
                  Evolve incorporates self-growth through transformative
                  activities that lead to better decision-making, self-
                  compassion, overcoming fear, dealing with challenges and more.
                </p>
                <Button href="/get-involved/we-evolve">Read more</Button>
              </div>
              <div className="w-full md:w-1/2 flex justify-center relative">
                <div className="relative w-full max-w-lg">
                  <Image
                    src="/images/home/priya.png"
                    alt="Evolve"
                    width={800}
                    height={800}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
                <motion.div
                  className="absolute bottom-20 right-5 md:bottom-10 md:right-20 lg:bottom-50 w-0 h-0 rotate-10
    border-l-[30px] sm:border-l-[40px] md:border-l-[46px] 
    border-r-[30px] sm:border-r-[40px] md:border-r-[46px] 
    border-b-[60px] sm:border-b-[75px] md:border-b-[82px] border-transparent 
    border-b-[#F8A91E] z-10"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Timeline />
      <ImpactReport />

      {/* course cards slider */}

      <section className="py-24 bg-[#FDF7E6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          {/* Section Title */}
          <motion.h2
            className="text-2xl md:text-4xl lg:text-[48px] font-semibold font-primary text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Enroll On Our Latest Bridge Courses
          </motion.h2>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000 }}
            className="w-full"
          >
            {courses.map((course, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                {/* Course Card */}
                <motion.div
                  className={`w-full max-w-[360px] md:max-w-[370px] h-auto min-h-[520px] flex flex-col border-2 rounded-[20px] shadow-lg overflow-hidden ${course.borderColor} ${course.bgColor}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {/* Image */}
                  <div className="relative w-full h-[180px] sm:h-[200px]">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover rounded-t-[18px]"
                    />
                    <span
                      className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded ${
                        course.status === "Active"
                          ? "bg-[#592ac7] text-white"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      {course.status}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold">{course.title}</h3>
                    <p className="text-[#000000] text-sm mt-2 flex-grow">
                      {course.description}
                    </p>
                    <div className="flex justify-end mt-4">
                      <Link href={course.link} className="mt-4">
                        <div
                          className={`w-10 h-10 flex items-center justify-center rounded-full text-white ${course.arrowColor}`}
                        >
                          <ImArrowUpRight2 />
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Link href="/bridge/bridge-program" passHref>
              <motion.button
                className="px-6 py-3 bg-[#592Ac7] text-white rounded-lg font-semibold shadow-md hover:bg-violet-400 transition"
                whileHover={{ scale: 1.05 }}
              >
                View more
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action section */}
      <section className="flex justify-center items-center py-24 px-6">
        <motion.div
          className="bg-[#592AC7] text-white rounded-[30px] shadow-lg w-[960px] h-[340px] max-w-full p-8 text-center 
                   flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl lg:text-[64px] font-semibold font-primary">
            Let’s Grow Together
          </h2>
          <p className="text-sm lg:text-[18px] text-gray-200 mt-2">
            Sign Up for Newsletter
          </p>

          <div className="mt-6 flex justify-center items-center gap-6 ">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              name="newsletter"
              className="mt-6 flex justify-center items-center gap-6"
            >
              <input
                type="hidden"
                name="access_key"
                value="b46383fd-39fb-4a3c-80a3-eae125be6ead"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Enter Your email"
                className="w-2/3 px-4 py-3 rounded-lg border border-gray-300 bg-[#FFFFFF] text-black focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#FFCA2D] hover:bg-yellow-600 text-black font-medium px-6 py-3 rounded-lg"
              >
                Send
              </button>
            </form>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
