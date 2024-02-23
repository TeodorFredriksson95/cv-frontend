import HeroContent from "../../HeroContent/HeroContent";
import TimelineBorn from "../../TimeLineBorn/TimelineBorn";
import TimeLineWebDev from "../../TimeLineWebDev/TimeLineWebDev";
import FixedTimeLine from "../../TimeLine/Timeline";
import ScriptVsDev from "../../ScriptVsDev/ScriptVsDev";
import WorkExperience from "../../WorkExperience/WorkExperience";
import ShiftingDirections from "../../ShiftingDirections/ShiftingDirections";
import TechStack from "../../TechStack/TechStack";

import { useEffect } from "react";
import { Helmet } from "react-helmet";

const StoryContent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="content-page">
      <TimelineBorn />
      <TimeLineWebDev />
      <ScriptVsDev />
      <WorkExperience />
      <ShiftingDirections />
      <TechStack />
      {/* 

<FixedTimeLine /> 

      
      */}
    </div>
  );
};

export default StoryContent;
