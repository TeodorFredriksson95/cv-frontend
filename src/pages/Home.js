import { useEffect } from "react";
import HomeHeader from "../components/Home/HomeHeader/HomeHeader";
import HomeContent from "../components/Home/HomeContent/HomeContent";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="content-page">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Take part of a junior developer's ambition to grow, and become part of the growth yourself! Explore the public API and the story behind the making." />
      </Helmet>
      <HomeHeader />
      <HomeContent />
    </div>
  );
};

export default Home;
