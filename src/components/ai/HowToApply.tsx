"use client";
import { Button } from "@/components/ai/ui/button";
import { Mail, Phone } from "lucide-react";

const HowToApply = () => {
  return (
    <>
      {/* CTA SECTION */}
      <section className="relative bg-[#002357] py-20 px-4 sm:px-6 md:px-12 text-white text-center overflow-hidden">
        {/* Background Glow */}
        <div
          className="absolute top-[20%] left-[10%] w-72 h-72 md:w-96 md:h-96 
          bg-gradient-to-r from-[#394BBD] to-[#A339BD] opacity-20 blur-3xl rounded-full pointer-events-none"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Heading */}
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Start <span className="text-[#FFC107]">building</span> with AI.
          </h3>

          {/* Subtext */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            Registrations close May 3, 2026. Limited seats. Cohort forming now.
          </p>

          {/* Button */}
          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#FFC107] text-black font-semibold px-8 py-6 rounded-2xl"
              onClick={() =>
                window.open(
                  "https://yuvabeeducation.com/bridge/ai/register",
                  "_blank",
                )
              }
            >
              APPLY NOW
            </Button>
          </div>
        </div>

        {/* Bottom Glow */}
        <div
          className="absolute bottom-[-80px] right-[-60px] w-72 h-72 md:w-96 md:h-96 
          bg-[#3991BD] opacity-20 blur-3xl rounded-full pointer-events-none"
        />
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-[#F2F4F7] py-16 px-4 text-center">
        <p className="text-xs md:text-sm tracking-widest text-[#002357] font-semibold mb-6">
          FOR ANY QUESTIONS, REACH OUT TO OUR TEAM DIRECTLY
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
          {/* Email */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-[#002357] flex items-center justify-center group-hover:scale-110 transition">
              <Mail className="text-white w-5 h-5" />
            </div>
            <span className="text-[#002357] font-medium text-sm md:text-base">
              bridge@yuvabe.com
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-[#002357] flex items-center justify-center group-hover:scale-110 transition">
              <Phone className="text-white w-5 h-5" />
            </div>
            <span className="text-[#002357] font-medium text-sm md:text-base">
              +91 9677604467
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowToApply;
