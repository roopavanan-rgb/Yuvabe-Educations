"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  src: string;
  /** Positioning classes — applied to the outer wrapper div */
  className?: string;
  /** Sizing / other classes for the Image itself */
  imageClassName?: string;
  width?: number;
  height?: number;
  /** Initial rotation (degrees) before entry animation */
  startRotation?: number;
  /** Rotation range added as user scrolls through the element */
  scrollRotation?: number;
}

export default function GsapParallaxSvg({
  src,
  className,
  imageClassName,
  width = 300,
  height = 300,
  startRotation = -18,
  scrollRotation = 28,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // ── Entry: scale + rotate + fade in on scroll ─────────────────────────
      gsap.fromTo(
        el,
        { scale: 0.65, rotation: startRotation, opacity: 0 },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            once: true,
          },
        }
      );

      // ── Parallax rotation as page scrolls ─────────────────────────────────
      gsap.to(el, {
        rotation: scrollRotation,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 2.5,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [startRotation, scrollRotation]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        className={imageClassName ?? "w-full h-auto"}
        aria-hidden
      />
    </div>
  );
}
