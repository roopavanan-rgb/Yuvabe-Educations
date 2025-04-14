"use client";
import Image from "next/image";

export function ProgramOutcome() {
  return (
    <section className="py-16 px-4 bg-[#0C2F47] text-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative">
        
        {/* Card Container */}
        <div className="relative bg-[#0C2F47] p-12 md:p-16 rounded-3xl border border-[#58AEE9] shadow-lg w-full max-w-5xl overflow-hidden z-10">
          
          {/* Background Rings - Positioned Bottom Left with Fading Effect */}
          <div className="absolute inset-0 pointer-events-none opacity-50">
            {[
              "/ai-images/Vector.svg",
              "/ai-images/Vector (1).svg",
              "/ai-images/Vector (2).svg",
              "/ai-images/Vector (3).svg",
              "/ai-images/Vector (4).svg",
              "/ai-images/Vector (5).svg",
              "/ai-images/Vector (6).svg",
              "/ai-images/Vector (7).svg",
              "/ai-images/Vector (8).svg",
              "/ai-images/Vector (9).svg"
            ].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Vector ${index + 1}`}
                width={400}
                height={400}
                className="absolute bottom-0 left-0"
                style={{
                  opacity: `${1 - index * 0.1}`, // Gradual fade
                  transform: `scale(${1 + index * 0.1}) translate(${index * 5}px, ${index * -5}px)`, // Stacked effect
                  maskImage: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.2))",
                  WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.2))",
                }}
              />
            ))}
          </div>

          {/* Program Description */}
          <p className="relative text-lg md:text-xl font-raleway font-semibold leading-relaxed text-white z-10">
            "By the end of the program, you would have built an end-to-end application using Python technologies, 
            learnt how to interface, integrate and fine-tune Large Language Models and Computer Vision Models, 
            and completed your real-world capstone project."
          </p>
        </div>
      </div>
    </section>
  );
}
