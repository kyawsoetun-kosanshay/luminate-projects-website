export type NavigationItem = {
  label: string;
  href: "/" | "/about" | "/services" | "/work" | "/process" | "/contact";
};

export const primaryNavigation: readonly NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];
