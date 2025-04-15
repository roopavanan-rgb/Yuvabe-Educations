"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import Image from "next/image";

const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then(mod => mod.Player), { ssr: false });


const blogPosts = [
  {
    image: "/images/journey.webp",
    title: "Navigating Transformation: My Yuvabe Journey",
    description:
      "A heartfelt account of a Yuvabe alumni where he talks about discovering his passion, overcoming adversity..."
  },
  {
    image: "/images/sagar.webp",
    title: "How I became a UX Designer",
    description:
      "Yuvabe team member Sagar writes about his journey of growing into the role of a designer. .."
  },
  {
    image: "/images/yoga.webp",
    title: "A peek into Integral Yoga with Manoj Pavithran",
    description:
      "Running an organisation in a place like Auroville, not only gives us an opportunity but also a gentle..."
  }
];

const page = () => {
  return (
    <main className="overflow-x-hidden">
      <section className="relative bg-[#592AC7] text-white   flex items-center justify-center px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-0 md:gap-12 w-full relative">
          {/* Left Side - Text Content */}
          <div className="text-center md:text-left ">
            <h2 className="text-3xl md:text-[64px] font-primary font-semibold pt-12 md:pt-6 lg:pt-0">
              We Evolve
            </h2>
            <p className="mt-4 text-base md:text-lg font-secondary max-w-md md:max-w-lg mx-auto md:mx-0">
              We aim to be a space where youth are supported to rise to their
              potential, not just in their professional, but also in their
              personal endeavors.
            </p>
          </div>

          {/* Right Side - Lottie Animation */}
          <div className="flex justify-center md:justify-end relative w-full">
            <Player
              autoplay
              keepLastFrame
              loop = {false}
              src="/images/arjun.json"
              className="w-[450px] h-[450px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] top-15 md:top-18 lg:top-20 relative"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#FDF7EB] py-16 px-6 lg:px-16 ">
        <div className="container space-y-12 mx-auto items-center justify-center">
          {/* Expert Talks */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex flex-col lg:flex-row items-center bg-white rounded-tl-[200px] rounded-br-[200px] rounded-tr-[50px] rounded-bl-[50px] "
          >
            <div className="absolute -top-8 left-10 bg-yellow-400 w-40 h-40 rotate-45 opacity-80 "></div>
            <div className="w-full lg:w-[40%] h-[450px] rounded-tl-[200px] rounded-br-[200px] rounded-tr-[50px] rounded-bl-[50px]">
              <img
                src="/images/expert.webp"
                alt="Expert Talks"
                className="w-[600px] h-[450px] object-cover rounded-tl-[200px] rounded-br-[200px] rounded-tr-[50px] rounded-bl-[50px]"
              />
            </div>
            <div className="w-full lg:w-1/2 p-6 lg:p-10">
              <h3 className="text-[24px] md:text-[48px] font-bold text-[#592AC7] mx-2 md:mx-0 ">
                Expert Talks
              </h3>
              <p className="text-gray-600 text-[18px] mt-4 mx-2 md:mx-0">
                Auroville is a thriving laboratory of social and environmental
                initiatives. We invite experts based in Auroville, who have come
                from all over the world, from different walks of life, working
                in different domains, to come share their experiences with <br/> our
                youth.
              </p>
            </div>
          </motion.div>

          {/* Workshops (Alternate Layout) */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex flex-col-reverse lg:flex-row items-center bg-white rounded-tr-[200px] rounded-bl-[200px] rounded-tl-[50px] rounded-br-[50px] overflow-hidden"
          >
            {/* Text Section */}
            <div className="w-full lg:w-[60%] p-6 lg:p-18">
              <h3 className="text-[24px] md:text-[48px] text-end md:text-start font-bold text-[#592AC7]">
                Workshops
              </h3>
              <p className="text-gray-600 mt-4 text-end md:text-start">
                By engaging in practical workshops, our team is able to discover
                and grow not just as professionals but as people. These
                workshops are an important aspect of our work towards our core
                mission; of holistic development of our youth.
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-[40%] flex justify-end">
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
            className="relative flex flex-col lg:flex-row items-center bg-white rounded-tl-[200px] rounded-br-[200px] rounded-tr-[50px] rounded-bl-[50px] "
          >
            <div className="absolute -bottom-8 right-10 bg-yellow-400 w-40 h-40 rotate-45 opacity-80 z-0"></div>
            <div className="relative z-10 w-full lg:w-[40%] h-[450px] rounded-tl-[200px] rounded-br-[200px] rounded-tr-[50px] rounded-bl-[50px]">
              <img
                src="/images/health.webp"
                alt="Expert Talks"
                className="w-[600px] h-[450px] object-cover rounded-tl-[200px] rounded-br-[200px] rounded-tr-[50px] rounded-bl-[50px]"
              />
            </div>
            <div className="w-full lg:w-1/2 p-6 lg:p-10">
              <h3 className="text-[24px] md:text-[48px] font-bold text-[#592AC7] mx-2 md:mx-0">
                Integral Health
              </h3>
              <p className="text-gray-600 text-[18px] mt-4 mx-2 md:mx-0">
                By taking different approaches, we aspire to keep our youth
                focused on health. From weekly cycling trips to yoga classes, as
                well as collaborating with the community’s primary mental health
                center to make sure that we always take time and effort to
                listen to our bodies and minds.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-[#5F2DC6] text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
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
          className="text-3xl md:text-5xl font-semibold text-center relative z-10"
        >
          Read more about our team activities and workshops on Yuvabe blog
        </motion.h2>

        {/* Blog Cards */}
        <motion.div
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white text-black rounded-[20px] shadow-lg  overflow-hidden p-4 transition-transform duration-300 hover:scale-105"
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
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="text-sm mt-2">{post.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="relative z-10 text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="#"
            className="inline-block bg-white text-[#5F2DC6] font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition"
          >
            Visit our Blog
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default page;
