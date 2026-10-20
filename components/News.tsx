import React from "react";
import { IconExternalLink } from "./Icons";

interface NewsItem {
  date: string;
  category: "Conference" | "Milestone" | "Internship" | "Preprint";
  content: React.ReactNode;
}

const newsList: NewsItem[] = [
  {
    date: "Dec 2026",
    category: "Conference",
    content: (
      <span>
        Paper accepted at <strong>PRIMA 2026</strong> (The 27th International Conference on Principles and Practice
        of Multi-Agent Systems): <em>Physics-Informed Multi-Agent Coordination for Hospital Patient Flow Optimization</em> (Kumamoto, Japan).
      </span>
    )
  },
  {
    date: "Oct 2025",
    category: "Milestone",
    content: (
      <span>
        Started Ph.D. in Informatics at <strong>Kyoto University</strong> as a{" "}
        <strong className="text-slate-900">DoGS SPRING Program Fellow (JST)</strong> in Prof. Takayuki Ito&apos;s Laboratory.
      </span>
    )
  },
  {
    date: "Apr 2025",
    category: "Internship",
    content: (
      <span>
        Joined <strong>MsunHealth</strong> as an AI R&D Intern, focusing on long-context clinical summarization pipelines
        and multi-agent nurse scheduling systems integrated into hospital HIS.
      </span>
    )
  },
  {
    date: "Nov 2024",
    category: "Preprint",
    content: (
      <span>
        Preprint published on arXiv:{" "}
        <a
          href="https://arxiv.org/abs/2411.08586"
          target="_blank"
          rel="noreferrer"
          className="academic-link"
        >
          Optimizing Automatic Summarization of Long Clinical Records Using Dynamic Context Extension
          <IconExternalLink className="w-3.5 h-3.5" />
        </a>
        .
      </span>
    )
  }
];

function getCategoryBadge(category: NewsItem["category"]) {
  switch (category) {
    case "Conference":
      return "badge-indigo";
    case "Milestone":
      return "badge-emerald";
    case "Internship":
      return "badge-amber";
    case "Preprint":
      return "badge-slate";
    default:
      return "badge-slate";
  }
}

export default function News() {
  return (
    <section id="news" className="section-wrapper">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
          <span>News &amp; Updates</span>
        </h2>
      </div>

      <div className="relative pl-6 border-l-2 border-slate-200 space-y-6 ml-2">
        {newsList.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline dot */}
            <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-indigo-600 ring-4 ring-slate-50 group-hover:bg-indigo-600 transition-colors" />

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3">
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-bold text-slate-500 font-mono tracking-tight">
                  [{item.date}]
                </span>
                <span className={getCategoryBadge(item.category)}>{item.category}</span>
              </div>
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
