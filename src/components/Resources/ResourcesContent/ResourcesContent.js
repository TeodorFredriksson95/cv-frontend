import "./ResourcesContent.css";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../Navbar/Navbar";

const ResourcesContent = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <div className="contact-text-container">
        <p className="narrator-paragraph-text">
          On this website I've used several free resources, primarily in the form of images. Below you can see fair credit for each resource used. Click the links to check out the authors product
          page.
        </p>
      </div>
      <div className="image-credit-container"></div>
    </div>
  );
};
export default ResourcesContent;
