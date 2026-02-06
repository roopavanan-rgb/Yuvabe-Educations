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
            Book Your Seat Now!
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
            Problem to Pitch by <strong>Yuvabe Education</strong> is a five-day,
            hands-on Design Thinking workshop where participants dive into
            real-world problems and transform them into well-validated digital
            solutions—while also developing the{" "}
            <strong>skills to confidently pitch their ideas </strong> to the
            right audience.
          </p>

          <ul className="space-y-4 text-gray-700 leading-relaxed text-lg list-disc pl-6">
            <li>
              This is a highly interactive experience, so participants are
              required to <strong>bring a laptop</strong>.
            </li>

            <li>
              Sessions will be conducted primarily in English, with additional
              facilitation support available in{" "}
              <strong>Tamil, Hindi, Gujarati, Odiya, and Marathi</strong>.
            </li>

            <li>
              Please ensure you have{" "}
              <strong>active accounts on Miro and Figma</strong>
              before the workshop begins, as these tools will be used
              throughout.
            </li>

            <li>
              If you’re bringing a specific problem or context, be ready to
              <strong>engage relevant users on Day 3 (11th March)</strong> to
              gather feedback and refine your solution.
            </li>
          </ul>

          <p>
            Get ready to learn, collaborate, and create solutions that not only
            work—but that you can confidently pitch and bring to life!
          </p>

          <p>
            Please take a moment to{" "}
            <strong>fill out this registration form</strong> to share your
            interest in participating. Thank you, and we hope to see you at the
            workshop!
          </p>
        </div>

        <div className="mt-6">
          <hr className="text-gray-300 " />
        </div>
      </div>
    </section>
  );
}
