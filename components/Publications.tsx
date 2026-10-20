"use client";

import React, { useState } from "react";
import { IconExternalLink, IconCopy, IconCheck, IconCode } from "./Icons";

interface Publication {
  id: string;
  title: string;
  authors: React.ReactNode;
  venue: string;
  venueDetail?: string;
  type: "conference" | "preprint" | "journal";
  typeLabel: string;
  links: { label: string; href: string }[];
  bibtex: string;
}

const publications: Publication[] = [
  {
    id: "prima2026",
    title: "Physics-Informed Multi-Agent Coordination for Hospital Patient Flow Optimization",
    authors: (
      <span>
        <strong className="text-indigo-900 bg-indigo-50 px-1 py-0.5 rounded font-semibold">Zhang, G.</strong>, Hadfi, R., &amp; Ito, T.
      </span>
    ),
    venue: "The 27th International Conference on Principles and Practice of Multi-Agent Systems (PRIMA 2026)",
    venueDetail: "Kumamoto, Japan · Dec 14–17, 2026",
    type: "conference",
    typeLabel: "Conference",
    links: [
      { label: "Conference Details", href: "https://sites.google.com/view/prima2026" }
    ],
    bibtex: `@inproceedings{zhang2026physics,
  title={Physics-Informed Multi-Agent Coordination for Hospital Patient Flow Optimization},
  author={Zhang, Guoqing and Hadfi, Rafik and Ito, Takayuki},
  booktitle={The 27th International Conference on Principles and Practice of Multi-Agent Systems (PRIMA 2026)},
  year={2026},
  address={Kumamoto, Japan}
}`
  },
  {
    id: "nbce2024",
    title: "Optimizing Automatic Summarization of Long Clinical Records Using Dynamic Context Extension: Testing and Evaluation of the NBCE Method",
    authors: (
      <span>
        <strong className="text-indigo-900 bg-indigo-50 px-1 py-0.5 rounded font-semibold">Zhang, G.</strong>, Fukuyama, K., Kishimoto, K., &amp; Kuroda, T.
      </span>
    ),
    venue: "arXiv preprint",
    venueDetail: "arXiv:2411.08586 [cs.CL]",
    type: "preprint",
    typeLabel: "Preprint",
    links: [
      { label: "arXiv:2411.08586", href: "https://arxiv.org/abs/2411.08586" },
      { label: "PDF", href: "https://arxiv.org/pdf/2411.08586" }
    ],
    bibtex: `@article{zhang2024optimizing,
  title={Optimizing Automatic Summarization of Long Clinical Records Using Dynamic Context Extension: Testing and Evaluation of the NBCE Method},
  author={Zhang, Guoqing and Fukuyama, Kensuke and Kishimoto, Katsuhiko and Kuroda, Tomohiro},
  journal={arXiv preprint arXiv:2411.08586},
  year={2024}
}`
  },
  {
    id: "depression2025",
    title: "Study on subtyping and Traditional Chinese Medicine treatment of depression based on machine learning and text mining",
    authors: (
      <span>
        Mengyue, F., Lin, Y., <strong className="text-indigo-900 bg-indigo-50 px-1 py-0.5 rounded font-semibold">Guoqing, Z.</strong>, et al.
      </span>
    ),
    venue: "Journal of Traditional Chinese Medicine",
    venueDetail: "Vol. 45, No. 5, pp. 1152–1163",
    type: "journal",
    typeLabel: "Journal Article",
    links: [
      { label: "PubMed: 41015814", href: "https://pubmed.ncbi.nlm.nih.gov/41015814/" },
      { label: "PMCID: PMC12454262", href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12454262/" }
    ],
    bibtex: `@article{mengyue2025study,
  title={Study on subtyping and Traditional Chinese Medicine treatment of depression based on machine learning and text mining},
  author={Mengyue, Fang and Lin, Yang and Guoqing, Zhang and others},
  journal={Journal of Traditional Chinese Medicine},
  volume={45},
  number={5},
  pages={1152--1163},
  year={2025}
}`
  }
];

export default function Publications() {
  const [filter, setFilter] = useState<"all" | "conference" | "journal">("all");
  const [openBibId, setOpenBibId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPublications = publications.filter((pub) => {
    if (filter === "all") return true;
    if (filter === "conference") return pub.type === "conference" || pub.type === "preprint";
    if (filter === "journal") return pub.type === "journal";
    return true;
  });

  const handleCopyBibtex = (id: string, bibtex: string) => {
    navigator.clipboard.writeText(bibtex);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="publications" className="section-wrapper">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Publications &amp; Preprints
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Published under official name <strong className="text-slate-900 font-semibold">Guoqing Zhang</strong> (Zhang, G. / Guoqing, Z.)
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg self-start sm:self-auto text-xs font-medium">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded-md transition-colors ${
              filter === "all" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            All ({publications.length})
          </button>
          <button
            onClick={() => setFilter("conference")}
            className={`px-3 py-1 rounded-md transition-colors ${
              filter === "conference" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Conf &amp; Preprints (2)
          </button>
          <button
            onClick={() => setFilter("journal")}
            className={`px-3 py-1 rounded-md transition-colors ${
              filter === "journal" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Journals (1)
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredPublications.map((pub, idx) => (
          <div key={pub.id} className="academic-card group">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
              <span className="badge-indigo text-[11px] self-start">{pub.typeLabel}</span>
              {pub.venueDetail && (
                <span className="text-xs text-slate-500 font-medium">{pub.venueDetail}</span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-1.5 group-hover:text-indigo-950">
              {pub.title}
            </h3>

            {/* Authors */}
            <div className="text-sm text-slate-700 mb-1.5 leading-relaxed">
              {pub.authors}
            </div>

            {/* Venue */}
            <div className="text-xs sm:text-sm text-slate-600 italic mb-3">
              {pub.venue}
            </div>

            {/* Action Badges & BibTeX Toggle */}
            <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100">
              {pub.links.map((link, lIdx) => (
                <a
                  key={lIdx}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 border border-slate-200 transition-colors"
                >
                  <span>{link.label}</span>
                  <IconExternalLink className="w-3 h-3 text-slate-400 group-hover:text-indigo-500" />
                </a>
              ))}

              <button
                type="button"
                onClick={() => setOpenBibId(openBibId === pub.id ? null : pub.id)}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium border transition-colors ${
                  openBibId === pub.id
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                }`}
              >
                <IconCode className="w-3 h-3" />
                <span>BibTeX</span>
              </button>
            </div>

            {/* Expandable BibTeX Drawer */}
            {openBibId === pub.id && (
              <div className="mt-3 relative bg-slate-900 text-slate-100 rounded-lg p-3 text-xs font-mono overflow-x-auto">
                <div className="flex justify-between items-center mb-2 pb-1.5 border-b border-slate-800">
                  <span className="text-[11px] text-slate-400">BibTeX Citation</span>
                  <button
                    onClick={() => handleCopyBibtex(pub.id, pub.bibtex)}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition-colors"
                  >
                    {copiedId === pub.id ? (
                      <>
                        <IconCheck className="w-3 h-3 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <IconCopy className="w-3 h-3 text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="whitespace-pre overflow-x-auto text-slate-300">
                  {pub.bibtex}
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
