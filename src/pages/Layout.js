import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
