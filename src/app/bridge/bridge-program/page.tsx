"use client";
import {motion} from "framer-motion";
import Link from "next/link";
export default function Bridge_Program_Calendar() {
  return (
    <>
      {/* Wrapper */}
      <div className="bg-white pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24">
        <div className="max-w-[1092px] flex flex-col m-auto px-5">
          {/* Main */}
          <div className="flex flex-col gap-y-16 md:gap-y-24 lg:gap-y-24">
            {/* Heading */}
            <h1 className="text-[#592AC7] text-[40px]  md:text-5xl lg:text-5xl leading-[120%] font-semibold text-center font-primary">
              Bridge Program Calendar 2025
            </h1>
            {/* Programs */}
            <div className="flex flex-col gap-y-12">
              {/* Individial Program Blocks */}
              {/* AI */}
              <motion.div 
               initial={{ opacity: 0, y: -50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
               viewport={{ once: true }}className="flex flex-row bg-[#EBF8FB] py-[43px]  rounded-[15px] border-2 border-[#33BED4] min-h-[219px] flex-wrap xl:flex-nowrap justify-center bridge-program-item">
                <div className="flex flex-row justify-between gap-x-16 gap-y-16 flex-wrap lg:flex-nowrap px-[24px]">
                  {/* Left */}
                  <div className="flex flex-col justify-between  max-w-full xl:max-w-[318px] lg:max-w[40%]  gap-y-7">
                    {/* Bottom */}
                    <div className="flex flex-row justify-between">
                      <h2 className="font-primary font-semibold leading-[120%] text-2xl text-black lg:max-w-[212px]">
                        AI First Full Stack Development
                      </h2>
                      <svg
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden md:block"
                      >
                        <path
                          id="color-path"
                          d="M20.2344 37.5938C29.8994 37.5938 37.7344 29.7587 37.7344 20.0938C37.7344 10.4288 29.8994 2.59375 20.2344 2.59375C10.5694 2.59375 2.73438 10.4288 2.73438 20.0938C2.73438 29.7587 10.5694 37.5938 20.2344 37.5938Z"
                          fill="#33BED4"
                          stroke="#33BED4"
                          stroke-width="1.97012"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.9336 14.7871L25.5402 14.7871L25.5402 25.3937"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M25.5402 14.7938L14.9336 25.4004"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    {/* Top */}
                    <p className="font-secondary font-normal leading-[140%] text-[16px] text-black">
                      Build and deploy AI-powered applications with hands-on
                      training in data, APIs, and LLMs.
                    </p>
                  </div>
                  {/* Middle */}
                  <div className="flex flex-col justify-center max-w-full xl:max-w-[392px] lg:max-w[45%]">
                    <p className="font-primary font-semi-bold leading-[120%] text-2xl text-black">
                      This course is scheduled to start
                      <br />
                      <span className="font-black">From January 2025</span>
                    </p>
                  </div>
                  {/* Right */}
                  <div className="flex flex-col justify-center  max-w-full lg:max-w-[142px]">
                    {/* Know More Button */}
                    <Link href="ai">
                      <div className="bg-[#33BED4] py-2 px-4 w-[142px] rounded-[8px]">
                        <p className="font-secondary font-semibold text-white text-[16px] leading-[30px] text-center">
                          Know More
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
              {/* Corporate */}
              <motion.div 
               initial={{ opacity: 0, y: -50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
               className="flex flex-row bg-[#F4F9EC] py-[43px]  rounded-[15px] border-2 border-[#91C644] min-h-[219px] flex-wrap xl:flex-nowrap justify-center bridge-program-item">
                <div className="flex flex-row justify-between gap-x-16 gap-y-16 flex-wrap lg:flex-nowrap px-[24px]">
                  {/* Left */}
                  <div className="flex flex-col justify-between  max-w-full xl:max-w-[318px] lg:max-w[40%]  gap-y-7">
                    {/* Bottom */}
                    <div className="flex flex-row justify-between">
                      <h2 className="font-primary font-semibold leading-[120%] text-2xl text-black lg:max-w-[212px]">
                        Corporate Sustainablity
                      </h2>
                      <svg
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden md:block"
                      >
                        <path
                          id="color-path"
                          d="M20.2344 37.5938C29.8994 37.5938 37.7344 29.7587 37.7344 20.0938C37.7344 10.4288 29.8994 2.59375 20.2344 2.59375C10.5694 2.59375 2.73438 10.4288 2.73438 20.0938C2.73438 29.7587 10.5694 37.5938 20.2344 37.5938Z"
                          fill="#91C644"
                          stroke="#91C644"
                          stroke-width="1.97012"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.9336 14.7871L25.5402 14.7871L25.5402 25.3937"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M25.5402 14.7938L14.9336 25.4004"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    {/* Top */}
                    <p className="font-secondary font-normal leading-[140%] text-[16px] text-black">
                      Drive impact by integrating sustainable strategies into
                      business practices.
                    </p>
                  </div>
                  {/* Middle */}
                  <div className="flex flex-col justify-center max-w-full xl:max-w-[392px] lg:max-w[45%]">
                    <p className="font-primary font-semi-bold leading-[120%] text-2xl text-black">
                      This course is scheduled to start
                      <br />
                      <span className="font-black">From February 2025</span>
                    </p>
                  </div>
                  {/* Right */}
                  <div className="flex flex-col justify-center  max-w-full lg:max-w-[142px]">
                    {/* Know More Button */}
                    <Link href="sustainability">
                      <div className="bg-[#91C644] py-2 px-4 w-[142px] rounded-[8px]">
                        <p className="font-secondary font-semibold text-white text-[16px] leading-[30px] text-center">
                          Know More
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
              {/* Digital Marketing */}
              <motion.div 
               initial={{ opacity: 0, y: -50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-row bg-[#FFFAEA] py-[43px]  rounded-[15px] border-2 border-[#FFCA2D] min-h-[219px] flex-wrap xl:flex-nowrap justify-center bridge-program-item">
                <div className="flex flex-row justify-between gap-x-16 gap-y-16 flex-wrap lg:flex-nowrap px-[24px]">
                  {/* Left */}
                  <div className="flex flex-col justify-between  max-w-full xl:max-w-[318px] lg:max-w[40%]  gap-y-7">
                    {/* Bottom */}
                    <div className="flex flex-row justify-between">
                      <h2 className="font-primary font-semibold leading-[120%] text-2xl text-black lg:max-w-[212px]">
                        Digital Marketing
                      </h2>
                      <svg
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden md:block"
                      >
                        <path
                          id="color-path"
                          d="M20.2344 37.5938C29.8994 37.5938 37.7344 29.7587 37.7344 20.0938C37.7344 10.4288 29.8994 2.59375 20.2344 2.59375C10.5694 2.59375 2.73438 10.4288 2.73438 20.0938C2.73438 29.7587 10.5694 37.5938 20.2344 37.5938Z"
                          fill="#FFCA2D"
                          stroke="#FFCA2D"
                          stroke-width="1.97012"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.9336 14.7871L25.5402 14.7871L25.5402 25.3937"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M25.5402 14.7938L14.9336 25.4004"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    {/* Top */}
                    <p className="font-secondary font-normal leading-[140%] text-[16px] text-black">
                      Gain real-world experience in branding, advertising, and
                      analytics to thrive in the ever-evolving digital
                      landscape.
                    </p>
                  </div>
                  {/* Middle */}
                  <div className="flex flex-col justify-center max-w-full xl:max-w-[392px] lg:max-w[45%]">
                    <p className="font-primary font-semi-bold leading-[120%] text-2xl text-black">
                      This course is scheduled to start
                      <br />
                      <span className="font-black">From March 2025</span>
                    </p>
                  </div>
                  {/* Right */}
                  <div className="flex flex-col justify-center  max-w-full lg:max-w-[142px]">
                    {/* Know More Button */}
                    <Link href="digital-marketing">
                      <div className="bg-[#FFCA2D] py-2 px-4 w-[142px] rounded-[8px]">
                        <p className="font-secondary font-semibold text-white text-[16px] leading-[30px] text-center">
                          Know More
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
              {/* 3D Product Design & Prototyping */}
              <motion.div 
               initial={{ opacity: 0, y: -50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-row bg-[#FDEDE9] py-[43px]  rounded-[15px] border-2 border-[#F04E26] min-h-[219px] flex-wrap xl:flex-nowrap justify-center bridge-program-item">
                <div className="flex flex-row justify-between gap-x-16 gap-y-16 flex-wrap lg:flex-nowrap px-[24px]">
                  {/* Left */}
                  <div className="flex flex-col justify-between  max-w-full xl:max-w-[318px] lg:max-w[40%]  gap-y-7">
                    {/* Bottom */}
                    <div className="flex flex-row justify-between">
                      <h2 className="font-primary font-semibold leading-[120%] text-2xl text-black lg:max-w-[248.6953125px]">
                        3D Product Design & Prototyping
                      </h2>
                      <svg
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden md:block"
                      >
                        <path
                          id="color-path"
                          d="M20.2344 37.5938C29.8994 37.5938 37.7344 29.7587 37.7344 20.0938C37.7344 10.4288 29.8994 2.59375 20.2344 2.59375C10.5694 2.59375 2.73438 10.4288 2.73438 20.0938C2.73438 29.7587 10.5694 37.5938 20.2344 37.5938Z"
                          fill="#F04E26"
                          stroke="#F04E26"
                          stroke-width="1.97012"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.9336 14.7871L25.5402 14.7871L25.5402 25.3937"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M25.5402 14.7938L14.9336 25.4004"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    {/* Top */}
                    <p className="font-secondary font-normal leading-[140%] text-[16px] text-black">
                      Turn ideas into reality with cutting-edge 3D modeling and
                      rapid prototyping.
                    </p>
                  </div>
                  {/* Middle */}
                  <div className="flex flex-col justify-center max-w-full xl:max-w-[392px] lg:max-w[45%]">
                    <p className="font-primary font-semi-bold leading-[120%] text-2xl text-black">
                      This course is scheduled to start
                      <br />
                      <span className="font-black">From April 2025</span>
                    </p>
                  </div>
                  {/* Right */}
                  <div className="flex flex-col justify-center  max-w-full lg:max-w-[142px]">
                    {/* Know More Button */}
                    <Link
                      href="#"
                      target="_blank"
                      style={{
                        pointerEvents: "none",
                      }}
                    >
                      <div className="bg-[#F04E26] py-2 px-4 w-[142px] rounded-[8px]">
                        <p className="font-secondary font-semibold text-white text-[16px] leading-[30px] text-center">
                          Know More
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
              {/* UI/UX Design */}
              <motion.div 
               initial={{ opacity: 0, y: -50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-row bg-[#FEF6E8] py-[43px]  rounded-[15px] border-2 border-[#FFCA2D] min-h-[219px] flex-wrap xl:flex-nowrap justify-center bridge-program-item">
                <div className="flex flex-row justify-between gap-x-16 gap-y-16 flex-wrap lg:flex-nowrap px-[24px]">
                  {/* Left */}
                  <div className="flex flex-col justify-between  max-w-full xl:max-w-[318px] lg:max-w[40%]  gap-y-7">
                    {/* Bottom */}
                    <div className="flex flex-row justify-between">
                      <h2 className="font-primary font-semibold leading-[120%] text-2xl text-black lg:max-w-[212px]">
                        UI/UX Design
                      </h2>
                      <svg
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden md:block"
                      >
                        <path
                          id="color-path"
                          d="M20.2344 37.5938C29.8994 37.5938 37.7344 29.7587 37.7344 20.0938C37.7344 10.4288 29.8994 2.59375 20.2344 2.59375C10.5694 2.59375 2.73438 10.4288 2.73438 20.0938C2.73438 29.7587 10.5694 37.5938 20.2344 37.5938Z"
                          fill="#FFCA2D"
                          stroke="#FFCA2D"
                          stroke-width="1.97012"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.9336 14.7871L25.5402 14.7871L25.5402 25.3937"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M25.5402 14.7938L14.9336 25.4004"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    {/* Top */}
                    <p className="font-secondary font-normal leading-[140%] text-[16px] text-black">
                      Craft seamless digital experiences through intuitive
                      design and user research.
                    </p>
                  </div>
                  {/* Middle */}
                  <div className="flex flex-col justify-center max-w-full xl:max-w-[392px] lg:max-w[45%]">
                    <p className="font-primary font-semi-bold leading-[120%] text-2xl text-black">
                      This course is scheduled to start
                      <br />
                      <span className="font-black">From April 2025</span>
                    </p>
                  </div>
                  {/* Right */}
                  <div className="flex flex-col justify-center  max-w-full lg:max-w-[142px]">
                    {/* Know More Button */}
                    <Link href="ui-ux">
                      <div className="bg-[#FFCA2D] py-2 px-4 w-[142px] rounded-[8px]">
                        <p className="font-secondary font-semibold text-white text-[16px] leading-[30px] text-center">
                          Know More
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/*Corporate Sustainablity  */}
                <motion.div 
               initial={{ opacity: 0, y: -50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-row bg-[#F4F9EC] py-[43px]  rounded-[15px] border-2 border-[#91C644] min-h-[219px] flex-wrap xl:flex-nowrap justify-center bridge-program-item">
                <div className="flex flex-row justify-between gap-x-16 gap-y-16 flex-wrap lg:flex-nowrap px-[24px]">
                  {/* Left */}
                  <div className="flex flex-col justify-between  max-w-full xl:max-w-[318px] lg:max-w[40%]  gap-y-7">
                    {/* Bottom */}
                    <div className="flex flex-row justify-between">
                      <h2 className="font-primary font-semibold leading-[120%] text-2xl text-black lg:max-w-[212px]">
                        Corporate Sustainablity
                      </h2>
                      <svg
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden md:block"
                      >
                        <path
                          id="color-path"
                          d="M20.2344 37.5938C29.8994 37.5938 37.7344 29.7587 37.7344 20.0938C37.7344 10.4288 29.8994 2.59375 20.2344 2.59375C10.5694 2.59375 2.73438 10.4288 2.73438 20.0938C2.73438 29.7587 10.5694 37.5938 20.2344 37.5938Z"
                          fill="#91C644"
                          stroke="#91C644"
                          stroke-width="1.97012"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.9336 14.7871L25.5402 14.7871L25.5402 25.3937"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M25.5402 14.7938L14.9336 25.4004"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    {/* Top */}
                    <p className="font-secondary font-normal leading-[140%] text-[16px] text-black">
                      Drive impact by integrating sustainable strategies into
                      business practices.
                    </p>
                  </div>
                  {/* Middle */}
                  <div className="flex flex-col justify-center max-w-full xl:max-w-[392px] lg:max-w[45%]">
                    <p className="font-primary font-semi-bold leading-[120%] text-2xl text-black">
                      This course is scheduled to start
                      <br />
                      <span className="font-black">From June 2025</span>
                    </p>
                  </div>
                  {/* Right */}
                  <div className="flex flex-col justify-center  max-w-full lg:max-w-[142px]">
                    {/* Know More Button */}
                    <Link href="sustainability">
                      <div className="bg-[#91C644] py-2 px-4 w-[142px] rounded-[8px]">
                        <p className="font-secondary font-semibold text-white text-[16px] leading-[30px] text-center">
                          Know More
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
              {/* Digital Marketing */}
              <motion.div 
               initial={{ opacity: 0, y: -50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-row bg-[#FFFAEA] py-[43px]  rounded-[15px] border-2 border-[#FFCA2D] min-h-[219px] flex-wrap xl:flex-nowrap justify-center bridge-program-item">
                <div className="flex flex-row justify-between gap-x-16 gap-y-16 flex-wrap lg:flex-nowrap px-[24px]">
                  {/* Left */}
                  <div className="flex flex-col justify-between  max-w-full xl:max-w-[318px] lg:max-w[40%]  gap-y-7">
                    {/* Bottom */}
                    <div className="flex flex-row justify-between">
                      <h2 className="font-primary font-semibold leading-[120%] text-2xl text-black lg:max-w-[212px]">
                        Digital Marketing
                      </h2>
                      <svg
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden md:block"
                      >
                        <path
                          id="color-path"
                          d="M20.2344 37.5938C29.8994 37.5938 37.7344 29.7587 37.7344 20.0938C37.7344 10.4288 29.8994 2.59375 20.2344 2.59375C10.5694 2.59375 2.73438 10.4288 2.73438 20.0938C2.73438 29.7587 10.5694 37.5938 20.2344 37.5938Z"
                          fill="#FFCA2D"
                          stroke="#FFCA2D"
                          stroke-width="1.97012"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.9336 14.7871L25.5402 14.7871L25.5402 25.3937"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M25.5402 14.7938L14.9336 25.4004"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    {/* Top */}
                    <p className="font-secondary font-normal leading-[140%] text-[16px] text-black">
                      Gain real-world experience in branding, advertising, and
                      analytics to thrive in the ever-evolving digital
                      landscape.
                    </p>
                  </div>
                  {/* Middle */}
                  <div className="flex flex-col justify-center max-w-full xl:max-w-[392px] lg:max-w[45%]">
                    <p className="font-primary font-semi-bold leading-[120%] text-2xl text-black">
                      This course is scheduled to start
                      <br />
                      <span className="font-black">From August 2025</span>
                    </p>
                  </div>
                  {/* Right */}
                  <div className="flex flex-col justify-center  max-w-full lg:max-w-[142px]">
                    {/* Know More Button */}
                    <Link href="digital-marketing">
                      <div className="bg-[#FFCA2D] py-2 px-4 w-[142px] rounded-[8px]">
                        <p className="font-secondary font-semibold text-white text-[16px] leading-[30px] text-center">
                          Know More
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
              {/* UI/UX Design */}
              <motion.div 
               initial={{ opacity: 0, y: -50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-row bg-[#FFFAEA] py-[43px]  rounded-[15px] border-2 border-[#FFCA2D] min-h-[219px] flex-wrap xl:flex-nowrap justify-center bridge-program-item">
                <div className="flex flex-row justify-between gap-x-16 gap-y-16 flex-wrap lg:flex-nowrap px-[24px]">
                  {/* Left */}
                  <div className="flex flex-col justify-between  max-w-full xl:max-w-[318px] lg:max-w[40%]  gap-y-7">
                    {/* Bottom */}
                    <div className="flex flex-row justify-between">
                      <h2 className="font-primary font-semibold leading-[120%] text-2xl text-black lg:max-w-[212px]">
                        UI/UX Design
                      </h2>
                      <svg
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden md:block"
                      >
                        <path
                          id="color-path"
                          d="M20.2344 37.5938C29.8994 37.5938 37.7344 29.7587 37.7344 20.0938C37.7344 10.4288 29.8994 2.59375 20.2344 2.59375C10.5694 2.59375 2.73438 10.4288 2.73438 20.0938C2.73438 29.7587 10.5694 37.5938 20.2344 37.5938Z"
                          fill="#F8A91E"
                          stroke="#F8A91E"
                          stroke-width="1.97012"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.9336 14.7871L25.5402 14.7871L25.5402 25.3937"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M25.5402 14.7938L14.9336 25.4004"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    {/* Top */}
                    <p className="font-secondary font-normal leading-[140%] text-[16px] text-black">
                      Craft seamless digital experiences through intuitive
                      design and user research.
                    </p>
                  </div>
                  {/* Middle */}
                  <div className="flex flex-col justify-center max-w-full xl:max-w-[392px] lg:max-w[45%]">
                    <p className="font-primary font-semi-bold leading-[120%] text-2xl text-black">
                      This course is scheduled to start
                      <br />
                      <span className="font-black">From September 2025</span>
                    </p>
                  </div>
                  {/* Right */}
                  <div className="flex flex-col justify-center  max-w-full lg:max-w-[142px]">
                    {/* Know More Button */}
                    <Link href="ui-ux">
                      <div className="bg-[#F8A91E] py-2 px-4 w-[142px] rounded-[8px]">
                        <p className="font-secondary font-semibold text-white text-[16px] leading-[30px] text-center">
                          Know More
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
              {/* AI First full stack development */}
              <motion.div 
               initial={{ opacity: 0, y: -50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-row bg-[#EBF8FB] py-[43px]  rounded-[15px] border-2 border-[#33BED4] min-h-[219px] flex-wrap xl:flex-nowrap justify-center bridge-program-item">
                <div className="flex flex-row justify-between gap-x-16 gap-y-16 flex-wrap lg:flex-nowrap px-[24px]">
                  {/* Left */}
                  <div className="flex flex-col justify-between  max-w-full xl:max-w-[318px] lg:max-w[40%]  gap-y-7">
                    {/* Bottom */}
                    <div className="flex flex-row justify-between">
                      <h2 className="font-primary font-semibold leading-[120%] text-2xl text-black lg:max-w-[212px]">
                        AI First full stack development
                      </h2>
                      <svg
                        width="41"
                        height="41"
                        viewBox="0 0 41 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="color-path"
                          d="M20.2344 37.5938C29.8994 37.5938 37.7344 29.7587 37.7344 20.0938C37.7344 10.4288 29.8994 2.59375 20.2344 2.59375C10.5694 2.59375 2.73438 10.4288 2.73438 20.0938C2.73438 29.7587 10.5694 37.5938 20.2344 37.5938Z"
                          fill="#33BED4"
                          stroke="#33BED4"
                          stroke-width="1.97012"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.9336 14.7871L25.5402 14.7871L25.5402 25.3937"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M25.5402 14.7938L14.9336 25.4004"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    {/* Top */}
                    <p className="font-secondary font-normal leading-[140%] text-[16px] text-black">
                      Build and deploy AI-powered applications with hands-on
                      training in data, APIs, and LLMs.
                    </p>
                  </div>
                  {/* Middle */}
                  <div className="flex flex-col justify-center max-w-full xl:max-w-[392px] lg:max-w[45%]">
                    <p className="font-primary font-semi-bold leading-[120%] text-2xl text-black">
                      This course is scheduled to start
                      <br />
                      <span className="font-black">From October 2025</span>
                    </p>
                  </div>
                  {/* Right */}
                  <div className="flex flex-col justify-center  max-w-full lg:max-w-[142px]">
                    {/* Know More Button */}
                    <Link href="ai">
                      <div className="bg-[#33BED4] py-2 px-4 w-[142px] rounded-[8px]">
                        <p className="font-secondary font-semibold text-white text-[16px] leading-[30px] text-center">
                          Know More
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
