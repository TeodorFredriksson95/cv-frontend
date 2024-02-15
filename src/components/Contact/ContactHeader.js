import "./ContactHeader.css";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../Navbar/Navbar";

const ContactHeader = () => {
  useEffect(() => {}, []);
  return (
    <div className="contact-header">
      <Navbar />

      <div className="about-hero-content clearfix">
        <div className="about-hero-title">
          <h1 className="about-title">Contact</h1>
        </div>
      </div>
    </div>
  );
};
export default ContactHeader;
