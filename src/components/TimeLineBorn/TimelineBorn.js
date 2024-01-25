import React, { useEffect, useRef } from "react";
import './TimeLineBorn.css'

const TimelineBorn = () => {
  const paragraphRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.1 } // Adjust as needed
    );

    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }

    return () => {
      if (paragraphRef.current) {
        observer.unobserve(paragraphRef.current);
      }
    };
  }, []);

  return (
    <div className="the-beginning-container">
    <img src="achildisbornedit3.png"/>
    <div className="narrator-paragraph-container" ref={paragraphRef}>
      <h1 className="section-title-h1">The <br/>Beginning</h1>
      <p className="narrator-paragraph-text">
        This young boy would spend his days like most others. Climbing trees,
        drawing, playing football - and doing short of nothing to avoid his math
        homework. All the while his desire to create things which he could claim
        his own and relate to, began to grow and intoxicated every fiber of his
        being.
      </p>
    </div>
    </div>
  );
};

export default TimelineBorn;
