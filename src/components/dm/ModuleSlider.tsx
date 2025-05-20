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
  { title: "Search Engine Marketing (SEM) ", description: "Paid search strategies for maximum reach.", icon: "/dm/icons/sem.png" },
  { title: "Social Media & Content Strategies", description: "Engaging customers, building brand advocacy, and crafting compelling messages.", icon: "/dm/icons/smcs.png" },
  { title: "Email Marketing", description: "Leveraging personalization for customer engagement.", icon: "/dm/icons/em.png" },
  { title: "Mobile Marketing", description: "Capturing audiences in the mobile-first era.", icon: "/dm/icons/mm.png" },
  { title: "Brand Design & Strategy", description: "Crafting a compelling brand identity.", icon: "/dm/icons/bds.png" },
  { title: "AI in Digital Marketing ", description: "Harnessing automation and emerging technologies.", icon: "/dm/icons/ai.png" },
  { title: "Analytics & ROI Optimization ", description: "Measuring success and refining strategies.", icon: "/dm/icons/ao.png" },
];

export function ModulesSlider() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full py-12 bg-[#140F20] text-white overflow-hidden relative">
      {/* Background Blur */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-20 blur-3xl w-72 h-72 rounded-full bg-[#FFA6A6] opacity-15 z-0"></div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-raleway font-semibold text-[#FFCA2D] mb-16 z-10 relative">
        12 Immersive Modules
      </h2>

      {/* Full-Width Slider */}
      <div className="w-full relative z-10">
        <Slider {...settings}>
          {modules.map((module, index) => (
            <div key={index} className="px-3 sm:px-4">
              <ModuleCard
                title={module.title}
                description={module.description}
                icon={module.icon}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
