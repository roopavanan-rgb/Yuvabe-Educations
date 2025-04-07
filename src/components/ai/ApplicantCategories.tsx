import Image from "next/image";

export function ApplicantCategories() {
  return (
    <section className="py-16 px-4 bg-background text-white">
      <div className="max-w-6xl mx-auto">
        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 place-items-center">
          
          {/* Card 1 */}
          <div className="relative bg-[#0C2F47] p-6 md:p-8 rounded-2xl border border-[#58AEE9] shadow-lg max-w-md text-left flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src="/icons/ai-professional.svg" alt="AI Professionals" width={40} height={40} />
              <h3 className="text-lg font-semibold text-purple-400">Aspiring AI & ML Professionals</h3>
            </div>
            <p className="text-white/80 text-sm">
              If you’ve been curious about the potential of AI and ML and want to build a solid foundation, this internship 
              will give you hands-on experience, industry insights, and real-world projects to help you break into this exciting field.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-[#0C2F47] p-6 md:p-8 rounded-2xl border border-[#58AEE9] shadow-lg max-w-md text-left flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src="/icons/engineering.svg" alt="Engineering Graduates" width={40} height={40} />
              <h3 className="text-lg font-semibold text-purple-400">Engineering or Computer Science Graduates</h3>
            </div>
            <p className="text-white/80 text-sm">
              Whether you’re pursuing or have completed a degree in Engineering, Computer Science, or related fields, 
              this internship provides you with practical experience and portfolio-worthy projects to stand out in the competitive job market.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-[#0C2F47] p-6 md:p-8 rounded-2xl border border-[#58AEE9] shadow-lg max-w-md text-left flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src="/icons/career-changers.svg" alt="Career Changers" width={40} height={40} />
              <h3 className="text-lg font-semibold text-purple-400">Career Changers</h3>
            </div>
            <p className="text-white/80 text-sm">
              Are you looking to transition into the tech industry or shift from a traditional IT role into AI/ML? 
              This program is ideal for individuals eager to upskill and gain cutting-edge knowledge in AI and ML.
            </p>
          </div>

          {/* Card 4 */}
          <div className="relative bg-[#0C2F47] p-6 md:p-8 rounded-2xl border border-[#58AEE9] shadow-lg max-w-md text-left flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src="/icons/tech-enthusiasts.svg" alt="Tech Enthusiasts" width={40} height={40} />
              <h3 className="text-lg font-semibold text-purple-400">Tech Enthusiasts & Innovators</h3>
            </div>
            <p className="text-white/80 text-sm">
              If you have a passion for technology, love solving problems, and enjoy tinkering with data, coding, 
              and algorithms, this internship will help you sharpen your skills and apply them in innovative ways.
            </p>
          </div>

          {/* Card 5 - Centered */}
          <div className="relative bg-[#0C2F47] p-6 md:p-8 rounded-2xl border border-[#58AEE9] shadow-lg max-w-md text-left flex flex-col gap-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <Image src="/icons/self-learners.svg" alt="Self Learners" width={40} height={40} />
              <h3 className="text-lg font-semibold text-purple-400">Self-Learners & Beginners</h3>
            </div>
            <p className="text-white/80 text-sm">
              If you’ve been learning AI or ML through online courses or self-study but want practical, real-world experience, 
              this internship provides a structured environment with the support of mentors to accelerate your learning.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
