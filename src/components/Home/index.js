import React from "react";
import "./style.css";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import HomeImage from "../../assets/images/home/Image.svg";
import { Link } from "@mui/material";

const Home = () => {
  return (
    <section id="home" className="home">
      <Container>
        <Grid container>
          <Grid item xs={12} lg={5}>
            <Typography
              variant="h1"
              sx={{ textTransform: "uppercase", marginBottom: "40px" }}
              color="#fff"
            >
              Boost Website with us
            </Typography>
            <Box
              sx={{
                position: "relative",
                width: "80%",
                marginBottom: "20px",

                "@media (max-width: 576px)": {
                  width: "100%",
                },
              }}
            >
              <input
                className="home-input"
                type="text"
                placeholder="Your Website Address"
              />
              <Link
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  color: "#fff",
                  textDecoration: "none",
                }}
                href="#"
                className="main-btn-2"
              >
                Analysis
              </Link>
            </Box>
            <Typography
              variant="body1"
              color="#fff"
              sx={{ marginBottom: "30px" }}
            >
              it is a long established fact that a reader will be distraced by
              the readable content of a page when looking at uts layout.
            </Typography>
            <Box sx={{ display: "flex" }}>
              <a href="#" className="main-btn-2">
                Get Started
              </a>
              <a href="#" className="outlined-button">
                Learn More
              </a>
            </Box>
          </Grid>
          <Grid item xs={12} lg={7}>
            <img className="home-image" src={HomeImage} alt="home image" />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Home;
