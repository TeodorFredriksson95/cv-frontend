import "./ReachOutButton.css";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";

const ReachOutButton = () => {
  return (
    <NavLink to="/contact" className="reach-out-link">
      <div className="reach-out-button">
        <p className="reach-out-button-text">Reach Out</p>
      </div>
    </NavLink>
  );
};

export default ReachOutButton;
