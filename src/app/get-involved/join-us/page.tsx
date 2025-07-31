import { Metadata } from "next";
import JoinUsClient from "./JoinUsClient";

export const metadata: Metadata = {
  title: "Join Us | Yuvabe Education",
  description:
    "Become a part of Yuvabe Education’s mission. Join us as a mentor, volunteer, or partner and contribute to youth-led education and impact.",
  keywords: [
    "Join Yuvabe",
    "Volunteer Education India",
    "Mentor Youth India",
    "Get Involved Yuvabe",
    "Youth Empowerment",
    "Nonprofit Collaboration",
  ],
  alternates: {
    canonical: "https://yuvabeeducation.com/get-involved/join-us",
  },
  openGraph: {
    title: "Join Us | Yuvabe Education",
    description:
      "Looking to make a difference? Join Yuvabe as a volunteer, educator, or partner and help transform lives through purposeful education.",
    url: "https://yuvabeeducation.com/get-involved/join-us",
    siteName: "Yuvabe Education",
    images: [
      {
        url: "https://yuvabeeducation.com/images/logo.png", 
        width: 1200,
        height: 630,
        alt: "Yuvabe mentors and volunteers collaborating",
      },
    ],
    type: "article",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@YuvabeAuroville",
    title: "Join Us | Yuvabe Education",
    description:
      "Partner with Yuvabe to empower young leaders. Join us as a mentor, volunteer, or collaborator today.",
    images: ["https://yuvabeeducation.com/images/logo.png"],
  },
};

export default function JoinUsPage() {
  return <JoinUsClient />;
}
