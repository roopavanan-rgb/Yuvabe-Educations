"use client";

import React, { useState, useEffect, useRef } from "react";
import ProgramFilterTabs from "@/components/ProgramFilterTabs";
import ProgramCard from "@/components/ProgramCard";
import ProgramCalendar from "@/components/ProgramCalendar";
import { programsData } from "@/data/programData";
import { cn } from "@/lib/utils";

const Index = () => {
  const [filter, setFilter] = useState<FilterType>("all");
  const [filteredPrograms, setFilteredPrograms] = useState<Program[]>([]);
  const [activeProgram, setActiveProgram] = useState<Program | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const programsContainerRef = useRef<HTMLDivElement>(null);

  // Filter programs based on selected filter
  useEffect(() => {
    if (filter === "all") {
      setFilteredPrograms(programsData);
    } else {
      setFilteredPrograms(
        programsData.filter((program) => program.status === filter)
      );
    }
  }, [filter]);

  // Set initial active program
  useEffect(() => {
    if (filteredPrograms.length > 0 && !activeProgram) {
      setActiveProgram(filteredPrograms[0]);
    } else if (filteredPrograms.length > 0 && activeProgram) {
      // Check if active program still exists in filtered list
      const programExists = filteredPrograms.some(
        (p) => p.id === activeProgram.id
      );
      if (!programExists) {
        setActiveProgram(filteredPrograms[0]);
      }
    } else {
      setActiveProgram(null);
    }
  }, [filteredPrograms, activeProgram]);

  // Handle scroll animation for program cards
  const handleProgramClick = (program: Program) => {
    setActiveProgram(program);

    // Smooth scroll to selected program
    if (programsContainerRef.current) {
      const container = programsContainerRef.current;
      const cards = container.querySelectorAll(".program-card");

      cards.forEach((card, index) => {
        if (filteredPrograms[index].id === program.id) {
          setIsScrolling(true);
          container.scrollTo({
            top: card.getBoundingClientRect().top + container.scrollTop - 100,
            behavior: "smooth",
          });

          setTimeout(() => setIsScrolling(false), 500);
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 md:pt-18">
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-8">
          <h1
            className="text-3xl md:text-6xl font-semibold font-primary text-[#592AC7] "
            
          >
            Steam program calender 2025
          </h1>
        </header>

        <ProgramFilterTabs currentFilter={filter} setFilter={setFilter} />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Programs Section */}
          <div className="lg:w-3/5 ">
            <div
              ref={programsContainerRef}
              className="h-[1250px] overflow-y-auto pr-4 space-y-4"
            >
              {filteredPrograms.map((program) => (
                <div key={program.id}>
                  <ProgramCard
                    program={program}
                    isActive={activeProgram?.id === program.id}
                    onClick={() => handleProgramClick(program)}
                  />

                  {/* 📱 Mobile: show calendar inline with card */}
                  <div className="lg:hidden">
                    {activeProgram?.id === program.id && (
                      <div className="mt-4">
                        <ProgramCalendar program={activeProgram} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar Section */}
          {/* 🖥️ Desktop calendar */}
          <div className="hidden lg:block lg:w-full bg-[#592AC7] rounded-2xl p-6 transition-all duration-500">
            <ProgramCalendar program={activeProgram} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
