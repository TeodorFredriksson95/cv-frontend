import "./AboutContentSection.css";
import React, { useEffect, useState, useRef } from "react";

import ReachOutButton from "../../ReachOutButton/ReachOutButton";
import ViewSkillsetButton from "../../ViewSkillsetButton/ViewSkillsetButton";

const AboutContentSection = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <div className="content-section-container">
        <div className="entry-flex">
          <div className="profile-img-container">
            <img src="profileimg.png" />
          </div>
          <div className="about-entry-text-container">
            <p className="remove-browser-margin">
              My name is Teodor Fredriksson, and i’m a junior developer. If you made it all the way to the end of the main page, then you can probably already guess that I like story telling.
              <span className="entry-text-separator">
                My mother, the journalist, did her best to teach me at a young age the proper ways to build articles that captivates the reader. With an inherent need for creative outlet, text based
                mediums have thus for a long time served as such.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="main-text">
        <p>
          <span className="block-separator-one">But why is that relevant to the fact that I’m an unemployed developer, hoping to catch your interest?</span>
          It is the need for creative outlets that I wish to emphasize here. The need to solve problems. Puzzles. Creating something that fills a void and where I can leave my own subtle mark.{" "}
          <span className="block-separator">It is, and has always been, what drives me forward in both my social and professional life.</span>I have laid down the pen and picked up the compiler, but
          the desire remains. What was once a fleeting hobby in my youth (programming) has now, through what I can only describe as a series of very fortunate coincidences, become the next big
          exciting adventure in my life.
          <span className="block-separator">
            To me, programming is the definition of freedom. The freedom to work where I want. The freedom to live where I want. Unshackled by the confines of a single business perspective, I get to
            dive into many different aspects of life and engage in them - all for me to understand the need, in order to deliver a great product./
          </span>
          If you were to ask me which I prefer - backend or frontend - I wouldn’t be able to decide. The best way I can describe it is this;
          <span className="inline-text">
            <span className="block-separator">
              -A Cadillac, Bentley or Lamborghini is often a very beautiful car with the ability to turn heads. But take away the engine and the appeal quickly evaporates.
            </span>
            <span className="block-separator">-Now put the engine back, but strip the car of everything but it’s chassis and ask “who wants a ride?”.</span>
          </span>
          Now this is a crude analogy, and having studied as a car mechanic in my teens, I know plenty who’d prefer one over the other.
          <span className="block-separator">But to me, it is the combination of the two, the engine and the exterior, the backend and the frontend, what makes the end result beautiful.</span>Having
          said that I feel obligated to also mention that I view the road to becoming a genuine fullstack developer his salt a long and diverse one, and I thoroughly enjoy deep diving into both
          concepts.
          <span className="block-separator">
            I’m ironically finding it impossible to write an introduction to myself without mentioning my former place of work - ICA. ICA is a Swedish supermarket franchise, and it served as my place
            of work for more than six years.
          </span>
          I find it important to mention this as what I learned from working there is an experience that has heavily shaped many of my professional traits. Ultimately I think this helps me convey what
          I think you, a potential employer, would find interesting in a potential candidate.
          <span className="block-separator">Service. Efficiency. Results. Improvement. And to me, above all - teamwork.</span>The team I worked with lived and breathed above mentioned. Service to the
          customer was everything - no customer, no store. And like any business, efficiency was key to positive results. But how do we know if the result is better or worse? How do we know if we’re
          being more efficient? How do we know if we’re maintaining a top end customer experience? Trial, error, analyses and highlighting the positives, working them into a routine. But how on God’s
          good green earth was any of this possible when aggressively pushed for time? <span className="block-separator">Teamwork.</span>For a long time, my progress was driven by my competitive
          spirit. I wanted to outdo myself. I wanted to outdo everyone else. Teamwork was always a part of my day, but the meaning of the word and the true power behind it was somewhat lost to me. But
          as I grew, and my experience and responsibilities increased, so too did the difficulty of achieving improvement by doing things “my way”.{" "}
          <span className="block-separator">
            Knowing my own potential and capabilities, it was a struggle in the beginning to give up control and trust in someone else. But in doing so, I found the pure joy of seeing ones own
            teachings affect someone else and through the filter of their own personality manifest as something much greater than I ever could’ve thought of myself. Of everything I am proud of, and
            happy to have achieved, I rank the realization of what true teamwork can do and my ability to contribute to it among the highest.
          </span>
          And this is what I bring to the table. A curiosity to learn more, not just about my own everyday tasks, but of the culture that spawns the need for a product. A desire to create. A hunger to
          feel that sensational feeling of connection and bliss when I feel I’ve not only helped someone bring their A-game, but hopefully made them feel happier in the process. A sincere respect for
          the possibilities that open up when ego is set aside and great minds work towards a common goal.{" "}
          <span className="block-separator">
            And for the sake of being redundantly clear - I’m on persistent lookout for the role as a junior software developer at a company that values above mentioned traits. A place with room for
            creativity and happiness. A place where professional, personal growth and positive increase to the bottom line are seen as connected.
          </span>
        </p>
      </div>
      <div className="about-buttons-container">
        <div className="reach-button">
          <ReachOutButton />
        </div>
        <div className="viewskills-button">
          <ViewSkillsetButton />
        </div>
      </div>
    </div>
  );
};
export default AboutContentSection;
