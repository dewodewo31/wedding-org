import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/assets/css/index.css";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Wedding Organizer APP",
  description: "Get your best wedding moment in life",
};

export default function RootLayout({ 
  children,
  modal
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode; }>) {
  return (
    <html lang="en" className={`${geistSans.variable}`}>
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased font-poppins">
        {children}
        {modal}

        <ToastContainer/>
      </body>
    </html>
  );
}
