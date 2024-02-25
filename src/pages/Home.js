import { useEffect } from "react";
import HomeHeader from "../components/Home/HomeHeader/HomeHeader";
import HomeContent from "../components/Home/HomeContent/HomeContent";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="content-page">
      <HomeHeader />
      <HomeContent />
    </div>
  );
};

export default Home;
