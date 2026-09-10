import type { StaticImageData } from "next/image";
import engineeringImage from "@/public/images/hero/engineering-contracting.webp";
import tradingImage from "@/public/images/hero/trading-services.webp";
import equipmentImage from "@/public/images/hero/heavy-equipment.webp";

export type DivisionIconName = "trading" | "contracting" | "transportation";

export type ShowcaseItem = {
  id: string;
  position: "left" | "center" | "right";
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  icon: DivisionIconName;
  image: StaticImageData;
  imageAlt: string;
};

export const defaultShowcaseItemId = "engineering-contracting";

export const showcaseItems: readonly ShowcaseItem[] = [
  {
    id: "engineering-contracting",
    position: "center",
    title: "Engineering & Contracting",
    description:
      "Civil, building and industrial contracting services focused on quality execution, safety and dependable project delivery.",
    href: "/contracting",
    ctaLabel: "Explore Contracting",
    icon: "contracting",
    image: engineeringImage,
    imageAlt: "Civil and structural steel construction works in Qatar",
  },
  {
    id: "trading-services",
    position: "left",
    title: "Trading & Services",
    description:
      "Dependable sourcing and supply of industrial products, electrical items, hardware, tools, equipment and safety products.",
    href: "/trading",
    ctaLabel: "Explore Trading",
    icon: "trading",
    image: tradingImage,
    imageAlt: "Industrial supplies arranged in an organized warehouse",
  },
  {
    id: "heavy-equipment-transportation",
    position: "right",
    title: "Heavy Equipment & Transportation",
    description:
      "Heavy equipment rental, transportation and project support for demanding construction and industrial operations.",
    href: "/transportation",
    ctaLabel: "Explore Equipment",
    icon: "transportation",
    image: equipmentImage,
    imageAlt: "Heavy construction equipment and transport vehicles in Qatar",
  },
];
