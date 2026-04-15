"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/* ================= EXPORTABLE TYPES ================= */

export type GeneratedStatus = "active" | "upcoming" | "completed";

export interface ProgramCohort {
  id: string;
  label: string;
  startDate: string;
  endDate: string;
  registerUrl?: string;
}

export interface Program {
  id: string;
  name: string;
  description: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string;
  viewMoreUrl?: string;
  registerUrl?: string;
  cohorts?: ProgramCohort[];
}

export interface ProgramCalendarProps {
  programs: Program[];
}

type FilterType = "all" | "active" | "upcoming" | "completed";

/* ================= STATUS HELPERS ================= */

const getStatus = (startDate: string, endDate: string): GeneratedStatus => {
  const today = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (today < start) return "upcoming";
  if (today > end) return "completed";
  return "active";
};

const getProgramStatus = (program: Program): GeneratedStatus => {
  if (Array.isArray(program.cohorts) && program.cohorts.length > 0) {
    const statuses = program.cohorts.map((c) =>
      getStatus(c.startDate, c.endDate),
    );

    if (statuses.includes("active")) return "active";
    if (statuses.includes("upcoming")) return "upcoming";
    return "completed";
  }

  return getStatus(program.startDate, program.endDate);
};

/* ================= CALENDAR GENERATOR ================= */

interface Day {
  date: Date;
  isCurrentMonth: boolean;
  isActive: boolean;
}

const generateCalendarMonths = (start: Date, end: Date) => {
  const months = [];
  const current = new Date(start.getFullYear(), start.getMonth(), 1);

  while (current <= end) {
    const year = current.getFullYear();
    const month = current.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const days: Day[] = [];
    const startOffset = firstDayOfMonth.getDay();

    // Leading blanks
    for (let i = 0; i < startOffset; i++) {
      days.push({
        date: new Date(year, month, i - startOffset + 1),
        isCurrentMonth: false,
        isActive: false,
      });
    }

    for (let d = 1; d <= lastDayOfMonth.getDate(); d++) {
      const date = new Date(year, month, d);

      days.push({
        date,
        isCurrentMonth: true,
        isActive: date >= start && date <= end,
      });
    }

    months.push({
      label: firstDayOfMonth.toLocaleString("default", {
        month: "long",
        year: "numeric",
      }),
      days,
    });

    current.setMonth(current.getMonth() + 1);
  }

  return months;
};

/* ================= COMPONENT ================= */

