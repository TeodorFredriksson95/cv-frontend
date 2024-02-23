import "./HomeHeader.css";
import Navbar from "../../Navbar/Navbar";

const HomeHeader = () => {
  return (
    <div className="home-header">
      <Navbar />

      <div className="hero-content clearfix">
        <div className="hero-title">
          <h1 className="main-title">
            A Junior <span className="dev-journey-text-block"></span>Developers Journey
          </h1>
          <h4 className="section-title-h4">From zero to wannabe virtual life changing hero</h4>
        </div>
        <div className="logo">
          <img src="/cvlogoedit4png.png" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
