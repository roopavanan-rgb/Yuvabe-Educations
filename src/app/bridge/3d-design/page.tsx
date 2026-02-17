"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target } from "lucide-react";

export default function design() {
  return (
    <>
      {/* Hero */}
      {/* Wrapper */}
      <section className="bg-gradient-to-b from-[#3416D8] to-[#6081D0] pb-16 xl:pb-32 md:pb-24 xl:pt-40 pt-16 md:pt-40 relative overflow-hidden">
        <motion.div
          className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-6 md:gap-y-12 lg:gap-y-12 z-10"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Text */}
          <div className="flex flex-col gap-y-6">
            <h1 className="font-open-sans text-white font-extrabold xl:text-5xl md:text-4xl text-3xl  mb-2 md:mb-3 lg:mb-4 max-w-[800px] z-10 text-center lg:text-left">
              Transform Your Future with 3D Design - Online Programme
            </h1>
            <p className="font-open-sans text-white font-bold   md:text-xl text-[16px] z-10 text-center lg:text-left">
              A 12-Week Online Industry-Oriented Learning Journey | Live Classes
              | Launching March 2026
            </p>
            <p className="font-open-sans text-white font-normal md:text-[18px] text-[14px] max-w-[1065px] z-10 text-center lg:text-left">
              A hands-on course by
              <span className="font-bold">Yuvabe Education Bridge Program</span>
              in collaboration with 3DPD, pioneers in 3D printing and product
              innovation in India. <br /> <br /> Master modern product design
              skills from the comfort of your home. The Program in 3D Product
              Design offers live online training in CAD modeling, design
              thinking, and digital prototyping using the industry-standard tool
              Fusion 360. Learn from experienced mentors, collaborate with
              peers, and industry experts — all online.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-row justify-start gap-8 flex-wrap md:flex-nowrap z-10">
            {/* Apply Now */}
            <Link
              href={
                "https://forms.gle/kPdDvDWuoC2BYDJAA"
              }
              target="_blank"
            >
              <div className="bg-white px-9 py-[12px] md:py-[18.5px] rounded-4xl w-2xs">
                <p className="font-open-sans font-bold md:text-xl text-[14px] md:text-[16px] text-[#3518D8] text-center">
                  Apply Now
                </p>
              </div>
            </Link>

            {/* Download Brochure */}
            <Link href={"../docs/3D Printing Brochure New.pdf"} target="_blank">
              <div className="bg-transparent px-9 py-[12px] md:py-[18.5px] rounded-4xl border-white border-2 w-2xs">
                <p className="font-open-sans font-bold  md:text-xl text-[14px] md:text-[16px] text-white text-center">
                  Download Brochure
                </p>
              </div>
            </Link>
          </div>
        </motion.div>
        {/* Image Wrapper */}
        <motion.div
          className="absolute top-[70%] md:top-[-10%] right-[-5%] z-1"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/3d-design/Group 47.png"
            alt="Bridge Image"
            width={474.14}
            height={456.82}
            className="h-[400px] md:h-[500px] lg:h-[550px] object-cover"
          />
        </motion.div>
        {/* Blur Effects */}
        <div className="absolute w-[488px] h-[488px] left-0 -top-0 bg-[rgba(152,0,203,0.5)] filter blur-[105.805px] scale-50 md:scale-75 lg:scale-100"></div>
        <div className="absolute w-[511.51px] h-[511.51px] right-0 bottom-0 bg-[rgba(152,0,203,0.5)] filter blur-[164.805px] scale-50 md:scale-75 lg:scale-100"></div>
      </section>

      {/* Why This Course */}
      <section className="bg-white pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24 relative overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-6 md:gap-y-12 lg:gap-y-12 z-10">
          {/* Translucent Box */}
          <motion.div
            className="flex flex-col gap-y-6 py-8 md:py-12 lg:py-16 lg:px-[90px] md:px-16 px-4 custom-glass custom-glass-border border-[1.5px] z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }} // Ensure the animation only runs once when in view
          >
            <motion.h2
              className="font-bold font-open-sans leading-[150%] xl:text-5xl md:text-4xl text-3xl  bg-gradient-to-b from-[#3416D8] via-[#3416D8] via-[21.54%] to-[#A887F6] to-[88.46%] bg-clip-text text-transparent text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Why this Course?
            </motion.h2>
            <div className="lg:text-center">
              <ul className="list-disc list-inside lg:text-left md:inline-block">
                <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-black">
                  <span className="font-bold">Live Online Sessions</span> – Join
                  interactive classes from anywhere in the world.
                </li>
                <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-black">
                  <span className="font-bold">Mentorship from Experts</span> –
                  Get trained by working designers and engineers.
                </li>
                <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-black">
                  <span className="font-bold">Hands-On Projects</span> – Work on
                  real product design challenges with group feedback.
                </li>
                <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-black">
                  <span className="font-bold"> Software Skills</span> – Learn
                  and practice Fusion 360, the industry-preferred CAD tool.
                </li>
                <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-black">
                  <span className="font-bold">Portfolio & Certification</span> –
                  Build a design portfolio and earn a recognized certificate.
                </li>
                <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-black">
                  <span className="font-bold">Evening Classes</span> –
                  Convenient timing for students and working professionals.
                </li>
                <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-black">
                  <span className="font-bold">Global Access</span> – Learn from
                  anywhere — no travel, no relocation, just results.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        {/* Image */}
        <Image
          src="/images/3d-design/Group 427320990.png"
          alt="Bridge Image"
          width={1009}
          height={546.64}
          className="absolute bottom-0 left-0 h-auto md:h-auto lg:h-auto object-cover z-1"
        />
      </section>

      {/* Who Should Apply */}
      {/* Wrapper */}
      <section className="bg-gradient-to-b from-[#3416D8] to-[#6081D0] pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-40 relative overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-6 md:gap-y-12 lg:gap-y-12 z-10">
          {/* Text */}
          <motion.div
            className="flex flex-col gap-y-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-open-sans text-white font-bold xl:text-5xl md:text-4xl text-3xl  mb-2 md:mb-3 lg:mb-4 z-10 text-center lg:text-left">
              Who Should Apply?
            </h2>
            <p className="font-open-sans text-white font-normal md:text-[18px] text-[14px] max-w-[1065px] z-10 text-center lg:text-left">
              This course is designed for:
            </p>
            <ul className="list-disc list-inside lg:text-left md:inline-block z-10">
              <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-white">
                <span className="font-bold">Students & Graduates</span> –
                Engineering, design, architecture, or any creative background
              </li>
              <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-white">
                <span className="font-bold">Makers & DIYers</span> – Hobbyists
                and tinkerers looking to level up with structured training
              </li>
              <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-white">
                <span className="font-bold">Entrepreneurs & Innovators</span> –
                Build your product concept before prototyping
              </li>
              <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-white">
                <span className="font-bold">
                  Professionals & Career Switchers
                </span>
                – Transition into the growing design industry tool.
              </li>
            </ul>
            <p className="font-open-sans text-white font-normal md:text-[18px] text-[14px] max-w-[1065px] z-10">
              If you’ve got a maker’s mindset and a willingness to learn, this
              is for you.
            </p>
          </motion.div>
        </div>
        {/* Image Wrapper */}
        <motion.div
          className="absolute bottom-[-5%] md:bottom-[-5%] right-[-50%] md:right-[-5%] z-1"
          initial={{ opacity: 0, x: 100 }} // Start 50px to the right of its normal position
          whileInView={{ opacity: 1, x: 0 }} // Animate to its original position
          transition={{ duration: 0.8 }} // Duration of the animation
          viewport={{ once: true }} // Trigger only once when the image is in view
        >
          <Image
            src="/images/3d-design/Firefly_High-resolution.png"
            alt="Bridge Image"
            width={478}
            height={526}
            unoptimized
            className="max-w-[30%] md:max-w-[50%] lg:max-w-full object-cover"
          />
        </motion.div>
        {/* Blur Effects */}
        <div className="absolute w-[488px] h-[488px] left-0 -top-0 bg-[rgba(152,0,203,0.5)] filter blur-[105.805px] scale-50 md:scale-75 lg:scale-100"></div>
        <div className="absolute w-[511.51px] h-[511.51px] right-0 bottom-0 bg-[rgba(152,0,203,0.5)] filter blur-[164.805px] scale-50 md:scale-75 lg:scale-100"></div>
      </section>

      {/* What You'll Learn */}
      <section className="bg-white pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24 relative overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-6 md:gap-y-12 lg:gap-y-12 z-10">
          {/* Translucent Box */}
          <motion.div
            className="flex flex-col gap-y-6 py-8 md:py-12 lg:py-16 lg:px-[90px] md:px-16 px-4 custom-glass custom-glass-border border-[1.5px] z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }} // Ensure the animation only runs once when in view
          >
            <motion.h2
              className="font-bold leading-[150%] xl:text-5xl md:text-4xl text-3xl  bg-gradient-to-b from-[#3416D8] via-[#3416D8] via-[21.54%] to-[#A887F6] to-[88.46%] bg-clip-text text-transparent text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              What You'll Learn
            </motion.h2>
            <p className="font-open-sans  md:text-[18px] text-[14px] text-black text-center lg:text-left">
              Over 12 weeks, you'll go from ideas to :
            </p>
            <div>
              <ul className="list-disc list-inside lg:text-left md:inline-block">
                <li className="font-open-sans font-bold  md:text-[18px] text-[14px] text-black">
                  Understand product design fundamentals, including
                  forces,materials, and structural behavior.
                </li>
                <br />
                <li className="font-open-sans font-bold  md:text-[18px] text-[14px] text-black">
                  Perform manual calculations to analyze and improve real-world
                  design concepts.
                </li>
                <br />
                <li className="font-open-sans font-bold  md:text-[18px] text-[14px] text-black">
                  Select appropriate materials based on design
                  needs,performance, and sustainability.
                </li>
                <br />
                <li className="font-open-sans font-bold  md:text-[18px] text-[14px] text-black">
                  Create 3D digital models and assemblies using Autodesk Fusion
                  360.
                </li>
                <br />
                <li className="font-open-sans font-bold  md:text-[18px] text-[14px] text-black">
                  Apply your learning to complete a full design project—from
                  concept to digital prototype.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        {/* Image */}
        <Image
          src="/images/3d-design/Group 427321013.png"
          alt="Bridge Image"
          width={1070}
          height={711}
          className="absolute bottom-0 xl:bottom-[-25%] right-0 xl:right[-8%] h-full md:h-full lg:h-full object-cover z-1"
        />
      </section>

      {/* Course Schedule, Format, and Fees */}
      {/* Wrapper */}
      <section className="bg-gradient-to-b from-[#3416D8] to-[#6081D0] pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-40 relative overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-6 md:gap-y-12 lg:gap-y-12 z-10">
          {/* Text */}
          <motion.div
            className="flex flex-col gap-y-6"
            initial={{ opacity: 0, x: -25 }} // Start with opacity 0 and slide in from the left
            whileInView={{ opacity: 1, x: 0 }} // Animation trigger when in view
            transition={{ duration: 0.8 }} // Duration of animation
            viewport={{ once: true }} // Ensure the animation only runs once when in view
          >
            <h2 className="font-open-sans text-white font-bold xl:text-5xl md:text-4xl text-3xl  mb-2 md:mb-3 lg:mb-4 lg:text-left text-center z-10">
              Course Schedule, Format, and Fees
            </h2>
            <ul className="list-disc list-inside lg:text-left md:inline-block z-10">
              <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-white">
                <span className="font-bold">Duration:</span> 12 Weeks
              </li>
             
              {/* <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-white">
                <span className="font-bold">Format:</span> 100% Live Online
              </li> */}
              <br />
              <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-white">
                <span className="font-bold">Schedule: </span> Monday to Friday
              </li>
              <br />
              <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-white">
                <span className="font-bold">Class Time:</span>
                9:00 AM to 5:00 PM (IST)
              </li>
            
              {/* <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-white">
                <span className="font-bold">Location:</span>
                Anywhere you are, just bring a laptop and Wi-Fi
              </li> */}
        
              {/* <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-white">
                <span className="font-bold">Registration Fee:</span>
                Rs. 500
              </li> */}
           
              {/* <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-white">
                <span className="font-bold">Course Fee:</span>
                Rs. 9000 (Rs 3000 per month)
              </li> */}
            </ul>
          </motion.div>
        </div>
        {/* Image */}
        {/* First Image (animate from left) */}
        <motion.div
          className="absolute top-[-5%] md:top-[-5%] left-[-25%] xl:left-[-15%] md:left-[-20%] max-w-[50%] md:max-w-[60%] xl:max-w-full object-cover z-1"
          initial={{ opacity: 0, x: -50 }} // Start with opacity 0 and slide from the left
          whileInView={{ opacity: 1, x: 0 }} // Trigger animation when in view
          transition={{ duration: 0.8 }} // Duration of animation
          viewport={{ once: true }} // Ensure the animation only runs once when in view
        >
          <Image
            src="/images/3d-design/3d-07.png"
            alt="First Image"
            width={368}
            height={373}
            unoptimized
            className="object-cover"
          />
        </motion.div>

        {/* Second Image (animate from right) */}
        <motion.div
          className="absolute xl:top-[30%] top-[40%] xl:right-[15%] right-0 max-w-[50%] md:max-w-[60%] xl:max-w-full object-cover z-1"
          initial={{ opacity: 0, x: 100 }} // Start with opacity 0 and slide from the left
          whileInView={{ opacity: 1, x: 0 }} // Trigger animation when in view
          transition={{ duration: 0.8 }} // Duration of animation
          viewport={{ once: true }} // Ensure the animation only runs once when in view
        >
          <Image
            src="/images/3d-design/3d-05.png"
            alt="Second Image"
            width={447.26}
            height={484.25}
            unoptimized
            className="object-cover"
          />
        </motion.div>
        {/* Blur Effects */}
        <div className="absolute w-[488px] h-[488px] left-0 -top-0 bg-[rgba(152,0,203,0.5)] filter blur-[105.805px] scale-50 md:scale-75 lg:scale-100"></div>
        <div className="absolute w-[511.51px] h-[511.51px] right-0 bottom-0 bg-[rgba(152,0,203,0.5)] filter blur-[164.805px] scale-50 md:scale-75 lg:scale-100"></div>
      </section>

      {/* What Makes This Programme Different */}
      <section className="bg-white pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24 relative overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-6 md:gap-y-12 lg:gap-y-12 z-10">
          {/* Translucent Box */}
          <motion.div
            className="flex flex-col gap-y-6 py-8 md:py-12 lg:py-16 lg:px-[90px] md:px-16 px-4 custom-glass custom-glass-border border-[1.5px] z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }} // Trigger the animation only once when the element comes into view
          >
            <motion.h2
              className="font-bold leading-[150%] xl:text-5xl md:text-4xl text-3xl  bg-gradient-to-b from-[#3416D8] via-[#3416D8] via-[21.54%] to-[#A887F6] to-[88.46%] bg-clip-text text-transparent text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              What Makes This Programme Different
            </motion.h2>

            <div className="md:text-center">
              <ul className="list-disc list-inside lg:text-left md:inline-block">
                <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-black">
                  <span className="font-bold">
                    Paid Internships for Top Performers
                  </span>
                  <br />
                  The 3 best-performing and eligible students will receive paid
                  internship opportunities.
                </li>
                <br />
                <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-black">
                  <span className="font-bold">
                    Insight into Industry Demand
                  </span>
                  <br />
                  Understand the growing need for product and industrial design
                  skills across sectors.
                </li>
                <br />
                <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-black">
                  <span className="font-bold">Job-Ready Skills</span>
                  <br />
                  Build practical skills for roles like CAD Designer, Drafter,
                  or Technician.
                </li>
                <br />
                <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-black">
                  <span className="font-bold">Alumni Community Access</span>
                  <br />
                  Join a supportive network of learners and professionals after
                  the course.
                </li>
                <br />
                <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-black">
                  <span className="font-bold">Professional Portfolio</span>
                  <br />
                  Complete a full design project and create a portfolio to
                  showcase your abilities.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        {/* Image */}
        <Image
          src="/images/3d-design/3d-08.png"
          alt="Bridge Image"
          width={1070}
          height={711}
          className="absolute bottom-[-10%] xl:bottom-[-10%] left-0 xl:left-[-14%] h-full md:h-full lg:h-full object-cover z-1"
        />
      </section>

      {/* Where This Can Take You */}
      <section className="bg-gradient-to-b from-[#3416D8] to-[#6081D0] pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-40 relative overflow-hidden">
        <motion.div
          className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-6 md:gap-y-12 lg:gap-y-12 z-10"
          initial={{ opacity: 0, x: -25 }} // Start with opacity 0 and slide from the left
          whileInView={{ opacity: 1, x: 0 }} // Trigger animation when in view
          transition={{ duration: 0.8 }} // Duration of animation
          viewport={{ once: true }} // Trigger only once when the element comes into view
        >
          {/* Text */}
          <div className="flex flex-col gap-y-6 z-10">
            <h2 className="font-open-sans text-white font-bold xl:text-5xl md:text-4xl text-3xl  mb-2 md:mb-3 lg:mb-4 text-center lg:text-left z-10">
              Where This Can Take You
            </h2>
            <p className="font-open-sans font-bold  md:text-xl text-[16px] text-white text-center lg:text-left">
              By the end of the course, you’ll be able to:
            </p>
            <ul className="list-disc list-inside lg:text-left md:inline-block z-10">
              <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-white">
                Work with design studios or engineering teams on product
                development and 3D modeling.
              </li>
              <br />
              <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-white">
                Join manufacturing Industries to support design and production
                processes.
              </li>
              <br />
              <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-white">
                Collaborate with startups or innovation labs on early-stage
                product concepts.
              </li>
              <br />
              <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-white">
                Offer freelance CAD and 3D design services to clients across
                industries.
              </li>
              <br />
              <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-white">
                Start your own business in product design, prototyping, or
                digital design services.
              </li>
            </ul>
          </div>
        </motion.div>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Start with opacity 0 and slide from the left
          whileInView={{ opacity: 1, x: 0 }} // Trigger animation when in view
          transition={{ duration: 0.8 }} // Duration of animation
          viewport={{ once: true }} // Ensure the animation only runs once when in view
          className="absolute xl:top-[30%] top-[40%] xl:right-[-4%] right-0 max-w-[50%] md:max-w-[60%] xl:max-w-full object-cover z-1"
        >
          <Image
            src="/images/3d-design/3d-06.png"
            alt="Bridge Image"
            width={511.7}
            height={419.2}
            unoptimized
            className="object-cover"
          />
        </motion.div>
        {/* Blur Effects */}
        <div className="absolute w-[488px] h-[488px] left-0 -top-0 bg-[rgba(152,0,203,0.5)] filter blur-[105.805px] scale-50 md:scale-75 lg:scale-100"></div>
        <div className="absolute w-[511.51px] h-[511.51px] right-0 bottom-0 bg-[rgba(152,0,203,0.5)] filter blur-[164.805px] scale-50 md:scale-75 lg:scale-100"></div>
      </section>

      {/* What Makes This Programme Different */}
      <section className="bg-white pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24 relative overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-6 md:gap-y-12 lg:gap-y-12 z-10">
          {/* Enrollment Process */}
          <div className="flex flex-col gap-y-6">
            <motion.h2
              className="font-bold leading-[150%] xl:text-5xl md:text-4xl text-3xl  bg-gradient-to-b from-[#3416D8] via-[#3416D8] via-[21.54%] to-[#A887F6] to-[88.46%] bg-clip-text text-transparent text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Enrolment Process
            </motion.h2>
            {/* Text */}
            <div>
              <ol className="list-inside lg:text-left list-none">
                <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-black text-center">
                  <span className="font-bold">Apply Online</span>
                </li>
                <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-black text-center">
                  <span className="font-bold">Pay & Confirm Enrollment </span>
                  Limited Seats — Only 30 Spots Per Batch!
                </li>
              </ol>
            </div>
            {/* Buttons */}
            <motion.div
              className="flex flex-row justify-center gap-8 flex-wrap md:flex-nowrap z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Apply Now */}
              <Link
                href={
                  "https://forms.gle/kPdDvDWuoC2BYDJAA"
                }
                target="_blank"
              >
                <div className="bg-[#3518D8] px-9 py-[12px] md:py-[18.5px] rounded-4xl w-2xs">
                  <p className="font-open-sans font-bold md:text-xl text-[14px] md:text-[16px] text-white text-center">
                    Apply Now
                  </p>
                </div>
              </Link>

              {/* Download Brochure */}
              <Link
                href={"../docs/3D Printing Brochure New.pdf"}
                target="_blank"
              >
                <div className="bg-transparent px-9 py-[12px] md:py-[18.5px] rounded-4xl border-[#3518D8] border-2 w-2xs">
                  <p className="font-open-sans font-bold  md:text-xl text-[14px] md:text-[16px] text-[#3518D8] text-center">
                    Download Brochure
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>
          {/* Translucent Box / FAQs */}
          <motion.div
            className="flex flex-col gap-y-6 py-8 md:py-12 lg:py-16 lg:px-[90px] md:px-16 px-4 custom-glass custom-glass-border border-[1.5px] z-10 justify-center items-center "
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-bold leading-[150%] xl:text-5xl md:text-4xl text-3xl  bg-gradient-to-b from-[#3416D8] via-[#3416D8] via-[21.54%] to-[#A887F6] to-[88.46%] bg-clip-text text-transparent text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              FAQs
            </motion.h2>
            <div>
              <ul className="list-none list-inside text-center md:inline-block">
                <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-black">
                  <span className="font-bold">
                    Is the course beginner-friendly?
                  </span>
                  <br />
                  Yes! No prior experience in design or CAD is required.
                </li>
                <br />
                <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-black">
                  <span className="font-bold">Do I need special software?</span>
                  <br />
                  We’ll provide access to Fusion 360, which works on most
                  laptops.
                </li>
                <br />
                <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-black">
                  <span className="font-bold">
                    Can I join from outside India?
                  </span>
                  <br />
                  Absolutely — this course is open globally.
                </li>
                <br />
                <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-black">
                  <span className="font-bold">
                    What happens if I miss a class?
                  </span>
                  <br />
                  Recordings and catch-up sessions will be available for missed
                  content.
                </li>
                <br />
                <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-black">
                  <span className="font-bold">Will I get certified?</span>
                  <br />
                  Yes, upon successful completion of your project and
                  assessments.
                </li>
                <br />
                <li className="font-open-sans font-normal  md:text-[18px] text-[14px] text-black">
                  <span className="font-bold">Is there a final project?</span>
                  <br />
                  Yes, your capstone project is a real-world challenge to test
                  and showcase your skills.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Translucent Box / A Collaboration You Can Trust */}
          <motion.div
            className="flex flex-col gap-y-6 py-8 md:py-12 lg:py-16 lg:px-[90px] md:px-16 px-4 custom-glass custom-glass-border border-[1.5px] z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-bold leading-[150%] xl:text-5xl md:text-4xl text-3xl  bg-gradient-to-b from-[#3416D8] via-[#3416D8] via-[21.54%] to-[#A887F6] to-[88.46%] bg-clip-text text-transparent text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              A Collaboration You Can Trust
            </motion.h2>
            <div>
              <p className="font-open-sans font-normal  md:text-[18px] text-[14px] text-black text-center ">
                <span className="font-bold">3DPD </span>
                is India's largest integrated 3D printing bureau, pioneering
                rapid prototyping and additive manufacturing since 2000. With
                over two decades of experience, they offer end-to-end solutions
                across industries like aerospace, automotive, and healthcare.
                Their expertise spans technologies such as SLA, SLS, CNC
                machining, and metal casting, making them a trusted partner for
                innovation and precision.
              </p>
              <br />
              <br className="hidden md:block" />
              <p className="font-open-sans font-normal  md:text-[18px] text-[14px] text-black text-center ">
                <span className="font-bold">Yuvabe Education </span>
                is a purpose-driven learning platform based in Auroville.
                Through its Bridge Programme, Yuvabe empowers young adults with
                practical skills, hands-on experience, and a supportive
                community. Their holistic approach combines technical training
                with personal growth, preparing learners to thrive in a dynamic
                world.
              </p>
              <br />
              <br className="hidden md:block" />
              <p className="font-open-sans font-normal  md:text-[18px] text-[14px] text-black text-center ">
                Together, Yuvabe Education and 3DPD bridge the gap between
                education and industry, providing learners with the tools and
                mentorship needed to excel in the fields of product design and
                additive manufacturing.
              </p>
            </div>
            <div className="flex flex-row gap-10 justify-center bg-[#412FD6] p-4 md:p-5 max-w-[500px] flex-wrap m-auto rounded-4xl">
              <Image
                src="/images/3d-design/3d-11.png"
                alt="Bridge Image"
                width={138}
                height={79}
              />
              <Image
                src="/images/3d-design/3d-12.png"
                alt="Bridge Image"
                width={280}
                height={79}
              />
            </div>
          </motion.div>
        </div>
        {/* Image */}
        <Image
          src="/images/3d-design/3d-09.png"
          alt="Bridge Image"
          width={1137.39}
          height={1079}
          className="absolute top-[15%] md:top-[20%] right-0 lg:right-[-15%] h-[45%] md:h-[50%] lg:h-[65%] xl:h-full w-auto object-cover z-1"
          unoptimized
        />
        <Image
          src="/images/3d-design/3d-10.png"
          alt="Bridge Image"
          width={824.6}
          height={851}
          className="absolute bottom-[-25%] md:bottom-[-20%] lg:bottom-[-20%] left-0 h-[75%] md:h-[75%] object-cover z-1 lg:h-[65%]"
          unoptimized
        />
      </section>

      {/* Meet Your Instructors */}
      <section className="bg-gradient-to-b from-[#3416D8] to-[#6081D0] pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-40 relative overflow-hidden">
        <motion.div
          className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-6 md:gap-y-12 lg:gap-y-12 z-10"
          initial={{ opacity: 0, x: -25 }} // Start with opacity 0 and slide from the left
          whileInView={{ opacity: 1, x: 0 }} // Trigger animation when the element comes into view
          transition={{ duration: 0.8 }} // Duration of animation
          viewport={{ once: true }} // Trigger only once when the element comes into view
        >
          {/* Text */}
          <div className="flex flex-col gap-y-6 z-10">
            <h2 className="font-open-sans text-white font-bold xl:text-5xl md:text-4xl text-3xl text-center z-10">
              Meet Your Instructors
            </h2>
            <p className="font-open-sans font-bold  lg:text-2xl text-[18px] md:text-[20px] text-white mb-4 md:mb-8 lg:mb-10 text-center">
              Your mentors are experienced product designers, CAD experts, and
              industry professionals passionate about teaching and innovation.
            </p>
            {/* Instructors */}
            <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
              <div className="flex flex-row gap-x-12 gap-y-8 flex-wrap xl:flex-nowrap">
                <Image
                  src="/images/3d-design/3d-14.png"
                  alt="Bridge Image"
                  width={183.23}
                  height={183.23}
                  unoptimized
                  className="object-cover m-auto"
                />
                <div>
                  <h3 className="font-open-sans text-white font-bold lg:text-2xl text-[18px] md:text-[20px] mb-2 md:mb-3 lg:mb-4 text-center lg:text-left">
                    Dinagaran
                  </h3>
                  <p className="font-open-sans text-white font-normal md:text-[18px] text-[14px] text-center lg:text-left">
                    Dinagaran is the Head of the STEAM program at Yuvabe,
                    Auroville. He holds an M.Tech in Electrical. Drives,
                    controls, and brings over a decade of experience in hands-on
                    education across robotics, electronics, coding, and 3D
                    design and printing. He has trained students and teachers in
                    Atal Tinkering Labs throughout Tamil Nadu and led numerous
                    workshops that inspire innovation, critical thinking, and
                    creativity. He is a passionate facilitator committed to
                    nurturing future-ready learners.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-x-12 gap-y-8 flex-wrap xl:flex-nowrap">
                <Image
                  src="/images/3d-design/3d-13.png"
                  alt="Bridge Image"
                  width={183.23}
                  height={183.23}
                  unoptimized
                  className="object-cover m-auto"
                />
                <div>
                  <h3 className="font-open-sans text-white font-bold lg:text-2xl text-[18px] md:text-[20px] mb-2 md:mb-3 lg:mb-4 text-center lg:text-left">
                    Siddharth Baskaran
                  </h3>
                  <p className="font-open-sans text-white font-normal md:text-[18px] text-[14px] text-center lg:text-left">
                    Siddharth Baskaran is the Assistant Manager - Design at 3D
                    Product Development Pvt. Ltd. (3DPD), a leading provider of
                    rapid prototyping and low-volume manufacturing services in
                    Bengaluru, India. He received his B.Tech in mechanical
                    engineering from the Amrita School of Engineering,
                    Bangalore, India, in 2020 and brings over five years of
                    experience in product design and development. Passionate
                    about innovation, quality, and leveraging technologies such
                    as 3D printing, casting, and precision machining across
                    industries, automotive, aerospace, and consumer electronics,
                    for the development of functional prototypes and end-use
                    parts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Blur Effects */}
        <div className="absolute w-[488px] h-[488px] left-0 -top-0 bg-[rgba(152,0,203,0.5)] filter blur-[105.805px] scale-50 md:scale-75 lg:scale-100"></div>
        <div className="absolute w-[511.51px] h-[511.51px] right-0 bottom-0 bg-[rgba(152,0,203,0.5)] filter blur-[164.805px] scale-50 md:scale-75 lg:scale-100"></div>
      </section>

      {/*Apply Now & Start Building */}
      <section className="custom-glass pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24 relative overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-4 md:gap-y-6 lg:gap-y-6 z-10">
          <motion.h2
            className="font-bold font-open-sans leading-[150%] xl:text-5xl md:text-4xl text-3xl  bg-gradient-to-b from-[#3416D8] via-[#3416D8] via-[21.54%] to-[#A887F6] to-[88.46%] bg-clip-text text-transparent text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            Apply Now & Start Building
          </motion.h2>
          <motion.p
            className="font-open-sans font-normal  md:text-[18px] text-[14px] text-black text-center max-w-[695px] m-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            If you're ready to turn your design ideas into real, manufacturable
            products, this is your launchpad.
          </motion.p>
          {/* Buttons */}
          <div className="flex flex-row justify-center gap-8 flex-wrap md:flex-nowrap z-10">
            {/* Apply Now */}
            <Link
              href={
                "https://forms.gle/kPdDvDWuoC2BYDJAA"
              }
              target="_blank"
            >
              <div className="bg-[#3518D8] px-9 py-[12px] md:py-[18.5px] rounded-4xl w-2xs">
                <p className="font-open-sans font-bold md:text-xl text-[14px] md:text-[16px] text-white text-center m-auto">
                  Apply Now
                </p>
              </div>
            </Link>

            {/* Download Brochure */}
            <Link href={"../docs/3D Printing Brochure New.pdf"} target="_blank">
              <div className="bg-transparent px-9 py-[12px] md:py-[18.5px] rounded-4xl border-[#3518D8] border-2 w-2xs">
                <p className="font-open-sans font-bold  md:text-xl text-[14px] md:text-[16px] text-[#3518D8] text-center">
                  Download Brochure
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      {/* Wrapper */}
      <section className="bg-gradient-to-b from-[#3416D8] to-[#6081D0] pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-40 relative overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-6 md:gap-y-12 lg:gap-y-16 z-10">
          {/* Text */}
          <div className="flex flex-col gap-y-6">
            <motion.h2
              className="font-open-sans text-white font-bold xl:text-5xl md:text-4xl text-3xl mb-2 md:mb-3 lg:mb-4 text-center z-10"
              initial={{ opacity: 0, x: -100 }} // Start with opacity 0 and slide from the left
              whileInView={{ opacity: 1, x: 0 }} // Trigger animation when in view
              transition={{ duration: 1 }} // Duration of 1 second for the animation
              viewport={{ once: true }} // Trigger the animation only once when the element comes into view
            >
              Contact Us
            </motion.h2>
            <motion.p
              className="font-open-sans font-normal md:text-[18px] text-[14px] text-white text-center z-10"
              initial={{ opacity: 0, x: -100 }} // Start with opacity 0 and slide from the left
              whileInView={{ opacity: 1, x: 0 }} // Trigger animation when in view
              transition={{ duration: 1 }} // Duration of 1 second for the animation
              viewport={{ once: true }} // Trigger the animation only once when the element comes into view
            >
              For any questions, reach out to our team directly at
              bridge@yuvabe.com / +91 9677604467
            </motion.p>
          </div>
          {/* Social Media */}
          <div className="flex flex-col gap-y-6">
            <motion.h2
              className="font-open-sans text-white font-bold xl:text-2xl md:text-[20px] text-[18px] mb-2 md:mb-3 lg:mb-4 text-center z-10"
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
                href={"https://www.linkedin.com/company/yuvabe/"}
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
                    d="M40.7017 19.9964C40.7017 25.6582 40.7017 31.3204 40.7017 36.9829C40.7017 37.739 40.4925 38.4157 39.9892 38.9872C39.7226 39.305 39.389 39.56 39.0124 39.734C38.6358 39.908 38.2254 39.9968 37.8105 39.9938C26.4025 40.002 14.9945 40.002 3.58645 39.9938C2.87971 39.9972 2.19682 39.7384 1.66968 39.2677C1.14254 38.7969 0.808541 38.1475 0.732204 37.4448C0.717665 37.2893 0.703125 37.1316 0.703125 36.9751C0.703125 25.6411 0.703125 14.3104 0.703125 2.98315C0.703125 1.47319 1.58669 0.380433 3.06638 0.0605464C3.24505 0.0220512 3.42717 0.0018145 3.60994 0.000148189C14.9993 0.000148189 26.3887 0.000148189 37.7781 0.000148189C38.4454 -0.0066033 39.0945 0.217529 39.6155 0.634579C40.1365 1.05163 40.4973 1.63595 40.6368 2.28857C40.6844 2.53241 40.7058 2.78063 40.7006 3.02901C40.7036 8.68184 40.7039 14.3376 40.7017 19.9964ZM22.0317 17.5805L21.9869 17.5727C21.9869 17.5067 21.9746 17.4407 21.9746 17.3747C21.9746 16.66 21.9746 15.9464 21.9746 15.2317C21.9746 14.9554 21.9746 14.9543 21.7051 14.9543H16.5155C16.2572 14.9543 16.2505 14.961 16.2505 15.2194V33.8355C16.2505 34.0882 16.2505 34.0894 16.5133 34.0894H21.9187C22.2419 34.0894 22.2095 34.1285 22.2106 33.793C22.2233 30.4457 22.2363 27.0985 22.2498 23.7512C22.255 23.0845 22.3746 22.4235 22.6032 21.7972C22.9387 20.8621 23.5438 20.1944 24.5191 19.9126C25.0772 19.753 25.6615 19.7055 26.2381 19.7727C27.2626 19.8846 27.9952 20.3857 28.4 21.3386C28.7434 22.1462 28.8262 23.0029 28.8284 23.8664C28.8351 27.1883 28.8351 30.5106 28.8284 33.8332C28.8284 34.0894 28.8284 34.0905 29.0879 34.0905H34.8299V33.8019C34.8299 31.3905 34.8299 28.979 34.8299 26.5675C34.8299 25.0811 34.8232 23.5946 34.7841 22.1093C34.7599 21.4581 34.6938 20.8091 34.5861 20.1664C34.4273 19.1598 34.1443 18.1834 33.6164 17.2964C32.9881 16.2119 31.9892 15.3908 30.8035 14.9845C29.7198 14.6009 28.6036 14.4868 27.4617 14.5125C26.3556 14.525 25.2701 14.8129 24.3032 15.3502C23.4939 15.7877 22.803 16.4153 22.29 17.179C22.205 17.3121 22.1189 17.4463 22.0317 17.5805ZM6.60958 34.0894H12.3136C12.5764 34.0894 12.5775 34.0894 12.5775 33.8176V15.2395C12.5775 14.9554 12.5775 14.9543 12.2935 14.9543H6.88136C6.61069 14.9543 6.60958 14.9543 6.60958 15.2183V34.0894ZM9.60251 5.47178C7.709 5.43375 6.12977 7.04437 6.13312 8.92343C6.13312 10.8372 7.62735 12.4165 9.58573 12.4097C11.5754 12.4019 13.0697 10.883 13.0708 8.93014C13.0726 8.47463 12.984 8.02329 12.8102 7.60224C12.6364 7.18119 12.3808 6.79879 12.0583 6.47716C11.7358 6.15554 11.3526 5.90107 10.9311 5.7285C10.5096 5.55593 10.058 5.46867 9.60251 5.47178Z"
                    fill="white"
                  />
                </svg>
              </Link>
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
                    fill="white"
                  />
                  <path
                    d="M30.9671 19.9732C30.969 21.3183 30.706 22.6507 30.193 23.8942C29.68 25.1378 28.9271 26.2681 27.9773 27.2206C27.0275 28.1732 25.8994 28.9293 24.6574 29.4459C23.4154 29.9625 22.0837 30.2293 20.7386 30.2313C19.3934 30.2332 18.061 29.9702 16.8175 29.4572C15.574 28.9442 14.4437 28.1913 13.4911 27.2415C12.5386 26.2917 11.7824 25.1636 11.2659 23.9216C10.7493 22.6796 10.4824 21.3479 10.4805 20.0028C10.4805 14.0192 15.3321 9.79349 20.6158 9.73875C26.2131 9.68548 30.973 14.1938 30.9671 19.9732ZM20.7149 13.3283C19.398 13.3283 18.1107 13.7188 17.0158 14.4504C15.9208 15.182 15.0674 16.2219 14.5635 17.4385C14.0596 18.6551 13.9277 19.9939 14.1846 21.2854C14.4415 22.577 15.0757 23.7634 16.0068 24.6946C16.938 25.6257 18.1244 26.2599 19.4159 26.5168C20.7075 26.7737 22.0463 26.6418 23.2629 26.1379C24.4795 25.6339 25.5194 24.7805 26.251 23.6856C26.9826 22.5907 27.3731 21.3034 27.3731 19.9865C27.3692 18.2218 26.6665 16.5305 25.4187 15.2827C24.1708 14.0349 22.4796 13.3322 20.7149 13.3283Z"
                    fill="white"
                  />
                  <path
                    d="M29.0001 9.32327C28.9978 9.01019 29.0572 8.69972 29.1749 8.40962C29.2926 8.11951 29.4664 7.85546 29.6863 7.63257C29.9062 7.40968 30.1678 7.23231 30.4563 7.11062C30.7447 6.98893 31.0544 6.92529 31.3675 6.92335C31.6889 6.91205 32.0094 6.96561 32.3097 7.08083C32.61 7.19605 32.8841 7.37057 33.1155 7.59399C33.3469 7.81741 33.5309 8.08515 33.6566 8.38123C33.7823 8.67732 33.8471 8.99569 33.8471 9.31736C33.8471 9.63902 33.7823 9.95739 33.6566 10.2535C33.5309 10.5496 33.3469 10.8173 33.1155 11.0407C32.8841 11.2641 32.61 11.4387 32.3097 11.5539C32.0094 11.6691 31.6889 11.7227 31.3675 11.7114C31.0548 11.7114 30.7453 11.6495 30.4567 11.5292C30.1681 11.4089 29.9062 11.2327 29.6861 11.0107C29.466 10.7886 29.2921 10.5252 29.1743 10.2356C29.0566 9.94597 28.9974 9.6359 29.0001 9.32327Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link href={"https://x.com/yuvabeauroville"} target="_blank">
                <svg
                  width="39"
                  height="40"
                  viewBox="0 0 39 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="z-10"
                >
                  <path
                    d="M34.1851 0H4.53732C2.03143 0 0 2.03143 0 4.53732V35.4627C0 37.9686 2.03143 40 4.53732 40H34.1851C36.691 40 38.7224 37.9686 38.7224 35.4627V4.53732C38.7224 2.03143 36.691 0 34.1851 0Z"
                    fill="white"
                  />
                  <path
                    d="M18.0523 23.5532C18.0173 23.5908 17.986 23.6233 17.9572 23.6558L12.7717 29.5796L10.8947 31.7219C10.8764 31.7469 10.8522 31.7671 10.8243 31.7806C10.7963 31.7941 10.7655 31.8006 10.7345 31.7995C9.46737 31.7995 8.19935 31.7995 6.9305 31.7995H6.85668C6.85354 31.7944 6.85102 31.7889 6.84917 31.7832C6.84846 31.7799 6.84846 31.7765 6.84917 31.7732C6.85513 31.7635 6.86182 31.7543 6.86919 31.7457L16.1666 21.1257C16.1666 21.1257 16.1666 21.1257 16.1728 21.1019L6.30859 8.21319H6.44249C9.11199 8.21319 11.7815 8.21319 14.451 8.21319C14.4874 8.21033 14.5239 8.2173 14.5567 8.23336C14.5895 8.24943 14.6174 8.27401 14.6374 8.30454C16.4877 10.753 18.3397 13.2014 20.1933 15.6498C20.2171 15.6824 20.2434 15.7137 20.2722 15.7524C20.3035 15.7187 20.3297 15.6936 20.3535 15.6661C22.5075 13.206 24.6602 10.745 26.8116 8.28326C26.8277 8.2608 26.8489 8.24258 26.8735 8.23015C26.8982 8.21772 26.9254 8.21147 26.953 8.21194C28.2319 8.21194 29.5107 8.21194 30.7896 8.21194H30.8409L30.8484 8.2257C30.849 8.22943 30.849 8.23323 30.8484 8.23696C30.8488 8.23987 30.8488 8.24282 30.8484 8.24572C30.8419 8.25497 30.8348 8.26375 30.8271 8.272L22.1479 18.1938C22.1479 18.1938 22.1479 18.2 22.1479 18.2126L32.4251 31.7957C32.3863 31.7957 32.3625 31.8045 32.3388 31.8045H24.4516C24.4225 31.8058 24.3935 31.7995 24.3676 31.7861C24.3417 31.7727 24.3197 31.7527 24.304 31.7282C23.569 30.7647 22.8337 29.8028 22.0979 28.8426C20.774 27.1083 19.4505 25.3764 18.1274 23.6471C18.1099 23.6171 18.0811 23.5895 18.0523 23.5532ZM10.9861 10.4706C11.0249 10.5231 11.0461 10.5544 11.0687 10.5832L14.7375 15.3796L20.3685 22.7461L24.3453 27.9442C24.6973 28.4021 25.0481 28.861 25.3976 29.3206C25.4117 29.3467 25.4324 29.3686 25.4577 29.384C25.483 29.3994 25.5119 29.4077 25.5415 29.4082C26.2235 29.4082 26.9055 29.4082 27.5887 29.4082C27.617 29.4057 27.645 29.4011 27.6725 29.3944L27.5574 29.2405L22.4895 22.5422L17.1701 15.5122C15.9188 13.8613 14.6712 12.2108 13.4274 10.5607C13.4084 10.5318 13.3821 10.5084 13.351 10.493C13.32 10.4776 13.2855 10.4707 13.251 10.4731C12.5377 10.4731 11.8257 10.4731 11.1137 10.4731L10.9861 10.4706Z"
                    fill="#3416D8"
                  />
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
                src="/images/3d-design/3d-15.png"
                alt="Bridge Image"
                width={156}
                height={58}
                className="h-[58px] align-center z-10"
              />
            </Link>
            <Link href={"https://yuvabeeducation.com/"} target="_blank">
              <Image
                src="/images/3d-design/3d-12.png"
                alt="Bridge Image"
                width={272.66}
                height={58}
                className="z-10"
              />
            </Link>
          </motion.div>
        </div>
        {/* Image */}
        {/* Top Image: Animate from left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Start with opacity 0 and slide from the left
          whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and original position when in view
          transition={{ duration: 1, delay: 0.3 }} // 1-second duration with a 0.3-second delay
          viewport={{ once: true }} // Trigger only once when the element comes into view
          className="absolute top-[25%] md:top-[25%] left-[-16%] xl:left-0 md:left-0 max-w-[50%] md:max-w-[60%] xl:max-w-full object-cover z-1"
        >
          <Image
            src="/images/3d-design/3d-16.png"
            alt="Bridge Image"
            width={368}
            height={373}
            unoptimized
          />
        </motion.div>

        {/* Bottom Image: Animate from right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Start with opacity 0 and slide from the left
          whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and original position when in view
          transition={{ duration: 1, delay: 0.3 }} // 1-second duration with a 0.3-second delay
          viewport={{ once: true }} // Trigger only once when the element comes into view
          className="absolute xl:top-0 top-0 md:right-0 right-[-12%] max-w-[50%] md:max-w-[25%] xl:max-w-[15%] object-cover z-1"
        >
          <Image
            src="/images/3d-design/3d-17.png"
            alt="Bridge Image"
            width={447.26}
            height={484.25}
            unoptimized
          />
        </motion.div>
        {/* Blur Effects */}
        <div className="absolute w-[488px] h-[488px] left-0 -top-0 bg-[rgba(152,0,203,0.5)] filter blur-[105.805px] scale-50 md:scale-75 lg:scale-100"></div>
        <div className="absolute w-[511.51px] h-[511.51px] right-0 bottom-0 bg-[rgba(152,0,203,0.5)] filter blur-[164.805px] scale-50 md:scale-75 lg:scale-100"></div>
      </section>
    </>
  );
}
