import { HeroSlider } from "@/components/hero/hero-slider";
import { ProjectShowcase } from "@/components/showcase/project-showcase";
import { AboutCompanySection } from "@/components/about/about-company-section";
import { ServicesSection } from "@/components/services/services-section";
import { CompanyHighlightsSection } from "@/components/highlights/company-highlights-section";
import { PartnersSection } from "@/components/partners/partners-section";
import { EngineeringSection } from "@/components/engineering/engineering-section";
import { ProjectGridSection } from "@/components/projects/project-grid-section";

export default function Home() {
  return (
    <main id="home">
      <HeroSlider />
      <div id="what-we-do" className="section-anchor">
        <ProjectShowcase />
      </div>
      <div id="about" className="section-anchor">
        <AboutCompanySection />
      </div>
      <div id="services" className="section-anchor">
        <ServicesSection />
      </div>
      <CompanyHighlightsSection />
      <PartnersSection />
      <div id="engineering" className="section-anchor">
        <EngineeringSection />
      </div>
      <div id="projects" className="section-anchor">
        <ProjectGridSection />
      </div>
    </main>
  );
}
