"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { X } from "lucide-react";
import PaymentForm from "@/components/PaymentForm";
import Link from "next/link";

export default function Donate() {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const path = window.location.hash;
    if (path && path.includes("#")) {
      // Delay the scroll to ensure everything is rendered first
      setTimeout(() => {
        const el = document.getElementById(path.replace("#", ""));
        if (el) {
          // Ensure the element is in the viewport with native scroll behavior
          el.scrollIntoView({
            behavior: "smooth", // Use native smooth scrolling
            block: "start", // Align the element to the top of the viewport
          });
        }
      }, 1000); // Delay to ensure the page has time to render
    }
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Handle closing the modal when clicking outside
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Cast e.target to HTMLDivElement to access 'id' property
    const target = e.target as HTMLDivElement;

    if (target.id === "modal-overlay") {
      closeModal();
    }
  };

  const cards = [
    {
      title: "Bridge Program",
      image: "/images/getinvolved/img1.svg",
      description:
        "Your contribution will help us provide our young adults with an infrastructure, including tools and materials needed for their learning and growth.",
      bgShape: "bg-[#F8A91E]",
      link: "https://aviusa.org/aviusapartners/yuvabe-bridge-program/",
    },
    // {
    //   title: "Emotional Resilience",
    //   image: "/images/getinvolved/img2.svg",
    //   description:
    //     "Your donation will help us create an ecosystem of support for the youth, that comprises experts in integral health, counselling, coaching and more.",
    //   bgShape: "bg-[#592AC7]",
    //   link: "/programs/emotional-resilience",
    // },
    {
      title: "STEAM Program",
      image: "/images/getinvolved/img3.svg",
      description:
        "Your gift for our unique educational offering will help cover expenses for a dedicated space for STEAM Lab, teacher support, and project materials.",
      bgShape: "bg-[#33BED4]",
      link: "https://aviusa.org/aviusapartners/yuvabe-steam-program/",
    },
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-12 bg-white  overflow-hidden">
        {/* Left Side - Centered Text  */}
        <motion.div
          className="flex flex-col lg:justify-start lg:items-start lg:text-left justify-center items-center text-center lg:pl-20 pl-0 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[64px] font-semibold font-primary text-[#592Ac7] leading-snug">
            Donate to <br /> Yuvabe Education
          </h1>
          <p className="mt-4 text-[#000000] font-secondary text-base sm:text-lg max-w-md sm:max-w-lg lg:max-w-xl">
            You have the power to fuel a program that’s more than just
            upskilling! Be part of something bigger, where growth isn’t just
            personal; it’s collective. Let’s build the future together!
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full ">
            {/* Floating Shape  */}
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
              className="w-full h-auto left-8 top-12 md:left-20 md:top-15 lg:left-18 lg:top-15 relative "
            />
          </div>
        </motion.div>
      </section>

      {/*<section className="relative flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-12 bg-white  overflow-hidden">
        /~ Left Side - Centered Text ~/
        <motion.div
          className="flex flex-col lg:justify-start lg:items-start lg:text-left justify-center items-center text-center lg:pl-20 pl-0 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[64px] font-semibold font-primary text-[#592Ac7] leading-snug">
            Double Your Impact <br /> This December
          </h1>
          <p className="mt-4 text-[#000000] font-secondary text-base sm:text-lg max-w-md sm:max-w-lg lg:max-w-xl">
            From December 1 – 31, 2025 every rupee or dollar you donate will be
            matched by our partners at AVI-USA, doubling the support that
            reaches young learners through Yuvabe’s Bridge and STEAM Programs.
            <br />
            <br />
            Your contribution this month helps provide scholarships, creative
            learning tools, and mentorship — building pathways for
            purpose-driven education and real opportunities for growth.
          </p>
          <Link
            href="#contribute-program"
            className="bg-[#592AC7] text-white font-primary font-semibold py-3 px-6 w-2/3 lg:w-2/3 text-center rounded-lg shadow-md transition-all hover:bg-[#4a22a5] mt-6"
          >
            Donate Now — Your Gift Will Be Matched
          </Link>
        </motion.div>

        /~ Right Side - Image ~/
        <motion.div
          className="w-full lg:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full ">
            /~ Floating Shape ~/
            <motion.div
              className="absolute top-12 right-10 w-10 h-10 md:w-20 md:h-20 bg-[#33BED4]  z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            /~ Image ~/
            <Image
              src="/images/getinvolved/support.png"
              alt="Group working on laptop"
              width={900}
              height={600}
              className="w-full h-auto left-8 top-12 md:left-20 md:top-15 lg:left-18 lg:top-15 relative "
            />
          </div>
        </motion.div>
      </section>*/}

      {/* Support Section */}
      <section
        className="py-24 bg-[#FBF6EF] text-center scroll-mt-30 lg:scroll-mt-30"
        id="contribute-program"
      >
        <h2 className="text-xl md:text-[40px] font-semibold font-primary text-black mb-12">
          Please choose where you’d like your <br /> contribution to create an
          impact
        </h2>
        <div className="flex flex-row flex-wrap md:flex-row justify-center gap-6 py-4 px-4 md:px-8 lg:px-12">
          {cards.map((card, index) => (
            <Link href={card.link}>
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative w-full sm:w-[300px] md:w-[254px] lg:w-[500px] h-[500px] md:h-[447px] lg:h-[500px] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-6 transition-all duration-300 hover:bg-[#592AC7] hover:text-white group"
              >
                <h3 className="text-[16px] font-semibold font-primary mb-4 z-10 text-center">
                  {card.title}
                </h3>

                <Image
                  src={card.image}
                  alt={card.title}
                  width={278}
                  height={261}
                  className="w-[278px] h-[261px] md:w-[207px] md:h-[195px] lg:w-[378px] lg:h-[261px] rounded-lg object-cover z-10"
                />
                <p className="text-sm mt-2 z-10 text-center leading-4.5">
                  {card.description}
                </p>

                <motion.div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#592AC7] text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#592AC7] self-end mt-6">
                  <ArrowUpRight size={24} />
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
        <p className="mt-8 md:mt-12 lg:mt-24 text-[#000000] font-secondary text-base sm:text-lg  m-auto lg:max-w-5xl px-4 md:px-8 lg:px-12">
          Yuvabe is a unit of Swagatam Trust, operating under the Auroville
          Foundation. Donations and contributions are received through the
          Auroville Foundation, which holds FCRA registration under the Foreign
          Contribution (Regulation) Act, 2010, and registrations/approvals under
          Sections 12A/12AB and 80G of the Income-tax Act, 1961, subject to
          applicable validity and compliance requirements.
          <br />
          <br />
          Yuvabe Education also has CSR1 Certification to accept CSR funds from
          corporates.
          <br />
          <br />
          For any queries, please reach out to us via email :{" "}
          <Link
            href="mailto:donation@yuvabe.com"
            className="text-[#592Ac7] underline"
          >
            donation@yuvabe.com
          </Link>
        </p>
        <PaymentForm />
      </section>

      {/* Become a Fundraising Champion */}
      <motion.section
        className="flex flex-col items-center justify-center text-center py-24 bg-white scroll-mt-30 lg:scroll-mt-30 gap-y-6 md:gap-y-12 lg:gap-y-16 px-4 md:px-8 lg:px-12"
        id="startyourownfundraiser"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-[64px] font-semibold font-primary text-[#592Ac7] leading-none text-center">
          Fundraise with Yuvabe
        </h2>
        <div className="flex flex-col gap-y-4 md:gap-y-6">
          <h3 className="text-xl md:text-[40px] font-semibold font-primary text-black text-center">
            Become a Champion for Youth <br /> Empowerment
          </h3>
          <p className="text-[#000000] font-secondary text-base sm:text-lg list-decimal text-center max-w-[80ch]">
            Ignite a ripple of change in your network and create real
            opportunities for young people in Auroville and nearby villages. You
            can do more than donate — you can inspire others. By starting a{" "}
            <b>peer-to-peer fundraising campaign,</b> you help support learning,
            creativity, and livelihoods for youth.
          </p>
        </div>
        <div className="flex flex-col gap-y-6 rounded-[50px]  px-8 md:px-12 lg:px-18 py-8 md:py-12 lg:py-16 shadow-[8px_8px_43px_rgba(0,_0,_0,_0.1)] max-w-[1028px] items-center">
          <h4 className="text-xl md:text-[40px] font-semibold font-primary text-black text-center">
            It's simple:
          </h4>
          <ol className="text-[#000000] font-secondary text-base sm:text-lg font-bold list-decimal text-left">
            <li>
              Choose a cause{" "}
              <span className="font-normal">
                — Scholarships, STEAM Labs, or Bridge Programs.
              </span>
            </li>
            <li>
              Set a goal{" "}
              <span className="font-normal">
                — Decide how much you’d like to raise.
              </span>
            </li>
            <li>
              Share your story{" "}
              <span className="font-normal">
                — Rally friends, family, or colleagues to contribute.
              </span>
            </li>
          </ol>
          <p className="text-[#000000] font-secondary text-base sm:text-lg text-center">
            We’ll support you with campaign updates and materials so you can
            focus on spreading the word. Every rupee raised supports real change
            — from digital literacy to creative leadership.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              openModal(); // Open the modal
            }}
            className="bg-[#592AC7] text-white font-primary font-semibold py-3 px-6 text-center rounded-lg shadow-md transition-all hover:bg-[#4a22a5] w-fit cursor-pointer self-center"
          >
            Start your campaign
          </button>

          {/* Modal */}
          {isOpen && (
            <div
              id="modal-overlay"
              className="fixed inset-0 z-10 bg-[#000000bd] flex justify-center items-center backdrop-blur-xs mt-28"
              onClick={handleOutsideClick} // Close modal if clicked outside
            >
              <div className="relative bg-[#FFF9EA] p-6 lg:p-12 rounded-2xl w-11/12 lg:w-full max-w-xl lg:max-w-4xl">
                {/* Close Button */}
                <button
                  className="flex justify-end w-full text-gray-500 hover:text-gray-700 cursor-pointer"
                  onClick={closeModal}
                >
                  <X size={24} /> {/* Close icon */}
                </button>

                <h4 className="text-xl md:text-2xl font-semibold font-primary text-black max-w-[35ch] m-auto">
                  Select a program to launch your peer-to-peer fundraising
                  campaign
                </h4>

                <div className="flex flex-row flex-nowrap md:flex-row justify-center gap-6 py-4 px-4 md:px-8 lg:px-12 mt-2">
                  {/* First Card */}
                  <Link href="https://give.aviusa.org/-/XGJWXUWA">
                    <div className="relative w-full sm:w-[200px] md:w-[250px] lg:w-[300px] h-full md:h-[447px] lg:h-[500px] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-6 transition-all duration-300 hover:bg-[#592AC7] hover:text-white group">
                      <h3 className="text-[16px] font-semibold font-primary mb-4 z-10 text-center">
                        Bridge Program
                      </h3>
                      <Image
                        src="/images/getinvolved/DSC02014.webp"
                        alt="Bridge Program"
                        unoptimized
                        width={278}
                        height={261}
                        className="w-[278px] h-[261px] md:w-[207px] md:h-[195px] lg:w-[378px] lg:h-[261px] rounded-lg object-cover z-10 hidden md:block"
                      />
                      <p className="text-sm mt-2 z-10 text-center leading-4.5 hidden md:block">
                        Your contribution will help us provide our young adults
                        with an infrastructure, including tools and materials
                        needed for their learning and growth.
                      </p>

                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#592AC7] text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#592AC7] sm:self-end sm:mt-6 scale-75 sm:scale-100">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </Link>

                  {/* Second Card */}
                  <Link href="https://give.aviusa.org/-/XLQTFBNA">
                    <div className="relative w-full sm:w-[200px] md:w-[250px] lg:w-[300px] h-full md:h-[447px] lg:h-[500px] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-6 transition-all duration-300 hover:bg-[#592AC7] hover:text-white group">
                      <h3 className="text-[16px] font-semibold font-primary mb-4 z-10 text-center">
                        STEAM Program
                      </h3>
                      <Image
                        src="/images/getinvolved/STREAM.webp"
                        alt="STEAM Program"
                        width={278}
                        height={261}
                        className="w-[278px] h-[261px] md:w-[207px] md:h-[195px] lg:w-[378px] lg:h-[261px] rounded-lg object-cover z-10 hidden md:block object-top"
                      />
                      <p className="text-sm mt-2 z-10 text-center leading-4.5 hidden md:block">
                        Your gift for our unique educational offering will help
                        cover expenses for a dedicated space for STEAM Lab,
                        teacher support, and project materials.
                      </p>

                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#592AC7] text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#592AC7] sm:self-end sm:mt-6 scale-75 sm:scale-100">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        <p className="text-[#000000] font-secondary text-xl md:text-2xl text-center max-w-[54ch]">
          Together, let’s{" "}
          <b>
            expand access, build confidence, and empower the next generation to
            Work. Serve. Evolve.
          </b>
        </p>
      </motion.section>

      {/* AVI-USA */}
      <section className="flex flex-col items-center justify-center text-center py-24 bg-[#FFF9EA] px-4 md:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xl md:text-[40px] font-regular font-primary text-[#592AC7]"
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
          className="text-lg md:text-[40px] font-regular font-primary text-[#000000] max-w-6xl"
        >
          A big thank you to all our donors and sponsors who have been
          generously supporting us in our journey.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="my-8"
        >
          <Image
            src="/images/clientlogo/logo.svg"
            alt="AVI-USA Logo"
            width={240}
            height={240}
            className="rounded-lg"
          />
        </motion.div>
      </section>
    </main>
  );
}
