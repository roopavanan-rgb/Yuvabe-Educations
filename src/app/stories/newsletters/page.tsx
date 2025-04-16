"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GET_NEWS } from "src/lib/graphqlRequest";
import Image from "next/image"; // Import the Next.js Image component
import Link from "next/link"; // Import the Next.js Link component
export default function Newsletters() {
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
              {/* Newsletter 15 */}
              <motion.div
                initial={{ y: -50, opacity: 0 }} // Slide down animation
                whileInView={{ y: 0, opacity: 1 }} // Appears when in view
                transition={{ duration: 0.8, ease: "easeOut" }} // Staggered effect
                viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
              >
                <div className="flex flex-row gap-x-[77px] justify-between min-h-[456px] z-10 flex-wrap xl:flex-nowrap lg:w-[100%] gap-y-8 w-full">
                  {/* Left */}
                  <motion.div className="flex flex-col  rounded-[20px] w-full  bg-white xl:w-[34%] md:max-h-[600px] xl:max-h-full justify-center z-10 box-shadow-news">
                    <img
                      src="..\images\newsletters\news15.jpg"
                      alt=""
                      className="h-full rounded-t-[20px] rounded-tl-[20px] w-full z-10 object-cover"
                      width={347}
                      height={326}
                    />

                    {/* Title */}
                    <div className="flex flex-col gap-x-2  py-6 px-3">
                      <h2 className="uppercase font-primary font-semibold text-black text-[20px] leading-[25.98px] xl:text-center">
                        YUVABEAT
                      </h2>
                      <p className="font-secondary font-medium text-black text-[14px] leading-[25.98px] pb-6 xl:text-center">
                        Embracing fresh beginnings!
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
                      <h3 className="font-primary font-semibold text-black text-[20px] md:text-2xl lg:text-4xl leading-[120%]">
                        <span>February</span>
                        &nbsp;
                        <span>2025</span>
                      </h3>
                      <p className="font-secondary font-normal text-black text-[18px] leading-[30px]">
                        As we step into the new year, we’re excited to share the
                        latest updates from our team. From the launch of our
                        latest AI-focused full-stack development Bridge Program
                        to the formation of Yuvabe Studios, there’s much to look
                        forward to this year.
                      </p>
                      {/* Read More Button */}
                      <Link
                        href="https://mailchi.mp/8dc7cf398728/embracing-fresh-beginnings-6746879"
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
              {/* Newsletter 14 */}
              <motion.div
                initial={{ y: -50, opacity: 0 }} // Slide down animation
                whileInView={{ y: 0, opacity: 1 }} // Appears when in view
                transition={{ duration: 0.8, ease: "easeOut" }} // Staggered effect
                viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
              >
                <div className="flex flex-row gap-x-[77px] justify-between min-h-[456px] z-10 flex-wrap xl:flex-nowrap lg:w-[100%] gap-y-8 w-full">
                  {/* Left */}
                  <motion.div className="flex flex-col  rounded-[20px] w-full  bg-white xl:w-[34%] md:max-h-[600px] xl:max-h-full justify-center z-10 box-shadow-news">
                    <img
                      src="..\images\newsletters\news14.jpg"
                      alt=""
                      className="h-full rounded-t-[20px] rounded-tl-[20px] w-full z-10 object-cover"
                      width={347}
                      height={326}
                    />

                    {/* Title */}
                    <div className="flex flex-col gap-x-2  py-6 px-3">
                      <h2 className="uppercase font-primary font-semibold text-black text-[20px] leading-[25.98px] xl:text-center">
                        YUVABEAT
                      </h2>
                      <p className="font-secondary font-medium text-black text-[14px] leading-[25.98px] pb-6 xl:text-center">
                        Wishing you a wonderful Thanksgiving!
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
                      <h3 className="font-primary font-semibold text-black text-[20px] md:text-2xl lg:text-4xl leading-[120%]">
                        <span>November</span>
                        &nbsp;
                        <span>2024</span>
                      </h3>
                      <p className="font-secondary font-normal text-black text-[18px] leading-[30px]">
                        Thanksgiving reminds us to reflect on this year of
                        growth, achievements, and the challenges that shaped us;
                        Grateful for a successful Bridge Program, our growing
                        alumni network, and as always the support of our donors!
                      </p>
                      {/* Read More Button */}
                      <Link
                        href="https://mailchi.mp/f1543f4e282e/happy-thanksgiving-from-yuvabe-6745300"
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
              {/* Newsletter 13 */}
              <motion.div
                initial={{ y: -50, opacity: 0 }} // Slide down animation
                whileInView={{ y: 0, opacity: 1 }} // Appears when in view
                transition={{ duration: 0.8, ease: "easeOut" }} // Staggered effect
                viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
              >
                <div className="flex flex-row gap-x-[77px] justify-between min-h-[456px] z-10 flex-wrap xl:flex-nowrap lg:w-[100%] gap-y-8 w-full">
                  {/* Left */}
                  <motion.div className="flex flex-col  rounded-[20px] w-full  bg-white xl:w-[34%] md:max-h-[600px] xl:max-h-full justify-center z-10 box-shadow-news">
                    <img
                      src="..\images\newsletters\news13.jpg"
                      alt=""
                      className="h-full rounded-t-[20px] rounded-tl-[20px] w-full z-10 object-cover"
                      width={347}
                      height={326}
                    />

                    {/* Title */}
                    <div className="flex flex-col gap-x-2  py-6 px-3">
                      <h2 className="uppercase font-primary font-semibold text-black text-[20px] leading-[25.98px] xl:text-center">
                        YUVABEAT
                      </h2>
                      <p className="font-secondary font-medium text-black text-[14px] leading-[25.98px] pb-6 xl:text-center">
                        Celebrating 'International Youth Day'
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
                      <h3 className="font-primary font-semibold text-black text-[20px] md:text-2xl lg:text-4xl leading-[120%]">
                        <span>September</span>
                        &nbsp;
                        <span>2024</span>
                      </h3>
                      <p className="font-secondary font-normal text-black text-[18px] leading-[30px]">
                        August marks International Youth Day! We dedicate this
                        issue of YuvaBeat to all our incredible youth who are
                        shaping their own paths and leaving an indelible impact
                        on both themselves and the world.!
                      </p>
                      {/* Read More Button */}
                      <Link
                        href="https://mailchi.mp/82fec867498a/celebrating-international-youth-day-6743897"
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
              {/* Newsletter 12 */}
              <motion.div
                initial={{ y: -50, opacity: 0 }} // Slide down animation
                whileInView={{ y: 0, opacity: 1 }} // Appears when in view
                transition={{ duration: 0.8, ease: "easeOut" }} // Staggered effect
                viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
              >
                <div className="flex flex-row gap-x-[77px] justify-between min-h-[456px] z-10 flex-wrap xl:flex-nowrap lg:w-[100%] gap-y-8 w-full">
                  {/* Left */}
                  <motion.div className="flex flex-col  rounded-[20px] w-full  bg-white xl:w-[34%] md:max-h-[600px] xl:max-h-full justify-center z-10 box-shadow-news">
                    <img
                      src="..\images\newsletters\news12.jpg"
                      alt=""
                      className="h-full rounded-t-[20px] rounded-tl-[20px] w-full z-10 object-cover"
                      width={347}
                      height={326}
                    />

                    {/* Title */}
                    <div className="flex flex-col gap-x-2  py-6 px-3">
                      <h2 className="uppercase font-primary font-semibold text-black text-[20px] leading-[25.98px] xl:text-center">
                        YUVABEAT
                      </h2>
                      <p className="font-secondary font-medium text-black text-[14px] leading-[25.98px] pb-6 xl:text-center">
                        Half Year Highlights!
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
                      <h3 className="font-primary font-semibold text-black text-[20px] md:text-2xl lg:text-4xl leading-[120%]">
                        <span>July</span>
                        &nbsp;
                        <span>2024</span>
                      </h3>
                      <p className="font-secondary font-normal text-black text-[18px] leading-[30px]">
                        We now have a brand new AI projects team! This month
                        also marks the completion of our one year commitment to
                        serve in Auroville's community kitchen, followed by a
                        monsoon trip to Munnar!
                      </p>
                      {/* Read More Button */}
                      <Link
                        href="https://mailchi.mp/44151d0a0511/back-to-nature-back-to-life-6742830"
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
              {/* Newsletter 11 */}
              <motion.div
                initial={{ y: -50, opacity: 0 }} // Slide down animation
                whileInView={{ y: 0, opacity: 1 }} // Appears when in view
                transition={{ duration: 0.8, ease: "easeOut" }} // Staggered effect
                viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
              >
                <div className="flex flex-row gap-x-[77px] justify-between min-h-[456px] z-10 flex-wrap xl:flex-nowrap lg:w-[100%] gap-y-8 w-full">
                  {/* Left */}
                  <motion.div className="flex flex-col  rounded-[20px] w-full  bg-white xl:w-[34%] md:max-h-[600px] xl:max-h-full justify-center z-10 box-shadow-news">
                    <img
                      src="..\images\newsletters\news11.jpg"
                      alt=""
                      className="h-full rounded-t-[20px] rounded-tl-[20px] w-full z-10 object-cover"
                      width={347}
                      height={326}
                    />

                    {/* Title */}
                    <div className="flex flex-col gap-x-2  py-6 px-3">
                      <h2 className="uppercase font-primary font-semibold text-black text-[20px] leading-[25.98px] xl:text-center">
                        YUVABEAT
                      </h2>
                      <p className="font-secondary font-medium text-black text-[14px] leading-[25.98px] pb-6 xl:text-center">
                        We are gaining S.T.E.A.M!{" "}
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
                      <h3 className="font-primary font-semibold text-black text-[20px] md:text-2xl lg:text-4xl leading-[120%]">
                        <span>May</span>
                        &nbsp;
                        <span>2024</span>
                      </h3>
                      <p className="font-secondary font-normal text-black text-[18px] leading-[30px]">
                        This year, we’ve harnessed the potent power of
                        storytelling to enhance the STEAM program! Plus,
                        Bangalore-based STEM organization Playto has been
                        training the full-time STEAM staff in robotics
                        education.
                      </p>
                      {/* Read More Button */}
                      <Link
                        href="https://mailchi.mp/5ead4943b59d/back-to-nature-back-to-life-6733204"
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
              {/* Newsletter 10 */}
              <motion.div
                initial={{ y: -50, opacity: 0 }} // Slide down animation
                whileInView={{ y: 0, opacity: 1 }} // Appears when in view
                transition={{ duration: 0.8, ease: "easeOut" }} // Staggered effect
                viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
              >
                <div className="flex flex-row gap-x-[77px] justify-between min-h-[456px] z-10 flex-wrap xl:flex-nowrap lg:w-[100%] gap-y-8 w-full">
                  {/* Left */}
                  <motion.div className="flex flex-col  rounded-[20px] w-full  bg-white xl:w-[34%] md:max-h-[600px] xl:max-h-full justify-center z-10 box-shadow-news">
                    <img
                      src="..\images\newsletters\news10.jpg"
                      alt=""
                      className="h-full rounded-t-[20px] rounded-tl-[20px] w-full z-10 object-cover"
                      width={347}
                      height={326}
                    />

                    {/* Title */}
                    <div className="flex flex-col gap-x-2  py-6 px-3">
                      <h2 className="uppercase font-primary font-semibold text-black text-[20px] leading-[25.98px] xl:text-center">
                        YUVABEAT
                      </h2>
                      <p className="font-secondary font-medium text-black text-[14px] leading-[25.98px] pb-6 xl:text-center">
                        Bridging the Gap
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
                      <h3 className="font-primary font-semibold text-black text-[20px] md:text-2xl lg:text-4xl leading-[120%]">
                        <span>March</span>
                        &nbsp;
                        <span>2024</span>
                      </h3>
                      <p className="font-secondary font-normal text-black text-[18px] leading-[30px]">
                        Introducing Yuvabe Bridge Program! A program to help
                        skill and nurture youth (18-24 yrs), who are in the
                        process of completing their education and looking for
                        employment opportunities
                      </p>
                      {/* Read More Button */}
                      <Link
                        href="https://mailchi.mp/aba66041c1a8/back-to-nature-back-to-life-6719640"
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
              {/* Newsletter 9 */}
              <motion.div
                initial={{ y: -50, opacity: 0 }} // Slide down animation
                whileInView={{ y: 0, opacity: 1 }} // Appears when in view
                transition={{ duration: 0.8, ease: "easeOut" }} // Staggered effect
                viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
              >
                <div className="flex flex-row gap-x-[77px] justify-between min-h-[456px] z-10 flex-wrap xl:flex-nowrap lg:w-[100%] gap-y-8 w-full">
                  {/* Left */}
                  <motion.div className="flex flex-col  rounded-[20px] w-full  bg-white xl:w-[34%] md:max-h-[600px] xl:max-h-full justify-center z-10 box-shadow-news">
                    <img
                      src="..\images\newsletters\news9.jpg"
                      alt=""
                      className="h-full rounded-t-[20px] rounded-tl-[20px] w-full z-10 object-cover"
                      width={347}
                      height={326}
                    />

                    {/* Title */}
                    <div className="flex flex-col gap-x-2  py-6 px-3">
                      <h2 className="uppercase font-primary font-semibold text-black text-[20px] leading-[25.98px] xl:text-center">
                        YUVABEAT
                      </h2>
                      <p className="font-secondary font-medium text-black text-[14px] leading-[25.98px] pb-6 xl:text-center">
                        New Year! New Beginnings!
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
                      <h3 className="font-primary font-semibold text-black text-[20px] md:text-2xl lg:text-4xl leading-[120%]">
                        <span>January</span>
                        &nbsp;
                        <span>2024</span>
                      </h3>
                      <p className="font-secondary font-normal text-black text-[18px] leading-[30px]">
                        Yuvabe turns 3! A small team that began the journey 3
                        years ago today is a family of 50+ young adults and
                        mentors. We extend our gratitude to all those who have
                        been part of this journey
                      </p>
                      {/* Read More Button */}
                      <Link
                        href="https://mailchi.mp/ee2e05089af6/back-to-nature-back-to-life-6687320"
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
              {/* Newsletter 8 */}
              <motion.div
                initial={{ y: -50, opacity: 0 }} // Slide down animation
                whileInView={{ y: 0, opacity: 1 }} // Appears when in view
                transition={{ duration: 0.8, ease: "easeOut" }} // Staggered effect
                viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
              >
                <div className="flex flex-row gap-x-[77px] justify-between min-h-[456px] z-10 flex-wrap xl:flex-nowrap lg:w-[100%] gap-y-8 w-full">
                  {/* Left */}
                  <motion.div className="flex flex-col  rounded-[20px] w-full  bg-white xl:w-[34%] md:max-h-[600px] xl:max-h-full justify-center z-10 box-shadow-news">
                    <img
                      src="..\images\newsletters\news8.png"
                      alt=""
                      className="h-full rounded-t-[20px] rounded-tl-[20px] w-full z-10 object-cover"
                      width={347}
                      height={326}
                    />

                    {/* Title */}
                    <div className="flex flex-col gap-x-2  py-6 px-3">
                      <h2 className="uppercase font-primary font-semibold text-black text-[20px] leading-[25.98px] xl:text-center">
                        STEAM Lab Update
                      </h2>
                      <p className="font-secondary font-medium text-black text-[14px] leading-[25.98px] pb-6 xl:text-center">
                        Thank you for being part of our journey!
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
                      <h3 className="font-primary font-semibold text-black text-[20px] md:text-2xl lg:text-4xl leading-[120%]">
                        <span>December</span>
                        &nbsp;
                        <span>2023</span>
                      </h3>
                      <p className="font-secondary font-normal text-black text-[18px] leading-[30px]">
                        It's truly heartening to witness the convergence of
                        friendships forged in school, college, and beyond,
                        uniting for a common cause — to support this meaningful
                        project. Your generous gift helps the children across
                        the Auroville Bio-region get access to STEAM education.
                      </p>
                      {/* Read More Button */}
                      <Link
                        href="https://mailchi.mp/eded9a2c220b/heres-what-you-helped-us-achieve"
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
              {/* Newsletter 7 */}
              <motion.div
                initial={{ y: -50, opacity: 0 }} // Slide down animation
                whileInView={{ y: 0, opacity: 1 }} // Appears when in view
                transition={{ duration: 0.8, ease: "easeOut" }} // Staggered effect
                viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
              >
                <div className="flex flex-row gap-x-[77px] justify-between min-h-[456px] z-10 flex-wrap xl:flex-nowrap lg:w-[100%] gap-y-8 w-full">
                  {/* Left */}
                  <motion.div className="flex flex-col  rounded-[20px] w-full  bg-white xl:w-[34%] md:max-h-[600px] xl:max-h-full justify-center z-10 box-shadow-news">
                    <img
                      src="..\images\newsletters\news7.jpg"
                      alt=""
                      className="h-full rounded-t-[20px] rounded-tl-[20px] w-full z-10 object-cover"
                      width={347}
                      height={326}
                    />

                    {/* Title */}
                    <div className="flex flex-col gap-x-2  py-6 px-3">
                      <h2 className="uppercase font-primary font-semibold text-black text-[20px] leading-[25.98px] xl:text-center">
                        YUVABEAT
                      </h2>
                      <p className="font-secondary font-medium text-black text-[14px] leading-[25.98px] pb-6 xl:text-center">
                        Wishing you a wonderful Thanksgiving!
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
                      <h3 className="font-primary font-semibold text-black text-[20px] md:text-2xl lg:text-4xl leading-[120%]">
                        <span>November</span>
                        &nbsp;
                        <span>2023</span>
                      </h3>
                      <p className="font-secondary font-normal text-black text-[18px] leading-[30px]">
                        In this Thanksgiving edition of Yuvabeat, we want to
                        express how incredibly grateful we are for the work
                        opportunities that have come our way this year. Each
                        project, client, and collaboration has enriched our
                        professional journeys, allowing us to grow and learn.
                      </p>
                      {/* Read More Button */}
                      <Link
                        href="https://mailchi.mp/57834145d09d/happy-thanksgiving-from-yuvabe"
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
              {/* Newsletter 6 */}
              <motion.div
                initial={{ y: -50, opacity: 0 }} // Slide down animation
                whileInView={{ y: 0, opacity: 1 }} // Appears when in view
                transition={{ duration: 0.8, ease: "easeOut" }} // Staggered effect
                viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
              >
                <div className="flex flex-row gap-x-[77px] justify-between min-h-[456px] z-10 flex-wrap xl:flex-nowrap lg:w-[100%] gap-y-8 w-full">
                  {/* Left */}
                  <motion.div className="flex flex-col  rounded-[20px] w-full  bg-white xl:w-[34%] md:max-h-[600px] xl:max-h-full justify-center z-10 box-shadow-news">
                    <img
                      src="..\images\newsletters\news6.jpg"
                      alt=""
                      className="h-full rounded-t-[20px] rounded-tl-[20px] w-full z-10 object-cover"
                      width={347}
                      height={326}
                    />

                    {/* Title */}
                    <div className="flex flex-col gap-x-2  py-6 px-3">
                      <h2 className="uppercase font-primary font-semibold text-black text-[20px] leading-[25.98px] xl:text-center">
                        YUVABEAT
                      </h2>
                      <p className="font-secondary font-medium text-black text-[14px] leading-[25.98px] pb-6 xl:text-center">
                        Latest Update from Yuvabe!
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
                      <h3 className="font-primary font-semibold text-black text-[20px] md:text-2xl lg:text-4xl leading-[120%]">
                        <span>September</span>
                        &nbsp;
                        <span>2023</span>
                      </h3>
                      <p className="font-secondary font-normal text-black text-[18px] leading-[30px]">
                        Yuvabe co-founder Sriman Kota met with the team of
                        AVI-USA as well as other friends of Auroville on a
                        recent trip to Boston! It was an excellent occasion to
                        present our ongoing STEAM program and explore
                        fundraising strategies to expand its reach to a broader
                        audience of children in the area!
                      </p>
                      {/* Read More Button */}
                      <Link
                        href="https://mailchi.mp/bd9165189f41/back-to-nature-back-to-life-6667088"
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
              {/* Newsletter 5 */}

              <motion.div
                initial={{ y: -50, opacity: 0 }} // Slide down animation
                whileInView={{ y: 0, opacity: 1 }} // Appears when in view
                transition={{ duration: 0.8, ease: "easeOut" }} // Staggered effect
                viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
              >
                <div className="flex flex-row gap-x-[77px] justify-between min-h-[456px] z-10 flex-wrap xl:flex-nowrap lg:w-[100%] gap-y-8 w-full">
                  {/* Left */}
                  <motion.div className="flex flex-col  rounded-[20px] w-full  bg-white xl:w-[34%] md:max-h-[600px] xl:max-h-full justify-center z-10 box-shadow-news">
                    <img
                      src="..\images\newsletters\news5.jpg"
                      alt=""
                      className="h-full rounded-t-[20px] rounded-tl-[20px] w-full z-10 object-cover"
                      width={347}
                      height={326}
                    />

                    {/* Title */}
                    <div className="flex flex-col gap-x-2  py-6 px-3">
                      <h2 className="uppercase font-primary font-semibold text-black text-[20px] leading-[25.98px] xl:text-center">
                        YUVABEAT
                      </h2>
                      <p className="font-secondary font-medium text-black text-[14px] leading-[25.98px] pb-6 xl:text-center">
                        Back to Nature, Back to Life!
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
                      <h3 className="font-primary font-semibold text-black text-[20px] md:text-2xl lg:text-4xl leading-[120%]">
                        <span>July</span>
                        &nbsp;
                        <span>2023</span>
                      </h3>
                      <p className="font-secondary font-normal text-black text-[18px] leading-[30px]">
                        Working in close proximity with nature is one of the
                        biggest gifts of living in Auroville. Our team enjoys
                        the privilege of collaborating with organic food and
                        afforestation projects, as well as relish team outings
                        amidst the enchanting landscapes of the East Coast.
                      </p>
                      {/* Read More Button */}
                      <Link
                        href="https://mailchi.mp/50f62d06cd80/back-to-nature-back-to-life-6657656"
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

              {/* Newsletter 4 */}
              <motion.div
                initial={{ y: -50, opacity: 0 }} // Slide down animation
                whileInView={{ y: 0, opacity: 1 }} // Appears when in view
                transition={{ duration: 0.8, ease: "easeOut" }} // Staggered effect
                viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
              >
                <div className="flex flex-row gap-x-[77px] justify-between min-h-[456px] z-10 flex-wrap xl:flex-nowrap lg:w-[100%] gap-y-8 w-full">
                  {/* Left */}
                  <motion.div className="flex flex-col  rounded-[20px] w-full  bg-white xl:w-[34%] md:max-h-[600px] xl:max-h-full justify-center z-10 box-shadow-news">
                    <img
                      src="..\images\newsletters\news4.jpg"
                      alt=""
                      className="h-full rounded-t-[20px] rounded-tl-[20px] w-full z-10 object-cover"
                      width={347}
                      height={326}
                    />

                    {/* Title */}
                    <div className="flex flex-col gap-x-2  py-6 px-3">
                      <h2 className="uppercase font-primary font-semibold text-black text-[20px] leading-[25.98px] xl:text-center">
                        YUVABEAT
                      </h2>
                      <p className="font-secondary font-medium text-black text-[14px] leading-[25.98px] pb-6 xl:text-center">
                        Towards unending education
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
                      <h3 className="font-primary font-semibold text-black text-[20px] md:text-2xl lg:text-4xl leading-[120%]">
                        <span>May</span>
                        &nbsp;
                        <span>2023</span>
                      </h3>
                      <p className="font-secondary font-normal text-black text-[18px] leading-[30px]">
                        For over 50 years , the Auroville ecosystem has been a
                        fertile ground for experiential learning. At Yuvabe too,
                        our continued effort is to work with this spirit of
                        unending education, and learn and evolve as an
                        organization, as individuals, and as a community.
                      </p>
                      {/* Read More Button */}
                      <Link
                        href="https://mailchi.mp/2f9c37453d4c/work-serve-and-evolve-we-do-it-all-6269059"
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

              {/* Newsletter 3 */}
              <motion.div
                initial={{ y: -50, opacity: 0 }} // Slide down animation
                whileInView={{ y: 0, opacity: 1 }} // Appears when in view
                transition={{ duration: 0.8, ease: "easeOut" }} // Staggered effect
                viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
              >
                <div className="flex flex-row gap-x-[77px] justify-between min-h-[456px] z-10 flex-wrap xl:flex-nowrap lg:w-[100%] gap-y-8 w-full">
                  {/* Left */}
                  <motion.div className="flex flex-col  rounded-[20px] w-full  bg-white xl:w-[34%] md:max-h-[600px] xl:max-h-full justify-center z-10 box-shadow-news">
                    <img
                      src="..\images\newsletters\news3.jpg"
                      alt=""
                      className="h-full rounded-t-[20px] rounded-tl-[20px] w-full z-10 object-cover"
                      width={347}
                      height={326}
                    />

                    {/* Title */}
                    <div className="flex flex-col gap-x-2  py-6 px-3">
                      <h2 className="uppercase font-primary font-semibold text-black text-[20px] leading-[25.98px] xl:text-center">
                        YUVABEAT
                      </h2>
                      <p className="font-secondary font-medium text-black text-[14px] leading-[25.98px] pb-6 xl:text-center">
                        Setting an Example!
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
                      <h3 className="font-primary font-semibold text-black text-[20px] md:text-2xl lg:text-4xl leading-[120%]">
                        <span>March</span>
                        &nbsp;
                        <span>2023</span>
                      </h3>
                      <p className="font-secondary font-normal text-black text-[18px] leading-[30px]">
                        It was two years ago, when we started our journey with
                        Quilt.AI. After successfully working virtually with
                        their counterparts in the Singapore office for 2 years,
                        our team got an opportunity to realize their dream - an
                        international trip to Singapore!
                      </p>
                      {/* Read More Button */}
                      <Link
                        href="https://mailchi.mp/a7e021a36dd8/work-serve-and-evolve-we-do-it-all-6263695"
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
              {/* Newsletter 2 */}
              <motion.div
                initial={{ y: -50, opacity: 0 }} // Slide down animation
                whileInView={{ y: 0, opacity: 1 }} // Appears when in view
                transition={{ duration: 0.8, ease: "easeOut" }} // Staggered effect
                viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
              >
                <div className="flex flex-row gap-x-[77px] justify-between min-h-[456px] z-10 flex-wrap xl:flex-nowrap lg:w-[100%] gap-y-8 w-full">
                  {/* Left */}
                  <motion.div className="flex flex-col  rounded-[20px] w-full  bg-white xl:w-[34%] md:max-h-[600px] xl:max-h-full justify-center z-10 box-shadow-news">
                    <img
                      src="..\images\newsletters\news2.jpg"
                      alt=""
                      className="h-full rounded-t-[20px] rounded-tl-[20px] w-full z-10 object-cover"
                      width={347}
                      height={326}
                    />

                    {/* Title */}
                    <div className="flex flex-col gap-x-2  py-6 px-3">
                      <h2 className="uppercase font-primary font-semibold text-black text-[20px] leading-[25.98px] xl:text-center">
                        YUVABEAT
                      </h2>
                      <p className="font-secondary font-medium text-black text-[14px] leading-[25.98px] pb-6 xl:text-center">
                        Mental Health Awareness - You are Invited!
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
                      <h3 className="font-primary font-semibold text-black text-[20px] md:text-2xl lg:text-4xl leading-[120%]">
                        <span>January</span>
                        &nbsp;
                        <span>2023</span>
                      </h3>
                      <p className="font-secondary font-normal text-black text-[18px] leading-[30px]">
                        At Yuvabe, we always strive to create a space for
                        holistic development of the youth. With this intention,
                        we have an active, ongoing collaboration with Maatram,
                        the primary mental health unit of Auroville. Most
                        recently, our association with Maatram led us to create
                        a street play.
                      </p>
                      {/* Read More Button */}
                      <Link
                        href="https://mailchi.mp/bc5ea91a5a86/work-serve-and-evolve-we-do-it-all-6257655"
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
              {/* Newsletter 1 */}
              <motion.div
                initial={{ y: -50, opacity: 0 }} // Slide down animation
                whileInView={{ y: 0, opacity: 1 }} // Appears when in view
                transition={{ duration: 0.8, ease: "easeOut" }} // Staggered effect
                viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
              >
                <div className="flex flex-row gap-x-[77px] justify-between min-h-[456px] z-10 flex-wrap xl:flex-nowrap lg:w-[100%] gap-y-8 w-full">
                  {/* Left */}
                  <motion.div className="flex flex-col  rounded-[20px] w-full  bg-white xl:w-[34%] md:max-h-[600px] xl:max-h-full justify-center z-10 box-shadow-news">
                    <img
                      src="..\images\newsletters\news1.jpg"
                      alt=""
                      className="h-full rounded-t-[20px] rounded-tl-[20px] w-full z-10 object-cover"
                      width={347}
                      height={326}
                    />

                    {/* Title */}
                    <div className="flex flex-col gap-x-2  py-6 px-3">
                      <h2 className="uppercase font-primary font-semibold text-black text-[20px] leading-[25.98px] xl:text-center">
                        YUVABEAT
                      </h2>
                      <p className="font-secondary font-medium text-black text-[14px] leading-[25.98px] pb-6 xl:text-center">
                        OUR YOUTH OUR FUTURE
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
                      <h3 className="font-primary font-semibold text-black text-[20px] md:text-2xl lg:text-4xl leading-[120%]">
                        <span>November</span>
                        &nbsp;
                        <span>2022</span>
                      </h3>
                      <p className="font-secondary font-normal text-black text-[18px] leading-[30px]">
                        The past few years have been a humbling adventure as we
                        shifted from our mainstream corporate lives to live in
                        Auroville, and found ways that come more from our heart
                        space, to engage in this community.
                      </p>
                      {/* Read More Button */}
                      <Link
                        href="https://mailchi.mp/yuvabe/work-serve-and-evolve-we-do-it-all"
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
          <div />
        </div>
      </div>
    </div>
  );
}
