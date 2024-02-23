import { useEffect } from "react";
import { Helmet } from "react-helmet";
import StoryHeader from "../components/Story/StoryHeader/StoryHeader";
import StoryContent from "../components/Story/StoryContent/StoryContent";

const Story = () => {
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
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Embark on a journey with me from childhood dreams to becoming a passionate junior developer, where every line of code is a step towards creation." />
      </Helmet>
      <StoryHeader />
      <StoryContent />
      {/* 

<FixedTimeLine /> 

      
      */}
    </div>
  );
};

export default Story;
