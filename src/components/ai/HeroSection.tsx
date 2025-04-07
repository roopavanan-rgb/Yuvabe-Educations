"use client";
import { Button } from "@/components/ai/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Hand Image (Covers Right Side Without Extra Space) */}
      <div className="absolute top-0 right-0 h-full w-auto min-w-[50%] md:min-w-[60%] lg:min-w-[70%] pointer-events-none select-none opacity-80">
        <Image
          src="/ai-images/Object.png"
          alt="hand"
          layout="fill"
          objectFit="fill"
        />
      </div>

      {/* Content */}
      <div className="container px-4 mx-auto relative z-10 pt-32 md:pt-40 lg:pt-48">
        <div className="min-w-3xl text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-left">
            Kickstart Your AI First Full Stack Development Journey:
            <span className="block text-white mt-2">
              3-Month Internship at Yuvabe Education's Bridge Program
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 text-left">
            Gain hands-on experience and master the skills to thrive in Applied AI and Machine Learning. Apply today!
          </p>
          <div className="flex flex-wrap gap-4">
          <Button
            size="lg"
            className="bg-white text-black"
            onClick={() => window.open("https://docs.google.com/forms/d/1je4Sg2PuywkvdQj2B-g7hEAFPy3wapcVlitbeff8IPY/viewform?edit_requested=true", "_blank")}
          >
           APPLY NOW
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="gap-2 border-white"
            onClick={() => window.open("https://www.yuvabe.com/_files/ugd/92aaf3_255bf92fe9ee43929a2fb1dc40ced226.pdf", "_blank")}
          >
          <Download className="w-4 h-4" />
            DOWNLOAD BROCHURE
          </Button>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute text-5xl -top-40  -right-40  opacity-40 blur-2xl border-none w-[500px] h-[500px] border rounded-full bg-gradient-to-r from-[#3991BD] to-blue-300"></div>
    </section>
    

    
    
  );
}




