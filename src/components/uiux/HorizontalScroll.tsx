"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Slide {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

const slidesData: Slide[] = [
  {
    title: "Introduction to UI/UX Design",
    subtitle: "Understanding design principles and industry trends.",
    image: "/images/uiux/ui-slide1.png",
    alt: "Slide Image 1",
  },
  {
    title: "User Research & Analysis",
    subtitle: "Conducting research to understand user needs and behaviours.",
    image: "/images/uiux/ui-slide2.png",
    alt: "Slide Image 2",
  },
  {
    title: "Wireframing & Prototyping",
    subtitle: "Creating low-fidelity and high-fidelity prototypes.",
    image: "/images/uiux/ui-slide3.png",
    alt: "Slide Image 3",
  },
  {
    title: "Information Architecture",
    subtitle: "Structuring digital experiences for usability.",
    image: "/images/uiux/ui-slide4.png",
    alt: "Slide Image 4",
  },
  {
    title: "User Interface (UI) Design",
    subtitle: "Designing aesthetically pleasing and functional interfaces.",
    image: "/images/uiux/ui-slide5.png",
    alt: "Slide Image 5",
  },
  {
    title: "Interaction Design & Microinteractions",
    subtitle: "Enhancing user experience with intuitive interactions.",
    image: "/images/uiux/ui-slide6.png",
    alt: "Slide Image 6",
  },
  {
    title: "Usability Testing & User Feedback",
    subtitle: "Iterating designs based on user testing insights.",
    image: "/images/uiux/ui-slide7.png",
    alt: "Slide Image 7",
  },
  {
    title: "Mobile & Web Design",
    subtitle: "Optimizing designs for different platforms and devices.",
    image: "/images/uiux/ui-slide8.png",
    alt: "Slide Image 8",
  },
  {
    title: "Design Tools & Software",
    subtitle: "Mastering Figma, Adobe XD, and other essential tools.",
    image: "/images/uiux/ui-slide9.png",
    alt: "Slide Image 9",
  },
  {
    title: "Design Thinking & Problem-Solving",
    subtitle: "Applying design methodologies to real-world challenges.",
    image: "/images/uiux/ui-slide10.png",
    alt: "Slide Image 10",
  },
  {
    title: "AI & Emerging Technologies in UI/UX",
    subtitle:
      "Leveraging AI for design automation and user experience enhancement.",
    image: "/images/uiux/ui-slide11.png",
    alt: "Slide Image 11",
  },
  {
    title: "Portfolio & Resume Development",
    subtitle: "Showcasing your work effectively for job placements.",
    image: "/images/uiux/ui-slide12.png",
    alt: "Slide Image 12",
  },
];

const HorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure it's running client-side
    const container = containerRef.current;
    if (!container) return;

    const slides = container.querySelectorAll(".slide");

    // GSAP animation
    const scrollAnimation = gsap.to(slides, {
      xPercent: -100 * (slides.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top-=70",
        end: () => `+=${container.scrollWidth}`,
        pin: true,
        scrub: 1,
        snap: 1 / (slides.length - 1),
        anticipatePin: 1,
        onUpdate: () => {
          // Check each slide's visibility relative to the viewport
          slides.forEach((slide: Element) => {
            const slideRect = slide.getBoundingClientRect();
            const isInViewport =
              slideRect.left >= 0 && slideRect.right <= window.innerWidth;

            // Smooth transition of opacity
            if (!isInViewport) {
              gsap.to(slide, { opacity: 0, duration: 0.5, ease: "power2.out" });
            } else {
              gsap.to(slide, { opacity: 1, duration: 0.5, ease: "power2.out" });
            }
          });
        },
      },
    });

    // Cleanup ScrollTrigger on unmount
    return () => {
      scrollAnimation.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div className="w-full overflow-hidden hidden xl:block">
      <div
        ref={containerRef}
        className="flex w-max lg:h-screen snap-x snap-mandatory justify-center"
      >
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className="slide flex-shrink-0  gap-x-16 gap-y-8 flex flex-col lg:flex-row justify-between items-center px-10 snap-start min-w-[8.2%] lg:max-w-[1000px] xl:max-w-[1240px]"
          >
            {/* Left Text */}
            <div className="max-w-xl text-center lg:text-left">
              <h3 className="text-black font-light leading-[120%] text-[32px] md:text-4xl lg:text-[64px] font-albert-sans">
                {slide.title}
              </h3>
              <p className="mt-4 text-[16px] md:text-lg lg:text-2xl text-black font-secondary leading-8">
                {slide.subtitle}
              </p>
            </div>

            {/* Right Image */}
            <div className="mt-10 lg:mt-0">
              <Image
                src={slide.image}
                alt={slide.alt}
                width={570}
                height={578}
                className="object-cover w-full max-w-md lg:max-w-[40vw] lg:w-[570px] m-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
