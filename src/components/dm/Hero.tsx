"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#140F20] flex flex-col justify-center items-center text-center text-white overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Blur */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 blur-3xl w-96 h-96 rounded-full bg-gradient-to-br from-[#976346] to-[#AF7E4F] opacity-20 z-0"></div>

      {/* Instagram Icon */}
      <div className="absolute top-[20%] left-[10%] z-20 w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px]">
        <div className="relative w-full h-full">
          <Image
            src="/dm/images/instagram.png"
            alt="Instagram"
            fill
            className="rotate-[-5deg] object-cover"
          />
        </div>
      </div>

      {/* Like Emoji */}
      <div className="absolute top-[8%] left-[22%] z-20 w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px]">
        <div className="relative w-full h-full">
          <Image
            src="/dm/images/social-media-like-emoji.png"
            alt="Like"
            fill
            className="rotate-[-5deg] object-cover"
          />
        </div>
      </div>

      {/* Meta Icon */}
      <div className="absolute top-[10%] left-[33%] z-20 w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px]">
        <div className="relative w-full h-full">
          <Image
            src="/dm/images/meta.png"
            alt="Meta"
            fill
            className="rotate-[5deg] object-cover"
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="max-w-5xl z-30 mt-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#FFCA2D] leading-relaxed md:leading-tight">
          Transform Your Career with Hands-On <br />
          <span className="italic text-[#EFDFB1]">Digital Marketing</span>{" "}
          <span className="text-[#FFCA2D]">Training</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl font-sans font-semibold">
          A 12-Week Immersive Learning Experience | In-Person Classroom Training
          | Starts March 24, 2025
        </p>
        <p className="mt-4 text-sm sm:text-base md:text-lg font-sans font-normal">
          Master digital marketing with Yuvabe Education’s industry-driven
          Bridge Program. Learn from experts, work on real projects, and develop
          job-ready skills in SEO, social media, content marketing, email
          marketing, and more.
        </p>
        {/* CTA Buttons */}
     
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfJDp1CsV4wBiD0MJ6oOiJqjZgyNzITEwFiRhxPDRl3m5ghtQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFCA2D] text-black px-6 md:px-8 py-2 rounded-2xl font-semibold hover:bg-yellow-500 transition text-center"
          >
            Apply Now
          </Link>

          <Link
            href="https://www.yuvabe.com/_files/ugd/173e7b_bfd064d78d6f44f8b632efc8d85b7d4c.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#E8AC35] text-[#FFCA2D] px-6 md:px-8 py-2 rounded-2xl font-semibold hover:bg-yellow-400 hover:text-black transition text-center"
          >
            Download Brochure
          </Link>
        </div>
      </div>
    </section>
  );
}
