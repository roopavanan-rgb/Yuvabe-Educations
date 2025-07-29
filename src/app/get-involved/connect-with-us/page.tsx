"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";

export default function ConnectWithUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const Player = dynamic(
    () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
    { ssr: false }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   alert("Form submitted!");
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white pt-22 pb-16 px-6 md:px-12 lg:px-16">
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left Content */}
          <motion.div
            className="w-full max-w-[1240px] text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1
              className="text-[42px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold text-[#592AC7] font-primary leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Connect With Us
            </motion.h1>

            <motion.p
              className="mt-6 text-[#000000] text-[18px] font-secondary max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            >
              Let’s team up and make things happen! Whether you're looking to
              scale, innovate, or create impact, we’re here to help you turn
              goals into results. Reach out, and let’s explore how we can grow
              together!
            </motion.p>
          </motion.div>

          {/* Right Side Image and Shapes */}
          <motion.div
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl relative flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            {/* Lottie Animation */}
            <div className="overflow-hidden w-full">
              <Player
                autoplay
                keepLastFrame
                loop={false}
                src="/images/keerthana.json"
                className="w-[300px] sm:w-[350px] md:w-[450px] lg:w-[500px] xl:w-[600px] h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#592AC7] py-24 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-18">
          {/* Google Map */}
          <motion.div
            className="w-full md:w-[604px] h-[500px] lg:h-[470px] rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <iframe
              title="Google Map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d153657.29575596304!2d79.71871412674747!3d12.015441634909148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5367b9d4c5c56d%3A0x606d45d5c7ec5c42!2sYuvabe!5e1!3m2!1sen!2sin!4v1732948683259!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="w-full md:w-[60%] bg-white shadow-lg rounded-lg p-6 md:p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-[36px] font-primary font-semibold text-[#592AC7] mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you! Fill out the form below:
            </p>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="flex flex-col gap-4"
            >
              <input
                type="hidden"
                name="access_key"
                value="b46383fd-39fb-4a3c-80a3-eae125be6ead"
              />

              <motion.input
                type="text"
                name="name"
                placeholder="Name"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#592AC7]"
                value={formData.name}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.05 }}
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Email id"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#592AC7]"
                value={formData.email}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.05 }}
              />
              <motion.textarea
                name="message"
                placeholder="Your message"
                className="p-3 border border-gray-300 rounded-lg h-24 overflow-hidden resize-none focus:outline-none focus:ring-2 focus:ring-[#592AC7]"
                value={formData.message}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.05 }}
              ></motion.textarea>

              <motion.div className="flex justify-end">
                <motion.button
                  type="submit"
                  className="w-[142px] h-[56px] bg-[#ffcc00] text-black font-semibold rounded-lg shadow-md hover:bg-[#e6b800] transition duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Send
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
        <p className="mt-8 md:mt-12 lg:mt-24 text-white font-secondary text-base sm:text-lg  m-auto lg:max-w-8xl  px-4 md:px-8 lg:px-12 text-center">
          Yuvabe Education has CSR1 Certification to accept CSR funds from
          corporates.
          <br />
          <br />
          For any queries, please reach out to us via email :{" "}
          <Link href="mailto:donation@yuvabe.com" className="underline">
            donation@yuvabe.com
          </Link>
        </p>
      </section>
    </>
  );
}
