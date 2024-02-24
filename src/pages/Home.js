import { useEffect } from "react";
import HomeHeader from "../components/Home/HomeHeader/HomeHeader";
import HomeContent from "../components/Home/HomeContent/HomeContent";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const navbarItems = document.querySelectorAll(".navbar a"); // Select all links within .navbar

    const onScroll = () => {
      const scrollPosition = window.scrollY;

      navbarItems.forEach((item) => {
        if (!item.matches(":hover, :focus")) {
          if (scrollPosition >= 2100 && scrollPosition <= 2499) {
            item.classList.add("scroll-active");
          } else {
            item.classList.remove("scroll-active");
          }
        }
      });
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div className="content-page">
      <HomeHeader />
      <HomeContent />
      {/* 

<FixedTimeLine /> 

      
      */}
    </div>
  );
};

export default Home;
