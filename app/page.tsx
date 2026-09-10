import { HeroSlider } from "@/components/hero/hero-slider";
import { ProjectShowcase } from "@/components/showcase/project-showcase";
import { AboutCompanySection } from "@/components/about/about-company-section";
import { ServicesSection } from "@/components/services/services-section";
import { CompanyHighlightsSection } from "@/components/highlights/company-highlights-section";
import { PartnersSection } from "@/components/partners/partners-section";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <ProjectShowcase />
      <AboutCompanySection />
      <ServicesSection />
      <CompanyHighlightsSection />
      <PartnersSection />
    </main>
  );
}
