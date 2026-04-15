export interface ImpactItem {
  id: number;
  title: string;
  subtitle: string;
  month: string;
  year: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

export const impactData: ImpactItem[] = [
  {
    id: 2,
 title: "Impact Report 2025",
    subtitle: "Building Pathways Creating Futures",
    month: "",
    year: "2025",
    description:
      "Today, as we reflect on the journey of Yuvabe, we are filled with immense pride and gratitude for the transformative impact we have had on the lives of young people.",
    imageUrl: "/images/impact-report/impact-report-2025.png",
    linkUrl: "https://heyzine.com/flip-book/adc16edf05.html",
  },
  {
    id: 1,
    title: "Impact Report 2024",
    subtitle: "Empowered Youth, Transformed Lives",
    month: "",
    year: "2024",
    description:
      "As we share the Yuvabe Impact Report for FY 2025, we do so with deep appreciation and a renewed sense of purpose.",
    imageUrl: "/images/impact-report/impact-report-2024.png",
    linkUrl: "https://heyzine.com/flip-book/a7ee0bc0d2.html",
  },
];