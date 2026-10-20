import React from "react";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Core Expertise",
    skills: [
      "Multi-Agent RL (MARL)",
      "Transformers & LLMs",
      "Long-Context Modeling",
      "LLM Fine-tuning / Alignment",
      "Retrieval-based Methods (RAG)",
      "Clinical NLP",
      "Decision Systems"
    ]
  },
  {
    title: "Frameworks & AI Libraries",
    skills: ["PyTorch", "HuggingFace", "DeepSpeed", "Ray", "TensorFlow", "vLLM", "scikit-learn"]
  },
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "Java", "SQL", "Shell / Bash", "TypeScript"]
  },
  {
    title: "Systems & Infrastructure",
    skills: ["Linux", "Docker", "CUDA", "Git", "PostgreSQL", "Distributed Training (DDP)", "RESTful APIs", "HIS / EMR"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Technical Skills &amp; Highlights
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Bridging algorithm research with production engineering in clinical environments.
        </p>
      </div>

      {/* Skill Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="academic-card p-4 sm:p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100/90 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 border border-slate-200/80 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Key Highlights Card */}
      <div className="rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50/60 via-white to-slate-50/60 p-5 shadow-xs">
        <div className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-2">
          Key Cross-Domain Highlights
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-600 font-bold text-base leading-none">⚡</span>
            <div>
              <strong className="text-slate-900 font-semibold block mb-0.5">End-to-End Delivery</strong>
              Proven ability to convert <em>ideas → algorithms → systems → real-world deployment</em>.
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-600 font-bold text-base leading-none">🔬</span>
            <div>
              <strong className="text-slate-900 font-semibold block mb-0.5">Cross-Domain Fusion</strong>
              Unique synergy across Medical AI × Long-Context LLMs × Multi-Agent Reinforcement Learning.
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-indigo-600 font-bold text-base leading-none">🛡️</span>
            <div>
              <strong className="text-slate-900 font-semibold block mb-0.5">Trustworthy &amp; Robust</strong>
              Emphasis on safety, interpretability, and verifiable constraints in high-stakes healthcare.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
