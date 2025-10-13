
'use client';

import PageBanner from '@/components/pageBanner';
import ContactComponent from '../../contact/contactcomponent';
import IndustryFeatureSection from '@/components/industryfeature'; //reuseable
import { motion } from 'framer-motion';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Accordion from '@/components/accordion';
import { plcNetworkingItems } from '@/data/faqData';

const slides = [
  {
    title: "PLC Networking",
    description: "Transforming manufacturing with PLC, SCADA, & robotics.",
    imageUrl: "/controlpanel.jpeg",
  },
  {
    title: "Tailored Engineering Expertise",
    description: "Customized industrial automation to boost productivity.",
    imageUrl: "https://i.pinimg.com/1200x/27/3e/62/273e624917bde14640bae87f5f046e41.jpg",
  },
];

const PlCNetworking = () => {
  const featureData = [
    {
      title: 'What is PLC Networking?',
      image: '/panel.jpg',
      desc: `PLC Networking refers to the communication between multiple PLCs and other industrial devices such as HMIs, sensors, drives, and SCADA systems. This connectivity allows industries to monitor, control, and automate complex processes with efficiency.`,
      extra: `Key Benefits of PLC Networking`,
      listItems:[
        "Seamless communication between devices",
        "Real-time monitoring and control",
        "Integration with SCADA, DCS, and IoT systems",
        "Increased efficiency in industrial automation"
      ]
    },
    {
      title: 'Why Choose an Industrial PLC Networking Training?',
      image: '/PLC_SCADA.jpeg',
      desc: `Enrolling in Industrial PLC Networking Training ensures that learners gain hands-on knowledge of protocols like Modbus, Profibus, Ethernet/IP, and Profinet. These skills are crucial for industries such as manufacturing, oil & gas, power plants, and smart factories.`,
      extra: `Core skills you will learn:`,
      listItems:[
         "PLC Communication Protocols",
         "Industrial Ethernet and Networking Concepts",
         "Troubleshooting Communication Issues",
         "Integration with SCADA & HMI systems",
      ]
    },
    {
      title: 'Benefits of a PLC Networking Online Course',
      image: 'https://i.pinimg.com/736x/74/1d/b1/741db1a815a41e172baa0d6c17853427.jpg',
      desc: `For working professionals, flexibility matters. A PLC Networking Online Course offers the advantage of learning from anywhere at your own pace. Many online platforms also provide virtual labs and simulation software, making the training as effective as classroom sessions.`,
      extra: `Advantages of online learning:`,
      listItems:[
        "Flexible schedules for working professionals",
        "Access to recorded sessions & resources",
        "Practical simulations and case studies",
        "Affordable compared to offline training",
      ]
    },
    {
      title: 'Earn a PLC Networking Certification',
      image: 'https://i.pinimg.com/736x/74/1d/b1/741db1a815a41e172baa0d6c17853427.jpg',
      desc: `Completing a course with a PLC Networking Certification not only validates your skills but also boosts your career prospects. Certified professionals are in high demand across industries, as companies look for experts who can handle industrial networking challenges.`,
      extra: `Career opportunities after certification:`,
      listItems:[
        "PLC Networking Engineer",
        "Industrial Automation Specialist",
        "Control Systems Engineer",
        "SCADA & Networking Technician",
      ]
    },
    {
      title: 'Course Content ',
      image: 'https://i.pinimg.com/736x/6a/13/be/6a13bee609d40823375309bd53f1fb53.jpg',
      desc: `Fundamentals of PLC Networking , Network Design and Configuration ,  Industrial Communication Protocols ,  Troubleshooting and Maintenance. `,
      extra: `Mastering PLC networking opens up diverse career opportunities in industries such as manufacturing, process control, energy, and more.`,
    },
  ];

  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      
      {/* Banner-section */}
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
          <h1 className="text-3xl font-semibold text-red-400 text-center mb-10 ">Master Your Skills with a PLC Networking Course</h1>
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
                className="card bg-base-50 p-5 items-center text-center "
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
            In today’s fast-growing industrial automation world, PLC Networking has become one of the most essential skills for engineers and technicians. A well-designed PLC Networking Course helps professionals understand how Programmable Logic Controllers (PLCs) communicate, integrate with SCADA systems, and support large-scale industrial processes.
          </p>
          <p className="mb-4 text-sky-700 italic">
            If you want to upgrade your career in automation, opting for <strong>Industrial PLC Networking Training is the perfect step</strong>. Our solutions help manufacturers stay competitive, meet demand, and foster innovation.
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
          <Accordion title="PLC Networking FAQs" items={plcNetworkingItems} />
        </main>
      </div>
    </div>
  );
};

export default PlCNetworking;
