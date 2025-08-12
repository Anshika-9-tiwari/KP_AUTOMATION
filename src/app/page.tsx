'use client';

import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  useMediaQuery,
  useTheme,
  Button,
  Card,
  CardContent,
  Link,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import PageBanner from '@/components/pageBanner';
import IndustryFeatureSection from '@/components/industryfeature';

import {
  FactCheck,
  Hub,
  AutoAwesome,
  WorkspacePremium,
  MedicalInformation,
  Engineering,
  Fastfood,
  ElectricBolt,
  PeopleAlt,
  ArrowForward,
  Schema,
  Build,
} from '@mui/icons-material';
import ContactComponent from '../app/contact/contactcomponent';
import { MdManageHistory, MdQueryStats } from 'react-icons/md';
import AddTaskIcon from '@mui/icons-material/AddTask';
import OurProducts from '@/components/ourproducts';

const featureData = [
  {
    title: 'About KP Automation',
    image: '/people.png',
    desc: `KP Automation is a premier provider of industrial automation solutions with over 5 years of experience in delivering innovative engineering services and Training. We specialize in comprehensive automation systems that enhance productivity, efficiency, and safety across diverse industries. Our training modules are designed to simulate real industrial environments, ensuring our students gain the practical skills required to succeed in today’s automation-driven world.`,
    extra: `we also deliver automation services for factories and businesses looking to modernize their operations. From system integration and control panel design to smart machine and smart vision solutions, we support industries through their digital transformation journey.`,
  },
];

