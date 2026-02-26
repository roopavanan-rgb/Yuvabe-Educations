export type SteamProgramStatus = "active" | "upcoming" | "completed";

export interface SteamProgram {
  id: string;
  name: string;
  description: string;
  type: string;
  location: string;
  startDate: string; // ISO format (YYYY-MM-DD)
  endDate: string;
  viewMoreUrl: string;
  registerUrl?: string; // optional (only for upcoming)
  cohorts?: ProgramCohort[];
}

export interface ProgramCohort {
  id: string;
  label: string; // "Cohort 1", "Phase 2"
  startDate: string;
  endDate: string;
  registerUrl?: string;
}

export const steamProgramData: SteamProgram[] = [
  {
    id: "1",
    name: "Deepanam School",
    description: "Experience how Deepanam School brings STEAM to life.",
    type: "Full Year Program",
    location: "Auroville, Tamil Nadu", 
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    viewMoreUrl: "/program/deepanam-school",
  },
  {
    id: "2",
    name: "NESS School",
    description: "Experience how NESS School brings STEAM to life.",
    type: "Full Year Program",
    location: "Auroville, Tamil Nadu", 
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    viewMoreUrl: "/program/ness-school",
  },
  {
    id: "3",
    name: "Weekend Program",
    description: "Weekends are where curiosity takes center stage!",
    type: "One Session / Week",
    location: "Auroville, Tamil Nadu",
    startDate: "2025-07-01",
    endDate: "2025-09-30",
    viewMoreUrl: "/program/weekend-program",
  },
  {
    id: "4",
    name: "Steam Fest",
    description: "A celebration of creativity and innovation!",
    type: "Annual Event",
    location: "Bio-region Schools",
    startDate: "2025-04-05",
    endDate: "2025-04-05",
    viewMoreUrl: "/program/steam-fest",
  },
  {
    id: "5",
    name: "Visitor Program",
    description: "Interactive opportunity for guests to explore projects.",
    type: "Full Year Program",
    location: "Bio-region Schools", 
    startDate: "2025-02-15",
    endDate: "2025-02-28",
    viewMoreUrl: "/programs/visitor-program",
      registerUrl: "/register/weekend-program",
  },
  {
    id: "6",
    name: "Test Program",
    description: "Interactive opportunity for guests to explore projects.",
    type: "Half Year Program",
    location: "Bio-region Schools",
    startDate: "2026-01-15",
    endDate: "2026-02-19",
    viewMoreUrl: "/programs/deepanam-school",
      cohorts: [
    {
      id: "c1",
      label: "Feb 2026 Cohort",
      startDate: "2026-02-01",
      endDate: "2026-04-28",
      registerUrl: "/register/weekend-july"
    },
    {
      id: "c2",
      label: "August 2025 Cohort",
      startDate: "2025-08-01",
      endDate: "2025-08-13",
      registerUrl: "/register/weekend-august"
    },
     {
      id: "c3",
      label: "Jan 2026 Cohort",
      startDate: "2026-01-01",
      endDate: "2026-01-13",
      registerUrl: "/register/weekend-august"
    }
  ]
  },
   {
    id: "7",
    name: "Test Program 2",
    description: "Interactive opportunity for guests to explore projects.",
    type: "Half Year Program",
    location: "Bio-region Schools",
    startDate: "2026-03-15",
    endDate: "2026-03-19",
    viewMoreUrl: "/programs/deepanam-school",
     cohorts:[
        {
            id: "c1",
      label: "Feb 2026 Cohort",
      startDate: "2026-02-01",
      endDate: "2026-02-28",
      registerUrl: "/register/weekend-august"
        },
        {
            id: "c2",
      label: "Jan 2026 Cohort",
      startDate: "2026-01-01",
      endDate: "2026-01-28",
      registerUrl: "/register/weekend-august"
        }
     ]
  },
];