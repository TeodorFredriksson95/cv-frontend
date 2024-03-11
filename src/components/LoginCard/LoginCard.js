import "./LoginCard.css";
import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";

const LoginCard = () => {
  useEffect(() => {}, []);
  return (
    <div className="contact-header">
      <Navbar />

      <div className="about-hero-content clearfix">
        <div className="about-hero-title">
          <h1 className="about-title no-main-page-title">Contact</h1>
        </div>
      </div>
    </div>
  );
};
export default LoginCard;
