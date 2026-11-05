"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * Page-level GSAP effects for the AI Video Production page. Sections opt in
 * through data attributes:
 *
 * - every section `h2`        → words rise into view on scroll
 * - data-ve="stagger"         → children marked data-ve-item fade up in sequence
 * - data-ve="clips"           → children marked data-ve-item slide in like clips
 *                               dropped onto a timeline
 * - data-ve="track"           → hero timeline clips grow from their in-point
 * - data-ve="keyframes"       → enrollment line draws with scroll, diamonds pop
 * - data-ve="tilt"            → 3D tilt + spotlight (child data-ve-spotlight)
 * - data-ve="magnetic"        → element is pulled towards the cursor
 *
 * Also draws a scroll-progress "playhead" bar along the bottom of the screen.
 * Render once, inside the element given by `scope`, after the sections.
 */
export default function VeEffects({ scope }: { scope: string }) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(scope);
    if (!root) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const cleanups: (() => void)[] = [];
      const q = (sel: string, el: ParentNode = root) =>
        Array.from(el.querySelectorAll<HTMLElement>(sel));
      const on = (el: HTMLElement, type: string, fn: EventListener) => {
        el.addEventListener(type, fn);
        cleanups.push(() => el.removeEventListener(type, fn));
      };

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

      // CSS hover transitions would fight GSAP's inline values mid-tween, so
      // they are paused for the reveal and handed back once it finishes.
      const freeze = (els: HTMLElement[]) => gsap.set(els, { transition: "none" });
      const release = (els: HTMLElement[]) => {
        gsap.set(els, { clearProps: "transition,transform,opacity,visibility,clipPath" });
      };

      // Generic staggered fade-up
      q('[data-ve="stagger"]').forEach((group) => {
        const items = q("[data-ve-item]", group);
        if (!items.length) return;
        freeze(items);
        gsap.from(items, {
          y: 28,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: group, start: "top 85%", once: true },
          onComplete: () => release(items),
        });
      });

      // Clips sliding onto the timeline
      q('[data-ve="clips"]').forEach((group) => {
        q("[data-ve-item]", group).forEach((clip, i) => {
          freeze([clip]);
          gsap.from(clip, {
            onComplete: () => release([clip]),
            x: i % 2 ? 80 : -80,
            autoAlpha: 0,
            clipPath: "inset(0 100% 0 0 round 8px)",
            duration: 0.9,
            ease: "power4.out",
            scrollTrigger: { trigger: clip, start: "top 90%", once: true },
          });
        });
      });

      // Hero timeline: clips grow from their in-point on load
      q('[data-ve="track"] [data-ve-item]').forEach((clip, i) => {
        freeze([clip]);
        gsap.from(clip, {
          onComplete: () => release([clip]),
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.9,
          delay: 0.4 + i * 0.12,
          ease: "power3.inOut",
        });
      });

      // Enrollment keyframes
      q('[data-ve="keyframes"]').forEach((group) => {
        const line = group.querySelector<HTMLElement>("[data-ve-line]");
        if (line)
          gsap.fromTo(
            line,
            { scaleX: 0 },
            {
              scaleX: 1,
              transformOrigin: "left center",
              ease: "none",
              scrollTrigger: { trigger: group, start: "top 80%", end: "bottom 60%", scrub: true },
            }
          );
        gsap.from(q("[data-ve-diamond]", group), {
          scale: 0,
          rotate: -135,
          duration: 0.6,
          ease: "back.out(2.5)",
          stagger: 0.25,
          scrollTrigger: { trigger: group, start: "top 80%", once: true },
        });
      });

      // Scroll progress playhead along the bottom of the viewport
      const bar = document.createElement("div");
      bar.setAttribute("aria-hidden", "true");
      Object.assign(bar.style, {
        position: "fixed",
        left: "0",
        right: "0",
        bottom: "0",
        height: "3px",
        background: "#F7C028",
        transformOrigin: "left center",
        transform: "scaleX(0)",
        zIndex: "40",
        pointerEvents: "none",
        boxShadow: "0 0 12px rgba(247,192,40,0.6)",
      });
      document.body.appendChild(bar);
      const progress = ScrollTrigger.create({
        trigger: root,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => gsap.set(bar, { scaleX: self.progress }),
      });
      cleanups.push(() => {
        progress.kill();
        bar.remove();
      });

      // Hover interactions only make sense with a precise pointer
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        q('[data-ve="tilt"]').forEach((card) => {
          const spotlight = card.querySelector<HTMLElement>("[data-ve-spotlight]");
          gsap.set(card, { transformPerspective: 900 });
          const rotX = gsap.quickTo(card, "rotationX", { duration: 0.5, ease: "power3" });
          const rotY = gsap.quickTo(card, "rotationY", { duration: 0.5, ease: "power3" });

          on(card, "pointermove", (e) => {
            const { clientX, clientY } = e as PointerEvent;
            const r = card.getBoundingClientRect();
            const px = (clientX - r.left) / r.width;
            const py = (clientY - r.top) / r.height;
            rotY((px - 0.5) * 12);
            rotX((0.5 - py) * 12);
            spotlight?.style.setProperty("--x", `${px * 100}%`);
            spotlight?.style.setProperty("--y", `${py * 100}%`);
          });
          on(card, "pointerenter", () => {
            gsap.to(card, { scale: 1.03, duration: 0.4, ease: "power3.out" });
            if (spotlight) gsap.to(spotlight, { autoAlpha: 1, duration: 0.3 });
          });
          on(card, "pointerleave", () => {
            rotX(0);
            rotY(0);
            gsap.to(card, { scale: 1, duration: 0.5, ease: "power3.out" });
            if (spotlight) gsap.to(spotlight, { autoAlpha: 0, duration: 0.4 });
          });
        });

        q('[data-ve="magnetic"]').forEach((el) => {
          const x = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" });
          const y = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" });
          on(el, "pointermove", (e) => {
            const { clientX, clientY } = e as PointerEvent;
            const r = el.getBoundingClientRect();
            x((clientX - (r.left + r.width / 2)) * 0.25);
            y((clientY - (r.top + r.height / 2)) * 0.35);
          });
          on(el, "pointerleave", () => {
            x(0);
            y(0);
          });
        });
      }

      return () => cleanups.forEach((fn) => fn());
    });

    return () => mm.revert();
  }, [scope]);

  return null;
}
