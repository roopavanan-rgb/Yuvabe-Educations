"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  { name: "Sriman", role: "Mentor", image: "/dm/images/sriman.png" },
  { name: "Priya", role: "Mentor & Lead Facilitator", image: "/dm/images/priya.png" },
  { name: "Logasundari", role: "Facilitator", image: "/dm/images/logs.png" },
  { name: "Anjali", role: "Facilitator", image: "/dm/images/anjali.png" },
  { name: "Poovendiran", role: "Facilitator", image: "/dm/images/poove.png" },
  { name: "Vigneshwaran", role: "Facilitator", image: "/dm/images/vicky.png" },
  { name: "Sagar", role: "Facilitator", image: "/dm/images/sagar.png" },
  { name: "Vanchinath", role: "Facilitator", image: "/dm/images/vanchi.png" },
  { name: "Sanjeevani", role: "Evolve Facilitator", image: "/dm/images/sanjeevani.png" },
  { name: "Ashwini Bakshi", role: "Inner Growth Facilitator", image: "/dm/images/mentor.png" },
];

export function OurTeam() {
  return (
    <section className="w-full py-12 bg-[#140F20] text-white">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-[#FFCA2D] mb-4">Our Team</h2>
      <p className="text-center text-[#FFFFFF] mb-8 max-w-2xl mx-auto">
        Our team of mentors includes seasoned digital marketers, growth strategists, and industry experts 
        who have worked with global brands and startups.
      </p>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden shadow-lg"
          >
            {/* Image */}
            <div className="relative w-full h-65">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl"
              />
            </div>

            {/* Solid Gray Box for Name & Role */}
            <div className="w-full bg-gradient-to-b from-gray-700 to-gray-900 p-3 text-center rounded-b-3xl">
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-gray-300">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
