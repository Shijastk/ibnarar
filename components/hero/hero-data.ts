import type { StaticImageData } from "next/image";
import companyOverview from "@/public/images/hero/company-overview.webp";
import engineeringContracting from "@/public/images/hero/engineering-contracting.webp";
import tradingServices from "@/public/images/hero/trading-services.webp";
import heavyEquipment from "@/public/images/hero/heavy-equipment.webp";

export type HeroSlideData = {
  id: string;
  image: StaticImageData;
  imageAlt: string;
  imagePosition: string;
  headingLines: readonly string[];
  descriptionLines: readonly string[];
  cta: { label: string; href: string };
};

export const heroSlides: readonly HeroSlideData[] = [
  {
    id: "company-overview",
    image: companyOverview,
    imageAlt: "Industrial construction and material transport operations in Qatar",
    imagePosition: "center center",
    headingLines: ["Built on Experience.", "Driven by Reliability."],
    descriptionLines: [
      "Trading, contracting and transportation",
      "solutions serving Qatar since 2003.",
    ],
    cta: { label: "Discover EBN ARAR", href: "/#about" },
  },
  {
    id: "engineering-contracting",
    image: engineeringContracting,
    imageAlt: "Civil and structural steel construction works in Qatar",
    imagePosition: "center center",
    headingLines: ["Engineering", "& Contracting"],
    descriptionLines: [
      "Reliable civil, building and industrial",
      "project execution.",
    ],
    cta: { label: "Explore Contracting", href: "/#engineering" },
  },
  {
    id: "trading-services",
    image: tradingServices,
    imageAlt: "Organized industrial products and equipment warehouse",
    imagePosition: "center center",
    headingLines: ["Trading", "& Services"],
    descriptionLines: [
      "Dependable sourcing of industrial products,",
      "equipment and essential supplies.",
    ],
    cta: { label: "Explore Trading", href: "/#services" },
  },
  {
    id: "heavy-equipment",
    image: heavyEquipment,
    imageAlt: "Heavy equipment and transportation fleet in Qatar",
    imagePosition: "center center",
    headingLines: ["Heavy Equipment", "& Transportation"],
    descriptionLines: [
      "Equipment and transportation support",
      "for demanding projects.",
    ],
    cta: { label: "Explore Equipment", href: "/#what-we-do" },
  },
];
