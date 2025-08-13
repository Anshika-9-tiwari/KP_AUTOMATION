import { Container, Grid, Card, CardContent, CardMedia, Typography, Box, List, ListItem, ListItemText } from "@mui/material";
import { motion } from "framer-motion";

export default function OurProducts() {
  const products = [
    {
      title: "Control Panels",
      description: "Custom-designed control panels with advanced components for optimal performance and reliability in industrial environments.",
      image: "/controlpanel.jpeg",
      features: [
        "IP65 rated enclosures",
        "Modular component design",
        "Safety certified systems",
        "Remote monitoring capabilities"
      ]
    },
    {
      title: "Variable Frequency Drives",
      description: "High-efficiency VFDs for precise motor control, energy savings, and enhanced process performance across applications.",
      image: "https://i.pinimg.com/736x/19/fc/59/19fc5979eadbd6e5a5c2e08b53b31bd2.jpg",
      features: [
        "Energy efficient operation",
        "Programmable parameters",
        "Built-in safety features",
        "Communication protocols"
      ]
    },
    {
      title: "HMI Devices",
      description: "Intuitive human-machine interfaces providing seamless operator control and real-time system visualization.",
      image: "https://i.pinimg.com/1200x/fd/a9/0a/fda90aac94fdfbe324981be1bc476b55.jpg",
      features: [
        "Touchscreen operation",
        "Real-time data display",
        "Alarm management",
        "Multi-language support"
      ]
    },
     {
      title: "Programmable Logic Controllers (PLCs)",
      description: "Robust PLCs for reliable automation control, featuring modular design and extensive I/O options for diverse applications.",
      image: "https://i.pinimg.com/736x/22/a5/dd/22a5dd9b79600498b5b328bc458d1c0b.jpg",
      features: [
        "Siemens",
        "Delta ",
        "Mitsubishi options",
        "and Rockwell options"
      ]
    }
  ];

  return (
    <Box sx={{ backgroundColor: "#fff", py: 6 }}>
      <Container>
        {/* Section Title */}
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{
            background: "linear-gradient(135deg, black, #ff1c1c)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Our Products
        </Typography>
        <Box sx={{ width: 70, height: 3, bgcolor: 'skyblue', mx: 'auto', mb: 2, borderRadius: 2 }} />
        {/* Subtitle */}
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ mb: 8, maxWidth: 600, mx: "auto" }}
        >
          Industry-leading automation products and components for reliable industrial applications.
        </Typography>

        {/* Product Cards */}
        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {products.map(({ title, description, image, features }) => (
            <Grid item xs={12} sm={6} md={4} key={title} component={'div' as any}>
              <motion.div
                style={{ height: "100%" }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    width: 360, 
                    mx: "auto", 
                    bgcolor: '#f9f9f9',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={image}
                    alt={title}
                    sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {description}
                    </Typography>
                    <List dense>
                      {features.map((feature, index) => (
                        <ListItem key={index} sx={{ py: 0 }}>
                          <ListItemText primaryTypographyProps={{ variant: "body2", color: "text.secondary" }}>
                            • {feature}
                          </ListItemText>
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
