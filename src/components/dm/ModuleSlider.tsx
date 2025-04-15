// "use client";

// import { ModuleCard } from "@/components/ModuleCard";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const modules = [
//   { title: "Introduction to Digital Marketing", description: "Fundamentals, scope, and industry trends.", icon: "/icons/idm.png" },
//   { title: "Website & Blog Creation ", description: "Building a strong online presence.", icon: "/icons/wbc.png" },
//   { title: "Digital Marketing Landscape", description: "Navigating evolving strategies and channels.", icon: "/icons/dml.png" },
//   { title: "Behavioral Marketing", description: "Understanding consumer psychology and targeting.", icon: "/icons/bm.png" },
//   { title: "Search Engine Optimization (SEO)", description: "Boosting organic visibility and rankings.", icon: "/icons/seo.png" },
//   { title: "Search Engine Marketing (SEM) ", description: " Paid search strategies for maximum reach.", icon: "/icons/sem.png" },
//   { title: "Social Media & Content Strategies", description: "Engaging customers, building brand advocacy, and crafting compelling messages.", icon: "/icons/smcs.png" },
//   { title: "Email Marketing", description: "Leveraging personalization for customer engagement.", icon: "/icons/em.png" },
//   { title: "Mobile Marketing", description: "Capturing audiences in the mobile-first era.", icon: "/icons/mm.png" },
//   { title: "Brand Design & Strategy", description: "Crafting a compelling brand identity.", icon: "/icons/bds.png" },
//   { title: "AI in Digital Marketing ", description: " Harnessing automation and emerging technologies.", icon: "/icons/ai.png" },
//   { title: "Analytics & ROI Optimization ", description: "Measuring success and refining strategies.", icon: "/icons/ao.png" },
// ];

// export function ModulesSlider() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 6000,        // Speed of scrolling
//     slidesToShow: 4,    // Show 4 cards at a time
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 0,   // Continuous scrolling
//     cssEase: "linear",  // Smooth motion
//     pauseOnHover: false,
//   };

//   return (
//     <section className="w-full py-12 bg-[#140F20] mt-14">
//       <div className="absolute center -bottom-90  blur-3xl w-70 h-70 rounded-full bg-[#FFA6A6] opacity-15"></div>
//       <h2 className="text-3xl text-center font-raleway font-semibold text-[#FFCA2D] mb-16">
//         12 Immersive Modules
//       </h2>

//       <Slider {...settings} className="px-6">
//         {modules.map((module, index) => (
//           <div key={index}>
//             <ModuleCard
//               title={module.title}
//               description={module.description}
//               icon={module.icon}
//             />
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// }



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
        breakpoint: 1280, // large desktops
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full py-12 bg-[#140F20] overflow-x-hidden">
      {/* Background circle */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-20 blur-3xl w-72 h-72 rounded-full bg-[#FFA6A6] opacity-15 z-0"></div>

      <h2 className="text-3xl sm:text-4xl text-center font-raleway font-semibold text-[#FFCA2D] mb-16 z-10 relative">
        12 Immersive Modules
      </h2>

      <div className="px-4 sm:px-8 md:px-12 lg:px-20 relative z-10">
        <Slider {...settings}>
          {modules.map((module, index) => (
            <div key={index} className="px-2">
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
