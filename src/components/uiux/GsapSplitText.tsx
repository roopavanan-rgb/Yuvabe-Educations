"use client";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface Props {
  children: ReactNode;
  className?: string;
  type?: "chars" | "words";
  stagger?: number;
  duration?: number;
  delay?: number;
}

export default function GsapSplitText({
  children,
  className,
  type = "words",
  stagger = 0.08,
  duration = 0.7,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const split = SplitText.create(el, { type });
    const targets = type === "chars" ? split.chars : split.words;

    const tween = gsap.fromTo(
      targets,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        ease: "power3.out",
        stagger,
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      }
    );

    return () => {
      tween.kill();
      split.revert();
    };
  }, [type, stagger, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  );
}
