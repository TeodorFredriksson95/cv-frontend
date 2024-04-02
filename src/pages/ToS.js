import React, { useEffect, useState, useRef } from "react";
import PrivacyPolicyHeader from "../components/PrivacyPolicy/PrivacyPolicyHeader/PrivacyPolicyHeader";
import PrivacyPolicyContent from "../components/PrivacyPolicy/PrivacyPolicyContent/PrivacyPolicyContent";
import { Helmet } from "react-helmet";
import TermsOfServiceHeader from "../components/TermsOfService/Header/TermsOfServiceHeader";

const ToS = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Terms of Service</title>
        <meta name="description" content="Terms of service. Learn what is within your rights as a consumer of the Unidevweb API." />
      </Helmet>
      <TermsOfServiceHeader />
    </div>
  );
};
export default ToS;
