import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import AboutHeader from "../components/About/Header/AboutHeader";
import TimeLineWebDev from "../components/TimeLineWebDev/TimeLineWebDev";
import AboutContentSection from "../components/About/ContentSection/AboutContentSection";
import { Helmet } from "react-helmet";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>About</title>
        <meta name="description" content="Discover my path, strengths, and experiences that sculpted me into the developer I am today. Learn about the lessons that shaped my professional ethos." />
      </Helmet>
      <AboutHeader />
      <AboutContentSection />
    </div>
  );
};
export default About;
