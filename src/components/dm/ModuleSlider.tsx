"use client";

import { ModuleCard } from "@/components/dm/ModuleCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const modules = [
  { title: "Introduction to Digital Marketing", description: "Fundamentals, scope, and industry trends.", icon: "/dm/icons/idm.png" },
  { title: "Website & Blog Creation ", description: "Building a strong online presence.", icon: "/dm/icons/wbc.png" },
  { title: "Digital Marketing Landscape", description: "Navigating evolving strategies and channels.", icon: "/dm/icons/dml.png" },
  { title: "Behavioral Marketing", description: "Understanding consumer psychology and targeting.", icon: "/dm/icons/bm.png" },
  { title: "Search Engine Optimization (SEO)", description: "Boosting organic visibility and rankings.", icon: "/dm/icons/seo.png" },
  { title: "Search Engine Marketing (SEM) ", description: " Paid search strategies for maximum reach.", icon: "/dm/icons/sem.png" },
  { title: "Social Media & Content Strategies", description: "Engaging customers, building brand advocacy, and crafting compelling messages.", icon: "/dm/icons/smcs.png" },
  { title: "Email Marketing", description: "Leveraging personalization for customer engagement.", icon: "/dm/icons/em.png" },
  { title: "Mobile Marketing", description: "Capturing audiences in the mobile-first era.", icon: "/dm/icons/mm.png" },
  { title: "Brand Design & Strategy", description: "Crafting a compelling brand identity.", icon: "/dm/icons/bds.png" },
  { title: "AI in Digital Marketing ", description: " Harnessing automation and emerging technologies.", icon: "/dm/icons/ai.png" },
  { title: "Analytics & ROI Optimization ", description: "Measuring success and refining strategies.", icon: "/dm/icons/ao.png" },
];

export function ModulesSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,        // Speed of scrolling
    slidesToShow: 4,    // Show 4 cards at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,   // Continuous scrolling
    cssEase: "linear",  // Smooth motion
    pauseOnHover: false,
  };

  return (
    <section className="w-full py-12 bg-[#140F20] text-white">
      <h2 className="text-3xl text-center font-semibold text-[#FFCA2D] mb-20">
        12 Immersive Modules
      </h2>

      <Slider {...settings} className="px-6">
        {modules.map((module, index) => (
          <div key={index}>
            <ModuleCard
              title={module.title}
              description={module.description}
              icon={module.icon}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
