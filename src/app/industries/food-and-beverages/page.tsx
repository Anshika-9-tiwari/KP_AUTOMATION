'use client';

import ContactComponent from '@/app/contact/contactcomponent';
import PageBanner from '@/components/pageBanner';
import IndustryFeatureSection from '@/components/industryfeature';
import { motion } from 'framer-motion';

const slides = [
  {
    title: "Food & Beverages Industry",
    description: "Automating food production with smart, hygienic, and efficient solutions.",
    imageUrl: "https://i.pinimg.com/736x/7e/75/59/7e75595fa40e1abb5e6bb0b7f0f638b1.jpg",
  },
  {
    title: "Hygienic Process Automation",
    description: "Ensuring quality and consistency with advanced automation systems.",
    imageUrl: "https://i.pinimg.com/1200x/86/fd/07/86fd07014f780e609f7e440d73ffe86e.jpg",
  },
  {
    title: "Smart Manufacturing Solutions",
    description: "Improving efficiency and traceability in F&B production lines.",
    imageUrl: "https://i.pinimg.com/1200x/f2/96/df/f296df5621b97338c03f199bb9cbc44d.jpg",
  },
  {
    title: "Sustainable Engineering",
    description: "Optimizing energy use and waste management in food processing plants.",
    imageUrl: "https://i.pinimg.com/736x/7e/68/94/7e68943b0dd6f5b640b7c4ed126c9a89.jpg",
  },
];


const featureData = [
  {
    title: 'Worker health and safety',
    image: 'https://third-eye.ai/wp-content/uploads/2023/09/food.jpg',
    desc: `Contamination and quality inspection of food are critical aspects of ensuring food safety and consumer health. Proper inspection helps identify and prevent potential hazards that could arise from contamination, spoilage, or other quality issues.`,
    extra: `Also, Vision-based system to monitor the usage of personal protective equipment (PPE) in a food and beverages factory for worker’s safety and health....`,
  },
  {
    title: 'AI-Based Quality Inspection',
    image: '/food-quality.jpeg',
    desc: `AI-driven vision systems automate food quality inspection by detecting contamination, deformation, or mislabeling with high accuracy.`,
    extra: `It reduces human error, ensures consistent quality, and enhances consumer trust with real-time defect detection on production lines.`,
  },
  {
    title: 'Packaging Line Automation',
    image: '/object-segmentation.jpeg',
    desc: `Automated packaging systems streamline bottling, sealing, and labeling operations in high-speed food production environments.`,
    extra: `Our smart automation boosts throughput, improves hygiene, and reduces operational costs in bakery, snack, and beverage lines.`,
  },
  {
    title: 'Sorting and Counting',
    image: '/bottle-sort.jpg',
    desc: `Automated sorting and counting in food manufacturing is a crucial process to ensure product quality, safety, and efficiency. `,
    extra: `It involves the use of various technologies and systems to sort and count food items accurately like Weight-based Sorting, Colour and Size Sorting, OCR, Barcode Scanning etc.`,
  },
];

const FoodAndBeverages = () => {
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
            The Food & Beverages industry demands strict safety, hygiene, and real-time tracking across the supply chain. From processing to packaging,
            smart technologies are transforming how food is produced, stored, and delivered.
          </p>
          <p>
           <i> Our smart factory and AI-driven solutions help food companies increase efficiency, reduce waste, and meet global safety regulations with ease.</i>
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

export default FoodAndBeverages;
