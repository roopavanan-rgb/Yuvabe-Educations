import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const CustomSwiper = () => {
  // Define slide data array
  const slidesData = [
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

  return (
    <div className="flex flex-col w-full xl:hidden">
      {/* Swiper Container */}
      <Swiper
        loop={true}
        spaceBetween={50} // Adjust gap between slides
        slidesPerView={1} // One slide at a time
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        speed={4000}
        className="relative w-full"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-row gap-x-16 gap-y-8 flex-wrap lg:flex-nowrap lg:justify-between w-full min-w-[300px]" // Add w-full and min-width
          >
            <motion.div className="flex flex-row gap-x-16 gap-y-8 flex-wrap lg:flex-nowrap lg:justify-between w-full min-w-[300px]">
              {/* Left Text */}
              <div className="w-full lg:w-auto lg:max-w-[509px]">
                <h3 className="font-albert-sans text-black text-center lg:text-left font-light leading-[120%] lg:text-[64px] md:text-4xl text-3xl">
                  {slide.title}
                </h3>
                <p className="font-secondary lg:text-2xl md:text-[18px] text-[16px] text-black leading-9 text-center lg:text-left pt-3 md:pt-6">
                  {slide.subtitle}
                </p>
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-auto">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  width={569}
                  height={578}
                  className="object-cover w-full max-w-md lg:max-w-[40vw] lg:w-[570px] m-auto"
                />
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center gap-6 pt-6 xl:hidden">
        <button className="swiper-button-prev-custom cursor-pointer">
          <svg
            width="79"
            height="79"
            viewBox="0 0 79 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_864_2076)">
              <rect
                x="6"
                y="6"
                width="58.0345"
                height="58.0345"
                rx="29.0172"
                fill="#F48F38"
              />
              <path
                d="M38.7166 42.9959L29.5166 33.7958L38.7166 24.5957L40.9961 26.8752L34.0755 33.7958L40.9961 40.7164L38.7166 42.9959Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_864_2076"
                x="0"
                y="0"
                width="78.0352"
                height="78.0352"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="4" dy="4" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_864_2076"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_864_2076"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
        <button className="swiper-button-next-custom cursor-pointer">
          <svg
            width="79"
            height="79"
            viewBox="0 0 79 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_864_2074)">
              <rect
                x="6.21875"
                y="6"
                width="58.0345"
                height="58.0345"
                rx="29.0172"
                fill="#F48F38"
              />
              <path
                d="M31.5373 42.9959L40.7374 33.7958L31.5373 24.5957L29.2578 26.8752L36.1784 33.7958L29.2578 40.7164L31.5373 42.9959Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_864_2074"
                x="0.21875"
                y="0"
                width="78.0352"
                height="78.0352"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="4" dy="4" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_864_2074"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_864_2074"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CustomSwiper;
