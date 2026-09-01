import {
  Car,
  Factory,
  Hammer,
  Droplets,
  Package,
  Fuel,
  Utensils,
} from "lucide-react";

/* =========================================================
   HOME PAGE INDUSTRIES
========================================================= */

export const homeindustries = [
  {
    title: "Automobile",
    icon: Car,
    image: "/industry.jpg",
    href: "/industries/automotive",
  },
  {
    title: "Manufacturing",
    icon: Factory,
    image: "/industries/manufacturing.jpg",
    href: "/industries/manufacturing",
  },
  {
    title: "Food & Beverage",
    icon: Utensils,
    image: "/food-quality.jpeg",
    href: "/industries/food-and-beverage",
  },
  {
    title: "Steel",
    icon: Hammer,
    image: "/industries/steelplant.avif",
    href: "/industries/steel",
  },
  {
    title: "Water Management",
    icon: Droplets,
    image: "/icecream-food.jpg",
    href: "/industries/water-management",
  },
  {
    title: "Packaging",
    icon: Package,
    image: "/industries/food&beverages.jpg",
    href: "/industries/packaging",
  },
  {
    title: "Oil & Gas",
    icon: Fuel,
    image: "/aumation/industry-bg.jpg",
    href: "/industries/oil-gas",
  },
];

/* =========================================================
   INDUSTRY DETAILS
========================================================= */

