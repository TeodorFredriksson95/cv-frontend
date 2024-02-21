import "./CreditsHeader.css";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../Navbar/Navbar";

const CreditsHeader = () => {
  useEffect(() => {}, []);
  return (
    <div className="resources-header">
      <Navbar />

      <div className="about-hero-content clearfix">
        <div className="about-hero-title">
          <h1 className="about-title no-main-page-title">Credits</h1>
        </div>
      </div>
    </div>
  );
};
export default CreditsHeader;
