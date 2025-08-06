import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Nunito_Sans, } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "./analytics"; 


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-primary",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-secondary",
});



export const metadata: Metadata = {
  title: "Yuvabe Education",
  description:
    "Empowering future leaders through transformative learning experiences.",
  keywords: [
    "Yuvabe Education",
    "Bridge Program",
    "Youth Empowerment",
    "Education",
  ],
  authors: [{ name: "Yuvabe Education", url: "https://yuvabeeducation.com" }],
  creator: "Yuvabe Education",
  publisher: "Yuvabe Education",
  icons: {
    icon: "/images/favicon.ico",
    apple: "/favicon.ico",
  },
  other: {
    "google-site-verification": "NDtl3SzbQjQ7OGsJoA1I1kXuRJvFDMq0G2jQCbGikZE",
  },
  openGraph: {
    title: "Yuvabe Education",
    description: "Empowering future leaders through education.",
    url: "https://yuvabeeducation.com",
    siteName: "Yuvabe Education",
    images: [
      {
        url: "https://yuvabeeducation.com/images/foot.png",
        height: 630,
        alt: "Yuvabe Education Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@YuvabeAuroville",
    title: "Yuvabe Education",
    description: "Empowering future leaders through education.",
    images: ["https://yuvabeeducation.com/images/foot.png"],
  },
  alternates: {
    canonical: "https://yuvabeeducation.com",
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DSS59F58D1"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DSS59F58D1');
          `}
        </Script>

        {/* ✅ FundraiseUp Installation Script */}
        <Script
          id="fundraiseup-installation"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,n,a){if(!w[n]){
                var l='call,catch,on,once,set,then,track,openCheckout'.split(','),i,
                o=function(n){return'function'==typeof n?o.l.push([arguments])&&o
                :function(){return o.l.push([n,arguments])&&o}},
                t=d.getElementsByTagName(s)[0],
                j=d.createElement(s);j.async=!0;j.src='https://cdn.fundraiseup.com/widget/'+a;
                t.parentNode.insertBefore(j,t);o.s=Date.now();o.v=5;o.h=w.location.href;o.l=[];
                for(i=0;i<8;i++)o[l[i]]=o(l[i]);w[n]=o}
              })(window,document,'script','FundraiseUp','AZFTEEUK');
            `,
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${nunitoSans.variable} antialiased`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics/>
      </body>
    </html>
  );
}
