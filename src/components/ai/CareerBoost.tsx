"use client";
import Image from "next/image";

export function CareerBoost() {
  return (
    <section className="py-16 px-4 bg-[#0C2F47] text-white">
      <div className="max-w-6xl mx-auto text-center">
      <div className="absolute -left-60 bottom-200  blur-3xl border-none w-96 h-96 border rounded-full bg-gradient-to-r bg-[#3991BD] opacity-30"></div>
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-raleway font-bold">Career Boost</h2>
        <p className="text-white mt-4 text-xl font-bold">
          We take your career seriously. Here’s how we help you get ahead.
        </p>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 place-items-center">
          
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center gap-4 max-w-full">
            <Image src="/icons/engineering.svg" alt="Job Placement Support" width={80} height={100} />
            <h3 className="text-lg font-semibold">Job Placement Support</h3>
            <p className="text-[#FFFFFF] text-base">
              80% of our interns secure roles in AI and ML within six months.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center gap-4 max-w-xs">
            <Image src="/icons/tech-enthusiasts.svg" alt="Portfolio Development" width={80} height={100} />
            <h3 className="text-lg font-semibold">Portfolio Development</h3>
            <p className="text-[#FFFFFF] text-base">
              Leave with real-world projects you can showcase to employers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center gap-4 max-w-xs">
            <Image src="/icons/ai-professional.svg" alt="Career Mentorship" width={80} height={100} />
            <h3 className="text-lg font-semibold">Career Mentorship</h3>
            <p className="text-[#FFFFFF] text-base">
              Ongoing guidance even after the internship ends.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
