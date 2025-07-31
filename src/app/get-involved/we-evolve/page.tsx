import { Metadata } from "next";
import WeEvolveClient from "./WeEvolveClient";

export const metadata: Metadata = {
  title: "We Evolve | Yuvabe Education",
  description:
    "Evolve with Yuvabe Education through mentorship, immersive learning, and community-driven experiences that shape purposeful youth leaders.",
  keywords: [
    "We Evolve",
    "Yuvabe Mentorship",
    "Youth Development",
    "Transformative Learning",
    "Get Involved Yuvabe",
    "Personal Growth Programs",
  ],
  alternates: {
    canonical: "https://yuvabeeducation.com/get-involved/we-evolve",
  },
  openGraph: {
    title: "We Evolve | Yuvabe Education",
    description:
      "Join 'We Evolve' — a space for mentors, educators, and learners to grow together through meaningful educational engagements and reflection.",
    url: "https://yuvabeeducation.com/get-involved/we-evolve",
    siteName: "Yuvabe Education",
    images: [
      {
        url: "https://yuvabeeducation.com/images/logo.png", 
        width: 1200,
        height: 630,
        alt: "Youth engaged in learning with Yuvabe mentors",
      },
    ],
    type: "article",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@YuvabeAuroville",
    title: "We Evolve | Yuvabe Education",
    description:
      "Explore the transformative journey of learning and evolving with Yuvabe through our mentorship-driven programs.",
    images: ["https://yuvabeeducation.com/images/logo.png"],
  },
};

export default function WeEvolvePage() {
  return <WeEvolveClient />;
}
