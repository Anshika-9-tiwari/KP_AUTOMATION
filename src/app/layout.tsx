import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import WhatsappSticky from "@/components/whatsappicon";
import ContactSticky from "@/components/contacticon";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KP Automation",
  description: "KP Automation- Industrial Automation Training and Solutions",
  icons:{
  icon: '/kp_automation.png'
 },
openGraph: {
    title: "KP Automation- Industrial Automation Experts",
    description: "Your trusted partner for automation and training solutions.",
    url: "https://kpautomation.co.in",
    siteName: "KP Automation",
    images: [
      {
        url: "https://kpautomation.co.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KPAutomation",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="kpautomation">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <Navbar />
        {children}
      
        <ContactSticky/>
        <WhatsappSticky />
        <Footer />
        <Analytics/>
      </body>
    </html>
  );
}
