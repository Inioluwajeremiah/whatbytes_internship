import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WhatBytes Frontend Internship Assessment",
  description:
    "A technical challenge completed as part of the application process for a frontend internship at WhatBytes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full`}
      >
        <Header />

        <div className=" w-full flex flex-row justify-between">
          <Navbar />
          <main className="w-full lg:w-[75%]">{children}</main>
        </div>
      </body>
    </html>
  );
}
