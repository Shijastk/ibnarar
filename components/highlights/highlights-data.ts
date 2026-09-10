export type HighlightIconName = "experience" | "projects" | "clients" | "equipment";

export type CompanyHighlight = {
  value: string;
  label: string;
  icon: HighlightIconName;
};

// Placeholder marketing figures. Replace these values with approved company data before launch.
export const companyHighlights: readonly CompanyHighlight[] = [
  {
    value: "20+",
    label: "Years of Industry Experience",
    icon: "experience",
  },
  {
    value: "500+",
    label: "Projects & Supply Orders",
    icon: "projects",
  },
  {
    value: "100+",
    label: "Clients Across Qatar",
    icon: "clients",
  },
  {
    value: "75+",
    label: "Equipment & Vehicles",
    icon: "equipment",
  },
];
