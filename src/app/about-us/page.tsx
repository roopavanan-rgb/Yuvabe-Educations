import { Metadata } from "next";
import AboutUsClient from "./AboutUsClient";

export const metadata: Metadata = {
  title: "About Us | Yuvabe Education",
  description:
    "Learn more about Yuvabe Education’s mission, values, and our team empowering youth through purpose-driven education.",
  keywords: [
    "About Yuvabe Education",
    "Youth Empowerment",
    "Transformative Learning",
    "Educational Programs",
    "Social Impact",
  ],
  alternates: {
    canonical: "https://yuvabeeducation.com/about-us",
  },
  openGraph: {
    title: "About Us | Yuvabe Education",
    description:
      "Discover the story behind Yuvabe Education and our commitment to empowering future leaders through transformative programs.",
    url: "https://yuvabeeducation.com/about-us",
    siteName: "Yuvabe Education",
    images: [
      {
        url: "https://yuvabeeducation.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Team Yuvabe working with students",
      },
    ],
    type: "article",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@YuvabeAuroville",
    title: "About Us | Yuvabe Education",
    description:
      "Meet the team and learn how Yuvabe Education empowers youth for a sustainable future.",
    images: ["https://yuvabeeducation.com/images/logo.png"], 
  },
};


export default function AboutPage() {
  return <AboutUsClient />;
}
