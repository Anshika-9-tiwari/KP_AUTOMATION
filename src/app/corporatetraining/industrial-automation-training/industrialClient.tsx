'use client';

import PageBanner from '@/components/pageBanner';
import ContactComponent from '../../contact/contactcomponent';
import IndustryFeatureSection from '@/components/industryfeature';
import { motion } from 'framer-motion';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Accordion from '@/components/accordion';
import { automationItems } from '@/data/faqData';

const slides = [
  {
    title: "Master Industrial Automation with Hands-On Training",
    description: "Gain expertise in PLC, SCADA, robotics, and process control with real-world industrial simulations.",
    imageUrl: "https://i.pinimg.com/736x/01/08/68/01086883bf3541a11e1d28362842d7ee.jpg",
  },
  {
    title: "Build Your Future in Industry 4.0",
    description: "Learn how automation, IoT, and data-driven technologies are revolutionizing modern manufacturing.",
    imageUrl: "/industryPlant.jpg",
  },
  {
    title: "Practical Training with PLC & SCADA Systems",
    description: "Get hands-on experience with leading automation ",
    imageUrl: "/PLC_SCADA.jpeg",
  },
  {
    title: "Learn from Industry Professionals",
    description: "Train under experienced automation engineers and enhance your skills for top industrial careers.",
    imageUrl: "/feildsource.jpeg",
  },
];


const IndustrialAutomation = () => {
  const featureData = [
    {
      title: 'Why Choose Industrial Automation Training?',
      image: 'https://i.pinimg.com/736x/01/08/68/01086883bf3541a11e1d28362842d7ee.jpg',
      desc: `Industrial automation training equips you with the knowledge and hands-on skills needed to work with PLCs, SCADA, robotics, drives, sensors, and industrial communication systems. The demand for skilled automation engineers is rising globally as industries continue to adopt smarter, more efficient systems.`,
      extra: `businesses can enhance efficiency, productivity, and safety while reducing costs and time-to-market. In today's highly competitive environment, mastering Industrial Automation is essential for staying ahead & for sustainable growth.`,
    },
    {
      title: 'Benefits of Industrial Automation Training Courses',
      image: 'https://i.pinimg.com/1200x/bf/68/09/bf680951e425f057fe05219976cee122.jpg',
      desc: `we offer a comprehensive range of training programs focused on Industrial Automation. From PLC training and programming and SCADA system design to robotics and advanced control systems, our courses cover the full spectrum of automation technologies.`,
      listItems: [
      "Gain expertise in PLCs, SCADA, and DCS systems",
      "Learn programming, troubleshooting, and maintenance",
      "Higher employability and better salary prospects",
      "Hands-on training with industrial-grade equipment",
      "Opportunities in manufacturing, oil & gas, power plants, and more"
      ],
    },
    {
      title: 'Industrial Automation Training Course in Delhi, Gurgaon, and Noida',
      image: 'https://i.pinimg.com/736x/88/8d/06/888d06c61395f07191d326e0f36fd3e6.jpg',
      desc: `The NCR region (Delhi, Gurgaon, Noida) has become a hub for automation training. Here, students can find advanced labs, experienced mentors, and great placement opportunities. Enrolling in an industrial automation training course in Delhi, Gurgaon, and Noida helps you learn from industry experts while staying connected to India’s largest industrial region.`,
      extra: `With a focus on industry-relevant skills, our program prepares you for real-world challenges in industrial automation.`,
    },
    {
    title: 'What You Learn in Industrial Automation Training',
    image: '/PLC_SCADA.jpeg',
    desc: `We offer a comprehensive range of training programs focused on Industrial Automation. From PLC programming and SCADA system design to robotics and advanced control systems, our courses cover the full spectrum of automation technologies.`,
    listItems: [
      "PLC (Programmable Logic Controller) Programming",
      "SCADA Systems",
      "HMI (Human Machine Interface)",
      "Industrial Networking",
      "Drives & Motors",
      "Robotics & Motion Control",
      "Process Instrumentation"
     ],
  },
  {
    title: 'Choosing the Best Industrial Automation Training Institute',
    image: '/trainingLab.jpg',
    desc: `Industrial automation is the backbone of smart industries. By joining industrial automation training courses in places like Noida , gurugram, Delhi, and selecting the best industrial automation training institute, you can build a successful career in this ever-growing field. Don’t just learn — transform your future with the right training today.`,
    listItems: [
      "Experienced trainers with industry background",
      "Hands-on training facilities with real-time projects",
      "Updated course curriculum covering PLC, SCADA, and IoT in automation",
      "Placement support and industry tie-ups",
      "Certifications recognized by employers",
    ],
  },
];

  return (
    <>
    <div className="bg-white text-gray-800 overflow-x-hidden">
      {/* banner */}
      <div>
        <PageBanner slides={slides}/>
      </div>

      {/* CardSection */}
      <div className="px-6 md:px-16 py-12 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-8xl mx-auto px-6 md:px-12 py-16 "
        >
          <h1 className="text-3xl font-semibold text-red-400 text-center mb-10 ">Unlock Your Career with Industrial Automation Training Courses</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-15  ">
            {[{
              icon: <CalendarMonthIcon className="text-5xl text-red-400 mb-2" />,
              title: "Duration",
              desc: "Within 5 days"
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
                className="card bg-base-50 shadow-sm p-5 items-center text-center "
              >
                {item.icon}
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Overview Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Overview</h1>
          <p className="mb-4">
            In today’s rapidly evolving industrial landscape, industrial automation training courses have become essential for professionals who want to stay competitive. Automation is at the heart of modern manufacturing, energy systems, and industrial processes. Learning automation not only improves your technical expertise but also opens up vast career opportunities across industries.
          </p>
          <p className="mb-4 text-sky-800">
           <i>At KP Automation, we're dedicated to shaping the future of Industrial Automation . This course introduces the basics of automation systems used in modern IndustrialAutomation including sensors, actuators, controllers, and integration strategies.Led by industry experts with extensive hands-on experience, our training programs combine theoretical knowledge with practical application,</i>
          </p>
          <p>
            With a relentless commitment to innovation and excellence, we offer training programs designed to equip aspiring engineers and industry professionals with the skills and knowledge needed to thrive in today's dynamic industrial scenario.
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

        {/* Accordion */}
        <main>
          <Accordion title="Industrial Automation Training FAQs" items={automationItems} />
        </main>
      </div>
    </div>
    </>
  );
};

export default IndustrialAutomation;
