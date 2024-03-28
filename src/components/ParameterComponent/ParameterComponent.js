import React, { useState } from "react";
import "./ParameterComponent.css";

const ParameterComponent = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const handleSectionClick = (sectionName) => {
    setExpandedSection(expandedSection === sectionName ? null : sectionName);
  };
  return (
    <div className="attribute-options-container">
      <div
        className="parameter-flex-container"
        onClick={() => {
          setIsOpen(!isOpen);
          handleSectionClick(title);
        }}
      >
        <h4 className="parameter clickable">{title}</h4>
        {expandedSection === title ? <span className="ep--arrow-down"></span> : <span className="ep--arrow-right"></span>}
      </div>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
};

export default ParameterComponent;
