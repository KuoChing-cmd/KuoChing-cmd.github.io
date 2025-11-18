// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KuoCh'ing Chang — PhD Candidate in Informatics, Kyoto University",
  description:
    "KuoCh'ing Chang (张瀚文), PhD candidate in Informatics at Kyoto University. Research in Medical AI, Clinical Summarization, Multi-Agent Systems, and Reinforcement Learning.",
  icons: {
    icon: "/favicon.ico"
  },
  metadataBase: new URL("https://kuoching-cmd.github.io"),
  openGraph: {
    title: "KuoCh'ing Chang — Medical AI & Multi-Agent Systems",
    description:
      "PhD candidate at Kyoto University working on Medical AI, Clinical Summarization, Multi-Agent Systems, and Reinforcement Learning.",
    url: "https://kuoching-cmd.github.io",
    siteName: "KuoCh'ing Chang",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="page-container py-10 lg:py-16">
          {children}
        </main>
      </body>
    </html>
  );
}
