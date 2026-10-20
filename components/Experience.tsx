import React from "react";
import { IconExternalLink } from "./Icons";

interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  subdivision?: string;
  lab?: { name: string; url: string };
  advisor?: string;
  fellowship?: string;
  focus: string;
}

interface WorkItem {
  period: string;
  role: string;
  company: string;
  department?: string;
  bulletPoints: string[];
}

const educationData: EducationItem[] = [
  {
    period: "Oct 2025 – Present",
    degree: "Ph.D. in Informatics",
    institution: "Kyoto University",
    subdivision: "Department of Social Informatics, Graduate School of Informatics",
    lab: {
      name: "Takayuki Ito Laboratory",
      url: "https://www.agent.soc.i.kyoto-u.ac.jp"
    },
    advisor: "Prof. Takayuki Ito",
    fellowship: "DoGS SPRING Program Fellow (JST)",
    focus: "Multi-Agent RL, Mechanism Design, Safe Decision Systems, LLM Agents."
  },
  {
    period: "Apr 2023 – Apr 2025",
    degree: "M.Sc. in Informatics",
    institution: "Kyoto University",
    subdivision: "Medical Informatics Planning Division, Graduate School of Medicine, Kyoto University Hospital",
    lab: {
      name: "Medical Informatics Planning Division (Kuroda Laboratory)",
      url: "https://medinfo.kuhp.kyoto-u.ac.jp"
    },
    advisor: "Prof. Tomohiro Kuroda (黒田 知宏 教授)",
    focus: "Clinical NLP, Long-Context Modeling, LLM Summarization for electronic medical records."
  }
];

const workData: WorkItem[] = [
  {
    period: "Apr 2025 – Oct 2025",
    role: "AI R&D Intern",
    company: "MsunHealth (Beijing) Co., Ltd.",
    bulletPoints: [
      "Built hospital EMR data processing pipelines and deployed long-context summarization models into real hospital environments.",
      "Achieved 63% reduction in inference latency through model optimization, pruning, and serving infrastructure improvements.",
      "Partnered closely with hospital HIS engineers to deliver high-throughput, production-ready RESTful APIs."
    ]
  },
  {
    period: "Jul 2021 – Sep 2021",
    role: "Technical Operations Intern",
    company: "Whale Cloud Technology",
    bulletPoints: [
      "Supported the China Mobile enterprise cloud storage infrastructure, conducting service stability tests and system fault diagnostics.",
      "Authored custom automated operational scripts, boosting operational efficiency by 30%+ across a 100+ server cluster."
    ]
  },
  {
    period: "Oct 2020 – Jun 2022",
    role: "Microsoft Student Ambassador",
    company: "Microsoft",
    bulletPoints: [
      "Represented China in the Microsoft Student Ambassador Asia program.",
      "Organized technical workshops and collaborated with global developer communities on healthcare and cloud computing projects."
    ]
  }
];

export default function Experience() {
  return (
    <div id="experience" className="section-wrapper space-y-12">
      {/* Education */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-6">
          Education
        </h2>

        <div className="space-y-5">
          {educationData.map((edu, idx) => (
            <div key={idx} className="academic-card flex flex-col sm:flex-row gap-4 sm:gap-6">
              {/* Period Column */}
              <div className="sm:w-44 shrink-0">
                <span className="badge-slate font-mono text-xs">{edu.period}</span>
              </div>

              {/* Details Column */}
              <div className="flex-1 space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {edu.degree}
                  </h3>
                  <span className="text-slate-400">·</span>
                  <span className="font-semibold text-slate-800">{edu.institution}</span>
                </div>

                {edu.fellowship && (
                  <div>
                    <span className="badge-indigo text-[11px]">{edu.fellowship}</span>
                  </div>
                )}

                {edu.subdivision && (
                  <p className="text-xs sm:text-sm text-slate-600">
                    {edu.subdivision}
                  </p>
                )}

                {edu.lab && (
                  <p className="text-xs sm:text-sm text-slate-600">
                    <strong>Laboratory:</strong>{" "}
                    <a
                      href={edu.lab.url}
                      target="_blank"
                      rel="noreferrer"
                      className="academic-link"
                    >
                      {edu.lab.name}
                      <IconExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </p>
                )}

                {edu.advisor && (
                  <p className="text-xs sm:text-sm text-slate-600">
                    <strong>Advisor:</strong> {edu.advisor}
                  </p>
                )}

                <p className="text-xs sm:text-sm text-slate-700 pt-1">
                  <strong>Research:</strong> {edu.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-6">
          Work &amp; Industry Experience
        </h2>

        <div className="space-y-5">
          {workData.map((work, idx) => (
            <div key={idx} className="academic-card flex flex-col sm:flex-row gap-4 sm:gap-6">
              {/* Period Column */}
              <div className="sm:w-44 shrink-0">
                <span className="badge-slate font-mono text-xs">{work.period}</span>
              </div>

              {/* Details Column */}
              <div className="flex-1 space-y-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {work.role}
                  </h3>
                  <div className="text-sm font-medium text-slate-700">
                    {work.company}
                  </div>
                </div>

                <ul className="list-disc list-outside ml-4 text-xs sm:text-sm text-slate-600 space-y-1 leading-relaxed">
                  {work.bulletPoints.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
