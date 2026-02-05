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
            <strong>Problem to Pitch</strong> by{" "}
            <strong>Yuvabe Education</strong> is a five-day, hands-on{" "}
            <strong>Advanced Design Thinking</strong> workshop where
            participants work on real-world problems and transform them into
            well-validated digital solutions—while also developing the
            confidence and clarity to pitch their ideas to the right audience.
          </p>

          <p>
            This immersive experience is guided by an industry-mentored
            facilitation team bringing together deep expertise in UX research,
            systems thinking, enterprise design, and cognitive science. The
            workshop is facilitated by practitioners who actively work with
            global organisations and complex real-world contexts:
          </p>

          <ul className="space-y-4 text-gray-700 leading-relaxed text-lg list-disc pl-6">
            <li>
              <strong>Vinoth</strong>, Senior UX Researcher at{" "}
              <strong>Cisco</strong> (formerly IBM), brings a strong
              mixed-methods research approach rooted in human psychology and
              behavioural insight.
            </li>

            <li>
              <strong>Supriya</strong>, System Designer at{" "}
              <strong>Chargebee</strong>, is known for translating complex
              systems—across digital platforms, workflows, and organisational
              contexts—into clear, actionable design decisions.
            </li>

            <li>
              <strong>Ganesh</strong>, Senior UX Designer at{" "}
              <strong>Incedo</strong>, has hands-on experience leading
              cross-functional teams and delivering large-scale enterprise
              products used by millions of users.
            </li>

            <li>
              <strong>Chirag</strong>, Design Strategist and Enterprise UX
              Practitioner at <strong>CBRE</strong>, blends design thinking with
              cognitive science, MVP development, and go-to-market strategy.
            </li>
          </ul>

          <p>
            Together, they create a learning environment that mirrors how real
            design teams think, collaborate, validate, and deliver—grounded in
            reflection, feedback, and real-world practice rather than theory
            alone.
          </p>

          <p>
            This is a highly interactive workshop, and participants are required
            to bring a laptop. Sessions will be conducted primarily in English,
            with additional facilitation support available in{" "}
            <strong>Tamil, Hindi, Gujarati, Odiya, </strong> and
            <strong> Marathi</strong> ensuring an inclusive learning experience.
          </p>

          <p>
            Participants are expected to have active <strong>Miro</strong> and{" "}
            <strong>Figma</strong> accounts, as these tools will be used
            extensively throughout the workshop. If you are bringing a specific
            problem or context, please be prepared to engage relevant users on{" "}
            <strong>Day 3 (11th March)</strong> to gather feedback and refine
            your solution through real validation.
          </p>

          <p>
            Get ready to learn deeply, collaborate meaningfully, and create
            solutions that don’t just work—but that you can confidently pitch
            and bring to life.
          </p>

          <p className="font-medium text-black">
            Please take a moment to fill out the{" "}
            <strong>registration form </strong> below to share your interest in
            participating. We look forward to welcoming you to{" "}
            <strong>Problem to Pitch</strong> in Auroville.
          </p>
        </div>

        <div className="mt-6">
          <hr className="text-gray-300 " />
        </div>
      </div>
    </section>
  );
}