export default function ProgramCalendar({ programs }: ProgramCalendarProps) {
  const [filter, setFilter] = useState<FilterType>("all");
  const [filteredPrograms, setFilteredPrograms] = useState<Program[]>(programs);
  const [expandedProgramId, setExpandedProgramId] = useState<string | null>(
    null,
  );
  const [activeCohorts, setActiveCohorts] = useState<Record<string, string>>(
    {},
  );

  /* ================= FILTER LOGIC ================= */

  useEffect(() => {
    const result = programs.filter((program) => {
      const hasCompleted =
        program.cohorts?.some(
          (c) => getStatus(c.startDate, c.endDate) === "completed",
        ) ?? false;

      if (filter === "all") return true;
      if (filter === "completed" && hasCompleted) return true;

      return getProgramStatus(program) === filter;
    });

    setFilteredPrograms(result);

    if (result.length > 0) {
      const first = result[0];
      setExpandedProgramId(first.id);

      // Default to the first cohort in the array
      if (first.cohorts?.length) {
        setActiveCohorts({ [first.id]: first.cohorts[0].id });
      }
    } else {
      setExpandedProgramId(null);
    }
  }, [filter, programs]);

  const activeProgram = filteredPrograms.find(
    (p) => p.id === expandedProgramId,
  );

  const getActiveDates = (program: Program) => {
    if (Array.isArray(program.cohorts) && program.cohorts.length > 0) {
      const activeId = activeCohorts[program.id];
      const cohort =
        program.cohorts.find((c) => c.id === activeId) || program.cohorts[0];

      return {
        start: new Date(cohort.startDate),
        end: new Date(cohort.endDate),
      };
    }

    return {
      start: new Date(program.startDate),
      end: new Date(program.endDate),
    };
  };

  const handleProgramClick = (program: Program) => {
    setExpandedProgramId(program.id);
    // Strictly set the first cohort as active if cohorts exist
    if (program.cohorts?.length) {
      setActiveCohorts((prev) => ({
        ...prev,
        [program.id]: program.cohorts![0].id, // non-null assertion is safe here
      }));
    }
  };

  /* ================= RENDER ================= */

  return (
    <>
      <div className="space-y-4">
        <div className="flex gap-3 mb-4">
          {["all", "active", "upcoming", "completed"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab as FilterType)}
              className={`px-4 py-2 rounded-full text-sm font-medium shadow-md cursor-pointer transition
                ${
                  filter === tab
                    ? "bg-[#592AC7] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT SIDE */}
          <div className="lg:w-2/5 space-y-4  max-h-100 md:min-h-162.5 md:max-h-162.5 overflow-y-auto p-2 pb-6">
            {filteredPrograms.map((program) => {
              const status = getProgramStatus(program);
              const isExpanded = expandedProgramId === program.id;

              return (
                <div key={program.id} className="space-y-2">
                  {/* PROGRAM CARD */}
                  <div
                    onClick={() => handleProgramClick(program)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleProgramClick(program);
                      }
                    }}
                    tabIndex={0}
                    className={`p-6 rounded-xl shadow-md cursor-pointer transition-all duration-300 flex flex-col justify-between
          ${
            isExpanded ? "bg-[#592AC7] text-white" : "bg-white hover:shadow-lg"
          }`}
                  >
                    {/* TOP SECTION */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {status === "active" && (
                          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        )}

                        <h3
                          className={`text-lg font-bold ${
                            isExpanded ? "text-yellow-300" : "text-[#592AC7]"
                          }`}
                        >
                          {program.name}
                        </h3>
                      </div>

                      <p
                        className={`text-sm mb-2 ${
                          isExpanded ? "text-white" : "text-gray-600"
                        }`}
                      >
                        {program.description}
                      </p>

                      <p className="text-xs opacity-70 mb-4">
                        {program.location}
                      </p>
                    </div>

                    {/* BOTTOM ROW */}
                    <div className="flex items-center justify-between mt-4">
                      <span
                        className={`text-sm font-semibold ${
                          isExpanded ? "text-yellow-300" : "text-gray-800"
                        }`}
                      >
                        {program.type}
                      </span>

                      {status === "upcoming" ? (
                        <Link
                          href={
                            program.registerUrl || program.viewMoreUrl || "/"
                          }
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            className={`px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer
                  ${
                    isExpanded
                      ? "bg-white text-[#592AC7]"
                      : "bg-[#592AC7] text-white hover:bg-violet-700"
                  }`}
                            tabIndex={-1}
                          >
                            Register
                          </button>
                        </Link>
                      ) : (
                        <Link
                          href={program.viewMoreUrl || "/"}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            className={`px-4 py-2 rounded-full text-sm font-medium border transition cursor-pointer
                  ${
                    isExpanded
                      ? "bg-white text-[#592AC7]"
                      : "border-[#592AC7] text-[#592AC7] hover:bg-violet-100"
                  }`}
                            tabIndex={-1}
                          >
                            View More
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* COHORTS (unchanged below this) */}
                  {isExpanded &&
                    Array.isArray(program.cohorts) &&
                    program.cohorts.length > 0 && (
                      <div className="pl-4 space-y-2">
                        {program.cohorts.map((cohort) => {
                          const cohortStatus = getStatus(
                            cohort.startDate,
                            cohort.endDate,
                          );
                          const isActive =
                            activeCohorts[program.id] === cohort.id;

                          return (
                            <div
                              key={cohort.id}
                              onClick={() =>
                                setActiveCohorts((prev) => ({
                                  ...prev,
                                  [program.id]: cohort.id,
                                }))
                              }
                              onKeyDown={(e) => {
                                setActiveCohorts((prev) => ({
                                  ...prev,
                                  [program.id]: cohort.id,
                                }));
                              }}
                              className={`flex justify-between items-center p-2 rounded-lg cursor-pointer
                  ${
                    isActive
                      ? "bg-[#592AC7] text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                              tabIndex={0}
                            >
                              <div className="flex items-center gap-2">
                                {cohortStatus === "active" && (
                                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                )}
                                {cohort.label}
                              </div>

                              <Link
                                href={
                                  cohort.registerUrl ||
                                  program.viewMoreUrl ||
                                  "/"
                                }
                                onClick={(e) => e.stopPropagation()}
                              >
                                <button
                                  className={`px-3 py-1 text-sm rounded-full cursor-pointer
                ${
                  isActive
                    ? "bg-white text-[#592AC7]"
                    : "bg-white text-[#592AC7]"
                }`}
                                  tabIndex={-1}
                                >
                                  Register
                                </button>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    )}
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE - CALENDAR */}
          <div className="lg:w-3/5 bg-gray-100 rounded-2xl shadow-lg max-h-100 md:max-h-162.5 overflow-y-auto">
            {activeProgram ? (
              <>
                <h2 className="text-2xl font-bold text-[#592AC7] mb-6 bg-gray-100 sticky top-0 p-5">
                  {activeProgram.name} Calendar
                </h2>

                {(() => {
                  const { start, end } = getActiveDates(activeProgram);
                  const months = generateCalendarMonths(start, end);

                  return (
                    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 px-5 pb-5">
                      {months.map((month, index) => (
                        <div
                          key={index}
                          className="bg-white shadow-lg rounded-2xl p-4"
                        >
                          <h3 className="font-bold mb-4 text-sm">
                            {month.label}
                          </h3>

                          <div className="grid grid-cols-7 gap-2 text-center text-xs">
                            {[
                              "Sun",
                              "Mon",
                              "Tue",
                              "Wed",
                              "Thu",
                              "Fri",
                              "Sat",
                            ].map((day) => (
                              <div
                                key={day}
                                className="font-semibold text-gray-500"
                              >
                                {day}
                              </div>
                            ))}

                            {month.days.map((dayObj, i) => (
                              <div
                                key={i}
                                className={`p-1 rounded-md
                              ${!dayObj.isCurrentMonth && "opacity-0"}
                              ${
                                dayObj.isActive ? "bg-[#592AC7] text-white" : ""
                              }`}
                              >
                                {dayObj.isCurrentMonth
                                  ? dayObj.date.getDate()
                                  : ""}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })()}
              </>
            ) : (
              <div className="text-center text-gray-400 py-20">
                No programs.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
