import React, { useEffect, useState, useRef } from "react";
import PrivacyPolicyHeader from "../components/PrivacyPolicy/PrivacyPolicyHeader/PrivacyPolicyHeader";
import PrivacyPolicyContent from "../components/PrivacyPolicy/PrivacyPolicyContent/PrivacyPolicyContent";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Your privacy matters. Learn how I respect user rights, adhere to data protection laws, and responsibly manage the information collected for meaningful engagement."
        />
      </Helmet>
      <PrivacyPolicyHeader />
      <PrivacyPolicyContent />
    </div>
  );
};
export default PrivacyPolicy;
