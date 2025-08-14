import type { Metadata } from "next";
import { resumeKeywords } from "@/constant";
import { generateResumeStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Resume - Devendra Dhaked",
  description:
    "View and download Devendra Dhaked's professional resume. Student developer with expertise in React, Next.js, and full-stack development.",
  keywords: resumeKeywords,
  openGraph: {
    title: "Resume - Devendra Dhaked",
    description:
      "View and download Devendra Dhaked's professional resume featuring his experience and skills as a student developer.",
    url: "https://dhakeddevendra5.vercel.app/resume",
    siteName: "Devendra Dhaked",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Devendra Dhaked Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume - Devendra Dhaked",
    description:
      "View Devendra Dhaked's professional resume and experience as a student developer.",
    images: ["/images/thumbnail.png"],
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resumeStructuredData = generateResumeStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resumeStructuredData),
        }}
      />
      {children}
    </>
  );
}
