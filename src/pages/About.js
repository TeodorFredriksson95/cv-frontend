import React, { useEffect, useState, useRef } from 'react';

const About = () => {
const fixedContainerRef = useRef(); // Ref for the container
const [isFixed, setIsFixed] = useState(false);
const navbarHeight = 53.3; // Replace 50 with the actual height of your navbar


  useEffect(() => {
    const navbarItems = document.querySelectorAll('.navbar a'); // Select all links within .navbar

    navbarItems.forEach(item => {
      if (!item.matches(':hover, :focus')) {
          item.classList.remove('scroll-active');

      }
    });
    
    const fixedContainerInitialTop = fixedContainerRef.current.offsetTop;

    let img1 = document.querySelector(".townimg1");
    let img2 = document.querySelector(".townimg2");
    let img3 = document.querySelector(".townimg3");
    
const onScroll = () => {
  
  const scrollPosition = window.scrollY;
  const fixedContainer = fixedContainerRef.current;

  // if (scrollPosition + navbarHeight >= fixedContainerInitialTop) {
  //   setIsFixed(true);
  // } else {
  //   setIsFixed(false);
  // }

    if (scrollPosition < 200) {
      img1.classList.remove("active");
      img2.classList.remove("active");
      img3.classList.remove("active");
      setIsFixed(false);
    }
    else if (scrollPosition >= 200 && scrollPosition < 500) {
          setIsFixed(true);
    img1.classList.add("active");
    img2.classList.remove("active");
    img3.classList.remove("active");
  } else if (scrollPosition >= 500 && scrollPosition < 1000) {
    img1.classList.remove("active");
    img2.classList.add("active");
    img3.classList.remove("active");
  } else if (scrollPosition >= 1000 && scrollPosition < 1500) {
    img2.classList.remove("active");
    img3.classList.add("active");
  } else if (scrollPosition >= 1500) {
    img3.classList.add("active");
  }
};

    // window.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll);

    return () => {
      // window.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    }

  }, []);
  return (
    <div className="content-page">

    <div className={`fixedcontainer ${isFixed ? 'fixed' : ''}`} ref={fixedContainerRef}>

      <div className='absolutecontainer'>

        <div className='line1'></div>
        <div className='overflowcontainer'>

        <img src='town.png' className={`townimg1`} />
        <img src='town.png' className={`townimg2`} />
        <img src='town.png' className={`townimg3`} />
        <img src='town.png' className={`townimg4`} />

        </div>
        <div className='text-container'>Your Text Here</div> {/* Add this line */}

      </div>
    </div>
    </div>
  )
}
export default About;
