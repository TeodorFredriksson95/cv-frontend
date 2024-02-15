import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import ApiPageHeader from "../components/ApiPage/ApiPageHeader";
import TimeLineWebDev from "../components/TimeLineWebDev/TimeLineWebDev";

const ApiPage = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <ApiPageHeader />
      <TimeLineWebDev />
    </div>
  );
};
export default ApiPage;