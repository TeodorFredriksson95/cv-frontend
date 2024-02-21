import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import ContactHeader from "../components/Contact/Header/ContactHeader";
import TimeLineWebDev from "../components/TimeLineWebDev/TimeLineWebDev";
import ContactForm from "../components/Contact/ContactForm/ContactForm";
import { Helmet } from "react-helmet";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Connect for freelance projects, career opportunities, or website feedback. Your gateway to collaborating and shaping the future with innovative solutions." />
      </Helmet>
      <ContactHeader />
      <ContactForm />
    </div>
  );
};
export default Contact;
