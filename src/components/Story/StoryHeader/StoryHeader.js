import "./StoryHeader.css";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../Navbar/Navbar";

const StoryHeader = () => {
  useEffect(() => {}, []);
  return (
    <div className="story-header">
      <Navbar />

      <div className="about-hero-content clearfix">
        <div className="about-hero-title">
          <h1 className="about-title no-main-page-title">Story</h1>
        </div>
      </div>
    </div>
  );
};
export default StoryHeader;
