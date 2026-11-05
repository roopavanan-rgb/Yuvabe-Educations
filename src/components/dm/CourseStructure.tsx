"use client";

import { motion } from "framer-motion";
import { Armchair, CalendarDays, Hourglass, Laptop, MapPin } from "lucide-react";
import { DM_SEATS } from "./programDetails";

const courseDetails = [
  {
    title: "Duration",
    description: "16 weeks (12 weeks of modules + 4-week capstone)",
    icon: Hourglass,
  },
  {
    title: "Schedule",
    description: "Monday to Friday, 9:30 AM – 12:45 PM",
    icon: CalendarDays,
  },
  {
    title: "Mode",
    description: "In-person at Yuvabe, Saracon Campus, Auroville",
    icon: MapPin,
  },
  {
    title: "Format",
    description: "Concepts plus hands-on lab work in every session",
    icon: Laptop,
  },
  {
    title: "Limited Seats",
    description: `Only ${DM_SEATS} spots available`,
    icon: Armchair,
  },
];

export function CourseStructure() {
  return (
    <section className="w-full py-12 bg-[#140F20] text-white overflow-hidden">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#FFCA2D] mb-10">
        Course Structure
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 max-w-5xl mx-auto">
        {courseDetails.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 bg-transparent rounded-lg text-center sm:text-left"
            >
              {/* Decorative Bar */}
              <div className="absolute top-0 left-1/2 sm:left-6 -translate-x-1/2 sm:translate-x-0 w-12 h-[3px] bg-white/70"></div>

              {/* Icon + Title */}
              <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                <Icon aria-hidden="true" className="w-6 h-6 text-white" strokeWidth={1.75} />
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>

              {/* Description */}
              <p className="mt-2 text-sm sm:text-base leading-relaxed max-w-xs mx-auto sm:mx-0 text-white/90">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
