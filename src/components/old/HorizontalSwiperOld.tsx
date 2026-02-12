import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Navigation, Autoplay } from "swiper/modules";

export default function HorizontalSwiper() {
  // Define an array of box data with image width and height
  const boxes = [
    {
      title: "In-Person Sessions with Industry Experts",
      description:
        "Learn directly from experienced designers and professionals.",
      imageSrc: "/images/uiux/ui-immer1.svg",
      imageAlt: "",
      imageWidth: 86.36,
      imageHeight: 88.41,
    },
    {
      title: "Immersive Learning in Auroville’s Unique, Sustainable Ecosystem",
      description:
        "Experience transformative education in a vibrant community.",
      imageSrc: "/images/uiux/ui-immer2.svg",
      imageAlt: "",
      imageWidth: 82.09,
      imageHeight: 88,
    },
    {
      title: "Hands-On Projects & Real-World Case Studies",
      description:
        "Work on live projects and apply design strategies effectively.",
      imageSrc: "/images/uiux/ui-immer3.svg",
      imageAlt: "",
      imageWidth: 87.36,
      imageHeight: 87.44,
    },
    {
      title: "Grow with Yuvabe’s Signature Evolve Program",
      description:
        "Develop leadership, communication, and problem-solving skills.",
      imageSrc: "/images/uiux/ui-immer4.svg",
      imageAlt: "",
      imageWidth: 67.82,
      imageHeight: 87.11,
    },
    {
      title: "Paid Internships (3-6 months) for the Top 5 Students",
      description: "Gain industry experience to kickstart your career.",
      imageSrc: "/images/uiux/ui-immer5.svg",
      imageAlt: "",
      imageWidth: 86.61,
      imageHeight: 86.86,
    },
    {
      title: "Certification Recognized by Employers & Universities",
      description: "Enhance your resume with a prestigious credential.",
      imageSrc: "/images/uiux/ui-immer6.svg",
      imageAlt: "",
      imageWidth: 62.88,
      imageHeight: 87.63,
    },
    {
      title: "Affordable & Inclusive, with Scholarships Available",
      description:
        "Accessible education for aspiring designers from all backgrounds.",
      imageSrc: "/images/uiux/ui-immer7.svg",
      imageAlt: "",
      imageWidth: 106.52,
      imageHeight: 87.39,
    },
    {
      title: "Leadership & Professional Development",
      description: "Focus on discipline, time management, and teamwork skills.",
      imageSrc: "/images/uiux/ui-immer8.svg",
      imageAlt: "",
      imageWidth: 86.71,
      imageHeight: 86.87,
    },
    {
      title: "English Communication & Presentation Skills",
      description:
        "Build confidence in articulating design decisions and ideas.",
      imageSrc: "/images/uiux/ui-immer9.svg",
      imageAlt: "",
      imageWidth: 82,
      imageHeight: 87,
    },
    {
      title: "Portfolio Building & Career Support ",
      description:
        "Create a strong design portfolio and prepare for job placements.",
      imageSrc: "/images/uiux/ui-immer10.svg",
      imageAlt: "",
      imageWidth: 88.23,
      imageHeight: 87.68,
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Swiper Container */}
      <Swiper
        loop={true} // Endless scroll
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3500, // Time between slides (in ms)
          disableOnInteraction: false, // Keeps autoplay even after user interaction
          pauseOnMouseEnter: true,
        }}
        speed={1600}
        centeredSlides={true}
        slidesPerView={1} // Automatically adjust the number of slides visible
        spaceBetween={30} // Space between the boxes
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
            autoplay: {
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: false,
            },
          },
          768: {
            slidesPerView: 2,
            autoplay: {
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: false,
            },
          },
          1024: {
            slidesPerView: "auto",
          },
          1280: {
            slidesPerView: "auto",
          },
        }}
      >
        {/* Map through the boxes array to create individual SwiperSlide for each box */}
        {boxes.map((box, index) => (
          <SwiperSlide key={index} className="max-w-full lg:max-w-[351px]">
            <div className="flex flex-col p-5 md:p-[30px] gap-2.5 bg-[#FFFFFF66] shadow-[4px_4px_25px_rgba(0,0,0,0.03)] filter backdrop-blur-[35px] rounded-[30px] lg:max-w-[351px] h-85 min-h-85">
              <Image
                src={box.imageSrc}
                alt={box.imageAlt}
                width={box.imageWidth} // Dynamic width from array
                height={box.imageHeight} // Dynamic height from array
                className="object-cover m-auto"
              />
              <h4 className="font-albert-sans font-medium md:text-2xl text-xl text-[#020406] leading-[150%] text-center lg:text-left">
                {box.title}
              </h4>
              <p className="font-secondary md:text-[18px] text-[16px] text-[#020406] leading-[150%] text-center lg:text-left">
                {box.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Navigation Buttons */}
      <div className="flex justify-center gap-6 pt-6 lg:hidden">
        <button className="swiper-button-prev cursor-pointer">
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
        <button className="swiper-button-next cursor-pointer">
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
}
