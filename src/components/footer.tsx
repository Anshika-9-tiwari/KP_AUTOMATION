'use client';

import { Box, Typography, Link as MuiLink, IconButton, useMediaQuery, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useTheme } from '@mui/material/styles';

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        backgroundColor: 'black',
        mt: 4,
        py: { xs: 6, md: 5 },
        px: { xs: 4, md: 10 },
        color: 'white',
      }}
    >
      <Grid
        container
        spacing={5}
        direction={isMobile ? 'column' : 'row'}
        justifyContent="space-between"
        alignItems={'flex-start'}
        textAlign={'left'}
      >
        {/* Logo and Description */}
        <Grid item xs={12} md={3} component={'div' as any}>
          <Box display="flex" flexDirection="column" alignItems={'flex-start'}>
            <Image src="/kp_automation.png" alt="Company Logo" width={160} height={50} />
            <Typography variant="body2" sx={{ mt: 2, maxWidth: 300, lineHeight: 1.5 }}>
              KP Automation is a leading provider of industrial automation solutions, specializing in smart factory technologies and corporate training programs.
            </Typography>
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={3} component={'div' as any}>
          <Typography variant="h6" sx={{ color: 'orange', mb: 2, fontWeight: 600 }}>
            Quick Links
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link href="/" passHref><MuiLink underline="none" color="white" sx={{ "&:hover": {textDecoration:'underline' } }}>Home</MuiLink></Link>
            <Link href="/corporatetraining" passHref><MuiLink underline="none" color="white" sx={{ "&:hover": {textDecoration:'underline' } }}>Corporate Training</MuiLink></Link>
            <Link href="/products" passHref><MuiLink underline="none" color="white" sx={{ "&:hover": {textDecoration:'underline' } }}>Products</MuiLink></Link>
            <Link href="/smartfactory" passHref><MuiLink underline="none" color="white" sx={{ "&:hover": {textDecoration:'underline' } }}>Smart Factory</MuiLink></Link>
            <Link href="/industries/automotive" passHref><MuiLink underline="none" color="white" sx={{ "&:hover": {textDecoration:'underline' } }}>Industries</MuiLink></Link>
          </Box>
        </Grid>

        {/* Course info link */}
        <Grid item xs={12} md={3} component={'div' as any}>
          <Typography variant="h6" sx={{ color: 'orange', mb: 2, fontWeight: 600 }}>
            Corporate Training
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link href="/corporatetraining/industrial-automation-training" passHref>
              <MuiLink underline="none" color="white" sx={{ "&:hover": {textDecoration:'underline' } }}>
                Industrial Automation
              </MuiLink>
            </Link>
            <Link href="/corporatetraining/process-instrumentation" passHref>
              <MuiLink underline="none" color="white" sx={{ "&:hover": {textDecoration:'underline' } }}>
                Process Instrumentation
              </MuiLink>
            </Link>
            <Link href="/corporatetraining/drives-motors" passHref>
              <MuiLink underline="none" color="white" sx={{ "&:hover": {textDecoration:'underline' } }}>
                Drives & Motors
              </MuiLink>
            </Link>
            <Link href="/corporatetraining/plc-training" passHref>
              <MuiLink underline="none" color="white" sx={{ "&:hover": {textDecoration:'underline' } }}>
                PLC Training & Networking
              </MuiLink>
            </Link>
            <Link href="/corporatetraining/scada-and-hmi" passHref>
              <MuiLink underline="none" color="white" sx={{ "&:hover": {textDecoration:'underline' } }}>
                SCADA & HMI Training
              </MuiLink>
            </Link>
            <Link href="/corporatetraining/servo-motor" passHref>
              <MuiLink underline="none" color="white" sx={{ "&:hover": {textDecoration:'underline' } }}>
                Servo & Motors
              </MuiLink>
            </Link>
          </Box>
        </Grid>


        {/* Social Media */}
        <Grid item xs={12} md={3} component={'div' as any}>
          <Typography variant="h6" sx={{ color: 'orange', mb: 2, fontWeight: 600 }}>
            Follow Us
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 2 }}>
            <PhoneIcon fontSize="small" sx={{ mr: 1 }} /> +91 74648 71880 / 63972 06850
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 2 }}>
            <EmailIcon fontSize="small" sx={{ mr: 1 }} /> info@kpautomation.co.in
          </Typography>
          
          {/* Location with 3 lines */}
          <Box display="flex" alignItems="flex-start" sx={{ mt: 1, lineHeight: 1.5 }}>
            <LocationOnIcon fontSize="small" sx={{ mr: 1, mt: 0.5 }} />
            <Box>
              <Typography variant="body2">Block-C, Village-Salimar,</Typography>
              <Typography variant="body2">Landmark Near Indra Park,</Typography>
              <Typography variant="body2">New Delhi – 110088, India</Typography>
            </Box>
          </Box>
          
          <Box display="flex" justifyContent={'flex-start'} gap={2} mt={2} ml={2}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/nikki-rajput-49b709286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              aria-label="LinkedIn"
              sx={{
                color: 'white',
                transition: 'transform 0.3s, color 0.3s',
                '&:hover': {
                  transform: 'scale(1.2)',
                  color: '#0A66C2',
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://wa.me/916397206850"
              target="_blank"
              aria-label="WhatsApp"
              sx={{
                color: 'white',
                transition: 'transform 0.3s, color 0.3s',
                '&:hover': {
                  transform: 'scale(1.2)',
                  color: '#25D366',
                },
              }}
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.instagram.com/kp_automation"
              target="_blank"
              aria-label="Instagram"
              sx={{
                color: 'white',
                transition: 'transform 0.3s, color 0.3s',
                '&:hover': {
                  transform: 'scale(1.2)',
                  color: '#E1306C',
                },
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
          <Button
            variant="outlined"
            color="primary"
            href="https://www.google.com/maps/dir/?api=1&destination=Indra+Park,+Village+Salimar+Bagh,+New+Delhi,+Delhi+110088"
            target="_blank"
            rel="noopener"
            sx={{ mt: 2 , ml:3, color: 'white', borderColor: 'white', '&:hover': { borderColor: 'orange', color: 'orange' } }}
          >
            Get Directions on  Maps
          </Button>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          textAlign: 'center',
          mt: 5,
          pt: 2,
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Typography variant="body2" mt={1}>
          © {new Date().getFullYear()} KP Automation. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
