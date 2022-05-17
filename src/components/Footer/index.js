import React from "react";
import "./style.css";
import Newsletter from "../Newsletter/index";

// MUI Components
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

// Images
import WhiteLogo from "../../assets/images/logos/white-logo.svg";
import Person from "../../assets/images/footer/person.svg";
import Clouds from "../../assets/images/footer/clouds.svg";
import Ring from "../../assets/images/footer/ring.svg";

// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const footerLinks = [
    "Services",
    "FAQ",
    "Project Overview",
    "How it Work",
    "Experience Team",
    "Testimonial",
    "What Our Clients Say",
    "Services",
    "Contact Us",
    "Free Quote",
  ];

  return (
    <div className="footer-field">
      <Newsletter />
      <img className="section-img-1" src={Person} alt="person" />
      <img className="section-img-2" src={Clouds} alt="clouds" />
      <img className="section-img-3" src={Ring} alt="ring" />
      <footer>
        <Container>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} sm={6} lg={3}>
              <Box>
                <a className="footer-logo" href="index.html">
                  <img src={WhiteLogo} alt="logo" />
                </a>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "300",
                    margin: "40px 0",
                    paddingRight: "20px",
                  }}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at this layout.
                  The point of using .
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <a href="#">
                    <FacebookIcon sx={{ color: "#fff", marginRight: "8px" }} />
                  </a>
                  <a href="#">
                    <InstagramIcon sx={{ color: "#fff", marginRight: "8px" }} />
                  </a>
                  <a href="#">
                    <TwitterIcon sx={{ color: "#fff", marginRight: "8px" }} />
                  </a>
                  <a href="#">
                    <LinkedInIcon sx={{ color: "#fff" }} />
                  </a>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "300",
                    padding: "20px 0",
                    marginBottom: "40px",
                  }}
                >
                  Links
                </Typography>
                <Grid container columnSpacing={2}>
                  {footerLinks.map((item, i) => (
                    <Grid item xs={6} key={i}>
                      <a className="footer-link" href="#">
                        {item}
                      </a>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "300",
                    padding: "20px 0",
                    marginBottom: "40px",
                  }}
                >
                  Support
                </Typography>
                <Grid container columnSpacing={2}>
                  {footerLinks.map((item, i) => (
                    <Grid item xs={6} key={i}>
                      <a className="footer-link" href="#">
                        {item}
                      </a>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} lg={2}>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "300",
                    padding: "20px 0",
                    marginBottom: "40px",
                  }}
                >
                  Support
                </Typography>
                <Box>
                  <Box>
                    <a className="footer-link" href="#">
                      +12 1234 56789
                    </a>
                  </Box>
                  <Box>
                    <a className="footer-link" href="#">
                      info@company.com
                    </a>
                  </Box>
                  <Box>
                    <a className="footer-link" href="#">
                      services@company.com
                    </a>
                  </Box>
                  <Box>
                    <address className="footer-link">
                      12-Park Street , Lakeview
                    </address>
                  </Box>
                  <Box>
                    <address className="footer-link">NY-1206, USA</address>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box
          sx={{
            textAlign: "center",
            paddingBottom: "10px",
            marginTop: "50px",
            borderTop: "2px solid var(--sec-color-1)",
          }}
        >
          <ul className="footer-nav">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <Typography>&copy; ALl rights reserved &#64; 2022</Typography>
        </Box>
      </footer>
    </div>
  );
};

export default Footer;
