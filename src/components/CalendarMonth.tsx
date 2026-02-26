import React from "react";
import { MonthCalendar } from "@/types/programs";
import { cn } from "@/lib/utils";

interface CalendarMonthProps {
  monthData: MonthCalendar;
}

const CalendarMonth: React.FC<CalendarMonthProps> = ({ monthData }) => {
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col h-full min-h-75">
      <h3 className="text-center text-xl font-semibold text-[#592AC7] mb-2">
        {monthData.month}
      </h3>

      <div className="grid grid-cols-7 gap-2 text-xs font-medium text-center text-gray-500 mb-1">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 grow text-center text-sm">
        {monthData.days.map((day, idx) => (
          <div
            key={idx}
            className={cn(
              "h-8 flex items-center justify-center rounded-md",
              day.day === 0 ? "text-transparent" : "",
              day.active && day.highlight
                ? "bg-purple-300 text-white"
                : day.active
                ? "bg-[#592AC7] text-white"
                : "text-gray-400"
            )}
          >
            {day.day > 0 ? day.day : ""}
          </div>
        ))}
      </div>

      {monthData.dates && (
        <div className="mt-3 text-xs text-gray-600 text-center">
          {monthData.dates.start} to {monthData.dates.end}
        </div>
      )}
    </div>
  );
};

export default CalendarMonth;
