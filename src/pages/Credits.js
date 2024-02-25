import React, { useEffect, useState, useRef } from "react";
import CreditsHeader from "../components/Credits/Header/CreditsHeader";
import CreditsContent from "../components/Credits/CreditsContent/CreditsContent";
import { Helmet } from "react-helmet";

const Credits = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Credits</title>
        <meta name="description" content="Acknowledging the creators behind the free resources that enhance this digital spaces. Links to images and assets that bring vibrancy to my projects." />
      </Helmet>
      <CreditsHeader />
      <CreditsContent />
    </div>
  );
};
export default Credits;
