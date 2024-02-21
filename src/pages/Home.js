import HeroContent from "../components/HeroContent/HeroContent";
import TimelineBorn from "../components/TimeLineBorn/TimelineBorn";
import TimeLineWebDev from "../components/TimeLineWebDev/TimeLineWebDev";
import FixedTimeLine from "../components/TimeLine/Timeline";
import ScriptVsDev from "../components/ScriptVsDev/ScriptVsDev";
import WorkExperience from "../components/WorkExperience/WorkExperience";
import ShiftingDirections from "../components/ShiftingDirections/ShiftingDirections";
import TechStack from "../components/TechStack/TechStack";

import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const navbarItems = document.querySelectorAll(".navbar a"); // Select all links within .navbar

    const onScroll = () => {
      const scrollPosition = window.scrollY;

      navbarItems.forEach((item) => {
        if (!item.matches(":hover, :focus")) {
          if (scrollPosition >= 2100 && scrollPosition <= 2499) {
            item.classList.add("scroll-active");
          } else {
            item.classList.remove("scroll-active");
          }
        }
      });
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div className="content-page">
      <Helmet>
        <title>Home</title>
        <meta property="og:image" content="https://www.unidevweb.com/weblinkimage.jpg" />
        <meta name="description" content="Embark on a journey with me from childhood dreams to becoming a passionate junior developer, where every line of code is a step towards creation." />
      </Helmet>
      <HeroContent />
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

export default Home;
