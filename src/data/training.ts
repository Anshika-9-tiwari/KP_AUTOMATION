// export const trainings = [
//   {
//     title: "PLC Programming",
//     description: "Hands-on PLC programming and troubleshooting using industrial controllers.",
//     image: "/aumation/plc-program.jpg",
//   },
//   {
//     title: "SCADA & HMI",
//     description: "Develop industrial monitoring systems with SCADA and HMI software.",
//     image: "/aumation/scada.jpg",
//   },
//   {
//     title: "Servo Systems",
//     description: "Configure and commission industrial servo drives and motion control.",
//     image:"/industry.jpg",
//   },
//   {
//     title: "Instrumentation",
//     description: "Industrial instrumentation, calibration and process control fundamentals.",
//     image: "/process-instrumentation.png",
//   },
//   {
//     title: "Industrial Automation",
//     description: "Complete automation training covering PLC, SCADA, VFD and networking.",
//     image: "/aumation/industry-bg.jpg",
//   },
// ];
import {
  Cpu,
  MonitorCog,
  Gauge,
  Network,
  Settings2,
  Wrench,
} from "lucide-react";

export const trainings = [
  {
    slug: "industrial-automation-training",
    title: "Industrial Automation Training",
    description:
      "Practical industrial automation training covering PLC, HMI, SCADA, drives, instrumentation and industrial communication.",
    icon: Settings2,
    href: "/corporate-training/industrial-automation-training",
    image: "/aumation/industry-bg.jpg",
  },
  {
    slug: "plc-training",
    title: "PLC Training & Networking",
    description:
      "Hands-on PLC programming and industrial networking training designed around real-world automation applications.",
    icon: Cpu,
    href: "/corporate-training/plc-training",
    image: "/aumation/plc-program.jpg",
  },
  {
    slug: "scada-and-hmi",
    title: "SCADA & HMI Training",
    description:
      "Learn to design HMI screens, develop SCADA applications, configure alarms and visualize industrial processes.",
    icon: MonitorCog,
    href: "/corporate-training/scada-and-hmi",
    image: "/aumation/scada.jpg",
  },
  {
    slug: "process-instrumentation",
    title: "Process Instrumentation",
    description:
      "Practical training in sensors, transmitters, control loops and industrial measurement systems.",
    icon: Network,
    href: "/corporate-training/process-instrumentation",
     image: "/process-instrumentation.png",
  },
  {
    slug: "servo-motor",
    title: "Servo & Motion Control",
    description:
      "Learn servo systems, motion control fundamentals, positioning and industrial applications.",
    icon: Wrench,
    href: "/corporate-training/servo-motor",
    image:"/industry.jpg",
  },
];