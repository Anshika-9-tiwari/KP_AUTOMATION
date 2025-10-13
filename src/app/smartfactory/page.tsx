'use client';
import PageBanner from '@/components/pageBanner';
import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import ContactComponent from '../contact/contactcomponent';
import Link from 'next/link';

const slides = [
  {
    title: "Smart Factory",
    description: "TInnovating Solutions for Smart Factory",
    imageUrl: "https://i.pinimg.com/736x/9a/9f/64/9a9f6496466366c5598ce482c35b9136.jpg",
  },
  {
    title: "Tailored Engineering Expertise",
    description: "Customized industrial automation to boost productivity.",
    imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/001/234/358/small/modern-blue-halftone-banner-background.jpg",
  },
    {
    title: "Innovative Automation Solutions",
    description: "Empowering industries with smart, efficient automation.",
    imageUrl: "https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg",
  },
  {
    title: "Tailored Engineering Expertise",
    description: "Customized industrial automation to boost productivity.",
    imageUrl: "https://t4.ftcdn.net/jpg/05/54/46/89/360_F_554468927_iwU3VYIjsaeopAb0WPYxVf21TloEhTEj.jpg",
  },
];

export default function SmartFactory() {
  return (
    <>
      {/* Banner-section */}
      <div>
        <PageBanner slides={slides}/>
      </div>

      {/*Overview */}
      <Box sx={{ py: 10, backgroundColor: '#f5f5f5', color:'black' }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
            Smart Factory Solutions
          </Typography>
          <Typography variant="body1" textAlign="center" maxWidth={700} mx="auto" mt={2} color='red'>
            Our smart factory solutions bring automation, analytics, and real-time monitoring to
            streamline your industrial operations. From predictive maintenance to IoT integration, we
            transform your plant into an intelligent and efficient ecosystem.
          </Typography>
          <Grid container spacing={4} mt={5} justifyContent="center">
            <Grid item xs={12} md={5} component={'div' as any}>
              <Box sx={{ background: '#fff', p: 4, borderRadius: 4, boxShadow: 3 ,"&:hover": {bgcolor:'#f5faf8' , boxShadow: 5 , border:1, borderColor:'orange'}}}>
                <Typography variant="h6" fontWeight="bold">
                  IoT-Based Automation
                </Typography>
                <Typography variant="body2" mt={1}>
                  Real-time machine monitoring, alerts, and controls powered by smart devices.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} component={'div' as any}>
              <Box sx={{ background: '#fff', p: 4, borderRadius: 4, boxShadow: 3, "&:hover": {bgcolor:'#f5faf8' , boxShadow: 5 , border:1, borderColor:'orange'} }}>
                <Typography variant="h6" fontWeight="bold" className=' hover:underline hover:text-blue-700'>
                 <Link href={'/smartfactory/smart-worker'}>
                    Smart Worker
                 </Link>
                </Typography>
                <Typography variant="body2" mt={1}>
                 Field Salesforce Monitoring enables businesses to track field operations .
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} component={'div' as any}>
              <Box sx={{ background: '#fff', p: 4, borderRadius: 4, boxShadow: 3, "&:hover": {bgcolor:'#f5faf8' , boxShadow: 5 , border:1, borderColor:'orange'} }}>
                <Typography variant="h6" fontWeight="bold" className=' hover:underline hover:text-blue-700'>
                  <Link href={'/smartfactory/smart-vision'}>
                    Smart Vision
                  </Link>
                </Typography>
                <Typography variant="body2" mt={1}>
                  Revolutionize your visual understanding with our advanced object segmentation.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} component={'div' as any}>
              <Box sx={{ background: '#fff', p: 4, borderRadius: 4, boxShadow: 3, "&:hover": {bgcolor:'#f5faf8' , boxShadow: 5 , border:1, borderColor:'orange'} }}>
                <Typography variant="h6" fontWeight="bold" className=' hover:underline hover:text-blue-700'>
                  <Link href={'/smartfactory/smart-security'}>
                    Smart Security
                  </Link>                
                </Typography>
                <Typography variant="body2" mt={1}>
                   The smart gate utilizes various automated features to enhance security.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} component={'div' as any}>
              <Box sx={{ background: '#fff', p: 4, borderRadius: 4, boxShadow: 3, "&:hover": {bgcolor:'#f5faf8' , boxShadow: 5 , border:1, borderColor:'orange'} }}>
                <Typography variant="h6" fontWeight="bold" className=' hover:underline hover:text-blue-700'>
                  <Link href={'/smartfactory/smart-machine'}>
                    Smart Machine
                  </Link>                 
                </Typography>
                <Typography variant="body2" mt={1}>
                  Machine Monitoring helps industries improve productivity by tracking.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ContactComponent />
      </motion.div>
    </>
  );
}
