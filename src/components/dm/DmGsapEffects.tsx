"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin, SplitText);

/**
 * Page-level GSAP effects for the Digital Marketing page. Sections opt in
 * through data attributes, so components stay free of animation wiring:
 *
 * - every section `h2`        → words rise into view on scroll
 * - data-gsap="lines"         → paragraph lines rise into view on scroll
 * - data-gsap="scramble"      → text scrambles into place on scroll
 * - data-gsap="tilt"          → 3D tilt + cursor spotlight on hover
 *   (with a child marked data-gsap-spotlight)
 * - data-gsap="lift"          → card lifts on hover, child data-gsap-icon pops
 *
 * Render it once, inside the element given by `scope`, after the sections.
 */
export default function DmGsapEffects({ scope }: { scope: string }) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(scope);
    if (!root) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const cleanups: (() => void)[] = [];
      const q = (sel: string) => Array.from(root.querySelectorAll<HTMLElement>(sel));

      // Section headings
      q("section h2").forEach((heading) => {
        SplitText.create(heading, {
          type: "words",
          mask: "words",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.words, {
              yPercent: 110,
              duration: 0.8,
              ease: "power4.out",
              stagger: 0.06,
              scrollTrigger: { trigger: heading, start: "top 88%", once: true },
            }),
        });
      });

      // Paragraph line reveals
      q('[data-gsap="lines"]').forEach((el) => {
        SplitText.create(el, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, {
              yPercent: 100,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.08,
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            }),
        });
      });

      // Scrambled numbers / labels
      q('[data-gsap="scramble"]').forEach((el) => {
        const text = el.textContent ?? "";
        gsap.to(el, {
          duration: 1.2,
          scrambleText: { text, chars: "0123456789", revealDelay: 0.3, speed: 0.4 },
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });

      // Hover interactions only make sense with a precise pointer
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        // 3D tilt + spotlight
        q('[data-gsap="tilt"]').forEach((card) => {
          const spotlight = card.querySelector<HTMLElement>("[data-gsap-spotlight]");
          gsap.set(card, { transformPerspective: 900 });
          const rotX = gsap.quickTo(card, "rotationX", { duration: 0.5, ease: "power3" });
          const rotY = gsap.quickTo(card, "rotationY", { duration: 0.5, ease: "power3" });

          const onMove = (e: PointerEvent) => {
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width;
            const py = (e.clientY - r.top) / r.height;
            rotY((px - 0.5) * 10);
            rotX((0.5 - py) * 10);
            if (spotlight) {
              spotlight.style.setProperty("--x", `${px * 100}%`);
              spotlight.style.setProperty("--y", `${py * 100}%`);
            }
          };
          const onEnter = () => {
            gsap.to(card, { scale: 1.02, duration: 0.4, ease: "power3.out" });
            if (spotlight) gsap.to(spotlight, { autoAlpha: 1, duration: 0.3 });
          };
          const onLeave = () => {
            rotX(0);
            rotY(0);
            gsap.to(card, { scale: 1, duration: 0.5, ease: "power3.out" });
            if (spotlight) gsap.to(spotlight, { autoAlpha: 0, duration: 0.4 });
          };

          card.addEventListener("pointermove", onMove);
          card.addEventListener("pointerenter", onEnter);
          card.addEventListener("pointerleave", onLeave);
          cleanups.push(() => {
            card.removeEventListener("pointermove", onMove);
            card.removeEventListener("pointerenter", onEnter);
            card.removeEventListener("pointerleave", onLeave);
          });
        });

        // Hover lift
        q('[data-gsap="lift"]').forEach((card) => {
          const icon = card.querySelector<SVGElement>("[data-gsap-icon]");
          const onEnter = () => {
            gsap.to(card, { y: -6, duration: 0.35, ease: "power3.out" });
            if (icon)
              gsap.fromTo(
                icon,
                { rotate: 0, scale: 1 },
                { rotate: -12, scale: 1.2, duration: 0.25, yoyo: true, repeat: 1, ease: "power2.out" }
              );
          };
          const onLeave = () => gsap.to(card, { y: 0, duration: 0.45, ease: "power3.out" });

          card.addEventListener("pointerenter", onEnter);
          card.addEventListener("pointerleave", onLeave);
          cleanups.push(() => {
            card.removeEventListener("pointerenter", onEnter);
            card.removeEventListener("pointerleave", onLeave);
          });
        });
      }

      return () => cleanups.forEach((fn) => fn());
    });

    return () => mm.revert();
  }, [scope]);

  return null;
}
