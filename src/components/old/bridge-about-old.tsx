"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const bounceIn = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 120, damping: 10 },
  },
};

export default function Bridge() {
  return (
    <main className="overflow-x-hidden">
      {/* Wrapper */}
      <div className="bg-white pb-16 xl:pb-32 md:pb-24 xl:pt-32 pt-16 md:pt-24">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-16 md:gap-y-24 lg:gap-y-32">
          {/* Hero */}
          <div className="flex flex-col lg:gap-y-16 gap-y-8 w-full max-w-screen-lg mx-auto px-5 md:px-8 xl:px-0">
            {/* Top */}
            <motion.div
              className="flex flex-col gap-y-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-[#592AC7] text-[32px] md:text-[48px] lg:text-[64px] leading-[120%] font-semibold text-center font-primary">
                Bridge
              </h1>
              <p className="font-secondary font-medium text-black text-[18px] md:text-[18px] leading-[28px] md:leading-[30px] text-center">
                We transform education into experience, bridging the gap between
                academia and the professional world. Through real-world impact,
                personal growth, and career-focused learning, we empower you to
                step confidently into the future.
              </p>
            </motion.div>

            {/* Video */}
            <motion.div
              className="max-w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/4CD3hrUG6w4?autoplay=1&mute=1"
                title="YouTube video player"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // referrerpolicy="strict-origin-when-cross-origin"
                // allowfullscreen
                className="md:h-[617px] h-64"
              ></iframe>
            </motion.div>
          </div>

          {/* Overview */}
          <div className="flex flex-col gap-y-8 md:gap-y-16  ">
            <motion.h2
              className="text-black text-[32px] md:text-[40px] lg:text-5xl leading-[120%] font-semibold text-center font-primary"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Overview
            </motion.h2>
            <div className="flex flex-row xl:gap-x-[106px] flex-wrap lg:flex-nowrap gap-y-8 md:gap-y-16 justify-center">
              <motion.div
                className="w-full lg:w-[52%]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <p className="font-secondary font-medium text-black text-[18px] md:text-[18px] leading-[28px] md:leading-[30px]  text-center lg:text-left">
                  The Auroville Bio-region comprises approximately&nbsp;
                  <span className="text-[#592AC7] font-bold">
                    13 villages with about 40,000 people.
                  </span>
                  &nbsp;It is situated in the Villupuram district of Tamil Nadu,
                  a state with approximately&nbsp;
                  <span className="text-[#592AC7] font-bold">
                    74% of its population falling in the productive age group of
                    15–35 years.
                  </span>
                  (Defined as “youth” by The Tamil Nadu State Youth Policy).
                  <br />
                  <br />
                  These
                  <span className="text-[#592AC7] font-bold">
                    &nbsp;young adults are the catalysts of social change,
                  </span>
                  driving the route to socioeconomic, political, environmental,
                  and technological development in all spheres of life.
                  <br />
                  <br />
                  However, the shift in the natural environment of the region
                  has impacted the income generation from agriculture which has
                  been the prominent source of income for the community. This is
                  altering the cultural perspective, where families increasingly
                  depend on young adults to generate income and support their
                  families.
                </p>
              </motion.div>
              <motion.div
                className="lg:w-[48%] flex flex-col items-center relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/bridge/bridge11.png"
                  alt="Bridge Image"
                  width={533}
                  height={533}
                  className="w-[80%] lg:w-full max-w-[450px] md:max-w-none z-10 lg:mt-[-50px] lg:ml-12 xl:ml-24 object-contain"
                />

                {/* Yellow Rectangle Decoration */}
                <motion.svg
                  width="157"
                  height="158"
                  viewBox="0 0 157 158"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute z-10 right-[-5%] md:right-0 lg:right-[-5%] bottom-[30%] md:scale-100 scale-75"
                  animate={{
                    y: [0, -10, 0], // Moves up by 10px and then back to original position
                  }}
                  transition={{
                    duration: 3, // Duration of one full cycle
                    repeat: Infinity, // Loops forever
                    ease: "easeInOut", // Smooth easing
                  }}
                >
                  <rect
                    x="67.1211"
                    y="0.697266"
                    width="111.824"
                    height="111.824"
                    transform="rotate(36.6092 67.1211 0.697266)"
                    fill="#FFCA2D"
                  />
                </motion.svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenges */}
      <div className="bg-[#FFF9EA] py-16 lg:py-32 md:py-24 overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-16 md:gap-y-24 lg:gap-y-32">
          <motion.div
            className="flex flex-col gap-y-8 md:gap-y-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-black text-[32px] md:text-[40px] lg:text-5xl leading-[120%] font-semibold text-center font-primary">
              Challenges & Needs
            </h2>

            <div className="flex flex-col lg:flex-row gap-x-12 gap-y-8 md:gap-y-16 justify-center items-center">
              {/* Image + SVG Container */}
              <motion.div
                className="lg:w-[40%] flex flex-col relative items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/bridge/bridge-55.png"
                  alt=""
                  width={473}
                  height={473}
                  className="w-full max-w-[400px] md:min-w-[300px] z-10"
                />

                {/* Triangle Blue Small */}
                <motion.svg
                  width="165"
                  height="173"
                  viewBox="0 0 165 173"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[-2%] right-[-4%] z-0"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path
                    d="M134.794 0.234169L164.878 172.845L0.350549 112.592L134.794 0.234169Z"
                    fill="#33BED4"
                  />
                </motion.svg>
              </motion.div>

              {/* Text Content */}
              <motion.div
                className="lg:w-[60%] text-center lg:text-left"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="font-secondary font-medium text-black text-[18px] leading-[30px]  text-center lg:text-left">
                  Conventional education system’s emphasis on rote learning and
                  lack of application-based curricula has led to the youth{" "}
                  <span className="text-[#592AC7] font-bold">
                    lacking creative, critical thinking and other employable
                    skills.
                  </span>
                  <br />
                  <br />
                  The{" "}
                  <span className="text-[#592AC7] font-bold">
                    rapid technological advancement has created a skills gap
                  </span>{" "}
                  posing a huge challenge for the youth to secure or create
                  employment. With little to no access to career growth
                  opportunities, the youth are often led astray by fringe groups
                  causing both economic and social concerns. <br />
                  <br />
                  This creates a{" "}
                  <span className="text-[#592AC7] font-bold">
                    need for platforms that can provide a basic understanding of
                    new-age skills, personalized guidance,
                  </span>{" "}
                  and access to improved tools and resources that empower the
                  youth to become lifelong learners and pursue their
                  aspirations.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* The Bridge Program */}
      <div className="bg-white py-16 lg:py-32 md:py-24">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-16 md:gap-y-24 lg:gap-y-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-y-8 md:gap-y-16"
          >
            <h2 className="text-black text-[32px]  md:text-[40px] lg:text-5xl leading-[120%] font-semibold text-center font-primary">
              The Bridge Program
            </h2>
            <div className="flex flex-row gap-x-[106px] flex-wrap lg:flex-nowrap gap-y-8 md:gap-y-16 justify-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:w-[55%]"
              >
                <p className="font-secondary font-medium text-black text-[18px] leading-[30px]  text-center lg:text-left">
                  The
                  <span className="text-[#592AC7] font-bold">
                    Bridge Program is a 3-6 month program
                  </span>
                  that will provide introductory training in predetermined areas
                  such as Digital Marketing, Market Research and Analytics,
                  Sustainability Assessment and Artificial Intelligence. The
                  program is aimed at young adults who are in the process of
                  completing their education and looking for employment
                  opportunities.
                  <br />
                  <br /> The goal is to
                  <span className="text-[#592AC7] font-bold">
                    &nbsp;facilitate a project based learning environment
                  </span>
                  that provides them with an opportunity to explore new-age
                  skills, and empowering tools to thrive in a rapidly changing
                  world while upholding the principles of holistic development
                  and unity. <br />
                  <br />
                  Through
                  <span className="text-[#592AC7] font-bold">
                    Yuvabe’s Work-Serve-Evolve philosophy
                  </span>
                  , the aim is to go beyond an upskilling program and
                  incorporate the service-to-community mindset and focus on
                  self-growth, thereby bolstering holistic personality
                  development.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:w-[45%] lg:align-middle flex flex-col relative"
              >
                <Image
                  src="/images/bridge/bridge-6.png"
                  alt=""
                  width={637.5938110351562}
                  height={621.3225708007812}
                  className="w-full md:min-w-[450px] z-10 lg:mt-[-75px]"
                />

                {/* Blue Circle Small */}
                <motion.svg
                  width="128"
                  height="128"
                  viewBox="0 0 128 128"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[25%] md:top-[15%] lg:top-[3%] right-[5%] md:right-[12%] md:scale-100 scale-75 z-10"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <circle
                    cx="64.0088"
                    cy="64.2842"
                    r="63.3877"
                    fill="#33BED4"
                  />
                </motion.svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* What we want */}
      <div className="bg-[#FFF9EA] py-16 lg:py-32 md:py-24 overflow-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-16 md:gap-y-24 lg:gap-y-32">
          <motion.h2
            className="text-black text-[40px] md:text-[40px] lg:text-[64px] leading-[120%] font-semibold text-center font-primary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            What do we want to do?
          </motion.h2>

          <div className="flex flex-wrap gap-y-[65px] gap-x-4 lg:justify-between justify-center">
            {/* Card Items */}
            {[
              {
                img: "/images/bridge/bridge-icon1.png",
                text: "Mentor-guided learning and career guidance with a focus on skills and knowledge directly applicable to the industry.",
              },
              {
                img: "/images/bridge/bridge-icon2.png",
                text: "Hands-on projects and opportunities to work on live projects for practical learning.",
              },
              {
                img: "/images/bridge/bridge-icon3.png",
                text: "Development of soft skills through workshops on communication, emotional intelligence, teamwork, and interpersonal skills.",
              },
              {
                img: "/images/bridge/bridge-icon4.png",
                text: "Emphasize the importance of giving back to the community through service work.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex lg:flex-row flex-col gap-x-4  md:gap-y-[65px] gap-y-8  items-center flex-wrap lg:flex-nowrap justify-center lg:w-[49%] w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              >
                <Image src={item.img} alt="" width={104} height={104} />
                <p className="font-secondary font-medium text-black text-[18px] leading-[30px] w-full md:w-[320px] lg:w-full text-center  lg:text-left mt-8 md:mt-0">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Programs */}
      <div className="bg-white py-16 lg:py-32 md:py-24 overflow-x-hidden">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-16 md:gap-y-24 lg:gap-y-32">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-black  text-[40px] md:text-[40px] lg:text-[64px] leading-[120%] font-semibold text-center font-primary"
          >
            Our Program
          </motion.h2>
          {/* Main Image */}
          <div className="flex flex-col justify-center">
            <div className="relative flex flex-col justify-center items-center">
              <Image
                src="/images/bridge/bridge-photo.png"
                alt="Students standing on a bridge"
                width={839}
                height={937}
                className="relative z-5"
                priority
              />
              {/* Green Square */}
              <motion.svg
                width="196"
                height="197"
                viewBox="0 0 196 197"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[21%] left-[7%] xl:z-6 scale-50 lg:scale-100"
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <rect
                  x="24.4492"
                  y="0.84375"
                  width="172.734"
                  height="172.734"
                  transform="rotate(8.1155 24.4492 0.84375)"
                  fill="#91C644"
                />
              </motion.svg>
              {/* Yellow Circle */}
              <motion.svg
                width="231"
                height="232"
                viewBox="0 0 231 232"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[15%] right-[2%] z-5 scale-50 lg:scale-100 "
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <circle cx="115.543" cy="116.246" r="115.457" fill="#FFCA2D" />
              </motion.svg>

              {/* Excalmation */}
              <svg
                width="32"
                height="64"
                viewBox="0 0 32 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[11%] md:left-[5%] lg:left-[15%] z-5 scale-50 lg:scale-100 hidden md:block"
              >
                <path
                  d="M10.1753 30.4388C8.66988 25.4717 6.77735 19.4579 5.02954 13.405C4.60839 11.9305 4.49 10.3124 4.58271 8.76871C4.82256 4.09305 9.05527 1.72288 13.1992 3.90646C16.1478 5.47365 17.9852 8.05661 18.5082 11.2564C20.131 21.1348 21.5333 31.0632 23.0286 40.9737C23.0869 41.4117 23.0866 41.8535 23.0932 42.3126C23.1379 45.2257 22.5661 46.3827 20.4003 46.6844C18.3277 46.9683 16.6158 46.0206 15.7735 44.0555C13.9976 39.9014 12.3351 35.681 10.1926 30.4318L10.1753 30.4388ZM13.5943 30.6496C13.5943 30.6496 13.7664 30.5793 13.8594 30.5614C14.3853 32.1939 14.904 33.8093 15.4643 35.4277C16.3593 38.0139 17.2441 40.6242 18.2665 43.1784C18.4562 43.6431 19.2037 43.9002 19.6929 44.2627C19.9381 43.7811 20.2489 43.3129 20.3799 42.7977C20.4944 42.3895 20.3978 41.9069 20.3223 41.476C18.8098 31.5725 17.3974 21.6684 15.64 11.8047C15.3169 10.0292 13.7791 8.32781 12.4335 6.94958C11.7904 6.30858 10.0803 6.1031 9.21657 6.49579C8.46634 6.8221 7.98973 8.26148 7.838 9.26707C7.6768 10.397 7.87211 11.6625 8.20439 12.7717C9.95852 18.7416 11.7885 24.7007 13.5943 30.6496Z"
                  fill="black"
                />
                <path
                  d="M17.5594 58.3423C16.1343 54.5068 16.7037 52.5076 19.5308 51.5143C24.114 49.9045 26.0297 50.3674 27.1902 53.4073C28.4881 56.8329 27.3673 59.9407 24.4338 61.0176C21.063 62.2529 18.6816 61.3376 17.5664 58.3595L17.5594 58.3423ZM23.3938 57.9285C24.7808 57.3423 24.7435 55.9721 24.3269 54.6564C23.7871 52.9894 22.4007 53.6758 21.3253 53.8939C19.6983 54.2367 19.8062 55.3371 20.2158 56.6356C20.7142 58.2994 21.809 58.3746 23.4039 57.9043L23.3938 57.9285Z"
                  fill="black"
                />
              </svg>

              {/* Angry */}
              <svg
                width="33"
                height="37"
                viewBox="0 0 33 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[2%] left-[52%] z-5 scale-50 lg:scale-100 hidden md:block"
              >
                <path
                  d="M0.707031 21.6931C1.23664 21.4641 1.75198 21.1206 2.31021 21.0061C7.90691 19.7751 13.16 22.3516 15.2499 27.7192C16.0228 29.7088 15.9942 32.042 16.1373 34.232C16.1802 34.7902 15.4789 35.4057 15.121 35.9926C14.8491 35.3771 14.3481 34.7616 14.3481 34.1461C14.3051 30.6822 13.3748 27.6334 10.784 25.1857C9.20944 23.6971 7.39158 22.9527 5.2302 22.8669C3.74156 22.8096 2.23861 22.5949 0.749971 22.4518C0.735657 22.1941 0.721345 21.9508 0.707031 21.6931Z"
                  fill="black"
                />
                <path
                  d="M32.4794 17.6413C31.6349 17.6413 30.6329 17.9419 29.9602 17.584C27.7702 16.4389 25.5659 15.2222 23.6192 13.705C22.1449 12.5599 21.5437 10.7134 21.6582 8.78103C21.7584 6.79141 21.8729 4.80179 22.1305 2.82649C22.2021 2.28256 22.8176 1.81022 23.1898 1.29492C23.4617 1.8961 23.9198 2.46865 23.9627 3.08415C24.0629 4.15768 23.9627 5.25983 23.8482 6.33336C23.4617 10.2697 25.0935 13.0609 28.5717 14.8501C29.9459 15.5658 31.3057 16.3101 32.6655 17.0544C32.6083 17.2548 32.551 17.4409 32.4937 17.6413H32.4794Z"
                  fill="black"
                />
                <path
                  d="M3.05457 14.1767C3.52693 14.0479 3.99927 13.8332 4.47162 13.8188C7.52046 13.7616 9.95381 12.3159 11.6285 9.98273C13.2746 7.69252 14.477 5.0731 15.8654 2.5825C16.1374 2.08152 16.209 1.46604 16.5382 1.008C16.7958 0.664464 17.3111 0.507006 17.6976 0.263672C17.8264 0.721713 18.1413 1.2227 18.0411 1.60917C17.7835 2.65408 17.3827 3.68467 16.9533 4.67232C15.436 8.23646 13.5895 11.5716 10.4548 14.0049C8.86599 15.2359 7.10537 16.0661 5.05849 15.7369C4.29986 15.6224 3.61282 15.1357 2.88281 14.8208L3.04024 14.1481L3.05457 14.1767Z"
                  fill="black"
                />
                <path
                  d="M31.7836 22.522C31.0106 22.794 30.5239 23.066 30.0086 23.1375C24.2545 24.0536 21.4777 27.7323 20.6045 33.1858C20.4614 34.0876 20.3755 35.0037 20.1608 35.8768C20.0892 36.1631 19.6455 36.3635 19.3735 36.6068C19.1302 36.3348 18.8868 36.0629 18.6578 35.7766C18.6006 35.705 18.6149 35.5619 18.6149 35.4474C18.6578 30.137 20.2896 24.8266 25.6143 22.336C27.103 21.6489 29.021 21.8636 30.753 21.7348C30.9963 21.7205 31.254 22.0926 31.7836 22.4934V22.522Z"
                  fill="black"
                />
              </svg>

              {/* Hearts */}
              <svg
                width="42"
                height="39"
                viewBox="0 0 42 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[13%] left-[62%] z-5 scale-65 lg:scale-100 hidden md:block"
              >
                <path
                  d="M32.8316 23.7156C33.7907 23.2432 34.5636 22.7852 35.3938 22.4559C37.3834 21.6544 39.4017 22.0265 40.4466 23.3148C41.4342 24.5171 41.3054 26.4209 39.9456 28.2244C37.2689 31.7599 33.5903 34.0931 29.7971 36.2258C28.2083 37.1133 26.5049 37.8146 24.8159 38.5017C23.5849 38.9884 23.0124 38.4874 23.1985 37.2707C23.9714 32.3181 24.73 27.3656 25.5459 22.4273C25.6891 21.5399 25.9181 20.6238 26.3475 19.8365C27.2493 18.2047 29.0957 17.6036 30.7705 18.2191C32.4165 18.8345 33.1895 20.2373 32.9605 22.1983C32.9032 22.642 32.8746 23.0857 32.8316 23.7156ZM29.8687 29.2407C29.6397 29.1262 29.4107 28.9973 29.196 28.8828C29.3677 28.0669 29.5108 27.2654 29.6969 26.4495C30.0404 24.9465 30.5271 23.4722 30.6989 21.9406C30.7562 21.411 30.1407 20.3804 29.7112 20.3232C29.1816 20.2516 28.4087 20.8099 27.9936 21.3108C27.6644 21.683 27.6644 22.3844 27.6214 22.9426C27.3638 25.6765 27.1491 28.4105 26.9058 31.1444C26.7769 32.4756 26.5908 33.8068 26.3904 35.5674C31.1569 33.134 35.4224 30.7579 38.414 26.6785C38.7719 26.1918 38.915 25.0467 38.6001 24.7175C38.1564 24.2452 37.1258 23.9446 36.4817 24.102C34.3203 24.6459 32.531 25.8483 31.2142 27.6948C30.8277 28.2387 30.3268 28.7111 29.8687 29.212V29.2407Z"
                  fill="black"
                />
                <path
                  d="M8.35156 5.50923C9.29627 4.50727 10.0692 3.6055 10.9281 2.80392C11.973 1.83059 13.1897 1.41548 14.5208 2.20274C15.8663 3.00431 16.1669 4.36412 15.623 5.63805C14.5351 8.14296 13.3042 10.5763 11.973 12.9524C10.513 15.5432 8.90982 18.0338 7.30668 20.5244C7.00609 20.9824 6.40492 21.2544 5.93256 21.6123C5.63198 21.1113 5.0594 20.6246 5.0594 20.1236C5.0594 15.4859 3.4992 11.292 1.66704 7.12669C1.18037 6.01021 0.979977 4.70765 0.908408 3.49098C0.836839 2.1598 1.12313 0.814304 2.66902 0.313321C4.15766 -0.173348 6.00413 0.513714 6.82001 1.97372C7.40688 3.00431 7.77902 4.14942 8.36588 5.50923H8.35156ZM6.86295 11.0344C6.54805 9.07337 6.4049 7.42728 6.00412 5.85276C5.74647 4.83648 5.20253 3.86315 4.64429 2.96138C4.47252 2.6751 3.78548 2.43176 3.4992 2.54628C3.19861 2.6751 2.88369 3.3049 2.94094 3.66275C3.08408 4.60746 3.37035 5.53785 3.69957 6.45394C4.61566 9.03042 5.58899 11.5926 6.51939 14.1691C6.7341 14.7703 6.83431 15.4001 6.97744 16.0299C7.14921 16.0728 7.321 16.1014 7.49276 16.1444C9.36787 13.024 11.2859 9.93219 13.0751 6.76884C13.4759 6.05315 13.4187 5.0655 13.5618 4.20667C13.3042 4.09216 13.0322 3.96334 12.7746 3.84883C10.8995 6.13903 9.01002 8.42924 6.86295 11.0487V11.0344Z"
                  fill="black"
                />
              </svg>

              {/* Wifi */}
              <svg
                width="68"
                height="65"
                viewBox="0 0 68 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[40%] lg:top-[55%] right:[4%] lg:right-[8%] z-5 scale-75 lg:scale-100 hidden md:block"
              >
                <path
                  d="M42.7069 12.857C52.1424 19.8146 55.0281 30.7194 56.523 42.1206C56.8024 44.2789 55.1325 46.748 54.1208 48.9588C53.8865 49.4628 52.6441 49.4982 51.8713 49.7421C51.8306 48.9606 51.7069 48.1706 51.7378 47.389C51.8585 44.3859 52.6375 41.2677 52.0627 38.4054C51.2292 34.2408 49.7945 30.0909 47.965 26.2534C43.5892 17.1476 36.4366 11.7742 26.0416 11.3043C24.7246 11.2481 23.3192 11.4296 22.1136 11.0097C21.0684 10.6384 20.2717 9.57694 19.3551 8.81904C20.2534 8.16848 21.1057 7.05419 22.0531 6.95896C29.4127 6.22883 36.2844 7.5832 42.6955 12.8484L42.7069 12.857Z"
                  fill="black"
                />
                <path
                  d="M38.0351 52.5326C37.7902 50.4716 37.6768 48.4019 37.283 46.3726C35.6446 38.0289 31.6461 31.6911 22.8012 29.4136C21.7389 29.1368 20.9106 27.998 19.9825 27.2316C21.2732 26.678 22.9296 25.3255 23.783 25.7141C27.4057 27.3717 31.226 29.0519 34.1567 31.6576C39.2875 36.1967 41.1647 42.4303 40.7206 49.2325C40.6386 50.5123 39.7207 51.7383 39.1749 52.9926C38.794 52.8326 38.4046 52.684 38.0237 52.524L38.0351 52.5326Z"
                  fill="black"
                />
                <path
                  d="M26.8858 53.796L27.7804 54.4659L27.7532 54.1526L28.0475 54.271L28.2449 53.8339C28.3367 53.6306 28.4355 53.4492 28.5429 53.252C28.6156 53.1185 28.6923 52.9777 28.7735 52.8178C28.955 52.4603 29.136 52.0446 29.1777 51.5968C29.5378 47.7673 28.6097 44.2191 25.7818 41.6903C24.265 40.3269 22.2954 39.46 20.4832 38.6624C20.3829 38.6183 20.2831 38.5743 20.1839 38.5306L20.1831 38.5302C19.9064 38.4087 19.6224 38.4585 19.4214 38.5201C19.21 38.5848 18.9949 38.6929 18.8008 38.801C18.6551 38.8822 18.5023 38.9744 18.3585 39.0611C18.3102 39.0903 18.2628 39.1188 18.2171 39.1461C18.027 39.2597 17.8585 39.3561 17.7094 39.4248L16.9896 39.7567L17.5992 40.2634C17.7026 40.3493 17.807 40.4497 17.9228 40.5644C17.9447 40.5861 17.9673 40.6085 17.9903 40.6314C18.0838 40.7245 18.1855 40.8257 18.2878 40.92C18.5383 41.151 18.8655 41.4125 19.2796 41.5105L19.2811 41.5108C21.5298 42.0355 23.1132 43.0987 24.229 44.5525C25.3525 46.0163 26.0266 47.9089 26.3897 50.1252C26.5073 50.8535 26.5556 51.5778 26.6057 52.3299C26.6298 52.692 26.6544 53.0605 26.6873 53.4391L27.0982 53.4033L26.8798 53.7915L26.8858 53.796Z"
                  fill="black"
                  stroke="black"
                />
              </svg>
              {/* Line 1 */}
              <svg
                width="958"
                height="10"
                viewBox="0 0 958 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[60%] left-[-10%] scale-50 lg:scale-100 hidden xl:block"
              >
                <path
                  d="M957.501 2.72938C642.397 11.4541 326.685 6.19367 11.4297 9.59375C7.77989 9.59375 4.13005 7.66903 0.328125 6.64259C0.480202 5.87276 0.632261 5.10303 0.784338 4.33319C7.77988 3.81997 14.9275 2.92183 21.923 2.92183C172.631 2.72937 323.34 2.79348 474.048 2.47272C624.148 2.15195 774.4 1.38206 924.5 0.804688C935.45 0.804688 946.551 0.804688 957.501 0.804688C957.501 1.44621 957.501 2.08786 957.349 2.72938H957.501Z"
                  fill="black"
                />
              </svg>
              {/* Line 2 */}
              <svg
                width="1349"
                height="9"
                viewBox="0 0 1349 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[10%] right-[-20%] scale-50 lg:scale-100 hidden xl:block"
              >
                <path
                  d="M0.0849609 2.18969C443.957 10.5751 888.686 5.51925 1332.77 8.78711C1337.91 8.78711 1343.05 6.93724 1348.41 5.95072C1348.2 5.21083 1347.98 4.47102 1347.77 3.73113C1337.91 3.23787 1327.84 2.37465 1317.99 2.37465C1105.69 2.18968 893.399 2.25129 681.103 1.943C469.664 1.63472 258.01 0.894763 46.5715 0.339844C31.1473 0.339844 15.509 0.339844 0.0849609 0.339844C0.0849609 0.956421 0.0849609 1.57311 0.299194 2.18969H0.0849609Z"
                  fill="black"
                />
              </svg>

              {/* Programs */}
              <div className="flex flex-row gap-x-[14px] gap-y-8 lg:absolute lg:bottom-0 z-10 xl:min-w-[1220px] lg:flex-nowrap flex-wrap mt-[-100px] md:mt-[-200px] lg:mt-0">
                {[
                  {
                    href: "/bridge/bridge-program",
                    border: "border-[#9688C0]",
                    bg: "bg-[#F4F3F9]",
                    imgSrc: "/images/bridge/calendar.svg",
                    title: "Program Calendar",
                    iconBg: "bg-[#9688C0]",
                  },
                  {
                    href: "/bridge/digital-marketing",
                    border: "border-[#FFCA2D]",
                    bg: "bg-[#FFFAEA]",
                    imgSrc: "/images/bridge/megaphone.svg",
                    title: "Digital Marketing",
                    iconBg: "bg-[#FFCA2D]",
                  },
                  {
                    href: "/bridge/ai",
                    border: "border-[#9688C0]",
                    bg: "bg-[#EBF8FB]",
                    imgSrc: "/images/bridge/ai.svg",
                    title: "AI Full Stack",
                    iconBg: "bg-[#33BED4]",
                  },
                  {
                    href: "/bridge/sustainability",
                    border: "border-[#91C644]",
                    bg: "bg-[#F4F9EC]",
                    imgSrc: "/images/bridge/leaf.svg",
                    title: "Corporate Sustainability",
                    iconBg: "bg-[#91C644]",
                  },
                  {
                    href: "/bridge/ui-ux",
                    border: "border-[#F8A91E]",
                    bg: "bg-[#FEF6E8]",
                    imgSrc: "/images/bridge/pen.svg",
                    title: "UI/UX Design",
                    iconBg: "bg-[#F8A91E]",
                  },
                ].map(({ href, border, bg, imgSrc, title, iconBg }, index) => (
                  <motion.div
                    key={index}
                    variants={bounceIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full md:w-1/4 md:grow-1 lg:w-1/5"
                  >
                    <Link href={href}>
                      <div
                        className={`flex flex-col ${border} ${bg} rounded-[15px] border-[1.5px] gap-y-[13px] justify-center items-center pt-8 pb-[22px] px-[28px] box-shadow-card min-h-[250px] h-full`}
                      >
                        <Image
                          src={imgSrc}
                          alt={title}
                          width={90}
                          height={90}
                        />
                        <h3 className="font-primary text-[18px] lg:text-2xl leading-[30px] font-semibold text-black text-center">
                          {title}
                        </h3>
                        <div
                          className={`${iconBg} rounded-full p-[6px] w-[31.5px] self-end`}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.25 5.36523L14.7959 5.36523L14.7959 14.9112"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14.7959 5.36617L5.25 14.9121"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      {/* Add Impact Report from Homepage */}
      {/* Donation */}
      <div className="bg-[#592AC7] py-16 lg:py-32 md:py-24">
        <div className="max-w-[1240px] flex flex-col m-auto px-5 md:px-8 xl:px-0 gap-y-8 md:gap-y-16">
          <h2 className="text-white text-[40px]  md:text-[40px] lg:text-[64px] leading-[120%] font-semibold text-center font-primary">
            Your Support Matters!
          </h2>
          {/* Donate From.... */}
          <div className="flex flex-row gap-x-[72px] gap-y-8 flex-wrap lg:flex-nowrap  py-0 lg:py-32 ">
            {/* Donate from India */}
            <div className="flex flex-col gap-y-16 w-full lg:w-1/2">
              {/* Text */}
              <div className="flex flex-col gap-y-6">
                <p className="font-secondary font-bold text-[18px] leading-[30px] text-white  text-center lg:text-left">
                  The whole month of December 2024 all the donations will be
                  doubled, thanks to  AVI-USA's
                  <span className="text-[#FFCA2D]"> Match the Donation </span>
                  Campaign!
                  <br />
                  <br />
                  <span className="text-[#FFCA2D]">
                    Sponsor 1 candidate with a donation of US $300 per program
                    and impact 2 lives
                  </span>
                  <br />
                  <br />
                  You may also set up a recurring monthly gift that will ensure
                  a steady and reliable source of funding for the entire
                  duration of the internship.
                </p>
                <p className="font-secondary font-semibold text-2xl md:text-4xl leading-[40px] text-[#FFCA2D]  text-center lg:text-left">
                  Let’s empower one youth at a time and gift them a better
                  future!
                </p>
              </div>
              {/* Donate Button */}
              <div className="flex flex-col gap-y-8 py-12 px-8 md:py-24 md:px-16 bg-white rounded-[15px] justify-center items-center">
                <p className="font-secondary font-normal text-[18px] leading-[30px] text-black  text-center lg:text-left">
                  To donate from India, kindly use this link:
                </p>
                <Link href={"https://donate.auroville.org/"}>
                  <div className="px-8 py-[18px] md:px-[61px] rounded-[15px] bg-[#592AC7] justify-center items-center">
                    <p className="font-secondary font-semibold text-[18px] leading-[150%] text-white  text-center lg:text-left">
                      Donate from India
                    </p>
                  </div>
                </Link>
                <div className="font-secondary font-normal text-[18px] leading-[30px] text-black">
                  <p>Please follow these steps on the donation page:</p>
                  <br />
                  <ul className="list-disc ml-5">
                    <li>
                      Select <strong>'Others'</strong> under Projects to donate,
                    </li>
                    <li>
                      Mention Project name as{" "}
                      <strong>'Yuvabe Bridge Program'</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Donate from Abroad */}
            <div className="w-full lg:w-1/2">
              <motion.div
                className="bg-white p-8 rounded-[30px] md:rounded-[50px] shadow-lg border border-gray-200 w-full lg:max-w-[584px] h-auto lg:h-[850px] flex flex-col justify-between items-center gap-y-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-[32px] md:text-[48px] font-semibold text-[#592Ac7] text-center font-primary">
                  Donate from Anywhere
                </h2>

                {/* FundraiseUp Widget */}
                <a href="#XXVLPPSW" className=""></a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
