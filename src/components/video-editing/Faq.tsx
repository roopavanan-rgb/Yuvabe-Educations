"use client";

import { useId, useState } from "react";
import { faqs } from "./data";

export default function Faq() {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <div className="flex flex-col border-t border-[#2E2D35]" data-ve="stagger">
      {faqs.map(([q, a], i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-${i}`;
        return (
          <div
            key={q}
            data-ve-item
            className={`relative border-b border-[#2E2D35] transition-colors duration-300 ${
              isOpen ? "bg-[#1F1E24]" : "hover:bg-[#1C1B21]"
            }`}
          >
            {/* active-clip marker on the left edge */}
            <span
              className={`absolute left-0 top-0 h-full w-[3px] origin-top bg-[#F7C028] transition-transform duration-300 ${
                isOpen ? "scale-y-100" : "scale-y-0"
              }`}
            />
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="group grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 bg-transparent px-3 py-[18px] text-left sm:grid-cols-[96px_minmax(0,1fr)_auto]"
            >
              <span
                className={`hidden font-mono text-xs transition-colors sm:block ${
                  isOpen ? "text-[#F7C028]" : "text-[#77767F] group-hover:text-[#A9A8B2]"
                }`}
              >
                00:00:0{i + 1}:00
              </span>
              <span className="font-primary text-base font-semibold text-white transition-transform duration-300 group-hover:translate-x-1">
                {q}
              </span>
              <span
                className={`flex h-[30px] w-[30px] items-center justify-center rounded-full text-lg leading-none transition duration-300 group-active:scale-90 ${
                  isOpen
                    ? "rotate-180 bg-[#F7C028] text-[#121212]"
                    : "bg-[#2A2930] text-white group-hover:bg-[#3A3942]"
                }`}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-3 pb-[22px] text-[15px] leading-[1.65] text-[#C9C8D0] sm:pl-[124px] sm:pr-[50px]">
                  {a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
