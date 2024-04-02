import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import ApiPageHeader from "../components/ApiPage/Header/ApiPageHeader";
import TimeLineWebDev from "../components/TimeLineWebDev/TimeLineWebDev";

const ApiPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Docs</title>
        <meta name="description" content="Learn about the Unidevweb API and how you can integrate them into your own solutions." />
      </Helmet>
      <ApiPageHeader />
    </div>
  );
};
export default ApiPage;
