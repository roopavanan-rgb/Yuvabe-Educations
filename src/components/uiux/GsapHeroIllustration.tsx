"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function GsapHeroIllustration() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { x: 72, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.1, ease: "power3.out", delay: 0.25 }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="absolute bottom-0 right-0 w-[52%] lg:w-[44%] hidden md:block pointer-events-none opacity-0"
    >
      <Image
        src="/images/uiux/hero-illustration.svg"
        alt="UI/UX Design Illustration"
        width={680}
        height={560}
        className="w-full h-auto object-contain object-bottom"
        priority
      />
    </div>
  );
}
