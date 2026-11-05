"use client";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { DM_APPLY_URL } from "./programDetails";

gsap.registerPlugin(SplitText);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Intro text sequence
      const title = SplitText.create(titleRef.current, { type: "chars,words" });
      const subline = SplitText.create(sublineRef.current, { type: "words" });
      const intro = SplitText.create(introRef.current, {
        type: "lines",
        mask: "lines",
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(eyebrowRef.current, {
        y: 16,
        autoAlpha: 0,
        letterSpacing: "0.6em",
        duration: 0.9,
      })
        .from(
          title.chars,
          {
            yPercent: 110,
            rotateX: -80,
            autoAlpha: 0,
            transformOrigin: "50% 100%",
            stagger: 0.025,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          subline.words,
          { y: 20, autoAlpha: 0, stagger: 0.04, duration: 0.6 },
          "-=0.4"
        )
        .from(
          intro.lines,
          { yPercent: 100, stagger: 0.08, duration: 0.7 },
          "-=0.3"
        )
        .from(
          glowRef.current,
          { scale: 0.4, autoAlpha: 0, duration: 1.6, ease: "power2.out" },
          0
        );

      // Glow follows the cursor; headline drifts slightly against it
      const glowX = gsap.quickTo(glowRef.current, "x", { duration: 0.8, ease: "power3" });
      const glowY = gsap.quickTo(glowRef.current, "y", { duration: 0.8, ease: "power3" });
      const contentX = gsap.quickTo(contentRef.current, "x", { duration: 1, ease: "power3" });
      const contentY = gsap.quickTo(contentRef.current, "y", { duration: 1, ease: "power3" });

      const onMove = (e: PointerEvent) => {
        const rect = section.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        glowX(relX * 0.6);
        glowY(relY * 0.6);
        contentX(relX * -0.015);
        contentY(relY * -0.015);
      };
      const onLeave = () => {
        glowX(0);
        glowY(0);
        contentX(0);
        contentY(0);
      };

      section.addEventListener("pointermove", onMove);
      section.addEventListener("pointerleave", onLeave);

      return () => {
        section.removeEventListener("pointermove", onMove);
        section.removeEventListener("pointerleave", onLeave);
        title.revert();
        subline.revert();
        intro.revert();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[80vh] bg-[#140F20] flex flex-col justify-center items-center text-center text-white overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div ref={glowRef} className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 blur-3xl w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,_rgba(151,99,70,0.6)_0%,_rgba(20,15,32,0)_70%)] opacity-50 z-0"></div>

      {/* Hero Content */}
      <div ref={contentRef} className="max-w-5xl z-30 mt-10 [perspective:800px]">
        <p ref={eyebrowRef} className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-white">
          Yuvabe Education · Bridge Program
        </p>
        <h1 ref={titleRef} className="mt-4 text-3xl sm:text-5xl md:text-6xl  font-bold text-[#FFCA2D] leading-tight">
          Digital Marketing{" "}
          <span className="italic text-[#EFDFB1]">for the AI Era</span>
        </h1>
        <p ref={sublineRef} className="mt-6 text-base sm:text-lg md:text-2xl font-sans font-semibold">
          A free, 16-week, AI-first digital marketing course in Auroville
        </p>
        <p ref={introRef} className="mt-6 max-w-4xl mx-auto text-sm sm:text-base md:text-lg font-sans font-normal leading-relaxed">
          AI tools now write first drafts, design visuals, run ad bidding and
          automate entire workflows. Employers want people who understand
          marketing fundamentals and know how to get real work out of these
          tools. This course teaches both, through hands-on projects on a real
          brand from your first week to your last.
        </p>
        {/* CTA Buttons */}

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 hidden">
          <Link
            href={DM_APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFCA2D] text-black px-6 md:px-8 py-2 rounded-2xl font-semibold hover:bg-yellow-500 transition text-center"
          >
            Apply Now
          </Link>

          <Link
            href="/docs/DM Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#E8AC35] text-[#FFCA2D] px-6 md:px-8 py-2 rounded-2xl font-semibold hover:bg-yellow-400 hover:text-black transition text-center"
          >
            Download Brochure
          </Link>
        </div>
      </div>
    </section>
  );
}
