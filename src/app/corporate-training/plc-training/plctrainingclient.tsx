
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SmartWorkerCard from '@/components/smartfactorycard';
import ContactComponent from '../../contact/contactcomponent'
import { PiSealCheckBold } from 'react-icons/pi';
import PageBanner from '@/components/pageBanner';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import Accordion from '@/components/accordion'
import { plcItems } from '@/data/faqData';

const slides = [
  {
    title: "PLC Training",
    description: "Master PLC systems with hands-on automation projects.",
    imageUrl: "https://i.pinimg.com/736x/60/84/1f/60841f657576f2bb9e9429a9d30e07ee.jpg",
  },
  {
    title: "Hands-On Learning",
    description: "Real-time industrial PLC applications.",
    imageUrl: "https://i.pinimg.com/1200x/ee/e9/d7/eee9d7851c7a14ae8f750b1c3f490780.jpg",
  },
  {
    title: "Expert Guidance",
    description: "Train with certified automation professionals.",
    imageUrl: "https://i.pinimg.com/1200x/27/3e/62/273e624917bde14640bae87f5f046e41.jpg",
  },
  {
    title: "Industry Ready Skills",
    description: "Build a strong foundation for automation careers.",
    imageUrl: "https://i.pinimg.com/1200x/bb/0a/72/bb0a723660da32919ae1800a36506eb7.jpg",
  },
];


const featureItem = (text: string, index: number) => (
  <li key={index} className="flex items-start gap-2 mb-2">
    <PiSealCheckBold className="text-green-500 mt-1" />
    <span>{text}</span>
  </li>
);

const PLCTraining = () => {
  const featureData = [
    {
      title: 'Benefits of Online PLC Training Institute',
      image: 'https://i.pinimg.com/736x/40/09/38/40093848efde87323245b02524d69225.jpg',
      desc: `If you can’t attend classroom training, joining an online PLC training institute is a great option. This flexibility makes it easy for working professionals and students to enhance their skills without traveling. These courses often include:`,
      features: [
        'Live classes with experts ',
        'Recorded lectures for revision ',
        'Access to simulation software',
        'Certificates after completion ',
        'Given the benefits, this is a very practical training opportunity.',
      ],
    },
    {
      title: 'The Importance of PLC',
      image: 'https://i.pinimg.com/736x/60/84/1f/60841f657576f2bb9e9429a9d30e07ee.jpg',
      desc: `The PLC training modules provide comprehensive knowledge on machine operation guidelines. These modules cover a range of skills, from mastering programming languages to issuing instructions to equipment in order to achieve specific targets and complete tasks.`,
      features: [
        'Enhances production efficiency and reduces downtime.',
        'Hands on Experience on Real-Time Applications',
        'you can become a PLC programmer by joining our courses (Online – Offline).',
        'India has a large potential to get Automation in its Industrial Sector.',
        'Core skill for automation and control engineers.'
      ],
    },
     {
      title: 'Course Offered ',
      image: '/plc_programming.jpeg',
      desc: `PLC (Programmable Logic Controller) training teaches how to program, operate, and troubleshoot PLC-based automation systems. It includes ladder logic, timers, counters, memory bits, and I/O configuration.`,
      features: [
        'We offer flexible timings, small batches and the following customized Courses:',
        'Introduction to PLC Programming Software',
        'Fundamentals of PLC & Types & Architecture of PLC',
        'Logic and Ladder Diagrams & Wiring Different Field Devices to PLC',
        'Communication with SCADA Software',
      ],
    },
  ];


  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      {/* Banner */}
       <div>
        <PageBanner slides={slides} />
       </div>

      {/* CardSection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-8xl mx-auto px-6 md:px-12 py-16 "
        >
          <h1 className="text-3xl font-semibold text-red-400 text-center mb-10 ">Find the Best PLC Training Institute for Your Career in Industrial Automation!</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-15  ">
            {[{
              icon: <CalendarMonthIcon className="text-5xl text-red-400 mb-2" />,
              title: "Duration",
              desc: "Within 20 days"
            }, {
              icon: <HistoryToggleOffIcon className="text-5xl text-green-400 mb-2" />,
              title: "Timing",
              desc: "10 am to 6 pm Monday to Saturday"
            }, {
              icon: <AutoStoriesIcon className="text-5xl text-blue-400 mb-2" />,
              title: "Eligibility",
              desc: "B.tech Diploma( electrical or electronics), ITI & also working Professional.."
            }].map((item, i) => (
              <motion.div
                key={i}
                //whileHover={{ scale: 1.03 }}
                className="card bg-base-50  shadow-sm p-5 items-center text-center "
              >
                {item.icon}
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      {/* Overview Section */}
        <div className="mb-12 px-6 md:px-16">
          <h1 className="text-3xl font-bold mb-4">Overview</h1>
          <p className="mb-4">
            If you want to build a career in industrial automation, learning PLC programming is a must. A reliable PLC Training Institute can help you gain the skills required for industries like manufacturing, robotics, oil & gas, and process control. In this blog, we’ll guide you on how to choose the best PLC training institute—whether you’re searching for one near you or an online option.
          </p>
          <h1 className='text-lg font-semibold mb-2'>Why Choose a PLC Training Institute?</h1>
          <p className='mb-2 text-sky-700'>
            Programmable Logic Controllers (PLC) are the backbone of modern automation. A PLC Programming Course covers programming, wiring, networking, and real-time industrial applications. By enrolling in a PLC Training Institute near me, students gain both practical and theoretical knowledge to prepare for automation industry jobs.
          </p>
          <h1 className='text-lg font-semibold mb-2'>PLC Training Institute Near Me vs. Online PLC Training</h1>
          <p className='mb-2 '>
            Many learners search for a PLC training institute near me to find hands-on training in their city. On the other hand, professionals with tight schedules prefer enrolling in the <strong className='font-semibold'>best online PLC training courses</strong> to learn at their own space. Both options are effective—your choice depends on flexibility, budget, and career goals.
          </p>
          
        </div>
      {/* Sections */}
      {featureData.map(({ title, image, desc, features }, i) => (
        <div key={i} className="grid md:grid-cols-2 gap-8 px-6 md:px-16 py-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={image}
              alt={title}
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-95"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>{desc}</p>
            <h3 className="font-semibold text-lg mt-4 mb-2">Key Features</h3>
            <ul>{features.map((f, idx) => featureItem(f, idx))}</ul>
          </motion.div>
        </div>
      ))}

      {/* Overview Section */}
        <div className="mb-12 mt-5 px-6 md:px-16">
          <h1 className='text-lg font-semibold mb-2'>PLC Training in Noida</h1>
          <p className='mb-3 text-sky-700'>
            Many learners search for a PLC training institute near me to find hands-on training in their city. On the other hand, professionals with tight schedules prefer enrolling in the best online PLC training courses to learn at their own pace. Both options are effective—your choice depends on flexibility, budget, and career goals.
          </p>
          <h1 className='text-lg font-semibold mb-2'>Best PLC SCADA Training Institute in Delhi</h1>
          <p className='mb-2 '>
            For those in the capital, the <strong className='font-semibold'>best PLC SCADA training institute in Delhi provides advanced courses covering PLC, SCADA, HMI, and DCS systems.</strong> With Delhi being a central hub for education and industries, students gain excellent placement opportunities after completing their training.
          </p>
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
      
      {/* Accordion */}
      <main>
       <Accordion title="PLC Training FAQs" items={plcItems} />
      </main>
    </div>
  );
};

export default PLCTraining;

