export type ServiceIconName = "industrial" | "construction" | "equipment" | "transport";

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: ServiceIconName;
  href: string;
};

export const serviceItems: readonly ServiceItem[] = [
  {
    id: "industrial-supply",
    title: "Industrial Supply",
    description:
      "Supply of industrial products, consumables, electrical products, hardware, tools, equipment, vehicles and safety products.",
    icon: "industrial",
    href: "/#what-we-do",
  },
  {
    id: "civil-building-steel",
    title: "Civil, Building & Steel Works",
    description:
      "Civil works, residential buildings, villas and industrial steel structures delivered with quality and safety in focus.",
    icon: "construction",
    href: "/#engineering",
  },
  {
    id: "heavy-equipment-rental-sales",
    title: "Heavy Equipment Rental & Sales",
    description:
      "Rental and sale of man lifts, forklifts, excavators, cranes, bulldozers and water tankers according to client needs.",
    icon: "equipment",
    href: "/#what-we-do",
  },
  {
    id: "transportation-equipment-support",
    title: "Transportation & Equipment Support",
    description:
      "Transportation for construction and excavation works, supported by equipment maintenance and operational readiness.",
    icon: "transport",
    href: "/#what-we-do",
  },
];
