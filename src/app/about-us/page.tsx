"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";

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
        <section className="py-8 md:py-16 text-center px-4 md:px-0">
          <motion.h1
            className="text-4xl md:text-6xl font-primary font-semibold text-[#592AC7]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Who we are ?
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mt-2 font-primary font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            A Thriving Ecosystem for Youth in Auroville
          </motion.p>

          <motion.p
            className="mt-8 text-[#000000] font-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            "The ignited minds of the youth are the most powerful <br />
            resource on earth." — Dr. APJ Abdul Kalam
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
            className="mt-6 text-lg md:text-xl text-[#000000] font-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            Yuvabe is more than just an organization—it's a dynamic movement
            that empowers youth in Auroville to grow, innovate, and create
            meaningful impact.
            <br />
            <motion.span
              className="block mt-4 font-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
              Through our <strong>Work. Serve. Evolve.</strong> approach, we
              enable youth to:
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

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 px-4 md:px-8">
          {/* Card 1 */}
          <motion.div
            className="bg-white shadow-md rounded-xl p-6 w-full sm:w-[280px] min-h-[250px] flex flex-col lg:items-start text-start items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/assets/wwp.svg"
              alt="Work with Purpose"
              width={60}
              height={60}
            />
            <h3 className="font-primary font-semibold mt-4 text-lg lg:items-start text-start items-center justify-center">
              Work with Purpose
            </h3>
            <p className="text-[#000000] font-secondary mt-2 text-sm text-center lg:text-left">
              Gain technical and career skills to build a solid foundation.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white shadow-md rounded-xl p-6 w-full sm:w-[280px] min-h-[250px] flex flex-col lg:items-start text-start items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/assets/swi.svg"
              alt="Serve with Impact"
              width={60}
              height={60}
            />
            <h3 className="font-primary font-semibold mt-4 text-lg text-center lg:text-left">
              Serve with Impact
            </h3>
            <p className="text-[#000000] font-secondary mt-2 text-sm text-center lg:text-left">
              Serve with Impact – Give back to the community through meaningful
              initiatives.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white shadow-md rounded-xl p-6 w-full sm:w-[280px] min-h-[250px] flex flex-col lg:items-start text-start items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/assets/ec.svg"
              alt="Evolve Continuously"
              width={60}
              height={60}
            />
            <h3 className="font-primary font-semibold mt-4 text-lg text-center lg:text-left">
              Evolve Continuously
            </h3>
            <p className="text-[#000000] font-secondary mt-2 text-sm text-center lg:text-left">
              Cultivate self-awareness and personal mastery.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Evolve Program */}
      <section className="py-8 md:py-16 bg-[#FFF9EA] mt-24 px-4 md:px-24 text-center">
        <div className="max-w-[1240px] m-auto">
          {/* Title */}
          <motion.h2
            className="text-4xl md:text-5xl font-semibold font-primary mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our Unique Evolve Program
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-[#000000] text-center text-xl font-secondary max-w-full mx-auto mb-14 ml-4"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            The Evolve Program is a transformative journey that nurtures young
            adults into confident, self-aware leaders. It goes beyond skill-
            <br />
            building—it's about personal mastery and growth.
          </motion.p>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 flex-wrap xl:flex-nowrap justify-center xl:justify-baseline">
            {/* Animated GIF */}
            <motion.div
              className="grid grid-cols-1 gap-4 w-full max-w-xl md:max-w-2xl"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Player
                autoplay
                loop={true}
                keepLastFrame
                src="/images/flower.json"
                className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
              ></Player>
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="w-full xl:w-1/2 "
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <p className="text-base font-secondary text-center lg:text-left">
                  <span className="font-bold">
                    Self-Awareness & Emotional Resilience
                  </span>{" "}
                  – Understand yourself, build emotional intelligence, and
                  navigate challenges with clarity.
                </p>
              </div>
              <div className="mb-6">
                <p className="text-base font-secondary text-center lg:text-left">
                  <span className="font-bold">
                    Self-Expression through Theater & Creativity
                  </span>{" "}
                  – Find your voice, explore storytelling, and enhance
                  communication through performance and creative arts.
                </p>
              </div>

              <div className="mb-6">
                <p className="text-base font-secondary text-center lg:text-left">
                  <span className="font-bold">
                    Self-Confidence & Leadership Development
                  </span>{" "}
                  – Set goals, develop a growth mindset, and cultivate the
                  leadership skills to inspire change.
                </p>
              </div>

              {/* Know More Button */}
              <motion.a
                href="/get-involved/we-evolve"
                className="bg-[#592AC7] text-white font-semibold py-3 px-6 rounded-lg shadow-md inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Know More
              </motion.a>
            </motion.div>
          </div>

          {/* Final Description */}
          <motion.p
            className="text-[#000000] text-center text-xl font-secondary mt-12 max-w-full mx-auto  text-wrap "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            viewport={{ once: true }}
          >
            Through interactive workshops, mentorship, and real-world
            challenges, participants discover their strengths, express
            themselves authentically, and step into leadership with confidence.
          </motion.p>
          <div className="mt-6 text-[18px]">
            <motion.p
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: true }}
            >
              Join us and embark on your personal growth journey!{" "}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-8 md:py-16 text-center  px-5 md:px-8 xl:px-0 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-primary font-semibold mb-12"
        >
          Our Values
        </motion.h2>

        <div className="relative flex flex-wrap justify-center items-center gap-8">
          {/* GIF with Bounce Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/creativityf.gif"
              alt="Our Values"
              width={800}
              height={800}
              unoptimized
              className="w-full max-w-3xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section
        id="our-impact"
        ref={impactSectionRef}
        className="bg-[#592AC7] text-[#FFFFFF] py-8 md:py-16 text-center  px-5 md:px-8 xl:px-0 lg:scroll-mt-14"
      >
        <div className="max-w-[1240px] m-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-primary font-semibold mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Impact
          </motion.h2>

          <motion.p
            className="mb-12 font-secondary text-[#FFFFFF]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Committed to serving the community, we enable the educational
            empowerment in schools in and around
            <br /> Auroville along with supporting digital transformation of
            fellow community organisations.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-5xl md:text-7xl font-primary font-semibold">
            {[
              { count: youthCount, color: "#8CD1DC", label: "Youth Engaged" },
              {
                count: hoursCount,
                color: "#F2D789",
                label: "Hours of community service",
              },
              {
                count: projectsCount,
                color: "#BBD594",
                label: "Projects Completed",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <span
                  className="font-primary font-semibold"
                  style={{ color: item.color }}
                >
                  {item.count}
                </span>
                <p className="text-2xl pt-4">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.button
            className="mt-12 px-8 py-3 bg-[#FFFFFF] text-[#592AC7] font-primary font-semibold rounded-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={() =>
              window.open(
                "https://heyzine.com/flip-book/a7ee0bc0d2.html#page/1",
                "_blank"
              )
            }
          >
            Impact Report
          </motion.button>
        </div>
      </section>

      {/* SDGs Cards Section */}
      <section className="py-8 md:py-16 bg-[#FEF8EE] text-center  px-5 md:px-8 xl:px-0">
        <motion.p
          className="text-[#000000] font-secondary mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Yuvabe's efforts to educate and re-imagine the future of work is
          closely aligned with the UN Sustainable
          <br /> Development Agenda 2030. Below are the priority SDGs that align
          with our mission.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6">
          {["4", "8", "10"].map((num, index) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Image
                src={`/assets/${num}.png`}
                alt={`SDG ${num}`}
                width={200}
                height={200}
                className="relative"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 md:py-16 text-center px-5 md:px-8 xl:px-0">
        <h2 className="text-4xl md:text-5xl font-primary font-semibold mb-12">
          Testimonials
        </h2>
        <div className="flex flex-col items-center gap-8">
          <iframe
            className="w-full max-w-4xl aspect-video rounded-lg"
            src="https://www.youtube.com/embed/LAYxYUrJh2A?autoplay=1&mute=1"
            title="Main Testimonial"
            allowFullScreen
          ></iframe>

          <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 w-full max-w-4xl">
            <iframe
              className="w-full max-w-[300px] md:max-w-[400px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/i98KcQx5ct4"
              title="Testimonial 1"
              allowFullScreen
            ></iframe>

            <iframe
              className="w-full max-w-[300px] md:max-w-[400px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/INNP_w6fJF4"
              title="Testimonial 2"
              allowFullScreen
            ></iframe>

            <iframe
              className="w-full max-w-[300px] md:max-w-[400px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/xZWMWYAzqaY"
              title="Testimonial 3"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Support Cards Section */}
      <section className="py-8 md:py-16 bg-[#FFF9EA] text-center  px-5 md:px-8 xl:px-0">
        <div className="max-w-[1240px] m-auto">
          <h2 className="text-4xl font-primary font-semibold mb-18">
            There are many ways in which you too can <br /> support the cause of
            youth empowerment.
          </h2>

          <div className="flex flex-wrap justify-center gap-10">
            {/* Card 1 */}
            <Link href="/get-involved/talk-to-us">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-70 h-[260px] p-8 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-110 cursor-pointer"
              >
                <Image
                  src="/assets/collaborate.svg"
                  alt="Collaborate"
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <h3 className="text-lg font-primary font-semibold pr-26 mb-1">
                  Collaborate
                </h3>
                <p className="text-sm text-[#000000] font-secondary text-left">
                  Be it AI-driven market research, ERP solution for your
                  enterprise, support in digital marketing or design
                  consultancy, our team is here to help.
                </p>
              </motion.div>
            </Link>

            {/* Card 2 */}
            <Link href="/get-involved/support-us">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-70 h-[260px] p-8 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-110 cursor-pointer"
              >
                <Image
                  src="/assets/support.svg"
                  alt="Support"
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <h3 className="text-lg font-primary font-semibold pr-36 mb-1">
                  Support
                </h3>
                <p className="text-sm text-[#000000] font-secondary text-left">
                  Contribute time, skills, or resources by becoming a sponsor,
                  donor, or mentor for our youth.
                </p>
              </motion.div>
            </Link>

            {/* Card 3 */}
            <Link href="/get-involved/join-us">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-70 h-[260px] p-8 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-110 cursor-pointer"
              >
                <Image
                  src="/assets/join.svg"
                  alt="Join"
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <h3 className="text-lg font-primary font-semibold pr-46 mb-1">
                  Join
                </h3>
                <p className="text-sm text-[#000000] font-secondary text-left">
                  Want to be part of a young company, where you can learn, work,
                  serve, and evolve? Get in touch with us!
                </p>
              </motion.div>
            </Link>
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
            <h2 className="text-3xl md:text-5xl lg:text-[64px] font-primary font-semibold mb-6 text-center lg:text-left">
              Founding Partners
            </h2>
            <p className="font-secondary text-[#FFFFFF] leading-[30px] text-center lg:text-left">
              Our unique partnership model with{" "}
              <strong>our founding partner Quilt.AI</strong> demonstrates how a
              global entity can support and empower a rural organisation,
              fostering a mutually beneficial ecosystem.
            </p>
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

      {/* Image Section */}

      {/* What Is Quilt.AI Section */}
      <section className="py-8 md:py-16 px-4 md:px-20 text-center bg-white">
        <div className="max-w-[1240px] m-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 flex-wrap lg:flex-nowrap">
            {/* Text Content */}
            <div className=" text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-primary font-semibold mb-4 text-center lg:text-left">
                What Is Quilt.AI?
              </h2>
              <p className="text-[#000000] font-secondary mb-6 text-center lg:text-left text-[18px]">
                Based in Singapore and Boston, USA, <strong>Quilt.AI</strong> is
                an AI-powered insights company whose aim is to provide a more
                holistic, nuanced view of humanity using internet data.
              </p>
              <p className="text-[#000000] font-secondary mb-4 text-center lg:text-left text-[18px]">
                By merging machine learning with human, cultural intelligence,
                Quilt.AI's team of anthropologists, engineers, and designers
                develop dynamic models and maps from the billions of data points
                generated from digital behavior; ultimately building a
                quantitatively validated understanding of the consumers,
                categories, and culture.
              </p>
              <p className="text-[#000000] font-secondary mb-4 text-center lg:text-left text-[18px]">
                As a socially driven technology company, Quilt.AI supports
                nonprofits and foundations, giving their time to causes they
                care about; like gender equity, gender-based violence, climate,
                and public health.
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <Image
                src="/assets/qulit.webp"
                alt="Quilt.AI Logo"
                width={400}
                height={400}
                className="w-auto h-auto max-w-xs sm:max-w-sm md:max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quilt Section */}
      <section className="py-8 md:py-16 bg-[#FFF9EA] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-4 md:px-6">
        <div className="max-w-[1240px] m-auto flex flex-row justify-center lg:justify-between items-center flex-wrap lg:flex-nowrap gap-y-8 md:gap-y-16 gap-x-8">
          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex flex-wrap justify-center  gap-14 w-full md:w-auto"
          >
            <Image
              src="/assets/qimg.webp"
              alt="Founding Partners"
              width={600}
              height={600}
              className="relative z-5 w-auto h-auto max-w-xs sm:max-w-sm md:max-w-xl"
            />

            <Image
              src="/assets/gc.svg"
              alt="Quilt.AI Logo"
              width={140}
              height={180}
              className="absolute -top-6 left-10 md:left-20 w-auto h-auto max-w-[100px] md:max-w-[140px]"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:max-w-lg text-[#000000] space-y-4 text-base md:text-lg text-center md:text-left leading-[30px]"
          >
            <p className="font-secondary font-normal text-center lg:text-left">
              Aligned sensibilities and a mutual drive to support communities
              led Yuvabe co-founders and
            </p>

            <p className="font-secondary text-center lg:text-left">
              Quilt.AI co-founder, Anurag Banerjee, to try out a partnership
              model with the newly founded Quilt.AI in 2019.
            </p>

            <p className="font-secondary text-center lg:text-left">
              As Quilt.AI's Singapore team expanded steadily, more and more
              youth from Auroville and Bioregion were onboarded in Yuvabe to
              slowly learn the ropes of market research, data analysis,
              communication, and support their global team.
            </p>

            <p className="font-secondary text-center lg:text-left">
              <strong>
                As our primary partner and sponsor, Anurag Banerjee and his team
                have supported Yuvabe youth's multi-faceted growth and our
                mission of holistic empowerment.
              </strong>
              Their faith and support of our many initiatives, from STEAM
              Education to youth workshops, has served as the cornerstone of our
              progress!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quilt.AI Info Section */}
      <section className="bg-[#592AC7] text-[#FFFFFF] py-8 md:py-12 px-4 md:px-20">
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

      {/*Testimonials last*/}
      <section className="py-8 md:py-12 px-4 md:px-6">
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

      {/* Together we worked with */}
      <section className="bg-[#FFF9EA] py-8 md:py-10 px-4 md:px-6">
        <div className="max-w-[1240px] m-auto">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-items-center">
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
