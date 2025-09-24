import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import Navbar from '../components/navbar'; 
import Footer from '../components/footer';
import WhatsappSticky from "@/components/whatsappicon";
import ContactSticky from "@/components/contacticon";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <Navbar />
        {children}
        <Analytics/>
        <ContactSticky/>
        <WhatsappSticky />
        <Footer/>
      </body>
    </html>
  );
}
