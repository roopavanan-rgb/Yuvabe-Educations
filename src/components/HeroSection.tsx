
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative  w-full bg-[#efe4f2]/40 overflow-hidden">
      <div className="pointer-events-none absolute top-50 left-20 -translate-x-1/2 -translate-y-50">
        <Image
          src="/images/gradient.svg" 
          alt=""
          width={600}
          height={600}
          className=""
        />
      </div>
      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-6 space-y-6">
        <div className="space-y-0">
          {/* Image Title */}
          <div className="relative w-full max-w-5xl">
            <Image
              src="/images/problem-to-pitch.png"
              alt="Problem to Pitch"
              width={900}
              height={300}
              priority
              className="h-auto w-full object-contain"
            />
          </div>

          <p className="text-2xl font-semibold text-[#592AC7] uppercase tracking-wide font-primary my-4">
            5-Day Immersive Advanced Design Workshop · Auroville
          </p>

          <p className="text-2xl bg-gradient-to-r from-[#8c52ff] via-[#ff914d] to-[#ff914d] bg-clip-text text-transparent font-bold font-secondary">
            Learn. Design. Validate. Pitch.
          </p>

          {/* <div className="flex flex-row space-x-4 items-center">
            <p className="text-gray-600 text-lg font-primary">By </p>
            <Image
              src="/images/foot.png"
              alt="Problem to Pitch"
              width={900}
              height={300}
              priority
              className="h-auto w-40 object-contain"
            />
          </div> */}
        </div>

        <div className="space-y-4 text-gray-700 leading-relaxed text-lg font-secondary">
          <p>
            <strong>Problem to Pitch</strong> is a five-day, hands-on Design
            Thinking workshop where participants work on real-world problems and
            transform them into well-validated digital solutions—while building
            the confidence to pitch ideas to the right audience.
          </p>

          <p>
            This is a highly interactive experience. Participants are required
            to bring a laptop and have active accounts on <strong>Miro</strong>{" "}
            and <strong>Figma</strong>.
          </p>

          <p>
            Sessions will be conducted primarily in English, with facilitation
            support available in Tamil, Hindi, Gujarati, Odiya, and Marathi.
          </p>

          <p>
            If you’re bringing a specific problem or context, be prepared to
            engage relevant users on <strong>Day 3 (11th March)</strong> to
            gather feedback and refine your solution.
          </p>

          <p className="font-medium text-black">
            Please fill out the registration form below to share your interest.
          </p>
        </div>
        <div className="mt-6">
          <hr className="text-gray-300 " />
        </div>
      </div>
    </section>
  );
}
