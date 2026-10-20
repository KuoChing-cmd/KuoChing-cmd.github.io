import React from "react";

interface ProjectItem {
  title: string;
  badge: string;
  badgeColor: string;
  metrics: { label: string; value: string }[];
  description: string[];
}

const projects: ProjectItem[] = [
  {
    title: "Long-Context Clinical Summarization with NBCE",
    badge: "First Author",
    badgeColor: "badge-indigo",
    metrics: [
      { label: "Decoding Speedup", value: "1.8×" },
      { label: "ROUGE-L Consistency", value: "+14.2" },
      { label: "Context Window", value: ">40k Tokens" },
      { label: "Hospital Scale", value: "30+ Depts" }
    ],
    description: [
      "Developed Neighbor-Based Context Expansion (NBCE) to enable 7B LLMs to process >40k-token clinical records without scaling up model parameter size.",
      "Designed a joint TF-IDF + semantic alignment mechanism to guarantee clinical factuality and drastically shorten latency.",
      "Architected a multi-GPU distributed inference pipeline using PyTorch DDP deployed across 30+ departments in a university hospital for daily progress notes and discharge summaries."
    ]
  },
  {
    title: "Multi-Agent RL for Nurse Scheduling (Real Hospital Deployment)",
    badge: "Production System",
    badgeColor: "badge-emerald",
    metrics: [
      { label: "Deployment Scope", value: "200+ Nurses" },
      { label: "Hospital Wards", value: "12 Wards" },
      { label: "CPU Latency", value: "80 ms" },
      { label: "Conflict Reduction", value: "-37%" }
    ],
    description: [
      "Built an end-to-end Multi-Agent Reinforcement Learning (MARL) system for hospital ward shift coordination, balancing workload equity and shift constraints.",
      "Trained PPO and Actor-Critic agents on over 30,000 real scheduling records with complex constraints.",
      "Delivered real-time sub-100ms CPU inference and seamlessly integrated with hospital HIS infrastructures via enterprise REST APIs."
    ]
  },
  {
    title: "Semantic-Constrained RL for Safe LLM Agents",
    badge: "Ongoing Project",
    badgeColor: "badge-amber",
    metrics: [
      { label: "Severe Violations", value: "-70%" },
      { label: "Benchmark Suite", value: "20+ Scenarios" },
      { label: "Architecture", value: "LLM-Critic" }
    ],
    description: [
      "Proposed “Holy Code,” a novel semantic constraint framework utilizing an LLM-Critic to enforce symbolic ethical rules over autonomous agent trajectories.",
      "Curated a specialized benchmark featuring 20+ ethical dilemma scenarios for medical triage and clinical emergency staffing.",
      "Demonstrated over 70% decrease in critical violations while preserving agent reasoning flexibility and task execution performance."
    ]
  },
  {
    title: "Multi-Modal Medical AI (Radiology + EHR)",
    badge: "Multimodal Fusion",
    badgeColor: "badge-slate",
    metrics: [
      { label: "Clinical Cohort", value: "120k+ Samples" },
      { label: "AUC Improvement", value: "+6%" },
      { label: "Modality", value: "EHR + Imaging" }
    ],
    description: [
      "Constructed deep multimodal fusion networks combining ClinicalBERT text representations with ResNet/Vision Transformer (ViT) imaging backbones.",
      "Trained on 120k+ paired clinical notes and radiology examinations to forecast patient trajectories and adverse event risks."
    ]
  }
];

export default function ResearchProjects() {
  return (
    <section id="research" className="section-wrapper">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="badge-indigo">Engineering &amp; Algorithms</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Research Experience &amp; Systems
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Translating theoretical machine learning and multi-agent methods into scalable, production-tested healthcare systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="academic-card flex flex-col justify-between hover:border-indigo-200 hover:shadow-md transition-all"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {proj.title}
                </h3>
                <span className={`${proj.badgeColor} shrink-0 text-[11px]`}>
                  {proj.badge}
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-2 my-3 p-2.5 bg-slate-50/90 rounded-lg border border-slate-100">
                {proj.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="text-center sm:text-left">
                    <div className="text-[11px] text-slate-500 font-medium">
                      {m.label}
                    </div>
                    <div className="text-sm font-bold text-indigo-700 font-mono">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bullet Descriptions */}
              <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc list-outside ml-4 leading-relaxed">
                {proj.description.map((desc, dIdx) => (
                  <li key={dIdx}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
