"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import gsap from "gsap";
import { phases, weeks } from "./data";

/** How long each week stays on the monitor while playing. */
const WEEK_MS = 6000;

export default function ModulesMonitor() {
  const [wk, setWk] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0); // 0–1 progress through the current week
  const screenRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);
  const elapsedRef = useRef(0);
  useEffect(() => {
    elapsedRef.current = elapsed;
  }, [elapsed]);

  const go = useCallback((d: number) => {
    setWk((w) => (w + d + 8) % 8);
    setElapsed(0);
  }, []);
  const select = (i: number) => {
    setWk(i);
    setElapsed(0);
  };

  // Autoplay: advance the playhead, then cut to the next week
  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    let start = performance.now() - elapsedRef.current * WEEK_MS;
    const tick = (now: number) => {
      const p = (now - start) / WEEK_MS;
      if (p >= 1) {
        start = now;
        setWk((w) => (w + 1) % 8);
        setElapsed(0);
      } else {
        setElapsed(p);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // Restarts on week change so manual skips reset the playhead.
  }, [playing, wk]);

  // Pause autoplay when the monitor scrolls out of view
  useEffect(() => {
    const el = screenRef.current;
    if (!el || !playing) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) setPlaying(false);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [playing]);

  // "Cut" transition whenever the week changes
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const el = screenRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tl = gsap.timeline();
    tl.fromTo(
      el.querySelectorAll("[data-cut]"),
      { y: 18, autoAlpha: 0, filter: "blur(6px)" },
      { y: 0, autoAlpha: 1, filter: "blur(0px)", duration: 0.5, stagger: 0.07, ease: "power3.out" }
    ).fromTo(
      el.querySelector("[data-flash]"),
      { autoAlpha: 0.35 },
      { autoAlpha: 0, duration: 0.35, ease: "power2.out" },
      0
    );
    return () => {
      tl.kill();
    };
  }, [wk]);

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    } else if (e.key === " " || e.key === "k") {
      e.preventDefault();
      setPlaying((p) => !p);
    }
  };

  const cur = weeks[wk];
  const phase = phases[Math.floor(wk / 2)];
  const n = String(wk + 1).padStart(2, "0");
  const secs = String(Math.floor(elapsed * 60)).padStart(2, "0");

  return (
    <div
      role="region"
      aria-label="Course modules, week by week. Use left and right arrow keys to change week, space to play or pause."
      tabIndex={0}
      onKeyDown={onKey}
      className="flex flex-col gap-7 rounded-[22px] outline-none focus-visible:ring-2 focus-visible:ring-[#F7C028]/60 focus-visible:ring-offset-4 focus-visible:ring-offset-[#19191B]"
    >
      {/* Program monitor */}
      <div className="rounded-[20px] bg-[#222127] p-2.5">
        <div
          ref={screenRef}
          aria-live="polite"
          className="relative flex min-h-[300px] flex-col justify-center gap-4 overflow-hidden rounded-[14px] bg-black p-7 md:min-h-[400px] md:p-14"
        >
          <div data-flash className="pointer-events-none absolute inset-0 bg-white opacity-0" />
          <div className="pointer-events-none absolute inset-4 rounded-md border border-dashed border-white/15" />
          <div className="absolute left-[30px] right-[30px] top-[26px] flex justify-between gap-3 font-mono text-xs tracking-[0.08em] text-[#8E8D96]">
            <span>WEEK {n} / 08</span>
            <span className="flex items-center gap-2 text-[#F7C028]">
              <span
                className={`inline-block h-2 w-2 ${
                  playing ? "animate-pulse rounded-full bg-[#E63946]" : "bg-[#F7C028]"
                }`}
              />
              {playing ? "PLAYING" : phase.short}
            </span>
          </div>
          <span
            data-cut
            className="relative font-primary text-[13px] font-semibold tracking-[0.12em] text-[#F7C028]"
          >
            {phase.weeks}: {phase.name}
          </span>
          <h3
            data-cut
            className="relative m-0 max-w-[800px] text-balance font-primary text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[46px]"
          >
            {cur.t}
          </h3>
          <p
            data-cut
            className="relative m-0 max-w-[760px] text-[15px] leading-relaxed text-[#C9C8D0] md:text-lg"
          >
            {cur.d}
          </p>
          {/* scrub bar */}
          <div className="absolute bottom-[26px] left-[30px] right-[30px] h-[3px] overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full origin-left bg-[#F7C028]"
              style={{ transform: `scaleX(${playing ? elapsed : 0})` }}
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 px-2.5 pb-1.5 pt-3">
          <span className="font-primary text-xs font-medium tracking-[0.12em] text-[#A9A8B2]">
            PROGRAM MONITOR
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous week"
              onClick={() => go(-1)}
              className="h-[38px] w-[38px] rounded-full border border-[#3A3942] bg-[#2A2930] text-xs text-white transition hover:-translate-x-0.5 hover:border-[#F7C028] hover:text-[#F7C028] active:scale-90"
            >
              ◀◀
            </button>
            <button
              type="button"
              aria-label={playing ? "Pause" : "Play through the weeks"}
              aria-pressed={playing}
              onClick={() => setPlaying((p) => !p)}
              className="relative h-[46px] w-[46px] rounded-full bg-[#F7C028] text-[15px] text-[#121212] shadow-[0_0_0_0_rgba(247,192,40,0.5)] transition hover:scale-110 hover:bg-[#FFD65C] hover:shadow-[0_0_0_8px_rgba(247,192,40,0.15)] active:scale-95"
            >
              {playing ? "❚❚" : "▶"}
            </button>
            <button
              type="button"
              aria-label="Next week"
              onClick={() => go(1)}
              className="h-[38px] w-[38px] rounded-full border border-[#3A3942] bg-[#2A2930] text-xs text-white transition hover:translate-x-0.5 hover:border-[#F7C028] hover:text-[#F7C028] active:scale-90"
            >
              ▶▶
            </button>
          </div>
          <span className="whitespace-nowrap font-mono text-[15px] font-bold tabular-nums text-[#F7C028]">
            WK {n}:{secs}:00
          </span>
        </div>
      </div>

      {/* Week clips grouped by phase */}
      <div className="overflow-x-auto rounded-[20px] bg-[#222127] p-4">
        <div className="flex min-w-[1000px] flex-col gap-3">
          <div className="grid grid-cols-4 gap-1.5">
            {phases.map((p, i) => {
              const active = i === Math.floor(wk / 2);
              return (
                <button
                  key={p.weeks}
                  type="button"
                  onClick={() => select(i * 2)}
                  className={`flex min-w-0 flex-col gap-1 border-t-[3px] px-1 pb-1.5 pt-2.5 text-left transition-colors duration-300 ${
                    active ? "border-[#F7C028]" : "border-[#4A4952] hover:border-[#8E8D96]"
                  }`}
                >
                  <span
                    className={`font-mono text-[11px] tracking-[0.1em] transition-colors duration-300 ${
                      active ? "text-[#F7C028]" : "text-[#8E8D96]"
                    }`}
                  >
                    {p.weeks.toUpperCase()}
                  </span>
                  <span className="text-balance font-primary text-sm font-semibold leading-[1.3] text-white">
                    {p.name}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="grid grid-cols-8 gap-1.5">
            {weeks.map((w, i) => {
              const finishing = i >= 6;
              const active = i === wk;
              return (
                <button
                  key={w.t}
                  type="button"
                  aria-pressed={active}
                  onClick={() => select(i)}
                  className={`relative flex min-h-24 flex-col gap-1.5 overflow-hidden rounded-lg border-2 px-2.5 pb-3 pt-2.5 text-left font-primary transition duration-200 hover:-translate-y-1 active:translate-y-0 active:scale-[0.97] ${
                    finishing
                      ? "bg-[#F7C028] text-[#121212] hover:bg-[#FFD65C]"
                      : "bg-[#3A3942] text-white hover:bg-[#45444E]"
                  } ${active ? "-translate-y-1 border-white shadow-[0_10px_24px_-10px_rgba(0,0,0,0.8)]" : "border-transparent"}`}
                >
                  <span className="font-mono text-[11px] opacity-85">WK {i + 1}</span>
                  <span className="text-[13px] font-semibold leading-[1.3]">{w.t}</span>
                  {active && (
                    <span
                      className={`absolute bottom-0 left-0 h-[3px] origin-left ${
                        finishing ? "bg-[#121212]" : "bg-[#F7C028]"
                      }`}
                      style={{ width: "100%", transform: `scaleX(${playing ? elapsed : 1})` }}
                    />
                  )}
                </button>
              );
            })}
          </div>
          {/* audio waveform; the played portion lights up */}
          <div className="relative h-[26px] overflow-hidden rounded-md bg-[#26252C]">
            <div
              className="absolute inset-0 bg-center bg-no-repeat"
              style={{
                backgroundImage: "repeating-linear-gradient(90deg,#55545E 0 2px,transparent 2px 5px)",
                backgroundSize: "100% 60%",
              }}
            />
            <div
              className="absolute inset-y-0 left-0 bg-center bg-no-repeat transition-[width] duration-300 ease-out"
              style={{
                width: `${((wk + (playing ? elapsed : 1)) / 8) * 100}%`,
                backgroundImage: "repeating-linear-gradient(90deg,#F7C028 0 2px,transparent 2px 5px)",
                backgroundSize: "100% 60%",
                transitionDuration: playing ? "0ms" : "300ms",
              }}
            />
          </div>
        </div>
      </div>
      <p className="-mt-3 hidden font-mono text-[11px] tracking-[0.08em] text-[#77767F] md:block">
        TIP · CLICK ANY WEEK, OR USE ← → AND SPACE
      </p>
    </div>
  );
}
