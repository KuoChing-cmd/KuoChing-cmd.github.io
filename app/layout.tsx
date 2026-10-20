// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "KuoCh'ing Chang (张瀚文) — Ph.D. Candidate in Informatics, Kyoto University",
  description:
    "KuoCh'ing Chang (张瀚文 / Guoqing Zhang), Ph.D. candidate in Informatics at Kyoto University. Research in Long-Context LLMs, Trustworthy Medical AI, Multi-Agent Reinforcement Learning, and Safe Decision Systems.",
  icons: {
    icon: "/favicon.ico"
  },
  metadataBase: new URL("https://kuoching-cmd.github.io"),
  openGraph: {
    title: "KuoCh'ing Chang — Medical AI & Multi-Agent Systems",
    description:
      "Ph.D. candidate at Kyoto University working on Long-Context LLMs, Medical AI, Multi-Agent Reinforcement Learning, and Large-Scale Decision-Making Systems.",
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
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50/60">
        <Navbar />
        <main className="page-container flex-1 py-6 sm:py-8 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
