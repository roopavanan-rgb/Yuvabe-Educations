import { Metadata } from "next";
import DonateClient from "./DonateClient";

export const metadata: Metadata = {
  title: "Donate Us | Yuvabe Education",
  description:
    "Support youth empowerment and education in India by donating to Yuvabe Education. Every contribution creates lasting impact.",
  keywords: [
    "Donate to Yuvabe",
    "Support Youth Education",
    "Educational Nonprofit India",
    "Yuvabe Contribution",
    "Empowerment through Education",
    "Social Impact Donation",
  ],
  alternates: {
    canonical: "https://yuvabeeducation.com/get-involved/donate",
  },
  openGraph: {
    title: "Donate | Yuvabe Education",
    description:
      "Help Yuvabe Education empower future leaders. Your donation fuels transformative learning and sustainable change.",
    url: "https://yuvabeeducation.com/get-involved/donate",
    siteName: "Yuvabe Education",
    images: [
      {
        url: "https://yuvabeeducation.com/images/logo.png", 
        width: 1200,
        height: 630,
        alt: "Student receiving educational support from Yuvabe",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@YuvabeAuroville",
    title: "Donate | Yuvabe Education",
    description:
      "Contribute to Yuvabe’s mission to educate and empower young minds. Donate today and make a difference.",
    images: ["https://yuvabeeducation.com/images/logo.png"],
  },
};

export default function DonatePage() {
  return <DonateClient />;
}
