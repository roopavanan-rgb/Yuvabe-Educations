// Content for the Bridge "AI Video Production" page (/bridge/video-editing).
// Edit values here and every section picks up the change.

// TODO: replace with the real application form link once it exists.
export const VE_APPLY_URL = "#apply";

export const VE_START_DATE = "November 5";
export const VE_SEATS = 12;

export const overview: [string, string][] = [
  ["DURATION", "8 weeks"],
  ["START DATE", VE_START_DATE],
  ["SCHEDULE", "Thursdays and Fridays, 4:00 PM – 6:00 PM"],
  ["TOTAL TRAINING", "16 sessions, 32 hours"],
  ["LEARNING MODE", "In-person, classroom and lab sessions"],
  ["LOCATION", "Saracon Campus, Yuvabe, Auroville, Tamil Nadu, India"],
  ["FEE", "Completely sponsored by Yuvabe Education"],
  ["CERTIFICATION", "Yuvabe Education Certificate in AI Video Production"],
];

export const whys: { t: string; d: string }[] = [
  {
    t: "The full process, start to finish",
    d: "You learn planning, shooting principles, AI generation, editing and export, not just one tool.",
  },
  {
    t: "AI and traditional editing together",
    d: "Learn to generate scenes with AI, then shape them into a finished video in Premiere Pro.",
  },
  {
    t: "Industry-standard editing",
    d: "Adobe Premiere Pro, from your first cut to colour correction, sound and export settings.",
  },
  {
    t: "Storytelling first",
    d: "Scripting, storyboarding, shot planning and composition, so your videos have a point and hold attention.",
  },
  {
    t: "Part-time format",
    d: "Two late-afternoon sessions a week, Thursdays and Fridays from 4 to 6 PM.",
  },
  {
    t: "Learn from practitioners",
    d: "Sessions are led by people who make video for clients at Yuvabe Studios.",
  },
  {
    t: "Leave with a portfolio",
    d: "Storyboards, edited projects, AI video sequences and a final project you can show clients or employers.",
  },
];

export const phases = [
  { weeks: "Weeks 1–2", name: "Video Foundations & Storytelling", short: "FOUNDATIONS" },
  { weeks: "Weeks 3–4", name: "Editing in Adobe Premiere Pro", short: "PREMIERE PRO" },
  { weeks: "Weeks 5–6", name: "AI Video Generation", short: "AI GENERATION" },
  { weeks: "Weeks 7–8", name: "Bringing It Together", short: "FINISHING" },
];

export const weeks: { t: string; d: string }[] = [
  {
    t: "Fundamentals of Video Production",
    d: "Pre-production, production and post-production. Types of video, from ads and brand films to reels. Resolution, frame rate, aspect ratio and formats",
  },
  {
    t: "Visual Language & Story Development",
    d: "Ideas and concepts, scriptwriting, storyboarding and shot planning. Shot types, camera angles, composition and camera movement",
  },
  {
    t: "Premiere Pro: Editing Fundamentals",
    d: "Interface, project setup and media management. Timeline workflow, cutting and trimming, sequences, and multiple video and audio tracks",
  },
  {
    t: "Premiere Pro: Advanced Editing",
    d: "Transitions, effects and keyframes. Speed and time remapping, titles, colour correction with Lumetri, audio clean-up, and export settings for each platform",
  },
  {
    t: "Introduction to AI Video Generation",
    d: "Text-to-image, image-to-video and text-to-video. Writing prompts for subjects, settings, camera movement, lighting and style, and keeping visuals consistent",
  },
  {
    t: "AI Cinematic Video Creation",
    d: "Cinematic scenes, character consistency, product and brand visuals, reference-image generation, and building multi-shot sequences for ads, reels and brand videos",
  },
  {
    t: "AI + Premiere Pro Workflow",
    d: "Combining AI footage with traditional editing. Colour matching, sound design, music, voice-over, and finishing professional short-form videos",
  },
  {
    t: "Final Project & Portfolio",
    d: "Plan, script, storyboard, generate, edit and present a complete video of your own",
  },
];

export const workflow = ["Plan", "Script", "Storyboard", "Generate", "Edit", "Present"];

export const finalOptions = [
  "An AI-generated advertisement",
  "A brand promotional video",
  "A social media campaign video",
  "A cinematic storytelling video",
  "A product showcase video",
];

