import type { Metadata } from "next";
import type { ReactNode } from "react";
import ContactLinks from "@/components/video-editing/ContactLinks";
import Faq from "@/components/video-editing/Faq";
import Hero from "@/components/video-editing/Hero";
import ModulesMonitor from "@/components/video-editing/ModulesMonitor";
import ReelCard from "@/components/video-editing/ReelCard";
import VeEffects from "@/components/video-editing/VeEffects";
import {
  VE_APPLY_URL,
  VE_SEATS,
  fees,
  finalOptions,
  overview,
  post,
  reels,
  steps,
  structure,
  support,
  walkAway,
  who,
  whys,
  workflow,
} from "@/components/video-editing/data";

export const metadata: Metadata = {
  title: "AI Video Production & Premiere Pro | Bridge Program | Yuvabe Education",
  description:
    "An 8-week, part-time program in AI video generation, video production and Adobe Premiere Pro at Saracon Campus, Auroville.",
};

/* ---------- small shared pieces ---------- */

const wrap = "mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-14";
const sectionY = "py-14 md:py-[104px]";

function SceneLabel({ children }: { children: ReactNode }) {
  return (
    <span className="whitespace-nowrap font-mono text-[13px] tracking-[0.12em] text-[#F7C028]">
      ● {children}
    </span>
  );
}

function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`m-0 font-primary text-[28px] font-bold tracking-[-0.02em] text-[#F7C028] md:text-[40px] ${className}`}
    >
      {children}
    </h2>
  );
}

