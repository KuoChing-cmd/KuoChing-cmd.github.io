// app/page.tsx
import Hero from "@/components/Hero";
import News from "@/components/News";
import ResearchProjects from "@/components/ResearchProjects";
import Publications from "@/components/Publications";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="space-y-2">
      {/* Bio / Hero Section */}
      <Hero />

      {/* News & Recent Updates */}
      <News />

      {/* Research Experience & Production Systems (CV Highlight) */}
      <ResearchProjects />

      {/* Publications & Preprints */}
      <Publications />

      {/* Education & Work Experience */}
      <Experience />

      {/* Technical Skills & Capabilities */}
      <Skills />

      {/* Selected Honors & Awards */}
      <Awards />

      {/* Footer */}
      <Footer />
    </div>
  );
}
