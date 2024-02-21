import React, { useEffect, useState, useRef } from "react";
import CreditsHeader from "../components/Credits/Header/CreditsHeader";
import CreditsContent from "../components/Credits/CreditsContent/CreditsContent";

const Credits = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <CreditsHeader />
      <CreditsContent />
    </div>
  );
};
export default Credits;
