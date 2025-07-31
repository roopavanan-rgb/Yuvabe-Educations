import { Metadata } from "next";
import WeServeClient from "./WeServeClient";

export const metadata: Metadata = {
  title: "We Serve | Yuvabe Education",
  description:
    "Join Yuvabe Education’s 'We Serve' initiative — engage with purposeful community projects and support youth-driven impact in Auroville and beyond.",
  keywords: [
    "We Serve",
    "Yuvabe Education Volunteer",
    "Youth Community Service",
    "Purposeful Projects",
    "Social Impact Education",
    "Get Involved Yuvabe",
  ],
  alternates: {
    canonical: "https://yuvabeeducation.com/get-involved/we-serve",
  },
  openGraph: {
    title: "We Serve | Yuvabe Education",
    description:
      "Discover how you can contribute to meaningful youth-led initiatives through Yuvabe's 'We Serve' platform for volunteering and mentorship.",
    url: "https://yuvabeeducation.com/get-involved/we-serve",
    siteName: "Yuvabe Education",
    images: [
      {
        url: "https://yuvabeeducation.com/images/logo.png", 
        width: 1200,
        height: 630,
        alt: "Yuvabe volunteers in community service",
      },
    ],
    type: "article",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@YuvabeAuroville",
    title: "We Serve | Yuvabe Education",
    description:
      "Support and serve with Yuvabe — enable youth to make a difference through hands-on community service projects.",
    images: ["https://yuvabeeducation.com/images/logo.png"],
  },
};

export default function WeServePage() {
  return <WeServeClient />;
}
