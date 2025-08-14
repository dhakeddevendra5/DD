import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";

import { inter } from "./fonts";

import { keywords } from "@/constant";
import {
  generatePersonStructuredData,
  generateWebsiteStructuredData,
  generateOrganizationStructuredData,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Devendra Dhaked",
  description:
    "Devendra Dhaked is a student developer passionate about building modern web apps with Next.js, React, and open-source tools. Explore his projects, experiments, and developer portfolio.",
  authors: [
    {
      name: "Devendra Dhaked",
      url: "https://devendra.vercel.app",
    },
  ],
  creator: "Devendra Dhaked",
  referrer: "origin-when-cross-origin",
  keywords: keywords,
  metadataBase: new URL("https://devendra.vercel.app"),

  // SEO Enhancements
  alternates: {
    canonical: "https://devendra.vercel.app",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }, // fallback
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",

  openGraph: {
    title: "Devendra Dhaked",
    description:
      "Explore Devendra Dhaked’s portfolio featuring projects in React, Next.js, AI, and developer tools. Discover a world of creative web applications and open-source experiments.",
    url: "https://devendra.vercel.app",
    siteName: "Devendra Dhaked",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Devendra Dhaked Portfolio Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Devendra Dhaked",
    description:
      "Check out Devendra Dhaked’s personal portfolio and dev projects using Next.js, React, Tailwind, and modern web tech.",
    images: ["/images/thumbnail.png"],
    creator: "@devendra_dhaked",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personStructuredData = generatePersonStructuredData();
  const websiteStructuredData = generateWebsiteStructuredData();
  const organizationStructuredData = generateOrganizationStructuredData();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
        <Toaster position="bottom-right" richColors closeButton />
      </body>
    </html>
  );
}
