"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IconMail, IconGithub, IconOrcid, IconCopy, IconCheck, IconExternalLink } from "./Icons";

const researchChips = [
  "Long-Context LLMs",
  "Trustworthy Medical AI",
  "Multi-Agent RL",
  "Safe Decision Systems",
  "Mechanism Design",
  "Clinical Summarization"
];

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const email = "kuochingchang@agent.soc.i.kyoto-u.ac.jp";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="pt-4 pb-10 sm:pb-12 border-b border-slate-200/80">
      <div className="flex flex-col-reverse md:flex-row md:items-start gap-8 lg:gap-10">
        {/* Left Column: Bio & Details */}
        <div className="flex-1 space-y-5">
          {/* Main Title & Status */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="badge-indigo">DoGS SPRING Fellow (JST)</span>
              <span className="badge-slate">Kyoto University</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Guoqing Zhang{" "}
              <span className="font-normal text-slate-500 text-xl sm:text-2xl block sm:inline mt-1 sm:mt-0">
                (张瀚文)
              </span>
            </h1>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm text-slate-500">
              <span><strong>Official &amp; Passport:</strong> Guoqing Zhang</span>
              <span>·</span>
              <span><strong>Wade-Giles:</strong> KuoCh&apos;ing Chang</span>
            </div>
          </div>

          {/* Academic Affiliation */}
          <div className="text-slate-700 leading-relaxed text-sm sm:text-base space-y-1.5 bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/60">
            <p>
              <strong>Ph.D. Candidate in Informatics</strong> ·{" "}
              <a
                href="https://www.agent.soc.i.kyoto-u.ac.jp"
                target="_blank"
                rel="noreferrer"
                className="academic-link"
              >
                Takayuki Ito Laboratory
                <IconExternalLink className="w-3.5 h-3.5" />
              </a>
            </p>
            <p className="text-slate-600 text-xs sm:text-sm">
              Department of Social Informatics, Graduate School of Informatics, Kyoto University
            </p>
            <p className="text-slate-600 text-xs sm:text-sm">
              <strong>Advisor:</strong> Prof. Takayuki Ito
            </p>
          </div>

          {/* Bio paragraph from updated CV */}
          <div className="text-slate-700 text-base leading-relaxed space-y-3">
            <p>
              I am a research-oriented Ph.D. candidate focusing on{" "}
              <strong className="text-slate-900 font-semibold">
                long-context LLMs, trustworthy medical AI, multi-agent reinforcement learning
              </strong>
              , and <strong className="text-slate-900 font-semibold">large-scale decision-making systems</strong>.
            </p>
            <p className="text-slate-600 text-sm sm:text-base">
              With a solid engineering foundation in distributed training, model deployment, and hospital system
              integration, I strive to convert <em>ideas → algorithms → systems → real-world clinical deployment</em>,
              building scalable, robust, and interpretable intelligence for high-stakes environments.
            </p>
          </div>

          {/* Research Chips */}
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Core Research Focus
            </div>
            <div className="flex flex-wrap gap-2">
              {researchChips.map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-white text-slate-700 border border-slate-200/80 shadow-xs hover:border-indigo-300 hover:text-indigo-700 hover:bg-indigo-50/50 transition-colors"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Action & Contact Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 transition-colors shadow-xs"
              title="Copy Email Address"
            >
              {copied ? (
                <>
                  <IconCheck className="w-4 h-4 text-emerald-300" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <IconCopy className="w-4 h-4" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href="mailto:kuochingchang@agent.soc.i.kyoto-u.ac.jp"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-xs"
            >
              <IconMail className="w-4 h-4 text-slate-500" />
              <span>Send Mail</span>
            </a>

            <a
              href="https://github.com/KuoChing-cmd"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-xs"
            >
              <IconGithub className="w-4 h-4 text-slate-700" />
              <span>GitHub</span>
            </a>

            <a
              href="https://orcid.org/0009-0007-6956-0814"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-xs"
            >
              <IconOrcid className="w-4 h-4 text-[#A6CE39]" />
              <span>ORCID</span>
            </a>
          </div>
        </div>

        {/* Right Column: Profile Image & Location */}
        <div className="shrink-0 flex flex-col items-center sm:items-start md:items-end">
          <div className="relative group">
            <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 relative overflow-hidden rounded-2xl border-2 border-white shadow-md ring-1 ring-slate-200">
              <Image
                src="/assets/profile_2.jpeg"
                alt="Guoqing Zhang (KuoCh'ing Chang)"
                fill
                sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 208px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            {/* Location pill */}
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/95 backdrop-blur-sm border border-slate-200 px-3 py-0.5 rounded-full text-xs font-medium text-slate-700 shadow-xs flex items-center gap-1">
              <span>📍</span>
              <span>Kyoto, Japan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
