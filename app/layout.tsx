import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hdhub4u",
  description: "Hdhub4u is a movie downloading site",
  verification: {
    google: "RIT7T3i8wpxWnxXXQCh7PkM1LG_AzuRTKyTZQ3iya_Q",
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
        {/* Ad Script 2 (simple script) */}
        <Script
          src="https://pl28428760.effectivegatecpm.com/01/a7/a9/01a7a99e8258c0577b7ec7885fa2c45e.js"
          strategy="afterInteractive"
        />

        {/* Ad Script 1 (invoke script) */}
        <Script
          src="https://pl28428807.effectivegatecpm.com/948903f3e670fd614e88dca3f54402ee/invoke.js"
          strategy="afterInteractive"
          async
          data-cfasync="false"
        />
        <Script
  src="https://pl28428899.effectivegatecpm.com/6d/26/89/6d2689deabf0b8eb20c8e8d53f12b926.js"
  strategy="afterInteractive"
/>

      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Ad container (MUST be in body) */}
       <div
  id="container-948903f3e670fd614e88dca3f54402ee"
  style={{
     position: "fixed",
    bottom: "16px",
    right: "16px",          // 👉 push to right
    transform: "scale(0.45)", // 👉 reduce size MORE
    transformOrigin: "bottom right",
    zIndex: 999999,
    pointerEvents: "auto",
  }}
></div>


        {children}
      </body>
    </html>
  );
}
