"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Online Application:",
    description: ["Complete the application form."],
  },
  {
    number: "02",
    title: "Screening Process:",
    description:[
      "Shortlisted candidates will be", 
      "notified and will have to come in", 
      "for an interview and aptitude test.",
    ],
  },
  {
    number: "03",
    title: "Confirmation:",
    description:
      ["Secure your spot with the payment", 
       "after you clear your screening.",
      ],
  },
];

export function EnrollmentProcess() {
  return (
    <section className="w-full py-12 bg-[#140F20] text-white text-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-[#FFCA2D] mb-14">
        Enrollment Process
      </h2>

      {/* Steps Section */}
      <div className="flex flex-col md:flex-row justify-center gap-x-36 px-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`text-left ${index === 1 ? "ml-20 mr-20" : ""}`}
            // className="text-center"
          >
            {/* Gradient Numbers */}
            <h3
              className="text-8xl font-bold bg-[linear-gradient(0deg,_rgba(20,15,32,1)_0%,_rgba(255,202,45,1)_100%)] bg-clip-text text-transparent">
              {step.number}
            </h3>
            <h4 className="text-xl font-semibold mt-2 ml-1">{step.title}</h4>

            {/* Render Multiple Description Lines */}
              {step.description.map((line, idx) => (
                <p key={idx} className="text-gray-300 mt-2">
                  {line}
                </p>
              ))}
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-12">
      <div className="absolute text-3xl translate-x-[500px] opacity-20 blur-3xl w-[500px] h-[200px] border rounded-3xl bg-[linear-gradient(90deg,_rgba(151,99,70,1)_50%,_rgba(151,99,70,0.8487044475993523)_100%)]"></div>

        <h3 className="text-2xl font-semibold text-[#FFCA2D] mt-24">
          Join the Digital Marketing program today!
        </h3>
        <p className="text-[#E8AC35] mt-2">
          Take the first step toward your career in Digital Marketing. Register today and secure your spot!
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-6">
        <button
         className="bg-[#FFCA2D] text-black px-8 py-2 rounded-2xl font-semibold hover:bg-yellow-500"
         onClick={() =>
         window.open(
          "https://docs.google.com/forms/d/e/1FAIpQLSfJDp1CsV4wBiD0MJ6oOiJqjZgyNzITEwFiRhxPDRl3m5ghtQ/viewform",
          "_blank"
        )
        }>Apply Now
        </button>
        <button
         className="border border-[#E8AC35] text-[#FFCA2D] px-8 py-2 rounded-2xl font-semibold hover:bg-yellow-400 hover:text-black"
         onClick={() =>
         window.open(
          "https://www.yuvabe.com/_files/ugd/173e7b_bfd064d78d6f44f8b632efc8d85b7d4c.pdf",
          "_blank"
        )
        }>Download Brochure
      </button>
        </div>
      </div>
    </section>
  );
}
