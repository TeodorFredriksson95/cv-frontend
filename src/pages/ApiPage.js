import { useEffect } from "react";

const ApiPage = () => {
  useEffect(() => {
    const navbarItems = document.querySelectorAll(".navbar a"); // Select all links within .navbar

    navbarItems.forEach((item) => {
      if (!item.matches(":hover, :focus")) {
        item.classList.remove("scroll-active");
      }
    });
  }, []);

  return (
    <div className="content-page">
      <div>
        <h1 className="section-title-h1">Api Page</h1>;
      </div>
    </div>
  );
};

export default ApiPage;
