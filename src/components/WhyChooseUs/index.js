import React from "react";
import "./style.css";

// MUI Components
import { Container, Typography, Grid, Box } from "@mui/material";

// Images
import whyChooseImage from "../../assets/images/why-choose-us/vector-image.svg";
import rocket from "../../assets/images/why-choose-us/rocket.svg";

// Icons
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import PriceCheckRoundedIcon from "@mui/icons-material/PriceCheckRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";

const whyChooseUs = () => {
  const advantages = [
    {
      icon: <SpeedRoundedIcon sx={{ fontSize: "50px" }} />,
      title: "Best Performance",
      text: "It is a long established fact that a render will be \
            distracted by the readable content of a page when looking at this layout. The point of using.",
    },
    {
      icon: <PriceCheckRoundedIcon sx={{ fontSize: "50px" }} />,
      title: "Flexible Price",
      text: "It is a long established fact that a render will be \
            distracted by the readable content of a page when looking at this layout. The point of using.",
    },
    {
      icon: <SupportAgentRoundedIcon sx={{ fontSize: "50px" }} />,
      title: "24/7 Support",
      text: "It is a long established fact that a render will be \
            distracted by the readable content of a page when looking at this layout. The point of using.",
    },
  ];

  return (
    <section id="about" className="why-choose-us section-padding">
      <img className="section-img-1" src={rocket} alt="rocket" />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <div className="main-heading main-heading-start">
              <div className="title">
                <PsychologyRoundedIcon className="icon" color="#fff" />
                <Typography className="text" variant="caption">
                  Why We ?
                </Typography>
              </div>
              <Typography
                variant="h2"
                sx={{ marginBottom: "30px" }}
                color="#262626"
              >
                There are Many Agency{" "}
                <Box sx={{ fontWeight: 400 }} component="span">
                  But Why Choose Us ?
                </Box>
              </Typography>
              <Typography variant="body2" color="#575757">
                It is a long established fact that a render will be distracted
                by the readable content of a page when looking at this layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters.
              </Typography>
            </div>
            <Box sx={{ marginTop: "50px" }}>
              {advantages.map((item, i) => (
                <div key={i} className="why-choose-box">
                  <Box
                    sx={{
                      height: "fit-content",
                      padding: "15px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(to top, var(--sec-color-1), var(--sec-color-2))",
                      color: "#fff",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <div className="content">
                    <Typography variant="h3" color="#262626">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="#707070">
                      {item.text}
                    </Typography>
                  </div>
                </div>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              className="why-choose-image"
              src={whyChooseImage}
              alt="Why Choose Us"
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default whyChooseUs;
