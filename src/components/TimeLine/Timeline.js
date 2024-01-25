import React, { useEffect, useState, useRef } from 'react';
import './TimeLine.css'

const FixedTimeLine = () => {
const fixedContainerRef = useRef(); // Ref for the container
const [isFixed, setIsFixed] = useState(false);

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.textContent = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  const updateCounter = (id, targetValue) => {
    const obj = document.getElementById(id);
    const currentValue = parseInt(obj.textContent, 10);
    if (currentValue !== targetValue) {
      animateValue(obj, currentValue, targetValue, 1000);
    }
  }

  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  } 

const handleScroll = () => {
const width = window.innerWidth
console.log(width);

let img1 = document.querySelector(".townimg1");
let img2 = document.querySelector(".townimg2");
let img3 = document.querySelector(".townimg3");


const scrollPosition = window.scrollY;
console.log(scrollPosition)
  if (scrollPosition < 500) {
      setIsFixed(false);
  }

  if (scrollPosition < 200) {
    img1.classList.remove("active");
    img2.classList.remove("active");
    img3.classList.remove("active");
  }
  else if (scrollPosition >= 600 && scrollPosition < 940) {
        setIsFixed(true);
        updateCounter("value", 1995);
    

  img1.classList.add("active");
  img2.classList.remove("active");
  img3.classList.remove("active");
} else if (scrollPosition >= 940 && scrollPosition < 1400) {
  setIsFixed(true);
   updateCounter("value", 2009);

  img1.classList.remove("active");
  img2.classList.add("active");
  img3.classList.remove("active");
} else if (scrollPosition >= 1400 && scrollPosition <= 2000) {
      img2.classList.remove("active");
      img3.classList.remove("active");
      img1.classList.remove("active");
      setIsFixed(false);

} else if (scrollPosition >= 2000 && scrollPosition < 4150) {
  setIsFixed(true);
  updateCounter("value", 2014);
  img3.classList.add("active");
  img2.classList.remove("active");
  img1.classList.remove("active");
} else if (scrollPosition >= 4150) {
  setIsFixed(false);
  updateCounter("value", 2021);
  img2.classList.remove("active");
  img1.classList.remove("active");
  img3.classList.remove("active");
} 
}

  useEffect(() => {

    const debouncedOnScroll = debounce = () => (handleScroll(), 100);
    handleScroll();

    window.addEventListener("scroll", debouncedOnScroll);
    
    return () => {
      window.removeEventListener("scroll", debouncedOnScroll);
    }

  }, []);
  return (
    <div className={`fixedcontainer ${isFixed ? 'fixed' : ''}`} ref={fixedContainerRef}>

      <div className='absolutecontainer'>

        <div className='line1'></div>
        <div className='overflowcontainer'>

        <img src='treeoflifeedit7.png' className={`townimg1`} />
        <img src='town.png' className={`townimg2`} />
        <img src='webglobeedit2.png' className={`townimg3`} />
        <img src='town.png' className={`townimg4`} />

        </div>
        <div className='text-container' id="value">1995</div>

      </div>
    </div>
  )
}
export default FixedTimeLine;
