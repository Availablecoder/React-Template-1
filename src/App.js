import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/index";
import Home from "./components/Home/index";
import Services from "./components/Services/index";
import Achievements from "./components/Achievements/index";
import WhyChooseUs from "./components/WhyChooseUs/index";
import Testimonials from "./components/Testimonials/index";
import Pricing from "./components/Pricing/index";
import Footer from "./components/Footer/index";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {},
  typography: {
    fontFamily: '"Poppins","Raleway", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    h1: {
      fontSize: "50px",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h2: {
      fontFamily: '"Raleway", sans-serif',
      fontSize: "40px",
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h3: {
      fontSize: "30px",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "22px",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontWeight: 300,
      lineHeight: 1.8,
    },
    body2: {
      fontWeight: 400,
      lineHeight: 2,
    },
    subtitle1: {
      fontWeight: 400,
      lineHeight: 2,
    },
    subtitle2: {
      fontWeight: 400,
      lineHeight: 2,
    },
  },
});

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  window.onscroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="template-Rapper">
        <Header scrollPosition={scrollPosition} />
        <Home />
        <Services />
        <Achievements scrollPosition={scrollPosition} />
        <WhyChooseUs />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
