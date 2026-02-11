"use client";
import FacilitatorCard from "./FacilitatorCard";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const facilitators = [
  {
    name: "Supriya",
    role: "System Designer, Chargebee",
    image: "/images/supriyapatil.png",
    linkedin: "https://www.linkedin.com/in/supriyapatil-/",
    bio: "Supriya designs across complex systems, moving seamlessly between digital interfaces, organisational workflows, and policy-level thinking. She excels at translating system-level complexity into clear, decision-ready narratives, enabling leadership teams to act with confidence and clarity.",
  },
  {
    name: "Vinoth Raja",
    role: "Senior UX Researcher, Cisco",
    image: "/images/vinothraja.png",
    linkedin: "https://www.linkedin.com/in/vinoth-raja/",
    bio: "Vinoth’s UX research practice is rooted in a mixed-methods approach, combining qualitative and quantitative research for deeper insight. What sets him apart is his ability to blend ancient Indian knowledge systems with human psychology, resulting in context-aware, actionable research insights that guide better design decisions.",
  },
  {
    name: "Ganesh",
    role: "Senior UX Designer, Incedo",
    image: "/images/ganesh.png",
    linkedin: "https://www.linkedin.com/in/ganesh-behera-2ab649182/",
    bio: "Ganesh leads cross-functional teams delivering large-scale financial products used by over a million users globally. With deep experience in enterprise UX, workflow optimisation, and emerging agentic-AI-driven processes, he brings a delivery-first, business-aware design perspective to the workshop.",
  },
  {
    name: "Chirag",
    role: "Design Strategist & Enterprise UX Practitioner, CBRE",
    image: "/images/chirag.png",
    linkedin: "https://www.linkedin.com/in/chirag-rajyaguru-4b2364a2/",
    bio: "Chirag advises startups on MVP development and go-to-market strategy and works on enterprise software solutions at CBRE, integrating AI to enhance business value. His PhD research introduces brain-science and cognitive perspectives into UX, adding a unique depth to product thinking. He has conducted creativity-enhancement workshops at ICORD, IISc Bangalore, for design professionals and academicians.",
  },
];

export default function FacilitatorsSection() {
  return (
    <section className="bg-[#FBFBF8] px-6 pt-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="mb-3 text-md font-semibold tracking-widest text-[#6A4EDA]">
            EXPERT MENTORS
          </p>

          <h2 className="mb-4 text-3xl font-semibold text-black md:text-5xl font-primary">
            Meet Your{" "}
            <span className="bg-gradient-to-r from-[#6A4EDA] to-[#F99E1F] bg-clip-text text-transparent">
              Facilitators
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-gray-600 text-xl font-secondary mb-2">
            Industry Practitioners. Thoughtful Mentors. Diverse Perspectives
          </p>

          <p className="mx-auto max-w-3xl text-gray-600 text-lg font-secondary">
            <strong>Problem to Pitch</strong> is facilitated by four experienced
            design practitioners who bring together deep expertise in Design
            Thinking, UX research, systems thinking, enterprise design, and
            cognitive science.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto justify-items-center">
          {facilitators.map((f, i) => (
            <FacilitatorCard key={i} {...f} />
          ))}
        </div>

        {/* Shared Teaching Experience */}
        <div className="mt-20 flex justify-center">
          <div className="w-full max-w-5xl rounded-2xl border border-[#E5E3DC] bg-[#FBFBF8] px-12 md:px-26 py-8">
            {/* Title */}
            <h3 className="mb-8 text-center font-semibold text-gray-900 text-lg font-primary">
              Shared Teaching Experience
            </h3>

            {/* Points */}
            <div className="grid gap-6 md:grid-cols-2 ">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-[#6A4EDA]" />
                <p className="text-md text-gray-600">
                  Conduct professional workshops at conferences
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-[#6A4EDA]" />
                <p className="text-md text-gray-600">
                  Serve as jury members at leading design colleges
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-[#6A4EDA]" />
                <p className="text-md text-gray-600">
                  Actively mentor design enthusiasts and early professionals
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-[#6A4EDA]" />
                <p className="text-md text-gray-600">
                  Teach through reflection, feedback, and real-world practice
                </p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center pt-20  "
        >
          <Image
            src="/images/snake.svg"
            alt=""
            width={100}
            height={100}
            className="w-[50%] md:w-[30%]"
          />
        </motion.div>
      </div>
    </section>
  );
}
