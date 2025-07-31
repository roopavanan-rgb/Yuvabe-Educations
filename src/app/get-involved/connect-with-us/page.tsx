import { Metadata } from "next";
import ConnectClient from "./ConnectClient";

export const metadata: Metadata = {
  title: "Connect With Us | Yuvabe Education",
  description:
    "Have a question or want to collaborate with Yuvabe Education? Reach out to our team and let's build something impactful together.",
  keywords: [
    "Contact Yuvabe",
    "Connect With Yuvabe Education",
    "Yuvabe Email",
    "Partner With Yuvabe",
    "Youth Education Collaboration",
    "Get Involved India Education",
  ],
  alternates: {
    canonical: "https://yuvabeeducation.com/get-involved/connect-with-us",
  },
  openGraph: {
    title: "Connect With Us | Yuvabe Education",
    description:
      "Reach out to Yuvabe Education for collaboration, questions, or partnership opportunities. We’d love to hear from you!",
    url: "https://yuvabeeducation.com/get-involved/connect-with-us",
    siteName: "Yuvabe Education",
    images: [
      {
        url: "https://yuvabeeducation.com/logo.png", 
        width: 1200,
        height: 630,
        alt: "Team Yuvabe engaging in conversation",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@YuvabeAuroville",
    title: "Connect With Us | Yuvabe Education",
    description:
      "Looking to collaborate or ask a question? Contact Yuvabe today — we’d love to connect.",
    images: ["https://yuvabeeducation.com/logo.png"],
  },
};

export default function ConnectPage() {
  return <ConnectClient />;
}
