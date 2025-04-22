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
    <section className="w-full py-12 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-[#140F20] text-white overflow-hidden">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-raleway font-semibold text-center text-[#FFCA2D] mb-4">
        Our Team
      </h2>
      <p className="text-center text-[#FFFFFF] font-sans font-medium text-sm sm:text-base max-w-3xl mx-auto mb-8">
        Our team of mentors includes seasoned digital marketers, growth strategists, and industry experts 
        who have worked with global brands and startups.
      </p>

      {/* Team Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col rounded-3xl overflow-hidden shadow-md bg-[#1F1B2D] transition-transform hover:scale-105"
          >
            {/* Image */}
            <div className="relative w-full aspect-[3/4]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Name & Role */}
            <div className="w-full bg-gradient-to-b from-[#6F675166] to-[#6F6751] p-4 text-center rounded-b-3xl">
              <h3 className="text-base sm:text-lg md:text-xl font-sans font-bold text-white">{member.name}</h3>
              <p className="text-xs sm:text-sm md:text-base font-sans font-medium">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
