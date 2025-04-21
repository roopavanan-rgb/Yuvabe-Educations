"use client";

import React from "react";
import { Program, MonthCalendar } from "@/types/programs";
import CalendarMonth from "@/components/CalendarMonth";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface ProgramCalendarProps {
  program: Program | null;
}

const ProgramCalendar: React.FC<ProgramCalendarProps> = ({ program }) => {
  const groupedMonths: MonthCalendar[][] = [];

  if (program) {
    for (let i = 0; i < program.calendar.length; i += 3) {
      groupedMonths.push(program.calendar.slice(i, i + 3));
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto h-full animate-fade-in-up">

      {program ? (
        <>
          {/* Mobile/Tablet Swiper View */}
          <div className="block lg:hidden">
            <Swiper spaceBetween={16} slidesPerView={1}>
              {program.calendar.map((month, idx) => (
                <SwiperSlide key={`${month.month}-${idx}`}>
                  <CalendarMonth monthData={month} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden lg:block space-y-6">
            {groupedMonths.map((row, rowIdx) => (
              <div
                key={rowIdx}
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {row.map((month, idx) => (
                  <CalendarMonth
                    key={`${month.month}-${idx}`}
                    monthData={month}
                  />
                ))}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-64 text-gray-400">
          Select a program to view its calendar
        </div>
      )}
    </div>
  );
};

export default ProgramCalendar;
