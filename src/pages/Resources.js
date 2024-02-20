import React, { useEffect, useState, useRef } from "react";
import ApiPageHeader from "../components/ApiPage/Header/ApiPageHeader";
import ResourcesHeader from "../components/Resources/Header/ResourcesHeader";
import ResourcesContent from "../components/Resources/ResourcesContent/ResourcesContent";

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ResourcesHeader />
      <ResourcesContent />
    </div>
  );
};
export default Resources;
