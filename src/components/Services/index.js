import React from "react";
import "./style.css";

// MUI Components
import { Container, Typography, Grid } from "@mui/material";

// Images
import ServImage1 from "../../assets/images/services/serv-boxes/serv1.svg";
import ServImage2 from "../../assets/images/services/serv-boxes/serv2.svg";
import ServImage3 from "../../assets/images/services/serv-boxes/serv3.svg";
import ring from "../../assets/images/services/ring.svg";
import clouds from "../../assets/images/services/clouds.svg";

// Icons
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

const Services = () => {
  const servBoxes = [
    {
      image: ServImage1,
      title: "Monthly SEO",
      text: "It is a long established fact that a render will be distracted by the readable content of a page.",
    },
    {
      image: ServImage2,
      title: "Monthly SMM",
      text: "It is a long established fact that a render will be distracted by the readable content of a page.",
    },
    {
      image: ServImage3,
      title: "Search Bank",
      text: "It is a long established fact that a render will be distracted by the readable content of a page.",
    },
  ];

  return (
    <section id="services" className="services section-padding">
      <img className="section-img-1" src={ring} alt="ring" />
      <img className="section-img-2" src={clouds} alt="clouds" />
      <Container>
        <div className="main-heading">
          <div className="title">
            <SettingsRoundedIcon className="icon" color="#fff" />
            <Typography className="text" variant="caption">
              Our Services
            </Typography>
          </div>
          <Typography
            variant="h2"
            sx={{ marginBottom: "30px" }}
            color="#262626"
          >
            What We Do For You
          </Typography>
          <Typography variant="body2" color="#575757">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form,by injected
            humour,or randomised words which don't look even slightly
            believable. if you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </Typography>
        </div>
        <Grid container className="serv-box-container" spacing={3}>
          {servBoxes.map((box, i) => (
            <Grid item key={i} xs={12} sm={6} lg={4} align="center">
              <div className="serv-box">
                <img src={box.image} alt="services" />
                <Typography variant="h3" color="#262626" gutterBottom>
                  {box.title}
                </Typography>
                <Typography variant="subtitle1" color="#707070">
                  {box.text}
                </Typography>
                <div className="icon">
                  <AddRoundedIcon sx={{ display: "block", fontSize: "40px" }} />
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Services;