// `img` is the fallback still shown if the video cannot load.
export const reels = [
  {
    tag: "PRODUCT REEL",
    time: "0:19",
    video: "/videos/productreel.mp4",
    title: "A product, three angles, one hook",
    format: "9:16 · INSTAGRAM / REELS",
    img: "/images/video-editing/product-reel.webp",
  },
  {
    tag: "UGC STYLE",
    time: "0:39",
    video: "/videos/ugc.mp4",
    title: "Unboxing and first impressions",
    format: "9:16 · SHORTS / REELS",
    img: "/images/video-editing/ugc-style.webp",
  },
  {
    tag: "AI-GENERATED AD",
    time: "0:27",
    video: "/videos/adreel.mp4",
    title: "A cinematic scene made with AI",
    format: "9:16 · ADS",
    img: "/images/video-editing/ai-ad.webp",
  },
  {
    tag: "BRAND PROMO",
    time: "0:39",
    video: "/videos/brandpromo.mp4",
    title: "A local brand’s story in under a minute",
    format: "9:16 · SOCIAL CAMPAIGN",
    img: "/images/video-editing/brand-promo.webp",
  },
];

export const walkAway = [
  "Video production exercises",
  "Storyboards and concept documents",
  "Edited Premiere Pro projects",
  "AI-generated video sequences",
  "Short-form video projects",
  "A final portfolio project",
];

export const who: [string, string][] = [
  ["Students and recent graduates", "interested in video, design or media careers"],
  ["Content creators", "who want to make better videos, faster"],
  ["Marketers and social media managers", "who need to produce video in-house"],
  ["Business owners", "who want to make their own brand and product videos"],
  ["Editors and designers", "who want to add AI video tools to their skills"],
];

export const structure: [string, string][] = [
  ["DURATION", "8 weeks"],
  ["SCHEDULE", "Thursdays and Fridays, 4:00 PM – 6:00 PM"],
  ["SESSIONS", "16 sessions of 2 hours each (32 hours total)"],
  ["MODE", "In-person, classroom and lab sessions"],
  ["FORMAT", "Short demos followed by hands-on practice in every session"],
  ["LIMITED SEATS", `Only ${VE_SEATS} spots available`],
];

export const fees: [string, string][] = [
  ["STARTING DATE", VE_START_DATE],
  ["COURSE FEE", "Completely sponsored by Yuvabe Education"],
  ["LIMITED SEATS", `Only ${VE_SEATS} Participants`],
];

// Placeholder copy from the design is kept as-is (in [brackets]) until confirmed.
export const steps: [string, string][] = [
  ["Online Application", "Fill in the application form"],
  ["Screening", "[Shortlisted candidates are invited for a short conversation]"],
  ["Confirmation", "Pay the fee to secure your seat"],
];

export const support: [string, string][] = [
  ["Mentor feedback", "Regular reviews of your edits, AI sequences and final project"],
  ["On-campus support", "Technical and administrative help throughout the program"],
  ["Tool access", "[Details of software and AI tool access provided during the program]"],
];

export const post = [
  "A portfolio of finished video work to show clients or employers",
  "Access to the alumni network for ongoing learning and opportunities",
  "Pathways to advanced courses and certifications",
];

export const faqs: [string, string][] = [
  [
    "Do I need any experience in video or editing?",
    "No. The program starts from the basics of video production and Premiere Pro. It helps if you’re comfortable using a computer.",
  ],
  [
    "Do I need my own laptop and software?",
    "[Answer: whether students bring a laptop, minimum specs, and whether Premiere Pro and AI tool access is provided]",
  ],
  [
    "Which AI tools will I use?",
    "You’ll work with AI image, video, voice and lip-sync tools. We pick tools based on what’s working best at the time, since this space changes quickly.",
  ],
  [
    "Can I do this alongside work or college?",
    "Sessions run from 4 to 6 PM on Thursdays and Fridays, so most students can join after college. If you work full-time, check that you can make these hours before applying.",
  ],
  [
    "Will I get a certificate?",
    "Yes. You’ll receive a Yuvabe Education certificate when you complete the program and final project.",
  ],
  [
    "What will I have at the end of the program?",
    "A complete video project made from concept to final output, plus the edits, storyboards and AI sequences you made along the way.",
  ],
  [
    "How do I apply?",
    "Click “Apply Now”, fill in the form, and our team will contact you about next steps.",
  ],
];
