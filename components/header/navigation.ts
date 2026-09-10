export type NavigationLink = {
  label: string;
  href: string;
};

export type NavigationItem = NavigationLink | {
  label: string;
  children: readonly NavigationLink[];
};

export const navItems: readonly NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Divisions",
    children: [
      { label: "Trading & Services", href: "/trading" },
      { label: "Engineering & Contracting", href: "/contracting" },
      { label: "Heavy Equipment & Transportation", href: "/transportation" },
    ],
  },
  { label: "Services", href: "/services" },
  // Add Projects here only when verified project content is available.
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export const enquiryLink: NavigationLink = { label: "Enquire Now", href: "/contact" };

export function isActiveRoute(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
}
