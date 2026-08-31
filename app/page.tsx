// app/page.tsx
import Image from "next/image";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 text-2xl font-semibold tracking-tight text-neutral-900">
      {children}
    </h2>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-4">
      {/* Hero / Profile */}
      <section className="section pb-8 border-none pt-4">
        <div className="flex flex-col-reverse md:flex-row md:items-start gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
              KuoCh&apos;ing Chang <span className="font-normal text-neutral-500 text-2xl">(张瀚文)</span>
            </h1>
            <div className="text-neutral-700 leading-relaxed space-y-2">
              <p>
                <strong>PhD Candidate in Informatics</strong><br />
                <a href="https://sites.google.com/kyoto-u.ac.jp/takayukiitolaboratory/home" target="_blank" rel="noreferrer" className="academic-link">Takayuki Ito Laboratory</a>, Graduate School of Informatics, Kyoto University
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:kuochingchang@agent.soc.i.kyoto-u.ac.jp" className="academic-link">kuochingchang@agent.soc.i.kyoto-u.ac.jp</a><br />
                <strong>Links:</strong>{" "}
                <a href="https://github.com/dnimo" target="_blank" rel="noreferrer" className="academic-link">GitHub</a> ·{" "}
                <a href="https://orcid.org/0009-0007-6956-0814" target="_blank" rel="noreferrer" className="academic-link">ORCID</a>
              </p>
            </div>
            
            <div className="pt-2 text-neutral-700 leading-relaxed max-w-2xl">
              <p>
                I am a Ph.D. candidate at Kyoto University, supported by the DoGS SPRING Program (JST). 
                My research focuses on <strong>Medical AI</strong>, <strong>Clinical Summarization</strong>, <strong>Multi-Agent Systems</strong>, and <strong>Reinforcement Learning</strong>. 
                I am particularly interested in building trustworthy, interpretable, and resilient AI systems that support real-world healthcare decision-making, as well as exploring computational mechanism design for collective intelligence systems.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-32 h-32 md:w-48 md:h-48 relative overflow-hidden rounded-md border border-neutral-200">
            <Image
              src="/assets/profile.jpeg"
              alt="Profile photo of KuoCh'ing Chang"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* News (Standard for academic pages) */}
      <section className="section">
        <SectionTitle>News</SectionTitle>
        <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-700">
          <li><strong>[Oct 2025]</strong> Started Ph.D. in Informatics at Kyoto University as a DoGS SPRING Program Fellow.</li>
          <li><strong>[Apr 2025]</strong> Joined Msunhealth as a Medical AI Research Intern.</li>
          <li><strong>[Nov 2024]</strong> New preprint released: <a href="https://arxiv.org/abs/2411.08586" className="academic-link" target="_blank" rel="noreferrer">Optimizing Automatic Summarization of Long Clinical Records Using Dynamic Context Extension</a>.</li>
        </ul>
      </section>

      {/* Publications */}
      <section id="publications" className="section">
        <SectionTitle>Publications & Preprints</SectionTitle>
        <ol className="list-decimal list-outside ml-5 space-y-4 text-neutral-800 leading-relaxed">
          <li>
            <span className="font-semibold">Zhang, G.</span>, Fukuyama, K., Kishimoto, K., &amp; Kuroda, T. (2024).{" "}
            <em>
              Optimizing Automatic Summarization of Long Clinical Records Using Dynamic Context Extension: Testing and
              Evaluation of the NBCE Method.
            </em>{" "}
            <div className="text-sm mt-1 space-x-3">
              <a href="https://arxiv.org/abs/2411.08586" target="_blank" rel="noreferrer" className="academic-link font-medium">[arXiv:2411.08586]</a>
            </div>
          </li>
          <li>
            <span className="font-semibold">Mengyue, F.</span>, Lin, Y., Guoqing, Z., et al. (2025).{" "}
            <em>
              Study on subtyping and Traditional Chinese Medicine treatment of depression based on machine learning and
              text mining.
            </em>{" "}
            <br />
            <span className="text-neutral-600">Journal of Traditional Chinese Medicine, 45(5), 1152–1163.</span>
            <div className="text-sm mt-1 space-x-3">
              <a href="https://pubmed.ncbi.nlm.nih.gov/41015814/" target="_blank" rel="noreferrer" className="academic-link font-medium">[PMCID: PMC12454262]</a>
            </div>
          </li>
        </ol>
      </section>

      {/* Education */}
      <section className="section">
        <SectionTitle>Education</SectionTitle>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:gap-6">
            <div className="sm:w-32 shrink-0 text-neutral-500 font-medium whitespace-nowrap">Oct 2025 – Present</div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">Ph.D. in Informatics, Kyoto University</h3>
              <p className="text-neutral-700 mt-1">DoGS SPRING Program Fellow (JST).</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-6">
            <div className="sm:w-32 shrink-0 text-neutral-500 font-medium whitespace-nowrap">Apr 2023 – Apr 2025</div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">M.Sc. in Informatics, Kyoto University</h3>
              <p className="text-neutral-700 mt-1">
                Conducted at the Medical Informatics Planning Division, Graduate School of Medicine, Kyoto University Hospital.<br />
                Focused on clinical summarization and trustworthy generative AI for long electronic medical records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <SectionTitle>Work Experience</SectionTitle>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:gap-6">
            <div className="sm:w-32 shrink-0 text-neutral-500 font-medium whitespace-nowrap">Apr 2025 – Oct 2025</div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">Medical AI Research Intern</h3>
              <p className="text-neutral-700 font-medium">Msunhealth (Beijing) Co., Ltd.</p>
              <p className="text-neutral-700 mt-1">
                Developed AI-driven scheduling systems for hospital wards, integrating agent-based decision-making into
                existing HIS infrastructures to enhance nursing efficiency.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-6">
            <div className="sm:w-32 shrink-0 text-neutral-500 font-medium whitespace-nowrap">Jul 2021 – Sep 2021</div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">System Operations Intern</h3>
              <p className="text-neutral-700 font-medium">Whale Cloud Technology</p>
              <p className="text-neutral-700 mt-1">
                Participated in the China Mobile Enterprise Cloud Storage Project, focusing on module development and
                large-scale cloud server maintenance (managing ~100 servers).
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-6">
            <div className="sm:w-32 shrink-0 text-neutral-500 font-medium whitespace-nowrap">Oct 2020 – Jun 2022</div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">Microsoft Student Ambassador</h3>
              <p className="text-neutral-700 mt-1">
                Represented China in the Microsoft Student Ambassador Asia program. Engaged with global developer
                communities and contributed to healthcare-related technical projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="section border-none">
        <SectionTitle>Selected Awards</SectionTitle>
        <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-700">
          <li><strong>DoGS SPRING Program Fellow</strong> (Kyoto University, Division of Graduate Studies)</li>
          <li><strong>Spring 2023 Scholar</strong>, Nishimura International Scholarship Foundation (<a href="https://www.nisf.or.jp/" target="_blank" rel="noreferrer" className="academic-link">Link</a>)</li>
          <li><strong>Second Prize</strong>, China Chemistry Olympiad (Preliminary) (<a href="https://raw.githubusercontent.com/dnimo/img/master/%E5%8C%96%E5%AD%A6%E5%A5%A5%E4%BB%81%E5%8C%B9%E5%85%8B.jpeg" target="_blank" rel="noreferrer" className="academic-link">Certificate</a>)</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-neutral-500 border-t border-neutral-200/60">
        <p>
          &copy; {new Date().getFullYear()} KuoCh&apos;ing Chang. 
          “Science is built upon curiosity, precision, and empathy — three things I aspire to bring into Medical AI.”
        </p>
      </footer>
    </div>
  );
}
