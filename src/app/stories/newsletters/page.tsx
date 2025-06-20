"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Define the structure for a newsletter item
interface NewsletterItem {
  id: number;
  title: string;
  subtitle: string;
  month: string;
  year: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

// Array of newsletter data
const newslettersData: NewsletterItem[] = [
  {
    id: 17,
    title: "YUVABEAT",
    subtitle: "Agents of Change - Part 1",
    month: "June",
    year: "2025",
    description:
      "At Yuvabe, youth leadership isn’t just taught—it’s lived. Every project, every conversation, every seed planted is part of a bigger story. This newsletter is a glimpse into how your support is sparking purpose, leadership, and hope in youth across the Villupuram district of Tamil Nadu.",
    imageUrl: "/images/newsletters/news17.webp",
    linkUrl:
      "https://us13.campaign-archive.com/?u=877629c188f9de17e6e6b4bc6&id=d01bbf567b",
  },
  {
    id: 16,
    title: "YUVABEAT",
    subtitle: "STEAMing with Possibilities!",
    month: "April",
    year: "2025",
    description:
      "The past two months at YUVABeat were filled with meaningful moments, from igniting young minds to celebrating community spirit. Highlights included the 4th STEAM Fest, where families, students, and educators came together for a day of playful learning and collaboration.",
    imageUrl: "/images/newsletters/steamfest-2025.jpeg",
    linkUrl:
      "https://mailchi.mp/dd3683237f14/steaming-with-possibilities-6747887",
  },
  {
    id: 15,
    title: "YUVABEAT",
    subtitle: "Embracing fresh beginnings!",
    month: "February",
    year: "2025",
    description:
      "As we step into the new year, we’re excited to share the latest updates from our team. From the launch of our latest AI-focused full-stack development Bridge Program to the formation of Yuvabe Studios, there’s much to look forward to this year.",
    imageUrl: "/images/newsletters/news15.jpg",
    linkUrl:
      "https://mailchi.mp/8dc7cf398728/embracing-fresh-beginnings-6746879",
  },
  {
    id: 14,
    title: "YUVABEAT",
    subtitle: "Wishing you a wonderful Thanksgiving!",
    month: "November",
    year: "2024",
    description:
      "Thanksgiving reminds us to reflect on this year of growth, achievements, and the challenges that shaped us; Grateful for a successful Bridge Program, our growing alumni network, and as always the support of our donors!",
    imageUrl: "/images/newsletters/news14.jpg",
    linkUrl:
      "https://mailchi.mp/f1543f4e282e/happy-thanksgiving-from-yuvabe-6745300",
  },
  {
    id: 13,
    title: "YUVABEAT",
    subtitle: "Celebrating 'International Youth Day'",
    month: "September",
    year: "2024",
    description:
      "August marks International Youth Day! We dedicate this issue of YuvaBeat to all our incredible youth who are shaping their own paths and leaving an indelible impact on both themselves and the world.!",
    imageUrl: "/images/newsletters/news13.jpg",
    linkUrl:
      "https://mailchi.mp/82fec867498a/celebrating-international-youth-day-6743897",
  },
  {
    id: 12,
    title: "YUVABEAT",
    subtitle: "Half Year Highlights!",
    month: "July",
    year: "2024",
    description:
      "We now have a brand new AI projects team! This month also marks the completion of our one year commitment to serve in Auroville's community kitchen, followed by a monsoon trip to Munnar!",
    imageUrl: "/images/newsletters/news12.jpg",
    linkUrl:
      "https://mailchi.mp/44151d0a0511/back-to-nature-back-to-life-6742830",
  },
  {
    id: 11,
    title: "YUVABEAT",
    subtitle: "We are gaining S.T.E.A.M!",
    month: "May",
    year: "2024",
    description:
      "This year, we’ve harnessed the potent power of storytelling to enhance the STEAM program! Plus, Bangalore-based STEM organization Playto has been training the full-time STEAM staff in robotics education.",
    imageUrl: "/images/newsletters/news11.jpg",
    linkUrl:
      "https://mailchi.mp/5ead4943b59d/back-to-nature-back-to-life-6733204",
  },
  {
    id: 10,
    title: "YUVABEAT",
    subtitle: "Bridging the Gap",
    month: "March",
    year: "2024",
    description:
      "Introducing Yuvabe Bridge Program! A program to help skill and nurture youth (18-24 yrs), who are in the process of completing their education and looking for employment opportunities",
    imageUrl: "/images/newsletters/news10.jpg",
    linkUrl:
      "https://mailchi.mp/aba66041c1a8/back-to-nature-back-to-life-6719640",
  },
  {
    id: 9,
    title: "YUVABEAT",
    subtitle: "New Year! New Beginnings!",
    month: "January",
    year: "2024",
    description:
      "Yuvabe turns 3! A small team that began the journey 3 years ago today is a family of 50+ young adults and mentors. We extend our gratitude to all those who have been part of this journey",
    imageUrl: "/images/newsletters/news9.jpg",
    linkUrl:
      "https://mailchi.mp/ee2e05089af6/back-to-nature-back-to-life-6687320",
  },
  {
    id: 8,
    title: "STEAM Lab Update",
    subtitle: "Thank you for being part of our journey!",
    month: "December",
    year: "2023",
    description:
      "It's truly heartening to witness the convergence of friendships forged in school, college, and beyond, uniting for a common cause — to support this meaningful project. Your generous gift helps the children across the Auroville Bio-region get access to STEAM education.",
    imageUrl: "/images/newsletters/news8.png",
    linkUrl: "https://mailchi.mp/eded9a2c220b/heres-what-you-helped-us-achieve",
  },
  {
    id: 7,
    title: "YUVABEAT",
    subtitle: "Wishing you a wonderful Thanksgiving!",
    month: "November",
    year: "2023",
    description:
      "As we gear up for the final quarter of 2023, we're filled with gratitude for the incredible journey we've shared together. This Thanksgiving, we want to express our sincere appreciation for your unwavering support, which has been instrumental in all our achievements this year.",
    imageUrl: "/images/newsletters/news7.jpg",
    linkUrl: "https://mailchi.mp/1b393619c84a/thankful-for-you-6648416",
  },
  {
    id: 6,
    title: "YUVABEAT",
    subtitle: "Latest Update from Yuvabe!",
    month: "September",
    year: "2023",
    description:
      "Yuvabe co-founder Sriman Kota met with the team of AVI-USA as well as other friends of Auroville on a recent trip to Boston! It was an excellent occasion to present our ongoing STEAM program and explore fundraising strategies to expand its reach to a broader audience of children in the area!",
    imageUrl: "/images/newsletters/news6.jpg",
    linkUrl:
      "https://mailchi.mp/bd9165189f41/back-to-nature-back-to-life-6667088",
  },
  {
    id: 5,
    title: "YUVABEAT",
    subtitle: "Back to Nature, Back to Life!",
    month: "July",
    year: "2023",
    description:
      "Working in close proximity with nature is one of the biggest gifts of living in Auroville. Our team enjoys the privilege of collaborating with organic food and afforestation projects, as well as relish team outings amidst the enchanting landscapes of the East Coast.",
    imageUrl: "/images/newsletters/news5.jpg",
    linkUrl:
      "https://mailchi.mp/50f62d06cd80/back-to-nature-back-to-life-6657656",
  },
  {
    id: 4,
    title: "YUVABEAT",
    subtitle: "Towards unending education",
    month: "May",
    year: "2023",
    description:
      "For over 50 years , the Auroville ecosystem has been a fertile ground for experiential learning. At Yuvabe too, our continued effort is to work with this spirit of unending education, and learn and evolve as an organization, as individuals, and as a community.",
    imageUrl: "/images/newsletters/news4.jpg",
    linkUrl:
      "https://mailchi.mp/2f9c37453d4c/work-serve-and-evolve-we-do-it-all-6269059",
  },
  {
    id: 3,
    title: "YUVABEAT",
    subtitle: "Setting an Example!",
    month: "March",
    year: "2023",
    description:
      "It was two years ago, when we started our journey with Quilt.AI. After successfully working virtually with their counterparts in the Singapore office for 2 years, our team got an opportunity to realize their dream - an international trip to Singapore!",
    imageUrl: "/images/newsletters/news3.jpg",
    linkUrl:
      "https://mailchi.mp/a7e021a36dd8/work-serve-and-evolve-we-do-it-all-6263695",
  },
  {
    id: 2,
    title: "YUVABEAT",
    subtitle: "Mental Health Awareness - You are Invited!",
    month: "January",
    year: "2023",
    description:
      "At Yuvabe, we always strive to create a space for holistic development of the youth. With this intention, we have an active, ongoing collaboration with Maatram, the primary mental health unit of Auroville. Most recently, our association with Maatram led us to create a street play.",
    imageUrl: "/images/newsletters/news2.jpg",
    linkUrl:
      "https://mailchi.mp/bc5ea91a5a86/work-serve-and-evolve-we-do-it-all-6257655",
  },
  {
    id: 1,
    title: "YUVABEAT",
    subtitle: "OUR YOUTH OUR FUTURE",
    month: "November",
    year: "2022",
    description:
      "The past few years have been a humbling adventure as we shifted from our mainstream corporate lives to live in Auroville, and found ways that come more from our heart space, to engage in this community.",
    imageUrl: "/images/newsletters/news1.jpg",
    linkUrl: "https://mailchi.mp/yuvabe/work-serve-and-evolve-we-do-it-all",
  },
];

const NewsletterBlock = ({ newsletter }: { newsletter: NewsletterItem }) => (
  <motion.div
    initial={{ y: -50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="flex flex-row gap-x-[77px] justify-between min-h-[456px] z-10 flex-wrap lg:flex-nowrap lg:w-[100%] gap-y-8 w-full">
      {/* Left */}
      <motion.div className="flex flex-col rounded-[20px] w-full bg-white xl:w-[34%] md:max-h-[550px] xl:max-h-full justify-center z-10 box-shadow-news">
        <Image
          src={newsletter.imageUrl}
          alt=""
          className="h-full rounded-t-[20px] rounded-tl-[20px] w-full z-10 object-cover"
          width={532.52}
          height={500}
        />
        {/* Title */}
        <div className="flex flex-col gap-x-2 py-6 px-3 items-center md:items-stretch">
          <h2 className="uppercase font-primary font-semibold text-black text-[20px] leading-[25.98px] text-center">
            {newsletter.title}
          </h2>
          <p className="font-secondary font-medium text-black text-[14px] leading-[25.98px] pb-6 text-center">
            {newsletter.subtitle}
          </p>
        </div>
      </motion.div>
      {/* Right */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-y-8 justify-center w-full xl:w-[59%] z-10"
      >
        {/* Date and Content */}
        <div className="flex flex-col gap-y-6 px-3 items-center lg:items-baseline">
          <h3 className="font-primary font-semibold text-black text-[20px] md:text-2xl lg:text-4xl leading-[120%] text-center lg:text-left">
            <span>{newsletter.month}</span>
            &nbsp;
            <span>{newsletter.year}</span>
          </h3>
          <p className="font-secondary font-normal text-black text-[18px] leading-[30px] text-center lg:text-left">
            {newsletter.description}
          </p>
          {/* Read More Button */}
          <Link
            href={newsletter.linkUrl}
            target="_blank"
            className="max-w-[142px]"
          >
            <div className="bg-[#592AC7] py-[18px] px-8 w-[142px] rounded-[15px]">
              <p className="font-primary font-semibold text-white text-[14px] leading-[150%]">
                Read More
              </p>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

export default function Newsletters() {
  return (
    <div>
      {/* Wrapper */}
      <div className="bg-color pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24">
        <div className="max-w-[1028px] flex flex-col m-auto">
          {/* Newsletter */}
          <div className="flex flex-col gap-y-16 px-5">
            <h1 className="text-[#592AC7] text-2xl md:text-6xl leading-[120%] font-semibold text-center font-primary">
              Newsletters
            </h1>
            {/* Individual Newsletter Blocks */}
            <div className="flex flex-col gap-32 relative md:flex-row md:flex-wrap md:justify-between xl:flex-col xl:flex-nowrap">
              {newslettersData.map((newsletter) => (
                <NewsletterBlock key={newsletter.id} newsletter={newsletter} />
              ))}

              <div className="svgs">
                {/* Yellow Crescent */}
                <motion.svg
                  width="343"
                  height="253"
                  viewBox="0 0 343 253"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[-45%] top-[4%] scale-50 xl:scale-100"
                  initial={{ x: -100, opacity: 0 }} // Start hidden
                  whileInView={{ x: 0, opacity: 1 }} // Animate when in view
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <path
                    d="M0.783421 147.486C41.51 237.333 147.361 277.152 237.208 236.425C327.055 195.698 366.876 89.8477 326.149 0.00106972C116.625 94.9742 253.313 33.0157 163.466 73.7426C73.6185 114.469 172.533 69.6367 0.783421 147.486Z"
                    fill="#FFCA2D"
                  />
                </motion.svg>
                {/* Green Square */}
                <motion.svg
                  width="260"
                  height="259"
                  viewBox="0 0 260 259"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-[-5%] top-[10%] scale-50 xl:scale-100"
                  initial={{ x: 100, opacity: 0 }} // Start hidden
                  whileInView={{ x: 0, opacity: 1 }} // Animate when in view
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the element is visible
                >
                  <rect
                    x="100.289"
                    width="187.637"
                    height="187.637"
                    transform="rotate(32.0259 100.289 0)"
                    fill="#91C644"
                  />
                </motion.svg>
                {/* Blue Circle Small */}
                <motion.svg
                  width="102"
                  height="101"
                  viewBox="0 0 102 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-[12%] top-[37%] scale-50 xl:scale-100"
                  initial={{ x: 100, opacity: 0 }} // Start hidden
                  whileInView={{ x: 0, opacity: 1 }} // Animate when in view
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <circle
                    cx="51.1242"
                    cy="50.3429"
                    r="50.3429"
                    fill="#33BED4"
                  />
                </motion.svg>
                {/* Yellow Circle Large */}
                <motion.svg
                  width="404"
                  height="403"
                  viewBox="0 0 404 403"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg "
                  className="absolute left-[-9%] top-[43%] scale-50 xl:scale-100"
                  initial={{ x: -100, opacity: 0 }} // Start hidden
                  whileInView={{ x: 0, opacity: 1 }} // Animate when in view
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <circle cx="202.281" cy="201.5" r="201.5" fill="#FFCA2D" />
                </motion.svg>
                {/* Orange Circle Small */}
                <motion.svg
                  width="212"
                  height="211"
                  viewBox="0 0 212 211"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-[5%] top-[70%] scale-50 xl:scale-100"
                  initial={{ x: 100, opacity: 0 }} // Start hidden
                  whileInView={{ x: 0, opacity: 1 }} // Animate when in view
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <circle cx="106.281" cy="105.5" r="105.5" fill="#F9A91E" />
                </motion.svg>
                {/* Triangle Blue */}
                <motion.svg
                  width="234"
                  height="262"
                  viewBox="0 0 234 262"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-0 left-[-5%] scale-50 xl:scale-100"
                  initial={{ x: -100, opacity: 0 }} // Start hidden
                  whileInView={{ x: 0, opacity: 1 }} // Animate when in view
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <path
                    d="M233.362 0.140296L221.129 261.443L0.950294 120.197L233.362 0.140296Z"
                    fill="#33BED4"
                  />
                </motion.svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
