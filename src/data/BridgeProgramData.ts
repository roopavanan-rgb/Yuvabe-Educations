import { Program } from "@/components/ProgramCalendarFinal";

export const BridgePrograms: Program[] = [
  {
    id: "adw",
    name: "Advanced Design Workshop",
    description:
      "Hands-on robotics engineering program covering electronics, sensors, and automation.",
    location: "Saracon Campus",
    type: "Bootcamp",
    startDate: "2026-03-01",
    endDate: "2026-05-30",
    viewMoreUrl: "/bridge/advanced-design-workshop",
    registerUrl: "bridge/advanced-design-workshop",

    cohorts: [
      {
        id: "adw-phase-1",
        label: "Phase 1 (March Batch)",
        startDate: "2026-02-01",
        endDate: "2026-03-11",
        registerUrl: "bridge/advanced-design-workshops",
      },
      {
        id: "adw-phase-2",
        label: "Phase 2 (May Batch)",
        startDate: "2026-03-16",
        endDate: "2026-05-01",
        registerUrl: "bridge/advanced-design-workshop",
      },
    ],
  },

  {
    id: "digital-marketing",
    name: "Digital Marketing",
    description:
      "Explore artificial intelligence, neural networks, and real-world ML projects.",
    location: "Saracon Campus",
    type: "Lab Program",
    startDate: "2026-01-10",
    endDate: "2026-03-10",
    viewMoreUrl: "/bridge/digital-marketing",
    registerUrl: "/bridge/digital-marketing",

    cohorts: [
      {
        id: "dm-phase-1",
        label: "Phase 1",
        startDate: "2025-11-01",
        endDate: "2026-01-05",
      },
      {
        id: "dm-phase-2",
        label: "Phase 2",
        startDate: "2026-02-01",
        endDate: "2026-04-01",
      },
    ],
  },

  {
    id: "ai",
    name: "AI",
    description:
      "Beginner-friendly programming course for young innovators.",
    location: "Saracon Campus",
    type: "Course",
    startDate: "2025-09-01",
    endDate: "2025-12-15",
    viewMoreUrl: "/bridge/ai",
    registerUrl: "/bridge/ai",

    cohorts: [
      {
        id: "ai-phase-1",
        label: "Fall Cohort",
        startDate: "2025-09-01",
        endDate: "2025-12-15",
      },
       {
        id: "ai-phase-2",
        label: "Fall Cohort",
        startDate: "2025-09-01",
        endDate: "2025-12-15",
      },
    ],
  },
 
  {
    id: "corporate-sustainability",
    name: "Corporate Sustainability",
    description:
      "Beginner-friendly programming course for young innovators.",
    location: "Saracon Campus",
    type: "Course",
    startDate: "2025-09-01",
    endDate: "2025-12-15",
    viewMoreUrl: "bridge/sustainability",
    registerUrl: "bridge/sustainability",

    cohorts: [
      {
        id: "cs-phase-1",
        label: "Fall Cohort",
        startDate: "2025-09-01",
        endDate: "2025-12-15",
      },
       {
        id: "cs-phase-2",
        label: "Fall Cohort",
        startDate: "2025-09-01",
        endDate: "2025-12-15",
      },
    ],
  },

   {
    id: "3d-design",
    name: "3D Design",
    description:
      "Beginner-friendly programming course for young innovators.",
    location: "Saracon Campus",
    type: "Course",
    startDate: "2025-09-01",
    endDate: "2025-12-15",
    viewMoreUrl: "bridge/3d-design",
    registerUrl: "bridge/3d-design",

    cohorts: [
      {
        id: "3d-phase-1",
        label: "Fall Cohort",
        startDate: "2025-09-01",
        endDate: "2025-12-15",
      },
       {
        id: "3d-phase-2",
        label: "Fall Cohort",
        startDate: "2025-09-01",
        endDate: "2025-12-15",
      },
    ],
  },

   {
    id: "ui-ux",
    name: "UI/UX",
    description:
      "Beginner-friendly programming course for young innovators.",
    location: "Saracon Campus",
    type: "Course",
    startDate: "2025-09-01",
    endDate: "2025-12-15",
    viewMoreUrl: "bridge/ui-ux",
    registerUrl: "bridge/ui-ux",

    cohorts: [
      {
        id: "ui-phase-1",
        label: "Fall Cohort",
        startDate: "2025-09-01",
        endDate: "2025-12-15",
      },
       {
        id: "ui-phase-2",
        label: "Fall Cohort",
        startDate: "2025-09-01",
        endDate: "2025-12-15",
      },
    ],
  },
];