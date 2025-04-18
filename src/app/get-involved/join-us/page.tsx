"use client";
import JDS from "@/components/JDS";
import React from "react";
import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

export default function Join_Us() {
  const Player = dynamic(
    () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
    { ssr: false }
  );
  const Controls = dynamic(
    () =>
      import("@lottiefiles/react-lottie-player").then((mod) => mod.Controls),
    { ssr: false }
  );

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <>
      {/* Wrapper */}
      <div className="bg-white pb-16 xl:pb-32 md:pb-24 xl:pt-[85px] pt-16 md:pt-24">
        <div className="max-w-[1240px] flex flex-col m-auto">
          {/* Join Us */}
          <div className="flex flex-row gap-x-[150px] gap-y-16 justify-between p-5 md:pb-0 flex-wrap xl:flex-nowrap">
            {/* Left */}
            <div className="flex flex-col gap-y-8 gap-x-4 w-full xl:w-[50%] justify-center">
              <h1 className="font-primary font-semibold leading-[120%] text-[40px]  md:text-[62px] lg:text-[64px] text-[#592AC7] text-center lg:text-left">
                Come Join Us!
              </h1>
              <p className="font-secondary font-normal text-black text-[18px] leading-[120%] text-center lg:text-left">
                <strong>
                  Yuvabe is redefining the future of work with our #Work.
                  #Serve. #Evolve. (WSE) model!
                </strong>
                <br />
                <br />
                Based in Auroville, an experimental, international community in
                southern India, we’re on a mission to blend purpose, innovation,
                and impact. Join us in shaping a world where work npmisn’t just
                a job, it’s a journey.
              </p>
            </div>
            {/* Right */}
            <div className="w-full xl:w-[50%] flex justify-center  xl:justify-end">
              {mounted && (
                <Player
                  autoplay
                  speed={0.75}
                  loop={false}
                  keepLastFrame
                  src="/images/join-us/ai-team.json"
                  style={{ height: "100%", width: "100%" }}
                  className="lg:mt-[-50px]"
                >
                  <Controls
                    visible={false}
                    buttons={["play", "repeat", "frame", "debug"]}
                  />
                </Player>
              )}
            </div>
          </div>
        </div>

        <JDS />
      </div>
    </>
  );
}
