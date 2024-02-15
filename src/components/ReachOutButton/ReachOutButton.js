import "./ReachOutButton.css";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";

const ReachOutButton = () => {
  return (
    <div className="reach-out-button">
      <NavLink to="/contact" className="reach-out-link">
        <p className="reach-out-button-text">Reach Out</p>
      </NavLink>
    </div>
  );
};

export default ReachOutButton;
