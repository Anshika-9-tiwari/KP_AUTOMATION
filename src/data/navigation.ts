export interface NavItem {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
  }[];
}

export const navigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Corporate Training",
    href: "#",
    children: [
      {
        label: "PLC Training",
        href: "/corporate-training/plc",
      },
      {
        label: "SCADA & HMI",
        href: "/corporate-training/scada-hmi",
      },
      {
        label: "Servo",
        href: "/corporate-training/servo",
      },
      {
        label: "Instrumentation",
        href: "/corporate-training/instrumentation",
      },
      {
        label: "Industrial Automation",
        href: "/corporate-training/industrial-automation",
      },
    ],
  },
  {
    label: "Industries",
    href: "#",
    children: [
      {
        label: "Manufacturing",
        href: "/industries/manufacturing",
      },
      {
        label: "Automobile",
        href: "/industries/automobile",
      },
      {
        label: "Steel",
        href: "/industries/steel",
      },
      {
        label: "Food & Beverage",
        href: "/industries/food",
      },
      {
        label: "Water",
        href: "/industries/water",
      },
      {
        label: "Oil & Gas",
        href: "/industries/oil-gas",
      },
      {
        label: "Packaging",
        href: "/industries/packaging",
      },
    ],
  },
  {
    label: "Products",
    href: "#",
    children: [
      {
        label: "PLC",
        href: "/products/plc",
      },
      {
        label: "HMI",
        href: "/products/hmi",
      },
      {
        label: "VFD",
        href: "/products/vfd",
      },
      {
        label: "Sensors",
        href: "/products/sensors",
      },
      {
        label: "Panels",
        href: "/products/panels",
      },
      {
        label: "Relays",
        href: "/products/relays",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];