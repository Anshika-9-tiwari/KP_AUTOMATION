'use client';

import Link from 'next/link';
import PageBanner from '@/components/pageBanner';
import { motion } from 'framer-motion';
import ContactComponent from '../contact/contactcomponent';
import { ArrowForward } from '@mui/icons-material';

const products = [
  {
    title: 'Siemens',
    description: 'We deliver all siemens products like plc, hmi, AC drives & motors etc',
    image: 'https://atechnology.in/wp-content/uploads/2023/04/Siemens.jpg',
  },
  {
    title: 'Control panel',
    description: 'We understand need of customer & deliver a quality services which meets their excat speciﬁcation.',
    image: 'https://atechnology.in/wp-content/uploads/2023/04/Control-panel.jpg',
  },
  {
    title: 'Delta',
    description: 'We deliver all Delta products like plc, hmi, drives & motors etc',
    image: '/deltaproducts.png',
  },
  {
    title: 'HMI & SCADA',
    description: 'We deliver all HMI & SCADA products like Delta, Siemens, Mitsubishi etc',
    image: 'https://i.pinimg.com/1200x/fd/a9/0a/fda90aac94fdfbe324981be1bc476b55.jpg',
  },
  {
    title: 'Variable Frequency Drives',
    description: 'High-efficiency VFDs for precise motor control, energy savings, and enhanced process performance ',
    image: 'https://i.pinimg.com/736x/19/fc/59/19fc5979eadbd6e5a5c2e08b53b31bd2.jpg',
  },
  
];

export default function Products() {
  return (
    <div className="bg-white text-gray-800">
      <PageBanner
        title="All Products"
        description="Siemens , Delta & HMI , VFD & Control Panel"
        imageUrl="https://atechnology.in/wp-content/uploads/2023/04/plc-1.jpg"
      />

      {/* CourseCardSection */}
      <div className="max-w-8xl mx-auto px-6 md:px-12 py-18">
        <h2 className="text-3xl font-bold text-center mb-12">Explore All Our Products Modules</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((training, index) => (
            <motion.div whileHover={{ scale: 1.03 }}>
              <div
                key={index}
                className="bg-base-50 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition duration-400 border-red-200 border-1"
              >
                <figure>
                  <img src={training.image} alt={training.title} className="w-full h-55 object-cover" />
                </figure>
                <div className="p-5 space-y-3 ">
                  <h3 className="text-xl font-semibold uppercase">{training.title}</h3>
                  <p className="text-gray-600">{training.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
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
  );
}
