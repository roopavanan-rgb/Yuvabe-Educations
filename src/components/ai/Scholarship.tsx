"use client";
import React from "react";
import { Button } from "@/components/ai/ui/button";

const Scholarship = () => {
  return (
    <section className="bg-[#0C2F47] py-16 px-4 text-white text-center">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Scholarship Card */}
        <div className="p-6 md:p-8 bg-transparent border border-[#58AEE9] rounded-3xl">
          <h3 className="text-lg md:text-xl font-semibold">Scholarship Opportunities</h3>
          <ul className="mt-3 space-y-2 text-sm md:text-base">
            <li>• Limited scholarships available based on merit and need</li>
            <li>• Apply now to see if you qualify for financial aid</li>
          </ul>
        </div>

        {/* How to Apply Section */}
        <div>
          <h2 className="mt-16 text-xl md:text-2xl font-bold">Starts from December 2nd, 2024</h2>
          <p className="mt-4 text-sm md:text-base max-w-2xl mx-auto">
            <strong>Invest in your future</strong> and take the next big step toward becoming an AI and ML professional.
            Click below to secure your spot and explore flexible payment options.
          </p>
          <Button
            size="lg"
            className="bg-white text-black mt-6"
            onClick={() => window.open("https://docs.google.com/forms/d/1je4Sg2PuywkvdQj2B-g7hEAFPy3wapcVlitbeff8IPY/viewform?edit_requested=true", "_blank")}
          >
           ENROLL NOW
          </Button>

        </div>

      </div>
    </section>
  );
};

export default Scholarship;
