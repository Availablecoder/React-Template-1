import React from "react";
import "./style.css";

// Importing Plugins
/* --> Swiper Slide <-- */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

// MUI Components
import { Container, Typography, Grid, Avatar } from "@mui/material";

// Images
import testimonials from "../../assets/images/testimonials.svg";

// Icons
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Box } from "@mui/system";

const Testimonials = () => {
  const clients = [
    {
      clientName: "Harris Kemmi",
      jobTitle: "CEO, Company",
      review: `There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form,by
                injected humour,or randomised words which don't look even
                slightly believable.`,
    },
    {
      clientName: "Johan Deo",
      jobTitle: "Designer, Company",
      review: `There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form,by
                injected humour,or randomised words which don't look even
                slightly believable.`,
    },
    {
      clientName: "Rita Merit",
      jobTitle: "COO, Company",
      review: `There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form,by
                injected humour,or randomised words which don't look even
                slightly believable.`,
    },
  ];

  return (
    <section id="testimonials" className="testimonials section-padding">
      <Container>
        <div className="main-heading">
          <div className="title">
            <PeopleRoundedIcon className="icon" color="#fff" />
            <Typography className="text" variant="caption">
              Testimonials
            </Typography>
          </div>
          <Typography
            variant="h2"
            sx={{ marginBottom: "30px" }}
            color="#262626"
          >
            What Our Clients Say
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
      </Container>
      <Grid sx={{ padding: "40px 10px 0" }} container spacing={8}>
        <Grid item xs={12} md={5}>
          <img
            className="testimonials-image"
            src={testimonials}
            alt="Clients Reviews"
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {clients.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="client-review-box">
                  <div className="content">
                    <q>{item.review}</q>
                    <Box sx={{ paddingTop: "15px" }}>
                      <StarRoundedIcon
                        fontSize="large"
                        sx={{ color: "#f8af23" }}
                      />
                      <StarRoundedIcon
                        fontSize="large"
                        sx={{ color: "#f8af23" }}
                      />
                      <StarRoundedIcon
                        fontSize="large"
                        sx={{ color: "#f8af23" }}
                      />
                      <StarRoundedIcon
                        fontSize="large"
                        sx={{ color: "#f8af23" }}
                      />
                      <StarRoundedIcon
                        fontSize="large"
                        sx={{ color: "#f8af23" }}
                      />
                    </Box>
                  </div>
                  <Box
                    sx={{
                      display: "flex",
                      paddingLeft: "35px",
                      marginTop: "-40px",
                    }}
                  >
                    <Avatar sx={{ width: 56, height: 56 }}>
                      {item.clientName
                        .split(" ")
                        .map((e) => e.charAt(0).toUpperCase())}
                    </Avatar>
                    <Box sx={{ paddingLeft: "10px", zIndex: "2" }}>
                      <Typography variant="h4" color="#262626">
                        {item.clientName}
                      </Typography>
                      <Typography variant="subtitle2" color="#707070">
                        {item.jobTitle}
                      </Typography>
                    </Box>
                  </Box>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </section>
  );
};

export default Testimonials;
