"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  categories: string[];
  activeCategory?: string;
}

export default function BlogCategoryFilter({
  categories,
  activeCategory,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const formatCategory = (cat: string) =>
    cat.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

  const current = activeCategory || "all-posts";

  return (
    <div className="w-full">
      {/* ================= DESKTOP FILTERS ================= */}
      <div className="hidden md:flex flex-wrap gap-4 z-10 mx-auto justify-center">
        {categories.map((cat) => {
          const isActive = current === cat;

          return (
            <Link
              key={cat}
              href={`/stories/blogs?category=${cat}`}
              className={`px-4 py-2 rounded-[30px] text-[16px] font-medium capitalize font-primary ${
                isActive ? "bg-[#592AC7] text-white" : "bg-[#F1F1F1] text-black"
              }`}
            >
              {formatCategory(cat)}
            </Link>
          );
        })}
      </div>

      {/* ================= MOBILE DROPDOWN ================= */}
      <div className="md:hidden relative flex justify-center">
        {/* Trigger Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center justify-between w-full max-w-[340px] bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm"
        >
          <span className="font-primary text-sm capitalize">
            {formatCategory(current)}
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

        {/* Dropdown Panel */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-[110%] w-full max-w-[340px] bg-white rounded-xl shadow-lg overflow-hidden z-20"
          >
            {categories.map((cat) => {
              const isActive = current === cat;

              return (
                <Link
                  key={cat}
                  href={`/stories/blogs?category=${cat}`}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-left px-4 py-3 text-sm capitalize ${
                    isActive ? "bg-[#592AC7] text-white" : "hover:bg-gray-50"
                  }`}
                >
                  {formatCategory(cat)}
                </Link>
              );
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
}
