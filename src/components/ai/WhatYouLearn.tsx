import Image from "next/image";

export function WhatYouLearn() {
  return (
    <section className="py-24 px-4 bg-background text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-20">What You’ll Learn</h2>

        {/* Timeline Container */}
        <div className="relative flex flex-col items-center">
          {/* Month Titles (Centered Above Vertical Lines) */}
          <div className="relative flex justify-between w-full max-w-5xl mx-auto mb-12">
            <h3 className="text-lg font-bold w-1/3 text-center">Month 1</h3>
            <h3 className="text-lg font-bold w-1/3 text-center">Month 2</h3>
            <h3 className="text-lg font-bold w-1/3 text-center">Month 3</h3>
          </div>

          {/* Horizontal Line */}
          <div className="relative w-full max-w-5xl mx-auto flex items-center">
            <Image
              src="/ai-images/Line 1.svg"
              alt="Timeline"
              width={900}
              height={10}
              className="absolute top-1/2 left-0 w-full opacity-90 z-0"
            />
          </div>

          {/* Timeline with Vertical Lines, Balls, and Content */}
          <div className="relative flex justify-between w-full max-w-5xl mx-auto mt-8">
            {/* Month 1 */}
            <div className="relative flex items-center w-1/3 flex-col">
              {/* Vertical Line (Extending from the Horizontal Line) */}
              <Image
                src="/ai-images/Line 2.svg"
                alt="Vertical Line"
                width={7}
                height={100}
                className="absolute top-[-50px] z-10"
              />
              {/* Ball (Exactly Below the Vertical Line) */}
              <Image
                src="/ai-images/Ellipse 5.svg"
                alt="Month 1"
                width={40}
                height={40}
                className="mt-[40px] z-20"
              />
              {/* Content (Aligned to Right Beside Ball) */}
              <p className="text-white/80 text-sm max-w-[220px] text-left mt-2">
                Creating a full-stack application and data engineering with Python.
              </p>
            </div>

            {/* Month 2 */}
            <div className="relative flex items-center w-1/3 flex-col">
              <Image
                src="/ai-images/Line 2 (1).svg"
                alt="Vertical Line"
                width={7}
                height={100}
                className="absolute top-[-50px] z-10"
              />
              <Image
                src="/ai-images/Ellipse 5 (1).svg"
                alt="Month 2"
                width={40}
                height={40}
                className="mt-[40px] z-20"
              />
              <p className="text-white/80 text-sm max-w-[220px] text-left mt-2">
                Fundamentals of Large Language Models (LLM) and NLP.
              </p>
            </div>

            {/* Month 3 */}
            <div className="relative flex items-center w-1/3 flex-col">
              <Image
                src="/ai-images/Line 2 (2).svg"
                alt="Vertical Line"
                width={7}
                height={100}
                className="absolute top-[-50px] z-10"
              />
              <Image
                src="/ai-images/Ellipse 5 (2).svg"
                alt="Month 3"
                width={40}
                height={40}
                className="mt-[40px] z-20"
              />
              <p className="text-white/80 text-sm max-w-[220px] text-left mt-2">
                Computer vision fundamentals: Prediction, classification & AI image generation modules.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
