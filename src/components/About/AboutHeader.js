import "./AboutHeader.css";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import TimeLineWebDev from "../TimeLineWebDev/TimeLineWebDev";

const AboutHeader = () => {
  useEffect(() => {}, []);
  return (
    <div className="about-header">
      <Navbar />

      <div className="about-hero-content clearfix">
        <div className="about-hero-title">
          <h1 className="about-title">About</h1>
        </div>
      </div>
    </div>
  );
};
export default AboutHeader;
