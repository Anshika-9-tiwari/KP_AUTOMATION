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
        href: "/corporate-training/plc-training",
      },
      {
        label: "SCADA & HMI",
        href: "/corporate-training/scada-and-hmi",
      },
      {
        label: "Servo Motor",
        href: "/corporate-training/servo-motor",
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