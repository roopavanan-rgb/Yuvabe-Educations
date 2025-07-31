import { Metadata } from "next";
import SteamClient from "./SteamClient";

export const metadata: Metadata = {
  title: "STEAM Program | Yuvabe Education",
  description:
    "Explore Yuvabe Education’s STEAM programs — blending Science, Technology, Engineering, Arts, and Math to foster creativity and innovation in young minds.",
  keywords: [
    "STEAM Education",
    "Yuvabe Education STEAM",
    "Science and Technology Learning",
    "Creative Learning Programs",
    "Innovative Education",
  ],
  alternates: {
    canonical: "https://yuvabeeducation.com/steam",
  },
  openGraph: {
    title: "STEAM Program | Yuvabe Education",
    description:
      "Join our transformative STEAM programs focused on empowering students with curiosity, creativity, and real-world problem-solving.",
    url: "https://yuvabeeducation.com/steam",
    siteName: "Yuvabe Education",
    images: [
      {
        url: "https://yuvabeeducation.com/images/logo.png", 
        width: 1200,
        height: 630,
        alt: "Students engaging in STEAM activities",
      },
    ],
    type: "article",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@YuvabeAuroville",
    title: "STEAM Program | Yuvabe Education",
    description:
      "Empowering future innovators with hands-on STEAM learning experiences.",
    images: ["https://yuvabeeducation.com/images/logo.png"],
  },
};

export default function SteamPage() {
  return <SteamClient />;
}
