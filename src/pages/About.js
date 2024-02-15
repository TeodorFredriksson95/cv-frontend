import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import AboutHeader from "../components/About/AboutHeader";
import TimeLineWebDev from "../components/TimeLineWebDev/TimeLineWebDev";

const About = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <AboutHeader />
      <TimeLineWebDev />
    </div>
  );
};
export default About;
