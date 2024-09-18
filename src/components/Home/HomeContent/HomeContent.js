import { NavLink } from "react-router-dom";
import "./HomeContent.css";
import React, { useEffect } from "react";

const HomeContent = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <div className="home-content-container">
        <h4 className="section-title-h4 docs-sub-title">
          This website, and the API project in particular, has been terminated. The website will remain for demonstrational purposes but nothing else. All the best! <br>/Teo</br>
        </h4>
        <div className="grid-container">
          <NavLink to="/story" className="active-link" activeclassname="active">
            <div className="box b1">
              <div className="img-container">
                <img src="/thumbnails/storyheader.webp" alt="An open book with a mountain rising from the pages" />
              </div>
              <p className="narrator-paragraph-text no-margin-top">Story</p>
            </div>
          </NavLink>
          <NavLink to="/skillset" className="active-link" activeclassname="active">
            <div className="box b2">
              <div className="img-container">
                <img src="/thumbnails/skillheaderedit6.webp" alt="A hand reaching for a touchpad" />
              </div>
              <p className="narrator-paragraph-text no-margin-top">Skill Set</p>
            </div>
          </NavLink>
          <NavLink to="/contact" className="active-link" activeclassname="active">
            <div className="box b4">
              <div className="img-container">
                <img src="/thumbnails/contactheaderedit3.webp" alt="A set of hands lightly touching a world globe" />
              </div>
              <p className="narrator-paragraph-text no-margin-top">Contact</p>
            </div>
          </NavLink>
          <NavLink to="/about" className="active-link" activeclassname="active">
            <div className="box b3">
              <div className="img-container">
                <img src="/thumbnails/aboutheaderedit3.webp" alt="A mechanical head in profile" />
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
