import { NavLink } from "react-router-dom";
import "./HomeContent.css";
import React, { useEffect, useState, useRef } from "react";

const HomeContent = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <div className="home-content-container">
        <div class="grid-container">
          <NavLink to="/story" className="active-link" activeclassname="active">
            <div class="box b1">
              <div class="img-container">
                <img src="/thumbnails/storyheader.webp" alt="Description1" />
              </div>
              <p className="narrator-paragraph-text no-margin-top">Story</p>
            </div>
          </NavLink>
          <NavLink to="/skillset" className="active-link" activeclassname="active">
            <div class="box b2">
              <div class="img-container">
                <img src="/thumbnails/skillheaderedit6.webp" alt="Description1" />
              </div>
              <p className="narrator-paragraph-text no-margin-top">Skill Set</p>
            </div>
          </NavLink>
          <NavLink to="/contact" className="active-link" activeclassname="active">
            <div class="box b4">
              <div class="img-container">
                <img src="/thumbnails/contactheaderedit3.webp" alt="Description1" />
              </div>
              <p className="narrator-paragraph-text no-margin-top">Contact</p>
            </div>
          </NavLink>
          <NavLink to="/about" className="active-link" activeclassname="active">
            <div class="box b3">
              <div class="img-container">
                <img src="/thumbnails/aboutheaderedit3.webp" alt="Description1" />
              </div>
              <p className="narrator-paragraph-text no-margin-top">About</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default HomeContent;
