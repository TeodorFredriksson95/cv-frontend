import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const navbarItems = document.querySelectorAll('.navbar a'); // Select all links within .navbar

    navbarItems.forEach(item => {
      if (!item.matches(':hover, :focus')) {
          item.classList.remove('scroll-active');
      }
    });
    
  },[])

    return <h1>Contact Me</h1>;
  };
  
  export default Contact;