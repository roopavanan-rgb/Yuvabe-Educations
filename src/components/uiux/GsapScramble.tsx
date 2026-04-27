"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

interface Props {
  children: string;
  className?: string;
  delay?: number;
  speed?: number;
  chars?: string;
  scrollTriggered?: boolean;
}

export default function GsapScramble({
  children,
  className,
  delay = 0,
  speed = 0.45,
  chars = "upperAndLowerCase",
  scrollTriggered = false,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const finalText = children;
    const duration = Math.max(0.8, finalText.length * 0.042);

    const scrambleConfig = {
      duration,
      scrambleText: {
        text: finalText,
        chars,
        speed,
        revealDelay: 0.25,
      },
      delay,
    };

    const tween = scrollTriggered
      ? gsap.to(el, {
          ...scrambleConfig,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        })
      : gsap.to(el, scrambleConfig);

    return () => {
      tween.kill();
    };
  }, [children, delay, speed, chars, scrollTriggered]);

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  );
}
