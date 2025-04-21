"use client";
import Image from "next/image";

export function ApplicantCategories() {
  return (
    <section className="py-24 px-4 bg-[#0C2F47] text-white">
      <div className="max-w-6xl mx-auto">

        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-raleway mb-6">Who Should Apply?</h2>
          <p className="text-[#FFFFFF] text-base md:text-lg font-sans font-bold w-full mx-auto">
            This program is designed for individuals who are passionate about transforming their careers in the fast-growing fields of <br />Artificial Intelligence (AI) and Machine Learning. <br />
            Here’s who we’re looking for
          </p>
        </div>


        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 place-items-center">

          {/* Card 1 */}
          <div className="relative bg-[#0F3956] p-6 md:p-8 rounded-2xl border border-[#58AEE9] shadow-lg max-w-md text-left flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src="/icons/ai-professional.svg" alt="AI Professionals" width={40} height={40} />
              <h3 className="text-xl font-raleway font-bold text-[#CE9EF9]">Aspiring AI & ML Professionals</h3>
            </div>
            <p className="text-[#FFFFFF] font-sans font-normal leading-[28px]">
              If you’ve been curious about the potential of AI and ML and want to build a solid foundation, this internship
              will give you hands-on experience, industry insights, and real-world projects to help you break into this exciting field.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-[#0F3956] p-6 md:p-8 rounded-2xl border border-[#58AEE9] shadow-lg max-w-md text-left flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src="/icons/engineering.svg" alt="Engineering Graduates" width={40} height={40} />
              <h3 className="text-xl font-raleway font-bold text-[#CE9EF9]">Engineering or Computer Science Graduates</h3>
            </div>
            <p className="text-[#FFFFFF] font-sans font-normal leading-[28px]">
              Whether you’re pursuing or have completed a degree in Engineering, Computer Science, or related fields,
              this internship provides you with practical experience and portfolio-worthy projects to stand out in the competitive job market.
            </p>
          </div>

          {/* Gradient Glow Circle */}
          <div className="absolute center w-[300px] h-[300px] blur-2xl opacity-30 bg-gradient-to-r from-[#394BBD] to-[#A339BD] -translate-y-24" />

          {/* Card 3 */}
          <div className="relative bg-[#0F3956] p-6 md:p-8 rounded-2xl border border-[#58AEE9] shadow-lg max-w-md text-left flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src="/icons/career-changers.svg" alt="Career Changers" width={40} height={40} />
              <h3 className="text-xl font-raleway font-bold text-[#CE9EF9]">Career Changers</h3>
            </div>
            <p className="text-[#FFFFFF] font-sans font-normal leading-[28px]">
              Are you looking to transition into the tech industry or shift from a traditional IT role into AI/ML?
              This program is ideal for individuals eager to upskill and gain cutting-edge knowledge in AI and ML.
            </p>
          </div>

          {/* Card 4 */}
          <div className="relative bg-[#0F3956] p-6 md:p-8 rounded-2xl border border-[#58AEE9] shadow-lg max-w-md text-left flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src="/icons/tech-enthusiasts.svg" alt="Tech Enthusiasts" width={40} height={40} />
              <h3 className="text-xl font-raleway font-bold text-[#CE9EF9]">Tech Enthusiasts & Innovators</h3>
            </div>
            <p className="text-[#FFFFFF] font-sans font-normal leading-[28px]">
              If you have a passion for technology, love solving problems, and enjoy tinkering with data, coding,
              and algorithms, this internship will help you sharpen your skills and apply them in innovative ways.
            </p>
          </div>

          {/* Card 5 - Centered */}
          <div className="relative bg-[#0F3956] p-6 md:p-8 rounded-2xl border border-[#58AEE9] shadow-lg max-w-md text-left flex flex-col gap-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <Image src="/icons/self-learners.svg" alt="Self Learners" width={40} height={40} />
              <h3 className="text-xl font-raleway font-bold text-[#CE9EF9]">Self-Learners & Beginners</h3>
            </div>
            <p className="text-[#FFFFFF] font-sans font-normal leading-[28px]">
              If you’ve been learning AI or ML through online courses or self-study but want practical, real-world experience,
              this internship provides a structured environment with the support of mentors to accelerate your learning.
            </p>
          </div>
          <div className="absolute -left-60  top-[30%] w-96 h-96 rounded-half blur-3xl opacity-30 bg-gradient-to-r from-[#394BBD] to-[#A339BD] translate-y-15" />

        </div>
      </div>
    </section>
  );
}
