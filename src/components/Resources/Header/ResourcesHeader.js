import "./ResourcesHeader.css";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../Navbar/Navbar";

const ResourcesHeader = () => {
  useEffect(() => {}, []);
  return (
    <div className="resources-header">
      <Navbar />

      <div className="about-hero-content clearfix">
        <div className="about-hero-title">
          <h1 className="about-title no-main-page-title">Resources</h1>
        </div>
      </div>
    </div>
  );
};
export default ResourcesHeader;
