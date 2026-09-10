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
  { label: "What We Do", href: "/#what-we-do" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Engineering", href: "/#engineering" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact Us", href: "/#contact" },
];

export const enquiryLink: NavigationLink = { label: "Enquire Now", href: "/#contact" };

export function isActiveRoute(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.includes("#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}
