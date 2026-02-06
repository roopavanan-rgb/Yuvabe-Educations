"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
};

export default function FacilitatorCard({
  name,
  role,
  image,
  bio,
  linkedin,
}: Props) {
  return (
    <>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="group relative h-[520px] w-[250px] rounded-2xl border border-gray-200 bg-white overflow-hidden"
      >
        {/* DEFAULT STATE */}
        <div className="absolute inset-0 flex flex-col transition-opacity duration-300 group-hover:opacity-0">
          {/* Name + role FIRST */}
          <div className="px-5 pt-6 text-center">
            <h3 className="font-semibold text-2xl font-primary text-gray-900">
              {name}
            </h3>
            <p className="mt-1 text-sm font-secondary text-gray-600">{role}</p>
          </div>

          {/* 40px GAP */}
          <div className="h-8" />

          {/* Image SECOND */}
          <div className="relative h-[420px] w-full">
            <Image src={image} alt={name} fill className="object-cover " />
          </div>
        </div>

        {/* HOVER STATE */}
        <div className="absolute inset-0 flex flex-col items-center justify-between p-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {/* Bio */}
          <p className="mt-10 text-sm font-secondary leading-relaxed text-gray-700">
            {bio}
          </p>

          {/* LinkedIn */}
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A66C2] text-white transition hover:scale-105"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </motion.div>
    </>
  );
}
