import {
  Cpu,
  Monitor,
  Gauge,
  ScanSearch,
  PanelTop,
  Zap,
} from "lucide-react";

export const products = [
  {
    title: "PLC",
    brand: "Siemens • Delta • Mitsubishi",
    image: "/aumation/plc.jpg",
    icon: Cpu,
  },
  {
    title: "HMI",
    brand: "Weintek • Siemens",
    image: "/aumation/hmi.jpg",
    icon: Monitor,
  },
  {
    title: "VFD",
    brand: "Delta • ABB",
    image: "/aumation/vfd.jpeg",
    icon: Gauge,
  },
  {
    title: "Sensors",
    brand: "Omron • Autonics",
    image: "/energy.webp",
    icon: ScanSearch,
  },
  {
    title: "Control Panels",
    brand: "Industrial Panels",
    image: "/controlpanel.jpeg",
    icon: PanelTop,
  },
  {
    title: "Relays",
    brand: "Schneider • Omron",
    image: "/feildsource.jpeg",
    icon: Zap,
  },
];