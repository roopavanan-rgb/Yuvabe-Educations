"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const timelineData = [
  {
    week: "Week 1",
    title: "Run your first AI app",
    description: "Confidence + real momentum from Day 1",
  },
  {
    week: "Week 4",
    title: "Build AI workflows",
    description: "Automate with agents; understand the stack",
  },
  {
    week: "Week 8",
    title: "Create with your own data",
    description: "Build tools on custom knowledge bases",
  },
  {
    week: "Week 12",
    title: "Launch your AI product",
    description: "Ship something real. Own it.",
  },
];

export function Instructors() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const isMobile = window.innerWidth < 768;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });

        // Title animation
        tl.from(".timeline-title", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        // Line animation (horizontal vs vertical)
        tl.fromTo(
          ".timeline-line",
          isMobile
            ? { scaleY: 0, transformOrigin: "top center" }
            : { scaleX: 0, transformOrigin: "left center" },
          isMobile
            ? { scaleY: 1, duration: 1.2, ease: "power2.inOut" }
            : { scaleX: 1, duration: 1.2, ease: "power2.inOut" },
          "-=0.4",
        );

        // Nodes
        tl.from(
          ".node-circle",
          {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          "-=1.0",
        );

        // Text
        tl.from(
          ".timeline-text-content",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.8",
        );
      }, containerRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 bg-[#F6F8F9] min-h-[60vh] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto max-w-[1400px]">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-[46px] font-primary font-bold text-[#001B44] text-center mb-20 md:mb-32 tracking-tight timeline-title">
          Where you'll be, week by week
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Responsive Line */}
          <div
            className="
              absolute z-0 timeline-line border-[#0A2540]

              /* Desktop (horizontal) */
              md:top-[14px] md:left-[10%] md:right-[10%] md:h-0
              md:border-t-[2.5px] md:border-dashed

              /* Mobile (vertical) */
              top-0 bottom-0 left-1/2 -translate-x-1/2 w-0
              border-l-[2.5px] border-dashed
            "
          ></div>

          {/* Timeline Items */}
          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-16 md:gap-0">
            {timelineData.map((item, idx) => (
              <div
                key={idx}
                className="flex-1 flex flex-col items-center text-center px-4 relative"
              >
                {/* Node */}
                <div
                  className="
                    w-[30px] h-[30px] rounded-full border-[2.5px] border-[#0A2540]
                    bg-[#F6F8F9] flex items-center justify-center
                    mb-8 md:mb-10 relative z-10 node-circle

                    /* Mobile center alignment */
                    absolute left-1/2 -translate-x-1/2 md:static
                  "
                >
                  <div className="w-[12px] h-[12px] rounded-full bg-[#0A2540]"></div>
                </div>

                {/* Text */}
                <div
                  className={`
                    timeline-text-content flex flex-col items-center
                    mt-10 md:mt-0

                    ${
                      idx % 2 === 0
                        ? "md:items-start md:text-left"
                        : "md:items-end md:text-right"
                    }
                  `}
                >
                  <p className="text-[17px] text-[#4A627B] font-secondary mb-5 tracking-wide">
                    {item.week}
                  </p>
                  <h3 className="text-xl md:text-[22px] font-primary font-bold text-[#001B44] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[15px] md:text-base font-secondary text-[#5A738A] leading-relaxed max-w-[240px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
