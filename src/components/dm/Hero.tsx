"use client";
import Image from "next/image";

export default function Hero() {
  return (
  <section className="relative w-full min-h-[80vh] bg-[#140F20] flex flex-col justify-center items-center text-center text-white overflow-x-hidden">
  {/* Background Blur */}
  <div className="absolute -top-32 left-1/2 -translate-x-1/2 blur-3xl w-96 h-96 rounded-full bg-gradient-to-br from-[#976346] to-[#AF7E4F] opacity-20 z-0"></div>

  {/* Instagram Icon (close to top-left of heading) */}
  <div className="absolute top-[25%] left-[15%] z-20 w-[70px] h-[70px] md:w-[90px] md:h-[90px]">
    <Image src="/dm/images/instagram.png" alt="Instagram" fill className="rotate-[-5deg] object-cover" />
  </div>

  {/* Like Emoji (above middle-left) */}
  <div className="absolute top-[10%] left-[22%] z-20 w-[70px] h-[70px] md:w-[90px] md:h-[90px]">
    <Image src="/dm/images/social-media-like-emoji.png" alt="Like" fill className="rotate-[-5deg] object-cover" />
  </div>

  {/* Meta Icon (to the right of the headline) */}
  <div className="absolute top-[12%] left-[33%] z-20 w-[70px] h-[70px] md:w-[90px] md:h-[90px]">
    <Image src="/dm/images/meta.png" alt="Meta" fill className="rotate-[5deg] object-cover" />
  </div>

  {/* Hero Text Content */}
  <div className="max-w-5xl z-30 mt-6 md:mt-10">
    <h1 className="text-3xl md:text-5xl font-bold text-[#FFCA2D] leading-snug md:leading-tight">
      Transform Your Career with Hands-On <br />
      <span className="italic text-[#EFDFB1]">Digital Marketing</span> <span className="text-[#FFCA2D]">Training</span>
    </h1>

    <p className="mt-4 text-lg md:text-xl font-sans font-semibold">
      A 12-Week Immersive Learning Experience | In-Person Classroom Training | Starts March 24, 2025
    </p>
    <p className="mt-4 text-base md:text-lg font-sans font-normal">
      Master digital marketing with Yuvabe Education’s industry-driven Bridge Program.
      Learn from experts, work on real projects, and develop job-ready skills in SEO, social media, content marketing, email marketing, and more.
    </p>

    {/* CTA Buttons */}
    <div className="mt-12 flex flex-wrap justify-center gap-8">
    <button
    onClick={() =>
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSfJDp1CsV4wBiD0MJ6oOiJqjZgyNzITEwFiRhxPDRl3m5ghtQ/viewform",
        "_blank"
      )
    }
    className="bg-[#FFCA2D] text-black px-6 md:px-8 py-2 rounded-2xl font-semibold hover:bg-yellow-500 transition"
  >
    Apply Now
  </button>

  <button
    onClick={() =>
      window.open(
        "https://www.yuvabe.com/_files/ugd/173e7b_bfd064d78d6f44f8b632efc8d85b7d4c.pdf",
        "_blank"
      )
    }
    className="border border-[#E8AC35] text-[#FFCA2D] px-6 md:px-8 py-2 rounded-2xl font-semibold hover:bg-yellow-400 hover:text-black transition"
  >
    Download Brochure
  </button>
  </div>
</div>
</section>


  );
}
