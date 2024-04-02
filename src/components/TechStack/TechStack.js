import "./TechStack.css";
import { Icon } from "@iconify-icon/react";
import { useEffect, useState, useRef } from "react";

import createObserver from "../../util/createObserver";
import ReachOutButton from "../ReachOutButton/ReachOutButton";

const TechStack = () => {
  const [iconSize, setIconSize] = useState({ width: 100, height: 100 });

  let iconWidth = 100;
  let iconHeight = 100;

  const icon_and_para1 = useRef();
  const icon_and_para2 = useRef();
  const icon_and_para3 = useRef();
  const icon_and_para4 = useRef();
  const icon_and_para5 = useRef();

  const tech_stack_para1 = useRef();
  const tech_stack_para2 = useRef();

  const searching = useRef();

  useEffect(() => {
    const updateIconSize = () => {
      if (window.innerWidth >= 320 && window.innerWidth <= 379) {
        const newSize = { width: 40, height: 40 };
        setIconSize(newSize);
      } else if (window.innerWidth >= 480 && window.innerWidth <= 599) {
        const newSize = { width: 60, height: 60 };
        setIconSize(newSize);
      } else if (window.innerWidth >= 600 && window.innerWidth <= 799) {
        const newSize = { width: 70, height: 70 };
        setIconSize(newSize);
      } else if (window.innerWidth >= 800 && window.innerWidth <= 1023) {
        const newSize = { width: 85, height: 85 };
        setIconSize(newSize);
      } else if (window.innerWidth >= 1024 && window.innerWidth <= 1279) {
        const newSize = { width: 105, height: 105 };
        setIconSize(newSize);
      } else if (window.innerWidth >= 1280 && window.innerWidth <= 1439) {
        const newSize = { width: 130, height: 130 };
        setIconSize(newSize);
      } else if (window.innerWidth >= 1440 && window.innerWidth <= 1679) {
        const newSize = { width: 145, height: 145 };
        setIconSize(newSize);
      } else if (window.innerWidth >= 1680 && window.innerWidth <= 1919) {
        const newSize = { width: 160, height: 160 };
        setIconSize(newSize);
      } else if (window.innerWidth >= 1920) {
        const newSize = { width: 180, height: 180 };
        setIconSize(newSize);
      } else {
        const newSize = { width: 40, height: 40 };
        setIconSize(newSize);
      }
    };
    updateIconSize();
    window.addEventListener("resize", updateIconSize);
    createObserver(icon_and_para1, "activate", 1, true);
    createObserver(icon_and_para2, "activate", 1, true);
    createObserver(icon_and_para3, "activate", 1, true);
    createObserver(icon_and_para4, "activate", 1, true);
    createObserver(icon_and_para5, "activate", 1, true);

    createObserver(tech_stack_para1, "activate", 0.5, true);
    createObserver(tech_stack_para2, "activate", 0.8, true);

    createObserver(searching, "activate", 0.8, true);

    return () => window.removeEventListener("resize", updateIconSize);
  }, []);

  return (
    <div className="tech-stack-container">
      <div className="tech-container tech-1" ref={icon_and_para1}>
        <Icon width={`${iconSize.width}px`} height={`${iconSize.height}px`} icon="pajamas:api" id="api-icon" className="tech-icon" />
        <div className="text-overflow-container">
          <p className="tech-stack-text">He worked on APIs</p>
        </div>
      </div>
      <div className="tech-container tech-2" ref={icon_and_para2}>
        <Icon width={`${iconSize.width}px`} height={`${iconSize.height}px`} icon="gala:data" id="data-icon" className="tech-icon" />
        <div className="text-overflow-container">
          <p className="tech-stack-text">Databases</p>
        </div>
      </div>
      <div className="tech-container tech-3" ref={icon_and_para3}>
        <Icon width={`${iconSize.width}px`} height={`${iconSize.height}px`} icon="circum:mobile-3" id="mobile-icon" className="tech-icon" />
        <div className="text-overflow-container">
          <p className="tech-stack-text">Mobile Apps</p>
        </div>
      </div>
      <div className="tech-container tech-4" ref={icon_and_para4}>
        <Icon width={`${iconSize.width}px`} height={`${iconSize.height}px`} icon="mdi:application-brackets-outline" id="web-icon" className="tech-icon" />
        <div className="text-overflow-container">
          <p className="tech-stack-text">Web Apps</p>
        </div>
      </div>
      <div className="tech-container tech-5" ref={icon_and_para5}>
        <Icon width={`${iconSize.width}px`} height={`${iconSize.height}px`} icon="carbon:platforms" id="cross-platform-icon" className="tech-icon" />
        <div className="text-overflow-container">
          <p className="tech-stack-text">He even made some of them cross-platform</p>
        </div>
      </div>
      <div className="frameworks-container">
        <div className="frameworks-row1">
          <Icon width={`${iconSize.width}px`} height={`${iconSize.height}px`} icon="skill-icons:vscode-dark" className="tech-icon" />
          <Icon width={`${iconSize.width}px`} height={`${iconSize.height}px`} icon="skill-icons:javascript" className="tech-icon" />
          <Icon width={`${iconSize.width}px`} height={`${iconSize.height}px`} icon="skill-icons:react-dark" className="tech-icon" />
          <Icon width={`${iconSize.width}px`} height={`${iconSize.height}px`} icon="skill-icons:visualstudio-dark" className="tech-icon" />
          <Icon width={`${iconSize.width}px`} height={`${iconSize.height}px`} icon="skill-icons:dotnet" className="tech-icon" />
        </div>
        <div className="frameworks-row1">
          <Icon width={`${iconSize.width}px`} height={`${iconSize.height}px`} icon="iconoir:github" id="github" />
          <Icon width={`${iconSize.width}px`} height={`${iconSize.height}px`} icon="logos:firebase" className="tech-icon" />
          <Icon width={`${iconSize.width}px`} height={`${iconSize.height}px`} icon="skill-icons:godot-dark" className="tech-icon" />
          <Icon width={`${iconSize.width}px`} height={`${iconSize.height}px`} icon="skill-icons:prisma" className="tech-icon" />
          <Icon width={`${iconSize.width}px`} height={`${iconSize.height}px`} icon="devicon:xamarin" className="tech-icon" />
        </div>
      </div>
      <div className="beginning-of-the-end-container tech-stack-para1" ref={tech_stack_para1}>
        <p className="tech-stack-response-text-one response-paragraph">All of a sudden, the young man had graduated.</p>
        <img src="graduationhats.png" alt="Graduation hats thrown in the air" />
      </div>
      <div className="searching-container">
        <div className="tech-stack-para2" ref={tech_stack_para2}>
          <p className="tech-stack-response-text-one response-paragraph">And even though he has yet to find a company to call home, I know he’s still out there..</p>
        </div>
        <h2 className="section-title-h2 searching" ref={searching}>
          <span>.</span>
          <span>.</span>
          <span>.</span>
          <span>s</span>
          <span>e</span>
          <span>a</span>
          <span>r</span>
          <span>c</span>
          <span>h</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </h2>
        <div className="last-image-container">
          <div className="looking-for-dev-text-container">
            <p className="looking-for-dev-text hungry-dev">
              Are you looking for a developer, hungry to <span id="contribute">contribute</span> to your <span id="atmosphere">atmosphere</span> and <span id="atmosphere">progress</span>?
            </p>
            <div className="techstack-reach-out-button-container">
              <ReachOutButton />
            </div>
          </div>

          <div className="looking-for-dev-image-container">
            <img src="beforedawnpng3.png" id="last-img" alt="A man watching the sunrise" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
