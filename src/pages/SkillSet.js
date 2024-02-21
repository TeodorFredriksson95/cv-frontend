import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import SkillSetHeader from "../components/SkillSet/Header/SkillSetHeader";
import TimeLineWebDev from "../components/TimeLineWebDev/TimeLineWebDev";
import SkillSetContentSection from "../components/SkillSet/ContentSection/SkillSetContentSection";
import { Helmet } from "react-helmet";

const SkillSet = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Skill Set</title>
        <meta name="description" content="Explore my tech stack and the tools that empower my development projects. From front-end to back-end, see the technologies I use to bring ideas to life." />
      </Helmet>
      <SkillSetHeader />
      <SkillSetContentSection />
    </div>
  );
};
export default SkillSet;
