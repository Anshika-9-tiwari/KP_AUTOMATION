'use client';

import { useState } from 'react';
import PageBanner from '@/components/pageBanner';
 import type { SelectChangeEvent } from '@mui/material/Select';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  AccessTime as AccessTimeIcon,
  Email as EmailIcon,
  LocationOn as LocationOnIcon,
  Message as MessageIcon,
  Person as PersonIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material';

const slides = [
  {
    title: "Let's Connect with KP Automation",
    description: "Reach out to our automation experts for customized industrial solutions and training support.",
    imageUrl: "/Contactbanner.jpeg",
  },
  {
    title: "Your Partner in Smart Automation",
    description: "From consultation to implementation — we provide end-to-end industrial automation solutions.",
    imageUrl: "https://i.pinimg.com/736x/e6/2d/ef/e62defd43636801773f47f2903d6b781.jpg",
  },
  {
    title: "Support That Drives Success",
    description: "Our dedicated support team ensures your systems perform efficiently, 24/7.",
    imageUrl: "https://i.pinimg.com/1200x/d7/3c/90/d73c90b4e9d95224a726a8e65feb6c72.jpg",
  },
  {
    title: "Visit Our Automation Center",
    description: "Experience cutting-edge automation solutions and live demonstrations at our facility.",
    imageUrl: "https://i.pinimg.com/1200x/6c/70/eb/6c70ebe9c83a988ab24e94c0c222cd1c.jpg",
  },
];


export default function ContactPage() {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email_id: '',
    phone_no: '',
    course_name: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
 
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    setForm({ ...form, [name]: value });
  };

  // api handler for form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSnack(true);
        setForm({
          first_name: '',
          last_name: '',
          email_id: '',
          phone_no: '',
          course_name: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Submit Error:', error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      {/* Banner */}
      <div>
        <PageBanner slides={slides}/>
      </div>

      
      <Container maxWidth="xl" sx={{ py: 4, my: 4, bgcolor: 'white', color: 'black'}}>
        <Typography variant="h4" align="center" fontWeight="bold" color="info" gutterBottom>
          Get in touch with our automation experts
        </Typography>
        <Typography variant="subtitle1" align="center" mb={4}>
          We’d love to hear from you! Fill out the form and we’ll get back to you shortly.
        </Typography>

        {/* === Vertical stack instead of Grid === */}
        <Stack spacing={6}>
          {/* Contact form */}
          <Card sx={{ p: 5, borderRadius: 3, boxShadow: 3 }}>
            <Box component="form" noValidate onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  label="First Name"
                  name="first_name"
                  fullWidth
                  value={form.first_name}
                  onChange={handleChange}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Last Name"
                  name="last_name"
                  fullWidth
                  value={form.last_name}
                  onChange={handleChange}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Email"
                  name="email_id"
                  type="email"
                  fullWidth
                  value={form.email_id}
                  onChange={handleChange}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Phone No"
                  name="phone_no"
                  fullWidth
                  value={form.phone_no}
                  onChange={handleChange}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <FormControl fullWidth required>
                  <InputLabel>Course</InputLabel>
                  <Select
                    name="course_name"
                    value={form.course_name}
                    onChange={handleChange}
                    label="Course"
                  >
                    <MenuItem value="Automation">Industrial Automation</MenuItem>
                    <MenuItem value="Industrial Automation">Drives & Motor</MenuItem>
                    <MenuItem value="PLC Networking">PLC Networking</MenuItem>
                    <MenuItem value="PLC Programing">PLC Programing</MenuItem>
                    <MenuItem value="SCADA & HMI">SCADA & HMI</MenuItem>
                    <MenuItem value="Servo Motor">Servo Motor</MenuItem>
                    <MenuItem value="Process Instrumentation">Process Instrumentation</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  fullWidth
                  value={form.message}
                  onChange={handleChange}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MessageIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  disabled={loading}
                  fullWidth
                  sx={{ py: 1.5, fontWeight: 'bold', fontSize: '1rem', borderRadius: 2 }}
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
                </Button>
              </Stack>
            </Box>
          </Card>

          {/* Contact info + map */}
          <Box>
            <Card sx={{ p: 5, mb: 3 }}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <LocationOnIcon color="error" sx={{ mr: 1 }} />
                  <Typography variant="subtitle1" fontWeight="bold">
                    Address
                  </Typography>
                </Box>
                <Typography sx={{ mb: 2, pl: 4, borderBottom: 1 }}>
                  Block-C, Village-Salimar, Landmark Near Indra Park, New Delhi – 110088, India
                </Typography>

                <Box display="flex" alignItems="center" mb={2}>
                  <EmailIcon color="success" sx={{ mr: 1 }} />
                  <Typography variant="subtitle1" fontWeight="bold">
                    Email
                  </Typography>
                </Box>
                <Typography sx={{ mb: 2, pl: 4, borderBottom: 1 }}>
                  info@kpautomation.co.in
                </Typography>

                <Box display="flex" alignItems="center" mb={2}>
                  <PhoneIcon color="error" sx={{ mr: 1 }} />
                  <Typography variant="subtitle1" fontWeight="bold">
                    Phone
                  </Typography>
                </Box>
                <Typography sx={{ mb: 2, pl: 4, borderBottom: 1 }}>
                  +91 74648 71880 / 63972 06850
                </Typography>

                <Box display="flex" alignItems="center" mb={2}>
                  <AccessTimeIcon color="success" sx={{ mr: 1 }} />
                  <Typography variant="subtitle1" fontWeight="bold">
                    Office Hours
                  </Typography>
                </Box>
                <Typography sx={{ pl: 4, borderBottom: 1 }}>Mon – Sat: 9 AM – 6 PM</Typography>
              </CardContent>
            </Card>

            <Card sx={{ overflow: 'hidden', borderRadius: 3, boxShadow: 3 }}>
              <Card sx={{ overflow: 'hidden', borderRadius: 3, boxShadow: 3 }}>
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.036964539363!2d77.17024577545907!3d28.62867188307171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbe60d3e61df%3A0xf9eb10da4a8d3d03!2sIndra%20Park%2C%20Village%20Salimar%20Bagh%2C%20New%20Delhi%2C%20Delhi%20110088!5e0!3m2!1sen!2sin!4v1720945378456!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Card>
            </Card>
          </Box>
        </Stack>

        <Snackbar open={snack} autoHideDuration={3000} onClose={() => setSnack(false)}>
          <Alert severity="success">Form submitted successfully!</Alert>
        </Snackbar>
      </Container>
    </>
  );
}
