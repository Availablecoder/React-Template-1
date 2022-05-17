import React from "react";
import "./style.css";

// Importing Plugins
/* --> Swiper Slide <-- */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// MUI Components
import { Container, Typography, Grid, Box } from "@mui/material";

// Images
import PricingImage from "../../assets/images/pricing/vector-object.svg";
import Rocket from "../../assets/images/pricing/rocket.svg";

// Icons
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";

const Pricing = () => {
  const pricingFeatures = [
    "Impression Increase - 8%",
    "Increase Traffic - 70%",
    "Services Boosts - 15 days",
    "Rank Suggest Link - 60%",
    "Link Building",
    "24/7 Support",
  ];

  return (
    <section id="pricing" className="pricing section-padding">
      <img className="section-img-1" src={Rocket} alt="rocket" />
      <Container>
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item xs={12} md={5}>
            <div className="main-heading main-heading-start">
              <div className="title">
                <PsychologyRoundedIcon className="icon" color="#fff" />
                <Typography className="text" variant="caption">
                  Pricing
                </Typography>
              </div>
              <Typography
                variant="h2"
                sx={{ marginBottom: "30px" }}
                color="#262626"
              >
                See Our Flexible Pricing
              </Typography>
              <Typography variant="body2" color="#575757">
                It is a long established fact that a render will be distracted
                by the readable content of a page when looking at this layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters.
              </Typography>
            </div>
            <Swiper
              dir="rtl"
              className="mySwiper"
              slidesPerView={"auto"}
              initialSlide={2}
            >
              <SwiperSlide>
                <div className="pricing-plan plan-1">
                  <Typography className="ribbon" color="#fe7062">
                    RECOMMENDED
                  </Typography>
                  <Typography variant="h5" color="#fff" align="center">
                    PRO
                  </Typography>
                  <Box sx={{ margin: "15px 0" }}>
                    {pricingFeatures.map((text, i) => (
                      <Box
                        sx={{ display: "flex", alignItems: "center" }}
                        key={i}
                      >
                        <CheckBoxRoundedIcon
                          sx={{ color: "#fff", marginRight: "10px" }}
                          fontSize="small"
                        />
                        <Typography variant="subtitle1" color="#fff">
                          {text}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Typography variant="h5" color="#fff" align="center">
                    $30
                  </Typography>
                  <div className="get-started">
                    <a href="#">Buy Now</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pricing-plan plan-2">
                  <Typography className="ribbon" color="var(--sec-color-2)">
                    Try It
                  </Typography>
                  <Typography variant="h5" color="#fff" align="center">
                    PRO
                  </Typography>
                  <Box sx={{ margin: "15px 0" }}>
                    {pricingFeatures.map((text, i) => (
                      <Box
                        sx={{ display: "flex", alignItems: "center" }}
                        key={i}
                      >
                        <CheckBoxRoundedIcon
                          sx={{ color: "#fff", marginRight: "10px" }}
                          fontSize="small"
                        />
                        <Typography variant="subtitle1" color="#fff">
                          {text}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Typography variant="h5" color="#fff" align="center">
                    $25
                  </Typography>
                  <div className="get-started">
                    <a href="#">Buy Now</a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <Box></Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <img
              className="why-choose-image"
              src={PricingImage}
              alt="Pricing Plans"
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Pricing;
