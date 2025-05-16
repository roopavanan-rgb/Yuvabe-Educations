"use client";

import { useState } from "react";
import clsx from "clsx";

interface SliderSettings {
  speed?: number; // in seconds
  pauseOnHover?: boolean;
  direction?: "left" | "right";
}

const InfiniteSlider = ({
  speed = 10,
  pauseOnHover = true,
  direction = "left",
}: SliderSettings) => {
  const modules = [
    { id: "01", text: "Environmental Science and Conservation" },
    { id: "02", text: "Sustainable Development and Policy Frameworks" },
    { id: "03", text: "Climate Science" },
    { id: "04", text: "GHG Accounting and Carbon Footprinting" },
    { id: "05", text: "Renewable Energy Systems" },
    { id: "06", text: "Water Resource Management" },
    { id: "07", text: "Waste Management and Circular Economy" },
    { id: "08", text: "Sustainable Architecture" },
    { id: "09", text: "Community Engagement and Social Innovation" },
  ];

  const duplicatedModules = [...modules, ...modules];

  const animationStyle = {
    animation: `${direction === "left" ? "slideLeft" : "slideRight"} ${speed}s linear infinite`,
  };

  return (
    <div
      className={clsx(
        "relative w-full overflow-hidden py-6 bg-[#1B360F]",
        pauseOnHover && "group"
      )}
    >
      <div
        className={clsx(
          "flex gap-5 my-4",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={animationStyle}
      >
        {duplicatedModules.map((module, index) => (
          <div
            key={index}
            className="flex-shrink-0 min-w-[240px] sm:min-w-[220px] md:min-w-[250px] lg:min-w-[270px] h-[140px] sm:h-[130px] md:h-[150px] lg:h-[160px]
                       p-4 bg-opacity-30 bg-[#2D5019] border border-[#90C645] rounded-[25px]
                       flex flex-col justify-start items-start"
          >
            <h2 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#A2E64D]">
              {module.id}
            </h2>
            <p className="text-sm sm:text-xs md:text-sm lg:text-base text-white mt-4 text-left leading-snug">
              {module.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