export const industries = [
  /* =======================================================
     MANUFACTURING
  ======================================================= */

  {
    slug: "manufacturing",
    title: "Manufacturing",
    icon: Factory,
    href: "/industries/manufacturing",

    image:
      "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=1800",

    overviewImage:
      "https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=1400",

    technologyImage:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1400",

    benefitImage:
      "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1400",

    description:
      "Industrial automation solutions designed to improve productivity, process control, equipment reliability and operational visibility across modern manufacturing environments.",

    aboutTitle:
      "Automation in Manufacturing",

    about:
      "Manufacturing industries operate through connected machines, production lines, material handling systems and quality processes. Industrial automation helps coordinate these operations using intelligent control systems that improve consistency, reduce manual dependency and provide better visibility into production performance.",

    overviewDescription:
      "Modern manufacturing depends on connected production systems that must operate efficiently, consistently and with minimal downtime. Automation brings machines, sensors, controllers and monitoring platforms together to create a more responsive and data-driven production environment.",

    howItWorks: [
      {
        title: "Machine Control",
        description:
          "PLC systems control machines, production equipment and process sequences according to programmed operating logic.",
      },
      {
        title: "Production Coordination",
        description:
          "Automation systems synchronize machines, conveyors and workstations to maintain a smooth production flow.",
      },
      {
        title: "Real-Time Monitoring",
        description:
          "HMI and SCADA platforms provide operators with live information about machine conditions, production status and alarms.",
      },
      {
        title: "Performance Optimization",
        description:
          "Production data helps identify bottlenecks, downtime and opportunities for improving operational efficiency.",
      },
    ],

    challengesDescription:
      "Manufacturers must maintain product quality while managing production speed, machine reliability and operating costs. Automation helps address these challenges by improving coordination, monitoring equipment performance and reducing dependency on repetitive manual operations.",

    challenges: [
      "Unplanned machine downtime",
      "Inconsistent production quality",
      "Limited production visibility",
      "Manual and repetitive operations",
      "Complex machine coordination",
      "Increasing operational costs",
    ],

    technologiesDescription:
      "Manufacturing automation combines industrial control, monitoring, sensing and communication technologies. These systems work together to control equipment, collect production data and provide real-time visibility across the production environment.",

    technologies: [
      "PLC Systems",
      "HMI",
      "SCADA",
      "Industrial Sensors",
      "VFD",
      "Servo Systems",
      "Industrial Networking",
      "Industrial IoT",
      "Machine Vision",
    ],

    applicationsDescription:
      "Automation can be applied across multiple stages of manufacturing, from individual machine control and assembly operations to material movement, quality inspection and complete production-line monitoring.",

    applications: [
      "Production Line Automation",
      "Machine Control",
      "Material Handling",
      "Conveyor Systems",
      "Assembly Operations",
      "Process Monitoring",
      "Quality Inspection",
      "Production Data Collection",
    ],

    solutionsDescription:
      "KP Automation can develop integrated control and monitoring solutions based on the specific requirements of machines, production lines and manufacturing processes.",

    solutions: [
      {
        title: "Production Line Automation",
        description:
          "Integrated automation for coordinating machines, conveyors and production processes.",
      },
      {
        title: "PLC Control Systems",
        description:
          "Reliable programmable control solutions for industrial machines and equipment.",
      },
      {
        title: "SCADA Monitoring",
        description:
          "Centralized monitoring and visualization of production processes and equipment.",
      },
      {
        title: "Industrial IoT Integration",
        description:
          "Connected systems for collecting operational data and improving manufacturing visibility.",
      },
    ],

    benefitDescription:
      "By connecting equipment, processes and operational data, industrial automation helps manufacturers improve productivity, maintain consistent quality and make faster decisions based on real-time information.",

    benefits: [
      "Higher production efficiency",
      "Improved process consistency",
      "Reduced machine downtime",
      "Better operational visibility",
      "Lower manual dependency",
      "Improved production planning",
    ],
  },

  /* =======================================================
     AUTOMOTIVE
  ======================================================= */

  {
    slug: "automotive",
    title: "Automotive",
    icon: Car,
    href: "/industries/automotive",

    image:
      "https://images.pexels.com/photos/4489731/pexels-photo-4489731.jpeg?auto=compress&cs=tinysrgb&w=1800",

    overviewImage:
      "https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=1400",

    technologyImage:
      "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1400",

    benefitImage:
      "https://images.pexels.com/photos/8986072/pexels-photo-8986072.jpeg?auto=compress&cs=tinysrgb&w=1400",

    description:
      "Advanced automation solutions for automotive manufacturing, helping improve production speed, precision, quality control and reliability across complex assembly operations.",

    aboutTitle:
      "Automation in the Automotive Industry",

    about:
      "Automotive manufacturing requires high levels of precision, speed and consistency. Modern facilities use automation systems to coordinate production lines, robotic operations, machine control, material handling and quality inspection.",

    overviewDescription:
      "Automotive manufacturing requires precise coordination between robotics, assembly systems, material handling equipment and quality inspection processes. Automation enables high-speed production while maintaining the accuracy and repeatability required across complex vehicle manufacturing operations.",

    howItWorks: [
      {
        title: "Production Line Control",
        description:
          "PLC-based systems coordinate machines, conveyors and manufacturing equipment throughout the production line.",
      },
      {
        title: "Robotic Integration",
        description:
          "Industrial robots perform repetitive and precision-based operations such as assembly, welding and material handling.",
      },
      {
        title: "Process Monitoring",
        description:
          "HMI and SCADA systems provide real-time visibility into machine status, production performance and operational alarms.",
      },
      {
        title: "Automated Quality Inspection",
        description:
          "Machine vision and automated inspection technologies help identify defects and improve manufacturing quality.",
      },
    ],

    challengesDescription:
      "Automotive production environments must manage high production volumes, complex assembly sequences and strict quality requirements. Even small disruptions can affect the entire production line, making reliable automation and equipment synchronization essential.",

    challenges: [
      "Complex assembly operations",
      "High production speed requirements",
      "Maintaining consistent quality",
      "Production line downtime",
      "Robotic system coordination",
      "Component traceability",
    ],

    technologiesDescription:
      "Automotive automation uses advanced control and motion technologies to coordinate robots, machines and inspection systems. Connected control platforms also help monitor production performance and maintain consistent operation.",

    technologies: [
      "PLC",
      "HMI",
      "SCADA",
      "Industrial Robots",
      "Servo Systems",
      "Machine Vision",
      "Industrial Sensors",
      "Industrial Networking",
      "IIoT",
    ],

    applicationsDescription:
      "Automation is used throughout automotive manufacturing, including assembly, robotic welding, component handling, engine production, inspection and automated testing processes.",

    applications: [
      "Automated Assembly Lines",
      "Robotic Welding",
      "Material Handling",
      "Engine Assembly",
      "Component Manufacturing",
      "Automated Inspection",
      "Conveyor Systems",
      "Production Monitoring",
    ],

    solutionsDescription:
      "KP Automation solutions can support automotive production through integrated PLC control, robotic automation, machine vision and production monitoring systems designed around specific manufacturing requirements.",

    solutions: [
      {
        title: "Assembly Line Automation",
        description:
          "Integrated control systems for coordinating automotive production and assembly operations.",
      },
      {
        title: "Robotic Automation",
        description:
          "Automation solutions for robotic welding, assembly and material handling applications.",
      },
      {
        title: "Machine Vision Inspection",
        description:
          "Automated inspection systems for identifying manufacturing defects and improving quality control.",
      },
      {
        title: "Production Monitoring",
        description:
          "Real-time monitoring systems for tracking equipment performance and production operations.",
      },
    ],

    benefitDescription:
      "Industrial automation helps automotive manufacturers achieve faster production, greater assembly accuracy and consistent quality while improving coordination across complex manufacturing operations.",

    benefits: [
      "Higher production speed",
      "Improved manufacturing precision",
      "Consistent product quality",
      "Reduced manual operations",
      "Improved production monitoring",
      "Better equipment coordination",
    ],
  },

  /* =======================================================
     STEEL
  ======================================================= */

  {
    slug: "steel",
    title: "Steel",
    icon: Hammer,
    href: "/industries/steel",

    image:
      "https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1800",

    overviewImage:
      "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1400",

    technologyImage:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1400",

    benefitImage:
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1400",

    description:
      "Industrial automation solutions for controlling, monitoring and optimizing demanding steel manufacturing and processing operations.",

    aboutTitle:
      "Automation in the Steel Industry",

    about:
      "Steel manufacturing involves demanding processes that require continuous control of temperature, speed, pressure and heavy industrial equipment. Automation systems provide reliable monitoring and coordinated control across critical production operations.",

    overviewDescription:
      "Steel production involves demanding processes that require continuous control of temperature, speed, energy and heavy industrial equipment. Automation helps operators manage these complex operations with greater consistency and real-time process visibility.",

    howItWorks: [
      {
        title: "Process Monitoring",
        description:
          "Sensors and instrumentation continuously monitor critical production parameters.",
      },
      {
        title: "Automated Equipment Control",
        description:
          "PLC systems control industrial machines, motors and production processes.",
      },
      {
        title: "Drive Coordination",
        description:
          "Industrial drives control the speed and operation of heavy machinery.",
      },
      {
        title: "Centralized Monitoring",
        description:
          "SCADA systems provide operators with real-time production visibility.",
      },
    ],

    challengesDescription:
      "Steel plants operate under extreme conditions involving high temperatures, heavy machinery and significant energy consumption. Maintaining process stability, equipment reliability and operational safety requires dependable monitoring and control systems.",

    challenges: [
      "High energy consumption",
      "Heavy machinery control",
      "Equipment downtime",
      "Process consistency",
      "Operator safety",
      "Demanding production conditions",
    ],

    technologiesDescription:
      "Steel automation combines industrial controllers, drives, sensors, instrumentation and monitoring systems to manage heavy machinery and critical production processes.",

    technologies: [
      "PLC",
      "SCADA",
      "VFD",
      "Industrial Sensors",
      "Process Instrumentation",
      "Motor Control",
      "Industrial Networking",
      "IIoT",
    ],

    applicationsDescription:
      "Automation is used across steel manufacturing operations, including furnace control, rolling mills, material handling, motor control and continuous process monitoring.",

    applications: [
      "Furnace Automation",
      "Rolling Mill Control",
      "Material Handling",
      "Motor Control",
      "Process Monitoring",
      "Energy Monitoring",
    ],

    solutionsDescription:
      "KP Automation can provide integrated automation solutions for controlling production equipment, monitoring critical processes and improving operational visibility across steel manufacturing facilities.",

    solutions: [
      {
        title: "Process Automation",
        description:
          "Automation systems for monitoring and controlling critical steel manufacturing processes.",
      },
      {
        title: "Drive Automation",
        description:
          "Advanced drive systems for controlling industrial motors and machinery.",
      },
      {
        title: "SCADA Monitoring",
        description:
          "Centralized monitoring for improved process visibility and equipment management.",
      },
    ],

    benefitDescription:
      "Automation improves control over demanding steel production processes while supporting equipment reliability, process consistency, energy monitoring and operational safety.",

    benefits: [
      "Improved process control",
      "Reduced equipment downtime",
      "Better energy monitoring",
      "Increased operational safety",
      "Consistent production quality",
      "Improved equipment reliability",
    ],
  },

  /* =======================================================
     FOOD & BEVERAGE
  ======================================================= */

  {
    slug: "food-and-beverage",
    title: "Food & Beverage",
    icon: Utensils,
    href: "/industries/food-and-beverage",

    image:
      "https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=1800",

    overviewImage:
      "https://images.pexels.com/photos/5532668/pexels-photo-5532668.jpeg?auto=compress&cs=tinysrgb&w=1400",

    technologyImage:
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1400",

    benefitImage:
      "https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=1400",

    description:
      "Automation solutions for efficient food processing, beverage production, packaging and quality-controlled manufacturing operations.",

    aboutTitle:
      "Automation for Food & Beverage Production",

    about:
      "Food and beverage manufacturing requires precise process control, consistent production conditions and reliable monitoring. Automation systems help control processing equipment, conveyors, filling machines, packaging systems and production data.",

    overviewDescription:
      "Food and beverage production requires controlled processes, consistent product quality and reliable handling across processing, filling and packaging operations. Automation helps maintain repeatable production conditions while providing better visibility into equipment and process performance.",

    howItWorks: [
      {
        title: "Process Control",
        description:
          "Automation systems regulate critical processing parameters and production conditions.",
      },
      {
        title: "Material Movement",
        description:
          "Automated conveyors and handling systems move products efficiently between production stages.",
      },
      {
        title: "Quality Monitoring",
        description:
          "Sensors and inspection systems help monitor production consistency.",
      },
      {
        title: "Production Visibility",
        description:
          "HMI and SCADA systems provide real-time insight into production operations.",
      },
    ],

    challengesDescription:
      "Manufacturers must manage high production demand while maintaining quality, hygiene requirements and process consistency. Equipment downtime and production variations can directly affect product quality and operational efficiency.",

    challenges: [
      "Production consistency",
      "Hygiene requirements",
      "High production demand",
      "Packaging speed",
      "Quality monitoring",
      "Production downtime",
    ],

    technologiesDescription:
      "Food and beverage automation combines industrial controllers, sensors, monitoring platforms and inspection technologies to manage processing equipment and maintain important production conditions.",

    technologies: [
      "PLC",
      "HMI",
      "SCADA",
      "Temperature Sensors",
      "Flow Meters",
      "Level Sensors",
      "VFD",
      "Machine Vision",
      "Industrial Networking",
    ],

    applicationsDescription:
      "Automation can be implemented across processing, batch operations, filling, material movement, packaging, temperature monitoring and quality inspection.",

    applications: [
      "Food Processing Lines",
      "Beverage Production",
      "Batch Processing",
      "Filling Machines",
      "Conveyor Systems",
      "Packaging Lines",
      "Temperature Monitoring",
      "Quality Inspection",
    ],

    solutionsDescription:
      "KP Automation can develop control and monitoring solutions for food and beverage production processes, helping manufacturers improve consistency and operational visibility.",

    solutions: [
      {
        title: "Process Automation",
        description:
          "Automated control for critical food and beverage processing operations.",
      },
      {
        title: "Batch Control Systems",
        description:
          "Programmable systems for managing repeatable production sequences.",
      },
      {
        title: "Filling & Packaging Automation",
        description:
          "Integrated automation for high-speed filling and packaging operations.",
      },
      {
        title: "Production Monitoring",
        description:
          "Real-time visibility into equipment, process conditions and production performance.",
      },
    ],

    benefitDescription:
      "Automation helps food and beverage manufacturers achieve more consistent production, better process control and improved operational reliability while supporting efficient use of equipment and materials.",

    benefits: [
      "Consistent production quality",
      "Improved process control",
      "Higher production efficiency",
      "Reduced material losses",
      "Better production visibility",
      "Improved operational reliability",
    ],
  },

  /* =======================================================
     WATER MANAGEMENT
  ======================================================= */

  {
    slug: "water-management",
    title: "Water Management",
    icon: Droplets,
    href: "/industries/water-management",

    image:
      "https://images.pexels.com/photos/28467734/pexels-photo-28467734.jpeg?auto=compress&cs=tinysrgb&w=1800",

    overviewImage:
      "https://images.pexels.com/photos/35425759/pexels-photo-35425759.jpeg?auto=compress&cs=tinysrgb&w=1400",

    technologyImage:
      "https://images.pexels.com/photos/12726229/pexels-photo-12726229.jpeg?auto=compress&cs=tinysrgb&w=1400",

    benefitImage:
      "https://images.pexels.com/photos/35425761/pexels-photo-35425761.jpeg?auto=compress&cs=tinysrgb&w=1400",

    description:
      "Smart automation solutions for water treatment, pumping, distribution and efficient management of water infrastructure.",

    aboutTitle:
      "Automation for Water Management",

    about:
      "Water management systems depend on reliable monitoring and control of treatment, pumping, filtration and distribution processes. Industrial automation provides continuous process visibility and enables efficient operation of critical water infrastructure.",

    overviewDescription:
      "Water infrastructure depends on continuous monitoring and reliable control across treatment plants, pumping stations and distribution systems. Automation provides operators with real-time information and helps maintain efficient operation across distributed infrastructure.",

    howItWorks: [
      {
        title: "Monitor Water Parameters",
        description:
          "Sensors measure flow, pressure, level and other important process conditions.",
      },
      {
        title: "Automated Control",
        description:
          "PLC systems control pumps, valves and water treatment equipment.",
      },
      {
        title: "Process Monitoring",
        description:
          "SCADA systems provide centralized visibility into treatment and distribution operations.",
      },
      {
        title: "Operational Optimization",
        description:
          "Automation data helps operators improve efficiency and identify abnormal conditions.",
      },
    ],

    challengesDescription:
      "Water management operations must reduce wastage, maintain pump reliability, monitor critical parameters and manage infrastructure that may be distributed across multiple locations.",

    challenges: [
      "Water wastage",
      "Pump reliability",
      "Process monitoring",
      "Energy consumption",
      "Leak detection",
      "Remote infrastructure management",
    ],

    technologiesDescription:
      "Water automation systems use sensors, PLCs, SCADA platforms, variable frequency drives and remote monitoring technologies to measure operating conditions and control infrastructure.",

    technologies: [
      "PLC",
      "SCADA",
      "Flow Sensors",
      "Pressure Sensors",
      "Level Sensors",
      "VFD",
      "Remote Monitoring",
      "IIoT",
    ],

    applicationsDescription:
      "Automation is used across water treatment, wastewater treatment, pumping stations, distribution networks, reservoir monitoring and remote infrastructure management.",

    applications: [
      "Water Treatment Plants",
      "Wastewater Treatment",
      "Pump Automation",
      "Water Distribution",
      "Level Control",
      "Remote Monitoring",
    ],

    solutionsDescription:
      "KP Automation can provide integrated control and monitoring systems that help operators manage water infrastructure, improve process visibility and respond more quickly to abnormal operating conditions.",

    solutions: [
      {
        title: "Pump Automation",
        description:
          "Automated systems for efficient pump operation and water flow control.",
      },
      {
        title: "SCADA Monitoring",
        description:
          "Centralized monitoring and control of water infrastructure.",
      },
      {
        title: "Remote Automation",
        description:
          "Remote monitoring solutions for distributed water systems and equipment.",
      },
    ],

    benefitDescription:
      "Automation provides continuous visibility into treatment, pumping and distribution systems while helping reduce water wastage, improve equipment reliability and optimize resource use.",

    benefits: [
      "Reduced water wastage",
      "Improved pump efficiency",
      "Continuous process monitoring",
      "Better infrastructure control",
      "Reduced energy consumption",
      "Remote operational visibility",
    ],
  },

  /* =======================================================
     OIL & GAS
  ======================================================= */

  {
    slug: "oil-gas",
    title: "Oil & Gas",
    icon: Fuel,
    href: "/industries/oil-gas",

    image:
      "https://images.pexels.com/photos/4883682/pexels-photo-4883682.jpeg?auto=compress&cs=tinysrgb&w=1800",

    overviewImage:
      "https://images.pexels.com/photos/23369348/pexels-photo-23369348.jpeg?auto=compress&cs=tinysrgb&w=1400",

    technologyImage:
      "https://images.pexels.com/photos/6048400/pexels-photo-6048400.jpeg?auto=compress&cs=tinysrgb&w=1400",

    benefitImage:
      "https://images.pexels.com/photos/10396411/pexels-photo-10396411.jpeg?auto=compress&cs=tinysrgb&w=1400",

    description:
      "Reliable industrial automation solutions for monitoring, controlling and optimizing complex oil and gas operations.",

    aboutTitle:
      "Automation for Oil & Gas Operations",

    about:
      "Oil and gas facilities operate complex and critical industrial processes involving pipelines, storage systems, processing equipment and remote infrastructure. Automation enables continuous monitoring, process control and improved operational visibility.",

    overviewDescription:
      "Oil and gas operations involve critical processes, remote infrastructure and equipment that require continuous monitoring and dependable control. Automation connects field instruments, control systems and monitoring platforms to provide better operational visibility.",

    howItWorks: [
      {
        title: "Field Measurement",
        description:
          "Industrial instrumentation measures pressure, flow, temperature and process conditions.",
      },
      {
        title: "Control Operations",
        description:
          "PLC and control systems manage industrial equipment and critical process operations.",
      },
      {
        title: "Centralized Monitoring",
        description:
          "SCADA systems collect and display information from distributed infrastructure.",
      },
      {
        title: "Alarm Management",
        description:
          "Automation systems identify abnormal operating conditions and provide timely alerts.",
      },
    ],

    challengesDescription:
      "Complex infrastructure, remote operations and continuous production requirements make equipment reliability and process monitoring especially important. Automation helps operators identify abnormal conditions and manage critical processes more effectively.",

    challenges: [
      "Complex infrastructure",
      "Remote operations",
      "Equipment reliability",
      "Process safety",
      "Pipeline monitoring",
      "Continuous operation",
    ],

    technologiesDescription:
      "Oil and gas automation combines PLC and control systems, process instrumentation, SCADA platforms, remote monitoring and industrial communication technologies.",

    technologies: [
      "PLC",
      "SCADA",
      "HMI",
      "RTU",
      "Process Instrumentation",
      "Pressure Sensors",
      "Flow Meters",
      "Industrial IoT",
      "Industrial Networking",
    ],

    applicationsDescription:
      "Automation can support pipeline monitoring, process control, pump and compressor operation, tank monitoring, remote infrastructure and industrial data acquisition.",

    applications: [
      "Process Monitoring",
      "Pipeline Monitoring",
      "Pump & Compressor Control",
      "Remote Infrastructure Monitoring",
      "Tank Level Monitoring",
      "Industrial Process Control",
      "Data Acquisition",
      "Equipment Monitoring",
    ],

    solutionsDescription:
      "KP Automation can integrate field instruments, industrial controllers and centralized monitoring platforms to improve visibility and control across oil and gas operations.",

    solutions: [
      {
        title: "Process Control Systems",
        description:
          "Automation systems for monitoring and controlling critical industrial processes.",
      },
      {
        title: "Remote Monitoring Solutions",
        description:
          "Centralized monitoring of geographically distributed infrastructure.",
      },
      {
        title: "Instrumentation Integration",
        description:
          "Integration of field instruments with control and monitoring systems.",
      },
      {
        title: "Industrial Data Monitoring",
        description:
          "Real-time collection and visualization of important operational information.",
      },
    ],

    benefitDescription:
      "Automation supports reliable operation by improving process visibility, enabling faster detection of abnormal conditions and providing centralized monitoring of critical industrial infrastructure.",

    benefits: [
      "Better process visibility",
      "Improved equipment reliability",
      "Faster abnormal condition detection",
      "Reduced operational downtime",
      "Centralized monitoring",
      "Improved operational control",
    ],
  },

  /* =======================================================
     PACKAGING
  ======================================================= */

  {
    slug: "packaging",
    title: "Packaging",
    icon: Package,
    href: "/industries/packaging",

    image:
      "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1800",

    overviewImage:
      "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1400",

    technologyImage:
      "https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=1400",

    benefitImage:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1400",

    description:
      "Industrial automation solutions for high-speed packaging operations, machine coordination, material handling and production monitoring.",

    aboutTitle:
      "Automation in Packaging",

    about:
      "Packaging operations depend on the coordinated operation of filling machines, conveyors, labeling systems, sealing equipment and inspection processes. Automation helps synchronize these machines and improve production speed, accuracy and reliability.",

    overviewDescription:
      "Packaging operations depend on precise coordination between filling, labeling, sealing, conveying and inspection equipment. Automation helps synchronize these processes to support faster production and consistent packaging quality.",

    howItWorks: [
      {
        title: "Machine Coordination",
        description:
          "PLC systems synchronize multiple packaging machines and production equipment.",
      },
      {
        title: "Motion Control",
        description:
          "Servo systems provide accurate positioning and movement for high-speed packaging operations.",
      },
      {
        title: "Product Handling",
        description:
          "Conveyor and automated handling systems move products efficiently between packaging stages.",
      },
      {
        title: "Production Monitoring",
        description:
          "Monitoring systems provide real-time information about machine performance and production output.",
      },
    ],

    challengesDescription:
      "Packaging facilities must manage high production speeds, frequent product changes and the reliable coordination of multiple machines. Equipment downtime and synchronization issues can quickly affect overall production performance.",

    challenges: [
      "High-speed production requirements",
      "Machine synchronization",
      "Packaging quality consistency",
      "Frequent product changes",
      "Equipment downtime",
      "Material handling efficiency",
    ],

    technologiesDescription:
      "Packaging automation combines PLC systems, servo motion control, sensors, machine vision and industrial communication to coordinate machines and maintain reliable production flow.",

    technologies: [
      "PLC",
      "HMI",
      "Servo Systems",
      "VFD",
      "Industrial Sensors",
      "Machine Vision",
      "Industrial Networking",
      "IIoT",
    ],

    applicationsDescription:
      "Automation can be applied to filling machines, labeling systems, conveyors, sealing equipment, product inspection and complete packaging lines.",

    applications: [
      "Filling Machines",
      "Labeling Systems",
      "Sealing Machines",
      "Conveyor Automation",
      "Product Inspection",
      "Material Handling",
      "Packaging Lines",
      "Production Monitoring",
    ],

    solutionsDescription:
      "KP Automation can develop integrated machine control and monitoring solutions that help coordinate packaging equipment and improve production performance.",

    solutions: [
      {
        title: "Packaging Line Automation",
        description:
          "Integrated control systems for coordinating complete packaging operations.",
      },
      {
        title: "Servo Motion Control",
        description:
          "Precision motion systems for high-speed packaging machines.",
      },
      {
        title: "Machine Integration",
        description:
          "Integration of multiple packaging machines into coordinated production systems.",
      },
      {
        title: "Production Monitoring",
        description:
          "Real-time monitoring of packaging equipment and production performance.",
      },
    ],

    benefitDescription:
      "Automation helps packaging operations achieve higher throughput, improved machine coordination and more consistent product handling while reducing repetitive manual work.",

    benefits: [
      "Higher production speed",
      "Improved machine coordination",
      "Consistent packaging quality",
      "Reduced equipment downtime",
      "Improved production visibility",
      "Greater operational flexibility",
    ],
  },
];