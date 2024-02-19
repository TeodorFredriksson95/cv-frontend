import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import ContactHeader from "../components/Contact/Header/ContactHeader";
import TimeLineWebDev from "../components/TimeLineWebDev/TimeLineWebDev";
import ContactForm from "../components/Contact/ContactForm/ContactForm";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ContactHeader />
      <ContactForm />
    </div>
  );
};
export default Contact;
