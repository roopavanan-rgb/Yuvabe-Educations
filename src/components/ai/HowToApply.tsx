"use client";
import React from "react";
import { Button } from "@/components/ai/ui/button";

const HowToApply = () => {
  return (
    <section className="bg-[#0C2F47] py-16 px-4 text-white text-center">
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="text-2xl md:text-3xl font-raleway font-bold">How to Apply</h2>

        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center text-left space-y-4 md:space-y-0 md:space-x-6">
          <span className="text-[85px] font-extrabold bg-gradient-to-r from-[#D3523D] to-[#7A260E] text-transparent bg-clip-text font-['Raleway'] text-center">
            01
          </span>
          <div>
            <h3 className="text-2xl font-bold text-[#D3523D]">
              Submit Your Application
            </h3>
            <p className="text-lg md:text-base">
              Fill in the online form with your details and a brief statement on
              why you<br /> want to join.
            </p>
          </div>
        </div>
        <div className="absolute -right-60 bottom-30 blur-3xl w-80 h-80 border rounded-full bg-gradient-to-r bg-[#3991BD] opacity-60 "></div>


        {/* Step 2 */}
        <div className="flex flex-col md:flex-row items-center text-left space-y-4 md:space-y-0 md:space-x-6">
          <span className="text-[85px] font-extrabold bg-gradient-to-r from-[#4A42C9] to-[#1B1464] text-transparent bg-clip-text font-['Raleway'] text-center">
            02
          </span>
          <div>
            <h3 className="text-2xl font-bold text-[#4A42C9]" >Interview</h3>
            <p className="text-lg md:text-base">
              Shortlisted candidates will be invited for a virtual interview to
              assess<br /> readiness and passion.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center text-left space-y-4 md:space-y-0 md:space-x-6">
          <span className="text-[85px] font-extrabold bg-gradient-to-r from-[#7CB518] to-[#506C00] text-transparent bg-clip-text font-['Raleway'] text-center">
            03
          </span>
          <div>
            <h3 className="text-2xl font-bold text-[#7CB518]">
              Get Started
            </h3>
            <p className="text-lg md:text-base">
              Once selected, you’ll receive materials and guidance to begin
              your AI/ML <br />journey with us.
            </p>
          </div>
        </div>
      </div>


      {/* Join the AI/ML Revolution Card */}
      <div className=" mt-16 p-8 border border-[#58AEE9] rounded-3xl text-center max-w-4xl mx-auto">
      
        <h3 className="text-2xl font-bold">Join the AI/ML Revolution!</h3>
        <p className="mt-4 text-base max-w-2xl mx-auto">
          Gain the skills, network, and experience you need to stand out in the competitive AI and ML fields. Apply now and be part of a program that transforms careers.
        </p>
        <div className="absolute right-80 bottom-80 blur-3xl w-96 h-96 rounded-full bg-gradient-to-r from-[#394BBD] to-[#A339BD] opacity-15 pointer-events-none"></div>


        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-8">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-[#58AEE9]"
            onClick={() => window.open("https://docs.google.com/forms/d/1je4Sg2PuywkvdQj2B-g7hEAFPy3wapcVlitbeff8IPY/viewform?edit_requested=true", "_blank")}
          >
            APPLY NOW
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="gap-2 border-white bg-[#0C2A41] hover:bg-blue-950"
            onClick={() => window.open("https://www.yuvabe.com/_files/ugd/92aaf3_255bf92fe9ee43929a2fb1dc40ced226.pdf", "_blank")}
          >
            DOWNLOAD BROCHURE
          </Button>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className=" mt-16 text-center">
        <h2 className="text-2xl font-bold font-raleway">Contact Us</h2>
        <p className="mt-4">
          For any questions, use the form below or reach out to our team directly at <strong>info@yuvabe.com</strong>
        </p>

        {/* Follow Us on Social Media */}
        <h3 className="mt-16 text-lg font-bold font-sans">Follow us on Social Media</h3>

        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center space-x-6">
          <img src="/icons/tx.svg" alt="X" className="w-10 h-10 bg-white p-1 rounded-lg" />

          <img src="/icons/insta1.svg" alt="Instagram" className="w-10 h-10 rounded" />
          <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-10 h-10 rounded-square" />
        </div>

        {/* Logos */}
        <div className="mt-16 flex justify-center space-x-8">
          <img src="/icons/yuvabelogo.svg" alt="Yuvabe Logo" className="w-32 h-12 rounded-lg" />
          <img src="/icons/steamlogo.svg" alt="Steam Logo" className="w-38 h-12 rounded-lg" />
        </div>
      </div>
      <div className="absolute text-3xl -bottom-5 right-5 opacity-10 blur-2xl border-none w-80 h-80  rounded-full bg-gradient-to-r bg-[#3991BD]"></div>

    </section>
  );
};

export default HowToApply;
