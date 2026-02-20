"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { newslettersData, NewsletterItem } from "@/data/newsletter";

const NewsletterBlock = ({ newsletter }: { newsletter: NewsletterItem }) => (
  <motion.div
    layout
    initial={{ y: -50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="flex flex-row gap-x-[77px] justify-between min-h-[456px] flex-wrap lg:flex-nowrap w-full gap-y-8">
      {/* Left */}
      <div className="flex flex-col rounded-[20px] w-full bg-white xl:w-[34%] box-shadow-news">
        <Image
          src={newsletter.imageUrl}
          alt=""
          width={532}
          height={500}
          className="h-full rounded-t-[20px] w-full object-cover"
        />
        <div className="flex flex-col py-6 px-3 items-center">
          <h2 className="uppercase font-primary font-semibold text-black text-[20px] text-center">
            {newsletter.title}
          </h2>
          <p className="font-secondary text-black text-[14px] text-center pb-6">
            {newsletter.subtitle}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col gap-y-6 justify-center w-full xl:w-[59%] px-3 items-center lg:items-baseline">
        <h3 className="font-primary font-semibold text-black text-2xl lg:text-4xl">
          {newsletter.month} {newsletter.year}
        </h3>

        <p className="font-secondary text-black text-[18px] leading-[30px] text-center lg:text-left">
          {newsletter.description}
        </p>

        <Link href={newsletter.linkUrl} target="_blank">
          <div className="bg-[#592AC7] py-[18px] px-8 rounded-[15px]">
            <p className="font-primary font-semibold text-white text-[14px]">
              Read More
            </p>
          </div>
        </Link>
      </div>
    </div>
  </motion.div>
);

export default function Newsletters() {
  const [activeFilter, setActiveFilter] = React.useState("All");
  const [visibleCount, setVisibleCount] = React.useState(6);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = React.useState(false);

  const filters = ["All", "2026", "2025", "2024", "2023", "2022"];

  const sorted = [...newslettersData].sort((a, b) => b.id - a.id);

  const filteredNewsletters =
    activeFilter === "All"
      ? sorted
      : sorted.filter((n) => n.year === activeFilter);

  const visibleNewsletters =
    activeFilter === "All"
      ? filteredNewsletters.slice(0, visibleCount)
      : filteredNewsletters;

  return (
    <div className="bg-color pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24">
      <div className="max-w-[1028px] flex flex-col m-auto px-5">
        <h1 className="text-[#592AC7] text-2xl md:text-6xl font-semibold text-center font-primary">
          Newsletters
        </h1>

        {/* Filters */}
        <div className="mt-10 w-full">
          {/* Desktop Filters */}
          <div className="hidden md:flex flex-wrap justify-center gap-8">
            {filters.map((year) => (
              <button
                key={year}
                onClick={() => {
                  setActiveFilter(year);
                  setVisibleCount(6);
                }}
                className={`px-6 py-2 rounded-full transition ${
                  activeFilter === year
                    ? "bg-[#592AC7] text-white font-primary"
                    : "bg-white text-black font-primary"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Mobile Filter Button */}
          <div className="md:hidden flex justify-center relative">
            <button
              onClick={() => setIsMobileFilterOpen((prev) => !prev)}
              className="flex items-center justify-between w-full max-w-[340px] bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm font-primary"
            >
              <span className="font-primary text-sm">
                {activeFilter === "All" ? "All Newsletters" : activeFilter}
              </span>

              {/* Filter Icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />
              </svg>
            </button>

            {/* Mobile Dropdown Panel */}
            {isMobileFilterOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-[110%] w-full max-w-[340px] bg-white rounded-xl shadow-lg overflow-hidden z-20"
              >
                {filters.map((year) => (
                  <button
                    key={year}
                    onClick={() => {
                      setActiveFilter(year);
                      setVisibleCount(6);
                      setIsMobileFilterOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm transition ${
                      activeFilter === year
                        ? "bg-[#592AC7] text-white"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* Newsletter List */}
        <motion.div layout className="flex flex-col gap-32 mt-16">
          {visibleNewsletters.map((newsletter) => (
            <NewsletterBlock key={newsletter.id} newsletter={newsletter} />
          ))}
        </motion.div>

        {/* Load More */}
        {activeFilter === "All" &&
          visibleCount < filteredNewsletters.length && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="bg-[#592AC7] text-white px-10 py-4 rounded-[15px] font-primary font-semibold"
              >
                Load More
              </button>
            </div>
          )}
      </div>
    </div>
  );
}
