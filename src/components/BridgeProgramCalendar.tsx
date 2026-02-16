"use client";

import React, { useMemo, useState } from "react";
import { Gantt, Willow, type ITask } from "@svar-ui/react-gantt";
import "@svar-ui/react-gantt/all.css";

// -----------------------
// DATA & TYPES
// -----------------------

const courseConfig = [
  {
    id: "advanced-design-workshop",
    text: "Advanced Design Workshop",
    color: "#6366F1",
    phases: [
      {
        id: "advanced-design-workshop-p1",
        text: "Phase 1",
        start: "2026-02-01",
        end: "2026-03-11",
      },
      {
        id: "advanced-design-workshop-p2",
        text: "Phase 2",
        start: "2026-03-16",
        end: "2026-05-01",
      },
    ],
  },
  {
    id: "digital-marketing",
    text: "Digital Marketing",
    color: "#10B981",
    phases: [
      {
        id: "digital-marketing-p1",
        text: "Phase 1",
        start: "2026-04-01",
        end: "2026-05-15",
      },
      {
        id: "digital-marketing-p2",
        text: "Phase 2",
        start: "2026-07-16",
        end: "2026-08-21",
      },
    ],
  },
  {
    id: "ai",
    text: "AI",
    color: "#6f55d5",
    phases: [
      { id: "ai-p1", text: "Phase 1", start: "2026-05-01", end: "2026-06-15" },
      { id: "ai-p2", text: "Phase 2", start: "2026-07-16", end: "2026-10-01" },
    ],
  },
  {
    id: "corporate-sustainability",
    text: "Corporate Sustainability",
    color: "#1b360f",
    phases: [
      {
        id: "corporate-sustainability-p1",
        text: "Phase 1",
        start: "2026-02-01",
        end: "2026-03-15",
      },
      {
        id: "corporate-sustainability-p2",
        text: "Phase 2",
        start: "2026-11-16",
        end: "2026-12-21",
      },
    ],
  },
  {
    id: "3d-design",
    text: "3D Design",
    color: "#541ed4",
    phases: [
      {
        id: "3d-design-p1",
        text: "Phase 1",
        start: "2026-04-01",
        end: "2026-06-15",
      },
      {
        id: "3d-design-p2",
        text: "Phase 2",
        start: "2026-11-16",
        end: "2026-12-21",
      },
    ],
  },
  {
    id: "ui-ux",
    text: "UI/UX",
    color: "#f48f38",
    phases: [
      {
        id: "ui-ux-p1",
        text: "Phase 1",
        start: "2026-01-01",
        end: "2026-03-15",
      },
      {
        id: "ui-ux-p2",
        text: "Phase 2",
        start: "2026-04-16",
        end: "2026-06-01",
      },
    ],
  },
];

function buildTasks(): ITask[] {
  const tasks: ITask[] = [];

  courseConfig.forEach((course) => {
    // Parent Project
    tasks.push({
      id: course.id,
      text: course.text,
      type: "project",
      open: true,
      // We pass styles via the 'styles' or 'css' property if supported,
      // but standard SVAR Gantt uses specific task properties.
    });

    course.phases.forEach((phase) => {
      // Child Task
      tasks.push({
        id: phase.id,
        text: phase.text,
        start: new Date(phase.start),
        end: new Date(phase.end),
        parent: course.id,
        type: "task",
        // Using the library's internal background property if available,
        // otherwise we use taskTemplate for custom rendering.
        details: course.color,
      } as any); // Cast to any if adding custom metadata
    });
  });

  return tasks;
}

// -----------------------
// COMPONENT
// -----------------------

export default function BridgeProgramCalendar() {
  const [search, setSearch] = useState("");
  const [zoom, setZoom] = useState<"month" | "week" | "day">("month");

  const allTasks = useMemo(() => buildTasks(), []);

  const filteredTasks = useMemo(() => {
    const lowerSearch = search.toLowerCase().trim();
    if (!lowerSearch) return allTasks;

    return allTasks.filter((task) => {
      const taskName = task.text?.toLowerCase() || "";
      const matchesTask = taskName.includes(lowerSearch);
      const parentTask = allTasks.find((t) => t.id === task.parent);
      const parentName = parentTask?.text?.toLowerCase() || "";
      return matchesTask || parentName.includes(lowerSearch);
    });
  }, [search, allTasks]);

  const currentScales = useMemo(() => {
    const configs: Record<string, any[]> = {
      year: [
        {
          unit: "year",
          step: 1,
          // Use a function instead of a string "yyyy"
          format: (date: Date) => date.getFullYear().toString(),
        },
      ],
      month: [
        {
          unit: "year",
          step: 1,
          format: (date: Date) => date.getFullYear().toString(),
        },
        {
          unit: "month",
          step: 1,
          format: (date: Date) =>
            date.toLocaleString("default", { month: "long" }),
        },
      ],
      week: [
        {
          unit: "month",
          step: 1,
          format: (date: Date) =>
            date.toLocaleString("default", { month: "long", year: "numeric" }),
        },
        {
          unit: "week",
          step: 1,
          format: (date: Date) => {
            // Logic to get the week number
            const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
            const pastDaysOfYear =
              (date.getTime() - firstDayOfYear.getTime()) / 86400000;
            return `W${Math.ceil(
              (pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7,
            )}`;
          },
        },
      ],
      day: [
        {
          unit: "month",
          step: 1,
          format: (date: Date) =>
            date.toLocaleString("default", { month: "long", year: "numeric" }),
        },
        {
          unit: "day",
          step: 1,
          format: (date: Date) => date.getDate().toString(),
        },
      ],
    };
    return configs[zoom];
  }, [zoom]);

  const columns = useMemo(
    () => [{ id: "text", header: "Course / Phase", width: 250, tree: true }],
    [],
  );

  // Use taskTemplate to handle the custom styling correctly
  const MyTaskTemplate = ({ data }: { data: any }) => {
    if (data.type === "project") {
      return null;
    }
    const color = data.color || data.details || "#94a3b8";
    return (
      <div
        style={{
          background: color,
          width: "100%",
          height: "100%",
          color: "white",
          display: "flex",
          alignItems: "center",
          paddingLeft: "8px",
          borderRadius: "4px",
          border: "none !important",
          outline: "none",
          fontSize: "12px",
        }}
      >
        {data.text}
      </div>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="relative flex bg-gray-100 p-3 rounded-[15px] items-center">
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="text-gray-500"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent outline-none w-32 md:w-40 lg:w-48 xl:w-full"
          style={{ padding: "5px 10px", borderRadius: "4px" }}
        />
        <select value={zoom} onChange={(e) => setZoom(e.target.value as any)}>
          <option value="month">Month</option>
          <option value="week">Week</option>
          <option value="day">Day</option>
        </select>
      </div>

      <div style={{ flex: 1, overflow: "hidden" }}>
        <Willow>
          <Gantt
            tasks={filteredTasks}
            scales={currentScales}
            readonly={true}
            columns={columns}
            taskTemplate={MyTaskTemplate}
          />
        </Willow>
      </div>
    </div>
  );
}
