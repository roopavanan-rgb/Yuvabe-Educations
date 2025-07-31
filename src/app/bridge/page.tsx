import { Metadata } from "next";
import BridgeClient from "./BridgeClient";

export const metadata: Metadata = {
  title: "Bridge Program | Yuvabe Education",
  description:
    "Discover Yuvabe Education’s Bridge Program — equipping youth with 21st-century skills in digital marketing, sustainability, design, and personal growth.",
  keywords: [
    "Bridge Program",
    "Yuvabe Bridge",
    "Digital Marketing Course",
    "UI/UX Course",
    "Corporate Sustainability",
    "Youth Empowerment",
    "Skill Development",
  ],
  alternates: {
    canonical: "https://yuvabeeducation.com/bridge",
  },
  openGraph: {
    title: "Bridge Program | Yuvabe Education",
    description:
      "Yuvabe’s Bridge Program prepares youth with hands-on experience and mentorship in design, sustainability, and digital skills.",
    url: "https://yuvabeeducation.com/bridge",
    siteName: "Yuvabe Education",
    images: [
      {
        url: "https://yuvabeeducation.com/images/og-bridge.jpg", // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Bridge Program students learning in Auroville",
      },
    ],
    type: "article",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@YuvabeAuroville",
    title: "Bridge Program | Yuvabe Education",
    description:
      "Empowering youth with real-world training in sustainability, design, research, and marketing.",
    images: ["https://yuvabeeducation.com/images/og-bridge.jpg"],
  },
};

export default function BridgePage() {
  return <BridgeClient />;
}
