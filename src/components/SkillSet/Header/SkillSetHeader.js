import "./SkillSetHeader.css";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../Navbar/Navbar";

const SkillSetHeader = () => {
  useEffect(() => {}, []);
  return (
    <div className="skillset-header">
      <Navbar />

      <div className="about-hero-content clearfix">
        <div className="about-hero-title">
          <h1 className="about-title no-main-page-title">Skill Set</h1>
        </div>
      </div>
    </div>
  );
};
export default SkillSetHeader;
