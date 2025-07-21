"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import Button from "@/components/ui/Button";

const AboutUs = () => {
  const impactSectionRef = useRef(null);
  const [youthCount, setYouthCount] = useState(0);
  const [hoursCount, setHoursCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const Player = dynamic(
    () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
    { ssr: false }
  );

  const targetYouth = 54;
  const targetHours = 32162;
  const targetProjects = 157;
  const duration = 2000; // 2 seconds

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (impactSectionRef.current) {
      observer.observe(impactSectionRef.current);
    }

    return () => {
      if (impactSectionRef.current) {
        observer.unobserve(impactSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = performance.now();
    let animationFrame: number;

    const animateCounters = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      setYouthCount(Math.floor(progress * targetYouth));
      setHoursCount(Math.floor(progress * targetHours));
      setProjectsCount(Math.floor(progress * targetProjects));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCounters);
      }
    };

    animationFrame = requestAnimationFrame(animateCounters);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible]);

  return (
    <div className="lg:min-w-[400px] bg-[#FFFFFF] text-[#000000]">
      <div className="max-w-[1240px] m-auto">
        {/* Hero Section */}
        <section className="py-14 md:py-18 lg:py-24 text-center px-4 md:px-0">
          <motion.h1
            className="text-4xl md:text-6xl font-primary font-semibold text-[#592AC7]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Who we are ?
          </motion.h1>

          <motion.p
            className="text-2xl md:text-[40px] mt-2 font-primary font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            A Thriving Ecosystem for Youth in Auroville
          </motion.p>

          <motion.p
            className="mt-8 text-[#000000] font-secondary md:text-lg md:max-w-9/12 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            Yuvabe is more than just an organization—it’s a dynamic movement
            that empowers youth in Auroville to grow, innovate, and create
            meaningful impact.
          </motion.p>
        </section>

        {/* Hear from Our Team Section */}
        <section className="py-8 md:py-16  px-5 md:px-8 xl:px-0 lg: text-center relative">
          {/* Heading */}
          <motion.h2
            className="text-2xl md:text-3xl font-semibold font-primary relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hear from our Team!
          </motion.h2>

          {/* Video Section */}
          <motion.div
            className="w-full max-w-4xl mx-auto mt-6 md:mt-8 relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="w-full aspect-video max-h-[300px] md:max-h-[450px] rounded-xl shadow-md overflow-hidden ">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/GFuLGeIJRJ0?autoplay=1&mute=1"
                title="YouTube Video"
                allowFullScreen
                allow="autoplay; encrypted-media"
              ></iframe>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="md:mx-auto mt-10 md:mt-24 lg:mt-32 text-3xl md:text-4xl lg:text-5xl text-[#F9A91E] font-primary font-semibold leading-normal md:max-w-9/12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            "The ignited minds of the youth are the most powerful resource on
            earth."
            <br />
            <motion.span
              className="block mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
              – Dr. APJ Abdul Kalam
            </motion.span>
          </motion.p>
          {/* Geometric Shapes with Motion Effects */}
          <div>
            {/* Yellow Shape - Slides in from Left */}
            <motion.div
              className="absolute left-[5%] md:left-[5%] lg:left-[5%] top-[13%] md:top-[5%] lg:top-[5%]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/assets/yellow-shape.svg"
                  alt="Yellow Shape"
                  width={224} // w-56 equivalent
                  height={224}
                  className="w-24 h-24 md:w-40 md:h-40 lg:w-56 lg:h-56"
                />
              </motion.div>
            </motion.div>

            {/* Green Circle - Slides in from Right */}
            <motion.div
              className="absolute right-[0%] md:right-[0%] lg:right-[-32px] xl:right-[-10%] top-[20%] md:top-[15%] lg:top-[5%]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/assets/green-circle.svg"
                  alt="Green Circle"
                  width={112} // w-28 equivalent
                  height={112}
                  className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28"
                />
              </motion.div>
            </motion.div>

            {/* Orange Circle - Slides in from Right */}
            <motion.div
              className="absolute right-[5%] md:right-[5%] lg:right-[5%] top-[17%] md:top-[10%] lg:top-[10%]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
              whileHover={{ scale: 1.08 }}
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/assets/orange-circle.svg"
                  alt="Orange Circle"
                  width={192} // w-48 equivalent
                  height={192}
                  className="w-15 h-15 md:w-36 md:h-36 lg:w-48 lg:h-48"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

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
                <h3 className="text-[36px] font-semibold font-primary">
                  Work{" "}
                  <span className="font-light italic text-xl md:text-2xl">
                    with purpose
                  </span>
                </h3>
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
                  Serve{" "}
                  <span className="font-light italic text-xl md:text-2xl">
                    with impact
                  </span>
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
                  Evolve{" "}
                  <span className="font-light italic text-xl md:text-2xl">
                    Continously
                  </span>
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
      {/* Founding Partners Section */}
      <section className="py-8 md:py-16 bg-[#592AC7] text-[#FFFFFF] flex flex-col md:flex-row items-center justify-center px-4 md:px-20 gap-12 md:gap-20">
        <div className="max-w-[1240px] m-auto flex flex-row justify-center items-center flex-wrap lg:flex-nowrap gap-y-8 md:gap-y-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-2xl text-center md:text-left"
          >
            <h2 className="text-3xl md:text-5xl lg:text-[64px] font-primary font-semibold mb-6 text-center lg:text-left pl-16">
              Founding Partners
            </h2>
            <p className="font-secondary text-[#FFFFFF] leading-[30px] text-center lg:text-left pl-16 md:text-lg">
              Our unique partnership model with{" "}
              <strong>our founding partner Quilt.AI</strong> demonstrates how a
              global entity can support and empower a rural organisation,
              fostering a mutually beneficial ecosystem.
            </p>
            <p className="font-secondary text-[#FFFFFF] leading-[30px] text-center lg:text-left pl-16 mt-5 md:mt-7 md:text-lg">
              <strong>
                As our primary partner and sponsor, Quilt.ai’s Anurag Banerjee
                and his team have supported Yuvabe’s multi-faceted growth and
                our mission of holistic empowerment. 
              </strong>{" "}
              Their faith and support of our many initiatives has served as the
              cornerstone of our progress!
            </p>

            {/* Read More Button */}
            <motion.a
              href="/get-involved/we-evolve"
              className="bg-white text-[#592AC7] font-semibold py-3 px-6 rounded-lg shadow-md inline-block ml-16 mt-5 md:mt-7"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
            </motion.a>
          </motion.div>

          {/* Co-Founders Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex justify-center"
          >
            <Player
              autoplay
              loop
              src="/images/cofounders.json"
              className="w-full h-auto max-h-[500px] sm:max-h-[550px] md:max-h-[600px]"
            />
          </motion.div>
        </div>
      </section>

      {/*Testimonials last*/}
      <section className="py-12 md:py-24 px-4 md:px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center text-xl md:text-2xl font-primary font-semibold mb-8"
        >
          Hear from our Quilt.AI market research team about their learnings,
          <br />
          challenges and experience of being part of a global organisation!
        </motion.h2>

        {/* Videos Section */}
        <div className="flex flex-col items-center gap-8">
          {/* Main Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full max-w-3xl aspect-video rounded-lg overflow-hidden"
          >
            <video
              src="./videos/hari testimonial.mp4"
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full rounded-lg"
            ></video>
          </motion.div>

          {/* Two Smaller Videos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl"
          >
            {/* Video 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <video
                src="./videos/praveen testimonial.mp4"
                controls
                className="w-full h-full rounded-lg"
              ></video>
            </motion.div>

            {/* Video 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <video
                src="./videos/poovendiran testimonial.mp4"
                controls
                className="w-full h-full rounded-lg"
              ></video>
            </motion.div>

            {/* Video 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <video
                src="./videos/abilash testimonial.mp4"
                controls
                className="w-full h-full rounded-lg"
              ></video>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quilt.AI Info Section */}
      <section className="bg-[#592AC7] text-[#FFFFFF] py-12 md:py-24 px-4 md:px-20">
        <div className="max-w-[1240px] m-auto">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 flex-wrap lg:flex-nowrap justify-items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-base font-primary font-semibold text-center lg:text-left">
                Today Yuvabe's market research and programming team has evolved
                into an integral part of Quilt.AI's global team, working on
                projects across geographies.
              </p>

              <p className="text-base font-primary font-semibold text-center lg:text-left">
                The skills and training received at Quilt.AI have enabled many
                Yuvabe alumni to take up new roles in leading organisations in
                India and abroad!
              </p>
            </motion.div>

            {/* Right Side - Stats Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center md:justify-end gap-8"
            >
              {/* Stat 1 */}
              <div className="flex flex-col items-center">
                <h2 className="text-7xl font-primary font-semibold text-[#F8A91E]">
                  30+
                </h2>
                <div className="bg-[#FFFFFF] text-[#000000] px-4 py-2 mt-4 rounded-full text-sm font-primary font-semibold text-center">
                  Yuvabe youth engaged by Quilt.AI
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center">
                <h2 className="text-7xl font-primary font-semibold text-[#91C644]">
                  80+
                </h2>
                <div className="bg-[#FFFFFF] text-[#000000] px-4 py-2 mt-4 rounded-full text-sm font-primary font-semibold text-center">
                  Projects completed
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Together we worked with */}
      <section className="bg-[#FFF9EA] py-12 md:py-18 px-4 md:px-24">
        <div className="max-w-[1240px] m-auto">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-48 items-center justify-items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-primary font-semibold text-[#592AC7] text-center lg:text-left">
                Together <br className="hidden lg:block" /> we worked{" "}
                <br className="hidden lg:block" /> with
              </h2>
            </motion.div>

            {/* Right Side - Partner Logos */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-2 gap-8 items-center justify-items-center"
            >
              {[
                {
                  src: "/assets/unwomen.svg",
                  alt: "UN Women",
                  width: 200,
                  height: 200,
                },
                {
                  src: "/assets/billgates.svg",
                  alt: "Bill & Melinda Gates Foundation",
                  width: 300,
                  height: 300,
                },
                {
                  src: "/assets/coke.svg",
                  alt: "Coca-Cola",
                  width: 200,
                  height: 200,
                },
                {
                  src: "/assets/visa.svg",
                  alt: "Visa",
                  width: 100,
                  height: 100,
                },
              ].map((logo, index) => (
                <motion.div
                  key={logo.alt}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
