import React, { useEffect, useState, useRef } from "react";
import ApiPageHeader from "../components/ApiPage/Header/ApiPageHeader";

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ApiPageHeader />
    </div>
  );
};
export default Resources;
