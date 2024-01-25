import HeroContent from "../components/HeroContent";
import TimelineBorn from "../components/TimelineBorn";
import TimeLineWebDev from "../components/TimeLineWebDev";
import FixedTimeLine from "../components/Timeline";
import ScriptVsDev from "../components/ScriptVsDev";
import WorkExperience from "../components/WorkExperience";
import ShiftingDirections from "../components/ShiftingDirections";

import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const navbarItems = document.querySelectorAll('.navbar a'); // Select all links within .navbar
    
    const onScroll = () => {
      const scrollPosition = window.scrollY;

      navbarItems.forEach(item => {
        if (!item.matches(':hover, :focus')) {
          if (scrollPosition >= 1595 && scrollPosition <= 2000) {
            item.classList.add('scroll-active');
          } else {
            item.classList.remove('scroll-active');
          }
        }
      });
    };
    window.addEventListener("scroll", onScroll);

    return () => {  
      window.removeEventListener("scroll", onScroll);
    }
  }, []);
    return (
      <div className="content-page">
        
        <HeroContent />
        <FixedTimeLine />
        <TimelineBorn />
        <TimeLineWebDev />
        <ScriptVsDev />
        <WorkExperience />
        <ShiftingDirections />
      </div>
    )
  };
  
  export default Home;