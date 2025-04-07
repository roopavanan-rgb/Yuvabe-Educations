"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-center items-center text-center bg-[#140F20] text-white">
      <div className="absolute top-20 left-60 flex space-x-4">
        <Image src="/dm/images/instagram.png" alt="Instagram" width={90} height={90} />
        <Image src="/dm/images/social-media-like-emoji.png" alt="emoji" width={80} height={80} />
        <Image src="/dm/images/meta.png" alt="meta" width={70} height={70}/>
      </div>

      {/* Hero Content */}
      <div className="max-w-5xl">
        <h1 className="text-5xl font-bold text-[#FFCA2D]">
          Transform Your Career with Hands-On <br />
          <span className="italic text-white">Digital Marketing</span> <span className="text-[#FFCA2D]">Training</span>
        </h1>
        <p className="mt-4 text-lg text-[#FFFFFF]">
          A 12-Week Immersive Learning Experience | In-Person Classroom Training | Starts March 24, 2025
        </p>

        
          {/* New Lines Added */}
          <p className="mt-4 text-lg text-[#FFFFFF]">
            Master digital marketing with <span className="font-semibold text-[#FFFFFF]">Yuvabe Education’s</span> industry-driven Bridge Program.
          </p>
          <p className="text-lg text-[#FFFFFF]">
            Learn from experts, work on real projects, and develop job-ready skills in SEO, social media, content marketing, email marketing, and more.
          </p>

        <div className="mt-6 flex space-x-6 justify-center">
        <button
         className="bg-[#FFCA2D] text-black px-8 py-2 rounded-2xl font-semibold hover:bg-yellow-500"
         onClick={() =>
         window.open(
          "https://docs.google.com/forms/d/e/1FAIpQLSfJDp1CsV4wBiD0MJ6oOiJqjZgyNzITEwFiRhxPDRl3m5ghtQ/viewform",
          "_blank"
        )
      }>Apply Now</button>
        
        <button
         className="border border-[#E8AC35] text-[#FFCA2D] px-8 py-2 rounded-2xl font-semibold hover:bg-yellow-400 hover:text-black"
         onClick={() =>
         window.open(
          "https://www.yuvabe.com/_files/ugd/173e7b_bfd064d78d6f44f8b632efc8d85b7d4c.pdf",
          "_blank"
        )
      }>Download Brochure</button>
        </div>
      </div>
    </section>
  );
}
