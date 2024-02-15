import "./ApiPageHeader.css";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../Navbar/Navbar";

const ApiPageHeader = () => {
  useEffect(() => {}, []);
  return (
    <div className="api-header">
      <Navbar />

      <div className="about-hero-content clearfix">
        <div className="about-hero-title">
          <h1 className="about-title no-main-page-title">API</h1>
        </div>
      </div>
    </div>
  );
};
export default ApiPageHeader;
