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
    href: "corporate-training",
    children: [
      {
        label: "All Courses",
        href: "/corporate-training",
      },
       {
        label: "Industrial Automation",
        href: "/corporate-training/industrial-automation-training",
      },
      {
        label: "PLC Training",
        href: "/corporate-training/plc-training",
      },
      {
        label: "SCADA & HMI",
        href: "/corporate-training/scada-and-hmi",
      },
      {
        label: "Drives Motors",
        href: "/corporate-training/drives-motors",
      },
      {
        label: "Process Instrumentation",
        href: "/corporate-training/process-instrumentation",
      },
    ],
  },
  {
    label: "Industries",
    href: "industries",
    children: [
      {
        label: "Manufacturing",
        href: "/industries/manufacturing",
      },
      {
        label: "Automotive Industry",
        href: "/industries/automotive",
      },
      {
        label: "Steel Industry",
        href: "/industries/steel",
      },
      {
        label: "Food & Beverage",
        href: "/industries/food-and-beverage",
      },
      {
        label: "Water Management",
        href: "/industries/water-management",
      },
      {
        label: "Oil & Gas",
        href: "/industries/oil-gas",
      },
      {
        label: "Packaging Industry",
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
        label: "Scada & HMI",
        href: "/products/scada-hmi",
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
        label: "Contorl Panels",
        href: "/products/control-panels",
      },
      {
        label: "IOT Devices",
        href: "/products/iot-devices",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];