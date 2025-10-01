import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Awards } from "@/components/sections/Awards";
import { Contact } from "@/components/sections/Contact";
import portfolioData from "@/data/portfolio.json";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero data={portfolioData.personal} />
      <About data={portfolioData.personal} kpis={portfolioData.kpis} />
      <Experience data={portfolioData.experience} />
      <Skills data={portfolioData.skills} />
      <Projects data={portfolioData.projects} />
      <Awards
        awards={portfolioData.awards}
        certifications={portfolioData.certifications}
        education={portfolioData.education}
      />
      <Contact data={portfolioData.personal} />

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>© 2024 {portfolioData.personal.name}. 열정과 정확함으로 제작되었습니다.</p>
      </footer>
    </div>
  );
};

export default Index;
