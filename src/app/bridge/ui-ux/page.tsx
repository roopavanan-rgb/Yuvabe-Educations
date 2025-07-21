"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import FaqSection from "@/components/uiux/FaqSection";
import CustomSwiper from "@/components/uiux/CustomSwiper";
import HorizontalSwiper from "@/components/uiux/HorizontalSwiper";
import HorizontalScroll from "@/components/uiux/HorizontalScroll";

// Define slide data array
const slidesData = [
  {
    title: "Introduction to UI/UX Design",
    subtitle: "Understanding design principles and industry trends.",
    image: "/images/uiux/ui-slide1.png",
    alt: "Slide Image 1",
  },
  {
    title: "User Research & Analysis",
    subtitle: "Conducting research to understand user needs and behaviours.",
    image: "/images/uiux/ui-slide2.png",
    alt: "Slide Image 2",
  },
  {
    title: "Wireframing & Prototyping",
    subtitle: "Creating low-fidelity and high-fidelity prototypes.",
    image: "/images/uiux/ui-slide3.png",
    alt: "Slide Image 3",
  },
  {
    title: "Information Architecture",
    subtitle: "Structuring digital experiences for usability.",
    image: "/images/uiux/ui-slide4.png",
    alt: "Slide Image 4",
  },
  {
    title: "User Interface (UI) Design",
    subtitle: "Designing aesthetically pleasing and functional interfaces.",
    image: "/images/uiux/ui-slide5.png",
    alt: "Slide Image 5",
  },
  {
    title: "Interaction Design & Microinteractions",
    subtitle: "Enhancing user experience with intuitive interactions.",
    image: "/images/uiux/ui-slide6.png",
    alt: "Slide Image 6",
  },
  {
    title: "Usability Testing & User Feedback",
    subtitle: "Iterating designs based on user testing insights.",
    image: "/images/uiux/ui-slide7.png",
    alt: "Slide Image 7",
  },
  {
    title: "Mobile & Web Design",
    subtitle: "Optimizing designs for different platforms and devices.",
    image: "/images/uiux/ui-slide8.png",
    alt: "Slide Image 8",
  },
  {
    title: "Design Tools & Software",
    subtitle: "Mastering Figma, Adobe XD, and other essential tools.",
    image: "/images/uiux/ui-slide9.png",
    alt: "Slide Image 9",
  },
  {
    title: "Design Thinking & Problem-Solving",
    subtitle: "Applying design methodologies to real-world challenges.",
    image: "/images/uiux/ui-slide10.png",
    alt: "Slide Image 10",
  },
  {
    title: "AI & Emerging Technologies in UI/UX",
    subtitle:
      "Leveraging AI for design automation and user experience enhancement.",
    image: "/images/uiux/ui-slide11.png",
    alt: "Slide Image 11",
  },
  {
    title: "Portfolio & Resume Development",
    subtitle: "Showcasing your work effectively for job placements.",
    image: "/images/uiux/ui-slide12.png",
    alt: "Slide Image 12",
  },
];
export default function uiux() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FEF4EB] pb-16 xl:pb-32 md:pb-24 xl:pt-24 pt-16 md:pt-24 overflow-hidden">
        <motion.div
          className="max-w-[1240px] lg:min-h-[460px] xl:min-h-[611px] flex flex-col-reverse lg:flex-row m-auto px-5 md:px-8 xl:px-0 gap-y-6 md:gap-y-12 lg:gap-y-12 z-10"
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Left */}
          <motion.div
            className="flex flex-col gap-y-8 lg:max-w-[454px] z-10 justify-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
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
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdh8oX44utivqxskIw5l78wbAxc5z1vRuK58I6IBXCA9rxJ5w/viewform"
                target="_blank"
                className="min-w-[194px] max-w-64 md:max-w-full"
              >
                <div className="bg-[#F48F38] border-1 border-black py-2.5 px-6 rounded-[94px]">
                  <p className="font-albert-sans text-[14px] md:text-[16px] leading-normal text-white text-center">
                    Apply Now
                  </p>
                </div>
              </Link>
              {/* Download Brochure */}
              <Link
                href={"../docs/UIUX Brouchure.pdf"}
                target="_blank"
                className="min-w-[194px]  max-w-64 md:max-w-full"
              >
                <div className="bg-transparent border-1 border-black py-2.5 px-6 rounded-[94px]">
                  <p className="font-albert-sans text-[14px] md:text-[16px] leading-normal text-center">
                    Download Brochure
                  </p>
                </div>
              </Link>
            </div>
          </motion.div>
          {/* Right */}
          <motion.div
            className="lg:w-full flex flex-col justify-center items-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
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
          </motion.div>
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
              <span className="font-bold"> | Start Date:</span> August, 2025.{" "}
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
          width={697}
          height={697}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full md:h-full lg:h-auto object-cover z-1 max-w-full"
        />
      </section>

      {/* 12 Immersive Module */}
      <section className="bg-white pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24 relative overflow-hidden">
        <div className="flex flex-col m-auto px-5 md:px-0 gap-y-6 md:gap-y-12 lg:gap-y-12 xl:gap-y-16 z-10 items-center relative">
          <motion.h2
            className="font-albert-sans leading-[130%] text-center bg-[linear-gradient(180deg,_#FFE7D3_-6.84%,_#EE8A33_90.74%)] bg-clip-text text-transparent font-bold text-3xl md:text-5xl lg:text-8xl xl:text-[115px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            12 Immersive Module
          </motion.h2>
          <HorizontalSwiper />
        </div>
        {/* Blur Effects */}
        <div className="absolute w-[320px] h-[320px] left-[10%] bottom-0 bg-gradient-to-b from-orange-500/60 to-yellow-400/60 filter blur-[100px] scale-50 md:scale-75 lg:scale-100 rounded-[50%]"></div>
        <div className="absolute w-[206px] h-[201px] right-[10%] bottom-[4%] bg-[linear-gradient(180deg,rgba(243,128,47,0.6)_0%,rgba(247,200,89,0.6)_100%)] filter blur-[100px] scale-50 md:scale-75 lg:scale-100 rounded-[50%]"></div>
      </section>

      {/* What You’ll Learn */}
      <section className="bg-gradient-to-b from-[rgba(243,128,47,0.8)] to-[rgba(247,200,89,0.24)] pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24 relative overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-6 md:gap-y-12 lg:gap-y-12 xl:gap-y-16 z-10 items-center">
          {/* Heading */}
          <div>
            <motion.h2
              className="font-albert-sans leading-[130%] text-center text-white font-bold text-3xl md:text-5xl lg:text-8xl xl:text-[115px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              What You’ll Learn
            </motion.h2>
            <motion.p
              className="font-secondary lg:text-2xl md:text-[18px] text-[16px] text-[#020406] leading-9 text-center max-w-[841px] m-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
            >
              This program offers a structured curriculum covering the entire
              UI/UX design landscape across 12 immersive modules:
            </motion.p>
          </div>

          <CustomSwiper />

          <HorizontalScroll />
        </div>
      </section>

      {/* Evolve Program */}
      <section className="bg-white pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24 relative overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-6 md:gap-y-12 lg:gap-y-12 xl:gap-y-16 z-10">
          {/* Heading */}
          <div>
            <motion.h2
              className="font-albert-sans leading-[130%] text-center bg-[linear-gradient(180deg,_#FFE7D3_-6.84%,_#EE8A33_90.74%)] bg-clip-text text-transparent font-bold text-3xl md:text-5xl lg:text-8xl xl:text-[115px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Evolve Program
            </motion.h2>
            <motion.p
              className="font-secondary md:text-[18px] text-[16px] text-[#020406] leading-9 text-center pt-2 md:pt-4 max-w-[841px] m-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
            >
              The Evolve Program is a transformative journey that empowers
              individuals to unlock their true potential. It focuses on personal
              growth, confidence-building, and problem-solving, helping
              participants develop skills beyond technical expertise.
              <span className="font-bold"> Through Evolve, you’ll learn:</span>
            </motion.p>
          </div>
          {/* Blocks */}
          <motion.div
            className="flex flex-col gap-y-6 md:gap-y-12 lg:gap-y-12 xl:gap-y-16 z-10"
            initial="hidden"
            animate="visible"
            whileInView="visible" // Trigger animation when in view
            viewport={{ once: true, amount: 0.45 }} // Trigger when 25% of the block is in view
            transition={{
              visible: {
                transition: {
                  staggerChildren: 0.5, // Stagger delay between each block
                },
              },
            }}
          >
            {/* Individual Blocks */}
            {/* Block 1 */}
            <motion.div
              className="flex flex-row custom-glass-ui custom-glass-ui-border border-[2px] md:gap-x-8 xl:gap-x-12 gap-y-4 justify-center md:justify-between items-center flex-wrap md:flex-nowrap p-5 md:pl-5 md:p-0 max-w-[1115px] m-auto"
              initial={{ opacity: 0, y: 50, scale: 0.85 }} // Initial state for the block
              whileInView={{ opacity: 1, y: 0, scale: 1 }} // Animate to this state when in view
              transition={{ duration: 1.3, ease: "easeInOut" }} // Animation properties
              viewport={{ once: true }} // Trigger only once when in view
            >
              {/* Text */}
              <div className="md:max-w-80 lg:max-w-[475px] lg:ml-12 xl:ml-[94px]">
                <h3 className="font-albert-sans text-2xl md:text-3xl lg:text-[40px] leading-[120%] text-black  text-center md:text-left">
                  Unlock Your Personal Growth with The Evolve Program
                </h3>
                <p className="font-secondary text-[14px] text-[#020406] leading-6 text-center md:text-left mt-2 max-w-md md:max-w-full m-auto">
                  Enhance your skills, broaden your perspective, and accelerate
                  your growth with expert-led learning and real-world
                  experiences.
                </p>
              </div>
              {/* Image */}
              <div>
                <Image
                  src="/images/uiux/uiux01.png"
                  alt="Bridge Image"
                  width={486}
                  height={365}
                  className="object-cover rounded-br-[35px] rounded-tr-[35px] rounded-bl-[35px] md:rounded-bl-none rounded-tl-[35px] md:rounded-tl-none"
                />
              </div>
            </motion.div>
            {/* Block 2 */}
            <motion.div
              className="flex flex-row custom-glass-ui custom-glass-ui-border border-[2px] md:gap-x-8 xl:gap-x-12 gap-y-4 justify-center md:justify-between items-center flex-wrap-reverse md:flex-nowrap p-5 md:pr-5 md:p-0 max-w-[1115px] m-auto"
              initial={{ opacity: 0, y: 50, scale: 0.85 }} // Initial state for the block
              whileInView={{ opacity: 1, y: 0, scale: 1 }} // Animate to this state when in view
              transition={{ duration: 1.3, ease: "easeInOut" }} // Animation properties
              viewport={{ once: true }} // Trigger only once when in view
            >
              {/* Image */}
              <div>
                <Image
                  src="/images/uiux/uiux02.png"
                  alt="Bridge Image"
                  width={486}
                  height={365}
                  className="object-cover rounded-bl-[35px] rounded-tl-[35px] rounded-br-[35px] md:rounded-br-none rounded-tr-[35px] md:rounded-tr-none"
                />
              </div>
              {/* Text */}
              <div className="md:max-w-80 lg:max-w-[462px] lg:mr-12 xl:mr-[94px]">
                <h3 className="font-albert-sans text-2xl md:text-3xl lg:text-[40px] leading-[120%] text-black  text-center md:text-left">
                  Cultivating Leadership and Growth
                </h3>
                <p className="font-secondary text-[14px] text-[#020406] leading-6 text-center md:text-left mt-2 max-w-md md:max-w-full m-auto">
                  Cultivate leadership and growth through expert guidance,
                  hands-on learning, and transformative experiences.
                </p>
              </div>
            </motion.div>
            {/* Block 3 */}
            <motion.div
              className="flex flex-row custom-glass-ui custom-glass-ui-border border-[2px] md:gap-x-8 xl:gap-x-12 gap-y-4 justify-center md:justify-between items-center flex-wrap md:flex-nowrap p-5 md:pl-5 md:p-0 max-w-[1115px] m-auto"
              initial={{ opacity: 0, y: 50, scale: 0.85 }} // Initial state for the block
              whileInView={{ opacity: 1, y: 0, scale: 1 }} // Animate to this state when in view
              transition={{ duration: 1.3, ease: "easeInOut" }} // Animation properties
              viewport={{ once: true }} // Trigger only once when in view
            >
              {/* Text */}
              <div className="md:max-w-80 lg:max-w-[475px] lg:ml-12 xl:ml-[94px]">
                <h3 className="font-albert-sans text-2xl md:text-3xl lg:text-[40px] leading-[120%] text-black  text-center md:text-left">
                  Building Confidence through communication
                </h3>
                <p className="font-secondary text-[14px] text-[#020406] leading-6 text-center md:text-left mt-2 max-w-md md:max-w-full m-auto">
                  Developing confidence through communication with expert
                  support, hands-on practice, and transformative experiences.
                </p>
              </div>
              {/* Image */}
              <div>
                <Image
                  src="/images/uiux/uiux03.png"
                  alt="Bridge Image"
                  width={486}
                  height={365}
                  className="object-cover rounded-br-[35px] rounded-tr-[35px] rounded-bl-[35px] md:rounded-bl-none rounded-tl-[35px] md:rounded-tl-none"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
        {/* Images */}
        <Image
          src="/images/uiux/ui-evolve1.png"
          alt="Bridge Image"
          width={676}
          height={676}
          className="absolute top-[10%] right-0 z-1 max-w-[50%] md:max-w-full"
        />
        <Image
          src="/images/uiux/ui-evolve2.png"
          alt="Bridge Image"
          width={484}
          height={484}
          className="absolute bottom-[10%] left-0 z-1 max-w-[50%] md:max-w-full"
        />
      </section>

      {/* Who Should Apply?*/}
      <section className="bg-gradient-to-b from-[rgba(243,128,47,0.8)] to-[rgba(247,200,89,0.24)] pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24 relative overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-6 md:gap-y-12 lg:gap-y-12 xl:gap-y-16 z-10 items-center">
          {/* Heading */}
          <div>
            <motion.h2
              className="font-albert-sans leading-[130%] text-center text-white font-bold text-3xl md:text-5xl lg:text-8xl xl:text-[115px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Who Should Apply?
            </motion.h2>
            <motion.p
              className="font-secondary md:text-[18px] text-[16px] text-[#020406] leading-9 text-center pt-2 md:pt-4 max-w-[841px] m-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              This course is ideal for{" "}
              <span className="font-bold">Aspiring UI/UX Designers</span>{" "}
              looking to build a strong foundation in the field.
            </motion.p>
          </div>
          {/* Boxes*/}
          <div className="flex flex-row justify-between w-full xl:w-[1115px] flex-wrap xl:flex-nowrap gap-4 xl:gap-x-0">
            {/* Individual Boxes */}
            {/* Box 1 */}
            <motion.div
              className="flex flex-col py-6 md:py-12 px-3 md:px-7 gap-2.5 bg-[rgba(255,255,255,0.4)] shadow-[4px_4px_25px_rgba(0,0,0,0.03)] backdrop-blur-[35px] rounded-[30px] lg:w-[30%] md:w-[45%] w-full xl:w-[351px]"
              initial={{ opacity: 0, y: 50 }} // Initial state: opacity 0 and translate from below
              whileInView={{
                opacity: 1, // Animate to opacity 1
                y: 0, // Animate to normal position
              }}
              viewport={{ once: true, amount: 0.45 }} // Trigger only once when it's in the view
              transition={{
                delay: 0.2, // Stagger each box with a 0.2s delay
                type: "spring", // Spring animation for a natural effect
                stiffness: 100,
                duration: 1.8,
              }}
            >
              {/* Icon */}
              <svg
                width="79"
                height="84"
                viewBox="0 0 79 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-auto"
              >
                <path
                  d="M55.1539 11.6051C51.017 2.85059 33.0337 1.66164 28.5184 7.9203C27.8482 8.84875 27.5721 9.80614 27.443 10.454C26.5368 10.5988 24.9337 10.9995 23.6824 12.2954C21.6942 14.3571 21.9079 17.3205 22.0704 19.5871C22.1706 20.9675 22.5158 23.2385 23.8361 25.8324C22.8987 26.5916 22.3888 27.3909 22.1083 27.9431C20.8682 30.3856 21.3914 33.565 22.941 35.2282C23.3685 35.6868 24.121 35.8917 24.5775 36.2368C25.7909 37.1519 25.7152 38.6414 26.2629 40.0107C31.2659 52.5169 47.9311 52.3387 52.7003 39.768C52.9162 39.2025 52.9073 37.0272 54.2878 36.2368C54.5794 36.0698 54.6729 36.1077 55.0002 35.9585C56.5142 35.2616 57.0286 33.2711 57.2646 32.3516C57.5941 31.0758 58.2709 28.4485 56.728 26.6718C56.1981 26.0617 55.568 25.7367 55.116 25.5585C55.2451 23.6304 55.3743 21.7023 55.5034 19.7741C56.6367 15.5616 55.7706 12.9143 55.1539 11.6074V11.6051Z"
                  fill="#F48F38"
                />
                <path
                  d="M78.0808 73.1142C78.0207 74.7551 77.0187 76.2134 75.5003 76.8369C68.0326 79.8983 56.8757 83.3738 43.0292 83.926C25.7182 84.614 11.8895 80.4215 3.54684 77.0773C2.00834 76.4606 0.988597 74.9956 0.921802 73.3368C0.870593 72.0766 0.939609 70.665 1.22237 69.151C2.65178 61.5186 8.4518 57.2059 10.0883 56.0726L23.8301 49.4399L32.2507 67.2585L32.6181 67.0492L36.7349 55.8255C37.0711 55.2822 38.7677 55.8834 39.4223 55.8878C39.9789 55.8923 41.9137 55.4448 42.1542 55.6162L46.4357 66.7642L54.932 49.293C61.7139 53.1314 70.1211 54.8837 74.7878 61.5943C77.2302 65.1077 77.7646 68.846 77.7646 68.846C78.0607 70.4223 78.1275 71.8696 78.083 73.1119L78.0808 73.1142Z"
                  fill="#F48F38"
                />
                <path
                  d="M61.8821 23.5505C61.5058 22.8447 61.0004 22.5642 60.8824 22.2458C60.5084 21.2238 60.3325 18.7769 59.9517 17.3965C53.5238 -5.93265 24.7665 -5.75008 18.637 17.6548C18.2741 19.0419 18.1828 20.9722 17.8288 22.1545C17.713 22.5419 16.936 23.1186 16.6599 23.7576C15.9986 25.2939 16.0632 31.5214 16.1945 33.4539C16.2524 34.3267 16.4595 35.3732 16.9048 36.0879C17.3033 36.7269 18.1628 37.1143 18.3787 37.4995C18.6392 37.967 18.7216 38.94 18.9131 39.5144C20.436 44.0787 22.6135 47.748 25.862 50.8517C26.2828 51.2525 27.347 51.867 27.6164 52.2633C27.9237 52.7175 27.9304 53.577 28.4603 54.2449C29.46 55.5051 32.0293 56.3935 33.0402 54.8037C34.1222 53.1027 32.3366 50.6669 30.8649 50.2751C30.1235 50.0769 29.3242 50.3686 28.6473 50.0658C28.1196 49.8298 26.4119 48.1666 25.9265 47.6389C23.4774 44.9693 21.6183 41.289 20.603 37.5663C21.1106 37.2635 21.8521 36.7135 22.422 35.7495C22.9341 34.8811 23.1791 33.897 23.1746 30.7599C23.1679 26.5073 23.1412 24.3521 21.9856 22.8848C21.3644 22.0966 20.6498 21.6847 20.1666 21.4665L20.1332 21.2439C21.222 13.3955 26.1403 6.58022 32.4835 3.83273C44.1993 -1.24366 56.7189 7.55097 58.6448 21.8183C58.3197 21.9341 57.8677 22.1434 57.4202 22.5486C55.5611 24.2318 55.6813 27.576 55.7793 30.397C55.8906 33.5252 55.9619 35.5691 57.3133 36.7291C58.0793 37.3881 59.3216 37.8179 60.515 37.2701C61.6461 36.7514 62.4521 35.4823 62.628 33.966C62.5901 31.1896 62.55 28.4154 62.5122 25.639C62.4498 25.1091 62.3007 24.3342 61.8843 23.555L61.8821 23.5505Z"
                  fill="#F48F38"
                />
              </svg>
              <h4 className="font-albert-sans text-black font-medium leading-normal lg:text-2xl md:text-2xl text-xl text-center md:text-left">
                Marketing & Product Professionals
              </h4>
              <p className="font-secondary md:text-[18px] text-[16px] text-[#020406] leading-normal text-center md:text-left">
                Aiming to enhance user experience in digital products.
              </p>
            </motion.div>
            {/* Box 2 */}
            <motion.div
              className="flex flex-col py-6 md:py-12 px-3 md:px-7 gap-2.5 bg-[rgba(255,255,255,0.4)] shadow-[4px_4px_25px_rgba(0,0,0,0.03)] backdrop-blur-[35px] rounded-[30px] lg:w-[30%] md:w-[45%] w-full xl:w-[351px]"
              initial={{ opacity: 0, y: 50 }} // Initial state: opacity 0 and translate from below
              whileInView={{
                opacity: 1, // Animate to opacity 1
                y: 0, // Animate to normal position
              }}
              viewport={{ once: true, amount: 0.45 }} // Trigger only once when it's in the view
              transition={{
                delay: 2 * 0.2, // Stagger each box with a 0.2s delay
                type: "spring", // Spring animation for a natural effect
                stiffness: 100,
                duration: 1.8,
              }}
            >
              {/* Icon */}
              <svg
                width="75"
                height="84"
                viewBox="0 0 75 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-auto"
              >
                <path
                  d="M38.0553 81.0724C37.6543 80.8846 37.5325 80.3214 37.3685 79.9614C33.3564 71.1862 30.164 62.0862 26.1829 53.2955C25.7686 49.0416 26.5307 44.7854 26.287 40.5402C26.2759 40.3547 26.4067 40.0896 26.1054 40.1338C25.3942 41.5695 23.068 42.6473 21.5128 43.3453C17.2481 45.2624 9.96607 46.3999 7.05945 49.6644C3.17584 54.0244 0.995869 66.5081 0.710081 72.105C0.614818 74.0001 0.442017 76.9465 2.51121 78.0707C4.17277 78.9741 8.12064 79.9923 10.099 80.4959C28.7882 85.2535 48.3392 85.2491 66.8933 79.9636C68.1672 79.6014 72.2081 78.455 73.0499 77.7858C74.4634 76.6616 74.3814 73.671 74.3017 72.105C74.0114 66.3778 71.9644 54.6959 68.2669 50.0421C64.7488 45.6158 55.2402 44.9643 50.3974 41.6821C49.7925 41.2735 49.2874 40.7478 48.7291 40.2972L50.3375 52.6727L38.0553 81.0724ZM43.3922 45.3972C39.8586 46.4154 36.2409 46.5832 32.725 45.3972L37.8825 52.7169C37.8825 53.2558 34.597 54.5876 34.0986 55.089C33.9169 55.2723 33.784 55.3982 33.8128 55.6677L37.8781 78.1105L42.2801 55.4888C42.3089 55.3408 42.2025 55.2768 42.1073 55.1796C41.6886 54.7511 38.0486 53.0857 38.0553 52.8715L43.3944 45.395L43.3922 45.3972Z"
                  fill="white"
                />
                <path
                  d="M36.2173 0.0206703C38.1979 0.203994 40.5506 0.897532 42.4714 1.41879C51.5568 3.88814 56.6611 7.47067 55.8968 16.7053C55.8082 17.7898 55.1768 19.2542 55.1546 20.1686C55.1391 20.7959 55.631 21.2973 55.7151 21.9687C55.8902 23.369 55.4404 25.8119 54.8821 27.1437C54.6052 27.8086 53.9893 28.2967 53.7789 28.787C52.2015 32.4778 52.135 34.4237 49.1664 37.8163C38.9002 49.5534 26.4783 42.6666 22.2912 30.7992C22.0674 30.1653 22.0564 29.2906 21.8215 28.7517C21.5867 28.2127 20.911 27.6009 20.6341 26.8544C20.1555 25.5755 19.6349 23.0068 19.9296 21.7103C20.0758 21.0631 20.8623 20.3431 20.9066 20.1399C21.0373 19.5325 20.2375 15.9897 20.2087 14.9052C20.16 13.0632 20.3948 11.0245 21.1325 9.30391C23.0489 4.83126 29.4935 0.175278 34.9324 0.0184594C35.3333 0.0074158 35.834 -0.0168801 36.2195 0.0184594L36.2173 0.0206703Z"
                  fill="#F48F38"
                />
                <path
                  d="M38.0553 81.0724L50.3375 52.6727L48.7291 40.2972C49.2874 40.7478 49.7925 41.2713 50.3974 41.6821C55.2425 44.9643 64.7488 45.6158 68.2669 50.0421C71.9644 54.6937 74.0114 66.3778 74.3017 72.105C74.3814 73.671 74.4634 76.6616 73.0499 77.7858C72.2081 78.455 68.1672 79.6014 66.8933 79.9636C48.3392 85.2491 28.7882 85.2535 10.099 80.4959C8.12064 79.9923 4.17277 78.9741 2.51121 78.0707C0.442017 76.9465 0.614818 74.0001 0.710081 72.105C0.993654 66.5081 3.17362 54.0266 7.05945 49.6644C9.96607 46.4021 17.2481 45.2646 21.5128 43.3453C23.068 42.6451 25.3942 41.5695 26.1054 40.1338C26.4067 40.0896 26.2759 40.3547 26.287 40.5402C26.5329 44.7854 25.7708 49.0416 26.1829 53.2955C30.164 62.0862 33.3564 71.1862 37.3685 79.9614C37.5325 80.3214 37.6565 80.8846 38.0553 81.0724Z"
                  fill="#F48F38"
                />
                <path
                  d="M43.3921 45.3984L38.0529 52.875C38.0485 53.0892 41.6862 54.7546 42.1049 55.1831C42.198 55.278 42.3065 55.3421 42.2777 55.4923L37.8757 78.114L33.8104 55.6712C33.7838 55.4017 33.9145 55.2758 34.0962 55.0925C34.5947 54.5911 37.8824 53.2593 37.8801 52.7203L32.7227 45.4006C36.2407 46.5867 39.8585 46.4189 43.3899 45.4006L43.3921 45.3984Z"
                  fill="#F48F38"
                />
              </svg>

              <h4 className="font-albert-sans text-black font-medium leading-normal lg:text-2xl md:text-2xl text-xl text-center md:text-left">
                Entrepreneurs & Business Owners
              </h4>
              <p className="font-secondary md:text-[18px] text-[16px] text-[#020406] leading-normal text-center md:text-left">
                Who want to improve their app or website’s usability.
              </p>
            </motion.div>
            {/* Box 3 */}
            <motion.div
              className="flex flex-col py-6 md:py-12 px-3 md:px-7 gap-2.5 bg-[rgba(255,255,255,0.4)] shadow-[4px_4px_25px_rgba(0,0,0,0.03)] backdrop-blur-[35px] rounded-[30px] lg:w-[30%]  md:w-[45%] w-full xl:w-[351px]"
              initial={{ opacity: 0, y: 50 }} // Initial state: opacity 0 and translate from below
              whileInView={{
                opacity: 1, // Animate to opacity 1
                y: 0, // Animate to normal position
              }}
              viewport={{ once: true, amount: 0.45 }} // Trigger only once when it's in the view
              transition={{
                delay: 3 * 0.2, // Stagger each box with a 0.2s delay
                type: "spring", // Spring animation for a natural effect
                stiffness: 100,
                duration: 1.8,
              }}
            >
              {/* Icon */}
              <svg
                width="71"
                height="84"
                viewBox="0 0 71 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-auto"
              >
                <path
                  d="M35.986 0C36.8368 0.428482 37.7517 0.744324 38.6157 1.14409C45.5278 4.33783 52.9362 7.89379 59.6821 11.4056C60.2958 11.7258 61.3148 12.1477 61.3924 12.9207C61.5452 14.4204 59.2567 14.268 59.1327 15.3017C59.0086 16.3353 58.9599 21.2342 59.1459 22.2016C59.2523 22.7559 59.9302 22.8089 59.9612 23.8073C59.9922 24.8056 59.3431 25.0022 59.3165 25.3997C59.2501 26.4643 60.1584 28.9667 60.2559 30.2455C60.2714 30.4487 60.3046 30.6276 60.2426 30.8308C59.9834 31.6856 56.5362 31.7916 56.2726 30.9965C55.989 30.1395 57.1897 26.5328 57.2008 25.3997C57.1809 25.0706 56.7533 24.8807 56.6425 24.5405C56.1729 23.1049 57.3758 22.4909 57.3758 22.3672V15.8737L51.9436 18.555C51.5803 19.5247 51.8462 20.5694 51.7443 21.5633C51.6556 22.4224 50.7828 27.0408 50.9822 27.3809C51.0774 27.5443 51.5781 27.8646 51.8329 28.3726C52.595 29.901 52.2582 33.923 51.0486 35.2173C50.6454 35.648 49.9365 35.8401 49.5067 36.1648C48.3657 37.024 48.4876 38.2299 48.0113 39.4822C43.5162 51.292 27.8089 51.4598 23.0968 39.7097C22.5806 38.4243 22.6515 37.024 21.5083 36.1648C21.0785 35.8401 20.3696 35.648 19.9664 35.2173C18.759 33.9252 18.4156 29.9054 19.1821 28.3726C19.4369 27.8646 19.9354 27.5443 20.0328 27.3809C20.2322 27.0408 19.3594 22.4224 19.2707 21.5633C19.1666 20.534 19.4591 19.4363 19.0204 18.4468C16.4638 16.7793 13.0477 15.8737 10.5376 14.2393C8.88268 13.1615 9.59826 12.3332 11.0095 11.569C17.6579 7.96447 25.4916 4.34667 32.3971 1.14851C33.2611 0.748742 34.1783 0.4329 35.0268 0.00441829H35.9927L35.986 0Z"
                  fill="#F48F38"
                />
                <path
                  d="M0.925781 62.8131C1.39102 58.9369 8.48477 55.0695 11.2695 53.6427C13.228 52.6377 15.2817 51.8934 17.2246 50.8222C19.1985 49.7355 21.0085 48.2933 22.9514 47.1713C24.0082 46.5617 24.5066 46.0935 25.5324 47.2221C28.182 52.238 29.8724 58.917 32.954 63.5331C34.9767 66.5656 36.0201 66.57 38.045 63.5331C41.1244 58.9148 42.817 52.238 45.4666 47.2221C45.9585 46.7384 46.5478 46.2591 47.1947 46.6633C52.4673 50.8995 58.9496 52.6488 64.3929 56.282C65.9282 57.3069 70.0732 60.5514 70.0732 62.8131V72.9708C70.0732 74.8945 69.0564 76.6151 67.5189 77.2909C60.3166 80.4604 49.173 84.1179 35.3444 83.9964C21.6044 83.875 10.5717 80.0716 3.43363 76.805C1.9205 76.1137 0.925781 74.4086 0.925781 72.5047V62.8131Z"
                  fill="#F48F38"
                />
              </svg>

              <h4 className="font-albert-sans text-black font-medium leading-normal lg:text-2xl md:text-2xl text-xl text-center md:text-left">
                Students & Career Changers
              </h4>
              <p className="font-secondary md:text-[18px] text-[16px] text-[#020406] leading-normal text-center md:text-left">
                Eager to break into the UI/UX design industry.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Blur Effects */}
        <div className="absolute w-[290px] h-[290px] right-0 bottom-0 bg-white filter blur-[100px] scale-50 md:scale-75 lg:scale-100 rounded-[50%]"></div>
      </section>

      {/* Course Structure */}
      <section className="bg-white pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24 relative overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-6 md:gap-y-12 lg:gap-y-12 xl:gap-y-16 z-10">
          {/* Heading */}
          <div>
            <motion.h2
              className="font-albert-sans leading-[130%] text-center bg-[linear-gradient(180deg,_#FFE7D3_-6.84%,_#EE8A33_90.74%)] bg-clip-text text-transparent font-bold text-3xl md:text-5xl lg:text-8xl xl:text-[115px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Course Structure
            </motion.h2>
          </div>
          {/* Blocks */}
          <motion.div
            className="flex flex-row justify-center md:justify-between lg:max-w-[927px] m-auto w-full flex-wrap lg:flex-nowrap gap-6 md:gap-8 lg:gap-0 "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeOut", delay: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Individual Blocks */}
            {/* Box 1 */}
            <div className="flex flex-col gap-y-6 w-full max-w-[180px] md:max-w-[220px]  lg:items-baseline">
              {/* Heading with Icon */}
              <div className="flex flex-row pt-2.5 course-struc gap-x-2 relative">
                {/* Icon */}
                <Image
                  src="/images/uiux/course-struc1.svg"
                  alt="Bridge Image"
                  width={23}
                  height={34.65}
                />
                {/* Text */}
                <h5 className="font-albert-sans text-2xl md:text-3xl lg:text-[40px] leading-[120%] text-black  text-center md:text-left">
                  Duration
                </h5>
              </div>
              <p className="font-secondary font-bold md:text-[18px] text-[16px] text-black leading-9 md:text-left">
                10-12 <br className="md:hidden lg:block" />
                weeks
              </p>
            </div>
            {/* Box 2 */}
            <div className="flex flex-col gap-y-6 w-full max-w-[180px] md:max-w-[220px]  lg:items-baseline">
              {/* Heading with Icon */}
              <div className="flex flex-row pt-2.5 course-struc gap-x-2 relative">
                {/* Icon */}
                <Image
                  src="/images/uiux/course-struc2svg.svg"
                  alt="Bridge Image"
                  width={30.99}
                  height={33.94}
                />
                {/* Text */}
                <h5 className="font-albert-sans text-2xl md:text-3xl lg:text-[40px] leading-[120%] text-black  text-center md:text-left">
                  Schedule
                </h5>
              </div>
              <p className="font-secondary font-bold md:text-[18px] text-[16px] text-black leading-9 md:text-left">
                Monday - Friday, <br className="hidden lg:block" />
                9:00 AM - 5:00 PM
              </p>
            </div>
            {/* Box 3 */}
            <div className="flex flex-col gap-y-6 w-full max-w-[180px] md:max-w-[220px]  lg:items-baseline">
              {/* Heading with Icon */}
              <div className="flex flex-row pt-2.5 course-struc gap-x-2 relative">
                {/* Icon */}
                <Image
                  src="/images/uiux/course-struc3svg.svg"
                  alt="Bridge Image"
                  width={34.57}
                  height={33.94}
                />
                {/* Text */}
                <h5 className="font-albert-sans text-2xl md:text-3xl lg:text-[40px] leading-[120%] text-black  text-center md:text-left">
                  Mode
                </h5>
              </div>
              <p className="font-secondary font-bold md:text-[18px] text-[16px] text-black leading-9 md:text-left">
                In-Person at Yuvabe, Saracon Campus, Auroville
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Fees */}
      <section className="bg-gradient-to-b from-[rgba(243,128,47,0.8)] to-[rgba(247,200,89,0.24)] pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24 relative overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-6 md:gap-y-12 lg:gap-y-12 xl:gap-y-16 z-10 items-center relative">
          {/* Heading */}
          <div>
            <motion.h2
              className="font-albert-sans leading-[130%] text-center text-white font-bold text-3xl md:text-5xl lg:text-8xl xl:text-[115px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Course Fees & Scholarships
            </motion.h2>
          </div>
          {/* Box */}
          <motion.div
            className="z-10 md:justify-center lg:justify-baseline flex flex-row flex-wrap lg:flex-nowrap xl:w-[1112px] lg:py-16 md:py-16 py-4 lg:pl-[93px] md:px-16 px-5 bg-white/10 shadow-[3.55378px_3.55378px_22.2112px_rgba(0,_0,_0,_0.1)] backdrop-blur-[50px] rounded-[35px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeOut", delay: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Left Text */}
            <div className="lg:max-w-[547px] z-10">
              <p className="font-secondary md:text-[18px] text-[16px] text-[#020406] leading-9 text-center md:text-left">
                <span className="font-bold">Standard Fee:</span> ₹15,000. <br />
                <span className="font-bold">
                  Special Fee for Bioregion/Auroville Residents:{" "}
                </span>
                ₹7,000 <br /> <span className="font-bold">Scholarships: </span>
                Need-based and merit-based scholarships available. <br />
                <span className="font-bold">Special Scholarships:</span> 100%
                scholarships for 5 eligible women from the bioregion. <br />
                <span className="font-bold">Payment Plans:</span> Flexible
                installment options. <br />
                <span className="font-bold">Payment Methods:</span> Cash, Bank
                Transfer, GPay.
                <br /> <span className="font-bold">Contact: </span>
                <Link href={"mailto:bridge@yuvabe.com"}>
                  <span className="text-blue-500">bridge@yuvabe.com </span>
                </Link>
                | +91 9677604467
              </p>
            </div>
            {/* Image */}
            <div className="z-10">
              <Image
                src="/images/uiux/uiux-laptop.png"
                alt="Bridge Image"
                width={654}
                height={408}
                className="lg:ml-0 xl:ml-[20%]"
              />
            </div>
          </motion.div>
          <motion.div
            className="absolute bottom-[-4%] lg:bottom-[-5%] lg:right-[3%] z-1"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.3 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/uiux/ui-course1.png"
              alt="Bridge Image"
              width={338.14}
              height={338.14}
              // className="absolute bottom-[-4%] lg:bottom-[-5%] lg:right-[3%] z-1"
            />
          </motion.div>
          {/* Blur Effects */}
          <div className="absolute w-[296px] h-[296px] left-[15%] top-[20%] md:top-[40%] bg-white filter blur-[100px] scale-50 md:scale-75 lg:scale-100 rounded-[50%]"></div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="bg-white pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24 relative overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-6 md:gap-y-12 lg:gap-y-12 xl:gap-y-16 z-10">
          {/* Heading */}
          <div>
            <motion.h2
              className="font-albert-sans leading-[130%] text-center bg-[linear-gradient(180deg,_#FFE7D3_-6.84%,_#EE8A33_90.74%)] bg-clip-text text-transparent font-bold text-3xl md:text-5xl lg:text-8xl xl:text-[115px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Enrollment Process
            </motion.h2>
          </div>
          {/* Blocks */}
          <motion.div
            className="flex flex-row justify-center md:justify-between lg:max-w-[927px] m-auto w-full flex-wrap lg:flex-nowrap gap-6 md:gap-8 lg:gap-0 "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeOut", delay: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Individual Blocks */}
            {/* Box 1 */}
            <div className="flex flex-col gap-y-0 w-full max-w-full md:max-w-[220px]  lg:items-baseline">
              {/* Number Heading */}
              {/* Text */}
              <h5 className="font-albert-sans text-7xl md:text-9xl lg:text-[150px] leading-[80%] font-extrabold text-center md:text-left text-transparent bg-gradient-to-b from-[#F48F38] to-[#FFFFFF] bg-[length:100%_100%] bg-clip-text">
                01
              </h5>
              <div className="flex flex-col gap-2">
                <h6 className="font-secondary font-bold md:text-[18px] text-[16px] text-black leading-9 text-center md:text-left">
                  Online Application
                </h6>
                <p className="font-secondary font-normal md:text-[18px] text-[16px] text-black leading-9 text-center md:text-left">
                  Submit your application
                </p>
              </div>
            </div>
            {/* Box 2 */}
            <div className="flex flex-col gap-y-0 w-full max-w-full md:max-w-[220px]  lg:items-baseline">
              {/* Number Heading */}
              {/* Text */}
              <h5 className="font-albert-sans text-7xl md:text-9xl lg:text-[150px] leading-[80%] font-extrabold text-center md:text-left text-transparent bg-gradient-to-b from-[#F48F38] to-[#FFFFFF] bg-[length:100%_100%] bg-clip-text">
                02
              </h5>
              <div className="flex flex-col gap-2">
                <h6 className="font-secondary font-bold md:text-[18px] text-[16px] text-black leading-9 text-center md:text-left">
                  Screening
                </h6>
                <p className="font-secondary font-normal md:text-[18px] text-[16px] text-black leading-9 text-center md:text-left">
                  Shortlisted candidates will be invited for an interview and
                  aptitude test
                </p>
              </div>
            </div>
            {/* Box 3 */}
            <div className="flex flex-col gap-y-0 w-full max-w-full md:max-w-[220px]  lg:items-baseline">
              {/* Number Heading */}
              {/* Text */}
              <h5 className="font-albert-sans text-7xl md:text-9xl lg:text-[150px] leading-[80%] font-extrabold text-center md:text-left text-transparent bg-gradient-to-b from-[#F48F38] to-[#FFFFFF] bg-[length:100%_100%] bg-clip-text">
                03
              </h5>
              <div className="flex flex-col gap-2">
                <h6 className="font-secondary font-bold md:text-[18px] text-[16px] text-black leading-9 text-center md:text-left">
                  Confirmation
                </h6>
                <p className="font-secondary font-normal md:text-[18px] text-[16px] text-black leading-9 text-center md:text-left">
                  Secure your spot by completing the payment
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Post-Course */}
      <section className="bg-gradient-to-b from-[rgba(243,128,47,0.8)] to-[rgba(247,200,89,0.24)] pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24 overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-6 md:gap-y-12 lg:gap-y-12 xl:gap-y-16 z-10 items-center">
          {/* Heading */}
          <div>
            <motion.h2
              className="font-albert-sans leading-[130%] text-center text-white font-bold text-3xl md:text-5xl lg:text-8xl xl:text-[115px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Post-Course Opportunities
            </motion.h2>
          </div>
          {/* Boxes*/}
          <div className="flex flex-row justify-between w-full xl:w-[1115px] flex-wrap xl:flex-nowrap gap-4 xl:gap-x-0">
            {/* Individual Boxes */}
            {/* Box 1 */}
            <motion.div
              className="flex flex-col relative py-3 md:py-7 px-3 md:px-7 gap-2.5 bg-[rgba(255,255,255,0.4)] shadow-[4px_4px_25px_rgba(0,0,0,0.03)] backdrop-blur-[35px] rounded-[30px] lg:w-[30%] md:w-[45%] w-full xl:w-[351px]"
              initial={{ opacity: 0, y: 50 }} // Initial state: opacity 0 and translate from below
              whileInView={{
                opacity: 1, // Animate to opacity 1
                y: 0, // Animate to normal position
              }}
              viewport={{ once: true, amount: 0.45 }} // Trigger only once when it's in the view
              transition={{
                delay: 0.2, // Stagger each box with a 0.2s delay
                type: "spring", // Spring animation for a natural effect
                stiffness: 100,
                duration: 1.8,
              }}
            >
              <p className="font-secondary md:text-[18px] text-[16px] text-[#020406] leading-9 text-center md:text-left font-bold z-10">
                Paid Internships (3 months) for the top 3 students at Yuvabe
              </p>
              {/* Blur Effects */}
              <div className="absolute w-[193px] h-[193px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white filter blur-[100px] scale-50 md:scale-75 lg:scale-100 rounded-[50%]"></div>
            </motion.div>

            {/* Box 2 */}
            <motion.div
              className="flex flex-col relative py-3 md:py-7 px-3 md:px-7 gap-2.5 bg-[rgba(255,255,255,0.4)] shadow-[4px_4px_25px_rgba(0,0,0,0.03)] backdrop-blur-[35px] rounded-[30px] lg:w-[30%] md:w-[45%] w-full xl:w-[351px]"
              initial={{ opacity: 0, y: 50 }} // Initial state: opacity 0 and translate from below
              whileInView={{
                opacity: 1, // Animate to opacity 1
                y: 0, // Animate to normal position
              }}
              viewport={{ once: true, amount: 0.45 }} // Trigger only once when it's in the view
              transition={{
                delay: 2 * 0.2, // Stagger each box with a 0.2s delay
                type: "spring", // Spring animation for a natural effect
                stiffness: 100,
                duration: 1.8,
              }}
            >
              <p className="font-secondary md:text-[18px] text-[16px] text-[#020406] leading-9 text-center md:text-left font-bold z-10">
                Access to an Alumni Network for ongoing learning and networking
              </p>
              {/* Blur Effects */}
              <div className="absolute w-[193px] h-[193px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white filter blur-[100px] scale-50 md:scale-75 lg:scale-100 rounded-[50%]"></div>
            </motion.div>
            {/* Box 3 */}
            <motion.div
              className="flex flex-col relative py-3 md:py-7 px-3 md:px-7 gap-2.5 bg-[rgba(255,255,255,0.4)] shadow-[4px_4px_25px_rgba(0,0,0,0.03)] backdrop-blur-[35px] rounded-[30px] lg:w-[30%] md:w-[45%] w-full xl:w-[351px]"
              initial={{ opacity: 0, y: 50 }} // Initial state: opacity 0 and translate from below
              whileInView={{
                opacity: 1, // Animate to opacity 1
                y: 0, // Animate to normal position
              }}
              viewport={{ once: true, amount: 0.45 }} // Trigger only once when it's in the view
              transition={{
                delay: 3 * 0.2, // Stagger each box with a 0.2s delay
                type: "spring", // Spring animation for a natural effect
                stiffness: 100,
                duration: 1.8,
              }}
            >
              <p className="font-secondary md:text-[18px] text-[16px] text-[#020406] leading-9 text-center md:text-left font-bold z-10">
                Opportunities for Advanced Courses & Certifications
              </p>
              {/* Blur Effects */}
              <div className="absolute w-[193px] h-[193px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white filter blur-[100px] scale-50 md:scale-75 lg:scale-100 rounded-[50%]"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24 relative overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-6 md:gap-y-12 lg:gap-y-12 xl:gap-y-16 z-10">
          {/* Heading */}
          <div className="z-10">
            <motion.h2
              className="font-albert-sans leading-[130%] text-center bg-[linear-gradient(180deg,_#FFE7D3_-6.84%,_#EE8A33_90.74%)] bg-clip-text text-transparent font-bold text-3xl md:text-5xl lg:text-8xl xl:text-[115px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              FAQs
            </motion.h2>
          </div>
          <FaqSection />
        </div>
        {/* Blur Effects */}
        <div className="absolute w-[561px] h-[561px] right-0 top-[15%] bg-[linear-gradient(180deg,_rgba(243,_128,_47,_0.6)_0%,_rgba(247,_200,_89,_0.6)_100%)] filter blur-[100px] scale-50 md:scale-75 lg:scale-100 rounded-[50%]"></div>
        <div className="absolute w-[441px] h-[441px] left-0 bottom-[15%] bg-[linear-gradient(180deg,_rgba(243,_128,_47,_0.6)_0%,_rgba(247,_200,_89,_0.6)_100%)] filter blur-[100px] scale-50 md:scale-75 lg:scale-100 rounded-[50%]"></div>
      </section>

      {/* Certification  & Accreditation */}
      <section className="bg-gradient-to-b from-[rgba(243,128,47,0.8)] to-[rgba(247,200,89,0.24)] pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24 relative overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-8 md:gap-y-12 lg:gap-y-12 xl:gap-y-16 z-10">
          {/* Certification */}
          <div className="z-10">
            <motion.h3
              className="font-albert-sans text-black font-normal leading-[120%] lg:text-5xl md:text-3xl text-2xl mb-6 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Certification  & Accreditation
            </motion.h3>
            <ol className="flex flex-col gap-4 md:gap-6 lg:gap-8 font-secondary font-bold md:text-[18px] text-[16px] text-[#020406] leading-9 text-center lg:text-left list-decimal list-inside">
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                How will I receive the certificate (digital or printed)? <br />
                <span className="font-normal">Printed</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 2 * 0.2 }}
                viewport={{ once: true }}
              >
                Are there any exams or assessments for certification? <br />
                <span className="font-normal">
                  Yes. You will have an end-of-course assessment and
                  presentation of the capstone project.
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 3 * 0.2 }}
                viewport={{ once: true }}
              >
                Do I need any special software or hardware to take the course?
                <br />
                <span className="font-normal">
                  You will be required to bring your laptop for the course.
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 4 * 0.2 }}
                viewport={{ once: true }}
              >
                Does the course provide any career support or job placement
                assistance?
                <br />
                <span className="font-normal">
                  The course enhances employability through practical skills and
                  industry insights but does not offer direct placement
                  services.
                </span>
              </motion.li>
            </ol>
          </div>
          {/* Refund */}
          <div className="z-10">
            <motion.h3
              className="font-albert-sans text-black font-normal leading-[120%] lg:text-5xl md:text-3xl text-2xl mb-6  text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Refund & Cancellation Policy
            </motion.h3>
            <ol className="flex flex-col gap-4 md:gap-6 lg:gap-8 font-secondary font-bold md:text-[18px] text-[16px] text-[#020406] leading-9 text-center lg:text-left list-decimal list-inside">
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                What is the refund policy if I decide to withdraw from the
                course? <br />
                <span className="font-normal">
                  Your fees will not be refunded after the commencement of your
                  course.
                </span>
              </motion.li>
            </ol>
          </div>
          {/* Instructor */}
          <div className="z-10">
            <motion.h3
              className="font-albert-sans text-black font-normal leading-[120%] lg:text-5xl md:text-3xl text-2xl mb-6  text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Instructor Information
            </motion.h3>
            <ol className="flex flex-col gap-4 md:gap-6 lg:gap-8 font-secondary font-bold md:text-[18px] text-[16px] text-[#020406] leading-9 text-center lg:text-left list-decimal list-inside">
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                What qualifications or experience do the instructors have?{" "}
                <br />
                <span className="font-normal">
                  Our instructors have extensive industry experience across
                  brand marketing, advertising, UI/UX design along with
                  expertise, social media, content marketing, and analytics,
                  having certifications and a strong background in teaching and
                  mentoring.
                </span>
              </motion.li>
            </ol>
          </div>
          {/* Career Support */}
          <div className="z-10">
            <motion.h3
              className="font-albert-sans text-black font-normal leading-[120%] lg:text-5xl md:text-3xl text-2xl mb-6  text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Career Support & Opportunities
            </motion.h3>
            <ol className="flex flex-col gap-4 md:gap-6 lg:gap-8 font-secondary font-bold md:text-[18px] text-[16px] text-[#020406] leading-9 text-center lg:text-left list-decimal list-inside">
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Are there internship or project opportunities as part of the
                course <br />
                <span className="font-normal">
                  Top 3 candidates get paid for a 3 months internship with
                  Yuvabe.
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 2 * 0.2 }}
                viewport={{ once: true }}
              >
                Will I gain access to a network of professionals or alumni?{" "}
                <br />
                <span className="font-normal">
                  You will be part of the Yuvabe Alumni group.
                </span>
              </motion.li>
            </ol>
          </div>
          {/* Special Offers */}
          <div className="z-10">
            <motion.h3
              className="font-albert-sans text-black font-normal leading-[120%] lg:text-5xl md:text-3xl text-2xl mb-6  text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Special Offers & Group Discounts
            </motion.h3>
            <ol className="flex flex-col gap-4 md:gap-6 lg:gap-8 font-secondary font-bold md:text-[18px] text-[16px] text-[#020406] leading-9 text-center lg:text-left list-decimal list-inside">
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                Do you offer group discounts for organisations or institutions?{" "}
                <br />
                <span className="font-normal">
                  Yes. Please call/email us for further information. 
                  <br />
                  <Link href={"mailto:bridge@yuvabe.com"}>
                    Email: bridge@yuvabe.com
                  </Link>
                  <br />
                  Mobile: 9677604467 (9am - 5pm)
                </span>
              </motion.li>
            </ol>
          </div>
          {/* Student Support */}
          <div className="z-10">
            <motion.h3
              className="font-albert-sans text-black font-normal leading-[120%] lg:text-5xl md:text-3xl text-2xl mb-6  text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Student Support
            </motion.h3>
            <ol className="flex flex-col gap-4 md:gap-6 lg:gap-8 font-secondary font-bold md:text-[18px] text-[16px] text-[#020406] leading-9 text-center lg:text-left list-decimal list-inside">
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                What is the student support Offered By Yuvabe?
                <br />
                <span className="font-normal">
                  Lunch is provided on Campus from Monday - Friday.
                </span>
              </motion.li>
            </ol>
          </div>
        </div>
        {/* Blur Effects */}
        <div className="absolute w-[1095px] h-[1095px] left-[-15%] top-0 bg-white filter blur-[250px] scale-50 md:scale-75 lg:scale-100 rounded-[50%]"></div>
      </section>

      {/* Get Started */}
      <section className="bg-white pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24 relative overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-6 md:gap-y-12 lg:gap-y-12 xl:gap-y-16 z-10 items-center relative">
          {/* Box */}
          <motion.div
            className="z-10 justify-center flex flex-col flex-wrap gap-6 w-full xl:max-w-[1115px] lg:py-16 md:py-16 py-4 lg:px-8 md:px-8 px-5 bg-white/10 shadow-[3.55378px_3.55378px_22.2112px_rgba(0,_0,_0,_0.1)] backdrop-blur-[50px] rounded-[35px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeOut", delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-albert-sans text-black font-normal leading-[120%] lg:text-[53px] md:text-4xl text-3xl text-center">
              Get Started
            </h3>
            <p className="font-secondary text-[16px] text-[#020406] leading-[150%] text-center">
              Take the first step toward your career in UI/UX Design. Register
              today and secure your spot!
            </p>
            {/* Buttons */}
            <div className="flex flex-row gap-6 justify-center flex-wrap mt-2">
              {/* Apply Now */}
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdh8oX44utivqxskIw5l78wbAxc5z1vRuK58I6IBXCA9rxJ5w/viewform"
                target="_blank"
                className="min-w-[194px] max-w-64 md:max-w-49"
              >
                <div className="bg-[#F48F38] border-1 border-black py-2.5 px-6 rounded-[94px]">
                  <p className="font-albert-sans text-[14px] md:text-[16px] leading-normal text-white text-center">
                    Apply Now
                  </p>
                </div>
              </Link>
              {/* Download Brochure */}
              <Link
                href={"../docs/UIUX Brouchure.pdf"}
                target="_blank"
                className="min-w-[194px]  max-w-64  md:max-w-49"
              >
                <div className="bg-transparent border-1 border-black py-2.5 px-6 rounded-[94px]">
                  <p className="font-albert-sans text-[14px] md:text-[16px] leading-normal text-center">
                    Download Brochure
                  </p>
                </div>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="absolute bottom-[-4%] lg:bottom-[-10%] lg:left-[-5%] z-1 max-w-87 lg:max-w-full"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.3 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/uiux/ui-start1.png"
              alt="Bridge Image"
              width={478}
              height={478}
              // className="absolute bottom-[-4%] lg:bottom-[-10%] lg:left-[-5%] z-1 max-w-87 lg:max-w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Us */}
      {/* Wrapper */}
      <section className="bg-[linear-gradient(180deg,_#F3802F_0%,_rgba(247,_200,_89,_0.3)_103.92%)] pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-40 overflow-hidden relative">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-6 md:gap-y-12 lg:gap-y-16 z-10">
          {/* Text */}
          <div className="flex flex-col gap-y-6">
            <motion.h2
              className="font-albert-sans text-black font-normal xl:text-5xl md:text-4xl text-3xl mb-2 md:mb-3 lg:mb-4 text-center z-10"
              initial={{ opacity: 0, x: -100 }} // Start with opacity 0 and slide from the left
              whileInView={{ opacity: 1, x: 0 }} // Trigger animation when in view
              transition={{ duration: 1 }} // Duration of 1 second for the animation
              viewport={{ once: true }} // Trigger the animation only once when the element comes into view
            >
              Contact Us
            </motion.h2>
            <motion.p
              className="font-secondary font-normal md:text-[18px] text-[14px] text-black text-center z-10"
              initial={{ opacity: 0, x: -100 }} // Start with opacity 0 and slide from the left
              whileInView={{ opacity: 1, x: 0 }} // Trigger animation when in view
              transition={{ duration: 1 }} // Duration of 1 second for the animation
              viewport={{ once: true }} // Trigger the animation only once when the element comes into view
            >
              For any questions, reach out to our team directly at
              <span className="font-bold">
                &nbsp; bridge@yuvabe.com / +91 9677604467
              </span>
            </motion.p>
          </div>
          {/* Social Media */}
          <div className="flex flex-col gap-y-6">
            <motion.h2
              className="font-albert-sans text-black font-medium xl:text-2xl md:text-[20px] text-[18px] mb-2 md:mb-3 lg:mb-4 text-center z-10"
              initial={{ opacity: 0, x: -100 }} // Start with opacity 0 and slide from the left
              whileInView={{ opacity: 1, x: 0 }} // Trigger animation when in view
              transition={{ duration: 1 }} // Duration of 1 second for the animation
              viewport={{ once: true }} // Trigger the animation only once when the element comes into view
            >
              Follow us on Social Media
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -100 }} // Start with opacity 0 and slide from the left
              whileInView={{ opacity: 1, x: 0 }} // Trigger animation when in view
              transition={{ duration: 1 }} // Duration of 1 second for the animation
              viewport={{ once: true }} // Trigger the animation only once when the element comes into view
              className="flex flex-row gap-x-12 justify-center flex-wrap gap-y-6 z-10"
            >
              <Link
                href={"https://www.instagram.com/yuvabe.auroville/"}
                target="_blank"
              >
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="z-10"
                >
                  <path
                    d="M20.7378 40C18.1115 39.9512 15.4852 39.9186 12.8604 39.852C11.1677 39.8047 9.48687 39.6153 7.89037 39.0101C4.39111 37.6785 2.21165 35.1632 1.30613 31.5441C1.03883 30.4245 0.890056 29.2799 0.862249 28.1291C0.810956 26.691 0.775939 25.2533 0.757197 23.8161C0.733523 22.0154 0.711329 20.2132 0.729084 18.4126C0.750785 16.1991 0.797146 13.9866 0.868167 11.7751C0.915515 10.3339 1.09455 8.90314 1.55914 7.53155C2.79757 3.86953 5.31734 1.59094 9.02671 0.614399C10.0827 0.348382 11.1639 0.195126 12.2522 0.157201C16.7014 -0.0529031 21.1535 -0.00703522 25.6057 0.0388325C26.8811 0.0506694 28.1565 0.0980167 29.429 0.173477C31.0728 0.269651 32.6841 0.540418 34.1992 1.22695C37.3064 2.63998 39.255 5.02362 40.0969 8.32018C40.3582 9.38708 40.5109 10.4777 40.5527 11.5753C40.7539 15.9135 40.7139 20.2532 40.671 24.5958C40.6592 25.9275 40.6104 27.271 40.5379 28.607C40.4446 30.2894 40.1739 31.9435 39.4681 33.4897C38.024 36.6443 35.5797 38.5944 32.218 39.4082C31.0478 39.6807 29.8521 39.8295 28.6507 39.852C26.7006 39.9068 24.7505 39.9319 22.7989 39.963C22.1123 39.9734 21.4243 39.963 20.7363 39.963L20.7378 40ZM20.6949 3.61504V3.5958C19.2567 3.5958 17.82 3.5958 16.3818 3.5958C14.4421 3.5958 12.5082 3.66978 10.5877 3.97754C8.84028 4.25867 7.36807 5.02362 6.21546 6.38486C5.3277 7.45165 4.88381 8.70784 4.67519 10.0691C4.4478 11.7041 4.3331 13.3528 4.33192 15.0036C4.30973 16.6651 4.33192 18.3282 4.34228 19.9913C4.35264 22.2299 4.34228 24.4671 4.38667 26.7043C4.38464 28.0561 4.53353 29.404 4.83055 30.7229C5.48305 33.3862 7.12985 35.0995 9.78279 35.8216C10.7408 36.067 11.7226 36.2079 12.7109 36.2418C14.3207 36.3187 15.9335 36.3631 17.5448 36.3898C18.6575 36.4075 19.7642 36.3646 20.8828 36.3572C23.0326 36.3454 25.1825 36.3572 27.3324 36.3261C28.5872 36.3057 29.8383 36.182 31.0728 35.9562C32.9726 35.6115 34.4922 34.6705 35.6019 33.0828C36.3225 32.0471 36.6376 30.8782 36.8092 29.6516C37.0158 28.0517 37.1146 26.4398 37.1052 24.8266C37.1052 22.9387 37.1052 21.0492 37.1052 19.1612C37.0889 16.9995 37.0741 14.8364 37.0238 12.6747C36.9945 11.5993 36.8723 10.5285 36.6583 9.47427C36.0976 6.64823 34.0468 4.60785 31.2163 4.053C29.654 3.76953 28.0695 3.62544 26.4816 3.62244C24.5463 3.59136 22.6213 3.61504 20.6949 3.61504Z"
                    fill="black"
                  />
                  <path
                    d="M30.9671 19.9732C30.969 21.3183 30.706 22.6507 30.193 23.8942C29.68 25.1378 28.9271 26.2681 27.9773 27.2206C27.0275 28.1732 25.8994 28.9293 24.6574 29.4459C23.4154 29.9625 22.0837 30.2293 20.7386 30.2313C19.3934 30.2332 18.061 29.9702 16.8175 29.4572C15.574 28.9442 14.4437 28.1913 13.4911 27.2415C12.5386 26.2917 11.7824 25.1636 11.2659 23.9216C10.7493 22.6796 10.4824 21.3479 10.4805 20.0028C10.4805 14.0192 15.3321 9.79349 20.6158 9.73875C26.2131 9.68548 30.973 14.1938 30.9671 19.9732ZM20.7149 13.3283C19.398 13.3283 18.1107 13.7188 17.0158 14.4504C15.9208 15.182 15.0674 16.2219 14.5635 17.4385C14.0596 18.6551 13.9277 19.9939 14.1846 21.2854C14.4415 22.577 15.0757 23.7634 16.0068 24.6946C16.938 25.6257 18.1244 26.2599 19.4159 26.5168C20.7075 26.7737 22.0463 26.6418 23.2629 26.1379C24.4795 25.6339 25.5194 24.7805 26.251 23.6856C26.9826 22.5907 27.3731 21.3034 27.3731 19.9865C27.3692 18.2218 26.6665 16.5305 25.4187 15.2827C24.1708 14.0349 22.4796 13.3322 20.7149 13.3283Z"
                    fill="black"
                  />
                  <path
                    d="M29.0001 9.32327C28.9978 9.01019 29.0572 8.69972 29.1749 8.40962C29.2926 8.11951 29.4664 7.85546 29.6863 7.63257C29.9062 7.40968 30.1678 7.23231 30.4563 7.11062C30.7447 6.98893 31.0544 6.92529 31.3675 6.92335C31.6889 6.91205 32.0094 6.96561 32.3097 7.08083C32.61 7.19605 32.8841 7.37057 33.1155 7.59399C33.3469 7.81741 33.5309 8.08515 33.6566 8.38123C33.7823 8.67732 33.8471 8.99569 33.8471 9.31736C33.8471 9.63902 33.7823 9.95739 33.6566 10.2535C33.5309 10.5496 33.3469 10.8173 33.1155 11.0407C32.8841 11.2641 32.61 11.4387 32.3097 11.5539C32.0094 11.6691 31.6889 11.7227 31.3675 11.7114C31.0548 11.7114 30.7453 11.6495 30.4567 11.5292C30.1681 11.4089 29.9062 11.2327 29.6861 11.0107C29.466 10.7886 29.2921 10.5252 29.1743 10.2356C29.0566 9.94597 28.9974 9.6359 29.0001 9.32327Z"
                    fill="black"
                  />
                </svg>
              </Link>
              <Link
                href={"https://www.facebook.com/yuvabe.auroville"}
                target="_blank"
              >
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.6934 0C34.8789 0 35.0645 0.00895052 35.249 0.0273438C35.4341 0.0457591 35.6186 0.0730288 35.8008 0.109375C35.9828 0.145223 36.1631 0.190392 36.3408 0.244141C36.5187 0.297929 36.6932 0.360409 36.8652 0.431641C37.0367 0.502833 37.204 0.582759 37.3682 0.669922C37.5319 0.757598 37.6912 0.852885 37.8457 0.956055C38.0002 1.05924 38.1496 1.16989 38.293 1.28809C38.4369 1.40585 38.5742 1.53078 38.7061 1.66211C38.8373 1.79385 38.9624 1.93038 39.0801 2.07422C39.1983 2.21762 39.3089 2.36694 39.4121 2.52148C39.5153 2.67602 39.6105 2.83528 39.6982 2.99902C39.7855 3.16331 39.8653 3.33138 39.9365 3.50293C40.0077 3.67489 40.0703 3.84958 40.124 4.02734C40.1778 4.20507 40.2229 4.38531 40.2588 4.56738C40.2951 4.74949 40.3224 4.93316 40.3408 5.11816C40.3592 5.3028 40.3682 5.4892 40.3682 5.6748V34.5215C40.3682 34.7069 40.3592 34.8923 40.3408 35.0771C40.3224 35.2618 40.2951 35.4457 40.2588 35.6279C40.223 35.8105 40.1778 35.9903 40.124 36.168C40.0703 36.3457 40.0077 36.521 39.9365 36.6924C39.8653 36.8639 39.7855 37.0325 39.6982 37.1963C39.6106 37.36 39.5152 37.5193 39.4121 37.6738C39.309 37.8278 39.1982 37.9773 39.0801 38.1211C38.9623 38.2645 38.8374 38.4028 38.7061 38.5342C38.5743 38.6654 38.4368 38.79 38.293 38.9082C38.1496 39.0259 38.0002 39.1361 37.8457 39.2393C37.6911 39.3425 37.5319 39.4377 37.3682 39.5254C37.204 39.613 37.0367 39.693 36.8652 39.7637C36.6932 39.8349 36.5186 39.8974 36.3408 39.9512C36.1631 40.0054 35.9829 40.0506 35.8008 40.0869C35.6186 40.1228 35.4341 40.15 35.249 40.168C35.0645 40.1864 34.8789 40.1963 34.6934 40.1963H5.84668C5.66109 40.1963 5.47515 40.1864 5.29004 40.168C5.10565 40.15 4.92221 40.1227 4.74023 40.0869C4.55802 40.0506 4.37707 40.0054 4.19922 39.9512C4.02147 39.8974 3.84626 39.8349 3.6748 39.7637C3.50337 39.693 3.33557 39.613 3.17188 39.5254C3.00807 39.4377 2.84844 39.3425 2.69434 39.2393C2.53982 39.1361 2.39045 39.0259 2.24707 38.9082C2.10319 38.79 1.96527 38.6655 1.83398 38.5342C1.70265 38.4028 1.57821 38.2645 1.45996 38.1211C1.34226 37.9772 1.23208 37.8279 1.12891 37.6738C1.02568 37.5192 0.929512 37.3601 0.841797 37.1963C0.7541 37.0325 0.675234 36.8639 0.604492 36.6924C0.533283 36.5209 0.470767 36.3458 0.416992 36.168C0.36275 35.9902 0.317579 35.8105 0.28125 35.6279C0.245391 35.4457 0.217149 35.2618 0.199219 35.0771C0.190039 34.9848 0.183309 34.8923 0.178711 34.7998L0.171875 34.5215V5.6748C0.171875 5.4892 0.180803 5.3028 0.199219 5.11816C0.21715 4.93315 0.245409 4.74949 0.28125 4.56738C0.317586 4.38525 0.362742 4.20512 0.416992 4.02734C0.470785 3.84949 0.533254 3.67497 0.604492 3.50293C0.675245 3.33138 0.754084 3.1633 0.841797 2.99902C0.9295 2.83525 1.0257 2.67605 1.12891 2.52148C1.23203 2.36707 1.34233 2.21751 1.45996 2.07422C1.57808 1.93046 1.70282 1.79378 1.83398 1.66211C1.96532 1.53078 2.10314 1.40585 2.24707 1.28809C2.3905 1.16986 2.53976 1.05927 2.69434 0.956055C2.84842 0.852848 3.0081 0.757625 3.17188 0.669922C3.33556 0.582755 3.50337 0.502838 3.6748 0.431641C3.84628 0.360435 4.02145 0.297916 4.19922 0.244141C4.37707 0.190348 4.55802 0.145237 4.74023 0.109375C4.92223 0.0730818 5.10562 0.0457488 5.29004 0.0273438C5.47515 0.00893012 5.66109 1.63197e-06 5.84668 0H34.6934ZM23.4541 7.5625C21.1594 7.56257 19.4931 8.1344 18.4561 9.27734C17.4296 10.421 16.916 12.1097 16.916 14.3418V15.6777H13.8867V19.834H16.916V32.4355H21.8164V19.834H25.8057L26.3516 15.6777H21.8164V14.7207C21.8164 13.643 22.0529 12.8844 22.5273 12.4443C23.0018 12.0048 23.7807 11.7852 24.8623 11.7852C25.0498 11.7852 25.3144 11.8011 25.6562 11.834C26.0095 11.8558 26.2743 11.8786 26.4512 11.9004V7.79297C26.0756 7.73821 25.5843 7.68863 24.9775 7.64453C24.3815 7.58929 23.8733 7.5625 23.4541 7.5625Z"
                    fill="black"
                  />
                </svg>
              </Link>
              <Link
                href={"https://www.linkedin.com/company/yuvabe/"}
                target="_blank"
              >
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.5535 19.9964C40.5535 25.6582 40.5535 31.3204 40.5535 36.9829C40.5535 37.739 40.3434 38.4157 39.8377 38.9872C39.5698 39.305 39.2347 39.56 38.8563 39.734C38.4779 39.908 38.0656 39.9968 37.6488 39.9938C26.1872 40.002 14.7256 40.002 3.26405 39.9938C2.55399 39.9972 1.8679 39.7384 1.33828 39.2677C0.808662 38.7969 0.473099 38.1475 0.396403 37.4448C0.381795 37.2893 0.367188 37.1316 0.367188 36.9751C0.367188 25.6411 0.367188 14.3104 0.367188 2.98315C0.367188 1.47319 1.2549 0.380433 2.74153 0.0605464C2.92105 0.0220512 3.10402 0.0018145 3.28765 0.000148189C14.7305 0.000148189 26.1734 0.000148189 37.6162 0.000148189C38.2867 -0.0066033 38.9388 0.217529 39.4623 0.634579C39.9857 1.05163 40.3482 1.63595 40.4884 2.28857C40.5362 2.53241 40.5576 2.78063 40.5524 3.02901C40.5554 8.68184 40.5558 14.3376 40.5535 19.9964ZM21.7959 17.5805L21.7509 17.5727C21.7509 17.5067 21.7386 17.4407 21.7386 17.3747C21.7386 16.66 21.7386 15.9464 21.7386 15.2317C21.7386 14.9554 21.7386 14.9543 21.4677 14.9543H16.2538C15.9943 14.9543 15.9875 14.961 15.9875 15.2194V33.8355C15.9875 34.0882 15.9875 34.0894 16.2516 34.0894H21.6824C22.0071 34.0894 21.9745 34.1285 21.9757 33.793C21.9884 30.4457 22.0015 27.0985 22.015 23.7512C22.0203 23.0845 22.1404 22.4235 22.3701 21.7972C22.7072 20.8621 23.3151 20.1944 24.2949 19.9126C24.8557 19.753 25.4427 19.7055 26.022 19.7727C27.0513 19.8846 27.7874 20.3857 28.1941 21.3386C28.5391 22.1462 28.6222 23.0029 28.6245 23.8664C28.6312 27.1883 28.6312 30.5106 28.6245 33.8332C28.6245 34.0894 28.6245 34.0905 28.8852 34.0905H34.6542V33.8019C34.6542 31.3905 34.6542 28.979 34.6542 26.5675C34.6542 25.0811 34.6474 23.5946 34.6081 22.1093C34.5839 21.4581 34.5174 20.8091 34.4092 20.1664C34.2497 19.1598 33.9654 18.1834 33.435 17.2964C32.8038 16.2119 31.8001 15.3908 30.6089 14.9845C29.5201 14.6009 28.3986 14.4868 27.2514 14.5125C26.1401 14.525 25.0495 14.8129 24.0781 15.3502C23.2649 15.7877 22.5708 16.4153 22.0554 17.179C21.97 17.3121 21.8835 17.4463 21.7959 17.5805ZM6.30137 34.0894H12.0322C12.2962 34.0894 12.2974 34.0894 12.2974 33.8176V15.2395C12.2974 14.9554 12.2974 14.9543 12.0119 14.9543H6.57442C6.30249 14.9543 6.30137 14.9543 6.30137 15.2183V34.0894ZM9.30835 5.47178C7.40595 5.43375 5.81931 7.04437 5.82268 8.92343C5.82268 10.8372 7.32392 12.4165 9.29149 12.4097C11.2905 12.4019 12.7918 10.883 12.7929 8.93014C12.7947 8.47463 12.7057 8.02329 12.5311 7.60224C12.3565 7.18119 12.0997 6.79879 11.7757 6.47716C11.4516 6.15554 11.0667 5.90107 10.6432 5.7285C10.2197 5.55593 9.76597 5.46867 9.30835 5.47178Z"
                    fill="black"
                  />
                </svg>
              </Link>
              <Link
                href={"https://www.youtube.com/@yuvabe.auroville"}
                target="_blank"
              >
                <svg
                  width="62"
                  height="40"
                  viewBox="0 0 62 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_926_1281"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="62"
                    height="40"
                  >
                    <path d="M0.554688 0H61.3998V40H0.554688V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_926_1281)">
                    <path
                      d="M52.099 0H9.85947C4.74063 0 0.582031 4.16593 0.582031 9.29357V30.7064C0.582031 35.8348 4.74063 40 9.85947 40H52.099C57.2179 40 61.3765 35.8348 61.3765 30.7064V9.29357C61.3765 4.16593 57.2179 0 52.099 0ZM24.7296 30.8531V9.16006L43.4782 20.0125L24.7296 30.8649V30.8531Z"
                      fill="black"
                    />
                  </g>
                </svg>
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="flex flex-row gap-x-24 justify-center flex-wrap gap-y-6 items-center z-10"
            initial={{ opacity: 0, x: -100 }} // Start with opacity 0 and slide from the left
            whileInView={{ opacity: 1, x: 0 }} // Trigger animation when in view
            transition={{ duration: 1 }} // Duration of 1 second for the animation
            viewport={{ once: true }} // Trigger the animation only once when the element comes into view
          >
            <Link href={"https://www.yuvabe.com/"} target="_blank">
              <Image
                src="/images/uiux/ui-yb.png"
                alt="Bridge Image"
                width={211.75}
                height={57}
                className="h-[58px] align-center z-10 scale-75 md:scale-100"
              />
            </Link>
            <Link href={"https://yuvabeeducation.com/"} target="_blank">
              <Image
                src="/images/uiux/ui-ye.png"
                alt="Bridge Image"
                width={272.66}
                height={58}
                className="z-10 scale-75 md:scale-100"
              />
            </Link>
          </motion.div>
        </div>
        {/* Image */}
        <Image
          src="/images/uiux/ui-contact1.svg"
          alt="Bridge Image"
          width={741}
          height={741}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover z-1 max-w-full w-full h-full"
        />
      </section>
    </>
  );
}
