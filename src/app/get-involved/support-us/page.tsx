"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import PaymentForm from "@/components/PaymentForm"


export default function SupportUs() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const cards = [
    {
      title: "Bridge Program",
      image: "/images/getinvolved/img1.svg",
      description:
        "Your contribution will help us provide our young adults with an infrastructure, including tools and materials needed for their learning and growth.",
      bgShape: "bg-[#F8A91E]",
    },
    {
      title: "Emotional Resilience",
      image: "/images/getinvolved/img2.svg",
      description:
        "Your donation will help us create an ecosystem of support for the youth, that comprises experts in integral health, counselling, coaching and more.",
      bgShape: "bg-[#592AC7]",
    },
    {
      title: "STEAM Program",
      image: "/images/getinvolved/img3.svg",
      description:
        "Your gift for our unique educational offering will help cover expenses for a dedicated space for STEAM Lab, teacher support, and project materials.",
      bgShape: "bg-[#33BED4]",
    },
  ];

  

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-12 bg-white  overflow-hidden">
  {/* Left Side - Centered Text */}
  <motion.div
    className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left mt-8 md:mt-0"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[64px] font-semibold font-primary text-[#592Ac7] leading-snug">
      Support Us
    </h1>
    <p className="mt-4 text-gray-700 font-secondary text-base sm:text-lg max-w-md sm:max-w-lg lg:max-w-xl">
      You have the power to fuel a program that’s more than just upskilling! Be part of something bigger, where growth isn’t just personal; it’s collective. Let’s build the future together!
    </p>
  </motion.div>

  {/* Right Side - Image */}
  <motion.div
    className="w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0 relative"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="relative w-full max-w-[600px] md:max-w-[800px] lg:max-w-[900px]">
      {/* Floating Shape */}
      <motion.div
        className="absolute top-12 right-10 w-10 h-10 md:w-20 md:h-20 bg-[#33BED4]  z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Image */}
      <Image
        src="/images/getinvolved/support.png"
        alt="Group working on laptop"
        width={900}
        height={600}
        className="w-full h-auto left-8 top-12 md:left-18 md:top-15 relative "
      />
    </div>
  </motion.div>
</section>





      {/* Support Section */}
      <section className="py-16 bg-[#FBF6EF] text-center">
        <h2 className="text-xl md:text-5xl font-semibold text-black mb-12">
          Your contribution will help us support
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative w-[327px] h-[516px] md:w-[327px] md:h-[516px] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-6 transition-all duration-300 hover:bg-[#592AC7] hover:text-white group"
            >
              <h3 className="text-xl font-bold mb-4 z-10">{card.title}</h3>

              <Image
                src={card.image}
                alt={card.title}
                width={278}
                height={261}
                className="w-[278px] h-[261px] rounded-lg object-cover z-10"
              />
              <p className="text-sm mt-2 z-10">{card.description}</p>
              <motion.div className="absolute bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-[#592AC7] text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#592AC7]">
                <ArrowUpRight size={24} />
              </motion.div>
            </motion.div>
          ))}
        </div>
        <PaymentForm />
      </section>

      
      {/* AVI-USA */}
      <section className="flex flex-col items-center justify-center text-center py-16 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xl md:text-[40px] font-regular font-primary text-gray-800"
        >
          We are grateful to AVI-USA for all their guidance and support
        </motion.h2>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="my-8"
        >
          <Image
            src="/images/getinvolved/aviusa.svg"
            alt="AVI-USA Logo"
            width={280}
            height={280}
            className="rounded-lg"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-[40px] font-regular font-primary text-gray-700 max-w-6xl"
        >
          A big thank you to all our donors and sponsors who have been
          generously supporting us in our journey.
        </motion.p>
      </section>
    </main>
  );
}
