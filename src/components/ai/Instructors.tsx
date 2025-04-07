import Image from "next/image";

export function Instructors() {
  return (
    <section className="py-16 px-4 bg-background text-white text-center overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">Our Expert Instructors</h2>

      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {/* Instructor 1 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
          {/* Image */}
          <div className="flex-shrink-0">
            <Image src="/ai-images/anu.png" alt="Anupama" width={300} height={300} />
          </div>
          {/* Content */}
          <div className="text-left max-w-lg">
          <h3 className="text-[50px] font-extrabold uppercase stroke-text-violet">
              ANUPAMA
            </h3>
            <p className="text-sm md:text-base mt-2">
              AI/ML Expert, with over 25 years of experience architecting and delivering transformative AI/ML and digital solutions 
              for startups and large enterprises across India, Europe, Singapore, and the USA.
            </p>
            {/* LinkedIn Icon */}
            <div className="mt-3">
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
            </div>
          </div>
        </div>

        {/* Instructor 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6 md:gap-12">
          {/* Image */}
          <div className="flex-shrink-0">
            <Image src="/ai-images/vimal.png" alt="Vimal" width={300} height={300} />
          </div>
          {/* Content */}
          <div className="text-left max-w-lg">
          <h3 className="text-[50px] font-extrabold uppercase stroke-text-yellow">
            VIMAL
          </h3>

            <p className="text-sm md:text-base mt-2">
              AI/ML and Data Science leader with over 15 years of deep architectural expertise and full-stack innovation.
              Proven record of driving world-class AI product development from concept through execution.
            </p>
            {/* LinkedIn Icon */}
            <div className="mt-3">
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>

{/* Get Ready to Build Section */}
<section className="py-16 px-4 bg-background text-white text-center mt-16">
<div className="max-w-5xl mx-auto">
  {/* Title */}
  <h3 className="text-3xl md:text-4xl font-bold">Get Ready to Build</h3>

  {/* Description */}
  <p className="mt-4 text-lg text-white font-medium">
    During the internship, you’ll work on projects like building a Natural Language Processing (NLP) chatbot for customer service or creating an AI-driven recommendation engine. Each project is designed to give you hands-on experience in AI problem-solving, preparing you for real-world scenarios.
  </p>
</div>
</section>
</section>
);
}
