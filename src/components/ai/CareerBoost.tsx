import Image from "next/image";

export function CareerBoost() {
  return (
    <section className="py-16 px-4 bg-background text-white">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold">Career Boost</h2>
        <p className="text-white mt-4 text-sm md:text-base">
          We take your career seriously. Here’s how we help you get ahead.
        </p>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 place-items-center">
          
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center gap-4 max-w-xs">
            <Image src="/icons/engineering.svg" alt="Job Placement Support" width={40} height={40} />
            <h3 className="text-lg font-semibold">Job Placement Support</h3>
            <p className="text-white/80 text-sm">
              80% of our interns secure roles in AI and ML within six months.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center gap-4 max-w-xs">
            <Image src="/icons/tech-enthusiasts.svg" alt="Portfolio Development" width={40} height={40} />
            <h3 className="text-lg font-semibold">Portfolio Development</h3>
            <p className="text-white/80 text-sm">
              Leave with real-world projects you can showcase to employers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center gap-4 max-w-xs">
            <Image src="/icons/ai-professional.svg" alt="Career Mentorship" width={40} height={40} />
            <h3 className="text-lg font-semibold">Career Mentorship</h3>
            <p className="text-white/80 text-sm">
              Ongoing guidance even after the internship ends.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
