"use client";
import Image from "next/image";

export function Outcomes() {
  return (
    <section className="py-16 px-4 bg-[#0C2F47] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-16 md:gap-32">

        {/* Abstract Image (Left Side) */}
        <div className="flex-shrink-0 w-[200px] sm:w-[250px] md:w-[300px] h-auto flex justify-center md:justify-start">
          <Image
            src="/ai-images/circle.svg"
            alt="Abstract Design"
            width={250}
            height={250}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Content (Right Side) */}
        <div className="flex flex-col gap-8 max-w-md">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-raleway font-bold">Program Outcomes</h2>
          <div className="absolute text-5xl -right-60 bottom-200  blur-3xl border-none w-96 h-96 border rounded-full bg-gradient-to-r bg-[#3991BD] opacity-60"></div>

          {/* Outcomes List */}
          <ul className="space-y-6 text-white font-sans font-bold">
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <Image src="/icons/brown.svg" alt="Develop AI & ML skills" width={16} height={16} />
              Develop in-demand AI and ML skills
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <Image src="/icons/blue.svg" alt="Build portfolio" width={16} height={16} />
              Build a professional portfolio
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <Image src="/icons/yellow.svg" alt="Real-world projects" width={16} height={16} />
              Gain experience with real-world projects
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <Image src="/icons/green.svg" alt="Mentorship" width={16} height={16} />
              Receive personalized mentorship from industry experts
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}












































