"use client";

import React from "react";
import { IconArrowUp, IconGithub, IconMail, IconOrcid } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-16 pt-10 pb-16 border-t border-slate-200 text-slate-500 text-xs sm:text-sm">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left max-w-lg">
          <p className="italic text-slate-600 font-serif text-sm sm:text-base">
            &ldquo;Science is built upon curiosity, precision, and empathy — three things I aspire to bring into Medical AI.&rdquo;
          </p>
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} KuoCh&apos;ing Chang (张瀚文). All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/dnimo"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <IconGithub className="w-4 h-4" />
            </a>
            <a
              href="https://orcid.org/0009-0007-6956-0814"
              target="_blank"
              rel="noreferrer"
              aria-label="ORCID"
              className="p-2 text-slate-400 hover:text-[#A6CE39] hover:bg-slate-100 rounded-lg transition-colors"
            >
              <IconOrcid className="w-4 h-4" />
            </a>
            <a
              href="mailto:kuochingchang@agent.soc.i.kyoto-u.ac.jp"
              aria-label="Email"
              className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <IconMail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-slate-300 shadow-xs transition-colors text-xs font-medium"
            title="Scroll to top"
          >
            <IconArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
