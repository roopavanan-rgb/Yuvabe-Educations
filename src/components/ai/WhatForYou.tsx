"use client";
import { Card, CardContent } from "@/components/ai/ui/card";

export function WhatForYou() {
  return (
    <section className="py-16 md:py-24 flex justify-center bg-[#0C2F47]">
    <div className="max-w-[850px] flex items-center justify-center">
      <Card className="bg-[#0C2F47] border border-[#58AEE9] rounded-3xl w-full h-full flex items-center justify-center">
        <CardContent className="p-6 md:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-raleway font-bold text-white mb-4">
            What's In It For You?
          </h2>
          <p className="text-2xl sm:text-lg md:text-xl text-white font-sans font-bold">
            Our 3-month AI First Full Stack Internship is designed to provide hands-on experience. You won’t just
            learn the theory—you’ll apply it to real-world problems, gaining the kind of practical skills that make
            you stand out to employers.
          </p>
        </CardContent>
      </Card>
        </div>
      <div className="absolute text-5xl -left-60 bottom-200  blur-3xl border-none w-96 h-96 border rounded-full bg-gradient-to-r bg-[#3991BD] opacity-30"></div>
    </section>

  );
}
