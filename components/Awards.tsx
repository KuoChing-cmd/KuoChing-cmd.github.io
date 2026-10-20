import React from "react";
import { IconExternalLink, IconAward } from "./Icons";

interface AwardItem {
  title: string;
  organization: string;
  year?: string;
  description?: string;
  link?: { label: string; href: string };
}

const awards: AwardItem[] = [
  {
    title: "DoGS SPRING Program Fellow",
    organization: "Kyoto University, Division of Graduate Studies / JST",
    year: "2025 – Present",
    description: "Supported by Japan Science and Technology Agency (JST) for doctoral research excellence."
  },
  {
    title: "Spring 2023 Scholar",
    organization: "Nishimura International Scholarship Foundation (NISF)",
    year: "2023",
    description: "Awarded to outstanding international graduate researchers in Japan.",
    link: { label: "Foundation Website", href: "https://www.nisf.or.jp/" }
  },
  {
    title: "Second Prize",
    organization: "China Chemistry Olympiad (Preliminary)",
    year: "National High School Competition",
    link: {
      label: "View Certificate",
      href: "https://raw.githubusercontent.com/dnimo/img/master/%E5%8C%96%E5%AD%A6%E5%A5%A5%E4%BB%81%E5%8C%B9%E5%85%8B.jpeg"
    }
  }
];

export default function Awards() {
  return (
    <section id="awards" className="section-wrapper">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
          <span>Selected Honors &amp; Awards</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {awards.map((award, idx) => (
          <div key={idx} className="academic-card flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="p-1.5 rounded-lg bg-amber-50 text-amber-600 border border-amber-200/60 inline-flex">
                  <IconAward className="w-4 h-4" />
                </span>
                {award.year && (
                  <span className="text-[11px] font-mono font-medium text-slate-500">
                    {award.year}
                  </span>
                )}
              </div>

              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug mb-1">
                {award.title}
              </h3>
              <div className="text-xs font-medium text-indigo-700 mb-2">
                {award.organization}
              </div>

              {award.description && (
                <p className="text-xs text-slate-600 leading-relaxed">
                  {award.description}
                </p>
              )}
            </div>

            {award.link && (
              <div className="pt-3 mt-3 border-t border-slate-100">
                <a
                  href={award.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="academic-link text-xs"
                >
                  <span>{award.link.label}</span>
                  <IconExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
