import React from "react";
import { FilterType } from "@/types/programs";
import { cn } from "@/lib/utils";

interface ProgramFilterTabsProps {
  currentFilter: FilterType;
  setFilter: (filter: FilterType) => void;
}

const ProgramFilterTabs: React.FC<ProgramFilterTabsProps> = ({
  currentFilter,
  setFilter,
}) => {
  const filters: FilterType[] = ["all", "active", "upcoming", "completed"];

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-6 py-3 justify-center sm:justify-start">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setFilter(filter)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium font-secondary transition-all duration-300 shadow-sm",
              currentFilter === filter
                ? "bg-[#592AC7] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            )}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProgramFilterTabs;
