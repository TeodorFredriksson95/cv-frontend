import "./PrivacyPolicyHeader.css";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../Navbar/Navbar";

const PrivacyPolicyHeader = () => {
  useEffect(() => {}, []);
  return (
    <div className="privacy-policy-header">
      <Navbar />

      <div className="about-hero-content clearfix">
        <div className="about-hero-title">
          <h1 className="about-title no-main-page-title privacy-title">Privacy Policy</h1>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicyHeader;
