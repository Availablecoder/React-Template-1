import { Container, Typography, Link, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./style.css";

const Newsletter = () => {
  return (
    <div id="newsletter" className="news-letter">
      <Container>
        <Grid
          sx={{
            background:
              "linear-gradient(to top, var(--sec-color-1), var(--sec-color-2))",
            color: "#fff",
            padding: "30px 70px",
            borderRadius: "20px",

            "@media (max-width: 600px)": {
              padding: "30px",
            },
          }}
          justifyContent="space-between"
          alignItems="center"
          container
        >
          <Grid item xs={12} md={4}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "400", fontSize: "35px" }}
            >
              Subscribe
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Raleway', sans-seirf",
                fontSize: "25px",
                fontWeight: "300",
              }}
              gutterBottom
            >
              Our Newsletter
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "15px" }}>
              It is a long established fact that a render will be distracted by
              the readable content of a page when looking at this layout.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <form action="#">
              <Box sx={{ position: "relative" }}>
                <input
                  className="subscribe-input-text"
                  type="text"
                  placeholder="Your Mail Address"
                />
                <input
                  type="submit"
                  className="main-btn-2 subscribe-input-submit"
                  value="Subscribe"
                />
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Newsletter;
