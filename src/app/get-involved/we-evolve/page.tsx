"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import Image from "next/image";
import Link from "next/link";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then(mod => mod.Player),
  { ssr: false }
);

const blogPosts = [
  {
    slug: "Navigating-Transformation-My-Yuvabe-Journey",
    image: "/images/journey.webp",
    title: "Navigating Transformation: My Yuvabe Journey",
    description:
      "A heartfelt account of a Yuvabe alumni where he talks about discovering his passion, overcoming adversity..."
  },
  {
    slug: "How-I-became-a-UX-Designer",
    image: "/images/sagar.webp",
    title: "How I became a UX Designer",
    description:
      "Yuvabe team member Sagar writes about his journey of growing into the role of a designer. .."
  },
  {
    slug: "A-peek-into-Integral-Yoga-with-Manoj-Pavithran",
    image: "/images/yoga.webp",
    title: "A peek into Integral Yoga with Manoj Pavithran",
    description:
      "Running an organisation in a place like Auroville, not only gives us an opportunity but also a gentle..."
  }
];

const page = () => {
  return (
    <main className="overflow-x-hidden">
      <section className="relative bg-[#592AC7] text-white pt-16 md:pt-24 flex items-center justify-center px-6 md:px-12 overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto">
          {/* Join Us */}
          <div className="flex flex-row gap-x-[150px] gap-y-16 justify-between flex-wrap xl:flex-nowrap">
            {/* Left - Text */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col gap-y-8 gap-x-4 w-full xl:w-[50%] justify-center"
            >
              <h1 className="font-primary font-semibold leading-[120%] text-[40px] md:text-[62px] lg:text-[64px] text-center lg:text-left">
                We Evolve
              </h1>
              <p className="font-secondary font-normal text-[18px] text-center lg:text-left">
                We aim to be a space where youth are supported to rise to their
                potential, not just in their professional, but also in their
                personal endeavors.
              </p>
            </motion.div>

            {/* Right - Player */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full flex justify-center xl:justify-end"
            >
              <Player
                autoplay
                speed={0.75}
                loop={false}
                keepLastFrame
                src="/images/arjun.json"
                style={{ height: "100%", width: "100%" }}
                className="lg:mt-[-30px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* talks, workshops & health */}
      <section className="relative bg-[#FDF7EB] pt-[120px] pb-[164px] px-6 lg:px-16 ">
        <div className="relative container max-w=[1240px] space-y-12 mx-auto items-center justify-center z-10 hidden lg:block ">
          {/* Expert Talks */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row z-10 items-center bg-white rounded-tl-[200px] rounded-br-[200px] rounded-tr-[50px] rounded-bl-[50px] "
          >
            <div className="w-full lg:w-[40%] h-[450px] rounded-tl-[200px] rounded-br-[200px] rounded-tr-[50px] rounded-bl-[50px]">
              <img
                src="/images/expert.webp"
                alt="Expert Talks"
                className="w-[600px] h-[450px] object-cover rounded-tl-[200px] rounded-br-[200px] rounded-tr-[50px] rounded-bl-[50px]"
              />
            </div>
            <div className="w-full lg:w-1/2 p-6 lg:p-10">
              <h3 className="text-[24px] md:text-[48px] font-semibold font-primary text-[#592AC7] mx-2 md:mx-0 ">
                Expert Talks
              </h3>
              <p className="text-[#000000] text-[18px] mt-4 mx-2 md:mx-0 font-secondary font-normal">
                Auroville is a thriving laboratory of social and environmental
                initiatives. We invite experts based in Auroville, who have come
                from all over the world, from different walks of life, working
                in different domains, to come share their experiences with{" "}
                <br /> our youth.
              </p>
            </div>
          </motion.div>

          {/* Workshops (Alternate Layout) */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex z-10 flex-col-reverse lg:flex-row items-center bg-white rounded-tr-[200px] rounded-bl-[200px] rounded-tl-[50px] rounded-br-[50px] overflow-hidden"
          >
            {/* Text Section */}
            <div className="relative z-10 w-full lg:w-[60%] p-6 lg:p-18">
              <h3 className="text-[24px] md:text-[48px] text-end md:text-start font-primary font-semibold text-[#592AC7]">
                Workshops
              </h3>
              <p className="text-[#000000] mt-4 text-end md:text-start font-secondary font-normal">
                By engaging in practical workshops, our team is able to discover
                and grow not just as professionals but as people. These
                workshops are an important aspect of our work towards our core
                mission; of holistic development of our youth.
              </p>
            </div>

            {/* Image Section */}
            <div className=" w-full lg:w-[40%] flex justify-end">
              <img
                src="/images/workshop.webp"
                alt="Workshops"
                className="w-full h-[450px] object-cover rounded-tr-[200px] rounded-bl-[200px] rounded-tl-[50px] rounded-br-[50px]"
              />
            </div>
          </motion.div>

          {/* Integral Health */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex flex-col z-10 lg:flex-row items-center bg-white rounded-tl-[200px] rounded-br-[200px] rounded-tr-[50px] rounded-bl-[50px] "
          >
            <div className="relative z-10 w-full lg:w-[40%] h-[450px] rounded-tl-[200px] rounded-br-[200px] rounded-tr-[50px] rounded-bl-[50px]">
              <img
                src="/images/health.webp"
                alt="Expert Talks"
                className="w-[600px] h-[450px] object-cover rounded-tl-[200px] rounded-br-[200px] rounded-tr-[50px] rounded-bl-[50px]"
              />
            </div>
            <div className="w-full lg:w-1/2 p-6 lg:p-10">
              <h3 className="text-[24px] md:text-[48px] font-semibold font-primary text-[#592AC7] mx-2 md:mx-0">
                Integral Health
              </h3>
              <p className="text-[#000000] text-[18px] mt-4 mx-2 md:mx-0 font-secondary font-normal">
                By taking different approaches, we aspire to keep our youth
                focused on health. From weekly cycling trips to yoga classes, as
                well as collaborating with the community’s primary mental health
                center to make sure that we always take time and effort to
                listen to our bodies and minds.
              </p>
            </div>
          </motion.div>
        </div>

        {/* mobile & tab view */}

        <div className="container mx-auto px-4 py-8 block lg:hidden ">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8 place-items-center">
            {/* Expert Talks */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white rounded-[50px] overflow-hidden shadow-md flex flex-col items-center text-center z-10 max-w-[350px] w-full"
            >
              <img
                src="/images/expert1.webp"
                alt="Expert Talks"
                className="w-full h-[250px] object-cover rounded-t-[50px]"
              />
              <div className="p-6">
                <h3 className="text-[24px] md:text-[32px] font-semibold font-primary text-[#592AC7]">
                  Expert Talks
                </h3>
                <p className="text-[#000000] text-[16px] mt-4 font-secondary">
                  Auroville is a thriving laboratory of social and environmental
                  initiatives. Experts from around the world share their
                  experience with our youth.
                </p>
              </div>
            </motion.div>

            {/* Workshops */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white rounded-[50px] overflow-hidden shadow-md flex flex-col items-center text-center z-10 max-w-[350px] w-full"
            >
              <img
                src="/images/workshop1.webp"
                alt="Workshops"
                className="w-full h-[250px] object-cover rounded-t-[50px]"
              />
              <div className="p-6">
                <h3 className="text-[24px] md:text-[32px] font-semibold font-primary text-[#592AC7]">
                  Workshops
                </h3>
                <p className="text-[#000000] text-[16px] mt-4 font-secondary">
                  Engaging in hands-on workshops allows our team to grow both
                  personally and professionally.
                </p>
              </div>
            </motion.div>

            {/* Integral Health */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="max-w-[350px] w-full md:col-span-2 md:justify-self-center items-center text-center lg:col-span-1 z-10 bg-white rounded-[50px]"
            >
              <img
                src="/images/health1.webp"
                alt="Integral Health"
                className="w-full h-[250px] object-cover rounded-t-[50px]"
              />
              <div className="p-6">
                <h3 className="text-[24px] md:text-[32px] font-semibold font-primary text-[#592AC7]">
                  Integral Health
                </h3>
                <p className="text-[#000000] text-[16px] mt-4 font-secondary">
                  Through cycling, yoga, and mental health initiatives, we
                  support our youth’s holistic wellbeing.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="shapes">
          <motion.svg
            width="260"
            height="259"
            viewBox="0 0 260 259"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-[0.2%] top-[85%] md:right-[10%] md:top-[75%] lg:right-[5%] lg:top-[85%] scale-50 xl:scale-100"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <rect
              x="100.289"
              width="187.637"
              height="187.637"
              transform="rotate(32.0259 100.289 0)"
              fill="#33BED4"
            />
          </motion.svg>

          {/* circle */}
          <motion.svg
            width="404"
            height="403"
            viewBox="0 0 404 403"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute lg:left-[5%] lg:top-[45%] left-[18%] top-[50%] md:left-[45%] md:top-[30%] scale-50 xl:scale-100"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <circle cx="202.281" cy="201.5" r="201.5" fill="#91C644" />
          </motion.svg>

          {/* triangle */}
          <motion.svg
            width="600"
            height="600"
            viewBox="0 0 251 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute lg:top-[2%] lg:right-[15%] -top-[6%] right-[10%] scale-50 xl:scale-100"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <path
              d="M250.547 0.865651L192.006 255.82L0.479068 77.6452L250.547 0.865651Z"
              fill="#FFCA2D"
            />
          </motion.svg>
        </div>
      </section>

      {/* Blogs */}
      <section className="relative bg-[#5F2DC6] text-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Background GIF */}
        <div className="absolute inset-0 flex justify-center items-center  ">
          <Image
            src="/images/planewhite.gif" // Change to your GIF file path
            alt="Animated Background"
            layout="fill"
            objectFit="contain"
            className="hidden md:block top-[-20px] md:top-[-50px] left-0 w-full"
            // Adjust opacity for better readability
          />
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl lg:text-[40px] font-semibold font-primary text-center relative z-10"
        >
          Read more about our team activities and workshops on<br/> Yuvabe blog
        </motion.h2>

        {/* Blog Cards */}
        <motion.div
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {blogPosts.map((post, index) => (
            <Link key={post.slug} href={`/stories/blogs/${post.slug}`}>
            <motion.div
              key={index}
              className="bg-white text-black rounded-[20px] h-[400px] shadow-lg overflow-hidden p-4 transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Blog Image */}
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-[200px] object-cover rounded-lg rounded-bl-[43px] rounded-tr-[43px] rounded-tl-[13px] rounded-br-[13px]"
              />

              {/* Blog Content */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold font-primary">{post.title}</h3>
                <p className="text-md font-secondary mt-2">{post.description}</p>
              </div>
            </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="relative z-10 text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link
            href="/stories/blogs?category=we-evolve"
            className="inline-block bg-white text-[#5F2DC6] font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition"
          >
            Visit our Blog
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default page;
