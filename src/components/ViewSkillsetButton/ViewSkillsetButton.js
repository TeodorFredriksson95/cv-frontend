import "./ViewSkillsetButton.css";
import { NavLink } from "react-router-dom";

import React, { useEffect, useState } from "react";

const ViewSkillsetButton = () => {
  return (
    <div className="view-skills-button">
      <NavLink to="/skillset" className="reach-out-link">
        <p className="view-skills-button-text">View Skill Set</p>/
      </NavLink>
    </div>
  );
};

export default ViewSkillsetButton;
