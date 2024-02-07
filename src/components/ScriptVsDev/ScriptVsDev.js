import { useRef, useEffect } from "react";
import createObserver from "../../util/createObserver";

import "./ScriptVsDev.css";

const ScriptVsDev = () => {
  const scriptCombatant = useRef();
  const devCombatant = useRef();
  const versusImage = useRef();
  const scriptPara1 = useRef();
  const scriptPara2 = useRef();
  const scriptPara3 = useRef();

  useEffect(() => {
    createObserver(scriptCombatant, "activate", 0.6, true);
    createObserver(devCombatant, "activate", 0.9, true);
    createObserver(versusImage, "activate", 0.8, true);
    createObserver(scriptPara1, "activate", 0.8, true);
    createObserver(scriptPara2, "activate", 0.8, true);
    createObserver(scriptPara3, "activate", 0.8, true);
  }, []);
  return (
    <div>
      <div className="versus-div-container">
        <div className="combatant-container script-combatant" ref={scriptCombatant}>
          <h3 className="section-title-h3">&lt;Script&gt;</h3>
          <p className="narrator-paragraph-text">//Your script here..</p>
          <h3 className="section-title-h3">&lt;/Script&gt;</h3>
        </div>
        <div className="versus-logo-container" ref={versusImage}>
          <img src="Versusedit3.png" />
        </div>
        <div className="combatant-container dev-combatant" ref={devCombatant}>
          <h3 className="section-title-h3">
            Young<span className="dev-text-block">Dev</span>
          </h3>
        </div>
      </div>
      <div className="versus-script-tag-paragraph">
        <p className="narrator-paragraph-text script-para-1" ref={scriptPara1}>
          The time had come for a storefront to be implemented. The boy was somewhat restrained as he looked upon this new <span className="word-highlight-turq">&lt;script&gt;</span> tag. But he knew
          all things must end - even his own trepidation. And so he decided to charge the problem head on like never before.
          <br />
          <br />
          Some would’ve called him a natural, the way he handled the copy paste mechanics.
        </p>
      </div>
      <div className="versus-script-ending">
        <p className=" narrator-paragraph-text script-para-2" ref={scriptPara2}>
          Alas, the errors of unknown that washed over the young developer proved too much for his mind to handle and he{" "}
          <span className="word-highlight-turq">
            <br></br>quit...
          </span>
        </p>
      </div>
      <div className="versus-script-cliffhanger">
        <h2 className="continuations for-a-time" ref={scriptPara3}>
          <span>.</span>
          <span>.</span>
          <span>.</span>
          <span>f</span>
          <span>o</span>
          <span>r </span>
          <span>a </span>
          <span>t</span>
          <span>i</span>
          <span>m</span>
          <span>e</span>
        </h2>
      </div>
    </div>
  );
};

export default ScriptVsDev;
