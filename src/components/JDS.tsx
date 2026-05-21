"use client";
import Link from "next/link";
import { motion } from "framer-motion";
export default function JDS() {
  return (
    <div>
      <main>
        <div className="bg-white">
          <div className="bg-[#FFF9EA] py-16 lg:py-32 md:py-24 relative">
            <div className="max-w-[1028px] flex flex-col m-auto ">
              <div className="flex flex-col gap-y-8 md:gap-y-16 lg:gap-y-32 justify-between px-5 md:px-8 xl:px-0 md:p-8 flex-wrap xl:p-0">
                <motion.h2
                  className="text-black text-4xl md:text-[62px] lg:text-[64px] leading-[120%] font-semibold text-center font-primary z-10"
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Current Openings
                </motion.h2>
                {/* Job Listings */}
                <div className="flex flex-col gap-y-8 md:gap-y-16 lg:gap-y-32">
                  {/* Individual Listings */}

                  {/* Lead Sustainability Educator */}
                  <motion.div
                    className="flex flex-col py-6 px-5 md:py-16 md:px-[74px] max-w-[1028px] bg-white rounded-[50px] gap-y-6 items-center z-10"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-black text-2xl md:text-[40px] leading-[120%] font-semibold text-center font-primary">
                      Lead Sustainability Educator |<span> 2 years + exp</span>
                    </h3>
                    <p className="font-secondary font-normal text-black text-[18px] leading-[30px]  text-center line-clamp-2">
                      We are seeking an experienced Lead Sustainability Educator
                      to join our team in delivering an impactful Corporate
                      Sustainability Course (among others) tailored for young
                      professionals. This role is crucial in shaping the future
                      of sustainability within corporations, empowering
                      participants with the knowledge and skills to address
                      today’s environmental challenges. The ideal candidate will
                      have a solid understanding of climate science, corporate
                      sustainability frameworks, and effective teaching
                    </p>
                    {/* Read More Button */}
                    <Link href="join-us/lead-sustainability-educator">
                      <div className="bg-[#592AC7] py-[18px] px-8 w-[142px] rounded-[15px] mt-2">
                        <p className="font-primary font-semibold text-white text-[14px] leading-[150%]">
                          Read More
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                  {/* Steam Co-ordinator */}
                  <motion.div
                    className="flex flex-col py-6 px-5 md:py-16 md:px-[74px] max-w-[1028px] bg-white rounded-[50px] gap-y-6 items-center z-10"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-black text-2xl md:text-[40px] leading-[120%] font-semibold text-center font-primary">
                      STEAM Co-ordinator |<span> 1-2 years exp</span>
                    </h3>
                    <p className="font-secondary font-normal text-black text-[18px] leading-[30px]  text-center line-clamp-2">
                      Looking for a STEAM (Science, Technology, Engineering, Art
                      and Math) Program Coordinator to join the expanding team
                      at Yuvabe Education, dedicated to providing STEAM Programs
                      to schools in Auroville and the Bio-region.
                    </p>
                    {/* Read More Button */}
                    <Link href="join-us/steam-co-ordinator">
                      <div className="bg-[#592AC7] py-[18px] px-8 w-[142px] rounded-[15px] mt-2">
                        <p className="font-primary font-semibold text-white text-[14px] leading-[150%]">
                          Read More
                        </p>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Lead Facilitator – 3D Design & Printing */}
                  {/*      <motion.div
                    className="flex flex-col py-6 px-5 md:py-16 md:px-[74px] max-w-[1028px] bg-white rounded-[50px] gap-y-6 items-center z-10"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-black text-2xl md:text-[40px] leading-[120%] font-semibold text-center font-primary max-w-162.5">
                      Lead Facilitator - 3D Design & Printing |
                      <span> 2-3 years exp</span>
                    </h3>
                    <p className="font-secondary font-normal text-black text-[18px] leading-[30px]  text-center line-clamp-2">
                      We&apos;re looking for a creative and hands-on 3D-design
                      professional who loves to teach. As{" "}
                      <strong>Lead Facilitator – 3D Design & Printing</strong> ,
                      you will guide a diverse group of learners through the
                      processes of modelling, printing, post-processing, and
                      presenting physical prototypes. This is a full-time,
                      on-site role where you&apos;ll lead workshops, mentor
                      student projects, and help build strong maker-portfolios.
                      If you believe 3D printing is more than tech—it&apos;s an
                      empowerment tool—this role is for you.
                    </p>
                    /~ Read More Button ~/
                    <Link href="join-us/lead-facilitator-3d-design-printing">
                      <div className="bg-[#592AC7] py-[18px] px-8 w-[142px] rounded-[15px] mt-2">
                        <p className="font-primary font-semibold text-white text-[14px] leading-[150%]">
                          Read More
                        </p>
                      </div>
                    </Link>
                  </motion.div>*/}

                  {/* AI Full Stack Development */}
                  {/*   <motion.div
                    className="flex flex-col py-6 px-5 md:py-16 md:px-[74px] max-w-[1028px] bg-white rounded-[50px] gap-y-6 items-center z-10"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-black text-2xl md:text-[40px] leading-[120%] font-semibold text-center font-primary max-w-162.5">
                      Lead Facilitator - AI Full Stack |
                      <span> 2-3 years exp</span>
                    </h3>
                    <p className="font-secondary font-normal text-black text-[18px] leading-[30px]  text-center line-clamp-2">
                      We&apos;re looking for a passionate developer-educator who
                      thrives at the intersection of full-stack web development
                      and AI/ML. As{" "}
                      <strong>
                        Lead Facilitator – AI Full Stack Development
                      </strong>
                      , you will guide young learners through designing,
                      building and deploying intelligent web applications. This
                      is a full-time, on-site role where you&apos;ll lead
                      live-coding sessions, mentor capstone development
                      projects, and help students build portfolio-ready
                      AI-driven apps. If you believe coding and AI can unlock
                      potential and purpose—this role is for you.{" "}
                    </p>
                    /~ Read More Button ~/
                    <Link href="join-us/lead-facilitator-ai-full-stack-development">
                      <div className="bg-[#592AC7] py-[18px] px-8 w-[142px] rounded-[15px] mt-2">
                        <p className="font-primary font-semibold text-white text-[14px] leading-[150%]">
                          Read More
                        </p>
                      </div>
                    </Link>
                  </motion.div>*/}

                  {/* Lead UI/UX Design Educator */}
                  {/*      <motion.div
                    className="flex flex-col py-6 px-5 md:py-16 md:px-[74px] max-w-[1028px] bg-white rounded-[50px] gap-y-6 items-center z-10"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-black text-2xl md:text-[40px] leading-[120%] font-semibold text-center font-primary">
                      Lead UI/UX Design Educator |<span> 2 years + exp</span>
                    </h3>
                    <p className="font-secondary font-normal text-black text-[18px] leading-[30px]  text-center line-clamp-2">
                      We’re looking for a passionate UI/UX designer who loves to
                      teach. As a Lead Facilitator, you’ll guide a group of
                      curious, motivated young learners through the world of
                      user experience and interface design.
                    </p>
                    /~ Read More Button ~/
                    <Link href="join-us/lead-ui-ux-design-educator">
                      <div className="bg-[#592AC7] py-[18px] px-8 w-[142px] rounded-[15px] mt-2">
                        <p className="font-primary font-semibold text-white text-[14px] leading-[150%]">
                          Read More
                        </p>
                      </div>
                    </Link>
                  </motion.div>*/}

                  {/* Sustainability Analyst */}
                  {/*        <motion.div
                    className="flex flex-col py-6 px-5 md:py-16 md:px-[74px] max-w-[1028px] bg-white rounded-[50px] gap-y-6 items-center z-10"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-black text-2xl md:text-[40px] leading-[120%] font-semibold text-center font-primary">
                      Sustainability Analyst |<span> 1-3 years exp</span>
                    </h3>
                    <p className="font-secondary font-normal text-black text-[18px] leading-[30px]  text-center line-clamp-2">
                      The Sustainability Analyst role combines the unique and
                      forward-looking spirit of Auroville with robust science
                      and research in the areas of sustainability and social
                      impact. It leverages on a whole gamut of impactful
                      projects and units within Auroville and tailors the
                      experience to match the needs and aspirations of
                      prospective analysts.
                    </p>
                    /~ Read More Button ~/
                    <Link href="join-us/sustainability-analyst">
                      <div className="bg-[#592AC7] py-[18px] px-8 w-[142px] rounded-[15px] mt-2">
                        <p className="font-primary font-semibold text-white text-[14px] leading-[150%]">
                          Read More
                        </p>
                      </div>
                    </Link>
                  </motion.div>*/}
                  {/* Marketing Analyst*/}
                  {/*    <motion.div
                    className="flex flex-col py-6 px-5 md:py-16 md:px-[74px] max-w-[1028px] bg-white rounded-[50px] gap-y-6 items-center z-10"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-black text-2xl md:text-[40px] leading-[120%] font-semibold text-center font-primary">
                      Marketing Analyst |<span> 1-2 years exp</span>
                    </h3>
                    <p className="font-secondary font-normal text-black text-[18px] leading-[30px]  text-center line-clamp-2">
                      We are looking for a marketing analyst to join our growing
                      team at Yuvabe, which offers digital services like
                      marketing, ERP, design, and business solutions. The ideal
                      candidate will have a strong understanding of marketing
                      principles and analytics, as well as experience working
                      with social media platforms.
                    </p>
                    /~ Read More Button ~/
                    <Link href="join-us/marketing-analyst">
                      <div className="bg-[#592AC7] py-[18px] px-8 w-[142px] rounded-[15px] mt-2">
                        <p className="font-primary font-semibold text-white text-[14px] leading-[150%]">
                          Read More
                        </p>
                      </div>
                    </Link>
                  </motion.div>*/}
                </div>
              </div>
            </div>
            <div className="svgs">
              {/* Yellow Crescent */}
              <motion.svg
                width="343"
                height="253"
                viewBox="0 0 343 253"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[0.2%] top-[2%] scale-50 xl:scale-100"
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
                className="absolute right-[0.2%] top-[14%] scale-50 xl:scale-100"
                initial={{ x: 100, opacity: 0 }} // Start hidden
                whileInView={{ x: 0, opacity: 1 }} // Animate when in view
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <rect
                  x="100.289"
                  width="187.637"
                  height="187.637"
                  transform="rotate(32.0259 100.289 0)"
                  fill="#91C644"
                />
              </motion.svg>
              {/* Yellow Circle Large */}
              <motion.svg
                width="404"
                height="403"
                viewBox="0 0 404 403"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[12%] top-[45%] scale-50 xl:scale-100"
                initial={{ x: -100, opacity: 0 }} // Start hidden
                whileInView={{ x: 0, opacity: 1 }} // Animate when in view
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <circle cx="202.281" cy="201.5" r="201.5" fill="#FFCA2D" />
              </motion.svg>
              {/* Triangle Blue */}
              <motion.svg
                width="251"
                height="256"
                viewBox="0 0 251 256"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[5%] right-[15%] scale-50 xl:scale-100"
                initial={{ x: 100, opacity: 0 }} // Start hidden
                whileInView={{ x: 0, opacity: 1 }} // Animate when in view
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <path
                  d="M250.547 0.865651L192.006 255.82L0.479068 77.6452L250.547 0.865651Z"
                  fill="#33BED4"
                />
              </motion.svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