const Solutions = () => {
  const isTabletOrBelow = useMediaQuery('(max-width:1024px)');
  const theme = useTheme();

  return (
    <>
      <div className='bg-white text-gray-800 overflow-x-hidden'>
        {/* ----------------------- BANNER ----------------------- */}
        <PageBanner
          title="Industrial Automation Training & Services"
          imageUrl="/industrialautomation.jpeg"
          description={'Automate Your Success'}
        />

        {/* -------------------  About SECTION  ------------------- */}
        <div className="px-6 md:px-16 py-14">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-3 text-center">Who we are</h1>
            <Box sx={{ width: 70, height: 3, bgcolor: 'skyblue', mx: 'auto', mb: 4, borderRadius: 2 }} />
            <p className="mb-2">
              KP Automation is a leading provider of industrial automation training and solutions, equipping individuals and industries with the skills and systems they need to thrive in the era of smart manufacturing. We specialize in PLC, SCADA, HMI, drives, and complete automation services for a wide range of industries. Established with a vision to bridge the gap between industry demands and skilled professionals, KP Automation has grown into a trusted name in the field of industrial automation training and services.
            </p>
            <p className='text-red-500 italic'>
              Whether you're an engineering student, a professional seeking skill upgrades, or a business looking to automate — KP Automation is your reliable partner in industrial excellence.
              At KP Automation, we are driven by a mission to empower the industrial sector through advanced automation training and smart factory solutions.
            </p>
          </div>

          {/* Reused Feature Sections */}
          {featureData.map((item, i) => (
            <IndustryFeatureSection key={i} index={i} {...item} />
          ))}
        </div>

        
        {/* -------------------  WHAT WE DO SECTION  ------------------- */}
        <Box 
          sx={{
            bgcolor: '#f9f9f9',
            color: 'black',
            py: 8,
            textAlign: 'center'
          }}
        >
          <Container>
            {/* Heading */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  fontWeight: 'bold',
                  mb: 1,
                }}
              >
                What We Do
              </Typography>
              <Box sx={{ width: 70, height: 3, bgcolor: 'skyblue', mx: 'auto', mb: 2, borderRadius: 2 }} />
              <Typography
                variant="body1"
                sx={{ maxWidth: 700, mx: 'auto', color: 'text.secondary' }}
              >
                Comprehensive automation training tailored to your industry requirements
              </Typography>
            </motion.div>

            {/* Cards */}
            <Grid container spacing={4} sx={{ mt: 5 }} justifyContent="center">
              {[
                {
                  title: 'PLC Automation',
                  description: 'Advanced PLC programming and integration services for seamless industrial process control and optimization.',
                  icon: <Hub fontSize="large" />,
                  gradient: 'linear-gradient(130deg, #007bff, #00d4ff)'
                },
                {
                  title: 'SCADA Systems',
                  description: 'Comprehensive SCADA solutions for real-time monitoring, data acquisition, and process visualization.',
                  icon: <AutoAwesome fontSize="large" />,
                  gradient: 'linear-gradient(130deg, #28a745, #85e085)'
                },
                {
                  title: 'Industrial Automation',
                  description: 'Advanced systems and solutions enabling efficient, reliable, and automated control of industrial processes.',
                  icon: <Build fontSize="large" />,
                  gradient: 'linear-gradient(130deg, #ff7f50, #ffb366)'
                },
                {
                  title: 'Sensor & Instrumentation',
                  description: 'High-precision sensors and instruments for accurate measurement, monitoring, and process optimization .',
                  icon: <Schema fontSize="large" />,
                  gradient: 'linear-gradient(130deg, #6c757d, #adb5bd)'
                }
              ].map(({ title, description, icon, gradient }) => (
                <Grid item xs={12} sm={6} md={3} key={title} component={'div' as any}>
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <Card
                      sx={{
                        textAlign: 'center',
                        p: 3,
                        borderRadius: 3,
                        boxShadow: 3,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        width: 360, 
                        mx: "auto",
                      }}
                    >
                      {/* Icon Circle */}
                      <Box
                        sx={{
                          width: 70,
                          height: 70,
                          borderRadius: '50%',
                          background: gradient,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                          color: '#fff'
                        }}
                      >
                        {icon}
                      </Box>

                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {description}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Link href="/corporatetraining">
              <Button variant="outlined" color="error" className="shadow-lg transition duration-300 animate-pulse">
                Explore All Training
              </Button>
            </Link>
          </Box>
        </Box>


        {/* -------------------  OUR PRODUCTS SECTION  ------------------- */}
        <OurProducts />

        {/* -------------------  INDUSTRIES SECTION  -------------------
        <Box sx={{ bgcolor: 'white', py: 8, color: 'black' }}>
          <Container sx={{ px: { xs: 2, sm: 3, md: 4, textAlign:'center' } }}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontSize: { xs: '1.75rem', md: '2.25rem'} }}
              >
                Industries We Serve 
              </Typography>
              <Typography mb={6}>
                Comprehensive automation services tailored to your industry requirements
              </Typography>
            
              <Grid container spacing={{ xs: 3, md: 5 }} justifyContent="center">
                {[
                  {
                    name: 'Warehouse & Logistics',
                    icon: <Fastfood className="text-red-500" />,
                    link: '/industries/warehouse-and-logistics',
                  },
                  {
                    name: 'Manufacturing Industry',
                    icon: <MedicalInformation className="text-red-500" />,
                    link: '/industries/manufacturing',
                  },
                  {
                    name: 'Automotive Industry',
                    icon: <Engineering className="text-red-500" />,
                    link: '/industries/automotive',
                  },
                  {
                    name: 'Food & Beverages',
                    icon: <ElectricBolt className="text-red-500" />,
                    link: '/industries/food-and-beverages',
                  },
                ].map(({ name, icon, link }) => (
                  <Grid item xs={6} sm={6} md={3} key={name} component={'div' as any}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                      <Card sx={{ textAlign: 'center', py: 3, px: 2 }}>
                        {icon}
                        <CardContent>
                          <Typography>{name}</Typography>
                        </CardContent>
                        <Link href={link}>
                          <button className="btn btn-sm bg-red-400 text-white mt-2">
                            Read More
                            <ArrowForward className="text-gray-50 mt-1 cursor-pointer" />
                          </button>
                        </Link>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Box> */}

         {/* -------------------  SMART FACTORY SECTION  ------------------- */}
        <Box sx={{ bgcolor: '#f9f9f9', py: 8, color: 'black' }}>
        <Container sx={{ px: { xs: 2, sm: 3, md: 4, textAlign:'center' } }}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ textAlign: 'center', fontSize: { xs: '1.75rem', md: '2.25rem' } }}
            >
              Smart Factory
            </Typography>
            <Typography mb={2} sx={{ textAlign: 'center', color: 'gray' }}>
              Automation and intelligent systems for manufacturing excellence using cutting-edge technologies.
            </Typography>
            <Box textAlign="center">
              <Link href="/smartfactory">
                <Button variant="outlined" sx={{ color: 'red', borderColor: 'red', '&:hover': { borderColor: 'darkred' } }} className="shadow-lg transition duration-300 animate-pulse">
                  Explore more
                </Button>
              </Link>
            </Box>
          </motion.div>
        </Container> 
        </Box>

      {/* Why choose us */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-8xl mx-auto px-6 md:px-12 py-16"
      >
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6 "> Why Choose KP Automation!</h1>
        <h4 className='text-center mb-10'>The advantages that set us apart from the competition</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
          {[{
            icon: <MdManageHistory className="text-4xl text-red-400 mb-2" />,
            title: "Industry Relevant Skills",
            desc: "Industry-aligned, job-ready training!"
          }, {
            icon: <PeopleAlt className="text-4xl text-green-400 mb-2" />,
            title: "Expert Team",
            desc: "Certified engineers with deep industry knowledge and hands-on experience"
          },{
            icon: <MdQueryStats className="text-4xl text-orange-400 mb-2" />,
            title: "Practice-Based Learning",
            desc: "Real-time project exposure and hands-on training"
          },{
            icon: <AddTaskIcon className="text-4xl text-blue-400 mb-2" />,
            title: "24/7 Support",
            desc: "Round-the-clock technical assistance and emergency service"
          }].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="card bg-base-50 shadow-xl p-5 items-center text-center"
            >
              {item.icon}
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
        {/* -------------------  CONTACT CTA  ------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ContactComponent />
        </motion.div>
      </div>
    </>
  );
};

export default Solutions;
