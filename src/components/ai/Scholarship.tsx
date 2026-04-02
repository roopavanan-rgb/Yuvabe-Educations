"use client";
import React from "react";
import Image from "next/image";

const instructors = [
  {
    name: "Anupama Jagadeesh",
    role: "Mentor",
    description:
      "AI/ML Expert · 25+ yrs delivering AI solutions across India, Europe, Singapore & USA",
    image: "/ai-images/anupama.png",
  },
  {
    name: "Cyril Varghese",
    role: "Mentor",
    description:
      "Product Designer & Design Engineer - 10+ yrs building scalable AI-driven digital platforms",
    image: "/ai-images/cyril.png",
  },
  {
    name: "Slava Astafieff",
    role: "Expert Advisor",
    description:
      "Founder, Explify - Full-stack developer specialising in AI and high-impact digital products",
    image: "/ai-images/slava.png",
  },
  {
    name: "Sheik Noorullah",
    role: "AI Facilitator",
    description: "Building AI products & solutions",
    image: "/ai-images/sheik.png",
  },
];

export default function Scholarship() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#001B44] min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto max-w-[1240px] flex flex-col items-center gap-6">
        {/* Title Box */}
        <div className="w-full md:w-4/5 lg:w-[85%]  py-4 px-6 xl:px-10 flex justify-center">
          <h2 className="text-3xl md:text-[40px] lg:text-[46px] font-primary font-bold text-white text-center leading-tight tracking-wide">
            Learn from <span className="text-[#FFC107]">practitioners</span>,
            not lecturers.
          </h2>
        </div>

        {/* Description Box */}
        <div className="w-full md:w-11/12  py-4 px-6 xl:px-10 flex justify-center">
          <p className="text-center font-secondary text-[15px] md:text-[17px] text-[#DCE6F2] font-normal leading-relaxed max-w-4xl tracking-wide">
            Every member of the program faculty brings real-world experience
            building and shipping AI products. No theorists. No generalists.
            Just people who have done the work — and now want to help you do it
            too.
          </p>
        </div>

        {/* Grid Box */}
        <div className="w-full pt-28 pb-20 px-6 md:px-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-12 place-items-stretch max-w-[900px] mx-auto">
            {instructors.map((item, idx) => (
              <div
                key={idx}
                className="group relative w-full max-w-[360px] h-full rounded-[28px] 
bg-white/5 backdrop-blur-xl border border-white/10
pt-[4rem] pb-8 px-6 flex flex-col items-center
transition-all duration-500 ease-out
hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              >
                {/* Subtle Glow */}
                <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-[#61ACEE]/10 to-transparent pointer-events-none"></div>

                {/* Avatar */}
                <div className="absolute -top-[55px] left-1/2 -translate-x-1/2">
                  <div
                    className="w-[110px] h-[110px] rounded-full overflow-hidden 
            border border-white/20 
            ring-4 ring-[#61ACEE]/20
            transition duration-500 group-hover:scale-105"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={110}
                      height={110}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mt-2 z-10 flex flex-col h-full">
                  <h3 className="text-[20px] md:text-[22px] font-semibold text-white tracking-wide">
                    {item.name}
                  </h3>

                  <p className="text-sm text-[#7FB3FF] mt-1 font-medium">
                    {item.role}
                  </p>

                  <p className="text-[14px] leading-relaxed text-white/70 mt-4 px-2 flex-grow">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
