import "./DashboardHeader.css";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../Navbar/Navbar";

const DashboardHeader = () => {
  useEffect(() => {}, []);
  return (
    <div className="contact-header">
      <Navbar />

      <div className="about-hero-content clearfix">
        <div className="about-hero-title">
          <h1 className="about-title no-main-page-title">Dashboard</h1>
        </div>
      </div>
    </div>
  );
};
export default DashboardHeader;
