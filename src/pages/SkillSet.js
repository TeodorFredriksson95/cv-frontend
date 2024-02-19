import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import SkillSetHeader from "../components/SkillSet/Header/SkillSetHeader";
import TimeLineWebDev from "../components/TimeLineWebDev/TimeLineWebDev";
import SkillSetContentSection from "../components/SkillSet/ContentSection/SkillSetContentSection";

const SkillSet = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SkillSetHeader />
      <SkillSetContentSection />
    </div>
  );
};
export default SkillSet;
