import { Metadata } from "next";
import Hero from "./Hero";

export const metadata: Metadata = {
  title:
    "Problem to Pitch – Advanced Design Thinking Workshop in Auroville | Yuvabe Education",
  description:
    "Problem to Pitch by Yuvabe Education is a five-day, hands-on Advanced Design Thinking workshop in Auroville. Work on real-world problems, validate solutions with users, and confidently pitch industry-ready ideas.",
  keywords: [
    "Advanced Design Thinking Workshop",
    "UX Workshop India",
    "Design Thinking Auroville",
    "UX Research Training",
    "Product Design Workshop",
    "Industry Mentored Design Program",
    "Yuvabe Education",
  ],
  alternates: {
    canonical: "https://yuvabeeducation.com/bridge",
  },
  openGraph: {
    title:
      "Problem to Pitch – Advanced Design Thinking Workshop | Yuvabe Education",
    description:
      "A five-day immersive design thinking workshop in Auroville. Learn from industry mentors, validate ideas with real users, and build a pitch-ready case study.",
    url: "https://yuvabeeducation.com/bridge/advanced-design-workshop",
    siteName: "Yuvabe Education",
    images: [
      {
        url: "https://yuvabeeducation.com/images/problem.jpg",
        width: 1200,
        height: 630,
        alt: "Problem to Pitch students learning in Auroville",
      },
    ],
    type: "article",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@YuvabeAuroville",
    title:
      "Problem to Pitch – Advanced Design Thinking Workshop | Yuvabe Education",
    description:
      "Five-day immersive design thinking workshop in Auroville with industry mentors.",
    images: ["https://yuvabeeducation.com/images/problem.jpg"],
  },
};

export default function BridgePage() {
  return <Hero />;
}
