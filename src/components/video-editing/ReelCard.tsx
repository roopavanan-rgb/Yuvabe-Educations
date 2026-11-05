"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Reel = {
  tag: string;
  time: string;
  title: string;
  format: string;
  img: string;
  video: string;
};

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s) % 60).padStart(2, "0")}`;

/**
 * A 9:16 reel. With a mouse it plays (muted) while hovered; on touch screens
 * it plays while mostly in view. The centre button toggles playback, and the
 * side actions toggle sound, like, and share.
 */
export default function ReelCard({ reel }: { reel: Reel }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(0);
  const [failed, setFailed] = useState(false);
  const [liked, setLiked] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const finePointer = useRef(false);

  const play = () => {
    const v = videoRef.current;
    if (!v || failed) return;
    v.play().catch(() => {
      /* autoplay blocked or interrupted by a pause; ignore */
    });
  };
  const pause = () => videoRef.current?.pause();

  useEffect(() => {
    finePointer.current = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }, []);

  // Touch screens: play while the reel is mostly on screen
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const touch = !window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.6) {
          if (touch && !reduced) play();
        } else {
          pause(); // always stop reels that have scrolled away
        }
      },
      { threshold: [0, 0.6] }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Smooth scrub bar + timecode while playing
  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    const tick = () => {
      const v = videoRef.current;
      if (v && v.duration) {
        setProgress(v.currentTime / v.duration);
        setCurrent(v.currentTime);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing]);

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  const flash = (msg: string) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 1600);
  };

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) play();
  };

  const share = async () => {
    const url = `${window.location.origin}${window.location.pathname}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: reel.title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      flash("Link copied");
    } catch {
      /* user cancelled the share sheet */
    }
  };

  const actionBtn =
    "flex h-8 w-8 items-center justify-center rounded-full text-sm transition duration-200 hover:scale-110 active:scale-75";

  return (
    <div className="group flex flex-col gap-3">
      <div
        ref={cardRef}
        data-ve="tilt"
        onPointerEnter={() => finePointer.current && play()}
        onPointerLeave={() => finePointer.current && pause()}
        className="relative aspect-[9/16] overflow-hidden rounded-[20px] bg-[#222127] [transform-style:preserve-3d]"
      >
        {failed ? (
          <Image src={reel.img} alt="" fill sizes="(min-width: 1024px) 270px, 50vw" className="object-cover" />
        ) : (
          <video
            ref={videoRef}
            // #t=0.1 makes browsers paint the first frame as the still
            src={`${reel.video}#t=0.1`}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`${reel.tag.toLowerCase()} example: ${reel.title}`}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={() => setFailed(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out ${
              playing ? "scale-105" : "scale-100"
            }`}
          />
        )}

        {/* cursor spotlight */}
        <div
          data-ve-spotlight
          className="pointer-events-none absolute inset-0 z-[1] opacity-0"
          style={{
            background:
              "radial-gradient(260px circle at var(--x,50%) var(--y,50%), rgba(247,192,40,0.18), transparent 60%)",
          }}
        />

        {/* centre play / pause */}
        <button
          type="button"
          aria-label={playing ? `Pause ${reel.title}` : `Play ${reel.title}`}
          onClick={() => (playing ? pause() : play())}
          disabled={failed}
          className="absolute inset-0 z-[2] flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#F7C028]"
        >
          <span
            className={`flex h-14 w-14 items-center justify-center rounded-full bg-black/40 text-xl text-white backdrop-blur-sm transition duration-300 ${
              playing ? "scale-75 opacity-0 group-focus-within:opacity-0" : "scale-100 pl-1 opacity-100"
            } ${failed ? "hidden" : ""}`}
          >
            {playing ? "❚❚" : "▶"}
          </span>
        </button>

        <div className="pointer-events-none absolute inset-x-0 top-0 z-[3] flex items-center justify-between gap-2 p-3.5">
          <span className="truncate rounded-full bg-[#121212]/80 px-[11px] py-[5px] font-primary text-[10px] font-bold tracking-[0.08em] text-white sm:text-[11px]">
            {reel.tag}
          </span>
          <span className="flex items-center gap-1.5 rounded-md bg-black/45 px-[7px] py-[3px] font-mono text-[11px] tabular-nums text-white">
            {playing && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E63946]" />}
            {playing || current > 0 ? fmt(current) : reel.time}
          </span>
        </div>

        {/* side actions */}
        <div className="absolute bottom-[92px] right-3 z-[3] flex flex-col gap-3">
          {!failed && (
            <button
              type="button"
              aria-label={muted ? "Turn sound on" : "Mute"}
              aria-pressed={!muted}
              onClick={toggleSound}
              className={`${actionBtn} ${muted ? "bg-black/35 text-white hover:bg-black/55" : "bg-[#F7C028] text-[#121212]"}`}
            >
              {muted ? (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M11 5 6 9H2v6h4l5 4V5z" />
                  <path d="m23 9-6 6M17 9l6 6" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M11 5 6 9H2v6h4l5 4V5z" />
                  <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" />
                </svg>
              )}
            </button>
          )}
          <button
            type="button"
            aria-label={liked ? "Unlike" : "Like"}
            aria-pressed={liked}
            onClick={() => {
              setLiked((l) => !l);
              if (!liked) flash("Added to favourites");
            }}
            className={`${actionBtn} ${
              liked ? "animate-[ve-pop_0.35s_ease-out] bg-[#E63946] text-white" : "bg-black/35 text-white hover:bg-black/55"
            }`}
          >
            ♥
          </button>
          <button
            type="button"
            aria-label="Share this page"
            onClick={share}
            className={`${actionBtn} bg-black/35 text-white hover:-translate-y-0.5 hover:translate-x-0.5 hover:bg-black/55`}
          >
            ↗
          </button>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] flex flex-col gap-2.5 bg-gradient-to-b from-transparent to-black/75 px-3.5 pb-3.5 pt-11">
          <span className="pr-0 font-primary text-sm font-semibold leading-[1.35] text-white sm:pr-11">
            {reel.title}
          </span>
          <div className="h-[3px] overflow-hidden rounded-sm bg-white/25">
            <div className="h-full origin-left bg-[#F7C028]" style={{ transform: `scaleX(${progress})` }} />
          </div>
        </div>

        {/* toast */}
        <div
          role="status"
          className={`pointer-events-none absolute left-1/2 top-14 z-[4] -translate-x-1/2 whitespace-nowrap rounded-full bg-[#F7C028] px-3 py-1.5 font-primary text-xs font-semibold text-[#121212] shadow-lg transition duration-300 ${
            toast ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
          }`}
        >
          {toast}
        </div>
      </div>
      <span className="font-mono text-[11px] tracking-[0.06em] text-[#8E8D96] transition-colors group-hover:text-[#F7C028] sm:text-xs">
        {reel.format}
      </span>
    </div>
  );
}
