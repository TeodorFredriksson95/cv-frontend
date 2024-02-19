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
      <ApiPageHeader />
    </div>
  );
};
export default ApiPage;
