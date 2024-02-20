import React, { useEffect, useState, useRef } from "react";
import PrivacyPolicyHeader from "../components/PrivacyPolicy/PrivacyPolicyHeader/PrivacyPolicyHeader";
import PrivacyPolicyContent from "../components/PrivacyPolicy/PrivacyPolicyContent/PrivacyPolicyContent";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PrivacyPolicyHeader />
      <PrivacyPolicyContent />
    </div>
  );
};
export default PrivacyPolicy;
