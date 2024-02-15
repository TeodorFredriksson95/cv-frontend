import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import SkillSetHeader from "../components/SkillSet/SkillSetHeader";
import TimeLineWebDev from "../components/TimeLineWebDev/TimeLineWebDev";

const SkillSet = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <SkillSetHeader />
      <TimeLineWebDev />
    </div>
  );
};
export default SkillSet;
