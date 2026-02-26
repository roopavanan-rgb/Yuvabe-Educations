// calendar-program.tsx
"use client";

import React from "react";
import Link from "next/link";

interface CalendarProgramProps {
  startDate: string;
  endDate: string;
  cohorts?: {
    id: string;
    label: string;
    startDate: string;
    endDate: string;
    registerUrl?: string;
  }[];
}

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
      monthLabel: firstDayOfMonth.toLocaleString("default", {
        month: "long",
        year: "numeric",
      }),
      days,
    });

    current.setMonth(current.getMonth() + 1);
  }

  return months;
};

const CalendarProgram: React.FC<CalendarProgramProps> = ({
  startDate,
  endDate,
  cohorts,
}) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const months = generateCalendarMonths(start, end);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
      {months.map((month, index) => (
        <div key={index} className="bg-white shadow-lg p-4 rounded-2xl">
          <h3 className="text-sm font-bold mb-4 font-secondary">{month.monthLabel}</h3>

          <div className="grid grid-cols-7 gap-2 text-center">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="font-semibold text-xs text-gray-500 font-secondary"
              >
                {day}
              </div>
            ))}

            {month.days.map((dayObj, idx) => (
              <div
                key={idx}
                className={`
                  p-1 rounded-md text-[12px] font-secondary
                  ${dayObj.isCurrentMonth ? "" : "opacity-0"}
                  ${dayObj.isActive ? "bg-[#592AC7] text-white" : "bg-white"}
                `}
              >
                {dayObj.isCurrentMonth ? dayObj.date.getDate() : ""}
              </div>
            ))}
          </div>

          {/* Render cohorts for this month */}
          {cohorts?.length ? (
            <div className="mt-4 space-y-2">
              {cohorts.map((cohort) => {
                const cohortStart = new Date(cohort.startDate);
                const cohortEnd = new Date(cohort.endDate);
                const cohortMonth = cohortStart.getMonth();
                if (cohortMonth === new Date(month.monthLabel).getMonth()) {
                  return (
                    <div
                      key={cohort.id}
                      className="flex justify-between items-center bg-[#EDE9FE] p-2 rounded-lg shadow-sm"
                    >
                      <span className="font-medium text-sm">{cohort.label}</span>
                      <Link
                        href={cohort.registerUrl || "#"}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-[#592AC7] text-white hover:bg-violet-700"
                      >
                        Register
                      </Link>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default CalendarProgram;