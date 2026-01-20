// app/page.tsx
import Image from "next/image";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 text-xl font-semibold tracking-tight text-neutral-900">
      {children}
    </h2>
  );
}

function SubtleLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-neutral-500 uppercase tracking-[0.14em] mb-2">
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* Hero / Profile */}
      <section className="section pb-6 border-none">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1 space-y-4">
            <SubtleLabel>Profile</SubtleLabel>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">
              KuoCh&apos;ing Chang <span className="text-neutral-500 text-xl">(张瀚文)</span>
            </h1>
            <p className="text-neutral-700">
              <span className="font-medium">PhD Candidate in Informatics</span>, Kyoto University (Oct 2025 – Present) ·{" "}
              <span className="font-medium">M.Sc. in Informatics</span> (2025)
            </p>
            <p className="text-neutral-700">
              My research focuses on{" "}
              <strong>Medical AI</strong>, <strong>Clinical Summarization</strong>,{" "}
              <strong>Multi-Agent Systems</strong>, and <strong>Reinforcement Learning</strong>, with an emphasis on
              building trustworthy, interpretable, and resilient AI systems for real-world healthcare decision-making.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="badge">Medical AI</span>
              <span className="badge">Clinical Summarization</span>
              <span className="badge">LLMs</span>
              <span className="badge">Multi-Agent Systems</span>
              <span className="badge">Reinforcement Learning</span>
            </div>
          </div>

          <div className="w-full max-w-xs mx-auto md:w-64 md:h-64 relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/60 shadow-sm">
            <Image
              src="/assets/profile.jpeg"
              alt="Profile photo of KuoCh'ing Chang"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section">
        <SectionTitle>Highlights</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-200 bg-white/70 p-4 sm:p-5">
            <SubtleLabel>Publications</SubtleLabel>
            <p className="text-sm text-neutral-700">
              First-author arXiv work on NBCE for long clinical records, plus journal publications in medical text
              mining.
            </p>
            <a
              href="#publications"
              className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 hover:text-neutral-800"
            >
              View papers
            </a>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white/70 p-4 sm:p-5">
            <SubtleLabel>Skills</SubtleLabel>
            <p className="text-sm text-neutral-700">
              Full-stack research toolkit from ML engineering to data systems, optimized for clinical AI.
            </p>
            <a
              href="#skills"
              className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 hover:text-neutral-800"
            >
              View skills
            </a>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white/70 p-4 sm:p-5">
            <SubtleLabel>Research Focus</SubtleLabel>
            <p className="text-sm text-neutral-700">
              LLMs, multi-agent reinforcement learning, and ethical decision-making frameworks for healthcare systems.
            </p>
            <a
              href="#research"
              className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 hover:text-neutral-800"
            >
              View research
            </a>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white/70 p-4 sm:p-5">
            <SubtleLabel>Honors</SubtleLabel>
            <p className="text-sm text-neutral-700">
              DoGS SPRING Program Fellow (JST), Nishimura Scholarship, and national Olympiad recognition.
            </p>
            <a
              href="#awards"
              className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 hover:text-neutral-800"
            >
              View awards
            </a>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section id="research" className="section">
        <SectionTitle>Research</SectionTitle>
        <p className="mb-4 text-neutral-700">
          My work lies at the intersection of <strong>Large Language Models (LLMs)</strong>,{" "}
          <strong>Reinforcement Learning</strong>, and <strong>Medical Informatics</strong>. I aim to build
          trustworthy, interpretable, and resilient AI systems that support real-world healthcare decision-making.
        </p>

        <div className="space-y-5">
          <div className="rounded-xl border border-neutral-200 bg-white/60 p-4 sm:p-5">
            <h3 className="text-sm font-semibold text-neutral-900">
              Clinical Summarization and Long-Context Modeling (Kyoto University Hospital)
            </h3>
            <p className="mt-2 text-sm text-neutral-700">
              Applied the <strong>NBCE method</strong> (originally proposed by Su Jianlin) to optimize automatic
              summarization of long clinical records. This work addresses the limited context window of 7B-scale
              models through dynamic retrieval and TF-IDF-based alignment strategies.
            </p>
            <p className="mt-1 text-sm text-neutral-600">
              Conducted at the{" "}
              <a
                href="https://medinfo.kuhp.kyoto-u.ac.jp/members/"
                className="underline decoration-neutral-300 hover:decoration-neutral-500"
                target="_blank"
                rel="noreferrer"
              >
                Medical Informatics Planning Division
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="section">
        <SectionTitle>Publications &amp; Preprints</SectionTitle>
        <ol className="space-y-4 list-decimal list-inside text-sm text-neutral-800">
          <li>
            <span className="font-semibold">Zhang, G.</span>, Fukuyama, K., Kishimoto, K., &amp; Kuroda, T. (2024).{" "}
            <em>
              Optimizing Automatic Summarization of Long Clinical Records Using Dynamic Context Extension: Testing and
              Evaluation of the NBCE Method.
            </em>{" "}
            <span className="block mt-1">
              <a
                href="https://arxiv.org/abs/2411.08586"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-neutral-300 hover:decoration-neutral-500"
              >
                arXiv:2411.08586
              </a>
            </span>
          </li>
          <li>
            <span className="font-semibold">Mengyue, F.</span>, Lin, Y., Guoqing, Z., et al. (2025).{" "}
            <em>
              Study on subtyping and Traditional Chinese Medicine treatment of depression based on machine learning and
              text mining.
            </em>{" "}
            <span className="block">
              <em>Journal of Traditional Chinese Medicine, 45(5), 1152–1163.</em>
            </span>
            <span className="block mt-1">
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/41015814/"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-neutral-300 hover:decoration-neutral-500"
              >
                PMCID: PMC12454262
              </a>
            </span>
          </li>
        </ol>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <SectionTitle>Skills</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <SubtleLabel>Core</SubtleLabel>
            <div className="flex flex-wrap gap-2">
              <span className="badge">Python</span>
              <span className="badge">C++</span>
              <span className="badge">Java</span>
            </div>
          </div>
          <div className="space-y-2">
            <SubtleLabel>DL / NLP</SubtleLabel>
            <div className="flex flex-wrap gap-2">
              <span className="badge">PyTorch</span>
              <span className="badge">TensorFlow</span>
              <span className="badge">HF Transformers</span>
              <span className="badge">scikit-learn</span>
            </div>
          </div>
          <div className="space-y-2">
            <SubtleLabel>Systems & Data</SubtleLabel>
            <div className="flex flex-wrap gap-2">
              <span className="badge">CUDA</span>
              <span className="badge">Docker</span>
              <span className="badge">Git</span>
              <span className="badge">Linux</span>
              <span className="badge">PostgreSQL</span>
              <span className="badge">MySQL</span>
              <span className="badge">SQLite</span>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="section">
        <SectionTitle>Work Experience</SectionTitle>
        <div className="space-y-5">
          <div className="rounded-xl border border-neutral-200 bg-white/60 p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-sm font-semibold text-neutral-900">
                Msunhealth (Beijing) Co., Ltd. — Medical AI Research Intern
              </h3>
              <p className="text-xs text-neutral-500">Apr 2025 – Oct 2025</p>
            </div>
            <p className="mt-2 text-sm text-neutral-700">
              Developed AI-driven scheduling systems for hospital wards, integrating agent-based decision-making into
              existing HIS infrastructures to enhance nursing efficiency and operational intelligence.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white/60 p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-sm font-semibold text-neutral-900">
                Whale Cloud Technology — System Operations Intern
              </h3>
              <p className="text-xs text-neutral-500">Jul 2021 – Sep 2021</p>
            </div>
            <p className="mt-2 text-sm text-neutral-700">
              Participated in the China Mobile Enterprise Cloud Storage Project, focusing on module development and
              large-scale cloud server maintenance (managing ~100 servers).
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white/60 p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-sm font-semibold text-neutral-900">
                Microsoft Student Ambassador
              </h3>
              <p className="text-xs text-neutral-500">Oct 2020 – Jun 2022</p>
            </div>
            <p className="mt-2 text-sm text-neutral-700">
              Represented China in the Microsoft Student Ambassador Asia program. Engaged with global developer
              communities and contributed to healthcare-related technical projects.
            </p>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="section">
        <SectionTitle>Awards &amp; Scholarships</SectionTitle>
        <ul className="space-y-3 text-sm text-neutral-800">
          <li className="rounded-xl border border-neutral-200 bg-white/60 p-4">
            <p className="font-semibold">
              DoGS SPRING Program Fellow (Kyoto University, Division of Graduate Studies)
            </p>
            <p className="text-xs text-neutral-600 mt-1">
              Selected under JST’s “Support for Pioneering Research Initiated by the Next Generation (SPRING)” scheme.
            </p>
          </li>
          <li className="rounded-xl border border-neutral-200 bg-white/60 p-4">
            <p className="font-semibold">
              Second Prize, China Chemistry Olympiad (Preliminary)
            </p>
            <a
              href="https://raw.githubusercontent.com/dnimo/img/master/%E5%8C%96%E5%AD%A6%E5%A5%A5%E4%BB%81%E5%8C%B9%E5%85%8B.jpeg"
              target="_blank"
              rel="noreferrer"
              className="text-xs underline decoration-neutral-300 hover:decoration-neutral-500 text-neutral-600"
            >
              Certificate
            </a>
          </li>
          <li className="rounded-xl border border-neutral-200 bg-white/60 p-4">
            <p className="font-semibold">
              Nishimura International Scholarship Foundation, Spring 2023 Scholar
            </p>
            <a
              href="https://www.nisf.or.jp/"
              target="_blank"
              rel="noreferrer"
              className="text-xs underline decoration-neutral-300 hover:decoration-neutral-500 text-neutral-600"
            >
              Foundation Website
            </a>
          </li>
        </ul>
      </section>

      {/* Education */}
      <section className="section">
        <SectionTitle>Education</SectionTitle>
        <div className="space-y-6">
          <div className="rounded-xl border border-neutral-200 bg-white/60 p-4 sm:p-5">
            <p className="text-sm text-neutral-500">Oct 2025 – Present</p>
            <h3 className="mt-1 text-base font-semibold text-neutral-900">
              Ph.D. in Informatics — Kyoto University
            </h3>
            <p className="text-sm text-neutral-600">
              Laboratory:&nbsp;
              <a
                href="https://sites.google.com/kyoto-u.ac.jp/takayukiitolaboratory/home"
                className="underline decoration-neutral-300 hover:decoration-neutral-500"
                target="_blank"
                rel="noreferrer"
              >
                Takayuki Ito Laboratory
              </a>{" "}
              · Graduate School of Informatics
            </p>
            <p className="mt-2 text-sm text-neutral-700">
              DoGS SPRING Program Fellow, researching multi-agent reinforcement learning, automated negotiation, and
              computational mechanism design for collective intelligence systems.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white/60 p-4 sm:p-5">
            <p className="text-sm text-neutral-500">Apr 2023 – Apr 2025</p>
            <h3 className="mt-1 text-base font-semibold text-neutral-900">
              M.Sc. in Informatics — Kyoto University
            </h3>
            <p className="text-sm text-neutral-600">
              Laboratory:&nbsp;
              <a
                href="https://medinfo.kuhp.kyoto-u.ac.jp/members/"
                className="underline decoration-neutral-300 hover:decoration-neutral-500"
                target="_blank"
                rel="noreferrer"
              >
                Medical Informatics Planning Division
              </a>{" "}
              · Graduate School of Medicine, Kyoto University Hospital
            </p>
            <p className="mt-2 text-sm text-neutral-700">
              Focused on clinical summarization and trustworthy generative AI for long electronic medical records.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section pb-0">
        <SectionTitle>Contact</SectionTitle>
        <div className="space-y-1 text-sm text-neutral-800">
          <p>
            Email:&nbsp;
            <a
              href="mailto:kuochingchang@agent.soc.i.kyoto-u.ac.jp"
              className="underline decoration-neutral-300 hover:decoration-neutral-500"
            >
              kuochingchang@agent.soc.i.kyoto-u.ac.jp
            </a>
          </p>
          <p>
            GitHub:&nbsp;
            <a
              href="https://github.com/dnimo"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-neutral-300 hover:decoration-neutral-500"
            >
              dnimo
            </a>
          </p>
          <p>
            ORCID:&nbsp;
            <a
              href="https://orcid.org/0009-0007-6956-0814"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-neutral-300 hover:decoration-neutral-500"
            >
              0009-0007-6956-0814
            </a>
          </p>
        </div>
        <p className="mt-4 text-xs text-neutral-500">
          “Science is built upon curiosity, precision, and empathy — three things I aspire to bring into Medical AI.”
        </p>
      </section>
    </div>
  );
}
