import {
  Cpu,
  MonitorCog,
  Factory,
  PanelTop,
  ScanLine,
  Wifi,
  Bot,
  Lightbulb,
} from "lucide-react";

export const services = [
  {
    slug: "plc-programming",
    title: "PLC Programming",
    icon: Cpu,
    href: "/services/plc-programming",
    overviewImage: "/aumation/plc-program.jpg",

    description:
      "Reliable PLC programming and control solutions designed to automate machines, production lines and industrial processes.",

    overview:
      "KP Automation develops PLC-based control systems for machines, production lines and industrial processes. We focus on structured programming, reliable machine logic, smooth sequence control and seamless integration with field devices, HMIs and other automation systems.",

    features: [
      "PLC program development",
      "Machine sequence programming",
      "PLC-HMI integration",
      "I/O configuration and mapping",
      "Fault handling and diagnostics",
      "Program modification and optimization",
    ],

    applications: [
      "Production Machines",
      "Assembly Lines",
      "Packaging Systems",
      "Material Handling",
      "Process Automation",
      "Manufacturing Plants",
    ],

    technologies: [
      "Siemens",
      "Allen-Bradley",
      "Mitsubishi",
      "Omron",
      "Schneider",
      "Delta",
    ],
  },

  {
    slug: "scada-hmi",
    title: "SCADA & HMI",
    icon: MonitorCog,
    href: "/services/scada-hmi",
    overviewImage: "/aumation/scada.jpg",

    description:
      "Modern SCADA and HMI solutions that provide real-time monitoring, visualization, control and production insights.",

    overview:
      "We design SCADA and HMI systems that give operators clear visibility into machines and processes. Our solutions combine intuitive visualization, alarms, trends and real-time data to make industrial operations easier to monitor and control.",

    features: [
      "SCADA system development",
      "HMI screen development",
      "Real-time monitoring",
      "Alarm and event management",
      "Trend and historical data",
      "Industrial communication integration",
    ],

    applications: [
      "Factory Monitoring",
      "Process Plants",
      "Production Lines",
      "Utility Monitoring",
      "Machine HMI",
      "Control Rooms",
    ],

    technologies: [
      "WinCC",
      "Ignition",
      "Wonderware",
      "FactoryTalk",
      "TIA Portal",
      "Industrial HMI",
    ],
  },

  {
    slug: "industrial-automation",
    title: "Industrial Automation",
    icon: Factory,
    href: "/services/industrial-automation",
    overviewImage: "/aumation/industry-bg.jpg",

    description:
      "Complete industrial automation solutions that improve productivity, process reliability and operational efficiency.",

    overview:
      "KP Automation delivers end-to-end industrial automation solutions covering control systems, field devices, machine integration and commissioning. We help industries automate repetitive operations, improve process consistency and reduce manual intervention.",

    features: [
      "Automation system design",
      "Machine control systems",
      "PLC and HMI integration",
      "Industrial networking",
      "Process automation",
      "Site commissioning",
    ],

    applications: [
      "Manufacturing",
      "Automotive",
      "Packaging",
      "Material Handling",
      "Process Industries",
      "Industrial Plants",
    ],

    technologies: [
      "PLC",
      "SCADA",
      "HMI",
      "VFD",
      "Servo Systems",
      "Industrial Networks",
    ],
  },

  {
    slug: "control-panels",
    title: "Control Panels",
    icon: PanelTop,
    href: "/services/control-panels",
    overviewImage: "/controlpanel.jpeg",

    description:
      "Industrial control panel engineering and integration designed for safe, organized and reliable automation systems.",

    overview:
      "We provide control panel engineering solutions for industrial automation applications. From electrical design and component selection to control architecture and system integration, we focus on creating practical and maintainable panels.",

    features: [
      "Control panel design",
      "Electrical engineering",
      "Component selection",
      "PLC panel integration",
      "Control wiring and documentation",
      "Panel testing and commissioning",
    ],

    applications: [
      "Machine Control Panels",
      "PLC Panels",
      "MCC Panels",
      "Automation Panels",
      "Process Control Panels",
      "Industrial Equipment",
    ],

    technologies: [
      "PLC Systems",
      "VFD",
      "Servo Drives",
      "Relays",
      "Industrial Switches",
      "Control Components",
    ],
  },

  {
    slug: "machine-vision",
    title: "Machine Vision",
    icon: ScanLine,
    href: "/services/machine-vision",
    overviewImage: "/energy.webp",

    description:
      "Automated machine vision solutions for inspection, measurement, identification and quality control.",

    overview:
      "Our machine vision solutions help manufacturers automate visual inspection and quality control. Vision systems can identify defects, verify components, measure dimensions and inspect products with consistent accuracy.",

    features: [
      "Automated visual inspection",
      "Defect detection",
      "Barcode and QR reading",
      "Component verification",
      "Measurement and gauging",
      "Vision system integration",
    ],

    applications: [
      "Quality Inspection",
      "Assembly Verification",
      "Packaging Inspection",
      "Product Identification",
      "Dimensional Inspection",
      "Defect Detection",
    ],

    technologies: [
      "Industrial Cameras",
      "Vision Sensors",
      "Image Processing",
      "Barcode Systems",
      "Lighting Systems",
      "PLC Integration",
    ],
  },

  {
    slug: "iiot",
    title: "IIoT Solutions & Dashboards",
    icon: Wifi,
    href: "/services/iiot",
    overviewImage: "/dashboard.jpeg",

    description:
      "Industrial IoT solutions that connect machines, collect production data and enable real-time dashboard monitoring and analytics.",

    overview:
      "We help industries connect machines and automation systems to create smarter, data-driven operations. Our IIoT solutions collect equipment and production data and make it available for monitoring, analytics and informed decision-making.",

    features: [
      "Machine data acquisition",
      "Real-time dashboards",
      "MQTT-based communication",
      "Production monitoring",
      "Equipment monitoring",
      "Cloud and database integration",
    ],

    applications: [
      "Smart Factories",
      "Energy Monitoring",
      "Production Monitoring",
      "Machine Monitoring",
      "Predictive Maintenance",
      "Remote Monitoring",
    ],

    technologies: [
      "MQTT",
      "Node.js",
      "Industrial Gateways",
      "Cloud Platforms",
      "SQL Databases",
      "IoT Sensors",
    ],
  },

  {
    slug: "automation-consultancy",
    title: "Automation Consultancy",
    icon: Lightbulb,
    href: "/services/automation-consultancy",
    overviewImage: "/industrial-automation.png",

    description:
      "Engineering consultancy to identify automation opportunities and develop practical technology strategies for your industry.",

    overview:
      "Our automation consultancy services help businesses evaluate existing processes, identify automation opportunities and select appropriate technologies. We focus on practical solutions that align with production goals, operational requirements and future scalability.",

    features: [
      "Automation feasibility studies",
      "Process analysis",
      "Technology selection",
      "Automation architecture",
      "System improvement planning",
      "Industry 4.0 consulting",
    ],

    applications: [
      "Process Improvement",
      "Factory Modernization",
      "Automation Planning",
      "Digital Transformation",
      "Smart Factory Projects",
      "Legacy System Upgrades",
    ],

    technologies: [
      "PLC",
      "SCADA",
      "IIoT",
      "Machine Vision",
      "Robotics",
      "Industry 4.0",
    ],
  },
];