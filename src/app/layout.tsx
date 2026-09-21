import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
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
  authors: [{ name: "Rakib Dhali" }],
  creator: "Rakib Dhali",
  publisher: "Rakib Dhali",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${roboto.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('trackify-theme') === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
