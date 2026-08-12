import {
  Cpu,
  MonitorCog,
  Factory,
  ScanSearch,
  PanelsTopLeft,
  Workflow,
  Settings2,
} from "lucide-react";

export const services = [
  {
    title: "PLC Programming",
    description:
      "PLC programming, commissioning and troubleshooting for industrial automation.",
    icon: Cpu,
    href: "/services/plc-programming",
  },
  {
    title: "SCADA & HMI",
    description:
      "Interactive SCADA and HMI solutions for real-time monitoring and control.",
    icon: MonitorCog,
    href: "/services/scada-and-hmi",
  },
  {
    title: "Industrial Automation",
    description:
      "Complete automation solutions for manufacturing and process industries.",
    icon: Factory,
    href: "/services/industrial-automation",
  },
  {
    title: "Machine Vision",
    description:
      "Smart inspection and quality control using industrial vision systems.",
    icon: ScanSearch,
    href: "/services/machine-vision",
  },
  {
    title: "IIoT Solutions",
    description:
      "Connect machines and monitor production through Industry 4.0 technologies.",
    icon: Workflow,
    href: "/services/iiot-solutions",
  },
  {
    title: "Control Panels",
    description:
      "Design and manufacturing of industrial electrical control panels.",
    icon: PanelsTopLeft,
    href: "/services/control-panels",
  },
  {
    title: "Automation Consultancy",
    description:
      "Expert consultation for automation upgrades and plant optimization.",
    icon: Settings2,
    href: "/services/automation-consultancy",
  },
];