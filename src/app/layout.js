import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MWA Medicine - Premium Medical Products",
  description:
    "Explore MWA Medicine’s wide range of premium medical products and supplements designed to support your health and wellbeing. Trusted quality and effective solutions.",
  keywords:
    "MWA Medicine, medical products, health supplements, orthopedic, neurology, gynecology, internal medicine, wellness, healthcare",
  authors: [{ name: "MWA Medicine", url: "https://mwamedicine.vercel.app/" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "MWA Medicine - Premium Medical Products",
    description:
      "Explore MWA Medicine’s wide range of premium medical products and supplements designed to support your health and wellbeing.",
    url: "https://mwa-medicine.com",
    siteName: "MWA Medicine",
    images: [
      {
        url: "https://mwa-medicine.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MWA Medicine Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MWA Medicine - Premium Medical Products",
    description:
      "Explore MWA Medicine’s wide range of premium medical products and supplements designed to support your health and wellbeing.",
    images: ["https://mwa-medicine.com/images/twitter-image.jpg"],
    creator: "@MWAMedicine",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main style={{ flexGrow: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
