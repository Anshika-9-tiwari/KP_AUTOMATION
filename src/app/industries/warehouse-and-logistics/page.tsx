'use client';

import PageBanner from '@/components/pageBanner';
import ContactComponent from '../../contact/contactcomponent';
import IndustryFeatureSection from '@/components/industryfeature';
import { motion } from 'framer-motion';

const slides = [
   {
    title: "Automated Material Handling",
    description: "Empowering industries with robotics and AI-driven systems.",
    imageUrl: "https://i.pinimg.com/1200x/41/07/d1/4107d14494050269cae446c77384f4b8.jpg",
  },
  {
    title: "Seamless Logistics Integration",
    description: "Optimizing warehouse operations for maximum efficiency and reliability.",
    imageUrl: "https://i.pinimg.com/736x/29/2f/8d/292f8d1366bb6d18b787e0a68ca01dbd.jpg",
  },
  {
    title: "Warehouse & Logistics Industry",
    description: "Revolutionizing supply chains with smart automation and robotics.",
    imageUrl: "https://i.pinimg.com/736x/a7/d4/a4/a7d4a485e166fa7b5047746d7419341d.jpg",
  },
  {
    title: "Smart Warehouse Management",
    description: "Enhancing speed, accuracy, and visibility across logistics operations.",
    imageUrl: "https://third-eye.ai/wp-content/uploads/2023/10/warehouse-workers-discussing-about-logistics-distribution-packages-market-1-scaled-e1700196681425.webp",
  },
];


const WarehouseLogisticsPage = () => {
  const featureData = [
    {
      title: 'Weighbridge Integration',
      image: 'https://third-eye.ai/wp-content/uploads/2023/10/orange-truck-grain-weighed-on-260nw-1158202891-1.jpg',
      desc: 'A comprehensive and intelligent platform designed to deliver secured weighment, with various services like CCTV, image capturing facility, RFID integration, barrier gate integration,  and captures all import and export weight data – based on the real-time movement of the truck.',
      extra: 'This improves cash flow, reduces storage costs, and minimizes wastage in perishable or time-sensitive goods.',
    },
    {
      title: 'Automated Guided Vehicles (AGVs)',
      image: '/Warehousemanage.jpeg',
      desc: 'AGVs streamline warehouse transport by automating material movement and reducing manual labor.',
      extra: 'They improve operational speed, accuracy, and workplace safety.',
    },
    {
      title: 'Warehouse Energy Monitoring',
      image: 'https://third-eye.ai/wp-content/uploads/2023/10/warehouse-workers-discussing-about-logistics-distribution-packages-market-1-scaled-e1700196681425.webp',
      desc: 'AI-powered energy tracking in warehouses ensures optimal lighting, HVAC, and equipment usage.',
      extra: 'It supports sustainability goals and reduces utility expenses.',
    },
    {
      title: 'Real-Time Location System (RTLS)',
      image: '/Warehouse.jpeg',
      desc: 'RTLS enables accurate tracking of pallets, assets, and personnel inside large warehouses.',
      extra: 'It enhances visibility, reduces search time, and increases safety compliance.',
    },
  ];

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
        {/* Banner-section */}
        <div>
          <PageBanner slides={slides}/>
        </div>

        {/* Overview */}
        <div className="px-6 md:px-16 py-12">
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-4">Overview</h1>
            <p className="mb-4">
              Welcome to the future of warehousing and logistics, where artificial intelligence (AI) is unlocking unprecedented levels of efficiency and productivity. From intelligent inventory management to autonomous vehicles, AI solutions are elevating the logistics landscape, empowering businesses to meet the demands of today’s dynamic markets..
            </p>
            <p>
             <i> At its core, AI brings a new level of intelligence and automation to warehouse and logistics functions. By harnessing machine learning, predictive analytics, and robotic systems, AI enhances the accuracy, efficiency, and adaptability of every step in the supply chain journey...</i>
            </p>
          </div>
 
          {/* Reused Feature Sections */}
          {featureData.map((item, i) => (
            <IndustryFeatureSection key={i} index={i} {...item} />
          ))}

          {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ContactComponent />
        </motion.div>
        </div>
    </div>
  );
};

export default WarehouseLogisticsPage;

