"use client";

import Image from "next/image";

export default function TransformationJourney() {
  return (
    <section className="flex flex-col items-center justify-center px-6 md:px-16 py-12 bg-[#FDF8EE]">
      <h2 className="text-2xl md:text-[64px] font-semibold text-black mb-24 text-center">
        Transformation Journey
      </h2>

      <div className="relative w-full flex justify-center">
        <Image
          src="/images/home/timeline.svg"
          alt="Transformation Journey Wave"
          width={1000}
          height={300}
          className="w-full h-auto"
        />

        {/* Dots with Labels */}
        <div className="absolute inset-0 flex justify-start items-start text-left text-sm md:text-base">
          <div className="absolute left-[10%] bottom-[50%] flex flex-col items-center">
            <span className="font-semibold font-secondary text-[12px]">7-14 Yrs</span>
            <span className="text-[#592AC7] font-secondary text-[12px]">STEAM</span>
            <div className="w-3 h-3 md:w-4 md:h-4 bg-[#592AC7] rounded-full mb-2"></div>
          </div>
          <div className="absolute left-[35%] bottom-[50%] flex flex-col items-center mb-6">
            <span className="font-semibold font-secondary text-[12px]">18-22 Yrs</span>
            <span className="text-[#592AC7] font-secondary text-[12px]">BRIDGE</span>
            <div className="w-3 h-3 md:w-4 md:h-4 bg-[#592AC7] rounded-full mb-2"></div>
          </div>
          <div className="absolute left-[60%] bottom-[70%] flex flex-col items-center">
            <span className="font-semibold font-secondary text-[12px]">22 Yrs +</span>
            <span className="text-[#592AC7] font-secondary text-[12px]">STUDIOS</span>
            <div className="w-3 h-3 md:w-4 md:h-4 bg-[#592AC7] rounded-full mb-2"></div>
          </div>
          <div className="absolute left-[85%] bottom-[95%] flex flex-col items-center">
            <span className="font-semibold text-nowrap font-secondary text-[12px]">25 Yrs +</span>
            <span className="text-[#592AC7] text-nowrap font-secondary text-[12px] text-left">START - UPS</span>
            <div className="w-3 h-3 md:w-4 md:h-4 bg-[#592AC7] rounded-full mb-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
