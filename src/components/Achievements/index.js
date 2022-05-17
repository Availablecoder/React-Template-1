import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import "./style.css";

// MUI Components
import { Container, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";

// Images && Icons
import TourRoundedIcon from "@mui/icons-material/TourRounded";

const Achievements = ({ scrollPosition }) => {
  const [reactCount, setReactCount] = useState(false);

  const counterField = useRef();

  const achievements = [
    {
      number: 250,
      title: "Project Done",
      text: "There are many variations of passages of Lorem Ipsum available",
    },
    {
      number: 120,
      title: "Award win",
      text: "There are many variations of passages of Lorem Ipsum available",
    },
    {
      number: 220,
      title: "Positive Review",
      text: "There are many variations of passages of Lorem Ipsum available",
    },
    {
      number: 140,
      title: "Happy Clients",
      text: "There are many variations of passages of Lorem Ipsum available",
    },
  ];

  const Counters = (id, num) => {
    return (
      <CountUp start={0} end={num}>
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} />+
          </div>
        )}
      </CountUp>
    );
  };

  useEffect(() => {
    console.log(counterField.current.offsetTop, window.scrollY);
    if (
      scrollPosition >
      counterField.current.offsetTop - counterField.current.clientHeight
    ) {
      setReactCount(true);
    }
  }, [scrollPosition]);

  return (
    <section id="achievements" className="achievements section-padding">
      <Container>
        <div className="main-heading">
          <div className="title">
            <TourRoundedIcon className="icon" color="#fff" />
            <Typography className="text" variant="caption">
              Milestone
            </Typography>
          </div>
          <Typography
            variant="h2"
            sx={{ marginBottom: "30px" }}
            color="#262626"
          >
            We Have Achieved Some Great
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

        <Grid
          ref={counterField}
          container
          spacing={8}
          sx={{ paddingTop: "50px" }}
        >
          {achievements.map((item, i) => (
            <Grid item xs={12} sm={6} lg={3} key={i} align="center">
              <Box>
                <Box
                  sx={{
                    width: "100px",
                    height: "100px",
                    fontFamily: '"Raleway", sans-serif',
                    fontSize: "28px",
                    fontWeight: 500,
                    marginBottom: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--sec-color-2)",
                    boxShadow: "0px 0px 6px rgba(119, 119, 119, 0.3)",
                  }}
                >
                  <Box>{reactCount && Counters(i, item.number)}</Box>
                </Box>
                <Typography variant="h3" color="#262626" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="subtitle2" color="#707070">
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Achievements;
