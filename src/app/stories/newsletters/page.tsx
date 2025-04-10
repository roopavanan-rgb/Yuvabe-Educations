"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GET_NEWS } from "src/lib/graphqlRequest";
import Image from "next/image"; // Import the Next.js Image component
import Link from "next/link"; // Import the Next.js Link component
interface NewsletterData {
  groupforNews: {
    content: string;
    link: {
      url: string;
    };
    month: string;
    year: string;
    date: string;
    heading: string;
    subHeading: string;
  };
  featuredImage?: {
    node: {
      altText: string;
      sourceUrl: string;
    };
  };
}

interface NewsletterNode {
  nodes: NewsletterData[];
}

interface NewsletterResponse {
  data: {
    newsletters: NewsletterNode;
  };
}

const Newsletters: React.FC = () => {
  const [newsletters, setNewsletters] = useState<NewsletterData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const GET_ALL_NEWS = GET_NEWS;

  useEffect(() => {
    const fetchNewsletters = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://yuvabeeducation.com/wordpress/graphql",
          {
            // Replace with your GraphQL endpoint
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ query: GET_ALL_NEWS })
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: NewsletterResponse = await response.json();

        if (data.data && data.data.newsletters && data.data.newsletters.nodes) {
          const sortedNewsletters = data.data.newsletters.nodes.sort((a, b) => {
            const dateA = new Date(a.groupforNews.date);
            const dateB = new Date(b.groupforNews.date);
            return dateB.getTime() - dateA.getTime(); // Sort descending (newest first)
          });

          setNewsletters(sortedNewsletters);
        } else {
          setError("No newsletters found.");
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch newsletters.");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsletters();
  }, [GET_ALL_NEWS]);

  if (loading) {
    return <div>Loading newsletters...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {/* Wrapper */}
      <div className="bg-color  pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24">
        <div className="max-w-[1028px] flex flex-col m-auto">
          {/* Newsletter */}
          <div className=" flex flex-col gap-y-16 px-5">
            <h1 className="text-[#592AC7] text-2xl md:text-6xl leading-[120%] font-semibold text-center font-primary">
              Newsletters
            </h1>
            {/* Individual Newsletter Blocks */}
            <div className="flex flex-col gap-32 relative  md:flex-row md:flex-wrap md:justify-between xl:flex-col xl:flex-nowrap">
              {newsletters.map((newsletter, index) => (
                <motion.div
                  key={index}
                  initial={{ y: -50, opacity: 0 }} // Slide down animation
                  whileInView={{ y: 0, opacity: 1 }} // Appears when in view
                  transition={{ duration: 0.8, ease: "easeOut" }} // Staggered effect
                  viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
                >
                  <div className="flex flex-row gap-x-[77px] justify-between min-h-[456px] z-10 flex-wrap xl:flex-nowrap lg:w-[100%] gap-y-4 w-full">
                    {/* Left */}
                    <motion.div className="flex flex-col  rounded-[20px] w-full  bg-white xl:w-[34%] md:max-h-[400px] xl:max-h-full justify-center z-10">
                      {newsletter.featuredImage &&
                        newsletter.featuredImage.node && (
                          <img
                            src={newsletter.featuredImage.node.sourceUrl}
                            alt={newsletter.featuredImage.node.altText}
                            className="h-full rounded-t-[20px] rounded-tl-[20px] w-full z-10 object-cover"
                            width={347}
                            height={326}
                          />
                        )}
                      {/* Title */}
                      <div className="flex flex-col gap-x-2  py-6 px-3">
                        <h2 className="uppercase font-primary font-semibold text-black text-[20px] leading-[25.98px] xl:text-center">
                          {newsletter.groupforNews.heading}
                        </h2>
                        <p className="font-secondary font-medium text-black text-[14px] leading-[25.98px] pb-6 xl:text-center">
                          {newsletter.groupforNews.subHeading}
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
                      <div className="flex flex-col gap-y-6 px-3    ">
                        <h3 className="font-primary font-semibold text-black text-4xl leading-[120%]">
                          <span>{newsletter.groupforNews.month}</span>
                          &nbsp;
                          <span>{newsletter.groupforNews.year}</span>
                        </h3>
                        <p className="font-secondary font-normal text-black text-[18px] leading-[30px]">
                          {newsletter.groupforNews.content}
                        </p>
                        {/* Read More Button */}
                        <Link
                          href={newsletter.groupforNews.link.url}
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
                ;{/* Blue Circle Small */}
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
          <div />
        </div>
      </div>
    </div>
  );
};

export default Newsletters;
