import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://www.vellum.co.ke"),
  title: {
    default: "Vellum Leather Limited",
    template: "%s | Vellum Leather Limited",
  },
  description:
    "Vellum Leather Limited is a Nairobi-based leather processing company operating across the full value chain — from raw hides to premium finished leather.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Vellum Leather Limited",
    description:
      "Vellum Leather Limited is a Nairobi-based leather processing company operating across the full value chain — from raw hides to premium finished leather.",
    siteName: "Vellum Leather Limited",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vellum Leather Limited",
    description:
      "Vellum Leather Limited is a Nairobi-based leather processing company operating across the full value chain — from raw hides to premium finished leather.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
