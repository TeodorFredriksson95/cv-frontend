import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import AboutHeader from "../components/About/Header/AboutHeader";
import TimeLineWebDev from "../components/TimeLineWebDev/TimeLineWebDev";
import AboutContentSection from "../components/About/ContentSection/AboutContentSection";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutHeader />
      <AboutContentSection />
    </div>
  );
};
export default About;
