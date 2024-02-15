import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import ContactHeader from "../components/Contact/ContactHeader";
import TimeLineWebDev from "../components/TimeLineWebDev/TimeLineWebDev";

const Contact = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <ContactHeader />
      <TimeLineWebDev />
    </div>
  );
};
export default Contact;
