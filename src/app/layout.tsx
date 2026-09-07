import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trackify - The Ultimate Job Application Tracker",
  description: "Organize your job search, track interview stages, and land your dream job with Trackify's powerful kanban pipeline.",
  keywords: ["job application tracker", "job search", "kanban board", "career management", "interview tracker"],
  openGraph: {
    title: "Trackify - Job Application Tracker",
    description: "Organize your job search and land your dream job.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trackify - Job Application Tracker",
    description: "Organize your job search and land your dream job.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