function PanelTabs({ tabs, right }: { tabs: string[]; right?: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[#2E2D35] bg-[#1B1A20] px-5 font-primary text-xs font-semibold tracking-[0.08em]">
      <div className="flex gap-6">
        {tabs.map((t, i) => (
          <span
            key={t}
            className={
              i === 0 ? "border-b-2 border-[#F7C028] py-3 text-white" : "py-3 text-[#77767F]"
            }
          >
            {t}
          </span>
        ))}
      </div>
      {right && <span className="text-[#77767F]">{right}</span>}
    </div>
  );
}

function FilmStrip() {
  return (
    <div
      aria-hidden
      className="h-[30px] bg-[#0D0D0F] bg-no-repeat"
      style={{
        backgroundImage: "repeating-linear-gradient(90deg,#2B2A31 0 16px,transparent 16px 34px)",
        backgroundSize: "100% 10px",
        backgroundPosition: "0 center",
      }}
    />
  );
}

/* ---------- sections ---------- */

function ProgramOverview() {
  return (
    <section className={`${wrap} grid items-start gap-12 py-14 md:py-24 lg:grid-cols-2`}>
      <div className="flex flex-col gap-5">
        <SceneLabel>SCENE 01</SceneLabel>
        <SectionTitle>Program Overview</SectionTitle>
        <p className="m-0 text-[17px] leading-[1.7] text-[#E4E3EA]">
          Brands, creators and businesses need more video than ever, and AI tools have
          changed how it gets made. This program teaches you the whole process: coming up
          with an idea, planning your shots, generating scenes with AI, editing in Adobe
          Premiere Pro, and delivering a finished video that’s ready for any digital
          platform.
        </p>
        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3.5 pt-2">
          <span
            className="mt-[3px] h-[22px] w-3.5 bg-[#F7C028]"
            style={{ clipPath: "polygon(0 0,100% 0,100% 70%,50% 100%,0 70%)" }}
          />
          <p className="m-0 text-base leading-[1.65] text-[#F6E7B6]">
            Every week is hands-on. You learn a technique, then use it on a real piece of
            work. By week 8 you will have planned, generated, edited and presented a
            complete video project for your portfolio.
          </p>
        </div>
      </div>
      <div className="overflow-hidden rounded-[18px] border border-transparent bg-[#222127] transition duration-300 hover:border-[#3A3942] hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.9)]">
        <PanelTabs tabs={["METADATA", "PROGRAM INFO"]} />
        <dl className="m-0 px-5 pb-2.5 pt-1.5" data-ve="stagger">
          {overview.map(([k, v]) => (
            <div
              key={k}
              data-ve-item
              className="group -mx-5 grid grid-cols-[110px_minmax(0,1fr)] gap-3.5 border-b border-[#2E2D35] px-5 py-[13px] transition-colors duration-200 last:border-b-0 hover:bg-[#2A2930] sm:grid-cols-[150px_minmax(0,1fr)]"
            >
              <dt className="pt-[3px] font-mono text-xs tracking-[0.06em] text-[#8E8D96] transition-colors group-hover:text-[#F7C028]">{k}</dt>
              <dd className="m-0 font-primary text-[15px] font-medium leading-[1.45] text-white">
                {v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

const whyOffsets = [0, 10, 20, 6, 16, 4, 24];

function WhyChoose() {
  return (
    <section className="bg-[#1B1A20]">
      <div className={`${wrap} ${sectionY} flex flex-col gap-10`}>
        <div className="flex flex-col gap-3">
          <SceneLabel>SCENE 02</SceneLabel>
          <SectionTitle>Why Choose This Program?</SectionTitle>
        </div>
        <div className="flex flex-col border-t border-[#2E2D35]" data-ve="clips">
          {whys.map((w, i) => {
            const highlight = i % 4 === 3;
            return (
              <div
                key={w.t}
                className="group grid grid-cols-[44px_minmax(0,1fr)] border-b border-[#2E2D35] transition-colors duration-200 hover:bg-[#222127] sm:grid-cols-[56px_minmax(0,1fr)]"
              >
                <div className="flex items-center justify-center border-r border-[#2E2D35] font-primary text-xs font-semibold text-[#8E8D96] transition-colors group-hover:text-[#F7C028]">
                  V{7 - i}
                </div>
                <div
                  className="min-w-0 py-2.5 pl-2.5 sm:pl-[var(--offset)]"
                  style={{ ["--offset" as string]: `min(${whyOffsets[i]}%, 120px)` }}
                >
                  <div
                    data-ve-item
                    className={`flex max-w-[640px] flex-col gap-1 rounded-lg px-[18px] py-3.5 transition duration-300 group-hover:translate-x-2 group-hover:shadow-[0_10px_24px_-12px_rgba(0,0,0,0.9)] ${
                      highlight ? "bg-[#F7C028] text-[#121212]" : "bg-[#3A3942] text-white group-hover:bg-[#45444E]"
                    }`}
                  >
                    <span className="font-primary text-[17px] font-bold">{w.t}</span>
                    <span className="text-[15px] leading-[1.55]">{w.d}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhatYouLearn() {
  return (
    <section id="learn" className={`${wrap} ${sectionY} flex scroll-mt-24 flex-col gap-7`}>
      <div className="flex flex-col gap-3">
        <SceneLabel>SCENE 03</SceneLabel>
        <SectionTitle>What You’ll Learn</SectionTitle>
        <p className="m-0 text-[17px] text-[#E4E3EA]">
          8 modules over 8 weeks, one module a week. The last week is your final project.
        </p>
      </div>

      <ModulesMonitor />

      <div className="mt-3 grid overflow-hidden rounded-[20px] bg-[#F7C028] text-[#121212] md:grid-cols-2">
        <div className="flex flex-col gap-3.5 p-7 md:p-10">
          <span className="font-mono text-xs font-bold tracking-[0.12em]">EXPORT · WEEK 8</span>
          <h3 className="m-0 font-primary text-[26px] font-bold tracking-[-0.02em] md:text-[34px]">
            Final Project
          </h3>
          <p className="m-0 text-base leading-relaxed">
            In week 8 you make one complete video from concept to final output. You can
            choose:
          </p>
          <div className="mt-auto flex flex-col gap-3 border-t-[1.5px] border-[#121212]/20 pt-5">
            <span className="font-mono text-[11px] font-bold tracking-[0.12em]">YOUR WORKFLOW</span>
            <div className="flex flex-wrap items-center gap-1.5" data-ve="stagger">
              {workflow.map((label, i) => (
                <span key={label} data-ve-item className="flex items-center gap-1.5">
                  <span className="cursor-default whitespace-nowrap rounded-full bg-[#121212] px-[13px] py-[7px] font-primary text-[13px] font-semibold text-[#F7C028] transition duration-200 hover:-translate-y-0.5 hover:bg-[#2A2930]">
                    {label}
                  </span>
                  {i < workflow.length - 1 && <span className="text-sm font-bold">→</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
        <ol className="m-0 flex list-none flex-col justify-center gap-1.5 bg-[#121212] p-5 text-white md:p-8" data-ve="stagger">
          {finalOptions.map((label, i) => (
            <li
              key={label}
              data-ve-item
              className="group flex items-center gap-4 rounded-md border-b border-[#2E2D35] px-3 py-3.5 font-primary text-[15px] font-medium transition duration-200 last:border-b-0 hover:bg-[#1F1E24]"
            >
              <span className="flex-none font-mono text-xs font-bold text-[#F7C028]">0{i + 1}</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">{label}</span>
              <span className="ml-auto -translate-x-2 text-[#F7C028] opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                ●
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function VideosYoullMake() {
  return (
    <section className={`${wrap} flex flex-col gap-8 pt-14 md:pt-[104px]`}>
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div className="flex flex-col gap-3">
          <SceneLabel>NOW PLAYING</SceneLabel>
          <SectionTitle>Videos You’ll Make</SectionTitle>
        </div>
        <p className="m-0 max-w-[440px] text-base leading-relaxed text-[#C9C8D0]">
          Product reels, UGC-style videos, brand promos and AI-generated ads, made for the
          platforms people watch every day.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[18px] lg:grid-cols-4" data-ve="stagger">
        {reels.map((r) => (
          <div key={r.tag} data-ve-item>
            <ReelCard reel={r} />
          </div>
        ))}
      </div>
    </section>
  );
}

function ToolsAndWalkAway() {
  const tools = [
    { icon: "Pr", label: "VIDEO EDITING", name: "Adobe Premiere Pro" },
    {
      icon: "AI",
      label: "AI CREATIVE TOOLS",
      name: "AI image generation, AI video generation, AI voice and audio, and AI lip-sync and animation tools",
    },
  ];
  return (
    <section className={`${wrap} ${sectionY} flex flex-col gap-8`}>
      <div className="flex flex-col gap-3">
        <SceneLabel>SCENE 04</SceneLabel>
        <SectionTitle>Software &amp; Tools Covered</SectionTitle>
      </div>
      <div className="grid gap-4 md:grid-cols-2" data-ve="stagger">
        {tools.map((t) => (
          <div
            key={t.icon}
            data-ve-item
            className="group grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 rounded-2xl border border-transparent bg-[#222127] px-6 py-[22px] transition duration-300 hover:-translate-y-1 hover:border-[#3A3942] hover:shadow-[0_16px_32px_-16px_rgba(0,0,0,0.9)]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#3A3942] font-primary text-base font-bold text-white transition duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-[#F7C028] group-hover:text-[#121212]">
              {t.icon}
            </span>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs tracking-[0.08em] text-[#8E8D96]">▾ {t.label}</span>
              <span className="font-primary text-[17px] font-semibold leading-[1.45] text-white">
                {t.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 overflow-hidden rounded-[20px] bg-[#222127]">
        <PanelTabs tabs={["PROJECT BIN"]} right={`${walkAway.length} ITEMS`} />
        <div className="flex flex-col gap-5 p-6">
          <h3 className="m-0 font-primary text-[22px] font-bold text-white md:text-[28px]">
            What You’ll Walk Away With
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" data-ve="stagger">
            {walkAway.map((label, i) => (
              <div
                key={label}
                data-ve-item
                className={`flex cursor-default items-center gap-3.5 rounded-xl border-l-4 bg-[#1B1A20] px-4 py-3.5 transition duration-200 hover:-translate-y-0.5 hover:border-[#F7C028] hover:bg-[#26252C] ${
                  i === walkAway.length - 1 ? "border-[#F7C028]" : "border-[#3A3942]"
                }`}
              >
                <span className="flex-none font-mono text-[13px] font-bold text-[#F7C028]">0{i + 1}</span>
                <span className="font-primary text-[15px] font-medium leading-[1.4] text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoShouldApply() {
  return (
    <section className="px-5 pb-14 sm:px-8 md:pb-[104px] lg:px-14">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[20px] bg-black">
        <div className="h-5 bg-[#0A0A0B] md:h-9" />
        <div className="flex flex-col items-center gap-9 px-5 py-14 md:gap-14 md:py-[104px]">
          <div className="flex flex-col items-center gap-3.5 text-center">
            <SceneLabel>SCENE 05</SceneLabel>
            <SectionTitle>Who Should Apply?</SectionTitle>
            <span className="font-primary text-xs font-semibold tracking-[0.32em] text-[#8E8D96]">
              THIS PROGRAM IS FOR:
            </span>
          </div>
          <div className="flex w-full max-w-[880px] flex-col gap-6 md:gap-[30px]" data-ve="stagger">
            {who.map(([role, desc]) => (
              <div
                key={role}
                data-ve-item
                className="group grid cursor-default items-baseline gap-1 text-center md:grid-cols-[minmax(0,1fr)_40px_minmax(0,1fr)] md:gap-0 md:text-left"
              >
                <span className="font-primary text-[11px] font-semibold uppercase leading-[1.6] tracking-[0.22em] text-[#8E8D96] transition-colors duration-300 group-hover:text-[#F7C028] md:text-right md:text-[13px]">
                  {role}
                </span>
                <span className="hidden items-center justify-center self-center md:flex">
                  <span className="h-px w-0 bg-[#F7C028] transition-all duration-300 group-hover:w-5" />
                </span>
                <span className="font-primary text-[15px] font-medium leading-[1.45] text-white md:text-[19px]">
                  {desc}
                </span>
              </div>
            ))}
          </div>
          <span className="h-px w-10 bg-[#3A3942]" />
        </div>
        <div className="h-5 bg-[#0A0A0B] md:h-9" />
      </div>
    </section>
  );
}

function StructureAndFee() {
  return (
    <section className="bg-[#1B1A20]">
      <div className={`${wrap} ${sectionY} grid gap-6 lg:grid-cols-2`}>
        <div className="overflow-hidden rounded-[18px] border border-transparent bg-[#222127] transition duration-300 hover:border-[#3A3942] hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.9)]">
          <PanelTabs tabs={["SEQUENCE SETTINGS"]} />
          <div className="flex flex-col px-[22px] pb-2.5 pt-[22px]">
            <h2 className="mb-2.5 mt-0 font-primary text-2xl font-bold text-[#F7C028] md:text-[30px]">
              Course Structure
            </h2>
            {structure.map(([k, v]) => (
              <div
                key={k}
                className="group grid grid-cols-[110px_minmax(0,1fr)] gap-3.5 border-t border-[#2E2D35] py-[13px] sm:grid-cols-[140px_minmax(0,1fr)]"
              >
                <span className="pt-[3px] font-mono text-xs tracking-[0.06em] text-[#8E8D96] transition-colors group-hover:text-[#F7C028]">{k}</span>
                <span className="text-[15px] leading-normal text-white">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-[18px] border border-transparent bg-[#222127] transition duration-300 hover:border-[#3A3942] hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.9)]">
          <PanelTabs tabs={["RENDER & EXPORT"]} />
          <div className="flex flex-col px-[22px] pb-2.5 pt-[22px]">
            <h2 className="mb-2.5 mt-0 font-primary text-2xl font-bold text-[#F7C028] md:text-[30px]">
              Course Fee
            </h2>
            {fees.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1.5 border-t border-[#2E2D35] py-4">
                <span className="font-mono text-xs tracking-[0.06em] text-[#8E8D96]">{k}</span>
                <span className="font-primary text-xl font-semibold text-white">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Enrollment() {
  return (
    <section className={`${wrap} ${sectionY} flex flex-col gap-11`}>
      <div className="flex flex-col gap-3">
        <SceneLabel>SCENE 06</SceneLabel>
        <SectionTitle>Enrollment Process</SectionTitle>
      </div>
      <div className="relative grid gap-8 md:grid-cols-3" data-ve="keyframes">
        <div className="absolute left-[9px] right-0 top-[9px] hidden h-0.5 bg-[#3A3942] md:block" />
        <div data-ve-line className="absolute left-[9px] right-0 top-[9px] hidden h-0.5 origin-left bg-[#F7C028] md:block" />
        {steps.map(([t, d], i) => (
          <div key={t} className="group relative flex flex-col gap-2.5">
            <span
              data-ve-diamond
              className="-ml-[3px] -mt-[3px] box-content h-5 w-5 rotate-45 border-[3px] border-[#19191B] bg-[#F7C028] transition duration-300 group-hover:rotate-[225deg] group-hover:shadow-[0_0_0_6px_rgba(247,192,40,0.2)]"
            />
            <span className="mt-2.5 font-mono text-xs text-[#8E8D96]">KEYFRAME 0{i + 1}</span>
            <span className="font-primary text-[19px] font-semibold text-white transition-colors group-hover:text-[#F7C028]">{t}</span>
            <span className="text-[15px] leading-relaxed text-[#C9C8D0]">{d}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2.5 self-start rounded-full bg-[#26252C] px-5 py-2.5 font-primary text-sm font-semibold text-white">
        <span className="relative flex h-[9px] w-[9px]">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F7C028] opacity-60" />
          <span className="relative h-[9px] w-[9px] rounded-full bg-[#F7C028]" />
        </span>
        Limited seats: only {VE_SEATS} participants.
      </div>
    </section>
  );
}

function SupportAndPostCourse() {
  return (
    <section className={`${wrap} grid gap-6 pb-14 md:pb-[104px] lg:grid-cols-2`} data-ve="stagger">
      <div data-ve-item className="group overflow-hidden rounded-[18px] border border-transparent bg-[#222127] transition duration-300 hover:-translate-y-1 hover:border-[#3A3942] hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.9)]">
        <div className="h-1.5 bg-[#3A3942]">
          <div className="h-full w-0 bg-[#F7C028] transition-all duration-500 ease-out group-hover:w-full" />
        </div>
        <div className="flex flex-col gap-[18px] p-6 md:p-9">
          <h2 className="m-0 font-primary text-[22px] font-bold text-[#F7C028] md:text-[28px]">
            Student Support
          </h2>
          {support.map(([t, d]) => (
            <div key={t} className="flex flex-col gap-1">
              <span className="font-primary text-base font-semibold text-white">{t}</span>
              <span className="text-[15px] leading-[1.55] text-[#C9C8D0]">{d}</span>
            </div>
          ))}
        </div>
      </div>
      <div data-ve-item className="group overflow-hidden rounded-[18px] border border-transparent bg-[#222127] transition duration-300 hover:-translate-y-1 hover:border-[#3A3942] hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.9)]">
        <div className="h-1.5 bg-[#3A3942]">
          <div className="h-full w-0 bg-[#F7C028] transition-all duration-500 ease-out group-hover:w-full" />
        </div>
        <div className="flex flex-col gap-[18px] p-6 md:p-9">
          <h2 className="m-0 font-primary text-[22px] font-bold text-[#F7C028] md:text-[28px]">
            Post-Course Opportunities
          </h2>
          {post.map((p) => (
            <div key={p} className="flex items-start gap-3 text-base leading-[1.55] text-white">
              <span className="mt-[9px] h-2 w-2 flex-none rounded-full bg-[#F7C028]" />
              <span>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="mx-auto flex max-w-[860px] flex-col gap-7 px-5 pb-14 sm:px-8 md:pb-[104px] lg:px-14">
      <div className="flex flex-col items-center gap-3 text-center">
        <SceneLabel>SCENE 07</SceneLabel>
        <SectionTitle>FAQs</SectionTitle>
      </div>
      <Faq />
    </section>
  );
}

function GetStarted() {
  return (
    <section id="apply" className="scroll-mt-24 bg-[#F7C028] text-[#121212]">
      <div className={`${wrap} grid items-center gap-10 py-14 md:py-24 lg:grid-cols-2`}>
        <div className="flex flex-col gap-[18px]">
          <span className="flex items-center gap-2.5 font-mono text-[13px] font-bold tracking-[0.12em]">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#E63946]" />
            FINAL CUT
          </span>
          <h2 className="m-0 font-primary text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-[56px]">
            Get Started!
          </h2>
          <p className="m-0 max-w-[480px] text-lg leading-relaxed">
            Learn to make professional videos with AI and Premiere Pro. Apply today and
            secure your spot.
          </p>
          <a
            href={VE_APPLY_URL}
            data-ve="magnetic"
            className="group mt-1.5 flex items-center gap-3.5 self-start whitespace-nowrap rounded-full bg-[#121212] py-2 pl-[30px] pr-2 font-primary text-[17px] font-bold tracking-[0.06em] text-white transition hover:bg-black hover:text-white hover:shadow-[0_14px_30px_-10px_rgba(0,0,0,0.6)] active:scale-95"
          >
            APPLY NOW
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F7C028] text-[22px] text-[#121212] transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-45">
              →
            </span>
          </a>
        </div>
        <ContactLinks />
      </div>
    </section>
  );
}

export default function VideoEditingPage() {
  return (
    <main id="ve-page" className="overflow-x-hidden bg-[#19191B] font-secondary text-white">
      <Hero />
      <FilmStrip />
      <ProgramOverview />
      <WhyChoose />
      <WhatYouLearn />
      <FilmStrip />
      <VideosYoullMake />
      <ToolsAndWalkAway />
      <WhoShouldApply />
      <StructureAndFee />
      <Enrollment />
      <SupportAndPostCourse />
      <FaqSection />
      <GetStarted />
      <VeEffects scope="#ve-page" />
    </main>
  );
}
