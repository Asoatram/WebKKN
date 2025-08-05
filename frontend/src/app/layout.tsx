import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Gabarito, DM_Sans } from "next/font/google";
import "./globals.css";
import LenisClient from "./providers/LenisScrollPRoviders";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rupat Utara",
  description: "Hidden Beauty Of Rupat Utara",
  icons: {
    icon: "/webicon.ico",
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
        <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
