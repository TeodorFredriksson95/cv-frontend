import "./ViewSkillsetButton.css";
import { NavLink } from "react-router-dom";

import React, { useEffect, useState } from "react";

const ViewSkillsetButton = () => {
  return (
    <NavLink to="/skillset" className="reach-out-link">
      <div className="view-skills-button">
        <p className="view-skills-button-text">View Skill Set</p>
      </div>
    </NavLink>
  );
};

export default ViewSkillsetButton;
