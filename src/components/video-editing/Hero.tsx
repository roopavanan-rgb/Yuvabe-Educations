"use client";

import { useEffect, useRef } from "react";
import { VE_APPLY_URL } from "./data";

const pad = (n: number) => String(n).padStart(2, "0");

/** Runs `cb(seconds)` every animation frame; skipped for reduced-motion users. */
function useClock(cb: (s: number) => void) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = () => {
      cb((performance.now() - t0) / 1000);
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

function Timecode() {
  const ref = useRef<HTMLSpanElement>(null);
  useClock((s) => {
    if (ref.current)
      ref.current.textContent = `00:${pad(Math.floor(s / 60) % 60)}:${pad(
        Math.floor(s) % 60
      )}:${pad(Math.floor((s * 25) % 25))}`;
  });
  return (
    <span ref={ref} className="tabular-nums">
      00:00:00:00
    </span>
  );
}

function Playhead() {
  const ref = useRef<HTMLDivElement>(null);
  useClock((s) => {
    if (ref.current) ref.current.style.left = `${((s % 20) / 20) * 100}%`;
  });
  return (
    <div className="pointer-events-none absolute left-16 right-0 top-2 -bottom-1">
      <div ref={ref} className="absolute inset-y-0 left-[12%] w-0">
        <div className="absolute -left-[7px] top-0 h-3 w-3.5 rounded-[3px_3px_7px_7px] bg-[#F7C028]" />
        <div className="absolute -left-px top-1.5 bottom-0 w-0.5 bg-[#F7C028]" />
      </div>
    </div>
  );
}

const corner = "absolute h-9 w-9 border-[#F7C028]";
const clip =
  "truncate rounded-md px-3 py-[11px] font-primary text-sm font-semibold cursor-default transition duration-200 hover:brightness-125 hover:-translate-y-0.5 hover:shadow-[0_8px_18px_-8px_rgba(0,0,0,0.9)]";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 pb-10 pt-10 sm:px-8 md:pb-16 md:pt-[72px] lg:px-14">
      <div className="relative flex flex-col gap-[26px] px-5 py-8 sm:px-10 md:py-16 lg:px-14">
        <span className={`${corner} left-0 top-0 border-l-[3px] border-t-[3px]`} />
        <span className={`${corner} right-0 top-0 border-r-[3px] border-t-[3px]`} />
        <span className={`${corner} bottom-0 left-0 border-b-[3px] border-l-[3px]`} />
        <span className={`${corner} bottom-0 right-0 border-b-[3px] border-r-[3px]`} />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="whitespace-nowrap rounded-full bg-[#26252C] px-5 py-2.5 font-primary text-[11px] font-bold tracking-[0.1em] text-white sm:text-[13px]">
            YUVABE EDUCATION · VIDEO TRAINING PROGRAM
          </div>
          <div className="flex items-center gap-2.5 font-mono text-sm text-white">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#E63946] shadow-[0_0_0_4px_rgba(230,57,70,0.25)]" />
            <span className="font-bold tracking-[0.1em] text-[#E63946]">REC</span>
            <Timecode />
          </div>
        </div>

        <h1 className="m-0 max-w-[1000px] text-balance font-primary text-[40px] font-bold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl lg:text-[80px]">
          Make Professional Videos{" "}
          <span className="text-[#F7C028]">with AI and Premiere Pro</span>
        </h1>
        <p className="m-0 max-w-[720px] text-[17px] leading-normal text-[#C9C8D0] md:text-[21px]">
          An 8-week, part-time program in AI video generation, video production
          and Adobe Premiere Pro
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href={VE_APPLY_URL}
            data-ve="magnetic"
            className="group flex items-center gap-3.5 whitespace-nowrap rounded-full bg-[#F7C028] py-2 pl-7 pr-2 font-primary text-base font-bold tracking-[0.06em] text-[#121212] transition hover:bg-[#FFD65C] hover:text-[#121212] hover:shadow-[0_10px_30px_-8px_rgba(247,192,40,0.6)] active:scale-95"
          >
            APPLY NOW
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#121212] text-xl text-[#F7C028] transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-45">
              →
            </span>
          </a>
          <a
            href="#learn"
            className="group flex items-center gap-2.5 whitespace-nowrap rounded-full border-[1.5px] border-[#4A4952] px-[26px] py-3 font-primary text-[15px] font-semibold text-white transition hover:border-[#F7C028] hover:bg-white/5 hover:text-white active:scale-95"
          >
            <span className="text-[11px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-[#F7C028]">▶</span> View Modules
          </a>
        </div>
      </div>

      {/* Editing-timeline overview of the 8 weeks */}
      <div className="mt-7 overflow-hidden rounded-[20px] bg-[#222127]">
        <div className="flex items-center gap-6 border-b border-[#2E2D35] bg-[#1B1A20] px-[18px] font-primary text-xs font-semibold tracking-[0.08em]">
          <span className="border-b-2 border-[#F7C028] py-3 text-white">
            TIMELINE · 8 WEEKS
          </span>
          <span className="py-3 text-[#77767F]">16 SESSIONS · 32 HOURS</span>
        </div>
        <div className="overflow-x-auto px-4 pb-[18px] pt-4">
          <div data-ve="track" className="relative grid min-w-[720px] grid-cols-[64px_minmax(0,1fr)] gap-y-2">
            <span className="self-end font-primary text-[11px] font-bold tracking-[0.1em] text-[#F7C028]">
              LEARN
            </span>
            <div className="grid grid-cols-8 font-mono text-[11px] text-[#8E8D96]">
              {Array.from({ length: 8 }, (_, i) => (
                <span key={i} className="border-l border-[#3A3942] pl-1.5">
                  WK {i + 1}
                </span>
              ))}
            </div>

            <span className="self-center font-primary text-xs font-semibold text-[#A9A8B2]">V2</span>
            <div className="grid grid-cols-8 gap-1 text-white">
              <div data-ve-item className={`${clip} col-[5/7] bg-[#5E4699]`}>AI Video Generation</div>
              <div data-ve-item className={`${clip} col-[7/8] bg-[#5E4699]`}>AI + Premiere</div>
            </div>

            <span className="self-center font-primary text-xs font-semibold text-[#A9A8B2]">V1</span>
            <div className="grid grid-cols-8 gap-1 text-white">
              <div data-ve-item className={`${clip} col-[1/3] bg-[#6B2CE0]`}>
                Video Foundations &amp; Storytelling
              </div>
              <div data-ve-item className={`${clip} col-[3/5] bg-[#6B2CE0]`}>
                Editing in Adobe Premiere Pro
              </div>
              <div data-ve-item className={`${clip} col-[8/9] bg-[#F7C028] font-bold text-[#121212]`}>
                Final Project
              </div>
            </div>

            <span className="self-center font-primary text-xs font-semibold text-[#A9A8B2]">A1</span>
            <div
              data-ve-item
              className={`${clip} bg-[#1E8F8A] bg-no-repeat text-white`}
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg,transparent 0 6px,rgba(255,255,255,0.25) 6px 8px)",
                backgroundSize: "62% 60%",
                backgroundPosition: "right 12px center",
              }}
            >
              Colour, Sound &amp; Voice-over
            </div>

            <Playhead />
          </div>
        </div>
      </div>
    </section>
  );
}
