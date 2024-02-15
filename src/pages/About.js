import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import AboutHeader from "../components/About/Header/AboutHeader";
import TimeLineWebDev from "../components/TimeLineWebDev/TimeLineWebDev";
import ContentSection from "../components/About/ContentSection/ContentSection";

const About = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <AboutHeader />
      <ContentSection />
    </div>
  );
};
export default About;
